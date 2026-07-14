---
title: "¿Qué es la limitación térmica y cómo afecta a tu móvil?"
description: "La limitación térmica integrada en Android protege el móvil del calor. Conoce los niveles térmicos de Android, thermal headroom, los desencadenantes habituales y cómo reducir la limitación de forma segura."
listSummary: "La limitación térmica integrada en Android protege el móvil del calor."
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperatura","termico","android","solucion-de-problemas","hardware"]
locale: "es"
draft: false
---
¿Por qué un móvil rápido empieza a ir lento de repente a mitad de una partida, una videollamada o una sesión con la cámara? La mayoría de las veces se debe a la limitación térmica. El dispositivo está caliente, así que Android y el fabricante reducen el rendimiento antes de que el calor se convierta en un problema de seguridad.

## Qué significa la limitación térmica

Es una ralentización controlada. El móvil reduce la velocidad de la CPU, la GPU, el brillo de la pantalla, la potencia de carga, la actividad de las conexiones de radio u otras funciones que consumen mucha energía para bajar la temperatura.

No es un fallo por sí mismo. El móvil elige un nivel de rendimiento inferior para mantener la batería, la pantalla, el módem y el SoC dentro de los límites de seguridad establecidos por el fabricante.

El coste se nota en forma de fotogramas perdidos, aplicaciones que tardan más en abrirse, una pantalla que se atenúa, restricciones en la cámara, una carga más lenta o un juego que empieza fluido y luego da tirones. Android no pide permiso. Simplemente lo hace.

## Los niveles térmicos de Android

Android ofrece API públicas de estado térmico desde Android 10. En los dispositivos compatibles, las aplicaciones pueden leer niveles de gravedad simplificados mediante `PowerManager`:

- **None:** No hay limitación térmica.
- **Light:** Limitación leve, con poco efecto sobre el uso normal.
- **Moderate:** Hay cierta limitación, pero el dispositivo suele seguir siendo utilizable.
- **Severe:** Limitación intensa que afecta claramente al rendimiento.
- **Critical:** La plataforma ya ha reducido mucho la potencia.
- **Emergency:** Algunos componentes importantes pueden empezar a apagarse por las condiciones térmicas.
- **Shutdown:** El dispositivo debe apagarse de inmediato.

Estas etiquetas están normalizadas. Las temperaturas que activan cada una no lo están. Un Pixel, un Galaxy S Ultra, un móvil gaming de Xiaomi y un Motorola económico pueden asignar el calor a esos niveles de forma distinta porque utilizan sistemas de refrigeración, baterías, chasis, pantallas y márgenes de seguridad diferentes.

Por eso resulta complicado dar consejos basados en una temperatura exacta. Un móvil puede limitar el rendimiento con una lectura de batería que otro tolera mientras se está cargando.

## Thermal headroom es una alerta temprana mejor

El estado térmico indica la fase actual. Thermal headroom muestra lo cerca que está la carga de trabajo actual de provocar una limitación intensa.

La guía de rendimiento para juegos de Android describe thermal headroom como un valor de 0,0 a 1,0, donde 1,0 significa que el dispositivo está en `THERMAL_STATUS_SEVERE` o cerca de alcanzarlo con esa carga de trabajo. Los juegos pueden usar esa señal para reducir la frecuencia de fotogramas o la calidad visual antes de que el jugador note la ralentización.

Hay una salvedad: la compatibilidad varía entre dispositivos. Algunos móviles devuelven pocos datos, otros responden con `NaN` si se consulta con demasiada frecuencia y algunos interpretan headroom de manera distinta debido a su diseño térmico. Un buen diagnóstico debe tratar thermal headroom como una señal, no como un termómetro universal.

runcheck utiliza las señales térmicas públicas de Android cuando el dispositivo las expone. Es importante porque una aplicación normal no debería depender de archivos privados de temperatura de sysfs para mostrar el estado térmico al usuario.

## Qué provoca la limitación

Las sesiones de juego largas son el caso más evidente. Un juego 3D puede exigir al mismo tiempo a la CPU, la GPU, la pantalla, los altavoces, la red y la respuesta háptica.

La cámara es otro desencadenante. Grabar en 4K u 8K, procesar HDR, crear vídeos largos y usar el móvil bajo el sol directo puede calentarlo con rapidez. Las aplicaciones de cámara pueden reducir la calidad o detener la grabación cuando el dispositivo se calienta demasiado.

La navegación es más lenta, pero engañosa. La pantalla permanece encendida, el GPS está activo, el módem descarga mapas y el móvil puede estar colocado en un soporte caliente dentro del coche. Si además recibe sol directo a través del parabrisas, la limitación aparece antes.

Usar el móvil mientras se carga es un error fácil de cometer. La carga rápida ya genera calor por sí sola. Si además ejecutas un juego, una videollamada, un punto de acceso o una grabación, queda menos margen para enfriar el dispositivo.

Una señal débil también puede exigir más al módem. Un móvil que intenta mantener el 5G en una zona con poca cobertura puede calentarse incluso con la pantalla apagada.

Las actualizaciones importantes del sistema también pueden generar calor temporal. Android 17 llegó primero a los dispositivos Pixel compatibles, mientras que otros móviles Android aptos recibirán después las versiones preparadas por sus fabricantes. Tras cualquier actualización importante, la optimización de aplicaciones y la sincronización en segundo plano pueden mantener el móvil caliente durante uno o dos días.

## Limitación térmica frente a gestión del rendimiento de la batería

Este tipo de limitación es temporal. Detén la tarea, deja que el móvil se enfríe y el rendimiento volverá.

La gestión del rendimiento relacionada con la batería es distinta. A medida que las baterías envejecen, aumenta su resistencia interna y empeora su capacidad para suministrar picos de potencia. Algunos móviles reducen la tensión de carga, la velocidad de carga u otros parámetros para mantener estable una batería envejecida. Google, por ejemplo, documenta la función Asistencia para la conservación de la batería en Pixel 6a y modelos posteriores compatibles, con ajustes graduales de la tensión de la batería a partir de 200 ciclos de carga.

No es lo mismo que un juego empiece a ir lento después de 20 minutos. Un caso se debe al calor bajo carga. El otro es la gestión del envejecimiento de la batería.

La solución también cambia. El calor exige enfriamiento y menos carga de trabajo. Una batería degradada necesita sustituirse o adoptar hábitos de carga más conservadores.

## Cómo saber si está ocurriendo

La señal más evidente es que el rendimiento empeora durante una sesión. Un juego empieza a 60 fps y luego cae. La cámara graba bien al principio y después muestra un aviso de temperatura. La pantalla se atenúa sin que hayas tocado el brillo. La carga se pausa o se vuelve mucho más lenta.

También puedes fijarte en la zona donde se concentra el calor. Cerca de la cámara suele apuntar al SoC. En el centro de la parte trasera suele estar más relacionado con la batería o la bobina de carga inalámbrica. En el puerto USB-C puede indicar tensión en el cable, el cargador o el circuito de carga.

Las aplicaciones capaces de leer el estado térmico de Android hacen que el diagnóstico sea menos impreciso. Que el estado pase de None a Light y luego a Moderate durante un juego es esperable. Alcanzar Severe, Critical o niveles próximos al apagado repetidamente durante un uso normal no lo es.

## Cómo reducir la limitación

Reduce la carga antes de que el móvil tenga que hacerlo por ti.

En los juegos, baja primero la frecuencia de fotogramas. Suele ser el cambio con mayor efecto. Después reduce la resolución, las sombras, los efectos y la calidad de las texturas. Una configuración media con una frecuencia estable suele sentirse mejor que una configuración ultra que empieza a limitarse al cabo de diez minutos.

Quita la funda durante un uso exigente. La parte trasera y el chasis forman parte del sistema de refrigeración.

Utiliza Wi-Fi en lugar de datos móviles cuando la señal sea débil. Una cobertura móvil deficiente puede convertir una sesión normal en una sesión muy caliente.

Evita el sol directo. Un móvil puede limitar su rendimiento en un soporte de coche al sol aunque la carga de trabajo no sea extrema.

No uses la carga rápida durante tareas exigentes. Desenchúfalo o utiliza un cargador más lento si necesitas seguir jugando.

Mantén actualizados el sistema y las aplicaciones. Los fabricantes ajustan el comportamiento térmico con el tiempo, y una mala actualización de una aplicación también puede generar calor hasta que se corrija.

## Cuándo la limitación apunta a un problema mayor

Que un móvil limite el rendimiento durante un juego exigente es normal. Que lo haga mientras escribes un mensaje sobre una mesa fría no lo es.

Si se calienta mientras está inactivo, revisa el uso de la batería, la intensidad de la señal, las aplicaciones instaladas recientemente y el modo seguro. Si sigue calentándose en modo seguro, o si la batería está hinchada, se descarga de repente o el móvil se apaga aunque todavía quede carga, trátalo como un problema de hardware o de batería.

Un estado de la batería inferior al 80 % es un umbral habitual para plantearse la sustitución en los móviles que muestran ese dato. En los Pixel compatibles, Google etiqueta como Reducida una capacidad inferior al 80 %, y Samsung Members clasifica el estado de la batería como Normal, Débil o Mala. Estas indicaciones son más útiles que intentar deducir el problema solo por el calor.

## En resumen

El sistema de seguridad térmica del móvil no es el enemigo. Puedes reducir su intervención bajando la carga de trabajo, mejorando la refrigeración, evitando ambientes calurosos y no combinando la carga rápida con tareas exigentes. Pero si la limitación aparece durante un uso ligero, no la ignores. En ese caso, el origen puede estar en una aplicación, una señal débil, el cargador o una batería desgastada.
