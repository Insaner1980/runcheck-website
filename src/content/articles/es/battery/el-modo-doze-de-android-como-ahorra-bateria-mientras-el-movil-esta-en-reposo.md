---
title: "El modo Doze de Android: cómo ahorra batería mientras el móvil está en reposo"
description: "El modo Doze de Android reduce el consumo de batería en reposo aplazando el trabajo en segundo plano cuando el móvil está inactivo. Te explicamos qué limita, por qué algunas notificaciones llegan tarde y cuándo conviene excluir una aplicación."
listSummary: "bateria, optimizacion y android"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["bateria","optimizacion","android","consejos","rendimiento"]
locale: "es"
draft: false
---
¿Por qué han llegado diez notificaciones justo cuando has cogido el móvil? Muchas veces, la respuesta es Doze.

Doze es el sistema de reposo integrado en Android. No tienes que activarlo y la mayoría de la gente nunca ve una pantalla llamada Doze en Ajustes. Funciona de forma discreta cuando el móvil no está enchufado, la pantalla está apagada y Android decide que el dispositivo debe dejar de permitir que todas las aplicaciones se ejecuten cuando quieran.

Android 17 es la versión actual de la plataforma en la mayoría de los Pixel compatibles, mientras que los demás fabricantes siguen sus propios calendarios. Eso no cambia los consejos básicos sobre Doze. Lo que importa para el usuario sigue siendo lo mismo: menos activaciones en segundo plano, más autonomía en reposo y, a veces, notificaciones no urgentes que llegan con retraso.

## Qué hace Doze

Cuando Doze está activo, Android restringe las tareas más costosas. Las aplicaciones pierden el acceso normal a la red. Las alarmas estándar se aplazan. Los trabajos y las sincronizaciones esperan. Los wake locks se ignoran durante las fases de reposo profundo. Las búsquedas de redes Wi-Fi también se detienen.

El dispositivo no queda congelado indefinidamente. Android abre breves ventanas de mantenimiento para ejecutar por lotes el trabajo aplazado. Las aplicaciones se sincronizan, las tareas en cola se ejecutan y pueden aparecer notificaciones de prioridad normal. Después, Android vuelve a poner el dispositivo en reposo.

Ese es todo el truco. Agrupar el trabajo en segundo plano consume mucho menos que permitir que cada aplicación active la CPU y la radio cuando le apetezca.

## Cuándo se activa Doze

Doze apareció por primera vez en Android 6.0 (API 23). La versión original necesitaba que el dispositivo estuviera desconectado del cargador, inmóvil y con la pantalla apagada durante un tiempo. Android 7.0 añadió el comportamiento conocido como "Doze on the go", que aplica un conjunto más ligero de restricciones cuando el móvil no está enchufado y lleva un tiempo con la pantalla apagada, aunque se mueva dentro de un bolsillo.

En la práctica, los móviles Android modernos suelen recibir dos niveles de ayuda. Se aplican restricciones de reposo más ligeras mientras los llevas encima y otras más profundas después de que el dispositivo haya permanecido quieto durante un tiempo.

El software del fabricante puede complicar la situación. Los Pixel suelen comportarse de forma parecida a la implementación de referencia de Google. Samsung, Xiaomi, OnePlus, Oppo y otros añaden sus propias capas de gestión de batería. A veces ayudan. Otras veces son demasiado agresivas y estropean las notificaciones.

## Qué se retrasa

El retraso más visible afecta a la sincronización en segundo plano. El correo puede comprobarse con menos frecuencia. Una aplicación de notas puede tardar más en sincronizarse. Un widget meteorológico puede actualizarse durante la siguiente ventana de mantenimiento en lugar de hacerlo inmediatamente.

También se ve afectado el trabajo programado por los desarrolladores. Las tareas de `JobScheduler` y `WorkManager` suelen esperar mientras Doze está activo. Las alarmas estándar de `AlarmManager` también se aplazan, aunque las alarmas visibles para el usuario, como las de una aplicación de reloj, siguen sonando a su hora.

Las llamadas y los SMS no deberían esperar a una ventana de mantenimiento. Las notificaciones de Firebase Cloud Messaging (FCM) de prioridad alta también pueden activar brevemente una aplicación para mostrar un aviso urgente. Por eso WhatsApp, Signal, Telegram y aplicaciones parecidas suelen seguir pareciendo inmediatas, siempre que la aplicación y los ajustes de batería del fabricante estén configurados correctamente.

Los mensajes push de prioridad normal son distintos. Si una aplicación los usa para actualizar contenido en segundo plano o para avisos poco urgentes, Android puede retenerlos hasta la siguiente ventana de mantenimiento.

## Por qué las notificaciones llegan tarde

Una notificación tardía no siempre es un error. A menudo es la contrapartida que Doze está diseñado para asumir.

Una promoción de una aplicación de reparto, un "me gusta" en una red social o una alerta de noticias pueden esperar unos minutos si eso ayuda al móvil a permanecer dormido. Un chat de trabajo, una alarma, una llamada entrante o una alerta de seguridad no deberían hacerlo. Las aplicaciones bien diseñadas usan la prioridad adecuada para cada tipo de mensaje. Las mal diseñadas piden demasiada prioridad o no se integran bien con FCM y dependen de consultas periódicas en segundo plano.

La parte molesta es que el usuario no recibe una explicación clara. Solo ve que los mensajes llegan tarde y tiene que averiguar el motivo.

Empieza por los ajustes de notificaciones de la propia aplicación. Después, comprueba sus ajustes de batería. En un Pixel, abre **Ajustes > Batería > Uso de batería**, toca la aplicación y revisa **Permitir en segundo plano**. En Samsung, revisa **Ajustes > Mantenimiento del dispositivo > Batería > Límites de uso en segundo plano** y asegúrate de que la aplicación no está en las listas de suspensión o suspensión profunda.

## Excluir aplicaciones de Doze

Android permite excluir aplicaciones concretas de la optimización de batería. La ruta habitual en Android sin grandes modificaciones es **Ajustes > Aplicaciones > Acceso especial de aplicaciones > Optimización de batería**. Selecciona la aplicación y elige **No optimizar** o la opción equivalente.

Hazlo con criterio. Cada excepción da a una aplicación más libertad para ejecutarse en segundo plano, y demasiadas excepciones reducen la utilidad de Doze. Las aplicaciones de mensajería, las VPN, las aplicaciones médicas o de seguridad y algunas herramientas de trabajo pueden ser candidatas razonables. Una aplicación de compras no lo es.

La política de Google Play también limita los casos en los que una aplicación debería pedir al usuario que la excluya de la gestión de energía de Android. La idea es sencilla: la excepción debe reservarse para aplicaciones cuya función principal dejaría de funcionar sin ella.

## Cómo saber si Doze está ayudando

La prueba más sencilla para un usuario es comprobar el consumo durante la noche. Carga el móvil, desenchúfalo antes de acostarte, déjalo con la pantalla apagada y mira cuánto ha bajado por la mañana. Perder unos pocos puntos porcentuales durante la noche es normal. Perder un 15 % o un 25 % con la pantalla apagada indica que algo activa el móvil con demasiada frecuencia, que la cobertura es mala o que la batería está envejecida.

Las estadísticas de batería no siempre dirán "Doze ha fallado". Pueden mostrar Sistema Android, Servicios de Google Play, red móvil o una entrada poco concreta de alguna aplicación. Por eso el ritmo de consumo con la pantalla apagada importa más que un único gráfico. Si el móvil pierde más o menos entre un 1 % y un 2 % por hora mientras está inactivo, merece la pena investigarlo.

Los desarrolladores pueden probar Doze mediante ADB con `adb shell dumpsys deviceidle force-idle`, pero es una herramienta de pruebas, no un ajuste normal para el uso diario.

## Preguntas habituales

No puedes desactivar Doze desde los ajustes normales de Android y probablemente no deberías intentarlo. Es una de las razones principales por las que los móviles modernos pueden permanecer horas en reposo sin agotar la batería.

Doze funciona mientras el móvil está en el bolsillo, aunque no siempre en su nivel más profundo. Android 7.0 y versiones posteriores aplican restricciones más ligeras cuando la pantalla está apagada y el dispositivo se mueve. El modo más profundo sigue dependiendo de periodos de inactividad más largos.

Las alarmas de la aplicación Reloj siguen sonando. Las que se aplazan hasta las ventanas de mantenimiento son las alarmas en segundo plano de otras aplicaciones, salvo que utilicen APIs diseñadas para alarmas que deben ejecutarse incluso durante el reposo.

Si un dispositivo tiene peor consumo en reposo que otro, no des por hecho que Doze está averiado. La intensidad de la señal, la política de batería del OEM, el conjunto de aplicaciones, la sincronización de cuentas, los widgets y la antigüedad de la batería pueden hacer que dos móviles Android se comporten de formas muy distintas.

runcheck puede ayudar separando el consumo con la pantalla encendida del consumo con la pantalla apagada y mostrando si los periodos de reposo coinciden con patrones de red, temperatura o actividad en segundo plano. Es mucho más útil que sacar conclusiones de una única bajada porcentual durante la noche.
