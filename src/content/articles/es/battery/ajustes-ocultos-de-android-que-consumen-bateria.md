---
title: "Ajustes ocultos de Android que consumen batería"
description: "Android puede mantener activas la búsqueda de redes Wi-Fi, la búsqueda de dispositivos Bluetooth, la sincronización en segundo plano, las consultas de ubicación y la pantalla siempre activa aunque no estés usando el móvil. Conviene revisar estos ajustes si el consumo en reposo es demasiado alto."
listSummary: "android, actualizaciones y seguridad"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Drain"
tags: ["android","actualizaciones","seguridad","software","guia"]
locale: "es"
draft: false
---
Una buena parte del consumo de batería en Android ocurre cuando no estás haciendo nada interesante. La pantalla está apagada, el móvil descansa sobre la mesa y, aun así, la carga baja porque las aplicaciones, las radios, los sensores y la sincronización de cuentas siguen activando el dispositivo.

Android 17 empezó a llegar a la mayoría de los Pixel compatibles en junio de 2026, y los nombres de algunos menús están en una fase un poco confusa. Los Pixel reciben primero la nueva versión de Android, mientras que Samsung, Xiaomi, OnePlus, Motorola y otros fabricantes distribuyen sus propias versiones de Android 17 según sus calendarios. Las ideas siguientes siguen siendo válidas, pero la ruta exacta puede cambiar un nivel según el móvil.

## Actividad de las aplicaciones en segundo plano

Este suele ser el primer lugar que conviene revisar. Las aplicaciones pueden sincronizar datos, buscar actualizaciones, comprobar notificaciones, subir registros, actualizar widgets y mantener wake locks sin llamar la atención. Las redes sociales, las aplicaciones de compras, noticias, almacenamiento en la nube y algunas utilidades mal diseñadas son sospechosas habituales.

En un Pixel y en Android sin grandes modificaciones, empieza por **Ajustes > Batería > Uso de batería**. Consulta el uso por aplicaciones y busca cualquiera que siga consumiendo después de que hayas dejado de utilizarla. En los Pixel recientes también puedes entrar en **Ajustes > Aplicaciones > Uso de batería de las aplicaciones** y elegir entre **Sin restricciones**, **Optimizada** y **Restringida**.

Usa **Restringida** con las aplicaciones que no necesitas mantener activas después de cerrarlas. Los juegos, las aplicaciones de compras, las que solo utilizas durante un viaje, las de reparto de comida y algunas utilidades son buenas candidatas. No restrinjas las aplicaciones de mensajería, el correo de trabajo, las VPN, los monitores de salud, las aplicaciones de seguridad familiar ni nada en lo que un aviso tardío pueda causar un problema real.

Samsung ofrece una función parecida en **Ajustes > Mantenimiento del dispositivo > Batería > Límites de uso en segundo plano**. La opción más estricta es la lista de aplicaciones en suspensión profunda, útil para las que apenas utilizas. También es fácil pasarse. Si una notificación importa, no pongas esa aplicación en suspensión profunda.

Merece la pena dejar activada Batería adaptativa. Aprende qué aplicaciones utilizas a menudo y limita las demás de una forma más discreta que las restricciones manuales. No detectará todos los problemas, pero es un buen punto de partida.

## Búsqueda de redes Wi-Fi y dispositivos Bluetooth

Este ajuste resulta un poco engañoso. Desactivar Wi-Fi o Bluetooth desde los ajustes rápidos no siempre impide que Android utilice esas radios para buscar señales que mejoren la ubicación. El sistema puede seguir localizando puntos de acceso Wi-Fi y dispositivos Bluetooth cercanos.

En Android 12 y versiones posteriores, la ruta habitual es **Ajustes > Ubicación > Servicios de ubicación > Búsqueda de Wi-Fi** y **Búsqueda de dispositivos Bluetooth**. En Android 11 y versiones anteriores, estas opciones pueden aparecer directamente dentro de **Ajustes > Ubicación**. Samsung también suele mantenerlas en **Ajustes > Ubicación > Servicios de ubicación**.

Desactivar estas búsquedas puede reducir pequeñas activaciones repetidas de las radios. A cambio, la ubicación en interiores puede empeorar. Si utilizas Google Maps dentro de edificios, Localizador, automatizaciones del hogar basadas en la ubicación o recordatorios geográficos, quizá notes que la posición tarda más o es menos precisa.

Para la mayoría de la gente, solo desactivaría estas búsquedas si el consumo en reposo ya resulta molesto. En un móvil que funciona bien, no es el primer interruptor que tocaría.

## Reloj de la pantalla bloqueada y pantalla siempre activa

La pantalla siempre activa es práctica. También hace exactamente lo que promete su nombre: una parte de la pantalla permanece encendida durante todo el día.

Las pantallas OLED no iluminan los píxeles negros, así que un reloj sencillo sobre un fondo negro no consume mucho en un momento concreto. Pero el móvil puede pasar entre 15 y 20 horas al día en reposo. Un consumo pequeño y constante termina siendo visible durante tantas horas, sobre todo si la pantalla siempre activa incluye colores, widgets, fondo de pantalla o elementos de notificación más brillantes.

En los Pixel actuales suele encontrarse en **Ajustes > Pantalla y ajustes táctiles > Pantalla siempre activa**. Samsung utiliza **Ajustes > Pantalla de bloqueo y AOD > Always On Display** o una ruta parecida dentro de la pantalla de bloqueo, según la versión de One UI.

El mejor punto intermedio no siempre es desactivarla por completo. Muchos móviles permiten mostrarla al tocar la pantalla, activarla con notificaciones nuevas o programar el reloj de la pantalla bloqueada. Así conservas gran parte de la comodidad sin mantener píxeles encendidos cada minuto del día.

## Precisión de la ubicación y permisos de las aplicaciones

La Precisión de la ubicación ayuda a Android a localizarte antes y con mayor exactitud utilizando más fuentes que el GPS. Los puntos de acceso Wi-Fi, las torres de telefonía, los sensores, la dirección IP y otros datos del dispositivo pueden participar en el cálculo cuando el ajuste está activado.

Eso no significa que la Precisión de la ubicación sea mala. Gracias a ella, el móvil puede localizarte dentro de edificios donde el GPS funciona mal. Pero también facilita que las aplicaciones con permiso de ubicación soliciten la posición en segundo plano, y esas solicitudes son una causa habitual de consumo.

Revisa **Ajustes > Ubicación > Permisos de ubicación de aplicaciones**. Cualquier aplicación configurada como **Permitir siempre** merece atención. Los widgets meteorológicos, las redes sociales, las aplicaciones de compras, fotos y viajes no suelen necesitar la ubicación en segundo plano. Cámbialas a **Permitir solo mientras se usa la aplicación**, salvo que el seguimiento en segundo plano sea precisamente su función.

En Android 12 y versiones posteriores también puedes conceder una ubicación aproximada a muchas aplicaciones. Esto ayuda más a la privacidad que a la batería, pero sigue siendo una buena costumbre. La navegación, el seguimiento deportivo y las aplicaciones de emergencia o seguridad son excepciones evidentes.

## Sincronización y cuentas

Cada cuenta configurada en el móvil puede tener su propio ritmo de sincronización. Google, Samsung, Microsoft, el correo, el calendario, los contactos, las notas en la nube, Drive, Fotos, la sincronización del navegador y las cuentas de terceros añaden trabajo en segundo plano.

Entra en **Ajustes > Contraseñas, llaves de acceso y cuentas** o **Ajustes > Cuentas**, abre cada cuenta y comprueba qué se está sincronizando. Si es tu único móvil, seguramente querrás mantener los contactos, el calendario y el correo principal. En cambio, puedes reducir la sincronización de una cuenta de trabajo que ya no utilizas, una unidad en la nube que no necesita sincronizarse con el teléfono o una cuenta de correo antigua.

Muchos móviles también incluyen un interruptor general de sincronización automática. No recomiendo dejarlo desactivado permanentemente porque los correos que no llegan y los calendarios desactualizados resultan molestos. Puede ayudar durante viajes, excursiones largas o cortes de electricidad.

## El interruptor que mantiene preparada la red móvil

Las Opciones para desarrolladores incluyen un ajuste llamado **Datos móviles siempre activos**. Cuando está habilitado, Android mantiene preparada la conexión de datos móviles incluso mientras estás conectado a una red Wi-Fi. La ventaja es un cambio más rápido cuando falla la Wi-Fi. El coste es que el módem puede permanecer activo más tiempo del necesario.

Se nota sobre todo cuando la cobertura móvil es débil. Un teléfono conectado por Wi-Fi en un sótano donde solo llega una barra de LTE puede seguir gastando energía para mantener la conexión móvil.

Para acceder al ajuste, activa las Opciones para desarrolladores entrando en **Ajustes > Información del teléfono** y tocando siete veces **Número de compilación**. Después, revisa **Ajustes > Sistema > Opciones para desarrolladores > Datos móviles siempre activos**. En los Samsung, las Opciones para desarrolladores suelen aparecer al final de Ajustes después de activarlas.

Desactívalo si el móvil pasa casi todo el día conectado a una Wi-Fi estable. A cambio, puede haber un pequeño retraso cuando se pierda la Wi-Fi y el dispositivo vuelva a usar los datos móviles.

## Notificaciones, gestos para activar la pantalla y pequeños despertares

Una sola notificación apenas consume batería. Un día lleno de notificaciones innecesarias sí puede notarse. Cada sonido, vibración, encendido de la pantalla y animación de bloqueo da al móvil otro motivo para salir de su estado de reposo más profundo.

Abre **Ajustes > Notificaciones > Notificaciones de aplicaciones** y sé estricto con las aplicaciones promocionales. Las ofertas de tiendas, los recordatorios de juegos, las recomendaciones de plataformas de vídeo, las promociones de restaurantes y la publicidad de las propias aplicaciones no necesitan activar tu móvil.

Revisa también los ajustes de la pantalla bloqueada y los gestos: levantar para activar, tocar para activar, tocar dos veces para consultar el móvil y opciones parecidas. Utilizan sensores de bajo consumo, así que por sí solas no suelen causar un gasto enorme. El problema aparece cuando la pantalla se activa accidentalmente dentro de un bolsillo, una bolsa o sobre una mesa que vibra.

Desactiva las que no utilices. Conserva las que de verdad hagan más cómodo el uso del móvil.

## La mala cobertura es el consumo oculto que no puedes desactivar con un interruptor

Una señal móvil débil puede consumir más batería que cualquiera de los ajustes anteriores. Cuando el teléfono tiene dificultades para mantener la conexión, el módem trabaja más. Ocurre en zonas rurales, espacios subterráneos, edificios de hormigón, ascensores y viviendas donde el móvil se aferra a una sola barra de cobertura.

Si estás conectado por Wi-Fi y no necesitas llamadas móviles ni SMS durante un rato, puedes usar el modo avión y volver a activar la Wi-Fi. Así apagas la radio móvil sin perder el acceso a Internet. No lo hagas si necesitas recibir llamadas normales, SMS o disponer de las funciones de emergencia de tu operador.

Aquí es donde una herramienta como runcheck resulta útil. Si el consumo con la pantalla apagada coincide con una señal débil y no con el uso de la pantalla, el problema no es una aplicación misteriosa. Es la radio.
