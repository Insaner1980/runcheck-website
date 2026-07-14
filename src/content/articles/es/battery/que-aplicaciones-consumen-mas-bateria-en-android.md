---
title: "Qué aplicaciones consumen más batería en Android"
description: "La mayoría de las listas de «aplicaciones que más batería gastan» hablan con demasiada seguridad. A tu móvil no le importa qué aplicación encabezó una clasificación en el banco de pruebas de otra persona. Le importa qué has instalado, qué permisos has concedido, cuánto la usas y si sigue trabajando después de apagar la pantalla."
listSummary: "La mayoría de las listas de «aplicaciones que más batería gastan» hablan con demasiada seguridad."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
Aun así, las mismas categorías causan problemas una y otra vez.

## Los tipos de aplicaciones que suelen aparecer arriba

Las aplicaciones de vídeo son un caso evidente. YouTube, Netflix, TikTok, Instagram Reels y servicios parecidos mantienen la pantalla encendida, descodifican vídeo, descargan datos de forma continua y a menudo funcionan con un brillo alto porque mucha gente los usa en habitaciones luminosas o en la calle. Si una aplicación de vídeo aparece arriba en la lista de batería después de dos horas de uso, no es un fallo. Es física.

Las aplicaciones de navegación son el siguiente caso fácil de explicar. Google Maps, Waze, las aplicaciones de reparto, las de transporte con conductor y los monitores de actividad física combinan GPS, datos móviles, tiempo de pantalla y, en ocasiones, Bluetooth. Una hora de navegación paso a paso puede llevarse una parte visible de la batería, sobre todo con 5G o una señal deficiente.

Los juegos no disimulan. Un juego 3D exige a la vez a la GPU, la CPU, la pantalla, el audio, la entrada táctil y la red. La buena noticia es que suelen gastar mientras juegas, no silenciosamente a las 3 de la madrugada. Si un juego muestra actividad en segundo plano, limítalo.

Las redes sociales y la mensajería son más complicadas. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit y las aplicaciones de noticias quieren contenido nuevo y notificaciones. Algunas se comportan bien. Otras no. Lo irritante es que dos personas pueden instalar la misma aplicación y obtener resultados distintos porque una tiene activados la ubicación, las notificaciones, la reproducción automática, la sincronización de contactos y la actualización en segundo plano, mientras la otra no.

## El uso en segundo plano importa más que el nombre

Que la pantalla de batería indique que una aplicación ha consumido un 8 % después de ver vídeos durante una hora no dice nada sorprendente. Que haya consumido un 8 % en segundo plano mientras el móvil estaba en tu bolsillo sí aporta una pista útil.

Busca primero esa diferencia. En Pixel, ve a **Ajustes > Batería > Uso de batería**, selecciona la vista por aplicaciones y toca la aplicación. En Samsung, abre **Ajustes > Mantenimiento del dispositivo > Batería** y consulta el uso detallado. Los nombres cambian según el modelo, pero lo que necesitas ver es el tiempo en primer plano, el tiempo en segundo plano y si la aplicación puede seguir ejecutándose.

Una regla aproximada: si una aplicación no esencial gasta más de un par de puntos porcentuales en segundo plano durante un día, debería tener una buena razón. La mensajería, la música, la navegación, la salud y la seguridad pueden justificarlo. Una aplicación de compras, no tanto.

Los mecanismos más habituales de consumo en segundo plano son sencillos: notificaciones push, sincronización de contenido, consultas de ubicación, wake locks, tráfico de red y SDK de analítica. Conviene mencionar los wake locks porque Google ya los trata como una cuestión de calidad en Play. Un wake lock parcial mantiene activa la CPU aunque la pantalla esté apagada. Usado con cuidado, es normal. Si se mantiene demasiado tiempo, desperdicia batería.

## Google Play ya tiene una señal de calidad relacionada con la batería

Este es el gran cambio respecto a versiones anteriores de este artículo. Google convirtió el uso **excesivo de wake locks parciales** en una métrica principal de Android vitals. Desde el 1 de marzo de 2026, las aplicaciones que superan el umbral pueden perder visibilidad en las superficies de descubrimiento de Google Play y mostrar un aviso en su ficha de la tienda.

El umbral es concreto. En aplicaciones para móviles, Android vitals considera excesivo el uso de wake locks parciales no exentos cuando se mantienen durante al menos dos horas en un periodo de 24 horas y ese patrón afecta a más del 5 % de las sesiones de la aplicación, calculado como promedio durante 28 días.

Eso no significa que Google Play te informe de todo el coste energético antes de instalar una aplicación. No marca un juego por gastar deprisa mientras estás jugando. Tampoco juzga que pases cinco horas en TikTok. La métrica se centra en mantener la CPU despierta en segundo plano cuando la pantalla está apagada.

Aun así, resulta útil. Por primera vez, una persona puede ver un aviso de batería antes de instalar una aplicación que se comporta mal. Es mejor que descubrir el problema después de tres noches de consumo.

## Qué cambiar antes de desinstalar aplicaciones

Desinstalar es una solución limpia, pero la mayoría de la gente no va a borrar su principal red social, servicio de vídeo o aplicación de mensajería. Empieza por los ajustes que reducen el trabajo silencioso.

Desactiva la reproducción automática cuando la aplicación lo permita. Instagram, Facebook, X, Reddit, YouTube y TikTok pueden consumir batería y datos preparando vídeos que quizá nunca veas.

Limita la ubicación. Abre **Ajustes > Ubicación > Permisos de ubicación de aplicaciones** y revisa cuáles pueden acceder siempre. Una aplicación del tiempo suele poder funcionar con la ubicación solo durante el uso. Una aplicación de navegación la necesita durante los trayectos. Una red social rara vez necesita acceso permanente.

Restringe el uso de batería en segundo plano. En Android con una interfaz parecida a la de Pixel, abre **Ajustes > Aplicaciones > [aplicación] > Uso de batería de la aplicación** y reduce el acceso en segundo plano de las aplicaciones que no necesitan actualizarse al instante. En Samsung, ve a **Ajustes > Mantenimiento del dispositivo > Batería > Límites de uso en segundo plano** y añade las aplicaciones poco utilizadas a **Apps inactivas** o **Aplicaciones siempre inactivas**.

Reduce las notificaciones. Cada aviso puede despertar el móvil, encender la pantalla, activar la vibración y descargar contenido nuevo. Sé estricto con las aplicaciones que envían publicidad, recomendaciones o mensajes del tipo «esto podría gustarte».

Actualiza las aplicaciones. Es un consejo aburrido, pero importa después de actualizaciones de Android, incluida la primera distribución de Android 17 en los Pixel compatibles. Los desarrolladores corrigen fallos de consumo, wake locks, bucles de sincronización y problemas de compatibilidad. Tanto Samsung como Google recomiendan actualizar las aplicaciones y el sistema al investigar un consumo excesivo.

## Usar el navegador en lugar de la aplicación no siempre gana

Un consejo habitual dice que uses la versión web en vez de la aplicación. A veces tiene sentido porque un sitio web no puede mantener el mismo tipo de servicio persistente en segundo plano que una aplicación Android instalada. Si Facebook o X solo te consumen batería porque la aplicación nativa despierta el móvil continuamente, la web móvil puede ayudar.

Pero no lo conviertas en una norma. Investigaciones controladas que han comparado aplicaciones nativas de Android con sus equivalentes web han encontrado casos en los que la aplicación nativa consume menos energía durante el uso activo. Una pestaña del navegador no hace magia. Sigue procesando vídeo, JavaScript, anuncios, rastreadores e imágenes.

Mi conclusión práctica es esta: usa el navegador para servicios que consultas de vez en cuando y de los que no necesitas notificaciones. Utiliza la aplicación nativa para los servicios que empleas mucho, sobre todo si la versión web es lenta o va a tirones. Después limita el acceso en segundo plano de la aplicación nativa si empieza a aparecer en el consumo nocturno.

## Cuándo ayuda una aplicación de diagnóstico

La pantalla de batería integrada en Android debe ser tu primera parada. Ya está en el móvil y forma parte del sistema operativo.

Una herramienta como runcheck resulta útil cuando la cifra de batería por sí sola no explica el patrón. Si los picos de consumo coinciden con calor, señal débil, una red lenta o presión sobre el almacenamiento, la solución será distinta de limitarse a culpar a Instagram. El contexto importa.

AccuBattery y herramientas parecidas también pueden estimar la capacidad de la batería a lo largo del tiempo, pero considera sus cifras aproximaciones salvo que el propio móvil muestre el estado de la batería.

## Una forma mejor de encontrar tus peores aplicaciones

Haz esto durante dos días normales:

1. Carga y utiliza el móvil con normalidad.
2. Por la noche, consulta **Ajustes > Batería > Uso de batería**.
3. Anota las cinco aplicaciones principales y si han consumido en primer plano o en segundo plano.
4. Restringe solo las aplicaciones cuyo uso en segundo plano no tenga sentido.
5. Vuelve a comprobarlo al día siguiente.

No elimines todas las aplicaciones de Recientes cada hora. Android indica que gestiona automáticamente la memoria y la batería, y cerrar aplicaciones a la fuerza suele gastar energía cuando vuelven a abrirse. **Forzar detención** sirve para una aplicación que funciona mal, no para el mantenimiento diario.

Las aplicaciones que más batería gastan suelen ser las que mantienen ocupadas la pantalla, la red, el GPS, la CPU o la GPU. Las que merece la pena corregir son las que lo hacen cuando no las estás usando.
