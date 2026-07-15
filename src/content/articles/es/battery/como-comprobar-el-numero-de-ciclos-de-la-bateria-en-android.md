---
title: "Cómo comprobar el número de ciclos de la batería en Android"
description: "El número de ciclos indica cuántos ciclos completos de carga y descarga ha acumulado la batería desde que se fabricó el móvil. Un ciclo equivale a utilizar el 100 % de su capacidad, pero no tiene que ocurrir de una sola vez. Cargar del 20 % al 70 % y, más adelante, del 40 % al 90 % suma un ciclo completo entre ambas cargas parciales."
listSummary: "bateria, estado y diagnostico"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["bateria","estado","diagnostico","android","guia"]
locale: "es"
draft: false
---
La cifra importa porque las baterías de iones de litio tienen una vida útil limitada que se mide en ciclos. La mayoría de las baterías actuales conservan alrededor del 80 % de su capacidad original después de 800-1.000 ciclos, según la química y el fabricante. A partir de ahí, la autonomía diaria suele acortarse de forma perceptible.

Android permite comunicar el número de ciclos desde Android 14 mediante BatteryManager, pero que el dato aparezca o no depende por completo del fabricante. Unos pocos móviles recientes lo muestran en Ajustes. La mayoría no. Los métodos siguientes están ordenados según la cantidad de dispositivos en los que funcionan, empezando por los que también sirven para modelos antiguos.

## Aplicaciones de seguimiento: funcionan en casi cualquier móvil Android

Para la mayoría de los móviles, sobre todo los anteriores a 2024, una aplicación de seguimiento es el punto de partida más práctico.

AccuBattery estima el número de ciclos registrando la energía que entra durante las cargas. Instálala y deja que funcione durante una semana o más, a lo largo de varias sesiones. La aplicación calcula una cifra aproximada dividiendo el total de miliamperios-hora cargados entre la capacidad nominal de la batería. Cuanto más tiempo acumule datos, mejor será la estimación. Si acabas de instalar AccuBattery y ya muestra un número, está extrapolando a partir de muy poca información. Dale al menos dos semanas antes de tomártelo en serio. Su compatibilidad abarca una amplia gama de versiones de Android y de móviles que siguen en uso.

aBattery utiliza otro método. En dispositivos con Android 14 o posterior cuyo fabricante haya implementado la HAL de estado de la batería, lee directamente del sistema el número de ciclos y el porcentaje de capacidad. En móviles antiguos o con una implementación incompleta, los datos pueden faltar o ser poco fiables. La propia aplicación no siempre permite saber si la cifra procede realmente del hardware o es un valor de relleno.

Todas las aplicaciones de seguimiento tienen la misma limitación: cuando el sistema no ofrece un contador real, estiman a partir de los patrones de carga. Las estimaciones mejoran con el tiempo, pero no son exactas. Dos aplicaciones instaladas en el mismo móvil pueden mostrar cifras distintas porque utilizan métodos de cálculo diferentes.

## Códigos del marcador: comprobación rápida, con resultados muy variables

En algunos móviles, ciertos códigos del marcador muestran datos de la batería ocultos en la interfaz de Ajustes. Muchos existen desde Android 4 o incluso antes, pero su disponibilidad depende del fabricante y del operador.

`*#*#4636#*#*` puede funcionar en Android casi puro, Pixel y numerosos modelos de Motorola, Nokia, Sony y otros fabricantes con una versión cercana a Android estándar. Si está habilitado, abre un menú de pruebas con información sobre el nivel de carga, el voltaje, la temperatura y el estado. En la mayoría de los dispositivos no muestra los ciclos, aunque merece la pena comprobarlo porque algunos fabricantes añaden campos propios. El código lleva más de una década en Android y sigue funcionando en bastantes móviles antiguos que no tienen páginas modernas de información de la batería.

`*#*#6485#*#*` puede mostrar en algunos Xiaomi, POCO y Redmi datos de la batería relacionados con los ciclos bajo nombres de campo específicos del fabricante, como `MB_06`. En determinados modelos funciona desde MIUI 10 o versiones anteriores.

`*#0228#` muestra en algunos Samsung Galaxy el voltaje, la corriente y el estado de la batería. Normalmente no incluye el número de ciclos.

Si al introducir un código no ocurre nada, el móvil no lo admite. Los operadores pueden desactivar estos menús y los fabricantes los eliminan a veces mediante actualizaciones.

## ADB: el método más profundo sin root

Android Debug Bridge ofrece el acceso más constante a los datos de la batería entre distintas versiones de Android y puede funcionar incluso en móviles con Android 4.1. Necesitas un ordenador y unos cinco minutos de configuración, pero a menudo muestra información que no aparece ni en las aplicaciones ni en Ajustes.

Activa las **Opciones para desarrolladores**: entra en **Ajustes > Información del teléfono** y toca siete veces **Número de compilación**. Después, activa **Depuración por USB** dentro de las opciones para desarrolladores. Conecta el móvil por USB y autoriza la conexión cuando aparezca el aviso.

Ejecuta:

`adb shell dumpsys battery`

La salida puede incluir CHARGE_COUNTER, voltaje, temperatura, estado de carga y estado de la batería. En los dispositivos que lo comunican aparece también un campo CYCLE_COUNT con el número real. Algunos Samsung, Pixel y Xiaomi lo exponen mediante ADB aunque no lo muestren en Ajustes. En los móviles anteriores a Android 14 el campo es menos habitual, pero sigue mereciendo la pena comprobarlo. Algunos fabricantes ya ofrecían datos de ciclos mediante propiedades propias mucho antes de que Google normalizara la interfaz.

Si CYCLE_COUNT no aparece, es probable que el fabricante no lo haya expuesto por esa vía. Ninguna herramienta de software puede recuperar el contador real si el hardware o el firmware no lo facilita.

`adb shell dumpsys batteryproperties` muestra a veces campos adicionales, especialmente en Android 14 y versiones posteriores, donde se amplió la especificación de la HAL. En versiones antiguas puede no devolver información útil.

## Ajustes integrados: solo en móviles recientes

Cada vez más móviles muestran el número de ciclos directamente en Ajustes. Si el tuyo lo incluye, es la vía más sencilla. Si no, tendrás que recurrir a los métodos anteriores.

**Google Pixel 8a y modelos posteriores** muestran el número en **Ajustes > Información del teléfono > Información de la batería**, junto con la fecha de fabricación y la fecha del primer uso. Los modelos desde Pixel 6 hasta Pixel 8 Pro no tienen esta pantalla. Google la incorporó con el Pixel 8a y la mantuvo en las series Pixel 9 y Pixel 10. En modelos anteriores necesitas ADB o una aplicación de seguimiento.

**Samsung Galaxy S25 y algunos modelos posteriores** pueden mostrar el porcentaje de capacidad y el número de ciclos en una página de información de la batería dentro de Ajustes, pero los campos disponibles y la ubicación exacta dependen del modelo, el firmware y el mercado. No des por hecho que la página existe solo porque el móvil ha recibido una versión nueva de One UI. En muchos Galaxy anteriores, Samsung Members ofrece únicamente una valoración general, como Normal, Débil o Mala, sin un contador ni un porcentaje precisos.

**Los móviles OnePlus y OPPO** con versiones recientes de OxygenOS o ColorOS pueden mostrar el estado de la batería en el apartado de batería de Ajustes, aunque el número de ciclos depende del modelo y la región. Los OnePlus 7 y anteriores no lo ofrecen.

El problema de fondo sigue siendo la fragmentación. Apple normalizó la información sobre el estado de la batería en los iPhone compatibles a partir de iOS 11.3, desde el iPhone 6. Android creó la interfaz y dejó que cada fabricante decidiera si iba a comunicar y mostrar los datos. Cada año aparecen más modelos compatibles, pero la mayoría de los dispositivos Android que siguen en uso todavía no enseñan el contador.

## Qué significa el número de ciclos en la práctica

Por sí solo, el número no es más que un contador. Lo importante es la vida útil para la que está diseñada la batería.

Google indica que las baterías de los modelos desde Pixel 3 hasta Pixel 8 Pro conservan alrededor del 80 % de capacidad durante unos 800 ciclos. En Pixel 8a y modelos posteriores, la referencia es de 1.000 ciclos. En esos dispositivos también intervienen funciones como Asistencia para la conservación de la batería, que reduce por etapas el voltaje máximo conforme envejece la batería.

Los móviles introducidos recientemente en el mercado de la Unión Europea deben soportar al menos 800 ciclos de carga y descarga conservando como mínimo el 80 % de la capacidad. Algunos modelos recientes de gama alta declaran alrededor de 1.000 ciclos o más. Los móviles económicos antiguos o vendidos fuera de la UE pueden tener especificaciones inferiores.

Un móvil con 400 ciclos ha recorrido aproximadamente la mitad de la vida útil prevista en ciclos para una batería clasificada para 800. Al alcanzar 800 ciclos, esa batería debería conservar alrededor del 80 % de su capacidad: una batería de 5.000 mAh que se comporta como una de unos 4.000 mAh. Con 1.200 ciclos, la autonomía diaria puede haberse reducido hasta cerca de la mitad de la original.

Estas cifras presuponen una carga normal: temperatura ambiente, cargadores adecuados y evitar periodos prolongados al 100 % o al 0 %. La carga rápida con calor acelera la degradación, y el contador de ciclos no lo refleja. Dos móviles con 500 ciclos pueden tener estados muy distintos si uno se cargó por la noche con carga adaptativa y el otro se cargó rápidamente dentro de un coche caliente.

## Cuando el contador no está disponible

Si ninguno de los métodos funciona en tu móvil, el comportamiento diario sigue ofreciendo pistas. Menos tiempo de pantalla que hace seis meses, apagados inesperados al 15-20 %, saltos bruscos del 30 % al 12 % o calor durante un uso ligero. Todo ello puede indicar que la batería ha superado su mejor momento.

Si añades una estimación de AccuBattery después de varias semanas de seguimiento, estos síntomas permiten formarse una idea razonable incluso sin conocer el número exacto de ciclos.

## Preguntas frecuentes

**¿Limitar la carga al 80 % reduce el número de ciclos?**
No. Las cargas parciales también se suman. Cargar del 20 % al 80 % equivale a 0,6 ciclos. La ventaja del límite no es acumular menos ciclos, sino reducir la tensión que soportan las celdas con niveles de carga altos. Eso ralentiza la degradación química independientemente del contador.

**¿500 ciclos son muchos?**
Depende del móvil. Con un ciclo completo al día, se alcanzan en unos 16-17 meses. Con 0,7 ciclos diarios, por ejemplo cargando del 30 % al 100 %, hacen falta algo más de dos años. Que 500 sean muchos o pocos depende de la vida útil nominal de la batería concreta.

**¿Por qué mi Samsung no muestra los ciclos después de actualizar a One UI 7?**
Porque no todos los modelos y mercados con One UI 7 ofrecen esa información. La serie Galaxy S25 es una de las que la muestra con mayor frecuencia, pero incluso en dispositivos compatibles puede depender del firmware y la región. Samsung no ha publicado una fecha general para incorporarla a todos los Galaxy anteriores.

**¿Se puede reiniciar el número de ciclos?**
Un contador real de hardware no se reinicia al restablecer el móvil de fábrica, calibrar la batería o instalar otra ROM. Cambiar físicamente la batería es la única forma de empezar desde cero cuando el contador está asociado al paquete de batería o al medidor de carga. Si el número es solo una estimación de una aplicación, desinstalarla o borrar sus datos puede reiniciarlo. Es otra razón para no confundir una estimación con un contador de hardware.
