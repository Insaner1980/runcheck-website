---
title: "Qué es el sensor de proximidad y por qué importa"
description: "Cómo funciona el sensor de proximidad de tu móvil Android, por qué las llamadas se comportan mal cuando falla y cómo probar y corregir los problemas más habituales."
listSummary: "diagnostico, sensores y android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostico","sensores","android","hardware","guia"]
locale: "es"
draft: false
---
A mitad de una llamada, la pantalla se enciende contra tu cara y la mejilla abre el teclado. Normalmente es este pequeño sensor fallando en la única tarea que nadie nota hasta que deja de funcionar.

El sensor avisa al móvil cuando algo está cerca del cristal frontal. Durante una llamada, ese "algo" suele ser tu cara. Android apaga entonces la pantalla e ignora las pulsaciones para que tu oreja no se convierta en un accesorio táctil.

## Cómo funciona

La mayoría de los móviles Android usan un sensor de proximidad por infrarrojos cerca del auricular o de la cámara frontal. Emite luz infrarroja y comprueba cuánta se refleja. Si vuelve suficiente luz, el móvil interpreta que hay un objeto cerca. Cuando disminuye el reflejo, vuelve a indicar que está lejos.

La documentación de sensores de Android es algo más flexible de lo que mucha gente espera. La mayoría de los sensores de proximidad devuelven una distancia en centímetros, pero algunos solo indican cerca o lejos. Para el comportamiento normal durante una llamada, Android no necesita mucho más.

Algunos móviles no usan una pieza infrarroja dedicada de la forma tradicional. Pueden recurrir a sensores bajo la pantalla o a una detección de proximidad virtual que combina otros sensores y software. Esto ahorra espacio en el marco superior, pero puede hacer el sistema más sensible a protectores de pantalla, suciedad, daños en el cristal y errores de firmware.

## Dónde está

En los móviles antiguos con un marco superior visible, suele encontrarse junto al auricular, la cámara frontal y el sensor de luz ambiental. Puede que no lo veas porque está detrás de una zona oscura del cristal.

En modelos recientes con cámara perforada y marcos casi inexistentes, el sensor puede estar bajo la pantalla o detrás de una zona menos evidente del cristal frontal. Por eso resulta más difícil adivinar su posición exacta. Para probarlo con la mano, cubre primero la zona del auricular y la cámara frontal.

## Señales de que el sensor funciona mal

La pantalla permanece encendida durante las llamadas. Es el síntoma clásico. Acercas el móvil a la oreja y la mejilla empieza a pulsar botones.

La pantalla sigue negra después de apartar el móvil. Terminas la llamada y tienes que pulsar el botón de encendido porque la pantalla no se activa sola.

La pantalla se apaga mientras usas el móvil. Puede ocurrir si algo bloquea el sensor y este se queda atascado en el estado de proximidad.

Aumentan las pulsaciones accidentales en el bolsillo. El sensor no es la única defensa frente a ellas, pero una lectura incorrecta constante las hace más probables.

## Prueba rápida durante una llamada

Llama al buzón de voz o a otro número donde no molestes a nadie. Durante la llamada, cubre con la palma la zona cercana al auricular.

La pantalla debería apagarse enseguida. Retira la mano y debería volver a encenderse en alrededor de un segundo. Si tarda varios segundos, no responde o parpadea entre encendida y apagada, conviene revisar el sensor.

Sencillo. Y sorprendentemente útil.

## Pruebas de diagnóstico más completas

En los Samsung Galaxy, prueba `*#0*#` en la aplicación Teléfono de Samsung y busca la prueba del sensor. La ruta Samsung Members > Diagnóstico es más sencilla y debería ser tu primera opción si no te gustan los menús de servicio.

En móviles Xiaomi, Redmi y POCO, introduce `*#*#6484#*#*` o `*#*#64663#*#*` para abrir el modo CIT. Las páginas de asistencia de Xiaomi también recomiendan retirar la funda y el protector, limpiar el borde superior, actualizar el software y usar la detección de hardware cuando fallan funciones relacionadas con el tacto o los sensores.

En otros móviles Android, puedes usar Sensor Test, Sensors Multitool o DevCheck. Abre la lectura de proximidad, mueve la mano sobre la parte superior del teléfono y observa si cambia el valor. Algunos muestran centímetros. Otros saltan entre 0 y un valor máximo, que solo significa cerca y lejos.

Si el valor nunca cambia, el sensor está bloqueado, desactivado, mal calibrado o averiado.

Algunas guías antiguas recomiendan Proximity Sensor Reset. No lo usaría como primer paso. Déjalo para después de las comprobaciones básicas y no esperes que una aplicación de calibración de terceros repare un sensor que el móvil ni siquiera puede leer.

## Corrige primero lo habitual

Limpia la parte superior de la pantalla. La grasa de los dedos, el polvo, el maquillaje, las pelusas y los residuos secos pueden tapar la ventana del sensor. Usa un paño de microfibra limpio y presta atención a la zona del auricular.

Retira el protector de pantalla. Es una de las causas más frecuentes en móviles con sensores ocultos o bajo la pantalla. El protector puede ser demasiado grueso, demasiado oscuro cerca del sensor o estar ligeramente desalineado. Prueba el móvil sin él antes de culpar a la placa base.

Quita la funda. Las fundas tipo libro, los bordes elevados y los recortes deficientes pueden interferir con el borde superior de la pantalla.

Reinicia el móvil. Los controladores del sensor pueden quedarse bloqueados, sobre todo después de mucho tiempo encendido o justo tras una actualización del sistema.

Actualiza el software. El comportamiento de proximidad depende en parte del firmware. Una actualización importante, como Android 17 primero en los Pixel y después en versiones de Android 17 de otros OEM, puede modificarlo porque la capa del fabricante controla el hardware.

Revisa los ajustes de llamada. Algunas versiones de Xiaomi muestran una opción de proximidad en esos ajustes. La ruta exacta cambia, pero versiones antiguas basadas en MIUI usaban Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor.

## Calibración y sensores virtuales

Algunos menús de diagnóstico incluyen calibración de proximidad. El modo CIT de Xiaomi y los modos de fábrica de modelos OnePlus antiguos son ejemplos habituales. Ejecuta la calibración solo si el menú la ofrece de forma clara y con el móvil apoyado en una superficie plana, limpio y sin nada que lo cubra.

Los sensores de proximidad virtuales son más complicados. Si el móvil calcula la proximidad mediante software, puede que no exista una pieza física que sustituir. En ese caso, las actualizaciones de firmware importan más que la reparación. Un restablecimiento de fábrica puede borrar un estado de calibración incorrecto, pero debe ser el último recurso y solo después de hacer una copia de seguridad.

## Cuándo es un fallo de hardware

Si el valor no cambia en las pruebas de diagnóstico después de limpiar el móvil, retirar accesorios, reiniciarlo, actualizarlo y probarlo en modo seguro, es probable que exista una avería de hardware.

Una caída puede dañar la zona del sensor o desplazar la pantalla. El agua puede corroer el sensor o el cable flexible. Una reparación puede dejar un conector suelto o cubrir el sensor con un adhesivo incorrecto. Ninguna de esas cosas se arregla instalando otra aplicación.

Cuando el móvil usa una pieza infrarroja independiente, el componente es pequeño, pero la mano de obra determina el coste de la reparación. En modelos con detección oculta o integrada en la pantalla, la reparación puede estar ligada al conjunto de la pantalla.

Si no compensa repararlo, aún puedes convivir con el problema. Usa el botón de encendido para activar la pantalla durante las llamadas, habilita la protección contra toques accidentales si tu móvil la ofrece y evita las fundas tipo libro que cubren la zona del sensor. No es perfecto, pero permite seguir usando el teléfono.
