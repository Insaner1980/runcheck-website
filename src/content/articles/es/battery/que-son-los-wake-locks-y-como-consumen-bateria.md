---
title: "Qué son los wake locks y cómo consumen batería"
description: "Los wake locks permiten que las aplicaciones Android mantengan el procesador activo después de apagarse la pantalla. Si se usan mal, pueden impedir que el móvil entre en reposo de bajo consumo y provocar un consumo elevado mientras está inactivo."
listSummary: "bateria, consumo y solucion-de-problemas"
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Drain"
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
Estás durmiendo. La pantalla del móvil está apagada. No se reproduce nada, no hay ninguna descarga en curso y, aun así, la batería baja un 18 % durante la noche.

Ese es el tipo de consumo que pueden causar los wake locks. Una solicitud de wake lock mantiene activa una parte del dispositivo cuando Android normalmente dejaría que entrara en reposo. El problema más común para la batería es el wake lock parcial, que mantiene el procesador en funcionamiento mientras la pantalla permanece apagada.

Los wake locks no son malos por definición. Una aplicación de música necesita mantener el dispositivo activo para seguir reproduciendo audio. Una aplicación de navegación puede necesitarlo durante un trayecto. Una subida iniciada por el usuario quizá deba terminar en lugar de detenerse a mitad. El problema empieza cuando una aplicación mantiene el wake lock demasiado tiempo, lo solicita con demasiada frecuencia o no lo libera cuando termina el trabajo.

## Cómo funcionan los wake locks

Cuando se apaga la pantalla, Android intenta suspender la CPU y permitir que el móvil entre en estados de bajo consumo. Si una aplicación todavía tiene una tarea que debe continuar, puede solicitar un wake lock mediante la API PowerManager de Android. Cuando termina, libera el bloqueo y el dispositivo puede volver a dormir.

Es en ese relevo donde suelen aparecer los problemas.

Una aplicación puede iniciar una sincronización en segundo plano, encontrarse con un tiempo de espera de red y no cerrar correctamente la tarea. Otra puede consultar un servidor cada pocos minutos en lugar de utilizar notificaciones push. Una aplicación de actividad física puede mantener activos los sensores y el procesamiento durante más tiempo del necesario. Para el usuario, el móvil parece inactivo. Por dentro, no lo está.

Desde el 1 de marzo de 2026, esto también tiene más importancia para los desarrolladores. Google Play puede reducir la visibilidad de las aplicaciones que superan el umbral de Android vitals por uso excesivo de wake locks parciales. Android vitals considera excesivos los wake locks parciales no exentos cuando suman 2 horas o más en un periodo de 24 horas, y el umbral de mal comportamiento se supera cuando afecta a más del 5 % de las sesiones de la aplicación durante 28 días.

## Por qué es difícil detectar el consumo de los wake locks

Este consumo suele ocultarse detrás de etiquetas del sistema. La pantalla de batería puede mostrar **Sistema Android**, servicios de Google o un uso en segundo plano poco concreto en lugar de nombrar el wake lock exacto que causó el problema.

Aun así, empieza por lo básico. Entra en **Ajustes > Batería > Uso de batería** y comprueba qué aplicaciones han consumido energía en segundo plano. En los Pixel recientes, toca una aplicación y abre sus ajustes de uso de batería. En Samsung, revisa **Ajustes > Mantenimiento del dispositivo > Batería** y consulta el uso de las aplicaciones y los límites en segundo plano.

Si el móvil pierde mucha carga con la pantalla apagada, pero la pantalla de batería no señala una aplicación evidente, los wake locks pasan a ser una posibilidad más seria.

El antiguo código de marcación `*#*#4636#*#*` ya no es una solución fiable. Funciona en algunos móviles Android, no hace nada en otros y a menudo no ofrece información útil sobre la batería en modelos recientes de Samsung y Xiaomi. No basaría un proceso de diagnóstico en ese código.

Para comprobaciones más profundas, utiliza ADB. `adb shell dumpsys batterystats` puede mostrar el historial de wake locks y el tiempo que el dispositivo ha permanecido activo, aunque la salida no es precisamente fácil de leer. Herramientas como BetterBatteryStats y GSam Battery Monitor pueden ayudar, pero muchas aplicaciones avanzadas de análisis de batería necesitan permisos concedidos mediante ADB o una configuración adicional en versiones modernas de Android. Si una aplicación promete milagros instantáneos para la batería sin permisos ni datos, desconfía.

## Causas habituales de wake locks

Servicios de Google Play recibe muchas críticas porque se ocupa de una gran cantidad de tareas: ubicación, mensajería push, sincronización de cuentas, servicios cercanos, comprobaciones de seguridad y más. Es normal que acumule algo de tiempo de wake lock. No lo es que provoque un consumo descontrolado después de una actualización del sistema, una sincronización averiada o una caché dañada.

Las redes sociales también pueden generar bastante actividad. Actualizan contenidos, suben datos analíticos, sincronizan mensajes, renuevan widgets y mantienen en marcha los canales de notificaciones. Una aplicación social que abres dos veces por semana no necesita acceso sin restricciones en segundo plano.

Las aplicaciones de correo son otro caso habitual. El correo push suele funcionar bien. Consultar el servidor cada pocos minutos desperdicia energía, sobre todo si hay varias cuentas configuradas.

Las VPN, las aplicaciones de música, la navegación y los monitores de actividad física son distintas. Sus wake locks pueden ser normales porque el usuario les ha pedido que sigan haciendo algo. La pregunta adecuada no es "¿esta aplicación mantiene activo el móvil?", sino "¿sigue haciéndolo cuando no estoy utilizando su función principal?".

## Qué puedes hacer

Restringe el acceso en segundo plano de las aplicaciones que no lo necesiten. En un Pixel, abre **Ajustes > Batería > Uso de batería**, toca la aplicación, entra en **Permitir en segundo plano** y elige **Restringida**. En Samsung, utiliza las listas de suspensión o suspensión profunda dentro de **Límites de uso en segundo plano**.

No restrinjas aplicaciones que necesiten funcionar en tiempo real en segundo plano. La mensajería, las VPN, las aplicaciones de salud, navegación, emergencias y trabajo pueden fallar de maneras poco evidentes si las limitas demasiado.

Con Servicios de Google Play, empieza con medidas suaves. Reinicia el móvil. Comprueba si hay actualizaciones del sistema de Google Play y de las aplicaciones. Si el consumo continúa, borra la caché desde **Ajustes > Aplicaciones > Servicios de Google Play > Almacenamiento y caché > Borrar caché**. Evita borrar todos los datos salvo que sepas qué puede cambiar, porque puede restablecer el estado local del servicio y provocar temporalmente más actividad de sincronización.

Si el problema empezó justo después de actualizar a Android 17, espera uno o dos días antes de sacar conclusiones. Los Pixel recibieron Android 17 primero, y los móviles suelen realizar tareas adicionales de indexación, optimización de aplicaciones y limpieza después de una actualización importante del sistema operativo. Un consumo que continúa varios días es otra cosa.

## Cómo cambia Doze la situación

Doze ayuda a limitar el daño de los wake locks durante el reposo profundo. Mientras el dispositivo está en Doze, Android ignora los wake locks durante las fases restringidas y permite que el trabajo se ejecute principalmente en las ventanas de mantenimiento.

Pero Doze no hace magia. Las aplicaciones excluidas de la optimización de batería tienen más libertad. Los servicios en primer plano pueden seguir trabajando. Las capas de gestión de batería de los fabricantes pueden comportarse de forma distinta. Y si el móvil nunca llega a entrar en reposo por el movimiento, los problemas de cobertura o la actividad repetida en segundo plano, no obtendrás todo el beneficio.

Por eso el consumo nocturno da una pista tan útil. Si el móvil permanece quieto durante siete horas y pierde un 4 %, probablemente no exista un problema grave de wake locks. Si pierde un 20 % con la pantalla apagada y sin reproducción multimedia, algo lo mantiene activo o fuerza a la radio a trabajar.

runcheck está diseñado para encontrar ese tipo de patrones. El consumo con la pantalla apagada, el comportamiento del reposo profundo, la calidad de la señal y la temperatura cuentan una historia mucho más clara juntos que la pantalla de batería predeterminada por sí sola.

## Algunas preguntas que merece la pena responder

¿Puede un wake lock mantener encendida la pantalla? Los wake locks parciales no. Mantienen la CPU activa mientras la pantalla permanece apagada. Existen tipos antiguos que afectan a la pantalla, pero las aplicaciones Android modernas están muy limitadas en ese aspecto. La mayor parte del consumo oculto procede de estos bloqueos parciales de la CPU.

¿Es normal cierta actividad de wake locks? Sí. Incluso un móvil Android sin problemas utiliza wake locks breves para servicios del sistema, mensajes push, cambios de conectividad y tareas programadas. Unos minutos son normales. Varias horas durante periodos de inactividad no lo son.

¿Un restablecimiento de fábrica puede solucionarlo? A veces. Puede eliminar estados defectuosos de aplicaciones, sincronizaciones rotas y restos problemáticos de una actualización. También es una medida drástica. Restringe primero las aplicaciones sospechosas, actualiza todo, borra la caché cuando corresponda y confirma el patrón antes de borrar el móvil.
