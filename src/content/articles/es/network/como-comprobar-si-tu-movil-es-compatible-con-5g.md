---
title: "Cómo comprobar si tu móvil es compatible con 5G"
description: "Cómo saber si un móvil Android es compatible con 5G, por qué puede no aparecer el icono de 5G y qué relación tienen las bandas, la tarifa y la compatibilidad del operador."
listSummary: "red, conectividad y android"
hub: "network"
sourceNumber: 101
order: 12
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
Un móvil tiene hardware 5G o no lo tiene. Android 17, una actualización de los ajustes del operador o una SIM nueva no pueden convertir un módem limitado a 4G en uno compatible con 5G.

Parece obvio, pero provoca mucha confusión. Bastantes móviles Android económicos recientes siguen siendo solo 4G, mientras que muchos modelos de gama alta más antiguos ya admiten 5G. El número de modelo importa más que el año que aparece en el recibo.

## Comprueba primero los ajustes de red

La comprobación más rápida está en los ajustes de Android.

En Pixel y muchos móviles con una versión de Android cercana a la original, ve a `Ajustes > Redes e Internet > SIMs`, elige la SIM y abre `Tipo de red preferido`. Si aparece una opción con `5G`, `NR` o `5G/LTE`, el móvil admite 5G con esa versión de software y ese perfil de operador.

En Samsung, comprueba `Ajustes > Conexiones > Redes móviles > Modo de red`.

En Xiaomi y POCO, comprueba `Configuración > Tarjetas SIM y redes móviles > Tipo de red preferida`.

En OnePlus, busca el apartado `red móvil` en Ajustes y abre la SIM o el menú del tipo de red preferido. El nombre exacto cambia según la versión de OxygenOS.

Si la opción más alta es LTE, 4G, 3G o 2G, el móvil puede ser solo 4G. Digo `puede` porque algunos operadores ocultan los ajustes de 5G cuando la tarifa, la SIM o la región no son compatibles. Las especificaciones exactas del modelo resolverán la duda.

## Busca el número de modelo exacto

Abre `Ajustes > Información del teléfono` y anota el número de modelo, no solo el nombre comercial. Un `Galaxy A55 5G` y una variante regional de otro móvil de la serie A pueden tener distinta compatibilidad de red. Lo mismo ocurre con muchos modelos de Xiaomi, Motorola, OPPO y Vivo.

Busca primero el número de modelo en la página de producto del fabricante. GSMArena también resulta útil para una comprobación rápida, pero, si las fuentes no coinciden, la página del fabricante es la referencia más fiable.

En el apartado de redes, busca las bandas `5G NR`. Entre las bandas 5G sub-6 GHz habituales están n28, n41, n71, n77 y n78, según el país y el operador. Las bandas mmWave, como n260 y n261, se usan en menos lugares y normalmente solo aparecen en variantes concretas de algunos móviles.

Si la ficha técnica solo enumera bandas GSM, WCDMA, LTE o 4G, el móvil no es compatible con 5G.

## Un móvil 5G necesita otras tres cosas

El hardware es solo el primer paso.

También necesitas una tarifa del operador con acceso a 5G. Algunas lo incluyen automáticamente. Otras tarifas antiguas o de prepago no. La disponibilidad puede ser especialmente irregular en tarifas para empresas y operadores móviles virtuales.

Necesitas cobertura 5G en el lugar donde estás. El mapa del operador es un punto de partida, no una garantía. La cobertura dentro de edificios puede ser mucho peor que en el exterior, sobre todo con frecuencias 5G más altas.

Y necesitas compatibilidad de bandas. Este es el detalle que mucha gente pasa por alto. Un móvil importado de otra región puede admitir 5G en un país y no incluir las bandas que utiliza tu operador. Puede ser `compatible con 5G` y comportarse como un móvil 4G en tu red.

## Mira la barra de estado, pero no te fíes demasiado

Cuando el móvil está conectado a 5G, la barra de estado suele mostrar `5G`. Según el operador y el país, también puede mostrar etiquetas como `5G+`, `5G UW` o `5G UC`.

Que no aparezca el icono de 5G no significa automáticamente que el móvil no sea compatible. Puede que estés fuera de cobertura, dentro de un edificio que atenúa la señal, usando una tarifa limitada a 4G, con un perfil de SIM incorrecto o conectado a un operador que desactiva 5G en una de las ranuras SIM.

Si alguna vez ves `5G E`, considéralo una denominación comercial de LTE, no 5G real. AT&T utilizó esa etiqueta para un servicio 4G LTE mejorado en Estados Unidos y lleva años confundiendo a la gente.

## Comprueba el procesador, pero no te quedes ahí

El SoC suele indicar si el 5G es siquiera posible. Algunos ejemplos habituales son Qualcomm Snapdragon 480 y chips posteriores identificados como 5G, muchos Snapdragon de las series 6, 7 y 8 Gen, los MediaTek Dimensity, Samsung Exynos 1280 y chips 5G posteriores de gama media o alta, y todos los Google Tensor.

Pero los nombres de los procesadores son confusos. Algunos Snapdragon de la serie 600 solo admiten 4G. Hay móviles que utilizan una plataforma capaz de trabajar con 5G, pero se venden también en una variante 4G. Los MediaTek Helio G suelen limitarse a 4G, mientras que Dimensity es la familia 5G de MediaTek.

Usa el procesador como pista y verifica después el modelo completo del móvil y sus bandas.

## Android 17 no cambia la respuesta del hardware

Google lanzó Android 17 el 16 de junio de 2026 para la mayoría de los Pixel compatibles. Los dispositivos nuevos y los móviles de otros fabricantes lo reciben según sus propios calendarios. La actualización puede mejorar el firmware del módem, el comportamiento con el operador y la estabilidad de red en los móviles compatibles.

No puede añadir 5G a un módem 4G. Si tu móvil no era compatible con 5G antes de Android 17, tampoco lo será después de actualizar.

## 5G SA y NSA

Hay dos grandes modos de despliegue de 5G.

NSA, o 5G no autónomo, utiliza la radio 5G junto con una red central 4G. Esto permitió a los operadores desplegar 5G con mayor rapidez.

SA, o 5G autónomo, utiliza una red central 5G. Puede reducir la latencia, mejorar la eficiencia de la red y habilitar funciones futuras, pero su despliegue sigue siendo desigual entre operadores.

La mayoría de la gente no necesita obsesionarse con SA y NSA para navegar, usar mapas, enviar mensajes o ver vídeos. Importa más si tu operador está trasladando funciones a SA, si utilizas uno de los primeros móviles 5G o si necesitas la menor latencia posible.

## Por qué tu móvil 5G siempre muestra LTE

Compruébalo en este orden:

- Confirma que `Tipo de red preferido` incluye 5G o NR.
- Comprueba que tu tarifa incluye 5G.
- Consulta el mapa de cobertura del operador para la ubicación exacta.
- Sal al exterior o acércate a una ventana para descartar la pérdida de señal dentro del edificio.
- Asegúrate de que la línea SIM o eSIM está activa y configurada como SIM de datos.
- Comprueba si el modo de doble SIM desactiva 5G en tu modelo.
- Compara las bandas 5G NR del móvil con las utilizadas por el operador.
- Instala las actualizaciones disponibles del sistema y del operador.

Si todo lo anterior está correcto y el móvil nunca encuentra 5G, prueba otra SIM del mismo operador o pide al operador que revise y actualice el aprovisionamiento de la línea.

## ¿Merece la pena cambiar de móvil por el 5G?

A veces. Esa es la respuesta sincera.

En una ciudad con buena cobertura 5G de banda media o mmWave, la diferencia de velocidad puede ser evidente. Las descargas terminan antes, compartir Internet funciona mejor y la latencia puede bajar. En una zona rural con 5G débil o irregular, una buena conexión 4G puede funcionar mejor que un móvil que cambia constantemente entre LTE y 5G.

Si tu móvil actual funciona bien y la cobertura 5G de tu zona es débil, no lo cambies solo por el icono. Valora el conjunto: batería, cámara, soporte de actualizaciones, almacenamiento, RAM y calidad del módem.
