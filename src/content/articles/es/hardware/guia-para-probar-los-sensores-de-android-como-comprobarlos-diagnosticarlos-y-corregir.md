---
title: "Guía para probar los sensores de Android: cómo comprobarlos, diagnosticarlos y corregir fallos"
description: "¿Cómo sabes si el giro automático está averiado, la brújula se ha desorientado o una aplicación se comporta mal? Esa es la parte molesta de los problemas con sensores. Parecen pequeños hasta que necesitas que funcionen la navegación, las llamadas, la estabilización de la cámara, el recuento de pasos o el brillo automático."
listSummary: "hardware, pruebas y diagnostico"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["hardware","pruebas","diagnostico","android","guia"]
locale: "es"
draft: false
---
Los móviles Android utilizan una combinación de sensores de movimiento, ambientales, de posición y de proximidad. Algunos son chips físicos. Otros son sensores «virtuales», calculados a partir de varios chips. Cuando una de esas fuentes genera datos inestables, está bloqueada o se desactiva, el síntoma puede aparecer en una función completamente distinta.

Empieza por lo sencillo. Para la primera ronda de pruebas no necesitas root, ADB ni un banco de laboratorio.

## Comprobaciones rápidas de los sensores

Prueba estas acciones cotidianas antes de instalar nada:

- Gira el móvil de vertical a horizontal con el bloqueo de rotación desactivado. Esto comprueba el funcionamiento básico del acelerómetro.
- Haz una foto panorámica. Si el móvil no puede seguir el movimiento con fluidez, el giroscopio puede estar implicado.
- Inicia una llamada y cubre la parte superior de la pantalla, cerca del auricular. La pantalla debería apagarse y volver a encenderse al destaparla. Así se comprueba el sensor de proximidad.
- Activa el brillo automático y pasa de una habitación luminosa a otra oscura. La pantalla debería ajustarse en unos segundos.
- Abre Maps y observa el haz azul de dirección. Si es muy ancho o apunta al lugar equivocado, normalmente el magnetómetro necesita calibración o está recibiendo interferencias.

En dispositivos Samsung Galaxy, Samsung Members es la vía más clara: abre Samsung Members, entra en Asistencia y ejecuta Diagnóstico del teléfono. El antiguo menú `*#0*#` también funciona en muchos Galaxy e incluye una sección de sensores.

En móviles Pixel, marca `*#*#7287#*#*` para abrir Pixel Diagnostics cuando esté disponible. En dispositivos Xiaomi, Redmi y POCO, `*#*#6484#*#*` abre el menú CIT en muchos modelos. En Motorola, usa Device Help y entra en el diagnóstico del dispositivo para ejecutar la prueba de hardware.

No trates `*#*#4636#*#*` como una prueba de sensores. En muchos móviles abre una pantalla de pruebas o información sobre la red, el uso, Wi-Fi y, en algunos casos, la batería. No es un menú universal de diagnóstico de sensores.

## Por qué aparecen problemas con los sensores

La desviación de la calibración es la causa aburrida más habitual. El acelerómetro, el giroscopio y el magnetómetro dependen de ella. El magnetómetro es especialmente delicado porque los imanes, las fundas metálicas, los soportes para coche, los portátiles, los altavoces e incluso algunas fundas tipo cartera pueden alterarlo.

Después está el daño físico. Una caída puede desplazar un módulo sensor, doblar el marco cerca del borde superior o dañar un cable flexible. Los efectos del agua pueden tardar más. El móvil quizá funcione bien durante una semana y, después, el sensor de proximidad o el barómetro empiecen a comportarse de forma extraña mientras avanza la corrosión.

Es fácil pasar por alto una ventana de sensor bloqueada. Los sensores de proximidad y luz ambiental suelen estar cerca del auricular o bajo una zona de la pantalla. Un protector grueso, el borde de una funda, polvo, grasa de la piel o un cristal de privacidad mal alineado pueden bloquear o dispersar la luz que utilizan.

El software también puede afectar a los sensores. Las grandes actualizaciones de Android, los cambios de firmware del fabricante, las ROM personalizadas, los permisos de las aplicaciones y una gestión agresiva de la batería pueden modificar los datos que reciben las aplicaciones. Google lanzó Android 17 el 16 de junio de 2026 para la mayoría de los Pixel compatibles, mientras que las demás marcas siguen sus propios calendarios, por lo que un fallo relacionado con una actualización no aparecerá a la vez en todos los móviles.

Los ajustes de energía también importan. Android 9 restringió el acceso en segundo plano a sensores continuos como el acelerómetro y el giroscopio. Android 10 añadió el mosaico para desarrolladores Sensors off, que puede desactivar la cámara, el micrófono y los sensores gestionados por SensorManager. Si todos los sensores parecen dejar de funcionar a la vez, comprueba ese mosaico antes de concluir que ha fallado la placa base.

## Prueba el acelerómetro y el giroscopio

Desactiva el bloqueo de rotación y gira el móvil despacio. La pantalla debería cambiar de orientación sin retrasos largos ni giros repetidos. Si se niega a rotar en todas las aplicaciones, el acelerómetro puede no estar enviando datos correctamente.

Abre después una aplicación de nivel de burbuja o cualquier otra que muestre la inclinación. Coloca el móvil plano sobre una mesa. Los valores deberían estabilizarse, no desplazarse sin parar. Un pequeño desfase es normal. Una inclinación fija grande sobre una superficie plana apunta a un problema de calibración.

Para el giroscopio, utiliza el modo panorámico de la cámara o una aplicación de realidad aumentada. La imagen debería seguir el movimiento con fluidez. Si las panorámicas fallan una y otra vez o los objetos de realidad aumentada se desplazan cuando estás quieto, el giroscopio puede estar generando ruido.

Aquí resulta útil comparar. Prueba la misma aplicación en otro móvil dentro de la misma habitación. Si ambos se comportan mal, el problema está en la aplicación o en el entorno.

## Prueba el sensor de proximidad

Inicia una llamada y mueve la mano a unos dos centímetros de la parte superior de la pantalla. Esta debería apagarse. Aleja la mano y tendría que volver a encenderse.

La mayoría de los sensores de proximidad de un móvil no son medidores precisos de distancia. Suelen informar de un estado cercano o lejano, no de una lectura gradual centímetro a centímetro. En una aplicación de diagnóstico puede aparecer como 0 cm y 5 cm, sin valores intermedios. Es normal.

Si la lectura se queda fija, retira la funda y el protector de pantalla. Limpia con un paño suave el borde superior o la zona del sensor. Vuelve a probar antes de culpar al hardware. Los protectores de cristal templado son un culpable clásico.

## Prueba el sensor de luz ambiental

Activa el brillo automático. Acerca una linterna a la parte superior de la pantalla y después cubre esa zona con la mano. El brillo debería reaccionar con claridad, aunque Android puede suavizar el cambio en lugar de modificarlo de golpe.

La lectura del sensor de luz suele mostrarse en lux. Una habitación oscura puede estar por debajo de 50 lux. Una oficina normal puede tener unos cientos. La luz solar directa puede superar 10 000 lux. El valor exacto importa menos que comprobar si cambia de forma razonable cuando varía la iluminación.

Si el brillo automático se comporta de forma extraña, pero la lectura en lux responde correctamente, probablemente el sensor está bien. El problema estará más bien en el aprendizaje del brillo adaptativo, los ajustes de pantalla o el software del fabricante.

## Prueba el magnetómetro y la brújula

Sal al exterior o aléjate de objetos metálicos. Abre Maps y toca el indicador de ubicación. Si el haz azul es muy ancho o apunta mal, recalibra la brújula.

Haz el movimiento en forma de ocho: sujeta el móvil delante de ti y dibuja un ocho grande de lado mientras giras la muñeca en varios ángulos. Continúa durante 15-20 segundos. Parece ridículo. Funciona con sorprendente frecuencia.

Si la brújula sigue equivocándose, retira los accesorios magnéticos y repite la prueba. Los soportes para coche, las fundas tipo cartera, los anillos tipo MagSafe, las tapas de los portátiles y las mesas metálicas pueden distorsionar las lecturas. En interiores, la brújula suele funcionar peor de lo que mucha gente espera.

## Prueba el barómetro

No todos los móviles Android incluyen barómetro. Los modelos económicos suelen prescindir de él.

Si el tuyo lo tiene, una aplicación de sensores debería mostrar la presión atmosférica en hPa o milibares. Compárala con una estación meteorológica cercana. No esperes una coincidencia perfecta, porque las aplicaciones del tiempo suelen mostrar la presión ajustada al nivel del mar, mientras que el móvil mide la presión local a tu altitud.

Una lectura completamente inmóvil y muy alejada de lo esperable puede indicar que el sensor está bloqueado o averiado. El orificio de ventilación es diminuto, por lo que la pelusa y el polvo importan.

## Lee los datos sin procesar sin obsesionarte

Las lecturas sin procesar son útiles, pero no persigas la perfección.

Un acelerómetro mide la aceleración en los ejes X, Y y Z en m/s². Un móvil colocado plano debería mostrar aproximadamente 9,8 m/s² en uno de los ejes debido a la gravedad y valores cercanos a cero en los demás, según la orientación.

Un giroscopio informa de la rotación en radianes por segundo. Cuando el móvil está quieto, los valores deberían permanecer cerca de cero. Los pequeños movimientos y el ruido del sensor son normales.

Un magnetómetro mide la intensidad del campo magnético en microteslas. El campo magnético terrestre suele estar entre 25 y 65 microteslas, según la ubicación. Los valores muy alejados de ese intervalo suelen indicar interferencias.

Un sensor de luz mide lux. Buscas cambios razonables, no precisión de laboratorio.

## Soluciones que conviene probar antes de reparar

Reinicia primero el móvil. Es aburrido, pero merece la pena.

Después, quita la funda y el protector de pantalla, limpia la zona superior de los sensores, desactiva el Ahorro de batería y comprueba si está activado el mosaico Sensors off en las Opciones para desarrolladores. Si el problema afecta a una sola aplicación, revisa sus permisos y restricciones de batería.

Para los fallos de brújula, recalibra y aléjate de los imanes. Para el giro automático, prueba varias aplicaciones porque algunas bloquean la orientación. Para los problemas de proximidad, haz una llamada real con el protector retirado.

Si un sensor dejó de funcionar justo después de una actualización del sistema operativo, instala las actualizaciones pendientes del sistema y del sistema de Google Play y vuelve a probar. Si el móvil utiliza una versión beta, no des por confirmado un fallo de hardware hasta repetir la prueba con software estable.

Una aplicación de diagnóstico como runcheck resulta útil cuando los síntomas se solapan. El estrés de la batería, el calor y los problemas de red pueden hacer que el móvil parezca averiado aunque el sensor sea solo una parte de lo que está ocurriendo.

## Cuándo es probable que sea hardware

Sospecha del hardware cuando el mismo sensor falla en todas las aplicaciones, también falla en la herramienta de diagnóstico del fabricante, continúa en modo seguro y sigue sin funcionar después de un restablecimiento.

Los sensores de un móvil suelen ser componentes diminutos soldados a la superficie o formar parte de un módulo mayor. Los talleres rara vez sustituyen un solo chip sensor. En la práctica, la reparación suele implicar cambiar el conjunto de pantalla, el módulo de cámara, la placa inferior o una parte de la placa principal, según dónde esté el sensor.

Si el móvil sufrió una caída, se dobló o estuvo en contacto con agua, indícalo al pedir presupuestos. Cambia lo que el técnico debe inspeccionar.
