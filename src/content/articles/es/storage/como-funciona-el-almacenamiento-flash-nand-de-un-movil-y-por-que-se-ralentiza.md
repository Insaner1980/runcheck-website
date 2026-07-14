---
title: "Cómo funciona el almacenamiento flash NAND de un móvil y por qué se ralentiza"
description: "El almacenamiento de los móviles utiliza memoria flash NAND. Descubre por qué llenarlo perjudica al rendimiento, qué hacen TRIM y la recogida de basura y cómo mantener un buen rendimiento de storage I/O."
listSummary: "El almacenamiento de los móviles utiliza memoria flash NAND."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
Un móvil puede tener un SoC rápido, mucha RAM y aun así volverse torpe cuando el almacenamiento está casi lleno. Las aplicaciones tardan en abrirse. La cámara necesita un instante adicional para guardar una foto. Las actualizaciones se alargan más de lo razonable.

No siempre es culpa del procesador. A veces el cuello de botella es el almacenamiento.

## Qué hace la memoria flash NAND

Los móviles guardan aplicaciones, fotos, mensajes, cachés y datos del sistema en chips de memoria flash NAND soldados a la placa base. Un dispositivo vendido con 128 GB nunca deja los 128 GB completos para tus archivos, porque Android, las particiones del sistema, los datos de recuperación, el espacio reservado y la sobrecarga del sistema de archivos ocupan su parte.

La NAND guarda los datos como carga eléctrica dentro de celdas diminutas. Esas celdas se organizan en páginas, y las páginas se agrupan en bloques de borrado más grandes. La parte incómoda es esta: la NAND puede escribir en páginas vacías, pero no sobrescribir directamente una página que ya está en uso.

Para actualizar un dato, el controlador escribe la nueva versión en otro lugar, marca la página antigua como no válida y actualiza su tabla de correspondencias. Más tarde, durante el mantenimiento, reúne las páginas todavía válidas de un bloque, las mueve si hace falta y borra el bloque antiguo para poder reutilizarlo.

Ese proceso se llama garbage collection, o recogida de basura. Es normal. También es una de las razones por las que un móvil casi lleno funciona peor que el mismo dispositivo con espacio para respirar.

## Por qué el almacenamiento lleno se nota lento

Cuando quedan muchos bloques vacíos, escribir datos es fácil. El controlador elige una zona limpia y continúa.

Cuando el almacenamiento está cerca del límite, quedan menos bloques limpios. El controlador tiene que buscar espacio, mover datos válidos, borrar bloques y escribir después la información nueva. Ese trabajo interno adicional se denomina amplificación de escritura y puede provocar pequeñas pausas durante el uso diario.

Puedes notarlo al instalar aplicaciones, guardar vídeos, descargar actualizaciones o cambiar entre apps que mantienen cachés grandes. Un móvil con el 95 % del almacenamiento ocupado puede parecer mucho más viejo de lo que es.

La regla práctica es sencilla: intenta mantener libre al menos un 15-20 % del almacenamiento interno. No es una cifra mágica y cada controlador se comporta de forma distinta, pero ese margen da espacio de trabajo tanto a Android como al propio almacenamiento.

## TRIM, recogida de basura y tiempo de inactividad

Borrar un archivo no elimina al instante cada celda NAND que lo contenía. Android marca el archivo como eliminado en el sistema de archivos. El controlador todavía necesita saber qué bloques físicos puede limpiar.

TRIM proporciona esa señal. En Android, el mantenimiento se gestiona mediante `fstrim` y las tareas de almacenamiento que se ejecutan cuando el dispositivo está inactivo. El sistema indica qué bloques ya no hacen falta para que la recogida de basura pueda recuperarlos más tarde.

Por eso puede ayudar dejar el móvil cargando y sin usar después de una limpieza grande. Borras archivos, Android tiene ocasión de ejecutar el mantenimiento y el controlador dispone de tiempo para ordenar el espacio. No esperes un milagro en cinco minutos. Es una tarea de fondo.

No, no debes desfragmentar el almacenamiento del móvil. La desfragmentación estaba pensada para discos duros mecánicos. En memoria NAND solo genera escrituras innecesarias y no resuelve el problema real.

## SLC, MLC, TLC y QLC, sin complicaciones

Las celdas NAND pueden almacenar distintas cantidades de datos.

SLC guarda un bit en cada celda. Es rápida y duradera, pero demasiado cara para el almacenamiento habitual de un móvil.

MLC guarda dos bits. Fue más común en memorias de gama alta antiguas, aunque la NAND de mayor densidad la ha desplazado en gran medida.

TLC almacena tres bits en una celda. Es habitual en el almacenamiento de consumo moderno porque ofrece un equilibrio razonable entre coste, capacidad y velocidad para los móviles.

QLC guarda cuatro bits. Es más densa y barata por gigabyte, pero tiene menor resistencia al desgaste. Los fabricantes rara vez indican el tipo exacto de celda NAND de un móvil, así que no des por hecho qué lleva dentro solo por su capacidad.

Guardar más datos en cada celda exige medir el voltaje con mayor precisión y aplicar más corrección de errores. Ese es el intercambio. Los controladores modernos ocultan gran parte de la complejidad mediante wear leveling, ECC, espacio de reserva y cachés.

## UFS frente a eMMC importa más de lo que parece

La interfaz de almacenamiento importa tanto como la propia NAND.

Muchos móviles Android antiguos y económicos utilizan eMMC. Es una solución sencilla y barata, pero gestiona peor las cargas intensas. Los componentes eMMC 5.1 de Samsung, por ejemplo, anunciaban hasta 250 MB/s de lectura secuencial y 125 MB/s de escritura secuencial cuando se presentó esa generación.

UFS es el estándar más moderno para el almacenamiento de los móviles. Admite colas de comandos y funcionamiento full-duplex, de modo que las lecturas y escrituras se gestionan con más eficacia bajo carga. Los dispositivos con UFS 3.1 suelen anunciar lecturas secuenciales de unos 2.100 MB/s. UFS 4.0 duplicó esa cifra de referencia hasta 4.200 MB/s en el primer almacenamiento UFS 4.0 anunciado por Samsung.

Son cifras secuenciales obtenidas en las mejores condiciones, no una promesa de que todas las aplicaciones se abrirán el doble de rápido. La diferencia, aun así, existe. Un móvil barato con eMMC puede ir más lento al actualizar, instalar aplicaciones o hacer ráfagas de fotos aunque el procesador parezca aceptable sobre el papel.

## Cómo se manifiesta el desgaste del almacenamiento

La NAND se desgasta a medida que los bloques pasan por ciclos de programación y borrado. Los controladores distribuyen las escrituras para que una zona no se agote antes que las demás. Eso es el wear leveling, o nivelación del desgaste.

Con un uso normal, el desgaste suele tardar años en convertirse en un problema. La gente llena el almacenamiento, instala actualizaciones, graba vídeo y borra cachés mucho antes de que la resistencia de la NAND sea la principal causa de lentitud. Las cargas de escritura intensivas son distintas. Un dispositivo utilizado para registrar datos continuamente, grabar vídeo o hacer pruebas puede envejecer su almacenamiento con mayor rapidez.

Android no muestra a la mayoría de los usuarios un porcentaje claro del «estado del almacenamiento». Algunas herramientas de servicio de los fabricantes ofrecen más información, pero no de forma uniforme. El síntoma visible es menos preciso: instalaciones lentas, tiempos de guardado largos, retrasos al escribir archivos y mal rendimiento incluso después de liberar espacio y reducir la carga en segundo plano.

## Cómo mantener en buen estado el almacenamiento del móvil

Deja espacio libre. Es la respuesta aburrida y sigue siendo la mejor.

Evita instalar limpiadores que prometen aumentos de velocidad milagrosos. Muchos se limitan a borrar cachés que Android volverá a crear. Algunos, además, permanecen activos en segundo plano y generan más carga de la que eliminan.

Borra descargas antiguas, elimina las aplicaciones que no utilizas, saca del móvil los vídeos grandes y deja el dispositivo inactivo mientras carga después de una limpieza importante. Si admite una tarjeta SD, úsala para contenido multimedia y no para aplicaciones que necesiten operaciones rápidas de storage I/O.

Aplicaciones como runcheck pueden ayudar mostrando la presión de almacenamiento a lo largo del tiempo en vez de tratarla como una cifra aislada. Esa tendencia importa: si un móvil pasa poco a poco del 70 % al 94 % de ocupación, está explicando por sí solo por qué empieza a sentirse más lento.
