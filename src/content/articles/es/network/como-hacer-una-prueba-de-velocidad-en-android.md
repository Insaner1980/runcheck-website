---
title: "Cómo hacer una prueba de velocidad en Android"
description: "Pulsas Iniciar, ves cómo sube el indicador y recibes una cifra que parece oficial. ¿Es útil? Sí. ¿Es una respuesta definitiva? No."
listSummary: "Pulsas Iniciar, ves cómo sube el indicador y recibes una cifra que parece oficial."
hub: "network"
sourceNumber: 92
order: 3
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
La prueba muestra qué ocurrió en ese momento, con ese servidor y bajo esas condiciones de red. Es una instantánea, no un diagnóstico completo. Aun así, es el mejor primer dato que puedes obtener cuando el móvil parece lento.

## Qué mide la prueba

Una prueba normal muestra la velocidad de descarga, la velocidad de subida y la latencia.

La velocidad de descarga indica lo rápido que llegan los datos al móvil. Afecta a la navegación, el streaming, las descargas de aplicaciones, la visualización de fotos en la nube y la mayor parte del uso diario de Internet.

La velocidad de subida indica lo rápido que salen los datos del móvil. Importa al enviar vídeos, hacer copias de seguridad de fotos, subir archivos, participar en videollamadas y compartir la pantalla.

La latencia, que suele llamarse ping, es el tiempo de ida y vuelta medido en milisegundos. Una latencia baja hace que la conexión responda con rapidez. Una latencia alta provoca retrasos en los toques, las llamadas, los juegos y el trabajo remoto, aunque la velocidad de descarga parezca buena.

Algunas aplicaciones también muestran el jitter. Es la variación de la latencia de un momento a otro. Un ping de 30 ms con poco jitter resulta estable. Un ping de 30 ms que cambia constantemente puede seguir causando llamadas entrecortadas.

## Usa la prueba integrada de Google para una comprobación rápida

Abre un navegador, busca **prueba de velocidad** en Google y pulsa **Ejecutar prueba de velocidad** si aparece la tarjeta. Utiliza Measurement Lab, o M-Lab, y muestra las cifras principales sin instalar ninguna aplicación.

Es una buena comprobación rápida. No ofrece mucho historial y no es la mejor herramienta para comparar varias redes a lo largo del tiempo. Pero cuando alguien dice que "Internet va lento", permite ver enseguida si el móvil está recibiendo 2 Mbps o 200 Mbps.

## Usa una aplicación cuando necesites historial

Speedtest de Ookla es la opción más conocida. Permite medir descarga, subida, latencia y, normalmente, jitter, elegir servidores y conservar un historial de resultados. Resulta útil para comparar Wi-Fi, LTE, 5G y distintos lugares.

FAST de Netflix es más sencilla. Se centra primero en la velocidad de descarga porque se creó pensando en el rendimiento del streaming. Pulsa **Mostrar más información** para ver la subida y la latencia.

Meteor de OpenSignal ayuda a quienes no quieren entrar en demasiados detalles técnicos, ya que explica si la conexión medida es suficiente para tareas habituales como el streaming, los juegos, la navegación o las videollamadas.

runcheck utiliza M-Lab NDT7 en su prueba de velocidad integrada y guarda los resultados junto con el tipo de conexión y el contexto de la señal. Eso importa porque la velocidad por sí sola puede llevar a conclusiones equivocadas. Un mal resultado con señal débil no significa lo mismo que un mal resultado con señal intensa y latencia alta.

## Vigila el consumo de datos móviles

Cada prueba transfiere datos reales. Con Wi-Fi normalmente no importa. Con la red móvil, sí puede importar.

Las pruebas pequeñas desde la web pueden usar solo unas decenas de MB. Las aplicaciones de prueba pueden consumir bastante más en una conexión LTE o 5G rápida porque intentan medir cuántos datos puede mover la red durante el intervalo de prueba. Varias pruebas seguidas pueden gastar cientos de MB.

Por eso conviene probar los datos móviles con intención. Desactiva el Wi-Fi, haz la prueba una o dos veces, guarda los resultados y para.

## Cómo obtener un resultado más limpio

Quédate quieto. Si te mueves durante una prueba móvil, el teléfono puede cambiar de antena, banda o condiciones de señal mientras la medición está en curso.

Cierra antes las aplicaciones que estén consumiendo mucho ancho de banda. Las copias de seguridad en la nube, las actualizaciones, los vídeos y las descargas compiten con la prueba.

Mide el Wi-Fi y los datos móviles por separado. Si el Wi-Fi está activado, estás midiendo el Wi-Fi. Para comprobar la red móvil, desactívalo.

Haz tres pruebas solo cuando necesites una media más fiable. Si un resultado es muy distinto de los otros dos, descártalo. Probablemente coincidió con un pico breve de congestión, una mala elección de servidor o una transferencia en segundo plano.

Para solucionar problemas normales, usa un servidor cercano. Un servidor lejano añade latencia y puede mostrar menos velocidad por motivos que no tienen que ver con tu conexión local. Probar servidores lejanos solo tiene sentido si te interesa específicamente el acceso a servicios de esa región.

## Qué significan las cifras en la práctica

Para navegar y enviar mensajes, incluso 5 Mbps pueden resultar suficientes si la latencia es baja. Para vídeo HD, suelen bastar entre 5 y 10 Mbps. Para streaming en 4K, busca al menos 25 Mbps por reproducción.

En las videollamadas, la subida y la latencia importan más de lo que mucha gente cree. Una descarga de 200 Mbps no salvará una llamada si la subida es de 0,5 Mbps o el jitter es alto.

En los juegos, la latencia y el jitter pesan más que la descarga una vez instalado el juego. Una conexión estable de 40 Mbps puede sentirse mejor que otra de 400 Mbps con picos aleatorios de latencia.

En las copias de seguridad en la nube, la velocidad de subida determina cuánto se alarga el proceso. En muchas conexiones domésticas y redes móviles, la subida es muy inferior a la descarga, así que una cifra alta de descarga no garantiza copias rápidas.

## Compara el resultado con la promesa correcta

En el Wi-Fi de casa, compara el resultado con tu tarifa de banda ancha, pero deja margen para la sobrecarga propia de la conexión inalámbrica. Si tu tarifa es de 100 Mbps y el móvil obtiene 80 o 90 Mbps cerca del router, no hay ningún problema. Si obtiene 25 Mbps al lado del router, empieza a revisar el propio router, la congestión de canales, el proveedor de Internet o algún otro dispositivo que esté consumiendo ancho de banda.

En la red móvil, no esperes alcanzar la cifra publicitaria del 5G. La velocidad real depende del operador, la banda, la carga de la antena, la prioridad de la tarifa, la señal en interiores y el módem del dispositivo. Haz pruebas en varios lugares antes de culpar al móvil.

Compara también con la tarea que quieres realizar. Si Netflix funciona, las llamadas se oyen bien y las aplicaciones se descargan con normalidad, perseguir una cifra más bonita en la prueba de velocidad puede ser una pérdida de tiempo.

## Guarda resultados solo cuando cuenten una historia

Un único resultado basta para confirmar que algo va mal. Varias pruebas a lo largo del tiempo ayudan más a encontrar un patrón.

Haz una prueba cuando la conexión vaya mal y otra cuando funcione con normalidad. Anota la red, el lugar, la hora, la intensidad de la señal y si había una VPN conectada.

Ahí es donde el historial resulta útil. Si el Wi-Fi se ralentiza cada tarde, sospecha de la carga de la vivienda o de la congestión del proveedor. Si los datos móviles solo fallan dentro de un edificio, sospecha de la cobertura. Si todas las redes son lentas únicamente en un móvil, revisa el teléfono.
