---
title: "Por qué el móvil pierde batería cuando no lo usas"
description: "El móvil nunca está completamente inactivo, salvo que esté apagado. Que la pantalla esté apagada solo significa eso, que la pantalla no está encendida. El módem, el Wi-Fi, las notificaciones, las alarmas, la sincronización de cuentas, los sensores y los servicios de seguridad pueden seguir activándolo."
listSummary: "El móvil nunca está completamente inactivo, salvo que esté apagado."
hub: "battery"
sourceNumber: 26
order: 16
subgroup: "Drain"
tags: ["bateria","consumo","solucion-de-problemas","android","rendimiento"]
locale: "es"
draft: false
---
Eso es normal. Un consumo excesivo en reposo no lo es.

## Qué consumo en reposo puede considerarse normal

En un móvil Android en buen estado, conectado por Wi-Fi y con una señal razonable, es normal perder aproximadamente entre un 2 % y un 6 % durante una noche de ocho horas. Un móvil con muy poca actividad puede perder menos. Si usa datos móviles, tiene mala cobertura, muchas cuentas, un reloj inteligente y la pantalla siempre activa, puede perder más.

Los porcentajes también pueden engañar un poco. Una batería nueva de 5000 mAh y otra desgastada que ya almacena mucha menos carga pueden consumir los mismos mAh durante la noche, pero la batería deteriorada mostrará una caída porcentual mayor. Por eso, en un móvil antiguo, una actividad en segundo plano normal puede empezar a parecer alarmante de repente.

El calor también influye. Google advierte de que un móvil caliente consume batería más deprisa aunque no se esté usando, y ese consumo también puede dañar la batería con el tiempo. No dejes el móvil debajo de una almohada, sobre un cargador inalámbrico caliente o expuesto al sol, y después uses esa noche para valorar el consumo en reposo.

Mi umbral práctico es sencillo: menos de un 5 % durante la noche está bien, entre un 5 % y un 10 % merece seguimiento, y más de un 10 % de forma repetida significa que hay algo que conviene investigar.

## Por qué Android no entra en reposo por completo

Android utiliza Doze y App Standby para reducir la actividad cuando el dispositivo está inactivo. En Doze, Android aplaza tareas y sincronizaciones, limita el acceso a la red y concede a las aplicaciones ventanas de mantenimiento en lugar de permitir que cada una active el móvil cuando quiera.

Hay excepciones. Las notificaciones push de alta prioridad pueden activar brevemente una aplicación. Algunos servicios en primer plano están permitidos porque el usuario espera que sigan funcionando, como la navegación, la música o una aplicación de seguimiento de salud. Las alarmas tienen que sonar. Además, un móvil que se está moviendo puede tardar más en entrar en el estado de reposo más profundo que otro que permanece quieto sobre una mesa.

Por eso el consumo en reposo es difícil de interpretar. Android intenta equilibrar la autonomía con la necesidad de que el móvil siga localizable y conectado.

## Las causas más habituales del consumo en reposo

Lo primero que debes comprobar es la cobertura. La ayuda de Samsung sobre la batería indica que una conexión de red inestable y una señal débil pueden aumentar el consumo. Si en el dormitorio hay mala cobertura, el móvil puede pasar toda la noche intentando mantener una conexión deficiente.

La pantalla siempre activa es la causa visible. Puede gastar poco por hora, pero funciona durante muchas horas. En Samsung, configúrala como **Pulsar para mostrar**, **Mostrar según planificación** o **Mostrar con nuevas notificaciones**. En Pixel, desactiva **Pantalla siempre activa** en **Ajustes > Pantalla y ajustes táctiles**.

Las aplicaciones en segundo plano forman la categoría más amplia. Las redes sociales, el correo, el almacenamiento en la nube, la mensajería, las aplicaciones de compras, los widgets del tiempo y las aplicaciones de actividad física pueden activar el móvil. Algunas lo necesitan. Muchas no.

La ubicación es una causa menos evidente. Abre **Ajustes > Ubicación > Permisos de ubicación de aplicaciones** y revisa las aplicaciones que aparecen en **Permitidas siempre**. Si una aplicación del tiempo o una red social no necesita tu ubicación mientras duermes, cámbiala a **Permitir solo mientras se usa la aplicación**.

Los errores de sincronización son la causa aburrida. Una cuenta antigua de Google, del trabajo o de correo electrónico que ya no puede autenticarse puede seguir intentándolo. Abre el apartado de cuentas de Ajustes, que según el móvil puede llamarse **Contraseñas y cuentas** o **Cuentas**, y busca avisos.

Los accesorios Bluetooth también pasan desapercibidos con facilidad. Los relojes y las pulseras de actividad pueden mantener ocupado el móvil con intentos de reconexión, sincronización de datos de salud o duplicación de notificaciones. Si el consumo empezó después de vincular un accesorio nuevo, prueba una noche con Bluetooth desactivado.

## La prueba limpia de consumo en reposo

Carga el móvil al menos hasta el 80 %. Anota el porcentaje exacto y la hora. Activa el modo avión. Si el Wi-Fi o Bluetooth siguen encendidos, desactívalos también de forma manual. Deja el móvil sin tocar entre cuatro y seis horas, con la pantalla apagada.

Si pierde menos de un 1 % o un 2 %, probablemente la batería y el sistema básico estén bien. El consumo habitual procederá de la red, la sincronización, la ubicación, Bluetooth o las aplicaciones en segundo plano.

Si sigue perdiendo mucha carga, inicia el móvil en Modo seguro y repite la prueba. El Modo seguro desactiva las aplicaciones descargadas. Si así desaparece el consumo, una de tus aplicaciones es la responsable. Empieza por las instaladas o actualizadas recientemente. Esta prueba resulta especialmente útil después de una actualización importante, como Android 17 en un Pixel, porque una aplicación que todavía no sea compatible puede parecer un problema del sistema.

Si ni el modo avión ni el Modo seguro ayudan, comprueba el estado de la batería. En Pixel 8a y modelos posteriores, **Ajustes > Batería > Estado de la batería** muestra su estado y capacidad. En Samsung, utiliza **Samsung Members > Asistencia > Diagnóstico del teléfono > Estado de la batería**.

## Cómo reducir el consumo en reposo sin inutilizar el móvil

No hace falta convertir el smartphone en un despertador sin funciones. Sé selectivo.

Pon en suspensión las aplicaciones que apenas utilizas. En los Galaxy recientes encontrarás **Aplicaciones en suspensión** y **Aplicaciones en suspensión profunda** en **Ajustes > Batería > Límites de uso en segundo plano**. Las aplicaciones en suspensión profunda solo funcionan cuando las abres, algo perfecto para juegos y aplicaciones de compras.

Restringe el uso de batería en segundo plano de las aplicaciones que no necesiten actualizaciones inmediatas. En Android con una interfaz similar a la de Pixel, ve a **Ajustes > Aplicaciones > [aplicación] > Uso de batería de la aplicación**. Mantén optimizadas las aplicaciones de mensajería, alarmas, calendario y seguridad, en lugar de restringirlas por completo, salvo que sepas exactamente qué estás haciendo.

Desactiva los datos en segundo plano de las aplicaciones que no los necesiten. En algunos móviles, esta opción aparece en **Ajustes > Aplicaciones > [aplicación] > Datos móviles y Wi-Fi > Datos en segundo plano**. Una aplicación bancaria o un juego no tienen por qué actualizarse mientras duermes.

Reduce las notificaciones. Las notificaciones de marketing son ruido que también consume batería. Desactívalas en **Ajustes > Notificaciones > Notificaciones de aplicaciones** o dentro de la propia aplicación.

Usa Ahorro de batería por la noche si no quieres revisar cada ajuste. Google indica que Ahorro de batería limita o desactiva parte de la actividad en segundo plano y puede retrasar algunas funciones, conexiones de red y aplicaciones. Ese es el coste. Durante las horas de sueño, suele ser aceptable.

Elimina las cuentas que ya no utilizas. Google lo incluye entre sus recomendaciones para ahorrar batería, y es una de las pocas medidas que además deja el móvil más ordenado.

## Una nota sobre la búsqueda por Wi-Fi y Bluetooth

Android puede usar Wi-Fi, Bluetooth y datos de sensores para mejorar la precisión de la ubicación. Es útil para los mapas y las funciones de proximidad, pero también genera actividad en segundo plano. Desde Android 12, puedes gestionar por separado la ubicación precisa de cada aplicación. Es un mejor primer paso que desactivar todo de forma global.

Si aún necesitas ser más estricto, busca en **Ajustes > Ubicación > Servicios de ubicación** las opciones relacionadas con la precisión de la ubicación, la búsqueda por Wi-Fi o la búsqueda por Bluetooth. Los nombres cambian según la marca.

No desactives funciones que necesitas solo porque lo diga un artículo sobre baterías. Si Find Hub, los sitios de confianza, el desbloqueo mediante reloj o la ubicación compartida con la familia son importantes para ti, déjalos activados y busca el consumo real en otro sitio.

## Cuándo merece la pena acudir a un servicio técnico

Un móvil que pierde más de un 10 % durante la noche con la conectividad habitual necesita diagnóstico. Un móvil que pierde más de un 10 % durante la noche en modo avión y Modo seguro es un caso distinto. Eso apunta al desgaste de la batería, un fallo de hardware o un problema de bajo nivel del sistema.

Antes de llevarlo a reparar, actualiza el sistema y las aplicaciones, reinícialo y revisa los diagnósticos de batería. Si la herramienta muestra **Reducida**, **Débil** o **Mala**, deja de buscar un ajuste mágico. La batería ya te está indicando lo que ha ocurrido.

El consumo en reposo debería ser aburrido. Cuando no lo es, aísla primero la red, después las aplicaciones y, por último, comprueba el estado de la batería.
