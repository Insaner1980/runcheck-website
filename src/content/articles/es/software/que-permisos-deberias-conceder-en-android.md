---
title: "¿Qué permisos deberías conceder en Android?"
description: "La regla más sencilla para los permisos de Android es esta: si el permiso no encaja con la función que acabas de intentar usar, deniégalo."
listSummary: "android, permisos y privacidad"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","permisos","privacidad","seguridad","guia"]
locale: "es"
draft: false
---
Que una aplicación de cámara pida acceso a la cámara tiene sentido. Que una linterna pida acceso a los contactos, no. La mayoría de las decisiones sobre permisos no son más complicadas.

El problema es el momento. Las aplicaciones preguntan justo cuando intentas hacer algo, así que Permitir se convierte en el botón rápido. De ese modo se acumulan permisos que nunca debiste conceder.

## Los tres tipos de permisos

Los permisos de Android se pueden dividir en tres grandes grupos.

Los permisos normales tienen poco riesgo y suelen concederse automáticamente. El acceso a Internet es el ejemplo más claro. No aparece una ventana cada vez que una aplicación necesita conectarse a la red.

Los permisos en tiempo de ejecución, llamados a menudo permisos peligrosos en la documentación de Android, protegen datos o componentes que pueden revelar información privada. Aquí entran la ubicación, la cámara, el micrófono, los contactos, el calendario, el teléfono, los SMS, los dispositivos cercanos y el acceso a contenido multimedia. Son los avisos que ves mientras utilizas una aplicación.

Los permisos especiales son más potentes y normalmente obligan a entrar en Ajustes. El acceso de accesibilidad, el acceso a las notificaciones, la capacidad de mostrarse sobre otras aplicaciones, la administración del dispositivo, el acceso de uso, la instalación de aplicaciones desconocidas y el acceso completo a los archivos pertenecen a esta categoría práctica. Trátalos con más cautela que una solicitud normal de cámara o ubicación.

Android 6 introdujo los permisos en tiempo de ejecución. En Android 5.1 y versiones anteriores, las aplicaciones recibían permisos amplios durante la instalación. Si un móvil sigue atascado en una versión tan antigua, el modelo de permisos es solo uno de los muchos motivos para retirarlo.

## Ubicación

La ubicación es útil, pero se solicita más de lo necesario.

Los mapas, el tiempo, el transporte con conductor, los repartos, el ejercicio y la navegación pueden justificarla. Una calculadora, un filtro de galería, un lector de códigos QR o una aplicación de fondos de pantalla normalmente no.

Elige la opción de permitir solo mientras usas la aplicación, salvo que exista una función real en segundo plano. La navegación paso a paso, el registro de una carrera, la seguridad familiar y la localización de dispositivos son ejemplos en los que el acceso en segundo plano puede tener sentido.

Usa la ubicación aproximada para el tiempo, el contenido local, la disponibilidad en tiendas y cualquier función que no necesite tu posición GPS exacta. Android 17 incorpora además un botón de ubicación proporcionado por el sistema que, cuando una aplicación compatible lo integra, puede conceder ubicación precisa solo durante la sesión. Es una opción más adecuada cuando la app necesita la posición exacta de forma puntual, pero no merece acceso preciso permanente.

## Cámara, micrófono y grabación

El acceso a la cámara o al micrófono debería tener una explicación evidente.

Las videollamadas necesitan ambos. Las aplicaciones de mensajería los usan para fotos, notas de voz y mensajes de vídeo. Una aplicación bancaria puede necesitar la cámara para capturar documentos o leer códigos QR.

Si no hay una función visible que use la cámara o el micrófono, deniega la solicitud. Android muestra indicadores de privacidad cuando una aplicación utiliza cualquiera de esos sensores, y Android 12 añadió un panel de privacidad para consultar el uso reciente de la ubicación, la cámara y el micrófono.

Revísalo de vez en cuando. Puede descubrir sorpresas.

## Contactos

El acceso a los contactos es uno de esos permisos que se conceden con demasiada facilidad.

Las aplicaciones de mensajería y redes sociales lo solicitan para encontrar a personas que conoces. Es cómodo, pero el servicio puede subir tu agenda o compararla con sus servidores. Tus contactos no necesariamente han aceptado eso.

Android 17 mejora esta situación con un selector del sistema que permite a las aplicaciones compatibles pedir solo contactos concretos y campos determinados, en lugar de toda la agenda. Úsalo cuando aparezca. Si una aplicación funciona sin acceso a los contactos, normalmente es mejor denegarlo y añadir a las personas manualmente.

## SMS y teléfono

El acceso a los SMS entraña un riesgo alto. Puede revelar códigos de verificación, conversaciones privadas y mensajes de recuperación de cuentas. Solo tu aplicación de mensajería principal debería tener acceso amplio a los SMS.

Algunas aplicaciones bancarias piden leer automáticamente los códigos de un solo uso. Es cómodo, pero introducirlos a mano es más seguro. Si la aplicación funciona sin acceso a los SMS, deniégalo.

El permiso de teléfono puede revelar el estado de las llamadas, el número del dispositivo u otros datos relacionados, según la aplicación y la versión de Android. Una aplicación de teléfono, detección de llamadas, buzón de voz u operador puede tener motivos para pedirlo. La mayoría de las demás, no.

## Archivos, fotos y contenido multimedia

Los permisos de almacenamiento han cambiado mucho entre versiones de Android.

Las versiones antiguas permitían un acceso amplio al almacenamiento. Android 13 separó el acceso al contenido compartido en permisos distintos para imágenes, vídeos y audio. Android 14 añadió Selected Photos Access, que permite dar acceso solo a determinadas fotos y vídeos en lugar de a toda la biblioteca.

Elige la opción más limitada. Da a un editor acceso a las fotos seleccionadas, no a toda tu colección. Da a una aplicación de música acceso al audio, no a todos los archivos. Ten especial cuidado con el acceso completo a los archivos, porque ese permiso especial está pensado para aplicaciones como gestores de archivos y herramientas de copia de seguridad.

## Dispositivos cercanos y Wi-Fi

Los permisos de Bluetooth y dispositivos cercanos pueden ser legítimos. Las aplicaciones de auriculares, hogar inteligente, relojes, altavoces e impresoras suelen necesitarlos.

Android 13 también añadió un permiso para dispositivos Wi-Fi cercanos, destinado a aplicaciones que gestionan conexiones Wi-Fi sin necesitar la ubicación para esa tarea. Es mejor que conceder acceso a la ubicación solo para que una aplicación encuentre una impresora o se conecte a un dispositivo local.

Aun así, no concedas acceso a dispositivos cercanos a una aplicación que no tenga ninguna función de ese tipo.

## Accesibilidad, superposiciones y administración

Esta es la zona peligrosa.

El acceso de accesibilidad puede leer el contenido de la pantalla, observar interacciones y ejecutar acciones en nombre del usuario. Es necesario para herramientas de accesibilidad reales, algunos gestores de contraseñas, aplicaciones de automatización y determinadas ayudas técnicas. El malware también abusa de él.

La opción de mostrarse sobre otras aplicaciones permite dibujar encima de la pantalla. La usan las burbujas de chat y algunos filtros de pantalla. También la emplean superposiciones fraudulentas.

El acceso de administrador del dispositivo puede dificultar la desinstalación de una aplicación. La gestión empresarial, el control parental y las aplicaciones antirrobo pueden tener motivos para usarlo. Un juego no.

Si un limpiador cualquiera pide alguno de estos accesos, desinstálalo.

## Revisa los permisos que ya has concedido

Los permisos no son permanentes.

En Ajustes, abre el gestor de permisos. Según el móvil, suele estar dentro de Seguridad y privacidad o del apartado Aplicaciones. Revisa categorías como Ubicación, Cámara, Micrófono, Contactos, SMS, Teléfono y Fotos y vídeos, y retira el acceso a las aplicaciones que no lo necesiten.

Busca también el apartado de acceso especial de aplicaciones. Comprueba la accesibilidad, el acceso a las notificaciones, la capacidad de mostrarse sobre otras aplicaciones, las aplicaciones de administración, la instalación de aplicaciones desconocidas, el acceso de uso y el acceso completo a archivos.

Android 11 y versiones posteriores pueden restablecer automáticamente los permisos de las aplicaciones que no has usado durante unos meses. Google Play Protect también puede retirar permisos de aplicaciones poco utilizadas en Android 6 a Android 10. Ayuda, pero no sustituye una revisión manual.

## Una lista práctica para decidir

Cuando aparezca una solicitud, hazte tres preguntas.

¿Este permiso coincide con la función que acabo de abrir?

¿Puedo elegir una opción más limitada, como usarlo solo mientras la aplicación está abierta, ubicación aproximada, fotos seleccionadas o acceso de una sola vez?

¿Seguirá funcionando la aplicación si lo deniego?

Ante la duda, deniega. La aplicación puede volver a pedirlo cuando uses una función que realmente lo necesite.
