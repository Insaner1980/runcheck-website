---
title: "Qué significa la puntuación de estado de un móvil y cómo se calcula"
description: "Abre los Ajustes de cualquier móvil Android y encontrarás la información de la batería en un sitio, los datos de almacenamiento en otro y los detalles de la red en una pantalla distinta. Una puntuación de estado reúne todo eso, batería, estado térmico, red y almacenamiento, y lo reduce a una sola cifra, normalmente de 0 a 100. Una lectura en lugar de cuatro."
listSummary: "temperatura, termico y android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperatura","termico","android","solucion-de-problemas","hardware"]
locale: "es"
draft: false
---
Android no define una puntuación universal para el estado del teléfono. No existe una pantalla común de Ajustes en la que "82/100" signifique lo mismo en todas las marcas. Mantenimiento del dispositivo de Samsung sí utiliza una escala de 100 puntos, mientras que **Device health and support** de Pixel muestra el estado general y el de distintas funciones, pero son herramientas propias de cada fabricante, no un estándar compartido por Android. Las aplicaciones de diagnóstico aplican sus propios modelos. Importa más saber qué entra en la puntuación y cuáles son sus límites que fijarse solo en el número.

## Qué mide una puntuación de estado

Una puntuación útil suele combinar cuatro categorías y dar más peso a las que más afectan al uso diario. No existe una distribución normalizada.

**La batería** tiene el mayor peso. En el modelo de runcheck representa el 40 % de la puntuación total. Tiene sentido: una batería degradada suele ser el problema más perceptible en un teléfono que envejece. El componente de batería penaliza el estado comunicado por la API BatteryManager de Android, con valores como Good, Overheat, Dead o Cold, además de la temperatura, el voltaje y, cuando el dispositivo lo proporciona, el porcentaje de estado de la batería. La aplicación no consulta la capacidad nominal mediante APIs privadas ni presenta una estimación de capacidad nominal como si fuera un dato de hardware. Android 14 añadió APIs más detalladas relacionadas con el estado de la batería, pero el recuento de ciclos o el porcentaje solo aparecen cuando el fabricante y la HAL de la batería los exponen. Una batería con un 92 % de estado y una temperatura de 31 °C obtiene un resultado alto. Otra con un 74 % y funcionando a 39 °C reduce mucho la puntuación.

**El estado térmico** aporta un 25 % en el modelo de runcheck. Android comunica el estado térmico mediante `PowerManager.getCurrentThermalStatus()` desde Android 10 y ofrece margen térmico con `getThermalHeadroom()` desde Android 11. Estas APIs ayudan a saber si el móvil está frío, caliente, limitando el rendimiento o acercándose al apagado. En la puntuación actual intervienen la temperatura de la batería, la disponibilidad de una lectura de la CPU y el estado térmico de Android. La aplicación no consulta zonas térmicas privadas de sysfs, por lo que la temperatura de la CPU puede no estar disponible. El calor elevado reduce el rendimiento de la CPU mediante limitación térmica y acelera el desgaste de la batería a largo plazo. Un teléfono con estado térmico normal y la batería a 28 °C puntúa bien. Uno con limitación moderada y más de 40 °C no.

**La conectividad de red** representa otro 25 %. Sin una prueba de velocidad reciente, runcheck se basa principalmente en la calidad de la señal y la latencia. Si existe una prueba realizada hace menos de una hora, el componente de red pondera la señal con un 40 %, el ping con un 30 %, la velocidad de descarga con un 20 % y el jitter o estabilidad con un 10 %. Como referencia, en Wi-Fi una intensidad de -50 a -70 dBm es excelente, de -70 a -80 dBm resulta aceptable y por debajo de -80 dBm el rendimiento suele empeorar. En red móvil, más de -85 dBm es una señal fuerte y menos de -110 dBm es deficiente. La latencia también importa. La diferencia práctica entre un ping de 15 ms y otro de 200 ms suele ser mayor que la que sugieren pequeñas variaciones de señal.

**El almacenamiento** es el componente más pequeño, con un 10 %. runcheck penaliza el porcentaje ocupado y aplica reducciones más fuertes cuando queda muy poco espacio libre. Android suele rendir peor con el almacenamiento NAND casi lleno porque el controlador dispone de menos margen para la recogida de basura y el reparto del desgaste.

## Por qué importan los pesos

El estado de la batería afecta al móvil todos los días. El almacenamiento solo se convierte en un problema serio al superar ciertos niveles. La calidad de la red cambia constantemente por factores que el teléfono no controla. El estado térmico es pasajero: un móvil caliente ahora puede volver a la normalidad dentro de diez minutos.

Las aplicaciones no utilizan una ponderación común. Algunas asignan el mismo peso a las cuatro categorías, lo que, francamente, no tiene mucho sentido: trata un almacenamiento lleno como si fuera equivalente a una batería que está fallando. runcheck asigna un 40 % a la batería, un 25 % al estado térmico, otro 25 % a la red y un 10 % al almacenamiento. Esa distribución se acerca más a cómo se perciben los problemas en el uso real. Un móvil con una batería excelente y poco espacio libre está menos limitado que otro con mucho almacenamiento disponible y una batería muy degradada.

## El problema de la fiabilidad

No todas las lecturas que alimentan la puntuación son igual de fiables. Aquí es donde el concepto empieza a complicarse.

El porcentaje de estado de la batería es preciso cuando el teléfono implementa correctamente la HAL correspondiente, como ocurre en algunos Pixel recientes, en determinados Samsung Galaxy S25 y posteriores, y en unos pocos modelos más. Cuando el dispositivo no expone el dato, otras aplicaciones pueden estimarlo observando las cargas durante un periodo prolongado. Esas estimaciones mejoran con el uso, pero al principio son aproximadas. Una puntuación basada en una estimación de batería de precisión desconocida hereda esa incertidumbre.

Las lecturas térmicas dependen de los sensores que exponga el teléfono. `getCurrentThermalStatus()` devuelve una categoría general, desde un estado normal hasta uno próximo al apagado, pero es una señal poco detallada. `getThermalHeadroom()` devuelve un valor que indica cuánto margen queda antes de una limitación térmica importante, aunque su interpretación puede cambiar entre SoC y diseños de dispositivo. La temperatura de la batería está disponible de forma más constante, pero mide la batería, no la CPU ni la superficie del móvil. Esas temperaturas pueden diferir entre 5 y 10 °C.

La intensidad de la señal en dBm es fiable cuando Android la comunica. Las barras de cobertura no están normalizadas. Tres barras en un Samsung y tres en un Pixel situados en el mismo lugar pueden corresponder a valores dBm diferentes. Las barras son una representación visual. La lectura en dBm es la que importa.

El uso del almacenamiento es la métrica más uniforme entre dispositivos. Es un cálculo directo y no depende de una HAL de batería o de sensores térmicos específicos.

Una puntuación honesta reconoce estas limitaciones en vez de ocultarlas. Si el estado de la batería procede de una estimación y no de una lectura de hardware, esa incertidumbre debería ser visible. Mostrar un "87/100" con total seguridad cuando una de las entradas tiene un margen de error del 5 % resulta engañoso, y muchas aplicaciones hacen exactamente eso.

## Puntuaciones en móviles antiguos

La calidad de la puntuación depende de la cantidad de datos que exponga el dispositivo. Los modelos antiguos ofrecen menos.

Los móviles con Android 10 (API 29) o una versión posterior pueden comunicar el estado térmico, por lo que esa parte funciona razonablemente bien en dispositivos desde 2019 siempre que el fabricante proporcione datos útiles. Android 11 (API 30) añadió el margen térmico, que permite una lectura más gradual. Por debajo de Android 10, la información suele limitarse a la temperatura de la batería.

La diferencia más grande está en el estado de la batería. Android 14 añadió APIs más detalladas, pero la mayoría de los móviles lanzados antes de 2024 no informa de un porcentaje completo ni del recuento de ciclos. En esos dispositivos, la puntuación utiliza señales indirectas: la clasificación general de BatteryManager, como Good, Overheat o Dead, la temperatura, el voltaje y otros datos disponibles. Un móvil con Android 10 todavía puede generar una puntuación útil, pero con menos precisión que un Pixel 8a o posterior compatible que comunique directamente el estado y los ciclos.

Las métricas básicas de almacenamiento y red están disponibles de forma bastante uniforme desde Android 8.

El resultado práctico es que una puntuación en Android 9 a 13 sigue siendo útil, pero depende más de señales incompletas o estimadas. Detecta problemas claros, como una batería muy degradada, un almacenamiento en situación crítica o un sobrecalentamiento persistente, aunque el margen de confianza es mayor. Sigue teniendo valor. Simplemente es menos precisa.

## Cómo interpretar la cifra

**75-100:** el móvil está en buen estado. Desgaste normal de la batería, sin problemas térmicos importantes, espacio suficiente y conectividad funcional.

**50-74:** algo necesita atención. Lo más habitual es una batería que ha perdido capacidad suficiente para acortar la autonomía o un almacenamiento tan lleno que afecta al rendimiento. Un mantenimiento dirigido puede corregir el problema si la causa no es desgaste físico.

**25-49:** hay un problema real. Batería muy degradada, limitación térmica persistente o almacenamiento en estado crítico. Ya es terreno de reparación o sustitución.

**Menos de 25:** algún componente o condición está fallando de forma activa.

Estos umbrales no son oficiales. Ningún organismo define qué puntuación convierte a un móvil en "saludable". Son convenciones utilizadas por las herramientas de diagnóstico y se corresponden de forma aproximada con lo que solemos percibir como buen estado, aceptable, deteriorado o averiado.

## Lo que una puntuación no puede decirte

No detecta daños físicos. Una pantalla rota, un altavoz defectuoso, un puerto de carga flojo o daños por agua no aparecen en ninguna métrica basada solo en software.

Tampoco predice cuánto tiempo de vida le queda al teléfono. Una puntuación de 78 no significa que haya consumido "el 78 % de su vida útil". Indica que, en ese momento y según las métricas comprobadas, el dispositivo se encuentra en un estado razonable.

No permite comparar directamente modelos distintos. Un 90/100 en un móvil económico con 3 GB de RAM y 32 GB de almacenamiento no equivale a un 90/100 en un buque insignia con 12 GB de RAM y 256 GB.

La puntuación es una instantánea. Sirve para detectar tendencias, por ejemplo si el móvil empeora con el tiempo, y para hacer evaluaciones rápidas, como decidir si merece la pena comprar un teléfono de segunda mano. Es un punto de partida, no un diagnóstico definitivo.

## Preguntas frecuentes

**¿Los fabricantes publican puntuaciones oficiales del estado del móvil?**
No existe una universal. Mantenimiento del dispositivo de Samsung utiliza una escala de 100 puntos basada en sus propias comprobaciones de batería, almacenamiento, memoria y seguridad, no en un estándar común de Android. **Device health and support** de Pixel muestra el estado general y el de distintas funciones en vez de una puntuación genérica de 0 a 100. Las herramientas de los fabricantes son útiles, pero sus resultados no se pueden comparar de forma directa entre marcas.

**¿Se puede mejorar una puntuación baja?**
Depende por completo de la causa. Si el almacenamiento lleno la está reduciendo, liberar espacio puede mejorarla de inmediato. Si la batería está degradada, la única solución real es sustituirla. Los problemas térmicos a veces desaparecen al cerrar una aplicación que se ha quedado trabajando en segundo plano o al retirar una funda que retiene demasiado calor.

**¿Una puntuación más alta siempre es mejor?**
En el mismo móvil a lo largo del tiempo, sí. Una bajada indica deterioro o peores condiciones. Entre teléfonos distintos, no necesariamente. Un dispositivo de tres años con 72 puntos puede funcionar perfectamente para su propietario, mientras que uno nuevo con 95 puede tener mala cobertura en el lugar donde se utiliza y reflejarlo parcialmente en la puntuación.
