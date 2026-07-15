---
title: "Cómo realizar un diagnóstico completo en un móvil Android"
description: "Android no tiene un único botón de \"ejecutar diagnóstico\" que lo compruebe todo de una vez. Las herramientas existen, pero están repartidas entre los menús de Ajustes, códigos ocultos del marcador, aplicaciones del fabricante y comandos del sistema que la mayoría de la gente nunca llega a ver. Esta guía las reúne en un solo recorrido que abarca el mayor número posible de móviles, sin ocultar las diferencias entre fabricantes, operadoras y versiones de Android."
listSummary: "Android no tiene un único botón de \"ejecutar diagnóstico\" que lo compruebe todo de una vez."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","actualizaciones","seguridad","software","guia"]
locale: "es"
draft: false
---
## La vía más rápida: las herramientas de diagnóstico del fabricante

Muchos fabricantes importantes incluyen su propia utilidad de diagnóstico, ya sea preinstalada o accesible mediante un código oculto. Empieza por aquí antes de instalar nada.

**Los móviles Samsung Galaxy** cuentan con uno de los sistemas de diagnóstico integrados más accesibles. Abre la aplicación Teléfono y marca `*#0*#`. Aparecerá un panel de pruebas con botones independientes para la pantalla (fondos rojo, verde y azul que ayudan a detectar píxeles muertos), la respuesta táctil, las cámaras delantera y trasera, los altavoces, el motor de vibración y sensores como el acelerómetro y el sensor de proximidad. El código funciona en muchos Galaxy, incluidos modelos antiguos y buques insignia recientes, pero el firmware de algunas operadoras y determinadas versiones regionales pueden desactivar los menús de servicio. Samsung también incluye una batería de pruebas en Samsung Members. Abre la aplicación, entra en **Asistencia** y después en **Diagnóstico del dispositivo**. Allí puedes comprobar automáticamente la batería, la pantalla, el panel táctil, el audio, el Wi-Fi, el Bluetooth y varios sensores, con un resultado de aprobado o fallo para cada elemento. Samsung Members está disponible en la mayoría de los Galaxy modernos. En los modelos y regiones compatibles, las versiones recientes de One UI también pueden mostrar el porcentaje de estado de la batería y el recuento de ciclos en la página de información de la batería.

**Los móviles Google Pixel** ofrecen dos vías de diagnóstico relevantes. En los Pixel 6 y posteriores, busca en Ajustes el apartado **Device health and support**. Muestra el estado general del dispositivo y de sus funciones, información de la batería y la temperatura, y comprobaciones sugeridas para aspectos como la carga o la respuesta táctil. El nombre exacto del apartado puede variar según el idioma y la versión del sistema. En los Pixel compatibles también puedes iniciar el diagnóstico de reparación abriendo la aplicación Teléfono, manteniendo el móvil conectado a Internet y marcando `*#*#7287#*#*`. En el Pixel 8a y modelos posteriores, **Ajustes > Información del teléfono > Información sobre la batería** muestra el recuento de ciclos, la fecha de fabricación y la fecha del primer uso. En muchos otros dispositivos con Android puro o una versión cercana, el código `*#*#4636#*#*` abre un menú oculto con apartados para la información del teléfono (intensidad de la señal, tipo de red y modo de red preferido), estadísticas de la batería (voltaje, temperatura y estado) y datos de uso. Este código forma parte de Android desde hace años, pero suele funcionar mejor en móviles antiguos, ya que algunos dispositivos recientes y ciertas operadoras restringen el acceso.

**Los móviles Xiaomi, POCO y Redmi** disponen de un menú CIT (Component Integrated Testing) oculto. Marca `*#*#6484#*#*` o `*#*#64663#*#*` en la aplicación Teléfono. Se abrirá una batería de pruebas para la pantalla táctil, los colores de la pantalla, el sensor de proximidad, el acelerómetro, el giroscopio, la brújula, el flash LED, los altavoces, el micrófono, la cámara, la vibración, el Wi-Fi, el Bluetooth, el GPS y el lector de huellas. Cada prueba requiere una confirmación manual: el móvil muestra un patrón o reproduce un sonido y tú indicas si el resultado es correcto o no.

**Algunos móviles OnePlus** responden al código `*#808#` y abren un menú de diagnóstico. Cuando está disponible, permite probar la pantalla, el audio, la conectividad y los sensores, aunque su presencia varía más que en Samsung y Pixel.

Estos códigos no funcionan en todos los dispositivos. Algunos móviles bloqueados por una operadora los desactivan y ciertos fabricantes los eliminan con actualizaciones de software. Si un código no hace nada, significa que no está implementado o que se ha deshabilitado en ese modelo.

## Herramientas integradas de Android que funcionan en casi cualquier móvil

Aunque no haya un menú específico del fabricante, todos los móviles Android modernos ofrecen información útil de diagnóstico en Ajustes. No equivale a una prueba completa del dispositivo, pero permite detectar problemas frecuentes.

**Los datos de uso de la batería**, dentro de **Ajustes > Batería**, muestran cómo se ha descargado durante las últimas 24 horas o, en algunos fabricantes, durante varios días. Busca caídas anormalmente pronunciadas, que pueden indicar que una aplicación o un proceso en segundo plano está consumiendo más de lo debido. En Android 9 y 10, esta pantalla es más sencilla: muestra una lista de aplicaciones ordenadas por porcentaje de consumo sin un gráfico tan detallado, pero sigue sirviendo para localizar las que gastan más. En Android 14 y versiones posteriores, algunos dispositivos exponen propiedades adicionales de la HAL de BatteryManager a aplicaciones de terceros, lo que puede permitir estimar la capacidad y consultar el recuento de ciclos. La disponibilidad depende de la implementación de la HAL que haya hecho el fabricante.

**El diagnóstico de almacenamiento**, en **Ajustes > Almacenamiento**, divide el espacio utilizado por categorías como aplicaciones, imágenes, vídeos, audio, documentos y archivos del sistema. Si el móvil va lento y el almacenamiento supera el 85 % de ocupación, ese dato por sí solo puede explicar el problema. El rendimiento disminuye cuando la memoria NAND interna se acerca a su capacidad máxima porque el controlador dispone de menos margen para repartir el desgaste y realizar la recogida de basura.

**La información de red**, en el apartado **Red e Internet** de Ajustes, muestra el tipo de conexión actual, la intensidad de la señal y la red Wi-Fi conectada. Para obtener más detalle, muchos dispositivos incluyen la intensidad de la señal en dBm dentro del estado de la SIM, en el apartado de información del teléfono. Entre -50 y -90 dBm es un intervalo normal para una conexión móvil. Por debajo de -110 dBm, la recepción es deficiente.

**Las opciones para desarrolladores** incluyen varias herramientas útiles. Para activarlas, abre el apartado **Información del teléfono** de Ajustes y toca siete veces **Número de compilación**. Después tendrás acceso a funciones como **Servicios en ejecución**, que muestra los procesos en segundo plano activos y el uso de memoria, **Depuración USB**, necesaria para trabajar con ADB, y la opción de generar un informe de errores con un registro detallado del sistema.

## Comprobaciones de sensores y hardware sin instalar aplicaciones

En algunos dispositivos puedes probar el sensor de proximidad con `*#*#0588#*#*`. Para los demás sensores, las pruebas prácticas funcionan igual de bien: abre Google Maps y comprueba si el cono azul de dirección gira al mover el teléfono, lo que pone a prueba la brújula y el giroscopio; haz una llamada y acerca el móvil al oído para ver si la pantalla se apaga, lo que comprueba el sensor de proximidad; o activa el brillo automático y cubre la parte frontal para probar el sensor de luz ambiental.

El GPS puede comprobarse con cualquier aplicación de mapas, aunque una aplicación específica de prueba muestra el número de satélites y la relación señal-ruido. Como referencia práctica, un GPS en buen estado debería fijar entre 8 y 12 satélites al aire libre en unos 30 segundos.

## Cuándo aportan valor las aplicaciones de terceros

Las herramientas integradas cubren bastante, pero dejan huecos. Las aplicaciones de terceros resultan especialmente útiles en tres áreas.

La principal es la estimación del estado de la batería. AccuBattery registra el comportamiento de carga con el tiempo y calcula la capacidad restante en relación con la capacidad nominal. Necesita aproximadamente una semana y varios ciclos de carga para producir cifras útiles, y la estimación mejora cuanto más tiempo se utiliza. DevCheck muestra en tiempo real las frecuencias de la CPU y la GPU, las zonas térmicas, la corriente y el voltaje de la batería, y las lecturas de los sensores. Es especialmente útil para investigar la limitación térmica o detectar un sensor que devuelve valores incorrectos. AIDA64 ofrece especificaciones detalladas del hardware: modelo de SoC, resolución y densidad de pantalla, tipo y cantidad de RAM, datos del almacenamiento y códecs instalados. Sirve más para identificar componentes que para diagnosticarlos, pero ayuda cuando necesitas saber exactamente qué contiene el móvil.

Ninguna de estas aplicaciones puede acceder a datos que el fabricante haya bloqueado. Si el dispositivo no implementa la HAL de estado de la batería, ninguna aplicación puede leer el recuento real de ciclos ni la capacidad real. Solo puede estimarlos a partir de los patrones de carga.

## Diagnóstico más profundo con ADB

Android Debug Bridge ofrece el nivel más profundo de diagnóstico sin root. Conecta el móvil a un ordenador mediante USB, activa la depuración USB y ejecuta los comandos siguientes:

`adb shell dumpsys battery` muestra el nivel, la temperatura y el voltaje de la batería, el estado de carga, su estado general y, en algunos dispositivos, el recuento de ciclos. La salida depende del fabricante: los Samsung suelen mostrar campos que no aparecen en los Pixel, y viceversa.

`adb shell dumpsys batterystats` genera un registro enorme del historial de consumo, incluidos los bloqueos de activación, el uso de aplicaciones y la actividad de red. Al procesarlo con Battery Historian de Google se obtiene una línea temporal visual que muestra qué agotó la batería y cuándo.

`adb shell dumpsys connectivity` informa del estado actual de la red, los servidores DNS y las interfaces activas.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` intenta leer los sensores de temperatura. No todas las zonas son accesibles. Las políticas SELinux de Android 12 y versiones posteriores restringen qué rutas de sysfs pueden consultarse, y las limitaciones se han endurecido con cada versión. Algunas zonas térmicas devuelven "Permission denied" incluso mediante ADB.

ADB requiere un ordenador y cierta soltura con la línea de comandos. Para la mayoría de la gente, los menús de Ajustes, las aplicaciones de diagnóstico del fabricante y una revisión manual cuidadosa del hardware son suficientes.

## Cómo interpretar los resultados

Los números aislados necesitan contexto. Una batería a 32 °C durante un uso ligero está dentro de lo normal. Una lectura de 42 °C con el móvil en reposo y en una habitación fresca no lo está. Un almacenamiento ocupado al 78 % es aceptable. Al 92 %, el teléfono tendrá dificultades. Una señal de -85 dBm puede funcionar bien en interiores. A -115 dBm, es probable que las llamadas se corten.

El objetivo de un diagnóstico no es encontrar una única cifra que diga "averiado". Consiste en comparar las lecturas con lo esperable y detectar patrones: una batería que ha perdido un 15 % de capacidad en seis meses, un sensor que devuelve cero de forma constante o un almacenamiento casi lleno que ralentiza todo el sistema.

runcheck reúne el diagnóstico de la batería, el estado térmico, la red y el almacenamiento en un único panel con una puntuación de estado común, lo que evita revisar cada sistema por separado. También marca mediante un indicador de confianza las lecturas que pueden no ser fiables, algo importante porque no todos los dispositivos Android informan de todas las métricas con la misma precisión.

## Preguntas frecuentes

**¿Puedo realizar un diagnóstico en un móvil que no arranca?**
Solo en parte. Si el teléfono entra en el modo de recuperación, normalmente mediante Encendido + Subir volumen durante el arranque, puedes comprobar que la pantalla, el panel táctil y los botones responden. Algunos Samsung permiten entrar en Download Mode para instalar firmware. Un diagnóstico completo exige que el sistema operativo esté funcionando.

**¿Las aplicaciones de diagnóstico necesitan acceso root?**
No. Todo lo descrito aquí funciona sin root. El acceso root permite consultar datos adicionales del kernel, pero puede afectar a la garantía comercial del fabricante y hacer que fallen comprobaciones de integridad como Play Integrity. No es necesario para una revisión práctica del estado del móvil.

**¿Con qué frecuencia debería realizar un diagnóstico completo?**
Cuando el móvil empiece a comportarse de forma extraña: las aplicaciones tarden más en abrirse, la batería se agote sin motivo aparente, la conexión falle o el dispositivo se caliente demasiado. No hace falta seguir un calendario fijo. Si vas a comprar un móvil de segunda mano, haz siempre una revisión completa antes de cerrar la operación.

**¿Funciona `*#0*#` en móviles que no sean Samsung?**
No. Muchos Xiaomi utilizan `*#*#6484#*#*`, algunos OnePlus pueden responder a `*#808#`, los diagnósticos de reparación de Pixel usan `*#*#7287#*#*` y numerosos dispositivos con Android puro o una versión cercana admiten `*#*#4636#*#*`. La disponibilidad cambia según el modelo, la región, el firmware y la operadora.

**¿Ejecutar un diagnóstico puede modificar mis datos o ajustes?**
Las pruebas normales se limitan a leer información. La excepción es tocar por accidente una opción de restablecimiento de fábrica dentro de un menú de servicio. Quédate en los apartados de diagnóstico y pruebas.
