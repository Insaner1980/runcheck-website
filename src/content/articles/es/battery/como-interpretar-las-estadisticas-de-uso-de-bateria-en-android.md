---
title: "Cómo interpretar las estadísticas de uso de batería en Android"
description: "Las estadísticas de uso de batería de Android muestran qué aplicaciones y servicios del sistema consumen energía. Aprende dónde encontrarlas, qué significan los porcentajes y cómo detectar problemas reales."
listSummary: "bateria, consumo y solucion-de-problemas"
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Health"
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
Abres Uso de batería y ves una aplicación con un 42 %. Parece grave. A veces lo es. Otras veces no significa casi nada.

Las estadísticas de Android sirven para acotar un problema, pero no son un recibo exacto de dónde ha ido cada miliamperio-hora. La clave está en interpretar los porcentajes dentro de su contexto.

## Dónde encontrar las estadísticas

En Pixel y Android casi puro, abre **Uso de batería** dentro del apartado Batería de Ajustes. Puedes ver el consumo por aplicaciones y, en versiones recientes de Pixel, alternar entre categorías de aplicaciones y del sistema. Al tocar una aplicación se abren sus controles de batería, incluidas las opciones de uso en segundo plano.

En móviles Samsung Galaxy, abre **Ajustes > Batería**. En algunas versiones antiguas de One UI, las opciones de batería aparecen dentro del apartado de mantenimiento del dispositivo. Samsung suele mostrar primero un gráfico y después una opción para consultar los detalles de aplicaciones y funciones. Algunas versiones incluyen además un historial más largo, que normalmente resulta más útil que una sola ventana corta de carga.

En Xiaomi, Redmi y POCO, busca dentro de Batería un apartado de uso, consumo o detalles de energía. Los nombres cambian entre HyperOS, MIUI y distintos modelos, así que es normal que la etiqueta no coincida exactamente.

En OnePlus, OPPO y realme, empieza en Batería y busca las opciones de uso de batería o gestión de batería de las aplicaciones. Estas capas suelen separar el uso en primer plano del uso en segundo plano cuando tocas una aplicación.

El código del marcador `*#*#4636#*#*` abre un menú de pruebas en algunos móviles Android. Puede mostrar voltaje, temperatura, estado de la batería y situación de carga. No es una pantalla de consumo por aplicación y muchos fabricantes lo desactivan.

## Qué significan realmente los porcentajes

La cifra junto a una aplicación suele indicar su parte del consumo registrado, no una parte de la capacidad total del móvil.

Imagina que el teléfono baja del 100 % al 70 %. Has gastado 30 puntos porcentuales. Si YouTube aparece con un 50 % en Uso de batería, no significa que haya consumido la mitad de toda la batería. Significa que Android le atribuye aproximadamente la mitad de la energía gastada durante esa ventana. En este ejemplo serían unos 15 puntos porcentuales de batería real.

Ahora dale la vuelta. El móvil baja del 100 % al 96 % y una aplicación aparece con un 60 %. Esa aplicación domina un consumo muy pequeño. Puede ser completamente inofensiva.

Es el error que veo con más frecuencia. Se persigue el porcentaje más alto sin comprobar cuánta batería se ha perdido en realidad.

## Cómo estima Android el consumo

Android no coloca un diminuto medidor de potencia en cada aplicación. Hace estimaciones.

El sistema registra cuánto tiempo pasan distintos componentes en cada estado: CPU, pantalla, GPS, Wi‑Fi, radio móvil, Bluetooth y otros. El fabricante proporciona un perfil energético que indica cuánta corriente debería consumir cada componente en esos estados. Android combina los tiempos con ese perfil y atribuye el gasto a aplicaciones y elementos del sistema.

Es suficiente para solucionar problemas. No es una medición de laboratorio.

Los perfiles energéticos cambian según el fabricante. Un Pixel y un Xiaomi pueden ejecutar la misma aplicación durante el mismo tiempo y aun así mostrar porcentajes diferentes. La aplicación no se ha comportado de forma mágica. Ha cambiado el modelo contable.

## Cómo leer el gráfico de batería

Al principio, el gráfico importa más que la lista de aplicaciones.

Una caída pronunciada mientras la pantalla está encendida suele ser normal. Un brillo alto, el vídeo, los mapas, los juegos, la cámara y los datos móviles pueden gastar batería deprisa. Una caída pronunciada con la pantalla apagada resulta más interesante. Puede señalar actividad en segundo plano, mala cobertura, un bucle de sincronización, un proceso bloqueado o un móvil que nunca ha entrado en reposo profundo.

Lo deseable con la pantalla apagada es una línea casi plana. Significa que el móvil está descansando.

Los periodos de carga aparecen como pendientes ascendentes o saltos verticales. Un hueco suele indicar que el móvil estuvo apagado, que se reiniciaron las estadísticas o que el sistema no recogió datos durante ese periodo. No extraigas demasiadas conclusiones de un gráfico desordenado en un día con cinco cargas cortas. Las recargas parciales hacen que los porcentajes por aplicación varíen mucho.

## Pantalla, tiempo activo y señal

Algunas versiones de Android muestran barras debajo del gráfico. Es fácil ignorarlas, pero explican muchas cosas.

El tiempo de pantalla encendida indica cuándo estuvo activo el panel. Si la mayor parte del consumo coincide con esos periodos, probablemente el móvil funciona con normalidad. La pantalla es uno de los componentes que más energía utiliza en un teléfono moderno.

El tiempo activo indica cuándo estuvo funcionando la CPU. Lo ideal es que coincida en gran parte con el tiempo de pantalla encendida. Los periodos largos de actividad con la pantalla apagada apuntan a wake locks o tareas en segundo plano. La sincronización del correo, las aplicaciones de ejercicio, las copias en la nube, la navegación, la mensajería y los reproductores pueden provocar ese comportamiento. A veces es normal. Que una aplicación de compras lo haga durante tres horas no lo es.

La calidad de la señal también pesa mucho. Una cobertura móvil débil puede consumir bastante batería porque el módem trabaja continuamente para mantener la conexión. Si la espera de la red móvil aparece entre los primeros puestos mientras estás en un sótano, en un tren, en una zona rural o dentro de un edificio de hormigón, quizá el teléfono no tenga ningún fallo. Puede estar luchando contra la red.

## Patrones a los que sí merece la pena prestar atención

Que una aplicación consuma mucha batería no significa automáticamente que exista un problema. Que consuma mucho cuando apenas la has usado, sí resulta sospechoso.

Una aplicación de vídeo en primer lugar después de dos horas de reproducción es normal. Una aplicación de noticias arriba de todo después de cinco minutos de lectura merece una revisión. Tócala y compara el tiempo en primer plano con el tiempo en segundo plano.

Un consumo alto de Sistema Android o de las aplicaciones del sistema es más difícil de interpretar. Puede indicar un problema real, especialmente después de una actualización con errores. También puede significar que Android no ha conseguido atribuir correctamente el gasto a una aplicación concreta y lo ha dejado en el grupo del sistema.

Algo parecido ocurre con Servicios de Google Play. Gestiona las notificaciones push, la sincronización de cuentas, la ubicación y otros servicios compartidos por muchas aplicaciones. Si aparece muy arriba, busca aplicaciones que soliciten la ubicación con demasiada frecuencia. Servicios de Google Play puede ser el mensajero, no el culpable.

Que Pantalla represente entre el 40 % y el 50 % de la batería consumida, o incluso más, es normal para muchas personas. Si has usado poco la pantalla pero la pérdida total es alta, otro componente está trabajando.

## Qué hacer cuando encuentras una aplicación sospechosa

Empieza por lo menos agresivo. Actualiza la aplicación. Reinicia el móvil. Comprueba si el problema se repite al día siguiente.

Si continúa, restringe el uso en segundo plano. En Pixel, toca la aplicación desde **Uso de batería** y ajusta **Permitir en segundo plano**, o abre sus opciones desde **Ajustes > Aplicaciones > [nombre de la aplicación] > Batería**. En Samsung, toca la aplicación desde el apartado de consumo y utiliza los límites de uso en segundo plano o las opciones de aplicaciones en suspensión y suspensión profunda.

Forzar detención es una prueba temporal, no una solución. Puede parar durante un rato una aplicación descontrolada, pero las notificaciones push, las tareas programadas o un reinicio pueden iniciarla de nuevo. Restringir su batería en segundo plano es una medida más limpia.

El modo seguro resulta útil cuando todo el móvil se descarga deprisa y no puedes identificar una sola aplicación. Este modo desactiva las aplicaciones de terceros. Si el consumo desaparece, lo más probable es que la causa sea el software. Si se mantiene, revisa la cobertura, una actualización del sistema, la temperatura del dispositivo o la propia batería.

## Lo que las estadísticas no pueden decirte

Las estadísticas de consumo no demuestran el estado de la batería. Una celda desgastada y una aplicación problemática pueden producir síntomas parecidos en el uso diario.

También se reinician o cambian de marco temporal según el dispositivo. Pixel se centra en el uso desde la última carga completa. Samsung ha modificado el diseño entre versiones de One UI, y algunas muestran el consumo desde la última carga en lugar de una ventana estricta de ciclo completo. Cargar muchas veces en periodos cortos reduce la ventana y hace que los porcentajes parezcan más extremos.

Para ver tendencias necesitas historial. AccuBattery puede estimar la capacidad y registrar sesiones durante un periodo largo. runcheck conserva el nivel de batería, la temperatura, la velocidad de descarga y otros datos de las sesiones para que puedas comparar días en vez de mirar un único gráfico lleno de ruido.

El mejor uso de Uso de batería es sencillo: encuentra la primera pista sólida y confírmala con el comportamiento real. Si el gráfico, la lista de aplicaciones, el tiempo en segundo plano y lo que recuerdas de ese día señalan lo mismo, probablemente has encontrado la causa del consumo.
