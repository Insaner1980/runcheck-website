---
title: "Cómo hacer una copia de seguridad de tu móvil Android antes de solucionar problemas"
description: "Haz una copia de seguridad antes de borrar los datos de una aplicación, restablecer sus preferencias, entrar en el modo de recuperación o realizar un restablecimiento de fábrica. Algunas soluciones son inocuas. Otras solo lo parecen hasta que desaparece un archivo local, un historial de chat o un código 2FA."
listSummary: "rendimiento, velocidad y android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
Una buena copia no tiene por qué ser complicada. Solo necesitas saber qué guarda Android, qué deja fuera y qué aplicaciones requieren su propio sistema de copia antes de tocar nada destructivo.

## Qué guarda Google automáticamente

Cuando utilizas una cuenta de Google en un móvil Android, parte de la información ya está sincronizada fuera del dispositivo. Los contactos guardados en Contactos de Google, los eventos de Google Calendar, Gmail y muchos ajustes de las aplicaciones de Google vuelven a aparecer después de un restablecimiento de fábrica cuando inicias sesión de nuevo. Google Fotos también guarda fotos y vídeos si la copia de seguridad está activada en la aplicación.

La copia integrada de Google cubre más de lo que mucha gente cree, pero menos de lo que suele darse por hecho. Puede incluir aplicaciones y parte de sus datos, el historial de llamadas, los contactos, los ajustes del dispositivo y los mensajes SMS y MMS. Si utilizas Mensajes de Google, también puede guardar los mensajes RCS. Con Teléfono de Google, puede incluir además los ajustes de llamadas y los números bloqueados.

La parte complicada son los datos de las aplicaciones. Android permite que cada aplicación utilice su sistema de copia, pero el desarrollador puede limitar lo que se guarda o excluirla por completo. Las aplicaciones bancarias, las de autenticación 2FA y algunos juegos no siempre se restauran como esperas. No es un fallo de la copia. Así funcionan las reglas de copia de seguridad de Android.

Los archivos son una trampa aún mayor. No conviene confiar a ciegas en que la copia del dispositivo incluya Descargas, archivos PDF, grabaciones, documentos, música o ficheros guardados dentro de carpetas de aplicaciones. En febrero de 2026, Google añadió en los servicios de Google Play v26.06 una función de copia de archivos locales que puede guardar documentos descargados en Google Drive en los móviles compatibles. Tómala como protección adicional para esos documentos, no como una copia completa del almacenamiento interno.

## Android 17 cambió el calendario, no la lista

Android 17 empezó a distribuirse el 16 de junio de 2026, primero en la mayoría de los Pixel compatibles. Los demás móviles Android que puedan actualizarse lo irán recibiendo más adelante durante 2026, según el fabricante y la operadora.

Esto significa que dos teléfonos colocados uno al lado del otro pueden mostrar versiones distintas de Android durante un tiempo. Un Pixel puede tener ya Android 17 mientras que un Samsung, OnePlus, Motorola o Xiaomi sigue esperando. La lista de copia de seguridad es la misma, aunque la ruta y los nombres de Ajustes pueden cambiar un poco.

En muchos móviles puedes empezar por **Ajustes > Google > Todos los servicios > Copia de seguridad**. En Pixel también puede aparecer directamente como **Ajustes > Google > Copia de seguridad**. En Samsung Galaxy, busca **Ajustes > Cuentas y copia de seguridad > Copia de seguridad de datos**.

## Comprueba la copia antes de empezar

Abre la pantalla de copia de seguridad y revisa dos cosas: que esté activada y cuándo se completó la última copia correctamente. Si la fecha es antigua, toca **Crear copia de seguridad ahora** y deja que termine antes de continuar.

No tengas prisa. El proceso completo de copia y restauración de Google puede tardar hasta 24 horas, aunque las copias pequeñas suelen finalizar mucho antes. Si vas a restablecer el móvil de fábrica, espera a que la pantalla muestre una copia reciente completada. No des por hecho que se terminó en segundo plano.

Si el teléfono se queda en "Esperando para crear copia de seguridad", empieza por lo básico. Conéctalo al Wi-Fi, ponlo a cargar, actualiza los servicios de Google Play y Google One si se solicita, y comprueba que el almacenamiento de Google no esté lleno. El espacio gratuito de la cuenta se comparte entre Gmail, Drive y Fotos, así que puede agotarse antes de lo que parece.

## Copia manualmente los archivos locales

Para los archivos locales, una copia manual sigue siendo la alternativa más segura.

Conecta el móvil a un ordenador mediante un cable USB-C. Cuando aparezca la notificación USB, tócala y selecciona **Transferencia de archivos**. El almacenamiento interno del teléfono debería mostrarse en el ordenador.

Copia estas carpetas si existen:

- DCIM, para las fotos y vídeos de la cámara.
- Download, para archivos PDF, entradas, instaladores, formularios y cualquier contenido guardado desde el navegador.
- Documents, para los archivos creados o guardados por aplicaciones de productividad.
- Music y Recordings, si almacenas audio local en el móvil.
- Pictures y Movies, sobre todo si utilizas aplicaciones que guardan contenido multimedia fuera de DCIM.
- Las carpetas multimedia de WhatsApp, si están presentes. En versiones recientes de Android pueden encontrarse en Android/media/com.whatsapp/WhatsApp/Media en lugar de aparecer directamente en el almacenamiento interno.

Aunque la copia de Google Fotos esté activa, guarda una copia local de DCIM antes de un restablecimiento de fábrica. No me gusta depender de un único interruptor en la nube para fotos irremplazables. Basta con usar la cuenta equivocada, tener la cuota llena o descubrir que una carpeta nunca se seleccionó para perder algo importante.

Quienes tengan un Samsung disponen de otra opción razonable: Samsung Smart Switch. Instala Smart Switch en un PC con Windows o un Mac, conecta el Galaxy por USB, elige la opción de copia de seguridad y revisa las categorías antes de empezar. Smart Switch puede guardar datos como llamadas, contactos, mensajes y aplicaciones, pero Samsung advierte de que no admite todos los tipos de archivo ni todos los elementos. Úsalo como una red de seguridad amplia, no como la única copia de tus archivos más importantes.

## Guarda las aplicaciones de mensajería por separado

Las aplicaciones de mensajería funcionan a su manera. No supongas que Android se ocupa de todas.

WhatsApp utiliza su propio sistema. Abre **WhatsApp > Ajustes > Chats > Copia de seguridad**, y comprueba la cuenta de Google, la frecuencia y la fecha de la última copia. Cuando cambias a otro móvil Android o restauras el dispositivo después de borrarlo, los chats de WhatsApp solo regresan si la copia estaba activada antes del restablecimiento.

Los chats normales de Telegram se guardan en sus servidores y reaparecen al iniciar sesión. Los chats secretos son diferentes. Están vinculados al dispositivo, no forman parte de la nube de Telegram y no se trasladan a otro teléfono.

Signal ofrece ahora más de una vía. Signal Secure Backups es una opción voluntaria, cifrada de extremo a extremo y protegida con una clave de recuperación. Signal también admite copias locales en Android, almacenadas como carpetas cifradas dentro del dispositivo. Si eliges esta segunda opción, copia la carpeta completa de Signal en un lugar seguro y conserva la clave de recuperación. Sin ambas cosas, la copia no sirve.

## Protege las aplicaciones de autenticación y los códigos 2FA

Este es el paso que mucha gente se salta. También es el que puede dejarte fuera de las cuentas que más te importan.

Google Authenticator puede sincronizar los códigos con la cuenta de Google activa en la aplicación. Ábrelo y comprueba el icono de la cuenta en la parte superior. Si Authenticator funciona sin una cuenta de Google iniciada, transfiere los códigos manualmente antes de restablecer el móvil: abre el menú, selecciona **Transferir cuentas**, después **Exportar cuentas**, y escanea los códigos QR con otro dispositivo.

Microsoft Authenticator admite copia en la nube, pero una copia de Android solo se restaura en Android y una de iOS solo en iOS. Abre los ajustes de la aplicación, activa la copia en la nube y confirma qué cuenta personal de Microsoft se utilizará para la recuperación. Las cuentas del trabajo o de un centro educativo pueden pedirte que inicies sesión de nuevo después de restaurarlas.

Authy admite copia cifrada en la nube y sincronización entre dispositivos móviles. Comprueba que las copias estén activadas y que recuerdes su contraseña. Authy no puede recuperarla por ti.

Guarda también los códigos de recuperación de cualquier servicio protegido con 2FA. Puedes almacenarlos en un gestor de contraseñas o imprimirlos y dejarlos en un lugar privado. Una captura de pantalla es mejor que nada, pero también coloca información de recuperación de cuentas dentro de tu fototeca, que quizá no sea el lugar adecuado.

## Qué acciones requieren una copia completa

Borrar la caché de una aplicación elimina archivos temporales. No debería borrar tu cuenta, documentos, fotos ni datos guardados. Para esa acción concreta, normalmente no hace falta una copia completa.

Borrar los datos de una aplicación es distinto. La devuelve al estado de recién instalada. Pueden desaparecer notas locales, descargas, sesiones iniciadas, mapas sin conexión, avances de juegos y ajustes propios. Guarda primero los datos de esa aplicación.

El modo seguro desactiva las aplicaciones de terceros mientras Android funciona en ese modo. No las elimina. Al reiniciar normalmente deberían volver. La copia es opcional, salvo que estés utilizando el modo seguro como parte de una limpieza más amplia.

Borrar la partición de caché, en los móviles que todavía ofrecen esa opción, elimina archivos temporales del sistema desde el modo de recuperación. Los datos personales deberían mantenerse, pero ya estás trabajando en una pantalla de bajo nivel. Haz una copia antes si el dispositivo funciona lo bastante bien para ello.

Un restablecimiento de fábrica borra el teléfono. Sin excepciones. En Samsung Galaxy, la ruta suele ser **Ajustes > Administración general > Restablecer > Restablecer valores de fábrica**. En Pixel y muchos dispositivos con Android puro, utiliza **Ajustes > Sistema > Opciones de restablecimiento > Borrar todos los datos (restablecer datos de fábrica)**. No empieces hasta haber comprobado la copia de Google, la de las fotos, los archivos locales, las aplicaciones de mensajería y los códigos 2FA.

## Antes de restablecer, comprueba FRP

Factory Reset Protection (FRP) es el bloqueo antirrobo de Android. Después de un restablecimiento, Android puede pedir el bloqueo de pantalla o una de las cuentas de Google que ya estaban sincronizadas con el teléfono. Si no puedes facilitar esos datos, el proceso de configuración puede quedar bloqueado hasta que se verifique la propiedad.

Antes de llegar al restablecimiento de fábrica, confirma la dirección de la cuenta de Google utilizada en el móvil y prueba su contraseña en un navegador o en otro dispositivo. Comprueba también el PIN, el patrón o la contraseña del teléfono.

No elimines tu cuenta de Google solo para evitar FRP si vas a restablecer tu propio móvil como parte de una reparación. Al quitarla también puedes perder el acceso a la copia que pretendías restaurar. Vender o regalar el dispositivo es un proceso distinto. Para solucionar problemas, el objetivo es sencillo: confirmar las credenciales, terminar la copia y restablecer únicamente cuando las opciones menos arriesgadas no hayan funcionado.
