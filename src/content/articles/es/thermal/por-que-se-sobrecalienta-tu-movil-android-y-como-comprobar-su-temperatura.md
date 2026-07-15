---
title: "Por qué se sobrecalienta tu móvil Android y cómo comprobar su temperatura"
metaTitle: "Por qué se sobrecalienta tu móvil Android"
description: "Aprende a comprobar la temperatura de un móvil Android, qué significan los intervalos seguros de la batería y cómo Android 17, los diagnósticos de Pixel, Samsung Members, la carga, las aplicaciones y la intensidad de la señal afectan al sobrecalentamiento."
listSummary: "Comprueba la temperatura e identifica por qué se sobrecalienta el móvil."
hub: "thermal"
sourceNumber: 53
order: 1
tags: ["temperatura","termico","android","solucion-de-problemas","hardware"]
locale: "es"
draft: false
---
*Un móvil Android puede calentarse por motivos triviales, por problemas serios o sin una causa evidente. La clave está en saber qué cifra estás mirando y si realmente significa algo.*

## Comprueba primero la temperatura

Empieza por las herramientas integradas. Son menos llamativas que las aplicaciones de sensores, pero también tienen menos probabilidades de inventar una precisión que el móvil no ofrece realmente.

Android 17 ya se está distribuyendo primero en los dispositivos Pixel compatibles, mientras que las demás marcas siguen después sus propios calendarios. En Pixel 6a y modelos posteriores, abre **Ajustes > Batería** y elige **Diagnóstico de la batería > El teléfono está muy caliente**. La herramienta de Pixel no siempre muestra una temperatura bruta de la batería. Ofrece recomendaciones específicas para el dispositivo según su estado térmico actual.

Para consultar el estado de la batería en los Pixel más recientes, abre la pantalla Batería y selecciona **Estado de la batería**. La página de asistencia actual de Google indica que el estado y la capacidad de la batería están disponibles en Pixel 8a y modelos posteriores, pero no en Pixel Tablet. Los modelos Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 y Pixel 8 Pro no muestran ese estado de la batería.

En los móviles Samsung Galaxy, la vía oficial para revisar la batería es la aplicación Samsung Members. Abre **Samsung Members > Asistencia > Diagnóstico del teléfono > Estado de la batería**. Samsung clasifica el resultado como Normal, Débil o Mala. Algunos modelos Galaxy también muestran información útil en Ajustes y Mantenimiento del dispositivo, pero los nombres exactos cambian entre versiones de One UI, regiones y modelos.

Todavía merece la pena probar el antiguo código de marcación `*#*#4636#*#*`, pero no bases todo el diagnóstico en él. En algunos móviles Android abre un menú de pruebas con información del teléfono, Wi-Fi, uso y, a veces, batería. En muchas versiones actuales de Samsung, Xiaomi y Pixel, la pantalla de batería no aparece o el código no hace nada. Es normal. No significa que el dispositivo esté averiado.

Una aplicación de diagnóstico es la alternativa cuando el fabricante no ofrece suficiente información. Las buenas aplicaciones muestran la temperatura de la batería, la corriente de carga, el estado térmico de Android y un historial. Sin embargo, conviene desconfiar de las afirmaciones exactas sobre la temperatura de la CPU. Android no expone una temperatura de CPU limpia y universal a las aplicaciones normales. Algunas leen sensores del fabricante cuando el dispositivo lo permite. Otras solo muestran la temperatura de la batería. Algunas hacen estimaciones.

runcheck resulta útil cuando te importa menos una cifra aislada y más el patrón. Relaciona las lecturas térmicas con el estado de la batería, la red, la presión de almacenamiento y el historial del dispositivo, para que puedas ver si el calor empezó con la carga, una señal débil, una aplicación en segundo plano o una tendencia más larga.

## Qué significa la cifra

La temperatura de la batería no es lo mismo que la temperatura de la superficie. Un móvil puede sentirse caliente porque el marco está repartiendo el calor del procesador, mientras la batería sigue dentro de un intervalo seguro. También puede ocurrir lo contrario, sobre todo durante la carga.

Utiliza estos intervalos como guía práctica, no como una regla de laboratorio:

- **20-35 °C:** Normal para el uso diario. Los mensajes, la navegación web y el streaming ligero suelen mantenerse aquí, salvo que la habitación esté caliente.
- **35-40 °C:** Templado, pero habitual durante la navegación GPS, las videollamadas, los juegos, las descargas por 5G o la carga.
- **40-45 °C:** Conviene prestar atención. El móvil puede atenuar la pantalla, ralentizar la carga o reducir el rendimiento.
- **Por encima de 45 °C:** Deja de añadir calor. Desenchúfalo, cierra las aplicaciones exigentes, quita la funda y aléjalo del sol.
- **Alrededor de 50 °C o más:** Trátalo como un episodio de sobrecalentamiento, sobre todo si aparece una advertencia, se apaga o resulta incómodo sujetarlo.

Los fabricantes suelen describir el uso seguro en función de la temperatura ambiente. Samsung indica un entorno de uso óptimo de 0-35 °C (32-95 °F) para los dispositivos Galaxy, y Google utiliza el mismo intervalo ambiental en sus directrices de seguridad para Pixel. Las lecturas internas de la batería pueden superar temporalmente esas cifras bajo carga, pero el calor repetido es lo que acelera el desgaste.

## De dónde procede el calor

La mayor parte del calor de un móvil procede de cuatro lugares: el SoC, la batería, las radios y el entorno.

La CPU y la GPU se calientan cuando trabajan intensamente. Los juegos, la grabación de vídeo 4K, el procesamiento de la cámara, la edición de vídeo, la navegación y la instalación de aplicaciones pueden exigir lo suficiente al silicio como para que notes calor cerca de la cámara o del borde superior. Cuando el calor no puede salir con suficiente rapidez, los controles térmicos de Android reducen el rendimiento. Eso es el thermal throttling, o limitación térmica.

La batería se calienta al cargarse y al descargarse con intensidad. La carga rápida añade más calor que un cargador lento de 5 W o 10 W porque la batería recibe más potencia en menos tiempo. Usar el móvil mientras se carga rápidamente es la combinación clásica: calor de carga más calor del procesador.

Las radios importan más de lo que parece. Una señal móvil débil obliga al módem a trabajar más. Un móvil en un sótano con una sola barra puede calentarse más estando inactivo que el mismo dispositivo sobre una mesa con buena conexión Wi-Fi. Si el calor desaparece en modo avión, la búsqueda de señal probablemente formaba parte del problema.

El entorno marca el punto de partida. Un móvil bajo el sol directo, dentro de un coche caliente, debajo de una almohada o en una funda gruesa de goma tiene menos margen para refrigerarse. Los móviles no llevan ventiladores. Disipan el calor a través del marco, la pantalla y la tapa trasera.

## La carga inalámbrica merece una mención aparte

La carga inalámbrica es cómoda, pero menos tolerante que un cable. Los cargadores Qi y Qi2 utilizan inducción magnética, y la alineación importa. Qi2 mejora la colocación con imanes, y Qi2 25W eleva la potencia inalámbrica certificada por encima del nivel anterior de 15 W, pero el calor sigue teniendo que salir por algún sitio.

Un cargador Qi2 bien alineado o un soporte de estilo Pixel Stand suele funcionar sin problemas. Una base mal alineada, una funda gruesa, un accesorio con anillo metálico o una habitación cálida pueden convertir una carga normal en una muy caliente. Google recomienda específicamente a quienes solucionan una carga inalámbrica lenta en Pixel que retiren la funda, alejen el dispositivo del sol directo, comprueben la alineación y se aseguren de que el cargador no bloquea el flujo de aire.

La regla práctica es sencilla: si la carga inalámbrica calienta el móvil todas las noches, cambia la configuración. Prueba sin funda, utiliza un cargador certificado, alinéalo bien y activa un límite del 80 % si tu modelo lo ofrece. Un poco de calor ocasional no es un desastre. Calor, 100 % de carga y varias horas sobre la base es una costumbre peor.

## Comprobaciones integradas antes de instalar nada

Abre la pantalla **Uso de batería** y busca aplicaciones que hayan consumido energía sin que las utilizaras. Que una aplicación de navegación aparezca después de un trayecto tiene sentido. Que una tienda online consuma un 18 % durante la noche, no.

Reinicia el móvil. Sí, en serio. Un servicio bloqueado puede mantener despierta la CPU durante horas, y reiniciar elimina ese estado más rápido que revisar uno por uno todos los menús de aplicaciones.

Comprueba las actualizaciones recientes. Una actualización importante de Android, incluido Android 17 en los Pixel ahora y las versiones posteriores de cada fabricante, puede hacer que el móvil se caliente durante uno o dos días mientras se optimizan aplicaciones, se reconstruyen índices y se completa la sincronización en la nube. Si el calor desaparece después de 24-48 horas, probablemente era trabajo de mantenimiento tras la actualización.

Prueba el modo seguro si el calor vuelve incluso después de reiniciar. En los Pixel, utiliza la combinación del botón de encendido correspondiente a tu modelo y mantén pulsado **Apagar** o **Reiniciar** hasta que aparezca la opción de modo seguro. Este modo desactiva las aplicaciones descargadas. Si el dispositivo permanece fresco, una aplicación de terceros es la sospechosa.

## Comprobaciones avanzadas con ADB

Si te manejas con ADB, puedes inspeccionar las zonas térmicas desde un ordenador:

```bash
adb shell for z in /sys/class/thermal/thermal_zone*; do echo "$z"; cat "$z/type"; cat "$z/temp"; done
```

Muchos valores se expresan en milésimas de grado Celsius, por lo que `38000` significa 38 °C. Lo difícil no es leer las cifras, sino entender qué sensor corresponde a cada una. Los fabricantes asignan nombres distintos a las zonas térmicas, y algunas lecturas están bloqueadas o no resultan útiles en las versiones comerciales.

Para el diagnóstico desde aplicaciones, las API térmicas públicas de Android suelen ser más claras. Android 10 introdujo los niveles de estado térmico mediante `PowerManager`, y las versiones posteriores también ofrecen margen térmico en los dispositivos compatibles. Un valor de margen cercano a 1,0 indica que el dispositivo está cerca de una limitación térmica severa con la carga de trabajo actual.

## Preguntas frecuentes

### ¿Es normal que el móvil esté templado?

Sí, durante la carga, los juegos, la navegación, las videollamadas, el uso del punto de acceso y las descargas grandes. Estar templado no es automáticamente malo. Estar caliente mientras no haces nada sí merece una investigación.

### ¿Puede el sobrecalentamiento dañar el móvil de forma permanente?

El calor repetido afecta principalmente a la batería. Las baterías de iones de litio envejecen más rápido cuando permanecen calientes, sobre todo con niveles de carga altos. Los móviles modernos se protegen reduciendo la velocidad, pausando la carga, desactivando funciones o apagándose antes de llegar al peor escenario.

### ¿Debo cerrar todas las aplicaciones?

Cierra la aplicación que está generando calor activamente, como un juego, una sesión de cámara, un editor de vídeo o la navegación. No hace falta deslizar compulsivamente todas las aplicaciones inactivas. Android gestiona la memoria mejor de lo que sugiere el antiguo consejo de usar eliminadores de tareas.

### ¿Por qué se calienta el móvil mientras se carga?

La carga genera calor dentro de la batería. La carga rápida genera más. Utilizar el móvil al mismo tiempo añade calor del procesador y de la pantalla. Si se calienta siempre al empezar a cargar, prueba un cargador más lento, otro cable y úsalo sin funda.

## En resumen

Utiliza primero las herramientas del fabricante y después una aplicación de diagnóstico si necesitas historial. Considera los códigos de marcación una opción adicional, no una garantía. Y cuando esté claramente caliente, no sigas exigiéndole más. Elimina la fuente de calor, deja que se enfríe y después busca el patrón.
