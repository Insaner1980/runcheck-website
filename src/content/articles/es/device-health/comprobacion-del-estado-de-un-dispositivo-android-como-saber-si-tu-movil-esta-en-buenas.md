---
title: "Comprobación del estado de un dispositivo Android: cómo saber si tu móvil está en buenas condiciones"
metaTitle: "Comprobar el estado de un móvil Android"
description: "Los móviles no se estropean de un día para otro. La batería pierde capacidad poco a poco. El almacenamiento se llena en segundo plano. La temperatura sube cada vez más con las mismas tareas. Cuando los síntomas ya son evidentes, como apagados inesperados, aplicaciones lentas o sobrecalentamiento durante un uso básico, el problema de fondo suele llevar meses desarrollándose."
metaDescription: "Comprueba batería, almacenamiento, temperatura, red, sensores y rendimiento para saber si tu móvil Android está en buen estado."
listSummary: "Los móviles no se estropean de un día para otro."
hub: "device-health"
sourceNumber: 1
order: 1
tags: []
locale: "es"
draft: false
---
Una comprobación del estado del dispositivo permite detectar esas tendencias pronto. Resulta útil para investigar un problema concreto, preparar un móvil para venderlo o averiguar si esa sensación de lentitud es real o solo una impresión.

---

## Qué incluye una comprobación del estado del dispositivo

Una revisión adecuada va mucho más allá del porcentaje de batería. Hay que observar varias áreas en conjunto para saber cómo está envejeciendo realmente el móvil.

El estado de la batería indica cuánta capacidad original conserva. Un móvil que salió de fábrica con 5.000 mAh puede almacenar solo 4.000 mAh después de dos años de carga diaria. Pero la capacidad bruta no lo explica todo. La estabilidad del voltaje, la velocidad de descarga y la temperatura bajo carga influyen en cuánto tiempo de pantalla ofrece esa capacidad restante.

El estado del almacenamiento tampoco se reduce al espacio libre. El almacenamiento interno tiene velocidades de lectura y escritura que pueden degradarse con el tiempo, y una unidad casi llena obliga a Android a trabajar más para gestionar archivos temporales y memoria de intercambio.

El estado térmico, la conectividad de red, el funcionamiento de los sensores y el rendimiento del procesador completan la imagen. El calor persistente acelera el desgaste de la batería y provoca limitación térmica de la CPU. Los diagnósticos de Wi-Fi y red móvil miden cómo funciona realmente una conexión, no solo si existe. Un giroscopio descalibrado o un sensor de proximidad que no responde pueden estropear funciones de forma silenciosa. La presión sobre la memoria también muestra si el móvil sigue gestionando la multitarea sin quedarse atascado.

---

## Por qué los móviles Android se vuelven más lentos con el tiempo

La sensación de que un móvil se ha vuelto más lento no suele ser imaginaria. Se acumulan varios factores y sus efectos se suman.

### Degradación de la batería

Las baterías de iones de litio se desgastan químicamente con cada ciclo de carga. Antes se hablaba a menudo de un umbral de 500 ciclos, pero ya no sirve como regla general. Muchos móviles recientes están diseñados para soportar aproximadamente entre 800 y 1.000 ciclos completos antes de bajar a alrededor del 80 % de su capacidad original, según el modelo, la química de la batería y las condiciones de carga. A partir de ahí, la autonomía de pantalla se acorta de forma apreciable y aumentan las probabilidades de apagados inesperados con cargas de trabajo intensas.

El calor empeora el proceso. Cargar el móvil en un lugar caluroso, jugar mientras está enchufado o dejarlo sobre el salpicadero del coche en verano acelera el desgaste químico.

### Presión del almacenamiento

Aplicaciones, datos en caché, fotos y actualizaciones del sistema. Todo se acumula. Android necesita margen para gestionar archivos temporales y ejecutar actualizaciones. Cuando queda menos de aproximadamente un 10-15 % de espacio disponible, el móvil suele empezar a sentirse más lento. Es una regla práctica, no un límite oficial de Android. Las aplicaciones tardan más en abrirse, la cámara se demora antes de guardar una foto y las animaciones dan tirones.

### Acumulación de procesos en segundo plano

Cada aplicación instalada puede ejecutar servicios en segundo plano, sincronizar datos y enviar notificaciones. Al cabo de uno o dos años, el consumo acumulado crece. Si además las nuevas versiones de Android exigen algo más al hardware, los dispositivos antiguos empiezan a tener dificultades para seguir el ritmo.

### Desgaste físico

Los puertos de carga cogen holgura. Los altavoces pierden claridad. La pantalla táctil puede responder peor en zonas concretas. Los sensores se descalibran. Estos cambios son tan graduales que resulta fácil no darse cuenta hasta que interfieren con el uso diario.

---

## Comprobaciones manuales que puedes hacer ahora mismo

Android incluye herramientas para realizar una evaluación básica sin instalar aplicaciones adicionales.

### Estado de la batería en Ajustes

La ruta cambia según el fabricante:

**Samsung:** abre Samsung Members, toca Asistencia, entra en Diagnóstico del teléfono y selecciona Estado de la batería. Según el modelo, la región y la versión de One UI, puede mostrar una valoración sencilla en lugar de un porcentaje exacto.

**Google Pixel** (Pixel 8a y modelos posteriores): Ajustes > Batería > Estado de la batería muestra el estado y una estimación de la capacidad restante. Ajustes > Información del teléfono > Información de la batería muestra el número de ciclos, la fecha de fabricación y la fecha del primer uso. La función Asistencia para la conservación de la batería, que adapta la carga para proteger la capacidad a largo plazo, está disponible en Pixel 6a y modelos posteriores.

**Xiaomi/POCO** (HyperOS): revisa el apartado Batería de Ajustes para buscar información sobre el estado o los ciclos. La ruta exacta varía según el modelo, la región y la versión de HyperOS.

En los móviles que no muestran esta información en Ajustes, existe un código de diagnóstico: abre el marcador de la aplicación Teléfono y escribe `*#*#4636#*#*`. En los dispositivos compatibles aparece un menú de pruebas con el voltaje, la temperatura y una indicación general del estado de la batería. Normalmente no ofrece un porcentaje real de capacidad ni el número de ciclos.

### Uso del almacenamiento

Ajustes > Almacenamiento muestra el espacio ocupado por categorías, como aplicaciones, fotos, vídeos, archivos del sistema y datos en caché. Conviene actuar si el uso supera el 85 %. Vaciar cachés y trasladar archivos antiguos puede mejorar de forma perceptible la respuesta del móvil.

### Temperatura

La mayoría de los móviles no incluyen un monitor de temperatura visible, pero las señales físicas importan. Si el teléfono se nota caliente al navegar de forma ligera o incluso estando inactivo, merece la pena investigarlo. En los dispositivos compatibles, el menú `*#*#4636#*#*` muestra la temperatura de la batería y proporciona al menos un valor concreto.

### Pruebas básicas de hardware

Puedes hacer varias comprobaciones rápidas: abre una aplicación de dibujo y arrastra el dedo por toda la pantalla para detectar zonas táctiles muertas. Reproduce sonido a distintos volúmenes para probar los altavoces. Graba una nota de voz para comprobar el micrófono. Prueba las dos cámaras, el flash y la rotación de pantalla.

---

## Diagnósticos avanzados

Las comprobaciones manuales cubren lo más visible. Para obtener una imagen más completa hacen falta herramientas más profundas.

### Pruebas de sensores

Los móviles incorporan muchos sensores: acelerómetro, giroscopio, magnetómetro, sensor de proximidad, sensor de luz ambiental y barómetro. Cuando uno falla, los síntomas suelen ser muy concretos. La rotación automática deja de funcionar, la pantalla no se apaga durante las llamadas, la brújula se desvía o la precisión del GPS cae en picado.

Para probar sensores individuales necesitas una aplicación de diagnóstico o los códigos del fabricante. Samsung admite `*#0*#` para abrir un menú de pruebas de hardware. Otros fabricantes tienen sus propios códigos, aunque su disponibilidad es irregular.

### Pruebas de rendimiento

Las herramientas de benchmark someten la CPU, la GPU y la memoria a pruebas estandarizadas y generan una puntuación que puede compararse con los valores esperados para ese modelo. Una puntuación muy inferior a la habitual puede indicar limitación térmica, demasiada actividad en segundo plano o degradación del hardware.

### Diagnóstico de red

Saber que el Wi-Fi está conectado dice poco. La velocidad real, la latencia, la pérdida de paquetes y la estabilidad de la señal determinan el rendimiento cotidiano. Un diagnóstico detallado ayuda a separar los problemas del propio móvil de los fallos de la red.

### Análisis de la batería

Una etiqueta del tipo «Bueno» o «Malo» en los ajustes de Android solo ofrece una orientación aproximada. Un análisis adecuado compara la capacidad real con la capacidad nominal, registra las velocidades de descarga en distintas condiciones, controla los patrones de temperatura a lo largo del tiempo y cuenta los ciclos cuando el dispositivo expone esos datos. En los móviles que no ofrecen contadores reales de hardware, las aplicaciones todavía pueden estimar la capacidad a partir del comportamiento durante la carga, pero el resultado debe interpretarse con más cautela. Estos datos permiten saber si cambiar la batería prolongaría de forma apreciable la vida útil del móvil.

Saltar entre menús de Ajustes, códigos del marcador y pruebas manuales permite comprobar muchas cosas, pero la información queda fragmentada. Una aplicación de diagnóstico como **runcheck** reúne las métricas de batería, temperatura, red y almacenamiento en un único panel con una puntuación de estado unificada. Es útil para revisiones periódicas y especialmente valiosa al comprar o vender un móvil de segunda mano, cuando ambas partes se benefician de un informe objetivo sobre su estado.

---

## Preguntas frecuentes

### ¿Con qué frecuencia debería hacer una comprobación?

Una vez al mes es suficiente para la mayoría. En móviles de más de dos años, o cuando aparecen problemas de rendimiento, una revisión cada dos semanas ayuda a detectar antes las tendencias: pérdida de capacidad, aumento de la temperatura o almacenamiento que se llena sin que lo notes.

### ¿Un restablecimiento de fábrica arregla un móvil lento?

Depende de la causa. Puede ayudar con la acumulación de software, procesos en segundo plano descontrolados y cachés dañadas. No hace nada por una batería degradada, chips de almacenamiento desgastados o sensores averiados. Ejecutar primero un diagnóstico ayuda a saber en qué lado está el problema.

Haz una copia de seguridad de todo antes de restablecer el móvil.

### ¿A partir de qué porcentaje de estado de la batería debería plantearme cambiarla?

El umbral habitual está alrededor del 80 % de la capacidad nominal original. Por debajo, la menor autonomía y la necesidad de cargar con más frecuencia se vuelven difíciles de ignorar. Por debajo del 70 %, el móvil puede resultar complicado de usar como dispositivo principal. La tendencia de los datos suele ser clara mucho antes de llegar a ese punto.

### ¿Funcionan los códigos de diagnóstico en todos los móviles Android?

No. `*#*#4636#*#*` funciona en muchos dispositivos, pero no en todos. Samsung utiliza códigos propios, y fabricantes como Xiaomi, OnePlus y Motorola los gestionan de forma diferente. Esta fragmentación es uno de los motivos por los que existen las aplicaciones de diagnóstico: permiten estandarizar las pruebas entre fabricantes.

### ¿Son seguras las aplicaciones de diagnóstico de terceros?

Sí, siempre que procedan de desarrolladores de confianza y se descarguen desde Google Play Store. Las opciones más seguras procesan los datos en el propio dispositivo y no exigen una cuenta, acceso a Internet ni permisos ajenos al diagnóstico. Si una aplicación pide acceso a los contactos o los mensajes para «comprobar el estado del dispositivo», es una señal de alarma.

---

Las revisiones periódicas convierten una vaga sensación de que «algo no va bien» en datos concretos. Una comprobación mensual lleva pocos minutos y puede descubrir problemas, como una batería que pierde capacidad, temperaturas que suben o un almacenamiento que se llena, antes de que empiecen a interrumpir el uso diario.
