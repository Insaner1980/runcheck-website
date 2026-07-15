---
title: "Qué ocurre cuando el almacenamiento del móvil está lleno"
description: "Un móvil Android lleno puede fallar en tareas cotidianas: errores de cámara, cierres de aplicaciones, actualizaciones bloqueadas y escritura lenta de archivos. Esto es lo que suele fallar primero y el espacio libre que conviene mantener."
listSummary: "rendimiento, velocidad y android"
hub: "storage"
sourceNumber: 81
order: 3
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
---

Cuando el almacenamiento de Android está lleno, el móvil no falla de forma elegante. Antes empieza a hacer cosas raras.

La cámara se queda pensando. Las aplicaciones se bloquean al guardar borradores. Las actualizaciones se niegan a instalarse. El teclado empieza a ir con retraso en una aplicación de chat que ayer funcionaba bien. Entonces Android muestra el aviso de almacenamiento lleno, como si eso explicara por qué de pronto parece haberse roto todo.

Y, en buena medida, sí lo explica.

## Qué falla primero

La cámara suele ser una de las primeras cosas en dar problemas. Una foto no se guarda como un pequeño archivo terminado en el instante en que pulsas el disparador. La aplicación de cámara puede necesitar espacio para procesar la imagen, crear archivos temporales y miniaturas, aplicar ediciones, gestionar ráfagas o mantener búferes de vídeo. Sin margen para trabajar, puede bloquearse, no guardar la foto o dejar de grabar.

Después vienen las aplicaciones. Todas escriben pequeños archivos mientras funcionan: caché, registros, bases de datos, borradores, estado de la sesión, miniaturas, contenido descargado y archivos de diario de SQLite. Cuando esas escrituras fallan, la aplicación puede cerrarse o perder en silencio lo que estabas haciendo.

Las actualizaciones del sistema también necesitan espacio. Un parche mensual ocupa menos que una actualización completa de Android, pero ambos requieren espacio para la descarga y la instalación. Si el móvil no puede instalar actualizaciones, te quedas sin correcciones de seguridad y de errores. Es un mal intercambio por conservar descargas antiguas y vídeos duplicados.

## Por qué el móvil se ralentiza antes de llegar a cero

No hace falta llegar a 0 GB libres para que el móvil se vuelva lento. La zona de riesgo suele empezar cuando el espacio libre baja del 10-15 %, y por debajo del 5 % la situación se complica bastante.

El almacenamiento flash necesita bloques libres para tareas de limpieza, nivelación del desgaste y recolección de basura. Cuando queda poco espacio, el controlador debe trabajar más antes de escribir datos nuevos. Eso ralentiza operaciones normales. Guardar una foto, instalar una aplicación, actualizar una base de datos o descargar un archivo adjunto puede detener el móvil el tiempo suficiente para que lo notes.

No lo confundas con zRAM. La mayoría de los móviles Android usan zRAM como memoria comprimida dentro de la RAM, no como un archivo de intercambio normal en el almacenamiento interno. Que el almacenamiento esté lleno no significa directamente que «Android ya no puede usar swap». El problema es que las aplicaciones y el sistema siguen necesitando espacio para archivos reales mientras funcionan.

Android 17 impone límites más estrictos de memoria a las aplicaciones, pero eso no elimina la necesidad de mantener espacio libre. La presión sobre la memoria y la presión sobre el almacenamiento son problemas distintos. Solo se parecen cuando estás mirando una pantalla congelada.

## Qué llena el almacenamiento sin que te des cuenta

Las aplicaciones de mensajería suelen ser las principales culpables. WhatsApp, Telegram, Discord y otras similares pueden descargar fotos, vídeos, notas de voz, stickers, GIF y documentos de todos los grupos activos en los que participas. Unos meses de archivos de chats grupales pueden ocupar más que toda la galería de la cámara.

La carpeta Downloads es otro cementerio. PDF, instaladores APK, archivos ZIP, formularios, capturas de pantalla, facturas y documentos abiertos una sola vez desde el correo se quedan allí hasta que los eliminas.

El contenido sin conexión también se acumula en silencio. Las listas de Spotify, los episodios de Netflix, las descargas de YouTube, los pódcast, los audiolibros y los mapas sin conexión de Google Maps viven dentro del almacenamiento de cada aplicación. Puede que no veas esos archivos en el gestor de archivos, pero aparecen en **Ajustes > Aplicaciones > [nombre de la aplicación] > Almacenamiento**.

La papelera también puede engañarte. Android 11 incorporó la compatibilidad de MediaStore con elementos enviados a la papelera, y aplicaciones como Files by Google pueden conservarlos durante unos 30 días si no la vacías. Google Fotos aplica sus propias reglas. Galería de Samsung y Mis archivos también tienen sus propias papeleras. Si has borrado un montón de vídeos y la cifra de almacenamiento apenas ha cambiado, revísalas.

## Cuánto espacio libre conviene mantener

Intenta mantener libre un 15-20 % del almacenamiento. En un dispositivo de 64 GB, eso equivale a unos 10 GB. Con 128 GB, procura conservar cerca de 20 GB si puedes.

Ese margen deja sitio para actualizar aplicaciones, usar la cámara, crear caché, escribir bases de datos, descargar archivos y mantener el almacenamiento. No necesitas vigilarlo todos los días. Lo que sí conviene es dejar de considerar que 2 GB libres son «suficientes».

Si el móvil tiene 32 GB o 64 GB de almacenamiento, puede resultar imposible mantenerlo desahogado con las aplicaciones actuales, las fotos y los archivos de mensajería. No es culpa tuya. Los dispositivos con poco almacenamiento han envejecido mal.

runcheck controla el uso del almacenamiento dentro de su vista de estado del dispositivo y avisa cuando queda poco espacio antes de que el móvil llegue a una situación crítica. La pantalla de detalles del almacenamiento también ayuda a separar imágenes, vídeos, audio, documentos, descargas y otras categorías, para que la limpieza empiece con datos y no borrando archivos al azar.

## Preguntas frecuentes

### ¿Puede el almacenamiento lleno dañar el móvil de forma permanente?

Normalmente, no. Puede dificultar la nivelación del desgaste para el controlador de almacenamiento, pero es poco probable que destruyas el chip NAND porque el móvil se haya llenado unas cuantas veces. El mayor riesgo es práctico: actualizaciones que no se instalan, fotos que no se guardan, datos de aplicaciones dañados y un móvil desagradable de usar.

### ¿Un restablecimiento de fábrica soluciona el almacenamiento lleno?

Libera espacio, pero es la medida más drástica. Si los archivos de WhatsApp, los vídeos sin conexión y las fotos de la cámara llenaron el móvil una vez, volverán a hacerlo. Limpia primero las fuentes del problema.

### ¿Por qué no cuadran las cifras?

Android, las particiones del sistema, las aplicaciones preinstaladas, los datos de las aplicaciones, las miniaturas, las papeleras y las etiquetas de categorías no siempre encajan de forma exacta. La capacidad anunciada tampoco coincide con la capacidad utilizable. La cifra de la caja nunca es igual al espacio disponible para tus propios archivos.

### ¿Una tarjeta SD lo soluciona?

Ayuda con fotos, vídeos, música y documentos si el móvil todavía tiene ranura. Resulta menos útil para las aplicaciones. Muchas no se pueden mover a la tarjeta SD y, aunque sea posible, una microSD es mucho más lenta que el almacenamiento UFS interno. Usa la tarjeta para archivos multimedia, no como forma de rescatar un móvil que necesitaba más almacenamiento interno desde el primer día.
