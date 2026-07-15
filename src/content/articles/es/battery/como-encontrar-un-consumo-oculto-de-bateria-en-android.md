---
title: "Cómo encontrar un consumo oculto de batería en Android"
description: "¿Por qué la pantalla de batería culpa a Sistema Android o Servicios de Google Play cuando el problema real probablemente sea una aplicación, un bucle de sincronización, la ubicación o el módem? Porque esas entradas del sistema suelen realizar el trabajo en nombre de otras funciones. Es molesto, sí. Inútil, no."
listSummary: "bateria, consumo y solucion-de-problemas"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Drain"
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
Encontrar un consumo oculto consiste, sobre todo, en descubrir qué mantiene despierto el móvil cuando la pantalla está apagada.

## Empieza por la pantalla aburrida

Abre primero **Ajustes > Batería > Uso de batería**. En Pixel, alterna entre la vista de aplicaciones y la del sistema si la opción está disponible. En Samsung, ve a **Ajustes > Mantenimiento del dispositivo > Batería** y abre el uso detallado. Xiaomi, OnePlus, Motorola y otras marcas utilizan nombres distintos, pero todas muestran algún tipo de lista de consumo por aplicaciones.

Busca tres patrones:

1. Una aplicación con mucho uso en segundo plano y poco uso en primer plano.
2. Una entrada del sistema que se mantenga alta durante varios ciclos de carga.
3. Un gráfico que descienda durante un periodo en el que la pantalla estaba apagada y el móvil debería haber estado tranquilo.

Un resultado malo después de una copia larga de Google Fotos o una actualización de Play Store no basta. Tres resultados parecidos seguidos ya forman un patrón.

## Comprueba si el móvil está durmiendo de verdad

El modo Doze de Android reduce el trabajo en segundo plano cuando el móvil está desenchufado, inactivo y sin moverse. Retrasa tareas y sincronizaciones, limita el acceso a la red y agrupa las ventanas de mantenimiento. Las aplicaciones pueden recibir algunas excepciones y las notificaciones de alta prioridad pueden despertarlo brevemente, pero un móvil en reposo debería pasar largos periodos haciendo muy poco.

Si el gráfico de batería muestra una caída continua durante la noche o el móvil está caliente sobre la mesilla, algo está interrumpiendo ese estado de reposo.

En algunas versiones de Android, el gráfico de batería muestra barras de **Activo** o un indicador parecido. Si aparece activo durante largos periodos mientras **Pantalla encendida** no lo está, ya tienes una pista. Muchas versiones de One UI muestran barras de estado similares debajo del gráfico.

¿No hay ninguna barra? Pasa al siguiente nivel.

## Usa el modo seguro antes de culpar a la batería

El modo seguro está infravalorado. Desactiva temporalmente las aplicaciones descargadas y mantiene en funcionamiento el sistema básico. Si el consumo nocturno casi desaparece en modo seguro, probablemente el problema no sea el hardware.

La forma exacta de entrar varía, pero en muchos móviles Android puedes mantener pulsado el botón de encendido y después mantener pulsada la opción **Apagar** hasta que aparezca el aviso del modo seguro. Google documenta este modo como una forma de encontrar aplicaciones problemáticas, y Samsung lo presenta como una herramienta de diagnóstico que desactiva la mayoría de las aplicaciones de terceros.

Haz una prueba nocturna en modo seguro si el consumo es grave. No pases una semana así. Si mejora, elimina o restringe primero las aplicaciones instaladas o actualizadas recientemente.

## Las opciones para desarrolladores muestran qué está activo ahora

Activa las opciones para desarrolladores abriendo **Ajustes > Información del teléfono** y tocando siete veces **Número de compilación**. Después ve a **Ajustes > Sistema > Opciones para desarrolladores** o a la ubicación equivalente de tu móvil.

**Servicios en ejecución** ofrece una instantánea de los servicios que están usando memoria y, en algunos casos, CPU. No es un informe completo de batería, pero puede revelar problemas evidentes. Si una aplicación de compras, un fondo animado, una aplicación de limpieza o un antiguo monitor de actividad sigue ejecutándose aunque no lo hayas abierto, conviene revisarlo.

También pueden aparecer pantallas como **Aplicaciones en espera** o **Aplicaciones inactivas**. Muestran cómo clasifica Android la actividad de las aplicaciones. No están disponibles en todos los móviles y algunos fabricantes las ocultan. Ese es el problema de los diagnósticos en Android: las herramientas existen, pero buena parte del trabajo consiste en descubrir dónde las ha colocado el fabricante.

## Usa ADB cuando necesites pruebas

ADB es la forma más limpia de inspeccionar wake locks e historial de batería sin root. Requiere algo más de trabajo, pero evita las suposiciones.

Necesitas un ordenador con platform-tools instalado y la depuración USB activada en el móvil. Después, reinicia las estadísticas actuales:

```bash
adb shell dumpsys batterystats --reset
```

Utiliza el móvil con normalidad o déjalo durante la noche para registrar el consumo en reposo. Después exporta el informe:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

El archivo es grande. Busca primero estas secciones:

- **Estimated power use**, que muestra estimaciones del consumo por aplicación en mAh.
- **Wake locks**, para localizar aplicaciones que han mantenido activa la CPU.
- **Alarm Stats** u otras secciones relacionadas con alarmas, para detectar aplicaciones que despiertan repetidamente el dispositivo.
- **Mobile radio** y **Wi-Fi**, si el consumo parece relacionado con la red.

La documentación oficial de Batterystats y Battery Historian explica el proceso: Batterystats recopila datos de batería en el dispositivo y Battery Historian los convierte en una cronología HTML. Battery Historian es excesivo para un usuario ocasional, pero resulta útil cuando necesitas ver wake locks, actividad de radio, carga, estado de la pantalla y nivel de batería en una sola línea temporal.

Si solo quieres utilizar un comando, usa este:

```bash
adb shell dumpsys batterystats
```

No señalará mágicamente a la aplicación culpable con una frase sencilla. Te dará pruebas.

## Las causas ocultas habituales

**Servicios de Google Play** no suele ser el villano por sí solo. Gestiona notificaciones push, API de ubicación, sincronización de cuentas, servicios cercanos, actualizaciones de aplicaciones y partes de la seguridad del dispositivo. Si muestra un consumo alto, comprueba errores de sincronización de la cuenta de Google, permisos de ubicación, la copia de seguridad de Google Fotos y si hay una actualización pendiente de los servicios.

No fuerces la detención de Servicios de Google Play ni intentes desinstalarlos. Están integrados en el funcionamiento de Android. Borra la caché solo cuando tenga sentido, reinicia, actualiza las aplicaciones y corrige el problema de cuenta o ubicación que haya debajo.

**Una sincronización de cuenta fallida** es aburrida, pero frecuente. Abre **Ajustes > Contraseñas y cuentas** o **Ajustes > Cuentas** y busca iconos de advertencia, antiguas cuentas de trabajo, contraseñas modificadas o servicios que nunca terminan de sincronizarse. Elimina la cuenta si ya no la utilizas. Si todavía la necesitas, quítala y vuelve a añadirla.

**Una señal débil** puede parecer consumo del sistema. Si la entrada de **Red móvil en espera** aparece muy alta, haz una prueba nocturna en modo avión. Samsung señala que una conexión de red débil o inestable puede acelerar el consumo, y en muchos hogares esa es toda la explicación.

**Los widgets y los fondos animados** se olvidan con facilidad porque están en la pantalla de inicio, no en el cajón de aplicaciones. Un widget del tiempo que actualiza la ubicación cada pocos minutos no se comporta como un reloj estático. Quita durante un día los widgets que hayas añadido recientemente y compara.

**Los accesorios Bluetooth** también pueden entrar en bucles. Relojes, auriculares, sistemas del coche y localizadores a veces intentan reconectarse una y otra vez. Si el consumo empezó después de vincular un dispositivo nuevo, prueba una noche con el Bluetooth apagado.

## Cuándo sospechar del hardware

El consumo provocado por software suele dejar pistas: una aplicación, un wake lock, actividad de radio, calor durante el uso de la CPU o una mejora en modo seguro. El consumo de hardware es más obstinado.

Varias señales apuntan en esa dirección:

- El móvil pierde mucha batería durante la noche incluso en modo avión.
- El modo seguro no mejora el consumo.
- El móvil está caliente sin tocarlo y sin estar cargando.
- El estado de la batería aparece reducido o el teléfono se apaga con porcentajes aleatorios.

En Pixel 8a y modelos posteriores, ve a **Ajustes > Batería > Estado de la batería**. Google indica que **Reducida** significa que la capacidad restante está por debajo del 80 %. En Samsung, abre **Samsung Members > Asistencia > Comenzar**, dentro de **Diagnóstico del teléfono**, y selecciona **Estado de la batería**.

Una aplicación de terceros puede estimar la capacidad, pero no trates esa cifra como un resultado de laboratorio. Los números sobre el estado de la batería son complicados. La temperatura, el historial de carga, la calibración y el método de medición influyen en la estimación.

## Qué no debes hacer

No instales una aplicación de ahorro de batería que prometa arreglarlo todo. La mayoría duplica los controles integrados de Android, añade publicidad y ejecuta sus propios servicios en segundo plano.

No elimines continuamente todas las aplicaciones de Recientes. Android ya lo gestiona de forma automática. Si una aplicación se comporta mal, utiliza **Forzar detención** desde **Ajustes > Aplicaciones** y después actualízala, restríngela o elimínala.

No hagas un restablecimiento de fábrica como primer paso. Puede corregir estados dañados de aplicaciones y ajustes antiguos, pero también te hace perder tiempo y no te explica qué causó el consumo. Úsalo solo después de que fallen la pantalla de batería, el modo seguro, el restablecimiento de red y las restricciones de aplicaciones.

runcheck puede ayudar cuando el patrón cruza varias categorías. Consumo de batería junto con calor apunta en una dirección. Consumo con una señal débil apunta en otra. Consumo con presión sobre el almacenamiento o un uso intenso de aplicaciones lleva a una causa diferente. La solución mejora cuando el diagnóstico no se hace a ciegas.
