---
title: "Por qué tu móvil se apaga al 20 % y cómo solucionarlo"
description: "Estás al 22 %, abres la cámara y la pantalla se queda negra. Después conectas el móvil y, de repente, indica un 18 % o un 24 %. Parece que el porcentaje te está mintiendo."
listSummary: "Estás al 22 %, abres la cámara y la pantalla se queda negra."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["bateria","calibracion","solucion-de-problemas","android","guia"]
locale: "es"
draft: false
---
En cierto modo, lo hace. La cifra de la pantalla es una estimación, y resulta más difícil calcularla cuando la batería ha envejecido.

## Lo primero que debes comprobar

Comprueba el estado de la batería antes de perder el tiempo con trucos de calibración.

En Pixel 8a y modelos posteriores, ve a **Ajustes > Batería > Estado de la batería**. Pixel muestra **Normal** cuando la capacidad está dentro de los límites normales y **Reducida** cuando baja del 80 %. El número de ciclos se encuentra en **Ajustes > Información del teléfono > Información de la batería** en Pixel 8a y modelos posteriores.

En Samsung, abre **Samsung Members > Asistencia > Comenzar**, dentro de **Diagnóstico del teléfono**, y selecciona **Estado de la batería**. Samsung clasifica el resultado como Normal, Débil o Malo. La ruta exacta puede variar, pero Samsung Members es la herramienta oficial de diagnóstico.

En otros móviles Android, mira primero en **Ajustes > Batería**. Si no existe una página nativa sobre el estado de la batería, utiliza una aplicación de diagnóstico como AccuBattery y deja que recopile datos durante varias sesiones de carga. Una única lectura después de una sola carga no basta.

Un resultado inferior al 80 % junto con apagados al 20 % apunta directamente a la batería.

## Por qué miente el porcentaje

Android calcula el porcentaje de batería a partir del voltaje, la corriente, la temperatura y un modelo de cómo debería comportarse la celda. Algunos móviles también registran a lo largo del tiempo la corriente que entra y sale.

Ese modelo funciona mejor cuando la batería está en buen estado. A medida que envejece, la capacidad disminuye y la resistencia interna aumenta. La curva de voltaje cambia. El móvil puede seguir interpretando que un 20 % supone una reserva cómoda cuando, en realidad, queda mucha menos energía utilizable.

Los errores aparecen primero en la parte baja de la carga. En la zona intermedia, la curva de voltaje es bastante plana. Cerca de agotarse se vuelve pronunciada. Una pequeña caída de voltaje bajo carga puede hacer que parezca que la batería se ha desplomado de golpe.

Por eso la cámara, el GPS, los juegos, las videollamadas y el 5G pueden provocar apagados. Generan picos breves de consumo. Una batería sana absorbe el pico. Una desgastada sufre una caída de voltaje por debajo del mínimo que necesita el móvil, y Android apaga el dispositivo para protegerlo.

## Por qué las baterías viejas se apagan antes de tiempo

Una batería degradada tiene dos problemas a la vez.

Primero, almacena menos carga. Una batería de 5000 mAh que conserva el 80 % de su capacidad almacena unos 4000 mAh. Al 70 %, unos 3500 mAh. El indicador porcentual puede seguir pareciendo normal, pero cada punto está respaldado por menos capacidad real.

Segundo, la resistencia interna es mayor. Eso hace que el voltaje caiga más cuando el móvil pide corriente. Por eso un teléfono antiguo puede mantenerse tranquilamente al 25 % en la pantalla de inicio y apagarse en cuanto abres la cámara.

El frío lo empeora todo. La química de las baterías de iones de litio se ralentiza a bajas temperaturas, de modo que les cuesta más suministrar corriente. Un móvil que aguanta al 20 % dentro de casa puede apagarse al mismo porcentaje en la calle.

El calor funciona de otra forma. Por sí solo no suele causar un apagado instantáneo al 20 %, pero acelera el envejecimiento que acaba provocando el problema.

## Calibración: qué puede arreglar y qué no

La calibración de la batería se entiende mal con mucha frecuencia. No recupera capacidad. Solo puede ayudar al software del móvil a estimar con mayor precisión la carga restante.

Si el estado de la batería parece razonable y los apagados empezaron después de una actualización de software, un cambio de batería o un periodo largo con cargas extrañas, probar un ciclo de calibración es razonable. Esto también se aplica a la distribución de Android 17 en los Pixel compatibles: no des por hecho que la batería ha fallado solo porque el problema coincida con una actualización importante. Usa el móvil hasta que se apague por sí solo. Cárgalo sin interrupciones hasta el 100 % y déjalo conectado entre 30 y 60 minutos más. Después, úsalo con normalidad.

No conviertas las descargas completas en una costumbre. Agotar repetidamente una batería de iones de litio hasta cero la castiga más que realizar cargas parciales.

Si la calibración funciona, el porcentaje debería comportarse de forma menos brusca durante los ciclos siguientes. Si el móvil sigue apagándose al 20 %, o empieza a hacerlo al 30 %, es probable que la celda esté demasiado desgastada para que el software pueda disimularlo.

## Cuándo el software es la causa

A veces el desgaste del hardware no explica todo. Una aplicación con problemas puede mantener wake locks, dejar activa la CPU o generar actividad de red y ubicación en momentos inoportunos. Esa carga adicional puede hacer que una batería débil supere su límite.

Abre **Ajustes > Batería > Uso de batería**. Si una aplicación muestra mucha actividad en segundo plano, limítala o desinstálala durante un día y vuelve a probar.

El modo seguro resulta útil si el móvil es bastante nuevo y el estado de la batería parece normal. Este modo desactiva las aplicaciones de terceros. Si los apagados desaparecen, la causa apunta a una aplicación instalada.

Un restablecimiento de fábrica puede corregir una estimación dañada de la batería o bucles de software, pero es la opción más drástica. Haz una copia de seguridad primero. Después del restablecimiento, prueba el móvil antes de recuperar todas las aplicaciones y ajustes. Restaurarlo todo de inmediato puede devolver el mismo problema.

## Preguntas frecuentes

¿Por qué vuelve a encenderse con un porcentaje más alto después de conectarlo? Bajo carga, el voltaje de una batería débil cae con fuerza. Al enchufar el cargador, este suministra corriente y el voltaje de la batería se recupera. El móvil no ha ganado mucha carga en un segundo. La lectura del voltaje simplemente se ha estabilizado.

¿Conviene mantener el móvil conectado para evitar que se apague al 20 %? En una emergencia puntual, sí. Como solución diaria, no. Si no puedes fiarte del móvil por debajo del 25 %, la batería necesita atención.

¿Puede arreglarlo una aplicación de batería? Ninguna aplicación puede reparar el desgaste químico. Una aplicación fiable puede ayudar a estimar el estado de la batería y mostrar patrones, pero no puede reconstruir la celda.

Cuando un móvil se apaga aunque muestre bastante carga, normalmente estás ante una celda envejecida, un medidor de carga incorrecto o ambas cosas. Comprueba primero el estado, calibra solo cuando tenga sentido y cambia la batería cuando las pruebas apunten a ella.
