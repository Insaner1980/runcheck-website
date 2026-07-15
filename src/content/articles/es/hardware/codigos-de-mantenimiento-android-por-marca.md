---
title: "Códigos de diagnóstico de Android: lista completa por fabricante"
description: "Códigos de servicio de Android que funcionan según la marca, con notas actuales sobre Android 17, dispositivos Pixel, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme y Oppo."
listSummary: "diagnostico, sensores y android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostico","sensores","android","hardware","guia"]
locale: "es"
draft: false
---
Los códigos de servicio de Android son útiles, pero también bastante caóticos. Algunos forman parte de Android, otros los añade el fabricante y otros desaparecen tras una actualización del firmware sin previo aviso.

Esto importa aún más ahora que Android 17 ya está disponible. Google lo lanzó primero para la mayoría de los Pixel compatibles, mientras Samsung, Xiaomi, OnePlus, Motorola y otras marcas distribuyen sus propias versiones de Android 17 en calendarios distintos. Que un código funcione hoy en un Pixel con Android 17 no dice nada sobre un Galaxy o Redmi que todavía no haya recibido su firmware de Android 17.

Dos reglas antes de empezar. La mayoría de los códigos se activan al introducir el último carácter, por lo que normalmente no hay que pulsar el botón de llamada. Y si un código abre un menú que no entiendes, consulta la información, pero no cambies nada.

## Códigos universales

Son lo más parecido a una base común en Android. Aun así, un firmware personalizado puede bloquearlos.

`*#06#` muestra el número IMEI de la radio móvil. Los teléfonos con doble SIM suelen mostrar dos números IMEI. Es el código más seguro de la lista y funciona en casi todos los móviles, incluidos los iPhone.

`*#*#4636#*#*` abre el menú de pruebas de Android en muchos dispositivos. Puede mostrar información del teléfono, estadísticas de la batería, intensidad de la señal y datos de la radio. El problema es que muchas capas de fabricante lo restringen, especialmente en versiones recientes de Samsung y Xiaomi.

`*#*#426#*#*` abre el diagnóstico de Firebase Cloud Messaging. Resulta útil sobre todo cuando las notificaciones push llegan tarde o no llegan, porque muestra si los Servicios de Google Play pueden mantener la conexión con los servidores de Google.

`*#07#` muestra información SAR en muchos móviles Android. SAR significa Specific Absorption Rate, o tasa de absorción específica, y mide la energía de radiofrecuencia que absorbe el cuerpo durante el uso. En Estados Unidos, el límite de la FCC para teléfonos es de 1,6 W/kg. En Europa, el límite habitual para la exposición de la cabeza y el tronco es de 2,0 W/kg, calculado sobre 10 gramos de tejido.

## Samsung Galaxy

Samsung sigue teniendo uno de los sistemas de diagnóstico más completos, en parte porque ofrece tanto códigos de marcación como una aplicación con soporte oficial.

`*#0*#` abre la pantalla de pruebas de hardware de Samsung en muchos Galaxy. El diseño exacto cambia según el modelo, pero normalmente permite probar la pantalla, la respuesta táctil, las cámaras, los altavoces, la vibración, los sensores y, a veces, el lector de huellas. En algunos modelos de operador o con firmware muy restringido, el código no se abre.

Samsung Members es la vía más segura para la mayoría de las personas. Abre Samsung Members, toca Ayuda en la parte inferior y selecciona Ver pruebas dentro de Diagnóstico. Las pruebas son más guiadas y los resultados resultan más fáciles de interpretar que los del menú de servicio.

`*#0228#` muestra datos del estado de la batería, como el voltaje y la temperatura, en muchas versiones de firmware de Galaxy. No ofrece un porcentaje claro del estado de la batería.

`*#0011#` abre ServiceMode en una amplia variedad de modelos, con datos en directo de la red móvil como la banda, la celda en servicio y la señal. Puede ser útil, pero es fácil interpretarlo mal si no trabajas con redes móviles.

`*#9900#` abre SysDump en algunos Galaxy. La única opción que la mayoría debería tocar es la limpieza de registros si el servicio técnico ha indicado expresamente que hay que borrar archivos acumulados de dumpstate o logcat.

`*#2663#` muestra información del firmware del panel táctil en algunos modelos. No actualices el firmware táctil solo porque exista un botón. Úsalo únicamente si estás investigando un problema real de respuesta táctil.

## Xiaomi, Redmi y POCO

El conjunto de pruebas de fábrica de Xiaomi se llama CIT. Es uno de los pocos menús de diagnóstico de Android que todavía cuenta con documentación oficial razonable.

`*#*#6484#*#*` abre la detección de hardware CIT en muchos Xiaomi, Redmi y POCO. Si no responde, prueba `*#*#64663#*#*`. Las páginas de soporte de Xiaomi mencionan ambos códigos según el modelo y la región.

El menú CIT puede incluir pruebas de pantalla, respuesta táctil, altavoz, micrófono, vibración, cámara, sensor de proximidad, sensor de luz, acelerómetro, giroscopio, brújula, Wi-Fi, Bluetooth, detección de SIM, huella, NFC y carga. La lista depende del hardware del móvil.

A menudo puedes abrir el mismo menú sin usar un código. Entra en la información del teléfono desde Ajustes y toca varias veces Versión del kernel. Xiaomi cambia los nombres de algunos apartados entre MIUI y HyperOS, pero este acceso sigue mereciendo la pena cuando la aplicación Teléfono bloquea el código.

`*#*#6485#*#*` muestra información de la batería en muchos Xiaomi. Interpreta los valores como lecturas técnicas, no como un sustituto sencillo de una página sobre el estado de la batería.

## Google Pixel

Los Pixel admiten los códigos universales de Android, pero el código de diagnóstico actual más importante es específico de Pixel.

`*#*#7287#*#*` abre la aplicación de diagnóstico de reparación de Pixel en los modelos compatibles. Google la documenta para comprobar el hardware antes o después de una reparación. Necesita conexión a Internet y te guía por el proceso en pantalla.

Para comprobaciones específicas de batería en Pixel 6 y posteriores, usa Ajustes > Batería > Diagnóstico de la batería. Es una ruta normal de Ajustes, no un código oculto.

`*#*#4636#*#*` sigue funcionando en muchos Pixel para consultar información de radio y batería. No es una herramienta de reparación ni sirve para forzar actualizaciones de Android.

Algunos artículos antiguos mencionan el truco `.12345+=` en la Calculadora para abrir un modo de ingeniería de Pixel. No conviene depender de él en 2026. Usa el código oficial de diagnóstico de Pixel.

## OnePlus

Los códigos de OnePlus son irregulares porque OxygenOS se ha acercado a ColorOS durante los últimos años.

`*#808#` abre Engineer Mode en algunos OnePlus antiguos, sobre todo en las series OnePlus 7, 8 y 9. En versiones recientes del firmware puede estar bloqueado.

`*#899#` abre un menú de diagnóstico o registros en algunos dispositivos de la familia OnePlus y Oppo. Su contenido varía mucho.

`*#*#4636#*#*` suele ser el código básico más útil para consultar datos de red y batería. Para probar el hardware en OnePlus recientes, la aplicación de diagnóstico o asistencia preinstalada, o una aplicación fiable de sensores, suele ser menos frustrante que perseguir códigos antiguos.

## Motorola

`*#*#2486#*#*` es conocido por abrir el menú de ingeniería o pruebas de hardware en muchos Moto. La compatibilidad depende del modelo.

La vía más fiable es la aplicación Device Help, preinstalada en muchos modelos, que permite ejecutar un diagnóstico completo del hardware. Es más fácil de explicar a una persona no técnica y no depende de que un código oculto siga activado.

`*#*#4636#*#*` funciona en muchos Motorola porque sus versiones de Android suelen mantenerse relativamente cerca de Android puro.

## Huawei y Honor

`*#*#2846579#*#*` abre ProjectMenu en muchos Huawei y Honor antiguos con EMUI o MagicUI. Incluye ajustes de software, segundo plano, red y servicio. Algunas opciones están pensadas para técnicos.

`*#*#6130#*#*` muestra información de red en algunos modelos Huawei.

En dispositivos HarmonyOS recientes, usa la aplicación de asistencia en lugar de esperar que funcionen todos los códigos antiguos de Android. Huawei ha trasladado muchos diagnósticos para el usuario a procesos guiados de soporte.

## Realme y Oppo

`*#800#` abre Engineer Mode en algunos Realme y Oppo. El acceso está mucho más restringido en versiones recientes de ColorOS.

`*#899#` puede abrir un menú de diagnóstico o registros en algunos modelos.

Estas marcas cambian el acceso al diagnóstico con frecuencia. Si un código no funciona, no sigas probando listas aleatorias de foros antiguos. Usa Phone Manager, la aplicación de asistencia o una herramienta conocida de información de hardware.

## Por qué dejan de funcionar los códigos

La aplicación Teléfono importa. Una aplicación de terceros puede no procesar los códigos MMI y de servicio igual que la aplicación preinstalada. Prueba primero la que venía con el móvil.

El firmware del operador puede eliminar códigos. Un Galaxy bloqueado por un operador puede comportarse de forma distinta a un Galaxy libre con el mismo hardware.

Las grandes actualizaciones pueden cambiarlo todo. Android 17 es un buen ejemplo: los Pixel lo recibieron primero, pero cada OEM distribuye su propia versión de Android 17 con menús de servicio, permisos y restricciones distintos. Si un código deja de funcionar después de actualizar el sistema, puede estar bloqueado y no averiado.

Y sí, muchas listas de códigos en Internet están desactualizadas. Un código copiado de un foro del Galaxy S8 puede no funcionar en un Galaxy S26, aunque el artículo diga "todos los Samsung".

## Alternativas más seguras

Para las comprobaciones cotidianas, la aplicación de diagnóstico del fabricante suele ser mejor que un menú oculto. Samsung Members, Xiaomi CIT, el diagnóstico de reparación de Pixel, Motorola Device Help y Huawei Support son más fáciles de interpretar y entrañan menos riesgo.

Para obtener una vista general de solo lectura, aplicaciones como DevCheck, CPU-Z, AIDA64 y Phone Doctor Plus pueden mostrar lecturas de batería, valores de sensores, datos de CPU, almacenamiento e información de red mediante las API públicas de Android. No acceden a todas las pruebas de fábrica, pero bastan para la mayoría de las comprobaciones.

Para una visión más amplia del estado del dispositivo, runcheck combina los diagnósticos de batería, temperatura, red y almacenamiento en un solo panel, sin obligarte a saltar entre menús de servicio.

## Qué no debes tocar

No cambies las bandas de red salvo que sepas exactamente por qué lo haces.

No pulses botones de actualización de firmware dentro de menús de servicio solo para ver qué ocurre.

No uses opciones de restablecimiento, calibración o fábrica de una lista de códigos sin haber creado una copia de seguridad y saber qué hace cada opción.

Leer valores es seguro. El problema empieza al cambiar ajustes ocultos.
