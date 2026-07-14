---
title: "Carga por USB-C explicada: vatios, amperios y voltios"
description: "Qué significan los vatios, los amperios y los voltios al cargar un móvil Android, cómo funciona USB Power Delivery y por qué no todos los cargadores USB-C ofrecen la misma velocidad."
listSummary: "carga, bateria y android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["carga","bateria","android","guia","hardware"]
locale: "es"
draft: false
---
Los vatios son la cifra que más importa. Los voltios y los amperios explican cómo llega el cargador a esa potencia, pero el número de vatios indica cuánta energía puede suministrar.

Un cargador que ofrece 9 V a 2 A entrega 18 W. Otro que ofrece 20 V a 3 A entrega 60 W. La cuenta es sencilla: voltios por amperios es igual a vatios.

Sencillo. Hasta que entra en juego la negociación por USB-C.

## Qué significa la etiqueta del cargador

La mayoría de los cargadores USB-C indican varias combinaciones de salida. Puedes encontrar algo parecido a esto:

- 5 V/3 A = 15 W
- 9 V/3 A = 27 W
- 15 V/3 A = 45 W
- 20 V/3,25 A = 65 W

Son los perfiles de potencia que el cargador puede ofrecer. El móvil no toma automáticamente el más alto. Solicita un perfil compatible y el cargador cambia a ese nivel.

Por eso un cargador de portátil de 100 W no quema un móvil de 18 W. El teléfono no solicitará 100 W. Elegirá un perfil inferior o volverá a la carga básica si el cargador y el móvil no consiguen acordar uno mejor.

## Cómo funciona la negociación de USB Power Delivery

USB Power Delivery, abreviado normalmente como USB PD, es el principal estándar abierto de carga rápida que utilizan muchos móviles Android, tablets, portátiles y accesorios.

Cuando conectas un cable USB-C, el cargador y el móvil se comunican mediante los pines del canal de configuración. El cargador anuncia los Power Data Objects, o PDO, que admite. El móvil elige uno y el cargador suministra después el voltaje y la corriente acordados, dentro de esos límites.

Un cargador USB PD de 45 W puede ofrecer 5 V/3 A, 9 V/3 A, 15 V/3 A y 20 V/2,25 A. Un móvil compatible con carga de 25 W puede elegir un perfil próximo a 9 V. Un portátil puede seleccionar 20 V con el mismo adaptador.

El cargador no empuja toda su potencia hacia el móvil. Es el teléfono el que toma la que puede utilizar.

## Por qué importa PPS

El USB PD estándar utiliza niveles de voltaje fijos, como 5 V, 9 V, 15 V y 20 V. PPS, siglas de Programmable Power Supply, permite que el móvil solicite ajustes más pequeños de voltaje y corriente dentro del intervalo anunciado por el cargador.

Esto importa porque una batería de iones de litio no necesita el mismo voltaje durante toda la carga. A medida que se llena, cambian las condiciones ideales. Con un voltaje fijo, una parte mayor de la conversión se realiza dentro del móvil, y esa conversión genera calor. Con PPS, el cargador puede acercarse más a lo que necesita el teléfono en cada momento.

La Carga superrápida de Samsung utiliza USB PD con PPS. Los móviles Pixel también admiten PPS. Un cargador USB PD normal sin PPS puede funcionar, pero quizá no active el mejor modo de carga en esos teléfonos.

## Quick Charge, VOOC, SUPERVOOC y HyperCharge

USB PD es lo más parecido que tiene Android a un idioma común para la carga. Pero no es el único.

Qualcomm Quick Charge fue habitual en móviles Android durante años. Las versiones más recientes de Quick Charge coinciden en más aspectos con USB PD, aunque los adaptadores y teléfonos antiguos todavía pueden comportarse de forma distinta a un sistema USB PD puro.

OPPO VOOC y OnePlus SUPERVOOC siguen otra estrategia. Suelen enviar una corriente elevada mediante un cargador y un cable compatibles para generar menos calor dentro del móvil. Por eso pueden ser sistemas muy rápidos, pero también exigentes con los accesorios. OnePlus indica que la carga rápida SUPERVOOC requiere que tanto el móvil como el cable de datos sean compatibles con SUPERVOOC.

Xiaomi HyperCharge tiene un comportamiento parecido y específico de la marca en muchos modelos. Un cargador USB-C PD estándar suele cargar estos móviles, pero para alcanzar la potencia máxima anunciada normalmente hace falta el cargador original o uno compatible con el protocolo, además del cable adecuado.

La nomenclatura de Samsung también puede confundir. Adaptive Fast Charging, presente en modelos Samsung antiguos, no es lo mismo que Super Fast Charging en los más recientes. El modo nuevo se basa en USB PD con PPS.

## La capacidad del cable también limita la velocidad

El cable forma parte de la negociación. Tratarlo como si fuera un simple hilo explica buena parte de la confusión con la carga.

Muchos cables USB-C están preparados para 3 A. A 20 V, eso basta para 60 W. Para superar esa potencia hace falta un cable de 5 A con chip e-marker, que permite al cargador y al dispositivo comprobar que el cable puede transportar esa corriente con seguridad.

Las etiquetas de certificación de USB-IF son cada vez más claras. Los cables USB-C certificados muestran una potencia de 60 W o 240 W, y los cables de datos más rápidos también pueden incluir un logotipo con la velocidad de transferencia. Resulta mucho más sencillo que descifrar un nombre largo de versión USB.

Para un móvil, un buen cable USB-C de 60 W suele ser suficiente. En portátiles, tablets y cargadores de alta potencia, un cable de 240 W puede resultar útil. En los sistemas propietarios de carga para móviles, el cable específico puede seguir importando más que la potencia impresa en él.

## Qué cargador deberías comprar

Para muchos móviles Android que utilizan USB PD o PPS, basta con un cargador USB-C PD PPS de entre 25 W y 30 W. Cubre las velocidades habituales de carga rápida de la mayoría de los Pixel y de muchos modelos Samsung.

Si tienes un Samsung compatible con carga de 45 W, compra un cargador PPS que admita expresamente el perfil adecuado de 45 W. Si utilizas un OnePlus, OPPO o Xiaomi y quieres alcanzar la velocidad máxima anunciada, emplea el cargador y el cable diseñados para ese protocolo.

Comprar un cargador con más potencia de la que admite el móvil no supone un problema. No dañará el teléfono y puede ser útil si el mismo adaptador carga también un portátil o una tablet. Eso sí, no esperes que un cargador de 100 W haga que un móvil de 25 W se cargue cuatro veces más rápido.

El consejo menos llamativo sigue siendo el mejor: elige el protocolo correcto en lugar de perseguir la cifra más alta.
