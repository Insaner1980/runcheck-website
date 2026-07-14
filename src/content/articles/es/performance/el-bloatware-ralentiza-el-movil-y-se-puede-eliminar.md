---
title: "¿El bloatware ralentiza el móvil y se puede eliminar?"
description: "Las aplicaciones Android preinstaladas pueden ocupar espacio, enviar notificaciones y ejecutar servicios en segundo plano. Esto es lo que hace realmente el bloatware y lo que puedes eliminar sin riesgos innecesarios."
listSummary: "rendimiento, velocidad y android"
hub: "performance"
sourceNumber: 78
order: 15
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
---

Al bloatware, es decir, al software preinstalado que no necesitas, se le culpa de casi cualquier móvil Android lento. La realidad es menos espectacular. Una aplicación preinstalada no ralentiza nada por el mero hecho de que exista su icono. El problema empieza cuando se ejecuta en segundo plano, activa el móvil, envía notificaciones, se actualiza o mantiene servicios funcionando aunque nunca la hayas pedido.

Ahí está la parte molesta. Puedes comprar un móvil, omitir una aplicación durante la configuración, no abrirla jamás y aun así encontrar después servicios relacionados en la lista de aplicaciones.

## Qué hace realmente el bloatware

Una aplicación preinstalada inactiva consume sobre todo almacenamiento. No utiliza CPU, RAM, datos móviles ni batería salvo que Android u otra aplicación inicie alguno de sus componentes.

Algunos paquetes preinstalados hacen algo más que quedarse quietos. Servicios relacionados con Facebook, como `com.facebook.appmanager`, se han incluido en determinados móviles como paquetes auxiliares. Los Samsung pueden traer Samsung Free, Samsung Global Goals, Samsung TV Plus y otras aplicaciones de Samsung junto a las de Google. Los móviles vendidos por operadoras pueden añadir herramientas de cuenta, asistentes de configuración, aplicaciones de buzón de voz, pruebas de seguridad e instaladores promocionales.

Uno o dos servicios en segundo plano no suelen arruinar el rendimiento. Quince en un móvil básico son otra historia. Un dispositivo con 3 o 4 GB de RAM, un lanzador pesado, aplicaciones sociales, utilidades de la operadora y servicios del fabricante puede funcionar peor que un buque insignia más antiguo con software más limpio y mayor margen de memoria.

El almacenamiento es más fácil de comprobar que la actividad en segundo plano. Abre **Ajustes > Almacenamiento > Aplicaciones** o **Ajustes > Aplicaciones**, ordena por tamaño si tu móvil lo permite y busca lo que no utilizas. La ruta exacta cambia según la marca. En los Pixel suele ser bastante directa, Samsung concentra más opciones en Cuidado del dispositivo y Xiaomi reparte herramientas de almacenamiento entre Ajustes y la aplicación Seguridad.

## Inhabilita primero y desinstala cuando Android lo permita

Android permite desinstalar algunas aplicaciones preinstaladas igual que cualquier otra. Mantén pulsado el icono, abre la información de la aplicación y busca **Desinstalar**. Si el botón no aparece, está desactivado o se sustituye por **Inhabilitar o Desactivar**, Android está tratando esa aplicación como parte del sistema.

Inhabilitarla es el primer paso más seguro. Abre **Ajustes > Aplicaciones**, selecciona la aplicación y toca **Inhabilitar** o la opción equivalente de tu fabricante. Una aplicación inhabilitada deja de ejecutarse, desaparece del lanzador y ya no recibe actualizaciones normales. El paquete original sigue ocupando parte del almacenamiento porque permanece en la imagen del sistema, aunque Android elimina sus actualizaciones y datos de usuario cuando puede.

Este último detalle importa. Inhabilitar una aplicación del sistema no va a devolverte varios gigabytes por arte de magia. Sí puede ayudar si había descargado actualizaciones, almacenado contenido en caché, iniciado una sesión o guardado datos locales.

Samsung y otros fabricantes muestran a veces **Desinstalar** en aplicaciones que venían de fábrica. En muchos casos, esa acción elimina la capa de actualizaciones instalada para el usuario y deja inactiva la copia original. Desde tu punto de vista, es suficiente. Querías quitarla del uso diario, no borrarla de una partición del sistema de solo lectura.

## Cuándo tiene sentido eliminar con ADB

Para paquetes difíciles, ADB puede eliminar una aplicación para el usuario actual sin acceso root:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

El comando no borra el paquete de la partición del sistema. Lo oculta y desactiva para el usuario 0, que es el usuario principal del móvil. Un restablecimiento de fábrica hace que vuelva a aparecer.

Utilízalo solo cuando conozcas el paquete exacto y entiendas qué estás retirando. El nombre del paquete puede aparecer en la URL de Google Play, o puedes enumerar los paquetes con:

```text
adb shell pm list packages
```

Herramientas como Canta y Universal Android Debloater Next Generation simplifican el proceso. Canta funciona en el propio móvil y utiliza Shizuku. UAD-ng se ejecuta en un ordenador y emplea listas seleccionadas de paquetes con etiquetas de seguridad. Esas etiquetas ayudan, pero no son infalibles. Si algo aparece como inseguro, experto, framework, provider, dialer, launcher o relacionado con Google Play Services, déjalo en paz salvo que tengas un plan real de recuperación.

En serio. Eliminar el paquete equivocado puede romper las notificaciones, las llamadas, las instalaciones desde Google Play, los widgets, la sincronización de cuentas o incluso el arranque.

## Qué móviles suelen traer un sistema más limpio

Los Pixel libres comprados directamente a Google siguen estando entre las opciones Android convencionales más limpias. Incluyen aplicaciones de Google, pero normalmente evitan los paquetes añadidos por operadoras. Motorola suele acercarse, con algunas funciones propias en lugar de un segundo ecosistema completo de aplicaciones.

Samsung ha mejorado, pero todavía duplica varias categorías de Google con sus propias versiones: navegador, tienda de aplicaciones, galería, notas, servicios de cuenta, televisión y contenidos de noticias. A algunas personas les gustan. Si no las usas, se sienten como desorden.

Xiaomi, Redmi, Poco, Oppo, Realme y Vivo varían mucho según el país y la gama de precio. Un modelo europeo y otro destinado a India con el mismo nombre de hardware pueden incluir distintas aplicaciones de terceros, recomendaciones, anuncios o avisos para instalar software. Los modelos de operadora forman una categoría aparte, porque la operadora puede añadir aplicaciones con independencia del fabricante.

Nothing y OnePlus también han cambiado con los años. Algunos lanzamientos han sido limpios y otros han incorporado más servicios de socios de lo que esperaban sus seguidores. La reputación de una marca es una pista, no una prueba. Revisa análisis actuales del modelo y la región concretos antes de comprar.

## Qué no debes inhabilitar

No inhabilites Google Play services. Muchas aplicaciones dependen de él para las notificaciones push, la ubicación, el inicio de sesión, los mapas, las comprobaciones de seguridad y los pagos. Desactivarlo transforma una pequeña molestia en un móvil que no funciona bien.

Ten cuidado con Android System WebView, el lanzador predeterminado, la aplicación de teléfono, la de mensajería, el teclado, el controlador de permisos, el instalador de paquetes, Ajustes, el proveedor de contactos, el proveedor multimedia y cualquier paquete cuyo nombre contenga `framework` o `provider`. Suenan aburridos porque son infraestructura.

Aplicaciones concretas de Google como Google TV, YouTube Music, Google News o Google One suelen poder inhabilitarse si no las utilizas. Chrome también suele ser prescindible si ya hay otro navegador instalado, pero el comportamiento de los fabricantes varía lo suficiente como para que convenga comprobar después WebView y el navegador predeterminado.

## ¿Puede ser malware el bloatware?

Las aplicaciones legítimas de Google, Samsung, Motorola, Xiaomi, una operadora u otro fabricante conocido no son malware automáticamente. Aun así, pueden resultar molestas, pesadas o demasiado insistentes con las notificaciones.

El riesgo es mayor en móviles muy baratos de marcas desconocidas, compilaciones ROM no oficiales o dispositivos comprados en plataformas de compraventa donde el firmware puede haber sido modificado. Si una aplicación preinstalada muestra anuncios, instala otras aplicaciones, solicita permisos extraños o vuelve a aparecer después de eliminarla, busca el nombre exacto del paquete antes de confiar en ella.

## Después de una actualización del sistema

Las actualizaciones importantes de Android o de la capa del fabricante pueden volver a habilitar aplicaciones que habías desactivado. Las actualizaciones mensuales de seguridad suelen respetar el estado anterior, pero ocurre con suficiente frecuencia como para que merezca la pena comprobarlo después de una actualización grande.

Android 17 no cambia el consejo básico. Google lo publicó para la mayoría de los Pixel compatibles el 16 de junio de 2026, mientras que las demás marcas lo incorporarán a sus propias capas y dispositivos según sus calendarios. En Samsung, Xiaomi, Oppo y móviles similares, la cantidad de bloatware sigue dependiendo mucho más de la imagen del fabricante y de la operadora que del número de versión de Android.
