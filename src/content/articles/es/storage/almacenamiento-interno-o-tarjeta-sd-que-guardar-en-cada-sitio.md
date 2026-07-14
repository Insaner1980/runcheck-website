---
title: "Almacenamiento interno o tarjeta SD: qué guardar en cada sitio"
description: "Una tarjeta microSD puede dar más espacio a un móvil Android, pero no equivale al almacenamiento interno. Ahí es donde suele estar la confusión. Tener más espacio no significa tener espacio rápido."
listSummary: "Una tarjeta microSD puede dar más espacio a un móvil Android, pero no equivale al almacenamiento interno."
hub: "storage"
sourceNumber: 86
order: 8
tags: ["almacenamiento","android","limpieza","optimizacion","guia"]
locale: "es"
draft: false
---
Esto importa aún más en 2026, porque los móviles Android combinan tipos de almacenamiento muy distintos. Muchos modelos de gama alta y media ya no incluyen ranura microSD. Los Pixel no la tienen, Samsung la eliminó hace años de la gama Galaxy S y varios modelos actuales de la gama Galaxy A también prescinden de ella. Al mismo tiempo, muchos Galaxy A y M más antiguos, modelos Motorola Moto G y móviles Sony Xperia siguen admitiendo microSD.

Comprueba el modelo exacto. El nombre de la familia no basta.

## La diferencia de velocidad es real

El almacenamiento interno de los móviles Android modernos suele utilizar UFS. Los modelos actuales de gama alta suelen incorporar UFS 4.x, y el almacenamiento UFS 4.0 de Samsung alcanza, según sus especificaciones, hasta 4.200 MB/s de lectura y 2.800 MB/s de escritura. Incluso móviles de gama media más antiguos con UFS 2.1 pueden rondar los 850 MB/s en lectura secuencial.

Una microSD normal es mucho más lenta. Incluso una tarjeta UHS-I decente se acerca más a las velocidades de un medio externo que a las del almacenamiento interno del móvil. La etiqueta de velocidad también puede confundir. V30 indica que la tarjeta está preparada para una escritura de vídeo sostenida de unos 30 MB/s, algo útil al grabar vídeo, pero no convierte el almacenamiento extraíble en UFS cuando una aplicación hace miles de lecturas y escrituras pequeñas.

Esa diferencia en el acceso aleatorio explica por qué las aplicaciones funcionan peor desde una tarjeta SD.

## Mantén las aplicaciones en el almacenamiento interno

Siempre que sea posible, las aplicaciones deben quedarse en el almacenamiento interno. El inicio de las apps, las bases de datos, la sincronización en segundo plano, las notificaciones, las miniaturas y las cachés acceden al almacenamiento constantemente. Si todo eso depende de una tarjeta lenta, notarás los tirones.

Android puede mover algunas aplicaciones al almacenamiento adoptado o externo, pero solo cuando lo permiten tanto la aplicación como el dispositivo. Una app solo puede instalarse en almacenamiento adoptado si su desarrollador ha habilitado esa posibilidad mediante el atributo android:installLocation. Muchas no lo hacen.

Los juegos son el caso en el que más apetece forzar la situación. Un juego de 15 GB parece el candidato perfecto para la tarjeta SD. En la práctica, las pantallas de carga duran más, las actualizaciones tardan y algunos juegos ni siquiera permiten el traslado. Si estás decidiendo qué borrar, suele ser mejor desinstalar un juego que no utilizas que intentar ejecutarlo desde una tarjeta.

## Guarda el contenido multimedia en la tarjeta SD

Las fotos, los vídeos, la música, los pódcasts, las películas, los mapas sin conexión, los PDF y los archivos guardados son mejores candidatos para una tarjeta SD. Se leen en bloques más grandes y no necesitan la misma velocidad de acceso aleatorio que las aplicaciones.

Si la aplicación de cámara lo permite, elige la tarjeta SD como ubicación de almacenamiento. Las aplicaciones de cámara de Samsung, Motorola y Sony han ofrecido esta opción en muchos modelos con ranura, aunque la ruta exacta cambia según el modelo y la versión de Android. Busca en los ajustes de la cámara una opción relacionada con la ubicación de almacenamiento.

Algunas aplicaciones de streaming también permiten guardar las descargas sin conexión en la tarjeta SD. Netflix, Spotify, YouTube y las aplicaciones de mapas han cambiado sus opciones con el tiempo, así que compruébalo dentro de cada app en vez de suponer que Android lo controla de forma global.

Hay una pega. Si la tarjeta falla, las fotos y las descargas guardadas en ella también pueden perderse. Mantén una copia en la nube, en un ordenador o en otro sistema de respaldo para todo lo que sea importante.

## El almacenamiento adoptado suena mejor de lo que funciona

Android 6.0 introdujo el almacenamiento adoptado. Android formatea y cifra el medio extraíble para que se comporte de forma parecida al almacenamiento interno. La tarjeta queda vinculada a ese móvil y el sistema puede guardar en ella aplicaciones y datos privados.

Sobre el papel, soluciona la falta de almacenamiento interno. En la vida real, tiene costes. Una tarjeta lenta puede hacer que el móvil se vuelva torpe y, si la tarjeta se estropea, Android puede perder datos que esperaba tener disponibles. Extraer una tarjeta adoptada sin expulsarla correctamente también puede dañar aplicaciones o datos guardados en ella.

En algunos dispositivos, Android avisa durante la configuración cuando la tarjeta es lenta. El aviso no acelera el medio, solo te advierte antes de que aceptes el cambio.

El almacenamiento adoptado tampoco está disponible en todos los móviles. Algunos fabricantes lo ocultan o desactivan, sobre todo cuando consideran que la experiencia sería mala. Si la opción no aparece, puede ser una decisión del fabricante y no un error tuyo.

## El almacenamiento portátil es la opción más segura

Con el almacenamiento portátil, la tarjeta se mantiene como una unidad independiente. Puedes extraerla, leerla en un ordenador, copiar archivos en ambos sentidos y utilizarla principalmente para contenido multimedia.

Para la mayoría de la gente, esta es la mejor configuración. Mantén las aplicaciones y sus datos dentro del móvil. Envía a la tarjeta las fotos y vídeos de la cámara, la música sin conexión, las películas, los documentos y las copias de seguridad. Es menos sofisticado, pero cuando algo falla, el problema queda mejor aislado.

Aquí, lo sencillo funciona.

## Qué hacer cuando el almacenamiento interno está casi lleno

Cuando queda muy poco almacenamiento interno, el móvil puede ir más lento. La memoria flash necesita bloques libres para escribir y hacer tareas de mantenimiento. Android también necesita espacio para actualizar aplicaciones y el sistema, crear cachés y manejar archivos temporales. Incluso un móvil de 128 GB puede funcionar mal si los últimos gigabytes están siempre al límite.

Empieza por **Ajustes > Almacenamiento**. Si predominan las fotos y los vídeos, muévelos a la tarjeta o a la nube. Si el problema son las aplicaciones, desinstala las que no utilizas y borra la caché de las que más ocupan. Si la carpeta Descargas está llena, elimina instaladores antiguos, archivos ZIP, PDF y vídeos exportados.

Mover el icono de una aplicación al almacenamiento extraíble rara vez es la solución limpia que parece.

## Las etiquetas de velocidad de las tarjetas SD, sin complicaciones

Class 10 y U1 son suficientes para fotos normales, música y documentos.

V30 es una opción más segura para grabar vídeo 4K, porque está pensada para mantener una velocidad de escritura sostenida.

A1 y A2 se refieren al rendimiento con aplicaciones. Importan sobre todo si insistes en usar almacenamiento adoptado o en ejecutar cargas de trabajo parecidas a las de una app desde la tarjeta. No convierten una microSD en UFS.

Compra tarjetas de marcas conocidas y desconfía de las capacidades enormes a precios sospechosamente bajos. Las tarjetas falsas siguen siendo habituales y fallan de una forma especialmente desagradable: parecen tener mucha capacidad hasta que los archivos antiguos empiezan a corromperse.

## Si tu móvil no tiene ranura para tarjeta SD

Utiliza almacenamiento en la nube para fotos y vídeos, mueve los archivos grandes a un ordenador o usa una memoria USB-C compatible con USB OTG para transferencias ocasionales. A partir de ahí, la respuesta es poco emocionante: desinstala las aplicaciones que no utilizas, borra las cachés que hayan crecido sin control, limpia las descargas antiguas y, la próxima vez, evita comprar un móvil con demasiado poco almacenamiento.

Suena tajante porque es cierto. Un móvil Android de 64 GB todavía puede servir en 2026, pero deja muy poco margen para vídeos, juegos, mapas sin conexión y años de archivos recibidos por mensajería.
