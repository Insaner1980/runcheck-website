---
title: "Por qué el móvil dice que el almacenamiento está lleno cuando no lo parece"
description: "Una situación bastante común en soporte técnico es esta: alguien borra un montón de vídeos, consulta la pantalla de almacenamiento y el móvil sigue negándose a instalar una aplicación o hacer una foto."
listSummary: "almacenamiento, android y limpieza"
hub: "storage"
sourceNumber: 87
order: 9
tags: ["almacenamiento","android","limpieza","optimizacion","guia"]
locale: "es"
draft: false
---
Es irritante, pero no raro. Los avisos de almacenamiento de Android pueden deberse a archivos visibles, datos ocultos de aplicaciones, papeleras, descargas fallidas, restos de actualizaciones del sistema o una base de datos de almacenamiento que todavía no se ha puesto al día. Después de una actualización importante, como el despliegue de Android 17 que comenzó en los Pixel compatibles antes de llegar más ampliamente a los fabricantes, esta confusión puede durar uno o dos días mientras el móvil termina sus tareas.

Empieza reiniciándolo. Sí, de verdad. Es la solución aburrida, pero desbloquea procesos temporales atascados más veces de las que parece.

## El sistema ocupa más de lo que indica la caja

Un móvil vendido con 128 GB nunca deja los 128 GB completos para tus archivos. Android, el firmware, las aplicaciones del fabricante, los archivos de idioma, las particiones del sistema y las ranuras de actualización reservan una parte antes de que instales nada.

Los Pixel suelen llevar menos añadidos que los móviles con capas muy personalizadas, pero no existe una cifra universal. Un Samsung Galaxy con One UI, un Xiaomi con una capa más pesada y un Pixel con Android 17 no clasifican el almacenamiento del sistema de la misma manera.

El espacio atribuido al sistema también puede aumentar justo después de actualizar el sistema operativo. Android utiliza mecanismos de actualización que necesitan espacio temporal y la limpieza posterior no siempre resulta visible. Si acabas de instalar Android 17 o una actualización grande del fabricante, reinicia el móvil, ponlo a cargar, déjalo un rato conectado por Wi-Fi y vuelve a comprobarlo más tarde.

## La caché también cuenta como espacio usado

La caché de una aplicación contiene datos temporales, pero sigue ocupando almacenamiento. Los navegadores, las redes sociales, las aplicaciones de vídeo, los mapas y la mensajería suelen ser los principales responsables.

Android sin grandes modificaciones, incluido Android 17 en los Pixel, no ofrece un botón normal para borrar de una vez la caché de todas las aplicaciones. Hazlo app por app: entra en **Ajustes > Aplicaciones**, elige la aplicación, abre **Almacenamiento** o **Almacenamiento y caché** y toca **Borrar caché**. Google explica que Borrar caché elimina datos temporales, mientras que Borrar almacenamiento elimina de forma permanente los datos de la aplicación.

No borres todo sin mirar. Empieza por las aplicaciones que más ocupan. Una caché de 3 GB en una app de vídeo sí importa. Doce cachés diminutas de 20 MB, no tanto.

## La papelera sigue ocupando espacio

Borrar un archivo no siempre lo elimina al instante. Files by Google puede moverlo a la papelera, donde permanece 30 días antes de borrarse automáticamente. Google Fotos conserva durante 60 días las fotos y los vídeos eliminados que tenían copia de seguridad. Los elementos sin copia de seguridad eliminados desde un dispositivo con Android 11 o posterior permanecen 30 días.

Por eso puedes borrar un montón de vídeos y no recuperar el espacio hasta que vacías la papelera.

Revisa la papelera de la galería, Files by Google, Mis archivos de Samsung y cualquier servicio en la nube que utilices. Galería de Samsung, Google Fotos, OneDrive, Dropbox y los gestores de archivos aplican sus propias reglas. Esa fragmentación explica buena parte de lo confusa que resulta la limpieza del almacenamiento.

## Las aplicaciones de mensajería esconden muchos archivos

WhatsApp, Telegram, Signal, Messenger, Discord y aplicaciones parecidas pueden guardar sin hacer ruido fotos, vídeos, notas de voz, GIF, stickers y documentos. Algunos archivos aparecen en la galería, dentro de la propia aplicación y también en el espacio atribuido a la app, lo que hace que el desglose parezca contradictorio.

WhatsApp incluye una herramienta útil: **Ajustes > Almacenamiento y datos > Administrar almacenamiento**. Úsala antes de borrar carpetas al azar. Permite localizar archivos grandes, elementos reenviados muchas veces y los chats que más espacio ocupan.

Telegram funciona de otra manera porque guarda gran parte del historial en la nube, pero también mantiene contenido multimedia en la caché local. En sus ajustes, abre **Datos y almacenamiento > Uso de almacenamiento** para limitar o borrar esa caché.

La mejor prevención es desactivar la descarga automática de contenido multimedia en los grupos. Los vídeos de grupo devoran almacenamiento.

## Descargas fallidas y restos de actualizaciones

La descarga fallida de un juego, una copia de archivos interrumpida o una actualización del sistema a medio terminar pueden dejar archivos temporales. No siempre aparecen claramente en Descargas.

Reinicia primero. Después, revisa la carpeta Descargas, la lista de descargas del navegador, las actualizaciones pendientes de Google Play y cualquier otra tienda de aplicaciones que utilices. Si falló la actualización de una aplicación o un juego grande, cancélala y vuelve a iniciarla después de liberar más espacio.

Algunos dispositivos ofrecen en el modo de recuperación una opción para borrar la partición de caché. Trátala como una medida específica del modelo, no como una limpieza normal. El menú de recuperación y la combinación de botones cambian, y algunos móviles ni siquiera muestran esa opción.

## La categoría «Otros» es un cajón de sastre

«Otros» no es una sola cosa. Puede incluir bases de datos de aplicaciones, registros, miniaturas, carpetas que quedaron después de desinstalar apps, firmware descargado, archivos temporales y elementos que Android no sabe clasificar bien.

No existe un botón universal y seguro para «borrar Otros». El camino más fiable es poco espectacular, pero funciona: borra la caché de las aplicaciones grandes, vacía las papeleras, limpia Descargas, elimina las apps que no utilizas y usa el administrador de almacenamiento de cada aplicación de mensajería.

Si «Otros» sigue siendo enorme, puede que una aplicación concreta sea la responsable. Entra en **Ajustes > Aplicaciones** y ordena por almacenamiento si tu móvil ofrece esa vista.

## Cuando el cálculo de Android es incorrecto

A veces el cálculo sí está mal. La base de datos multimedia puede tardar en reflejar los cambios, sobre todo después de borrar muchos archivos, tener un problema con la tarjeta SD, transferir datos o actualizar el sistema operativo.

Dale tiempo. Reinicia. Después abre la galería y el gestor de archivos para que vuelvan a examinar el contenido. Si las fotos o los vídeos no aparecen en el desglose pero siguen visibles en Files, el índice multimedia puede estar desactualizado.

En algunos dispositivos, los usuarios avanzados pueden buscar **Media Storage** entre las aplicaciones del sistema, abrir su apartado de almacenamiento y usar **Borrar datos**. Esto no elimina los archivos multimedia reales, pero obliga a Android a reconstruir el índice y el dispositivo puede trabajar intensamente durante un rato. No lo hagas por rutina. Resérvalo para casos en los que las cifras de almacenamiento sean claramente incoherentes.

Una aplicación de diagnóstico como runcheck puede ayudar porque muestra la presión de almacenamiento y las categorías de limpieza desde fuera del desglose, a veces confuso, de Ajustes. No borra nada por arte de magia, pero señala qué parte del almacenamiento merece atención.

## Qué hacer primero

Reinicia el móvil.

Vacía la papelera de la galería y del gestor de archivos.

Abre la pantalla de almacenamiento en Ajustes y comprueba qué categoría ocupa más.

Borra la caché de las dos o tres aplicaciones que más espacio consumen.

Utiliza la herramienta de almacenamiento de WhatsApp o Telegram si los archivos de chat ocupan mucho.

Elimina descargas antiguas, especialmente archivos APK, ZIP, vídeos exportados y documentos duplicados.

Haz una copia de seguridad de las fotos y los vídeos y, después, usa **Liberar espacio** en Google Fotos o la función equivalente de tu servicio en la nube para retirar las copias locales.

Si nada de esto funciona y el dispositivo sigue prácticamente inutilizable, guarda todo lo importante y plantéate un restablecimiento de fábrica. Es el último recurso porque borra el móvil, pero también es la medida que elimina los problemas de almacenamiento realmente enredados.
