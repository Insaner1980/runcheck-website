---
title: "Cómo probar el hardware de un móvil Android: guía completa de diagnóstico (2026)"
description: "Un móvil Android puede parecer estar bien y tener una pieza que empieza a fallar. Una batería gastada, un altavoz débil, un sensor de proximidad defectuoso o una antena dañada no siempre se anuncian de forma clara. Lo que notas es menos autonomía, llamadas extrañas, calor aleatorio o una pantalla que no responde en una esquina."
listSummary: "Un móvil Android puede parecer estar bien y tener una pieza que empieza a fallar."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
La buena noticia es que puedes comprobar casi todo esto antes de pagar una reparación. Android ofrece páginas de ajustes, diagnósticos del fabricante, códigos del marcador y pruebas manuales para los componentes principales. La parte complicada es que nada de ello funciona exactamente igual en todos los móviles.

Google lanzó Android 17 el 16 de junio de 2026 para la mayoría de los Pixel compatibles, mientras que las demás marcas siguen sus propios calendarios. Esto importa porque los menús de diagnóstico, las pantallas sobre el estado de la batería y las rutas de Ajustes pueden variar según la versión de Android, la capa del fabricante, la compilación del operador y la región. Considera cada código de esta guía un atajo, no una promesa.

## Respuesta rápida

Empieza por la herramienta oficial de diagnóstico de tu marca cuando exista.

- Samsung Galaxy: abre Samsung Members, entra en Asistencia y ejecuta Diagnóstico del teléfono. Puedes iniciar todas las pruebas o elegir un componente, como la batería, el altavoz, el micrófono, la pantalla, la cámara o los sensores. Muchos Galaxy también admiten `*#0*#` en la aplicación Teléfono para abrir un menú de pruebas de hardware.
- Google Pixel: marca `*#*#7287#*#*` con conexión a Internet para abrir Pixel Diagnostics en los móviles Pixel compatibles. Pixel Tablet utiliza el proceso web de reparación y diagnóstico de Google.
- Motorola: abre Device Help, entra en el diagnóstico del dispositivo y ejecuta la prueba de hardware.
- Xiaomi, Redmi y POCO: prueba `*#*#6484#*#*` para abrir el menú de diagnóstico CIT. En muchos modelos también puede abrirse tocando varias veces la versión del kernel en Información del teléfono.
- Móviles con Android cercano a la versión original: `*#*#4636#*#*` abre un menú de pruebas en muchos dispositivos, centrado sobre todo en información del teléfono, la red, el uso y la batería. No es una prueba completa de hardware y muchas compilaciones de Samsung o de operadores lo bloquean.

Si un código no hace nada, no insistas. Usa las pruebas manuales que aparecen más abajo o una aplicación de diagnóstico.

## Decide primero si es software o hardware

Este paso puede ahorrarte dinero. Un error de software puede parecer exactamente una pieza averiada.

El modo seguro es el primer filtro. Mantén pulsado el botón de encendido hasta que aparezca el menú de apagado y, después, mantén pulsada la opción de apagar hasta ver la indicación del modo seguro. En algunos móviles la combinación es distinta, pero el objetivo es el mismo: iniciar Android con las aplicaciones de terceros desactivadas.

Si el problema desaparece en modo seguro, probablemente interviene una aplicación instalada. Elimina las aplicaciones recientes una a una y reinicia con normalidad después de cada desinstalación. Si el fallo continúa en modo seguro, la causa está en Android, en el firmware del fabricante o en el hardware.

El restablecimiento de fábrica es la última prueba de software. Haz antes una copia de seguridad. Si el problema sobrevive a un restablecimiento limpio, sin restaurar aplicaciones, el hardware pasa a ser mucho más probable.

Busca patrones. Una zona táctil muerta siempre en el mismo lugar apunta a la pantalla o al digitalizador. Un móvil que se apaga al 20 %, pero funciona conectado, apunta a la batería. Una cámara que empezó a vibrar después de una caída puede tener dañado el enfoque o el módulo OIS. Si el móvil se volvió inestable justo después de una actualización importante, incluido Android 17 en Pixel, instala los parches disponibles y repite las pruebas antes de concluir que ha fallado la placa.

## Por qué falla el hardware

Las baterías se desgastan. Es química de ion de litio. Google utiliza una capacidad restante inferior al 80 % como referencia para recomendar la sustitución de la batería en Pixel, con una vida útil nominal en ciclos que depende del modelo. Desde Pixel 3 hasta Pixel 8 Pro, además de Pixel Fold, figuran con 800 ciclos, mientras que Pixel 8a y modelos posteriores figuran con 1000 ciclos.

Los puertos y botones fallan por el uso. Los USB-C acumulan pelusa, sobre todo si el móvil pasa el día en un bolsillo. Los botones pierden su respuesta después de miles de pulsaciones. Las rejillas de los altavoces se obstruyen tan despacio que quizá no lo notes hasta que las llamadas empiezan a sonar apagadas.

Las caídas causan problemas más extraños. Un móvil puede sobrevivir sin romper el cristal y aun así tener un conector suelto, un módulo de cámara dañado, el marco doblado o una soldadura debilitada. El agua es peor porque la corrosión puede aparecer días o semanas después.

El calor acelera casi todo. Cargar el móvil al sol, jugar mientras se carga o dejarlo dentro de un coche caliente puede envejecer la batería con mayor rapidez y activar la limitación térmica. Conviene tomarse en serio una temperatura de batería que se mantenga por encima de unos 40 °C.

También existe variación de fabricación. Dos móviles con el mismo nombre de modelo no se comportan de manera idéntica. Pequeñas diferencias en los chips, el contacto térmico, el panel, la calibración de los sensores, el firmware del módem y las variantes regionales pueden cambiar la autonomía, la temperatura, la señal y los resultados de rendimiento. Eso no convierte automáticamente una unidad en defectuosa. Significa que las cifras publicadas en Internet son intervalos, no promesas.

## Prueba la batería

Empieza por la información que tu móvil muestre realmente en Ajustes.

En Pixel 8a y modelos posteriores, ve a Ajustes > Batería > Estado de la batería. La pantalla indica si el estado es normal o reducido, y la capacidad de la batería muestra una estimación de la capacidad restante respecto a la original. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 y Pixel 8 Pro no muestran el mismo estado de la batería.

En Samsung, utiliza los diagnósticos de Samsung Members. Entra en Samsung Members > Asistencia > Diagnóstico del teléfono y ejecuta la prueba de batería. El texto exacto puede cambiar según la región y la versión de la aplicación, pero Samsung Members es una vía más segura que los códigos de batería encontrados al azar.

En OnePlus, OPPO, realme, Xiaomi y otras marcas, busca en Ajustes > Batería o en la aplicación de mantenimiento del fabricante. Algunas muestran el estado de la batería y otras no. En la práctica, Android sigue ofreciendo información muy desigual entre fabricantes.

La batería resulta sospechosa si el móvil se descarga rápido con un uso ligero, se apaga entre el 15 y el 20 %, se calienta durante la carga o presenta una hinchazón en la tapa trasera o la pantalla. Deja de usar un móvil con la batería hinchada y llévalo al servicio técnico. No es un problema de software.

## Prueba la pantalla y la capa táctil

Para buscar píxeles muertos, muestra imágenes blancas, negras, rojas, verdes y azules a pantalla completa. Recorre el panel despacio. Los píxeles muertos permanecen negros. Los píxeles atascados se quedan encendidos en un color. El quemado de una pantalla OLED se aprecia mejor sobre un fondo gris uniforme con brillo medio.

Para probar el tacto, abre una aplicación de dibujo y traza líneas horizontales y verticales muy juntas por toda la pantalla. Los cortes revelan zonas muertas. También puedes activar las Opciones para desarrolladores y habilitar Mostrar pulsaciones o Ubicación del puntero, y después arrastrar el dedo por todo el panel.

El menú `*#0*#` de Samsung incluye pruebas de pantalla y tacto en muchos Galaxy. Pixel Diagnostics, Motorola Device Help y Xiaomi CIT también pueden comprobar estos componentes cuando están disponibles.

## Prueba los altavoces y micrófonos

Reproduce un tono de llamada y, después, música o un vídeo que conozcas bien. Escucha si hay vibraciones, distorsión o un canal estéreo mucho más bajo que el otro. Tapa un altavoz cada vez con un dedo para aislar el auricular del altavoz inferior en los móviles estéreo.

Para probar el micrófono, graba una nota de voz corta con el móvil a la distancia de un brazo y reprodúcela. Después haz una llamada real. El audio de las llamadas utiliza cancelación de ruido y procesamiento de red, por lo que una grabación puede sonar bien aunque las llamadas sigan sonando mal.

Antes de culpar al hardware, quita la funda, desconecta los dispositivos Bluetooth, limpia las aberturas del altavoz y el micrófono con un cepillo suave y seco y revisa el permiso de micrófono de la aplicación que estés probando.

## Prueba las cámaras

Abre la aplicación Cámara y prueba todas las cámaras disponibles: principal, ultra gran angular, teleobjetivo, macro si existe y cámara frontal. Busca enfoque que va y viene, zonas borrosas fijas, dominantes de color, vibraciones en vídeo o chasquidos al cambiar el enfoque.

La estabilización óptica de imagen puede fallar después de una caída. El síntoma suele ser evidente: el vídeo tiembla aunque mantengas las manos quietas o la cámara emite un zumbido. El software puede afectar al procesamiento de imagen, pero no puede arreglar un módulo de estabilización físicamente suelto.

## Prueba la carga y los puertos

Utiliza un cable y un cargador que sepas que funcionan antes de culpar al móvil. Parece básico, pero una cantidad sorprendente de supuestos «puertos USB-C averiados» son en realidad cables defectuosos.

Inspecciona el puerto con una luz. La pelusa del bolsillo puede compactarse en el fondo e impedir que el conector entre por completo. Usa con cuidado un palillo de madera o plástico, o aire a baja presión. No rasques los contactos con metal.

Si el móvil solo carga en cierto ángulo, se desconecta al moverlo o no permite transferir datos con varios cables, el puerto o la placa inferior pueden necesitar reparación.

## Prueba los sensores

Los fallos de sensores producen errores muy concretos: deja de funcionar el giro automático, la pantalla permanece encendida durante las llamadas, la brújula apunta mal o el brillo automático reacciona de forma exagerada.

Para probar el acelerómetro y el giroscopio, desactiva el bloqueo de rotación y gira el móvil lentamente. La pantalla debería seguir el movimiento sin problemas. Una foto panorámica también es una comprobación razonable del giroscopio, porque el cosido de la imagen depende del seguimiento del movimiento.

Para el sensor de proximidad, inicia una llamada y cubre la parte superior de la pantalla cerca del auricular. La pantalla debería apagarse y volver a encenderse al retirar la mano. Quita la funda y el protector de pantalla antes de dar el sensor por averiado.

Para el sensor de luz, activa el brillo automático y muévete entre zonas claras y oscuras. La pantalla debería ajustarse en unos segundos.

Para el magnetómetro, abre Maps o una aplicación de brújula en el exterior y aléjate de coches, portátiles, imanes y mesas metálicas. Si la dirección es incorrecta, recalibra moviendo el móvil en forma de ocho.

El menú `*#0*#` y Samsung Members pueden probar sensores en móviles Samsung. Pixel Diagnostics, Motorola Device Help y Xiaomi CIT también pueden incluir estas pruebas, según el modelo.

## Prueba el hardware de red

Los problemas de antena y radio son más difíciles de demostrar porque la red del operador cambia constantemente. Compara el móvil con otro conectado a la misma red, en el mismo lugar y al mismo tiempo.

La intensidad de la señal suele aparecer en dBm en las pantallas de estado o información de la SIM. La escala es negativa, por lo que un valor más cercano a cero es mejor. Alrededor de -50 dBm es excelente. Unos -90 dBm suele ser utilizable. Cerca de -110 dBm o menos es una señal deficiente. Estas cifras no significan exactamente lo mismo en LTE, 5G y Wi-Fi, así que úsalas para comparar, no como una prueba universal de aprobado o suspenso.

Si tu móvil pierde Wi-Fi mientras todos los demás dispositivos siguen conectados, pruébalo cerca del router, en otra red Wi-Fi y con Bluetooth desactivado. Si el mismo móvil falla en todas partes, el hardware de radio o el firmware son sospechosos más probables.

runcheck resulta útil aquí porque reúne datos de batería, temperatura, red, almacenamiento y pruebas de velocidad en una sola comprobación. Esto importa después de una caída, un episodio de calor o contacto con agua, cuando varios síntomas pueden solaparse.

## Cuándo merece la pena reparar

Una reparación tiene sentido cuando el problema se repite, continúa en modo seguro, sobrevive a un restablecimiento limpio y aparece en el diagnóstico del fabricante o en una prueba manual.

No cambies piezas porque una aplicación se comportó mal una vez. Sí conviene reparar o sustituir el móvil si la batería está hinchada, el puerto de carga se mueve físicamente, el tacto falla siempre en la misma zona, las cámaras zumban después de una caída o los micrófonos fallan tanto en grabaciones como en llamadas.

## Preguntas frecuentes

### ¿Son seguros los códigos de diagnóstico?

Los menús de prueba habituales que aparecen aquí son principalmente informativos o incluyen comprobaciones interactivas de hardware. Aun así, no introduzcas códigos aleatorios de Internet. Algunos códigos del fabricante pueden cambiar ajustes de radio o iniciar acciones de servicio.

### ¿Por qué no funciona `*#*#4636#*#*`?

No está estandarizado en Android. Funciona en muchas compilaciones cercanas a Android original, pero Samsung, los operadores o el firmware del fabricante pueden desactivarlo.

### ¿Con qué frecuencia debería probar el hardware?

Para el mantenimiento normal, basta con hacerlo cada pocos meses. Haz una prueba de inmediato después de una caída fuerte, contacto con agua, una descarga repentina de la batería, problemas de carga o antes de comprar o vender un móvil de segunda mano.

### ¿Un móvil lento siempre tiene un problema de hardware?

No. Empieza por el modo seguro, el espacio de almacenamiento, las actualizaciones de aplicaciones y las actualizaciones recientes del sistema. Si la lentitud continúa después de un restablecimiento de fábrica, entonces merece la pena investigar el desgaste del almacenamiento, una batería debilitada, la limitación térmica u otro problema de hardware.
