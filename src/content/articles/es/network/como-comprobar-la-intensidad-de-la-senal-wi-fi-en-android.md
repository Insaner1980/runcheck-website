---
title: "Cómo comprobar la intensidad de la señal Wi-Fi en Android"
description: "Aprende a interpretar la intensidad Wi-Fi en Android mediante dBm, no solo con las barras. Incluye ajustes del sistema, aplicaciones de análisis y el significado de las cifras."
listSummary: "Aprende a interpretar la intensidad Wi-Fi en Android mediante dBm, no solo con las barras."
hub: "network"
sourceNumber: 90
order: 1
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
Las barras de Wi-Fi de la barra de estado son una pista aproximada, no una medición. Dos móviles colocados uno al lado del otro pueden mostrar resultados distintos porque las capas de Android y los fabricantes no traducen la intensidad de la señal a barras de la misma forma.

Para diagnosticar de verdad, busca el valor en dBm. Esa cifra indica la intensidad de la señal que el móvil recibe del router.

## Empieza por los ajustes de Android

En un Pixel o un móvil con Android poco modificado, abre **Ajustes > Redes e Internet > Internet**. En un Samsung Galaxy, entra en **Ajustes > Conexiones > Wi-Fi**. Toca la red a la que estás conectado.

La pantalla de detalles suele mostrar una valoración de la señal, por ejemplo excelente, buena, aceptable o débil. También puede incluir la velocidad de enlace, la frecuencia, el tipo de seguridad, la dirección IP y otros datos de la conexión. La pantalla exacta cambia según la marca y la versión de Android, así que no pasa nada si tu móvil no coincide al milímetro con una captura de una guía.

En muchos móviles actuales, los ajustes de Android no enseñan el valor bruto en dBm. Es molesto, pero normal. La velocidad de enlace sigue aportando contexto. Si pasa de varios cientos de Mbps junto al router a 40 Mbps en el dormitorio del fondo, la conexión está dando una pista clara.

## Prueba las opciones para desarrolladores, pero no dependas de ellas

Algunos móviles muestran más detalles de Wi-Fi después de activar las opciones para desarrolladores.

Entra en **Ajustes > Información del teléfono** y toca siete veces **Número de compilación**. Después abre las opciones para desarrolladores desde el apartado Sistema y busca, dentro de las opciones de red, **Enable Wi-Fi verbose logging**. La documentación de Google indica que esta función aumenta el nivel de registro de cada SSID según la intensidad relativa de la señal recibida, o RSSI.

En la práctica, lo que aparece en pantalla varía. Los Pixel y los dispositivos cercanos a Android puro tienen más probabilidades de mostrar datos útiles. Samsung y otros fabricantes pueden ocultar la misma información o presentarla de otra forma. Es uno de esos trucos de Android que funciona hasta que deja de hacerlo.

## Utiliza una aplicación de análisis Wi-Fi para ver los dBm

Una aplicación de análisis Wi-Fi es la forma más sencilla de obtener una lectura en dBm en móviles de distintas marcas.

WiFiman, de Ubiquiti, muestra datos de la red como intensidad de señal, canal, SSID, BSSID, puerta de enlace, DNS, latencia y pérdida de paquetes. Es una buena primera opción si quieres una sola app que también incluya pruebas de velocidad y detección de dispositivos en la red.

NetSpot resulta más útil cuando quieres representar la cobertura de un espacio. Puede mostrar la intensidad de la señal y ayudarte a crear un mapa aproximado mientras recorres una casa o una oficina.

Network Analyzer es práctico cuando el problema quizá no sea la intensidad. Combina información Wi-Fi y móvil con herramientas como ping, consulta DNS y traceroute.

Después de instalar una, busca el nombre de tu red y observa cómo cambia el valor en dBm mientras te desplazas. Esa cifra importa más que el icono de la barra de estado.

## Qué significan los valores en dBm

Los valores en dBm son negativos. Cuanto más cerca están de cero, más fuerte es la señal. Una lectura de -45 dBm es mucho mejor que una de -75 dBm.

Puedes usar estos umbrales prácticos para una red doméstica:

- De -30 a -50 dBm: excelente. Probablemente estás cerca del router o del punto de acceso.
- De -50 a -60 dBm: fuerte. El streaming, las videollamadas y la navegación normal deberían ser estables.
- De -60 a -67 dBm: todavía buena para la mayoría de usos, incluidos el vídeo HD y las llamadas si hay pocas interferencias.
- De -67 a -70 dBm: utilizable, pero las llamadas en tiempo real y los juegos pueden empezar a sufrir.
- De -70 a -80 dBm: débil. La navegación puede funcionar, pero el vídeo puede perder calidad y las llamadas congelarse.
- Por debajo de -80 dBm: mala. El móvil puede seguir conectado aunque la transferencia de datos parezca rota.

No existe un corte perfecto porque el ruido y las interferencias también cuentan. Una señal limpia de -68 dBm puede rendir mejor que una de -60 dBm con mucho ruido en un edificio lleno de routers.

## Comprueba la banda de frecuencia

La mayoría de los routers utilizan una banda de 2,4 GHz, de menor frecuencia, y otra más rápida de 5 GHz. Los modelos nuevos también pueden ofrecer 6 GHz mediante Wi-Fi 6E o Wi-Fi 7.

La banda más baja llega más lejos y atraviesa mejor las paredes, pero está muy saturada. Los dispositivos Bluetooth, los routers vecinos, los vigilabebés y los microondas pueden añadir ruido.

La banda de 5 GHz es más rápida a distancias cortas y medias. Pierde intensidad con mayor rapidez al atravesar paredes y suelos. El móvil puede mostrar menos dBm en esa banda y aun así rendir mejor que la banda inferior porque dispone de más espacio para transmitir datos.

La banda de 6 GHz suele estar aún menos congestionada cuando está disponible, pero su alcance vuelve a ser menor. Funciona muy bien en la misma habitación o en estancias cercanas. No es una solución mágica para toda la casa.

Si el router combina las bandas bajo un solo nombre de red, el móvil elige automáticamente. Normalmente acierta, pero no siempre. Al investigar una zona sin cobertura, comprueba qué banda está usando realmente antes de culpar al router.

## Recorre las zonas problemáticas

Abre la aplicación de análisis y camina despacio por las habitaciones donde la conexión funciona mal. Observa en qué punto la red cae por debajo de unos -70 dBm.

Los obstáculos habituales son poco sorprendentes, pero reales: muros de hormigón, ladrillo, puertas metálicas, espejos con capa metálica, calefacción por suelo radiante y routers escondidos en armarios. Guardar el router en un mueble cerrado es un problema creado en casa.

runcheck muestra la lectura Wi-Fi actual en la pantalla de detalles de Red, con dBm, valoración de calidad, velocidad de enlace, frecuencia y latencia cuando Android facilita esos datos. El historial de Red resulta útil cuando el problema es intermitente, por ejemplo si la velocidad cae cada tarde o la señal empeora solo en una habitación.

## Mejora una señal débil

Empieza por mover el router. Colócalo más alto, cerca del centro de la vivienda y lejos de objetos metálicos. No lo escondas detrás del televisor ni dentro de un armario.

Cambia de canal si los routers cercanos están concentrados en el mismo. En 2,4 GHz, los canales 1, 6 y 11 son las opciones habituales que no se solapan. En 5 y 6 GHz hay más espacio disponible, aunque la congestión también puede aparecer en edificios con muchas viviendas.

Utiliza una red mesh cuando un solo router no puede cubrir el espacio. Un sistema mesh con nodos bien colocados suele funcionar mejor que un repetidor barato instalado justo en el límite de una zona con mala señal. El repetidor también necesita recibir una conexión decente. Si apenas oye al router, no puede crear una buena red de la nada.

Actualiza el firmware del router cuando haya nuevas versiones. No cambiará las leyes de la física, pero puede corregir fallos, problemas de roaming e incompatibilidades con móviles recientes.
