---
title: "Menú CIT de Xiaomi: pruebas de hardware ocultas para Xiaomi, Redmi y POCO"
description: "El menú CIT de Xiaomi permite ejecutar pruebas de hardware integradas en móviles Xiaomi. Consulta los códigos, la ruta desde Ajustes, las pruebas útiles y lo que CIT no puede diagnosticar."
listSummary: "El menú CIT de Xiaomi permite ejecutar pruebas de hardware integradas en móviles Xiaomi."
hub: "brands"
sourceNumber: 159
order: 7
tags: ["hardware","pruebas","diagnostico","android","guia"]
locale: "es"
draft: false
---
CIT es la comprobación de hardware integrada más rápida en la mayoría de los móviles Xiaomi, incluidos los modelos Redmi y POCO con MIUI o HyperOS oficiales. No es bonito. Tampoco explica gran cosa. Pero cuando necesitas saber si la pantalla táctil, el altavoz, el micrófono, un sensor o la cámara responden de verdad, te lleva hasta la prueba más rápido que muchas aplicaciones de diagnóstico de Google Play.

Xiaomi suele llamarlo detección de hardware o modo CIT en sus páginas de asistencia. Aparece sobre todo al solucionar un problema concreto, como una pantalla táctil que registra pulsaciones erráticas o un móvil que se reinicia continuamente. El menú sirve para hacer pruebas en ese momento, no para seguir el estado del dispositivo a lo largo del tiempo.

Ese es todo el truco.

## Abre primero CIT

La ruta más rápida es el código del marcador. Abre la aplicación Teléfono e introduce `*#*#6484#*#*`. En algunas compilaciones de Xiaomi, `*#*#64663#*#*` abre el mismo menú de detección de hardware. No necesitas pulsar el botón de llamada.

Si el código no responde, prueba desde Ajustes. Abre la página de información del teléfono y entra en el apartado de especificaciones detalladas o de todas las especificaciones, según la versión. Después, pulsa varias veces **Versión del kernel**. En muchas compilaciones de MIUI y HyperOS, el móvil muestra una cuenta atrás y abre CIT.

La ruta exacta cambia porque Xiaomi ha reorganizado Ajustes entre MIUI, HyperOS, compilaciones regionales y tablets. Las versiones antiguas de MIUI pueden mostrar **Versión del kernel** directamente en Acerca del teléfono. En HyperOS suele estar dentro de la página de información detallada.

Si ninguna ruta abre CIT, comprueba tres cosas antes de concluir que el móvil no lo incluye: utilizas firmware oficial de Xiaomi, estás usando la aplicación Teléfono original y el dispositivo no ejecuta una ROM personalizada como LineageOS. Las ROM personalizadas suelen eliminar los componentes privados de diagnóstico de Xiaomi.

## Qué puede comprobar CIT de verdad

CIT prueba el hardware de forma suficientemente directa para resultar útil, aunque suele ofrecer resultados sencillos de aprobado o fallo. Puede decirte que un micrófono no ha grabado o que una zona táctil no ha respondido. No puede determinar si la causa es agua, un cable flex suelto, una pantalla de sustitución defectuosa o un error de firmware.

El menú cambia según el modelo. Un Redmi Note sin NFC no mostrará la misma lista que un Xiaomi de gama alta con emisor de infrarrojos, lector de huellas bajo la pantalla, barómetro y varios módulos de cámara. Es normal.

Las comprobaciones habituales de CIT incluyen pantalla, panel táctil, auricular, altavoz, micrófonos, motor de vibración, cámaras, lector de huellas, sensor de proximidad, sensor de luz ambiental, acelerómetro, giroscopio, brújula, lector SIM, Wi-Fi, Bluetooth, NFC, emisor de infrarrojos y estado de carga.

## La prueba táctil es la primera que conviene ejecutar

Si vas a comprar un móvil Xiaomi de segunda mano, empieza por la prueba táctil. Detecta problemas que pueden pasar desapercibidos al deslizar rápidamente por la pantalla de inicio.

La prueba suele mostrar una cuadrícula o un área de dibujo. Arrastra el dedo por las secciones indicadas y busca huecos, líneas interrumpidas o zonas que se niegan a ponerse verdes. Un móvil usado puede parecer impecable y aun así tener una franja muerta cerca del borde del digitalizador. Es mejor descubrirlo antes de pagar.

Las propias páginas de asistencia de Xiaomi recomiendan utilizar el modo CIT cuando el panel registra movimientos erráticos, responde con retraso o no funciona correctamente. También recuerdan las causas aburridas que mucha gente omite: cristal agrietado, agua, protectores de pantalla de terceros, dedos sudados, cargadores inestables o una sola aplicación defectuosa. La prueba ayuda, pero no hace magia.

## Sensores, audio, cámaras y conectividad

Las pruebas de audio son sencillas. La del altavoz reproduce sonido por el altavoz principal, la del receptor utiliza el auricular y las del micrófono graban y reproducen un fragmento breve. Escucha si hay chasquidos, volumen bajo, ruido estático o silencio. Un micrófono inferior puede fallar aunque las llamadas parezcan normales, porque el móvil puede cambiar de micrófono según la aplicación.

Las pruebas de sensores suelen mostrar valores en tiempo real o pedirte una acción sencilla. Tapa el sensor de proximidad junto al auricular. Gira el móvil para probar el giroscopio. Muévelo para comprobar el acelerómetro y la brújula. Acerca y aleja el sensor de luz de una lámpara. Si los valores no cambian nunca, algo no funciona bien.

Las pruebas de cámara abren los módulos delantero y traseros. Confirman que la cámara se inicia, enfoca y captura. No demuestran que la calidad de imagen sea buena. Una lente rayada, una estabilización deficiente, polvo bajo el cristal o una aplicación de cámara de terceros con fallos pueden seguir causando problemas fuera de la prueba.

Las comprobaciones de conectividad buscan redes Wi-Fi o dispositivos Bluetooth. Eso basta para confirmar que la radio detecta lo que hay alrededor. No diagnostica el router, la operadora, una VPN ni un edificio lleno de redes de 2,4 GHz que interfieren entre sí.

## Batería, carga e información de versión

CIT puede mostrar información básica de batería y carga, como el nivel, el voltaje, la temperatura y si el móvil detecta un cargador. Resulta útil cuando un teléfono se niega a cargar o solo funciona con un cable concreto.

No lo confundas con un historial real del estado de la batería. CIT no ofrece un gráfico de degradación a largo plazo, una cronología de ciclos de carga ni comparaciones entre cargadores. Es una instantánea.

Muchas compilaciones de Xiaomi también incluyen un área de información de hardware. Sus páginas de asistencia mencionan el uso de `*#*#6484#*#*` para abrir la detección de hardware y consultar elementos como IMEI, número de compilación, versión de banda base, versión del kernel, ID de CPU y versión de hardware. Es útil cuando quieres comparar la compilación que aparece en Ajustes con la información de bajo nivel del dispositivo.

## Android 17, HyperOS y compatibilidad

Android 17 ha llegado primero a los Pixel compatibles. Google incluye a Xiaomi entre los fabricantes asociados de la beta de Android 17, pero eso no significa que todos los móviles Xiaomi, Redmi o POCO estén ejecutando ya la versión estable de Android 17.

En los móviles Xiaomi, lo importante para CIT es la capa de firmware: MIUI o HyperOS. CIT es una función de detección de hardware de Xiaomi, no una función genérica de Android 17. Una actualización de HyperOS puede cambiar la ruta, ocultar un código, renombrar una prueba o corregir un fallo de diagnóstico sin que Android sea la causa principal.

Dicho de forma sencilla, no te preocupes si una guía escrita para MIUI 14 no coincide exactamente con tu móvil HyperOS. Prueba los dos métodos de acceso.

## Cuándo resulta útil CIT

CIT es especialmente útil para comprobaciones rápidas antes de comprar un móvil de segunda mano, después de una caída, tras contacto con agua o después de reparar la pantalla o la batería. Ejecuta la prueba automática completa si tienes tiempo. Utiliza pruebas individuales si ya sabes dónde está el problema.

Haz una captura de la pantalla de resultados si necesitas una prueba. No confíes en que CIT guarde un informe permanente que puedas exportar más adelante.

Es menos útil para móviles lentos, cierres aleatorios de aplicaciones, falta de espacio, consumo de batería durante varios días o limitación térmica al jugar. Esos problemas necesitan historial, no una prueba de hardware de un minuto.

## Preguntas habituales

### ¿Puede CIT dañar el móvil?

No. Las pruebas normales leen sensores, reproducen audio, activan el motor de vibración, abren las cámaras y comprueban si los componentes responden. No borran datos ni instalan firmware. Sal con el botón Atrás o reinicia el móvil si el menú se queda bloqueado.

### ¿Por qué aparecen algunas etiquetas en chino?

Algunos modelos Xiaomi y Redmi siguen mostrando etiquetas de CIT sin traducir, especialmente con firmware de la región china o versiones antiguas de MIUI. Las pruebas suelen funcionar igual. El idioma es molesto, no peligroso.

### ¿Funciona CIT en móviles POCO y tablets Xiaomi?

Normalmente sí, siempre que el dispositivo ejecute firmware oficial de Xiaomi. Las pruebas disponibles dependen del hardware. Una tablet solo Wi-Fi no mostrará las mismas comprobaciones de red móvil que un Redmi, y un POCO sin emisor de infrarrojos no incluirá esa prueba.

---
