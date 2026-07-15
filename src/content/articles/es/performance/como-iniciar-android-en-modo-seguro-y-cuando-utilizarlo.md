---
title: "Cómo iniciar Android en modo seguro y cuándo utilizarlo"
description: "Cómo iniciar Android en modo seguro, qué desactiva y cómo utilizarlo para localizar aplicaciones problemáticas."
listSummary: "bateria, consumo y solucion-de-problemas"
hub: "performance"
sourceNumber: 70
order: 7
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
¿Cómo puedes saber si el móvil va lento porque Android está teniendo un mal día o porque una aplicación está causando problemas en segundo plano? El modo seguro es la prueba más limpia.

El modo seguro inicia Android únicamente con el software del sistema y las aplicaciones preinstaladas. Las aplicaciones que instalaste después quedan desactivadas hasta que reinicias con normalidad. No se borra nada. El objetivo es aislar la causa: si el problema desaparece en modo seguro, probablemente intervenga una aplicación de terceros. Si continúa, revisa el propio Android, el almacenamiento, la batería o el hardware.

## Cuándo merece la pena utilizar el modo seguro

Utiliza el modo seguro cuando el móvil se cierre, se bloquee, se reinicie, se sobrecaliente, consuma batería a una velocidad anormal o muestre ventanas emergentes que no desaparecen. También resulta útil después de una actualización importante de Android si el teléfono empieza a funcionar muy mal y el uso de batería no señala claramente a una aplicación.

No sirve solo para fallos graves. Si el teclado responde tarde, el launcher se redibuja continuamente o el móvil tarda varios segundos en reaccionar después de desbloquearlo, el modo seguro puede responder a la pregunta importante: ¿está implicada alguna aplicación instalada?

La prueba es sencilla. Inicia el modo seguro, utiliza el móvil durante unos minutos e intenta reproducir el fallo.

## Iniciar el modo seguro con el móvil encendido

En la mayoría de los móviles Android, abre primero el menú de apagado.

En Pixel 6 y modelos posteriores, incluidos los Pixel Fold, mantén pulsados **Encendido + Subir volumen** durante unos segundos. En muchos otros móviles, mantén pulsado el botón de **Encendido** o el botón lateral. Los Samsung suelen utilizar el **botón lateral + Bajar volumen**, o el icono de apagado del panel de ajustes rápidos.

Cuando aparezca el menú, mantén pulsado **Apagar** o **Reiniciar** en la pantalla. Después de un momento, Android debería mostrar la opción de modo seguro. Toca **Aceptar** o **Modo seguro**.

El móvil se reiniciará. Cuando termine, deberías ver **Modo seguro** en la esquina inferior izquierda.

## Iniciar el modo seguro con el móvil apagado

Este método es útil cuando el dispositivo es demasiado inestable para llegar al menú de apagado.

Enciéndelo con normalidad. En cuanto aparezca el logotipo del fabricante o la animación de arranque, mantén pulsado **Bajar volumen**. No sueltes el botón hasta que aparezca la pantalla de bloqueo o la pantalla de inicio. Si ha funcionado, verás **Modo seguro** en la parte inferior.

El momento importa. Si pulsas demasiado pronto, algunos móviles pueden abrir el bootloader o el modo de recuperación (Recovery). Si lo haces demasiado tarde, Android arrancará con normalidad. Si no funciona, apágalo y vuelve a intentarlo.

## Notas para Samsung

Samsung admite ambas rutas en los móviles y tabletas Galaxy actuales.

Con el Galaxy encendido, abre el menú de apagado, mantén pulsado **Apagar** y toca **Modo seguro**. Con el dispositivo apagado, enciéndelo y mantén pulsado **Bajar volumen** cuando aparezca el logotipo de Samsung.

Antes de hacer la prueba, conviene guardar una captura de la pantalla de inicio si la disposición de iconos y widgets te importa. Algunas aplicaciones y widgets de terceros no estarán disponibles mientras el modo seguro esté activo y quizá tengas que volver a colocarlos después.

## Si el móvil está bloqueado

Si el dispositivo no responde, fuerza primero un reinicio.

En la mayoría de los Samsung, mantén pulsados **Encendido + Bajar volumen** durante más de 7 segundos. En muchos otros móviles Android, mantén **Encendido** o **Encendido + Bajar volumen** durante unos 10-15 segundos, hasta que la pantalla se apague o el dispositivo se reinicie.

Después utiliza el método para un móvil apagado: enciéndelo, espera al logotipo y mantén pulsado **Bajar volumen**.

## Qué probar en modo seguro

No entres en modo seguro para salir inmediatamente. Utiliza el móvil el tiempo suficiente para obtener una respuesta útil.

Prueba lo que fallaba. Abre Ajustes. Desbloquea el móvil varias veces. Escribe en un campo de texto. Observa la temperatura de la batería. Mantén la pantalla encendida durante cinco minutos. Si el dispositivo se reiniciaba al azar, déjalo reposar un rato.

El modo seguro desactiva las aplicaciones descargadas, por lo que quizá no funcionen tus aplicaciones habituales de mensajería, redes sociales, banca, VPN, launcher o teclado. Es normal. Las llamadas, los SMS, el Wi-Fi, los datos móviles y Ajustes deberían seguir disponibles. Google indica que el modo avión puede activarse automáticamente al entrar en modo seguro en algunos Pixel. Desactívalo si necesitas conexión para la prueba.

## Si el problema desaparece

La principal sospechosa es una aplicación de terceros.

Empieza por las aplicaciones que han cambiado recientemente: instalaciones nuevas, actualizaciones recientes, launchers, VPN, limpiadores, herramientas de automatización, aplicaciones para ahorrar batería, teclados y cualquier aplicación con permisos de accesibilidad o administración del dispositivo.

Sal del modo seguro, desinstala o inhabilita una aplicación sospechosa y prueba el móvil con normalidad. No elimines diez a la vez salvo que el dispositivo sea inutilizable. Cambiar una sola cosa cada vez te permite saber qué lo arregló.

Algunas aplicaciones no se dejan desinstalar porque tienen permisos de administración del dispositivo. Si Android no te deja desinstalar una, busca las aplicaciones de administración del dispositivo dentro de **Seguridad y privacidad** o el apartado equivalente de tu móvil. La ruta cambia según el fabricante, pero el procedimiento es el mismo: retira primero el permiso de administración y desinstala después la aplicación.

## Si el problema continúa

Si el modo seguro no ayuda, probablemente la causa no sea una aplicación descargada.

Eso apunta a un error del sistema, un estado del sistema dañado, falta de almacenamiento, una mala actualización, una batería que está fallando, sobrecalentamiento u otro problema de hardware. Después de una actualización reciente a Android 17, por ejemplo, comprobaría si otras personas con el mismo modelo describen el mismo síntoma antes de hacer nada drástico.

Los siguientes pasos son prácticos: instala otra actualización del sistema si hay un parche disponible, libera almacenamiento, revisa el uso y la temperatura de la batería, borra la partición de caché solo si el móvil aún ofrece esa opción y guarda una copia de los datos importantes antes de plantearte un restablecimiento de fábrica.

El restablecimiento de fábrica es el último recurso. Puede corregir problemas de software, pero exige bastante trabajo y no reparará un almacenamiento envejecido, una batería débil ni un botón dañado.

## Cómo salir del modo seguro

Reinicia el móvil con normalidad. Eso es todo.

Pulsa el botón de encendido o utiliza el icono de apagado de los ajustes rápidos y toca **Reiniciar**. En algunos modelos, Samsung también muestra una notificación de modo seguro que puedes tocar para desactivarlo.

Si el dispositivo vuelve siempre al modo seguro, comprueba el botón de **Bajar volumen**. Un botón atascado, una funda demasiado ajustada, suciedad alrededor de la tecla o un interruptor dañado pueden activar el modo seguro durante el arranque. Quita la funda y reinicia de nuevo.

## Límites y sorpresas habituales

El modo seguro no borra aplicaciones, fotos, mensajes ni datos de las cuentas. Solo desactiva las aplicaciones descargadas mientras permanece activo.

Los widgets de aplicaciones de terceros pueden desaparecer temporalmente de la pantalla de inicio. Google recomienda hacer una captura antes de utilizar el modo seguro si los widgets son importantes para ti. Quizá tengas que volver a añadirlos después de salir.

El modo seguro tampoco desactiva las aplicaciones del sistema del fabricante. Los componentes de Samsung, Xiaomi, OnePlus, el operador y Google pueden seguir funcionando porque Android los considera parte de la imagen instalada del sistema. Si una aplicación preinstalada causa el problema, el modo seguro quizá no consiga aislarla.

Esa limitación resulta molesta, pero el modo seguro sigue mereciendo la pena. Responde a una de las preguntas de diagnóstico más útiles en menos de cinco minutos.
