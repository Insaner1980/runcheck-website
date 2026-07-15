---
title: "Cómo comprobar si el cargador del móvil funciona bien"
description: "Metadescripción: Aprende a comprobar si el cargador de tu móvil Android suministra la potencia adecuada mediante aplicaciones, cambios de cable, inspecciones físicas y medidores USB de potencia."
listSummary: "carga, bateria y android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["carga","bateria","android","guia","hardware"]
locale: "es"
draft: false
---
Un cargador puede superar la prueba de encajar en el puerto y fallar en la prueba de carga. USB-C solo te dice que el conector entra. No confirma que el adaptador, el cable y el móvil hayan negociado la carga rápida.

Android 17 no cambia este problema básico. Sigue sin existir una pantalla universal de Android que diga: "este cargador está suministrando 23,4 W ahora mismo". Tienes que deducirlo o medirlo correctamente.

## Lee primero la pequeña etiqueta de salida

Empieza por la parte aburrida: mira el adaptador. Dale la vuelta y localiza la línea de salida. Puede indicar algo como 5 V/3 A, 9 V/2,22 A o 20 V/3,25 A. Multiplica los voltios por los amperios para obtener los vatios. Un perfil de 9 V/2,22 A equivale a unos 20 W. Uno de 20 V/3,25 A equivale a 65 W.

Un adaptador USB-A básico quizá solo indique 5 V/1 A o 5 V/2 A. Son 5 W o 10 W, una potencia lenta para un móvil moderno. Un cargador USB-C PD suele mostrar varios niveles de voltaje y una potencia máxima, por ejemplo 25 W, 45 W, 65 W o más.

Si el cargador no tiene ninguna indicación, desconfía. Los adaptadores de marcas conocidas imprimen sus valores de salida en algún lugar, aunque necesites una linterna para leerlos.

## Usa una aplicación para una comprobación rápida

Android expone la corriente de la batería y otras propiedades relacionadas mediante las API del sistema, por lo que algunas aplicaciones pueden estimar lo que llega a la batería. Ampere y AccuBattery son opciones habituales para este tipo de prueba rápida.

Conecta el cargador, abre la aplicación y espera entre 20 y 30 segundos a que la lectura se estabilice. Mantén bajo el brillo de la pantalla, cierra las aplicaciones exigentes y haz la prueba con la batería entre el 20 % y el 70 %. Los móviles reducen la velocidad de carga cerca del máximo, así que probar al 94 % hará que un buen cargador parezca peor de lo que es.

Interpreta la cifra con cuidado. Las aplicaciones muestran la corriente neta de la batería, no la potencia exacta que sale del adaptador de pared. El teléfono consume energía al mismo tiempo, el circuito de carga pierde una parte en forma de calor y algunos dispositivos informan de la corriente de manera distinta. En ciertos móviles, la lectura puede quedar limitada de forma extraña, llegar con retraso o simplemente no resultar muy útil.

Utiliza estas lecturas para comparar, no como una prueba pericial. Si un cable muestra 400 mA y otro 2.400 mA con el mismo adaptador, has descubierto algo. Si una aplicación indica que tu cargador de 30 W solo entrega 18 W, eso no significa automáticamente que esté averiado.

## Cambia el cable antes de culpar al adaptador

Los cables pueden fallar sin que resulte evidente. Siguen transfiriendo energía y por eso parecen funcionar, pero el móvil baja a un modo de carga lenta porque el cable no puede transportar la corriente prevista o no negocia el perfil correcto.

Prueba con un cable que sepas que funciona bien. El que venía con el móvil es un buen punto de partida. Otra opción es un cable USB-C certificado de una marca de accesorios fiable. No uses un cable antiguo y fino que encontraste en un cajón y esperes obtener una conclusión válida.

Los daños cerca de los extremos son frecuentes. Si el móvil se conecta y desconecta al mover el cable, o el conector queda flojo en varios dispositivos, sustitúyelo. No merece la pena pasar otra hora investigándolo.

## Usa un medidor USB de potencia si quieres cifras reales

Un medidor de potencia USB-C intercalado es la prueba más clara. Se coloca entre el cargador y el móvil y muestra en su propia pantalla el voltaje, la corriente y la potencia. Los modelos mejores también indican detalles de USB Power Delivery, como el perfil de voltaje negociado y si PPS está activo.

Esto importa porque el teléfono puede no solicitar la potencia máxima del cargador. Un adaptador de 65 W conectado a un móvil cuyo máximo es 25 W debería suministrar unos 25 W en el pico, no 65 W. Es normal.

Utiliza el mismo cable cuando compares varios adaptadores. Usa el mismo adaptador cuando compares cables. Cambia una sola cosa cada vez o el resultado se convertirá en ruido.

Un medidor también detecta problemas de cable que las aplicaciones no muestran bien. Si el adaptador está preparado para suministrar 9 V pero el móvil vuelve una y otra vez a 5 V, probablemente existe un problema de negociación, no solo una lectura baja de corriente en la batería.

## Presta atención a las señales físicas

Que un cargador se temple durante la carga rápida es normal. Que esté tan caliente que no puedas sujetarlo, no.

Comprueba también si zumba, huele a quemado, tiene el plástico agrietado, clavijas dobladas, marcas de quemadura, puertos USB flojos o un extremo del cable que se mueve dentro del móvil. La carga intermitente es otra mala señal. Si el icono de carga aparece y desaparece, deja de usar ese cable o adaptador hasta encontrar la causa.

Los cargadores falsificados de bajo coste son el único caso en el que no me arriesgaría. Los móviles modernos incluyen circuitos de protección, pero un voltaje inestable y un aislamiento deficiente siguen siendo peligrosos. Ahorrar unos euros en un adaptador sin marca no compensa.

## Comprueba el protocolo de carga rápida

Un cargador puede ser bueno y, aun así, no ser el adecuado para tu móvil. Los Google Pixel y muchos Samsung utilizan USB-C Power Delivery, y se necesita compatibilidad con PPS para obtener el mejor comportamiento de Samsung Super Fast Charging. Los móviles OnePlus y OPPO suelen requerir cargadores y cables compatibles con SUPERVOOC para alcanzar sus velocidades máximas. Xiaomi HyperCharge también tiene sus propios requisitos.

Cuando los protocolos no coinciden, el teléfono suele recurrir a un modo USB más lento. No se estropeará. Simplemente no cargará rápido.

Un cargador de portátil de 65 W puede cargar de forma segura un móvil que solo admite 25 W porque el teléfono solicita la potencia que puede utilizar. La cifra mayor solo significa que el cargador tiene más margen para portátiles, tablets y otros dispositivos.

## Cuándo sustituirlo

Sustituye el cargador si se sobrecalienta, huele mal, zumba con fuerza, tiene el plástico dañado o ofrece resultados inestables con varios cables y dispositivos que sabes que funcionan. Cambia el cable si el problema lo sigue a él.

Si ambos funcionan con normalidad en otros dispositivos, es posible que el móvil limite la carga porque la batería está caliente, el puerto está sucio, la batería está casi llena o el teléfono no admite el protocolo de carga rápida del cargador.
