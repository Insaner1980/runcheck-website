---
title: "Cómo probar el NFC en Android"
description: "Formas sencillas de comprobar si el NFC funciona en un móvil Android mediante Ajustes, tarjetas sin contacto, Google Wallet, diagnósticos de Samsung, Xiaomi CIT y aplicaciones de prueba de NFC."
listSummary: "diagnostico, sensores y android"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostico","sensores","android","hardware","guia"]
locale: "es"
draft: false
---
Acercas el móvil a un terminal de pago y no ocurre nada. Ahora tienes dos problemas: el pago no se ha completado y no sabes si el culpable es el NFC, Google Wallet, la tarjeta, la funda o el propio terminal.

Empieza por algo más pequeño. El NFC es fácil de probar si separas la lectura del hardware de los pagos.

## Comprueba si el móvil tiene NFC

Abre Ajustes y busca NFC. En muchos móviles Android, la ruta es Ajustes > Dispositivos conectados > Preferencias de conexión > NFC. En Samsung, usa Ajustes > Conexiones > Pagos NFC y contactless y comprueba la aplicación de pago seleccionada en esa página.

Si no aparece ninguna opción de NFC, es probable que el móvil no tenga chip NFC. Esto sigue siendo habitual en móviles Android económicos, sobre todo en modelos baratos vendidos en varias versiones regionales. Una variante puede incluir NFC y otra con un nombre casi idéntico puede no tenerlo.

Activa NFC antes de hacer las pruebas. Comprueba también la aplicación de pago predeterminada si vas a probar Google Wallet, Samsung Pay o Samsung Wallet, según la región y el modelo.

## Prueba con una tarjeta sin contacto

Es la prueba de hardware más sencilla. Usa una tarjeta bancaria sin contacto, una tarjeta de transporte, una acreditación de oficina o una etiqueta NFC. Apóyala contra la parte trasera del móvil y muévela despacio por la mitad superior.

Si el NFC funciona, el móvil suele vibrar, emitir un sonido, abrir un aviso de la cartera digital o mostrar un mensaje parecido a "etiqueta desconocida". Cualquiera de esas respuestas indica que el lector NFC y la antena están activos.

¿No ocurre nada? Retira la funda y prueba de nuevo. Las placas metálicas, los soportes magnéticos, los anillos y las fundas gruesas tipo cartera pueden bloquear o debilitar la señal NFC. El alcance de lectura es corto, así que pequeños cambios de posición importan.

## Prueba con un terminal de pago

Un pago sin contacto completado es una prueba real muy útil porque comprueba algo más que la lectura de una etiqueta. El móvil necesita NFC activado, una cartera compatible, una tarjeta válida, un bloqueo de pantalla y la aplicación de pago predeterminada correcta.

Para Google Wallet, Google indica que debes abrir Ajustes > Dispositivos conectados > Preferencias de conexión > NFC, entrar en Pagos sin contacto y seleccionar Google Wallet como aplicación predeterminada. En Samsung, los controles equivalentes están en Ajustes > Conexiones > Pagos NFC y contactless.

Si el móvil lee etiquetas pero no permite pagar, probablemente el chip NFC no sea el problema. Revisa la configuración de la cartera, la compatibilidad del banco, el bloqueo de pantalla, los Servicios de Google Play, la integridad del dispositivo y la aplicación de pago predeterminada.

## Usa un menú de diagnóstico o una aplicación

La vía con soporte oficial de Samsung es Samsung Members. Abre la aplicación, toca Ayuda en la parte inferior y selecciona Ver pruebas dentro de Diagnóstico. No todos los modelos muestran una prueba de NFC independiente, pero la aplicación puede comprobar muchos componentes y orientarte hacia el servicio técnico si una prueba falla.

Los Xiaomi, Redmi y POCO suelen incluir NFC en el conjunto de pruebas CIT. Abre la aplicación Teléfono e introduce `*#*#6484#*#*`, o prueba `*#*#64663#*#*` si el primero no funciona. Dentro de la prueba NFC, acerca una tarjeta o etiqueta y espera el resultado.

Los Fairphone han ofrecido tradicionalmente una prueba manual de NFC dentro de un menú de servicio, pero los códigos varían entre generaciones. Siempre que sea posible, usa la ruta de soporte oficial del modelo exacto.

Para una comprobación rápida mediante una aplicación, NFC Check indica si Android detecta hardware NFC y si está activado. NFC Tools resulta más útil si quieres leer etiquetas y consultar su ID, el tipo de tecnología y los registros NDEF.

## Encuentra la zona de la antena

La antena NFC no está siempre en el mismo lugar.

En muchos Samsung Galaxy S está alrededor de la parte superior central de la tapa trasera, cerca de la zona de las cámaras. En los Pixel suele encontrarse en la parte superior trasera. En Xiaomi y OnePlus, la ubicación cambia más entre modelos.

Por eso un móvil funciona al acercar el saliente de la cámara y otro solo responde cuando el centro de la parte trasera toca el lector. Si el manual del móvil incluye un diagrama de la antena NFC, confía en él antes que en un consejo genérico.

## Motivos habituales por los que falla el NFC

La funda lo bloquea. Es una explicación poco emocionante, pero frecuente. Prueba con el móvil sin funda antes de cambiar ajustes.

Estás acercando la zona equivocada. Mueve la tarjeta o el móvil despacio. No lo agites como si estuvieras leyendo un código de barras.

NFC está desactivado o se ha elegido la cartera equivocada. Busca NFC y Pagos sin contacto en Ajustes.

El móvil está bloqueado y la cartera exige desbloquearlo. Algunas versiones de Android permiten leer etiquetas con la pantalla encendida, pero exigen autenticación para pagar. Trata los pagos como una prueba distinta de la lectura básica de etiquetas.

Una actualización reciente ha cambiado el comportamiento. Android 17 llegó primero a los Pixel compatibles, mientras otras marcas distribuyen sus propias versiones de Android 17 más adelante. Si el problema aparece justo después de actualizar un Pixel, revisa las notas de soporte específicas de Pixel en lugar de suponer que ocurre lo mismo en Samsung, Xiaomi o OnePlus.

El móvil ha sido reparado. Las antenas NFC suelen formar parte de la tapa trasera, la bobina de carga inalámbrica o un conjunto flex. Si NFC dejó de funcionar después de cambiar la batería o la tapa, es posible que la antena no se haya vuelto a conectar correctamente.

## Cuándo es probable que el hardware esté averiado

Si NFC está activado, has retirado la funda, varias tarjetas y etiquetas no provocan ninguna respuesta, el modo seguro no cambia nada y una aplicación de diagnóstico sigue sin detectar actividad NFC, el fallo de hardware se vuelve probable.

El chip puede averiarse, pero los daños en la antena son más frecuentes. Las caídas, el agua, las reparaciones de la tapa trasera y los cables flex mal asentados son posibles responsables.

Para la mayoría de las personas, la pregunta práctica es si merece la pena reparar el NFC. Si utilizas pagos sin contacto todos los días, la reparación puede tener sentido. Si el móvil es antiguo y todo lo demás funciona, un reloj inteligente con pagos sin contacto puede ser una alternativa más barata.
