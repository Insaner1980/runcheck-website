---
title: "Códigos de servicio Android por marca: rutas documentadas que aún pueden funcionar"
description: "Rutas de servicio y diagnóstico documentadas aquí para Samsung, Pixel y Xiaomi. La disponibilidad y el funcionamiento varían según modelo, región, operador, software y fabricante; Android 17 no ofrece un conjunto universal de códigos."
listSummary: "Rutas de servicio y diagnóstico específicas de cada marca, con límites de modelo y software."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostico", "sensores", "android", "hardware", "guia"]
locale: "es"
draft: false
---
No existe una lista completa y fiable. Los códigos dependen del fabricante, modelo, aplicación Teléfono, firmware, operador y región. Solo se conservan los vinculados a documentación oficial actual.

Prueba directa: [Samsung documenta `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google el código Pixel `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB) y [Xiaomi el acceso CIT](https://www.mi.com/global/support/faq/details/KA-491482/) con `*#*#6484#*#*` o `*#*#64663#*#*` en dispositivos aplicables.

## Samsung Galaxy

Samsung sigue teniendo uno de los sistemas de diagnóstico más completos, en parte porque ofrece tanto códigos de marcación como una aplicación con soporte oficial.

`*#0*#` abre la pantalla de pruebas de hardware de Samsung en muchos Galaxy. El diseño exacto cambia según el modelo, pero normalmente permite probar la pantalla, la respuesta táctil, las cámaras, los altavoces, la vibración, los sensores y, a veces, el lector de huellas. En algunos modelos de operador o con firmware muy restringido, el código no se abre.

Samsung Members es la vía más segura para la mayoría de las personas. Abre Samsung Members, toca Ayuda en la parte inferior y selecciona Ver pruebas dentro de Diagnóstico. Las pruebas son más guiadas y los resultados resultan más fáciles de interpretar que los del menú de servicio.

## Xiaomi, Redmi y POCO

[La página de soporte de Xiaomi](https://www.mi.com/global/support/faq/details/KA-491482/) documenta dos códigos del marcador para una prueba CIT de la pantalla táctil en los dispositivos aplicables: `*#*#6484#*#*` y `*#*#64663#*#*`.

En la prueba documentada, desliza un dedo por la pantalla y busca líneas interrumpidas o adicionales. La fuente solo respalda esta solución de problemas de la pantalla táctil. La disponibilidad y el funcionamiento varían según modelo, región, operador, firmware y versión de software.

## Google Pixel

La documentación de Pixel describe una ruta de diagnóstico específica de Pixel. Su disponibilidad puede variar según el modelo, la región, el operador y la versión del software.

`*#*#7287#*#*` abre la aplicación de diagnóstico de reparación de Pixel en los modelos compatibles. Google la documenta para comprobar el hardware antes o después de una reparación. Necesita conexión a Internet y te guía por el proceso en pantalla.

Para comprobaciones específicas de batería en Pixel 6 y posteriores, usa Ajustes > Batería > Diagnóstico de la batería. Es una ruta normal de Ajustes, no un código oculto.

Algunos artículos antiguos mencionan el truco `.12345+=` en la Calculadora para abrir un modo de ingeniería de Pixel. No conviene depender de él en 2026. Usa el código oficial de diagnóstico de Pixel.

## Safety

Si un código documentado no funciona, usa la aplicación de diagnóstico o instrucciones de servicio compatibles del fabricante. No desactives controles de seguridad ni introduzcas códigos de reinicio, aprovisionamiento, calibración de radio, firmware o programación desde una lista sin verificar.
