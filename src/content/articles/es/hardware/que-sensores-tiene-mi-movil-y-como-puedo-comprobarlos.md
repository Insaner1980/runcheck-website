---
title: "Qué sensores tiene mi móvil y cómo puedo comprobarlos"
description: "¿Por qué un móvil muestra perfectamente en Maps la dirección en la que caminas y otro solo enseña un círculo azul impreciso? La respuesta suele estar en los sensores. Todos los móviles Android tienen algunos, pero la combinación exacta depende del modelo, la gama de precio y el año."
listSummary: "diagnostico, sensores y android"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostico","sensores","android","hardware","guia"]
locale: "es"
draft: false
---
Un dispositivo de gama alta de 2026 puede incluir giroscopio, barómetro, sensor de huellas bajo la pantalla, varios sensores de activación y un buen número de sensores de movimiento calculados por software. Un móvil barato de hace unos años quizá solo tenga lo básico. Esa diferencia importa cuando la rotación de pantalla, el brillo automático, la orientación de la brújula, las aplicaciones de AR o la función de activar al levantar no se comportan como esperas.

## Empieza con una aplicación de sensores

La aplicación Ajustes de Android no muestra un inventario completo de los sensores de hardware. Incluye información básica del dispositivo, pero no todos los sensores disponibles mediante el framework de sensores de Android.

La comprobación más sencilla consiste en usar una aplicación de diagnóstico de terceros como DevCheck, CPU-Z, Sensor Test o Sensors Toolbox. Ábrela y busca la lista de hardware. Una buena aplicación mostrará cada sensor registrado en Android, incluido su nombre, fabricante, lecturas actuales, resolución y consumo de energía.

Es lo más cerca que puedes estar de la realidad desde el propio móvil. Aun así, hay una limitación: la lista muestra los sensores a los que Android puede acceder, no todos los componentes físicos soldados a la placa. Un lector de huellas, el sensor de una cámara, el módem o un sistema ultrasónico de proximidad quizá no aparezcan junto al acelerómetro y el giroscopio.

## Los códigos del marcador pueden ayudar, pero no te fíes demasiado

Algunos móviles Android tienen menús de prueba ocultos. Los Samsung suelen admitir `*#0*#`, que puede abrir una pantalla de diagnóstico de hardware con pruebas de sensores. En ciertos dispositivos Android, `*#*#4636#*#*` abre un menú de pruebas, aunque se centra más en información del teléfono, la batería y la red que en ofrecer un inventario completo.

La parte molesta es que estos códigos no son universales. Los fabricantes, operadores, regiones y versiones recientes del software pueden desactivarlos. Si un código no hace nada, eso no demuestra que el móvil carezca del sensor. Solo demuestra que el código no funciona en ese dispositivo.

Las bases de datos de especificaciones sirven como segunda comprobación. GSMArena y las páginas de producto de los fabricantes suelen incluir el conjunto de sensores de fábrica entre las características o especificaciones. Eso indica lo que el modelo debía llevar al salir al mercado, pero no confirma que un sensor concreto esté funcionando bien en tu unidad.

## Los sensores que suelen aparecer

### Acelerómetro

El acelerómetro mide la aceleración en tres ejes. La rotación de pantalla, el recuento de pasos, los gestos al agitar y la detección básica de movimiento dependen de él. Casi todos los móviles Android tienen uno.

### Giroscopio

El giroscopio mide la rotación. Hace mucho más preciso el seguimiento de la orientación, sobre todo en AR, VR, estabilización de cámara y dirección en mapas. Algunos móviles económicos prescinden de él. Por eso dos teléfonos pueden ejecutar Google Maps, pero solo uno apunta con precisión hacia donde estás mirando.

### Magnetómetro

El magnetómetro detecta campos magnéticos y actúa como brújula del móvil. Ayuda a las aplicaciones de mapas a determinar la orientación. La precisión varía mucho porque las fundas, soportes de coche, portátiles, altavoces y otros dispositivos electrónicos pueden alterarla.

### Sensor de proximidad

El sensor de proximidad detecta cuándo hay algo cerca de la pantalla, normalmente tu cara durante una llamada. El móvil lo usa para apagar la pantalla y evitar pulsaciones accidentales con la mejilla.

Los modelos antiguos suelen tener un pequeño sensor físico cerca del auricular. Los más recientes pueden usar detección de proximidad virtual basada en software, audio, pantalla o datos de luz ambiental. Esa tendencia es real, pero complica el diagnóstico porque el comportamiento quizá no corresponda a un único sensor visible en una aplicación.

### Sensor de luz ambiental

El sensor de luz ambiental mide el brillo del entorno en lux y alimenta el brillo adaptativo. Suele estar cerca de la cámara frontal, aunque algunos móviles modernos lo colocan bajo la pantalla.

Una oficina bien iluminada puede registrar unos cientos de lux. La luz solar directa puede superar ampliamente los 10.000 lux. No te obsesiones con el valor exacto. Lo importante es que cambie al cubrir la parte superior del móvil o al pasar a un entorno más luminoso.

### Barómetro

El barómetro mide la presión atmosférica, normalmente en hectopascales. Los móviles lo usan para calcular la altitud con más rapidez y mejorar el contexto de ubicación. Es habitual en muchos modelos de gama media y alta, pero no está garantizado en los más baratos.

### Sensor de huellas

Un lector de huellas sigue siendo un sensor, aunque el inventario normal de Android no lo muestre. Puede ser óptico bajo el cristal, ultrasónico bajo la pantalla o capacitivo en un lateral o en la parte trasera.

### Sensor de frecuencia cardiaca

Los sensores dedicados de frecuencia cardiaca son poco habituales en los móviles actuales. Samsung los incluyó en algunos Galaxy S y Note antiguos, pero la función se trasladó en gran parte a los relojes. Si tu móvil actual no muestra uno, es normal.

## Los sensores que quizá no notes

El contador de pasos y el detector de pasos pueden aparecer como sensores separados. Android define `TYPE_STEP_COUNTER` y `TYPE_STEP_DETECTOR`. Algunos móviles gestionan estas funciones con hardware de bajo consumo. Otros calculan los pasos a partir de los datos del acelerómetro.

El vector de rotación suele ser un sensor fusionado. Combina datos de movimiento y orientación para estimar la posición 3D del móvil. Puede aparecer en el diagnóstico aunque no exista ningún chip físico llamado "vector de rotación".

La gravedad y la aceleración lineal también son lecturas derivadas. La primera aísla la fuerza de la gravedad. La segunda la elimina para que las aplicaciones puedan centrarse en el movimiento real.

El movimiento significativo es un sensor de activación de bajo consumo que despierta el móvil cuando detecta un desplazamiento relevante. Funciones como activar al levantar y la detección de actividad en segundo plano pueden depender de este tipo de comportamiento.

Los plegables añaden otro sensor peculiar: el ángulo de la bisagra. Android dispone de un tipo de sensor para los dispositivos que muestran a las aplicaciones la posición del pliegue. Un móvil convencional de una sola pieza no lo tendrá.

## Los sensores de hardware y de software no son lo mismo

Android distingue entre sensores físicos de hardware y sensores derivados por software. El acelerómetro y el giroscopio son sensores de hardware. La gravedad, la aceleración lineal y el vector de rotación pueden calcularse a partir de uno o varios sensores físicos.

La diferencia afecta al consumo. Un contador de pasos dedicado y de bajo consumo puede registrar actividad todo el día mientras la CPU principal permanece en reposo. Uno calculado por software necesita más trabajo y puede gastar más batería.

La aplicación de sensores puede mostrar nombres de fabricantes como Bosch, STMicroelectronics, TDK InvenSense, AKM o Sensortek. Eso suele apuntar a un componente físico real. Un nombre genérico relacionado con Android o AOSP suele indicar un sensor fusionado o derivado por software.

No existe una regla limpia para todos los móviles. Los OEM pueden exponer sensores propios, ocultar parte del hardware detrás de servicios del sistema o sustituir un componente físico por una solución de software.

## Cuándo importa la lista de sensores

La mayoría de la gente solo se preocupa por los sensores cuando algo falla. La pantalla no gira. El brillo automático salta sin sentido. Una aplicación de brújula señala el norte hacia el sofá. Una aplicación de AR se niega a abrirse porque falta el giroscopio.

Una aplicación de sensores te ayuda a distinguir tres situaciones:

- El sensor existe y sus lecturas cambian con normalidad. El problema probablemente está en los ajustes de la aplicación, la calibración, los permisos o el software.
- El sensor existe, pero sus lecturas están congeladas o son absurdas. Puede indicar un sensor averiado, un problema de firmware o una calibración incorrecta.
- El sensor no aparece. Es posible que el móvil no lo tenga, y ningún ajuste podrá añadirlo después.

No puedes instalar mediante software un giroscopio que falta. Existen sensores Bluetooth externos para deporte y usos especializados, pero no pasan a formar parte del framework de sensores integrado en Android.

También es normal ver varias entradas del mismo sensor. Un móvil puede mostrar versiones que activan o no activan el dispositivo, versiones calibradas y sin calibrar, o copias específicas del fabricante junto a los tipos estándar de Android.
