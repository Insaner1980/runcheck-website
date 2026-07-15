---
title: "Cómo comprobar el estado del almacenamiento en Android"
description: "El almacenamiento de Android se desgasta, pero la mayoría de los móviles no muestran un porcentaje sencillo de su estado. Esto es lo que puedes comprobar, qué significan las cifras y cuándo conviene preocuparse."
listSummary: "Evalúa el estado del almacenamiento mediante su tipo, velocidad y síntomas de fallo."
hub: "storage"
sourceNumber: 80
order: 2
tags: ["almacenamiento","android","limpieza","optimizacion","guia"]
locale: "es"
draft: false
---
---

¿Cómo puedes saber si el almacenamiento de tu móvil Android está en buen estado y no solo si le queda espacio libre? Resulta molesto, pero la mayoría de los dispositivos todavía no lo ponen fácil.

El estado del almacenamiento y el espacio disponible son problemas distintos. Un móvil puede tener 80 GB libres y aun así montar un chip NAND deteriorado. Otro casi lleno puede funcionar con lentitud aunque el hardware de almacenamiento esté perfectamente. Ambos problemas se confunden constantemente, así que empieza por separarlos.

## Qué desgasta el almacenamiento de un móvil

Los móviles Android utilizan almacenamiento flash NAND. Los modelos económicos han usado a menudo eMMC, mientras que los de gama media y alta suelen montar UFS. Ambos se desgastan mediante ciclos de programación y borrado. Cada vez que los datos se escriben, borran y vuelven a escribir, las celdas sufren una pequeña cantidad de desgaste.

El controlador reparte las escrituras por el chip mediante nivelación de desgaste. Por eso, un uso normal rara vez destruye pronto el almacenamiento. Guardar fotos, mensajes, actualizaciones de aplicaciones y páginas web no equivale a grabar vídeo de una cámara de seguridad durante todo el día.

La grabación intensiva de vídeo, instalar juegos constantemente, repetir restablecimientos de fábrica y mantener el móvil casi lleno someten el almacenamiento a más esfuerzo. El último punto importa porque el controlador dispone de menos bloques libres para la limpieza y la nivelación de desgaste. Funciona. Hasta que deja de hacerlo.

Para la mayoría, el almacenamiento no es la primera pieza que falla. La batería, la pantalla, el puerto USB-C o el fin del soporte de software suelen ser antes el motivo para cambiar de móvil. El estado del almacenamiento resulta más relevante en móviles reacondicionados y dispositivos económicos con mucho uso.

## El problema de las cifras sobre el estado del almacenamiento

No existe un ajuste universal de Android que diga "queda un 92 % de vida útil del almacenamiento", de la forma en que algunos Pixel recientes sí pueden mostrar información sobre el estado de la batería.

El framework de Android incluye una API de vida útil del almacenamiento que puede devolver el porcentaje estimado de vida restante del almacenamiento interno, o `-1` cuando no hay información disponible. El inconveniente es el acceso. En AOSP, esa API es de sistema y requiere `READ_PRIVILEGED_PHONE_STATE`, por lo que una aplicación normal de Google Play no suele poder utilizarla.

En algunas compilaciones de Pixel con Android 15 o posterior se ha mostrado información de almacenamiento mediante herramientas de diagnóstico o reparación, no como una pantalla estándar y universal de Ajustes. Samsung Members puede ejecutar un diagnóstico amplio en móviles Galaxy, pero no esperes que muestre un porcentaje claro de vida útil del chip NAND.

Android 17 tampoco convierte el estado del almacenamiento en un ajuste común para todos. Google lo publicó para la mayoría de los Pixel compatibles el 16 de junio de 2026, y cada fabricante lo integrará después en su propia capa y en los modelos que decida admitir. Las diferencias entre marcas siguen siendo importantes.

## Comprueba primero el tipo de almacenamiento

Antes de ejecutar una prueba de velocidad, averigua qué tipo de almacenamiento tiene el móvil. Consulta la ficha técnica del fabricante o utiliza una aplicación de información de hardware como DevCheck y revisa el apartado de almacenamiento.

Como regla aproximada, muchos móviles económicos de los últimos años utilizan eMMC 5.1. Los modelos de gama media más capaces incorporan UFS 2.2 o UFS 3.1. Los buques insignia recientes suelen montar UFS 4.0 o UFS 4.1. UFS 5.0 ya se ha anunciado, pero no es todavía el estándar de referencia para la mayoría de los móviles actuales.

El tipo importa porque un móvil con eMMC lento y otro con UFS degradado pueden ofrecer cifras de prueba parecidas por motivos distintos.

## Mide la velocidad con cuidado

Utiliza una aplicación de pruebas de almacenamiento como CPDT. Ejecuta la prueba con el móvil frío, por encima del 20 % de batería, sin calentarse mientras carga y con al menos un 15-20 % de almacenamiento libre. Después repítela. Un solo resultado malo no demuestra nada.

Estas cifras son solo referencias, no límites para aprobar o suspender:

Como puntos orientativos de lectura y escritura secuenciales, eMMC 5.1 puede rondar los 250/100-125 MB/s, UFS 2.1 unos 850/250 MB/s, UFS 3.1 cerca de 2.100/1.200 MB/s y UFS 4.0 alrededor de 4.200/2.800 MB/s.

Los móviles reales no siempre alcanzan esos valores. La capacidad, el controlador, la temperatura, el cifrado, el firmware, el espacio libre y la propia aplicación de prueba influyen en el resultado. Una versión de 128 GB también puede ser más lenta que la de 512 GB de la misma familia porque dispone de menos chips NAND trabajando en paralelo.

Si el resultado queda muy por debajo de lo esperable, libera espacio y repite la prueba después de reiniciar. Si sigue siendo bajo y el móvil además se bloquea al instalar aplicaciones, mover archivos, guardar fotos o aplicar actualizaciones, entonces el estado del almacenamiento pasa a ser un sospechoso real.

## Señales que apuntan a un problema de almacenamiento

Los fallos de almacenamiento se sienten distintos de la lentitud normal de un móvil antiguo.

Las aplicaciones pueden tardar muchísimo en instalarse o actualizarse. La cámara puede quedarse esperando después de cada foto mientras la guarda. El móvil puede bloquearse al copiar, borrar o mover archivos. El arranque puede durar mucho más que antes. Los juegos grandes pueden verificar o reparar sus archivos con mayor frecuencia.

Las señales más graves son difíciles de ignorar: fotos dañadas, documentos que no se abren, aplicaciones que fallan al escribir archivos, mensajes de que no se puede escribir en el almacenamiento aunque quede espacio o un móvil que algunas veces no consigue arrancar.

Haz una copia de seguridad inmediatamente si ves corrupción de datos. No dediques una hora a ejecutar pruebas mientras la única copia de tus archivos importantes siga dentro de ese móvil.

## Comprobaciones que requieren root

En dispositivos con root, a veces se pueden leer datos de estado de bajo nivel desde sysfs. En móviles con eMMC, las estimaciones de vida útil pueden aparecer mediante valores Extended CSD en rutas como `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. En dispositivos UFS, los descriptores de estado pueden encontrarse bajo `/sys/class/scsi_device/` u otras rutas específicas del fabricante.

Esto no es un consejo para usuarios normales. Las rutas cambian, SELinux bloquea el acceso en móviles sin modificar y los valores son fáciles de interpretar mal. Si ya tienes root y sabes lo que haces, pueden ser útiles. Si no, no rootees un móvil solo para comprobar el estado del almacenamiento.

## Cómo reducir el desgaste del almacenamiento

Mantén libre el 15-20 % del almacenamiento interno. En un móvil de 128 GB, eso supone unos 20 GB. En uno de 256 GB, 40 GB dejan un margen cómodo, aunque no hace falta obsesionarse con la cifra exacta.

Evita utilizar el restablecimiento de fábrica como mantenimiento rutinario. Hacerlo una vez para arreglar un sistema muy desordenado puede tener sentido. Repetirlo cada mes solo añade escrituras innecesarias y normalmente recrea el mismo problema cuando vuelves a instalarlo todo.

Graba vídeos largos en almacenamiento externo únicamente si el móvil y la aplicación de cámara lo admiten correctamente. Si utilizas una tarjeta SD, reserva allí el contenido multimedia, no las aplicaciones. Las aplicaciones deben seguir en el almacenamiento interno porque UFS es mucho más rápido y fiable que la mayoría de las tarjetas microSD.

Si utilizas runcheck, observa la presión del almacenamiento a lo largo del tiempo en vez de quedarte mirando una sola cifra. El apartado de almacenamiento muestra el uso de la capacidad y, combinado con la temperatura de la batería y otras señales del dispositivo, ayuda a distinguir un móvil lleno de un posible problema de hardware.
