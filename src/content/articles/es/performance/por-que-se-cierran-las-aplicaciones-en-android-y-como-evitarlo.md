---
title: "Por qué se cierran las aplicaciones en Android y cómo evitarlo"
description: "Las aplicaciones de Android se cierran por motivos concretos. Aprende a distinguir si falla una sola aplicación, WebView, la RAM, el almacenamiento o una actualización reciente de Android."
listSummary: "Las aplicaciones de Android se cierran por motivos concretos."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
---

La mayoría de los cierres de aplicaciones no son aleatorios. Lo parecen porque no ves el error que los ha provocado.

Una aplicación se cierra cuando llega a una situación de la que no puede recuperarse. Android la detiene, a veces con un mensaje que indica que la aplicación sigue fallando y otras sin mostrar nada especial. Una aplicación que se cierra al abrirla plantea un problema distinto de otra que falla después de diez minutos. Y que falle una sola aplicación no es lo mismo que ver cerrarse media docena el mismo día.

Esa es la clave: no intentes arreglar "Android". Identifica el patrón.

## Una aplicación se cierra constantemente

Empieza por la caché. En los Pixel y muchos móviles con una versión de Android cercana a la estándar, ve a Ajustes > Aplicaciones > Ver todas las aplicaciones > [nombre de la aplicación] > Almacenamiento y caché > Borrar caché. En Samsung, la ruta suele ser Ajustes > Aplicaciones > [nombre de la aplicación] > Almacenamiento > Borrar caché.

Borrar la caché elimina archivos temporales. No cierra tu sesión ni borra los datos de tu cuenta. ¿Sigue fallando? Puedes borrar el almacenamiento o los datos, pero detente antes de hacerlo. Esta acción restablece la aplicación. En WhatsApp, Signal, aplicaciones de notas, mapas sin conexión, descargas de música o juegos con partidas guardadas localmente, borrar los datos sin una copia de seguridad puede eliminar contenido importante.

Después, actualiza la aplicación. Abre Google Play, búscala e instala cualquier actualización disponible. Si los cierres comenzaron justo después de una actualización, revisa las opiniones recientes de Google Play. Cuando decenas de personas describen el mismo fallo en la misma versión, probablemente tendrá que solucionarlo el desarrollador.

Desinstala y vuelve a instalar la aplicación si todavía falla. Es una solución poco emocionante, pero reconstruye desde cero el paquete y los archivos locales. Funciona más veces de las que parece.

## Varias aplicaciones han empezado a fallar a la vez

Cuando varias aplicaciones sin relación entre sí se cierran el mismo día, sospecha de un componente compartido de Android. Android System WebView es el ejemplo clásico.

WebView permite que las aplicaciones muestren contenido web dentro de su propia interfaz sin enviarte al navegador. Aplicaciones de correo, tiendas, bancos, pantallas de ayuda, inicios de sesión y aplicaciones de noticias pueden depender de él. En marzo de 2021, una actualización defectuosa de WebView provocó cierres generalizados hasta que Google publicó versiones corregidas de WebView y Chrome.

Actualiza primero WebView y Chrome. Abre Google Play, busca Android System WebView y actualízalo. Haz lo mismo con Google Chrome. Si WebView se actualizó justo antes de que empezaran los fallos y todavía no hay una versión corregida, desinstalar sus actualizaciones puede servir como medida temporal en algunos dispositivos. Trátalo como algo provisional, porque WebView es un componente importante para la seguridad.

Google Play services puede provocar problemas amplios parecidos cuando está desactualizado o bloqueado. Actualízalo si Google Play ofrece una actualización. Reinicia el móvil después de actualizar componentes del sistema.

## Cierres por falta de RAM o almacenamiento

Una aplicación puede cerrarse cuando solicita memoria que Android no puede proporcionarle. A veces el sistema elimina aplicaciones en segundo plano sin avisar. Otras veces, la que falla es la que estás utilizando.

Esto es habitual en móviles con 3 o 4 GB que ejecutan aplicaciones modernas. Los juegos, editores de vídeo, aplicaciones de cámara y navegadores con muchas pestañas suelen ser los primeros en fallar. Una aplicación de mensajería puede funcionar todo el día y cerrarse al adjuntar un vídeo grande, porque esa acción concreta necesita mucha más memoria.

El almacenamiento lleno también puede parecer un fallo de la aplicación. Las aplicaciones necesitan espacio para cachés, descargas, bases de datos y actualizaciones. Cuando el almacenamiento interno está casi completo, esas escrituras pueden fallar. Liberar 1 o 2 GB puede bastar para detener los cierres en un móvil muy justo, pero es mejor mantener libre al menos el 10-15 % del almacenamiento.

Comprueba Ajustes > Almacenamiento. Elimina vídeos grandes, descargas antiguas, archivos duplicados, aplicaciones que no utilizas y archivos APK que ya no necesites. Vacía también la papelera de la galería o del gestor de archivos si conserva los elementos eliminados durante 30 días.

## Cierres después de una actualización de Android

Las actualizaciones importantes del sistema cambian la base sobre la que funciona cada aplicación. Google publicó Android 17 para la mayoría de los Pixel compatibles el 16 de junio de 2026. Los demás fabricantes lo incorporarán más adelante según sus propios dispositivos y calendarios. Si una aplicación ya era apenas compatible con la versión anterior, una actualización grande puede dejar el problema al descubierto rápidamente.

Actualiza las aplicaciones después de instalar el nuevo sistema. Después actualiza WebView, Chrome, Google Play services y la aplicación que falla. Reinicia una vez. Si acabas de instalar la actualización, da al móvil unas horas para terminar de optimizar aplicaciones y reconstruir cachés en segundo plano.

Si solo falla una aplicación después de actualizar a Android 17, probablemente su desarrollador tenga que adaptarla. Borrar la caché y los datos puede ayudar si el desencadenante son archivos locales antiguos, pero no corregirá código incompatible con la nueva versión de Android.

Si fallan muchas aplicaciones, busca una actualización del sistema publicada por el fabricante. Los Pixel reciben actualizaciones mensuales de Google. Samsung, Xiaomi, OnePlus, OPPO y otras marcas distribuyen las correcciones a través de sus propios canales y calendarios.

## El modo seguro revela si interfiere otra aplicación

El modo seguro inicia Android con las aplicaciones descargadas desactivadas. No las elimina. Simplemente ofrece un entorno limpio para hacer una prueba.

En un Pixel, abre el menú de encendido, mantén pulsado Apagar o Reiniciar y acepta la opción de modo seguro cuando aparezca. En un Samsung, apaga el móvil, vuelve a encenderlo y mantén pulsado el botón de bajar volumen cuando aparezca el logotipo de Samsung. En Xiaomi, las instrucciones cambian según el modelo, aunque muchos dispositivos permiten entrar manteniendo pulsado el botón de bajar volumen durante el arranque.

Si los cierres desaparecen en modo seguro, una aplicación descargada está interfiriendo. Reinicia con normalidad y elimina primero las aplicaciones recientes o intrusivas: limpiadores, ahorradores de batería, antivirus, VPN, lanzadores personalizados, herramientas de automatización y aplicaciones con permiso de Accesibilidad.

Si los fallos continúan en modo seguro, es más probable que el problema esté en el sistema, el almacenamiento, el hardware o una aplicación preinstalada.

## Cuando la aplicación se bloquea en vez de cerrarse

Un mensaje de "La aplicación no responde" es un ANR, siglas de Application Not Responding. La aplicación todavía no se ha cerrado. Android avisa de que no ha respondido con suficiente rapidez.

El tiempo de espera predeterminado para una entrada del usuario es de 5 segundos. Los receptores de difusión disponen de límites más largos, normalmente de 10 a 20 segundos según el caso. Para ti, la sensación es la misma: pulsas, esperas y no ocurre nada.

Toca Esperar si hay un trabajo que merezca la pena conservar, como exportar un vídeo o enviar un archivo grande. Toca Cerrar si está claramente bloqueada. Los ANR repetidos en una misma aplicación suelen indicar que está haciendo demasiado trabajo en el hilo principal, esperando una petición de red lenta o compitiendo por una memoria escasa.

## Qué no debes instalar

No instales aplicaciones que prometan corregir cierres, aumentar la RAM o mejorar la estabilidad. No pueden reparar el código de otra aplicación. En el mejor de los casos, borran cachés y fuerzan el cierre de procesos en segundo plano. En el peor, añaden otro servicio permanente a un móvil que ya tiene poca memoria.

Las soluciones útiles son aburridas: actualizar la aplicación, borrar la caché, borrar los datos solo cuando sea seguro, reinstalar, liberar almacenamiento, probar el modo seguro y esperar al desarrollador o al fabricante cuando el fallo esté en su lado.

Los cierres no dañan el móvil. Sí pueden hacerte perder trabajo que no hayas guardado. Si ocurren al guardar fotos, notas o documentos, deja de confiar en esa aplicación hasta haber hecho una copia de seguridad de los datos.
