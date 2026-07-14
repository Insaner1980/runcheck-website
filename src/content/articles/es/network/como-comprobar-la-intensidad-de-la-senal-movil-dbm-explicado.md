---
title: "Cómo comprobar la intensidad de la señal móvil (dBm explicado)"
description: "Las barras de cobertura sirven para echar un vistazo rápido, pero no son una medición. Un móvil puede mostrar cuatro barras donde otro enseña dos, aunque ambos estén conectados al mismo operador y en la misma habitación. Si quieres conocer la cifra real, busca la intensidad de la señal en dBm."
listSummary: "Las barras de cobertura sirven para echar un vistazo rápido, pero no son una medición."
hub: "network"
sourceNumber: 93
order: 4
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
Suena más técnico de lo que es. Los dBm solo indican el nivel de potencia que recibe el móvil de la red. Cuanto más cerca esté la cifra de cero, más intensa será la señal. Una lectura de -75 dBm es mejor que una de -95 dBm. Así de sencillo.

## Cómo interpretar rápidamente los dBm

La intensidad de la señal móvil aparece como una cifra negativa porque el teléfono mide cantidades muy pequeñas de potencia de radio. Durante un uso normal, lo habitual es ver valores entre unos -50 dBm y -120 dBm. Cerca de una antena podrías acercarte a -50 dBm. En el interior de un edificio de hormigón, un sótano o el borde de una zona de cobertura, puedes caer hasta -110 dBm o menos.

La escala es logarítmica. Cada 3 dBm representan aproximadamente el doble o la mitad de la potencia recibida. Por eso, -80 dBm no es solo un poco mejor que -86 dBm. En términos de potencia, es unas cuatro veces más intenso. Sí, de verdad.

Para LTE y la mayoría de las conexiones 5G por debajo de 6 GHz, estos intervalos son una referencia útil:

| Lectura | Qué suele significar |
|---|---|
| De -50 a -70 dBm | Excelente. Las llamadas y los datos deberían ser estables, siempre que la antena no esté saturada. |
| De -70 a -85 dBm | Buena. Es un nivel normal para una cobertura exterior decente o cerca de una ventana. |
| De -85 a -100 dBm | Utilizable, pero no especialmente buena. La navegación funciona, el streaming puede detenerse y la velocidad de subida suele caer antes. |
| De -100 a -110 dBm | Débil. Las llamadas pueden cortarse, los mensajes pueden retrasarse y el módem consume más energía para mantener el enlace. |
| Menos de -110 dBm | Marginal. Cabe esperar tiempos de espera agotados, momentos sin servicio o el cambio forzado a otra capa de red. |

No son límites universales para aprobar o suspender una conexión. Un móvil con -95 dBm puede funcionar bien si la señal está limpia y la antena tiene capacidad libre. Otro con -75 dBm puede ir a paso de tortuga si la celda está congestionada o hay muchas interferencias.

## Cómo comprobar la intensidad de la señal en Android

El menú exacto cambia según el fabricante, la versión de Android y la configuración del operador. El truco más rápido es abrir Ajustes y buscar "Estado de la SIM" o "Intensidad de la señal".

En Pixel y muchos móviles con una versión de Android cercana a la estándar, incluidos los Pixel compatibles que ya ejecutan Android 17, abre **Ajustes > Información del teléfono** y busca **Estado de la SIM**. Algunas versiones también muestran datos de la SIM en **Ajustes > Redes e Internet > SIMs**. La intensidad suele aparecer como un valor en dBm y otro en ASU.

En los Samsung Galaxy, abre **Ajustes > Información del teléfono** y busca **Información de estado** o **Estado de la tarjeta SIM**, según la versión de One UI. Si no aparece ese nombre, utiliza el buscador de Ajustes.

Hay un detalle importante: Android suele mostrar la lectura de la capa de red que estás utilizando en ese momento. Si el teléfono está conectado a LTE, la cifra corresponde a LTE. Si está en 5G NR, el valor puede basarse en mediciones de la señal de referencia 5G, según lo que permitan mostrar el módem y el operador. No siempre verás los valores de LTE y 5G uno al lado del otro.

## Menús de prueba ocultos

Muchos móviles Android todavía responden a este código del marcador:

`*#*#4636#*#*`

Abre la aplicación Teléfono, introduce el código y puede aparecer un menú de pruebas. Entra en la información del teléfono para ver el tipo de red, la intensidad de la señal, el estado de la conexión de datos y otros detalles de radio. No cambies el tipo de red preferido desde este menú salvo que sepas exactamente qué estás haciendo. Es una pantalla de diagnóstico, no un apartado de ajustes pensado para el uso diario.

Samsung suele bloquear ese código genérico. En muchos Galaxy, `*#0011#` abre en su lugar el Modo de servicio. Puede mostrar datos de la celda en uso, información de bandas y lecturas de señal. Algunos modelos de operador desactivan uno o ambos códigos, así que no des por hecho que siempre funcionarán.

## Aplicaciones que lo ponen más fácil

Aplicaciones como Network Cell Info Lite, CellularZ y Signal Strength colocan el valor en dBm en la pantalla principal y lo actualizan continuamente. Son útiles cuando recorres una casa, una oficina o un aparcamiento buscando el lugar donde el móvil tiene una conexión mejor de verdad.

Una buena aplicación de señal debería mostrar más de una cifra. RSRP indica la intensidad, mientras que RSRQ y SINR ayudan a saber si esa señal es aprovechable o está enterrada bajo el ruido.

runcheck muestra la calidad de la red junto con otras métricas del estado del dispositivo y conserva un historial. Esto importa porque una lectura aislada en dBm es solo una instantánea. El historial permite ver si el móvil siempre tiene poca señal en una habitación, si solo falla en hora punta o si empeoró de repente después de una actualización.

## RSRP, RSSI, RSRQ y SINR sin dolor de cabeza

Las pantallas de diagnóstico muestran varias siglas parecidas. No significan lo mismo.

RSSI significa Received Signal Strength Indicator. Se utilizaba mucho con conexiones 2G y 3G, y también puede aparecer en herramientas de Wi-Fi. RSSI mide toda la potencia recibida, incluida la señal útil, el ruido y las interferencias. Por eso es una métrica menos limpia para diagnosticar conexiones móviles.

RSRP significa Reference Signal Received Power. En LTE y 5G, suele ser la primera cifra de intensidad que conviene mirar. Mide la señal de referencia de la celda que da servicio, no toda la energía de radio presente en el canal.

RSRQ significa Reference Signal Received Quality. Combina la intensidad y las interferencias en una cifra de calidad. Cuanto menos negativo sea el valor, mejor. En LTE, una lectura cercana a -3 dB es excelente, mientras que valores próximos a -15 dB o -20 dB indican mala calidad.

SINR significa Signal to Interference plus Noise Ratio. Cuanto mayor, mejor. Más de 20 dB es excelente, entre 10 y 20 dB es bueno, y menos de 0 dB significa que el ruido y las interferencias son más intensos que la señal útil.

La versión práctica es esta: mira primero RSRP. Si RSRP es bueno pero los datos siguen siendo lentos, revisa después RSRQ y SINR. Una señal intensa con mala calidad es habitual en ciudades concurridas, edificios de pisos, estadios y lugares donde se solapan muchas celdas.

## Por qué puede ir lento con todas las barras

Las barras describen principalmente el nivel de señal. No indican cuánto ancho de banda le queda a la antena, cuántas personas la están usando, si el operador está reduciendo la prioridad de tu tarifa o si el móvil está conectado a una capa 5G de banda baja que se parece más a un buen LTE que al 5G rápido de los anuncios.

Por eso dos pruebas hechas en el mismo lugar pueden parecer contradictorias. El móvil puede mostrar -68 dBm y aun así descargar despacio durante un concierto porque cientos o miles de dispositivos compiten por la misma celda. A las 2:00, el mismo teléfono en el mismo asiento puede funcionar con rapidez.

## Por qué las lecturas cambian constantemente

La intensidad de la señal varía aunque no te muevas. Las ondas de radio rebotan en edificios, coches, paredes, personas y el terreno. Algunos reflejos ayudan. Otros anulan parte de la señal. Basta con mover el teléfono unos centímetros para que cambie la lectura.

Los movimientos en interiores aumentan las variaciones. Una ventana, el hueco de un ascensor, una pared de hormigón, un tejado metálico o un cristal de baja emisividad pueden alterar la lectura en 10 dB o más. Los sótanos y las habitaciones interiores suelen ser los peores lugares porque la señal debe atravesar más materiales antes de llegar al móvil.

La hora también puede influir, aunque no siempre porque haya cambiado la señal. En las horas de más uso, la celda puede estar saturada, de modo que la conexión va peor aunque la cifra en dBm sea parecida.

## ¿Qué se considera una buena lectura 5G?

En 5G por debajo de 6 GHz, un RSRP próximo a -80 dBm es bueno y alrededor de -100 dBm empieza a ser débil. En mmWave, la cobertura estable depende mucho más de la ubicación. Puedes tener una conexión mmWave rápida al aire libre y con línea de visión directa, y perderla al girar una esquina o entrar en un edificio.

No juzgues el 5G solo por el icono. Valóralo por la intensidad, la calidad, la velocidad, la latencia y la frecuencia con la que el móvil vuelve a LTE.

## Respuestas rápidas

¿Se puede mejorar la señal sin un amplificador? A veces. Acércate a una ventana, sube a otra planta, sal al exterior o prueba el lado opuesto del edificio. Si el 5G es débil en interiores, LTE puede ofrecer una conexión más práctica porque las bandas LTE de menor frecuencia suelen atravesar mejor las paredes.

¿Los dBm de la red móvil son iguales que los del Wi-Fi? La unidad es la misma, pero los intervalos útiles son distintos. En Wi-Fi, -50 dBm es una señal intensa y alrededor de -70 dBm es donde la estabilidad suele empezar a sufrir. Las redes móviles están diseñadas para distancias mayores, por lo que siguen siendo utilizables con cifras mucho más bajas.

¿Debes fiarte de las barras o de los dBm? Usa las barras para una mirada rápida. Usa los dBm cuando estés buscando un problema.
