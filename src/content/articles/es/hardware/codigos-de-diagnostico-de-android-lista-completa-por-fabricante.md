---
title: "Códigos de diagnóstico de Android: lista completa por fabricante"
description: "Códigos de diagnóstico de Android por fabricante, incluidos Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO y Realme, con notas actualizadas sobre Android 17."
listSummary: "diagnostico, sensores y android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostico","sensores","android","hardware","guia"]
locale: "es"
draft: false
---
---

Escribes `*#0*#` en un Galaxy y aparece un menú completo de pruebas de hardware. Introduces el mismo código en otro Galaxy y no ocurre nada.

Ese es el funcionamiento normal de los códigos de diagnóstico de Android. Son útiles, pero en Internet suelen presentarse como si fueran mucho más universales de lo que realmente son. Un código puede funcionar en un móvil, fallar en otro de la misma marca y desaparecer tras una actualización del firmware del operador. Estos códigos dependen de una combinación poco ordenada de Android, la aplicación Teléfono, los menús de servicio del OEM y las restricciones del operador.

Google lanzó Android 17 el 16 de junio de 2026 y lo puso primero a disposición de la mayoría de los dispositivos Pixel compatibles. Los dispositivos de socios como OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp e iQOO siguen sus propios canales beta y calendarios de despliegue de Android 17. Esto importa porque Android 17 no unifica los códigos de diagnóstico ocultos de las distintas marcas.

Usa la aplicación Teléfono preinstalada para probarlos. Los códigos de Samsung suelen necesitar Samsung Phone. Los de Google suelen necesitar Phone by Google. Muchas aplicaciones de teléfono de terceros no procesan los códigos MMI o de servicio.

## Antes de probar un código

Limítate a los códigos de información de solo lectura y a las pruebas de hardware. No introduzcas códigos de restablecimiento, aprovisionamiento, configuración del módem o programación de servicio a menos que sepas exactamente qué hacen.

La mayoría de los códigos de prueba se ejecutan al escribir el último carácter. En algunos móviles hay que pulsar el botón de llamada. Si no sucede nada, no lo introduzcas una y otra vez. Lo más probable es que no sea compatible con ese modelo, aplicación Teléfono, firmware del operador o versión de Android.

## Códigos que funcionan en muchos móviles Android

Son lo más parecido a códigos de diagnóstico comunes en Android, aunque tampoco están garantizados en todos los dispositivos.

| Código | Qué hace | Notas |
|---|---|---|
| `*#06#` | Muestra el IMEI y, a veces, el MEID o el EID | Es el código de teléfono con mayor compatibilidad. Resulta útil para la garantía, las comprobaciones de bloqueo y la asistencia del operador. |
| `#07#` | Muestra información normativa y datos SAR | Funciona en muchos móviles Android. En algunos hay que pulsar el botón de llamada. |
| `*#*#4636#*#*` | Abre el menú de pruebas de Android | Puede mostrar información del teléfono, estado de la red, datos de señal, estadísticas de la batería y detalles de Wi-Fi. Su disponibilidad varía mucho. |
| `*#*#426#*#*` | Abre el diagnóstico de Firebase Cloud Messaging | Conviene probarlo desde Phone by Google. Puede ayudar cuando no llegan las notificaciones push. |

El menú `*#*#4636#*#*` es uno de los códigos de Android más citados, pero no te sorprendas si muestra menos campos que las capturas antiguas. Las versiones recientes de Android y las capas de los fabricantes ocultan más datos de red y batería que antes.

## Samsung Galaxy

Samsung ofrece dos vías de diagnóstico: Samsung Members y los códigos de marcación ocultos. Empieza por Samsung Members. Es la opción con soporte oficial, está actualizada y resulta más fácil de interpretar.

Abre Samsung Members, toca Ayuda en la parte inferior y selecciona Ver pruebas dentro de Diagnóstico. La lista puede incluir Cámara, conexión USB, carga por cable, estado de la batería, pantalla táctil, sensores, vibración, micrófono, altavoz, Wi-Fi, Bluetooth, tarjeta SIM, NFC y reconocimiento de huellas. La selección exacta depende del modelo.

Los códigos de marcación de Samsung siguen siendo útiles, sobre todo en móviles libres, pero los ajustes de seguridad de One UI, el comportamiento de Bloqueador automático, las políticas empresariales y el firmware del operador pueden bloquearlos.

| Código | Qué hace | Notas |
|---|---|---|
| `*#0*#` | Abre el menú principal de pruebas de hardware de Samsung | Las pruebas pueden incluir colores de pantalla, respuesta táctil, auricular, altavoz, vibración, cámaras, sensores, S Pen y otros componentes. |
| `*#0228#` | Pantalla de estado de la batería | Muestra el voltaje actual de la batería y otros datos relacionados en muchos modelos. Algunas versiones recientes lo bloquean. |
| `*#0011#` | Pantalla de red ServiceMode | Sirve para consultar la señal y la celda en servicio. No cambies ajustes dentro de este menú. |
| `*#0842#` | Prueba de vibración | Funciona en muchos modelos Samsung, pero no en todos. |
| `*#0673#` o `*#0289#` | Prueba de audio | El comportamiento del altavoz y el auricular varía según el modelo. |
| `*#2663#` | Información del firmware táctil | Lo utilizan con frecuencia los técnicos de servicio. |
| `*#7353#` | Menú de pruebas rápidas | Es más habitual en modelos Galaxy antiguos. |
| `*#1234#` | Datos de versión del firmware | Muestra información de las compilaciones AP, CP y CSC. |
| `*#7412365#` | Información del firmware de la cámara | Su disponibilidad varía. |
| `*#0588#` | Prueba del sensor de proximidad | Puede ayudar si la pantalla no se apaga durante las llamadas. |
| `*#9900#` | Modo SysDump | Está orientado principalmente a registros y depuración. No cambies opciones al azar. |
| `*#9090#` | Configuración de diagnóstico | Evita cambiar nada salvo que sigas instrucciones oficiales del servicio técnico. |

Si `*#0*#` no funciona, no des por hecho que el móvil es falso. Prueba primero Samsung Phone en lugar de Google Phone. Después, abre las pruebas de Samsung Members. Si estas funcionan, la vía de diagnóstico del hardware sigue disponible aunque el código oculto esté bloqueado.

## Google Pixel

Los Pixel son más restrictivos que los Samsung. No existe un equivalente para Pixel del menú `*#0*#`.

| Código | Qué hace | Notas |
|---|---|---|
| `*#*#7287#*#*` | Abre el diagnóstico de reparación de Pixel en dispositivos compatibles | Google lo documenta para los procesos de autorreparación de Pixel. Necesita conexión a Internet y puede variar según el modelo, la región y el estado del software. |
| `*#*#4636#*#*` | Menú de pruebas de Android | Se usa a menudo para consultar datos del teléfono y la red, pero los campos varían según la versión de Android. |
| `*#*#426#*#*` | Diagnóstico de FCM | Puede ayudar a investigar problemas con las notificaciones push. |
| `#07#` | Información normativa y SAR | Funciona en muchos modelos Pixel. |

Los Pixel 6 y posteriores también incluyen el apartado Estado del dispositivo y asistencia en Ajustes, disponible en todos los idiomas. No es lo mismo que el código de diagnóstico de reparación, pero suele ser un mejor punto de partida para preguntas sobre la batería, la carga, el rendimiento y la asistencia.

Android 17 está disponible mediante actualización inalámbrica para los Pixel compatibles desde Pixel 6 hasta Pixel 10a. Esto no significa que todos los Pixel tengan el mismo diagnóstico. El hardware, la región y la compatibilidad con el modo de reparación siguen importando.

## Xiaomi, Redmi y POCO

El menú CIT de Xiaomi es uno de los conjuntos de pruebas de OEM más completos, aunque su contenido cambia entre MIUI, HyperOS, las versiones regionales y las distintas gamas.

| Código | Qué hace | Notas |
|---|---|---|
| `*#*#6484#*#*` | Abre el menú de pruebas de hardware CIT | Suele incluir pantalla, respuesta táctil, vibración, altavoces, micrófonos, cámaras, sensores, GPS, Wi-Fi, Bluetooth, SIM, botones, huella, emisor de infrarrojos y NFC. |
| `*#*#64663#*#*` | Código CIT alternativo | Funciona en algunos modelos Xiaomi antiguos. |
| `*#*#4636#*#*` | Menú de pruebas de Android | Su disponibilidad varía, especialmente en versiones recientes de HyperOS. |

En algunos Xiaomi también puedes abrir CIT desde la información del teléfono en Ajustes tocando varias veces Versión del kernel. Si el código de marcación falla, prueba esa vía.

## OnePlus

El acceso a los diagnósticos de OnePlus ha cambiado con los años a medida que OxygenOS se ha acercado a ColorOS. No te sorprendas si una guía antigua no coincide con tu móvil actual.

| Código | Qué hace | Notas |
|---|---|---|
| `*#808#` | Engineering Mode | Las pruebas de hardware pueden incluir pantalla, respuesta táctil, cámaras, sensores, audio, carga y módulos de red. La disponibilidad varía según OxygenOS y la región. |
| `*#*#4636#*#*` | Menú de pruebas de Android | Sigue funcionando en muchos modelos. |
| `*#888#` | Versión de hardware o información de producción | No aparece en todos los modelos. |
| `*#1234#` | Versión del firmware | Funciona en algunas versiones de OnePlus. |

Ten cuidado dentro de Engineering Mode. Usa las pantallas de prueba, pero no cambies opciones del módem, calibración o servicio.

## Motorola

Motorola tiene menos códigos públicos que Samsung o Xiaomi, pero muchos modelos incluyen una aplicación de pruebas de servicio.

| Código | Qué hace | Notas |
|---|---|---|
| `*#*#2486#*#*` | Abre CQATest o el menú de pruebas de servicio | Puede incluir pantalla, respuesta táctil, altavoz, vibración, cámara y sensores. |
| `*#*#4636#*#*` | Menú de pruebas de Android | Funciona en muchos modelos. |
| `.12345+=` | Abre el modo de ingeniería desde la aplicación Calculadora preinstalada | Solo funciona en algunos Motorola y únicamente en la calculadora original. |

Si CQATest aparece en la lista de aplicaciones después de una prueba, no te alarmes. Es un componente de pruebas de fábrica de Motorola.

## OPPO y Realme

OPPO y Realme comparten gran parte de la base de ColorOS, por lo que sus códigos de servicio se solapan.

| Código | Qué hace | Notas |
|---|---|---|
| `*#899#` | Menú de pruebas manuales o ingeniería | Es una vía habitual para abrir pruebas de hardware en muchas versiones de ColorOS y Realme UI. |
| `*#800#` | Herramienta de ingeniería y registros | Suele utilizarse para registros y diagnósticos de red. |
| `*#6776#` | Información del software y el dispositivo | Muestra el modelo y datos del firmware en muchos dispositivos. |
| `*#*#4636#*#*` | Menú de pruebas de Android | Su disponibilidad varía. |

La opción más segura suele ser la aplicación preinstalada Phone Manager, My OPPO, My realme o la herramienta de asistencia, si el modelo incluye alguna de ellas.

## Códigos que conviene evitar

Evita los códigos de restablecimiento de fábrica y programación de servicio que aparecen en listas aleatorias. Uno especialmente peligroso que todavía se repite es `*2767*3855#`, un código de restablecimiento de fábrica de antiguos dispositivos Samsung. No lo escribas para "ver qué pasa". Así es como se pierden datos.

Evita también cualquier opción descrita como NV, calibración RF, programación del módem, aprovisionamiento del operador o configuración de servicio. Esos menús no son juguetes de diagnóstico.

## Cuando los códigos no funcionan

Prueba primero la aplicación Teléfono preinstalada. Después, utiliza la aplicación de asistencia o diagnóstico del fabricante. Samsung Members, el diagnóstico de Pixel, Xiaomi CIT desde Ajustes, Motorola CQATest y las herramientas de OPPO o Realme pueden funcionar aunque los códigos de marcación estén bloqueados.

Los móviles bloqueados por un operador pueden impedir el uso de códigos. Lo mismo ocurre con los dispositivos gestionados por una empresa y con algunas funciones de seguridad. Una actualización de Android puede eliminar u ocultar partes de un menú. Resulta frustrante, pero no significa automáticamente que el móvil tenga un problema de hardware.

Para una comprobación puntual de un componente, los códigos de diagnóstico son útiles. Para los problemas lentos no bastan. Una prueba del altavoz no muestra que el móvil se sobrecalienta cada tarde, y una pantalla de batería no revela que la corriente de carga lleva un mes disminuyendo. runcheck cubre ese hueco al supervisar con el tiempo las tendencias de batería, temperatura, red, almacenamiento y carga.

## Preguntas frecuentes

### ¿Pueden dañar el móvil los códigos de diagnóstico?

Los códigos de información y pruebas suelen ser seguros. Los que restablecen datos o cambian ajustes de servicio no lo son. Busca información sobre el código exacto antes de introducirlo.

### ¿Tengo que pulsar el botón de llamada?

Normalmente no. La mayoría de los códigos `*#*#...#*#*` y `*#...#` se ejecutan al introducir el último carácter. Algunos móviles requieren pulsar el botón de llamada, sobre todo con códigos cortos como `#07#`.

### ¿Por qué un código funciona en un móvil y no en otro?

Porque lo implementan el OEM, la aplicación Teléfono, el firmware y, a veces, el operador. Android no garantiza un menú universal de pruebas de hardware.

### ¿Pueden las aplicaciones sustituir a los códigos de diagnóstico?

En parte. Aplicaciones como Samsung Members, Phone Doctor Plus, TestM y DevCheck pueden probar la pantalla, los altavoces, las cámaras y los sensores, además de mostrar lecturas de batería y estado de red mediante las API de Android. Normalmente no acceden a las mismas pantallas de bajo nivel que utilizan los menús de servicio del fabricante.
