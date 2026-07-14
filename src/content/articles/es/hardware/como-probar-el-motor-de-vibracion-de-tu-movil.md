---
title: "Cómo probar el motor de vibración de tu móvil"
description: "Formas rápidas de probar el motor de vibración de un móvil Android mediante ajustes, respuesta háptica del teclado, modo seguro y diagnósticos del fabricante."
listSummary: "hardware, pruebas y diagnostico"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["hardware","pruebas","diagnostico","android","guia"]
locale: "es"
draft: false
---
---

Que un móvil no vibre no significa automáticamente que el motor esté averiado. La mayoría de los problemas de vibración empiezan en los ajustes, después viene el software y solo al final el hardware.

Ese orden importa. Cambiar un motor háptico cuando No molestar estaba bloqueando la vibración es tirar el dinero.

## Revisa primero los ajustes de vibración

Abre Ajustes y busca el apartado de sonido y vibración, sonidos o respuesta háptica. La ruta exacta depende del fabricante.

En los Samsung Galaxy, ve a Ajustes > Sonidos y vibración > Intensidad de la vibración. Las llamadas, las notificaciones, la respuesta del sistema y la respuesta táctil pueden tener controles separados. Es fácil bajar uno de ellos y dejar los demás activos.

Comprueba también No molestar. En Android sin muchas modificaciones y en los Pixel, sus controles suelen estar dentro del apartado de notificaciones de Ajustes. En Samsung, la ruta habitual es Ajustes > Notificaciones > No molestar. Según cómo hayas configurado las llamadas, las aplicaciones y los horarios, este modo puede silenciar la vibración.

Un detalle más: revisa el teclado. Gboard, Teclado Samsung y SwiftKey tienen sus propios ajustes de respuesta háptica. Si la vibración está desactivada dentro de la aplicación del teclado, las teclas no vibrarán aunque el motor funcione perfectamente.

## Usa una prueba directa de vibración

Los Samsung Galaxy tienen la opción integrada más clara. Abre Samsung Members, toca Ayuda y luego Ver pruebas dentro de Diagnóstico. Ejecuta la prueba de vibración si aparece en tu modelo, o inicia el diagnóstico completo. Esta vía es más segura que depender de códigos ocultos.

El antiguo código de Samsung `*#0*#` sigue abriendo un menú de pruebas de hardware en muchos Galaxy. Toca la opción de vibración y el móvil debería vibrar hasta que salgas de la prueba. Debes usar la aplicación Teléfono de Samsung. El firmware del operador, los ajustes de seguridad de versiones recientes de One UI o las restricciones empresariales pueden bloquear el menú.

Algunos móviles Android también reaccionan a `*#*#0842#*#*`, un código usado desde hace años para probar la vibración y la retroiluminación. No lo trates como universal. Los Pixel normalmente no lo admiten y muchas aplicaciones de teléfono actuales lo ignoran.

En Xiaomi, Redmi y POCO, prueba el menú CIT con `*#*#6484#*#*`. El nombre del menú y la lista de pruebas varían entre versiones de MIUI y HyperOS, pero suele incluir una comprobación de vibración.

## Prueba la respuesta háptica fina con el teclado

Abre una aplicación de notas y escribe unas cuantas frases. Si la vibración táctil está activada, cada pulsación debería producir un pequeño impulso.

Es una prueba útil porque compara la respuesta háptica sutil con la vibración más intensa de las llamadas entrantes. Si el motor produce pequeños toques al escribir pero no vibra con las llamadas, probablemente el problema esté en un canal de notificaciones.

En Android, cada aplicación puede controlar la vibración por canal de notificación. Abre Ajustes > Aplicaciones, elige la aplicación que debería vibrar y revisa el apartado de notificaciones. En Teléfono, Mensajes, WhatsApp, Telegram o Gmail, comprueba que el canal concreto tenga activada la vibración.

## Separa el software del hardware

Reinicia primero el móvil. Parece demasiado sencillo, pero una anomalía de software puede dejar la respuesta háptica bloqueada y un reinicio puede recuperarla.

Si la vibración vuelve después de reiniciar y desaparece más tarde, prueba el modo seguro. En muchos móviles Android, abre el menú de encendido y mantén pulsada la opción de apagar hasta que aparezca el aviso de modo seguro. En muchos Samsung, reinicia y mantén pulsado el botón de bajar volumen durante el arranque.

El modo seguro desactiva las aplicaciones de terceros. Si la vibración funciona allí, elimina o desactiva una a una las aplicaciones recientes de automatización, filtrado de llamadas, ahorro de batería, lanzadores y accesibilidad. Son las sospechosas habituales.

Si la vibración no funciona en modo seguro, no responde en Samsung Members ni en el menú de pruebas del fabricante y todos los ajustes están activados, lo más probable es que falle el motor o su conexión.

## Qué puede fallar dentro del móvil

Los móviles Android suelen usar uno de dos tipos de motor háptico. Los modelos antiguos y económicos a menudo montan un motor de masa giratoria excéntrica, o ERM. Se percibe como un pequeño zumbido giratorio. Los móviles de gama media y alta suelen usar un actuador resonante lineal, o LRA, con una respuesta más nítida y precisa.

Ambos pueden averiarse. Una caída puede aflojar un cable flex, dañar soldaduras o romper el soporte que mantiene el motor contra el chasis. El agua puede corroer el conector. También existe desgaste, aunque estos motores suelen durar mucho tiempo salvo que el móvil haya sufrido golpes o se haya abierto antes.

La vibración intermitente es el síntoma clásico de una conexión floja. Un día es fuerte, al siguiente débil y después desaparece por completo tras una caída. Ese patrón resulta más sospechoso que un motor que deja de funcionar de manera definitiva de un momento a otro.

## Qué esperar de la reparación

Sustituir el motor de vibración suele ser una de las reparaciones de hardware más económicas, pero los móviles sellados todavía requieren calor, retirada de adhesivo y un montaje cuidadoso. En modelos modulares, como algunos Fairphone, la pieza puede cambiarla el propio usuario. En la mayoría de los móviles Android convencionales, un técnico tiene que abrir la tapa trasera.

Si el móvil sufrió una caída recientemente y la vibración empezó a fallar justo después, pide al taller que compruebe el conector antes de cambiar el motor. A veces el motor está bien y el cable simplemente no ha quedado asentado.

runcheck no prueba directamente el motor de vibración, pero ayuda a detectar señales relacionadas, como sobrecalentamiento, cambios en el consumo de batería o inestabilidad de carga después de una caída o un incidente con humedad.
