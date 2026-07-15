---
title: "Cómo medir la latencia de red en Android"
description: "Estás en una videollamada, todos te oyen, la imagen parece correcta y, aun así, la conversación da la sensación de ir medio segundo desfasada. Eso es la latencia. La velocidad de descarga recibe casi toda la atención, pero la latencia decide si una conexión responde con agilidad."
listSummary: "red, conectividad y android"
hub: "network"
sourceNumber: 103
order: 14
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
La latencia se mide en milisegundos (ms). Cuanto más baja, mejor. Hay tres cifras que importan especialmente: ping, jitter y pérdida de paquetes. El ping es el tiempo de ida y vuelta entre el móvil y un servidor. El jitter indica cuánto varía ese tiempo entre una solicitud y la siguiente. La pérdida de paquetes es el porcentaje de datos que nunca llega a su destino.

Una conexión con 100 Mbps de descarga y 150 ms de ping puede sentirse peor que otra de 20 Mbps y 15 ms. Parece contradictorio hasta que pruebas un juego, una videollamada o un escritorio remoto. La velocidad mueve los datos. La latencia controla el tiempo de reacción.

## Qué significan los valores

Estos intervalos son orientaciones prácticas, no leyes físicas. El servidor utilizado, la red y hasta la hora del día pueden cambiar el resultado.

Para el ping:

- 0-20 ms: excelente. Los juegos competitivos, las videollamadas y el trabajo remoto responden de inmediato.
- 20-50 ms: bueno. Sirve para casi todo, incluidos los juegos ocasionales y las llamadas de voz.
- 50-100 ms: utilizable. La navegación y el streaming siguen funcionando, pero los juegos rápidos en línea empiezan a mostrar retraso.
- Más de 100 ms: retardo perceptible. Las llamadas pueden tener pausas incómodas y los juegos en tiempo real resultan frustrantes.

En cuanto al jitter, menos de 30 ms suele ser aceptable. Entre 30 y 50 ms, las llamadas y el vídeo en directo pueden empezar a entrecortarse. Por encima de 50 ms, la conexión puede parecer inestable aunque la velocidad sea alta.

La pérdida de paquetes admite menos margen. Más de un 1-2 % puede causar cortes de audio, imagen congelada o saltos hacia atrás en los juegos. Y no, una tarifa más rápida no corrige automáticamente la pérdida de paquetes.

## Empieza con una prueba de velocidad

La primera comprobación más sencilla es una prueba de velocidad que también muestre la latencia. Ejecuta la misma prueba dos veces: una con Wi-Fi y otra con datos móviles. Si solo una conexión da malos resultados, ya has acotado el problema.

### Prueba de velocidad de Google y M-Lab

Busca «prueba de velocidad» en Chrome desde el móvil. La prueba integrada de Google utiliza Measurement Lab, más conocido como M-Lab. Su prueba NDT muestra velocidad de subida, velocidad de descarga y métricas de latencia.

runcheck utiliza el protocolo NDT7 de M-Lab para su prueba de velocidad integrada. Lo útil es el contexto: guarda el resultado junto con el tipo de conexión, la intensidad de la señal, el ping, el jitter y las velocidades de subida y descarga. Así no tienes que recordar si aquel resultado malo correspondía a Wi-Fi, LTE o 5G.

### Speedtest by Ookla

Speedtest by Ookla sigue siendo la opción conocida para una comprobación rápida. Muestra ping, jitter, descarga y subida, y permite elegir un servidor cercano. Para obtener una referencia de latencia, selecciona uno próximo. Si estás investigando un problema con un juego o una herramienta de trabajo, prueba contra un servidor situado cerca del servicio que utilizas, siempre que la aplicación permita elegirlo.

### Fast.com

Fast.com es la prueba de velocidad de Netflix. Empieza mostrando la descarga, pero al pulsar «Mostrar más información» aparecen la subida y la latencia. Fíjate en la latencia con carga. La latencia sin carga mide la conexión cuando está tranquila. La latencia con carga la mide mientras hay tráfico, algo más parecido a lo que ocurre cuando otra persona está viendo vídeo, sincronizando fotos o descargando una actualización de un juego en la misma red.

## Usa una herramienta de ping para una prueba más larga

Las pruebas de velocidad son una instantánea. Un ping mantenido durante unos minutos permite ver si la latencia es estable.

PingTools Network Utilities puede ejecutar ping, traceroute, consultas DNS y otras comprobaciones de red desde una sola aplicación. Para una prueba sencilla, haz ping a un destino estable como `1.1.1.1` o `8.8.8.8`. Si estás investigando un juego o servicio de trabajo concreto, utiliza su host cuando el proveedor publique uno.

Termux resulta útil si te manejas con una terminal. Instálalo desde una fuente oficial y añade la utilidad de ping si hace falta:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

El resumen muestra los tiempos mínimo, medio y máximo, además de la variación entre respuestas. Esa variación es lo que debes vigilar. Una conexión que salta de 20 ms a 250 ms y vuelve a bajar funciona peor que otra estable en 60 ms.

## Mide la latencia con la red bajo carga

La latencia en reposo puede engañar. Un router puede marcar 12 ms cuando nadie usa la red y subir a 300 ms en cuanto un portátil empieza a subir fotos.

Ese problema suele llamarse bufferbloat. El equipo de red deja que las colas se llenen en lugar de gestionar el tráfico con eficacia. Se nota sobre todo durante las subidas, las copias de seguridad de vídeo, la sincronización en la nube y las descargas grandes.

Haz esta prueba sencilla:

1. Mide la latencia mientras nadie más utiliza la red.
2. Inicia una descarga o subida grande en otro dispositivo.
3. Repite exactamente la misma prueba de latencia.

Si el ping aumenta mucho bajo carga, lo más probable es que el móvil no sea el problema principal. El router, el módem o la conexión del operador están gestionando mal las colas. Ajustes como QoS pueden ayudar, pero SQM (Smart Queue Management) es una solución mejor cuando el router lo admite.

También merece la pena abrir Waveform Bufferbloat Test en el navegador del móvil. La prueba puntúa cuánto aumenta la latencia durante las cargas de descarga y subida. Una A o B suele estar bien. Una D o F indica que las aplicaciones en tiempo real sufrirán cuando la red esté ocupada.

## Compara Wi-Fi y datos móviles

Probar ambas redes es la forma más rápida de evitar suposiciones.

La latencia de Wi-Fi depende de la distancia al router, las interferencias, la calidad del equipo, la congestión del canal y la banda de frecuencia. La banda de 5 GHz suele tener menos interferencias y mejor latencia que la de 2,4 GHz a corta distancia, pero llega menos lejos. Wi-Fi 6 y Wi-Fi 6E pueden ayudar en redes saturadas, siempre que tanto el móvil como el router sean compatibles.

La latencia móvil depende de la calidad de la señal, la carga de la estación base, el enrutamiento del operador y de si el móvil está conectado a LTE, 5G sub-6 o 5G mmWave. Estos son intervalos aproximados del uso real:

- 4G LTE: a menudo entre 30 y 60 ms, y más cuando la red está congestionada.
- 5G sub-6: a menudo entre 15 y 40 ms.
- 5G mmWave: puede ser menor, pero la cobertura es limitada y se bloquea con facilidad.
- 3G: demasiado lento e irregular para el uso moderno en tiempo real.

No son garantías. Una conexión LTE limpia puede superar a una red 5G congestionada, y una señal Wi-Fi débil que atraviesa dos paredes puede perder claramente frente a los datos móviles.

En Android, comprueba el tipo de red móvil activo en la barra de estado o en el apartado de estado de la SIM en Ajustes. La ruta exacta varía según la marca. Después de una actualización importante del sistema, incluido Android 17 en los Pixel compatibles, revisa este dato antes de culpar al hardware, porque las actualizaciones pueden cambiar los ajustes del operador y el comportamiento de la red.

## Qué aumenta la latencia

La distancia al servidor es la respuesta aburrida, pero importa. Un servidor en tu ciudad puede responder en menos de 10 ms. Otro al otro lado del océano puede superar 120 ms incluso con una conexión perfecta.

Después está la congestión. Demasiados dispositivos en la misma red Wi-Fi, un canal saturado en un bloque de pisos o una estación base móvil muy ocupada añaden retraso. Las pruebas por la tarde o la noche suelen dar peores resultados que por la mañana.

Las VPN añaden otro salto. Un servidor VPN cercano quizá sume solo 10-20 ms. Uno lejano puede añadir mucho más. Desconecta la VPN y repite la prueba antes de concluir que el móvil va lento.

El tráfico en segundo plano también cuenta. Las copias de seguridad en la nube, las actualizaciones de aplicaciones, la sincronización de fotos y el streaming elevan la latencia, sobre todo en conexiones domésticas con poca capacidad de subida.

## Qué hacer con el resultado

Si la latencia es mala solo con Wi-Fi, reinicia el router, acércate, cambia a 5 GHz y prueba un canal menos congestionado. Si empeora únicamente cuando la red está ocupada, revisa QoS o SQM en el router.

Si el problema aparece solo con datos móviles, compara la intensidad de la señal en distintas ubicaciones. Activa y desactiva el modo avión para forzar una nueva conexión con la red. Si empezó justo después de una actualización del sistema, comprueba si hay una actualización pendiente de Servicios del operador o del propio sistema.

Si la latencia es mala en todas partes, prueba otro móvil en las mismas redes. Cuando dos móviles muestran el mismo retraso, el problema está en la red. Cuando solo falla uno, entonces tiene sentido revisar la VPN, las aplicaciones en segundo plano, el sobrecalentamiento o un posible fallo de radio.

## Preguntas frecuentes

### ¿El ping y la latencia son lo mismo?

Técnicamente, la latencia es el retraso en un solo sentido y el ping es el tiempo de ida y vuelta. En la solución de problemas de un móvil, ambos términos se usan casi como sinónimos porque las aplicaciones muestran el ping de ida y vuelta.

### ¿Puedo reducir el ping en Android?

No puedes cambiar la distancia física a un servidor, pero sí eliminar retrasos evitables. Desconecta una VPN lenta, cierra aplicaciones que consuman mucho ancho de banda en segundo plano, usa Wi-Fi de 5 GHz cuando estés cerca del router y corrige el bufferbloat en el router si la latencia se dispara bajo carga.

### ¿Por qué tengo mucha velocidad, pero los juegos siguen teniendo lag?

Porque la velocidad de descarga y la latencia son problemas distintos. Una conexión rápida también puede sufrir jitter, pérdida de paquetes o una latencia con carga elevada. Los juegos dependen más de la regularidad de los tiempos que de los Mbps brutos.

### ¿Con qué frecuencia debería medir la latencia?

Haz pruebas a distintas horas durante varios días. Un resultado es una instantánea. Tres o cuatro mediciones con Wi-Fi y datos móviles permiten saber si el problema es constante.
