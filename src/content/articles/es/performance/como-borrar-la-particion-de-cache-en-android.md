---
title: "Cómo borrar la partición de caché en Android"
description: "Qué hace el borrado de la partición de caché de Android, cómo probarlo en móviles Samsung y qué hacer cuando la opción no aparece."
listSummary: "rendimiento, velocidad y android"
hub: "performance"
sourceNumber: 71
order: 8
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
Estás mirando Android Recovery, moviéndote con los botones de volumen como si aún estuviéramos en 2012, y buscando **Wipe cache partition**. En algunos móviles aparece. En otros ha desaparecido. Y en unos cuantos nunca estuvo disponible.

Por eso este tema es más confuso de lo que admiten muchas guías. Borrar la partición de caché todavía puede servir en determinados móviles Samsung y dispositivos Android antiguos, pero ya no es una función universal de Android.

## Qué hace realmente el borrado de la partición de caché

Borrar la partición de caché elimina archivos temporales de caché del sistema. No borra fotos, mensajes, aplicaciones, cuentas, descargas ni ajustes. Android vuelve a crear la caché después del siguiente arranque.

Piensa en ello como una limpieza de archivos temporales de trabajo del sistema, no como un borrado del móvil.

Puede ayudar cuando el comportamiento general del sistema se vuelve extraño después de una actualización: transiciones con tirones, varias aplicaciones que se cierran, un consumo de batería que apareció de repente o ajustes que parecen haberse quedado bloqueados. Si solo falla una aplicación, no empieces por aquí. Borra primero la caché de esa aplicación desde **Ajustes > Aplicaciones > [nombre de la aplicación] > Almacenamiento > Borrar caché**.

El borrado de la partición de caché está pensado para problemas más amplios.

## Por qué la opción no aparece en muchos móviles

Los sistemas modernos de actualización de Android ya no dependen de la antigua partición de caché como lo hacían los móviles anteriores. Las actualizaciones A/B permiten instalar una actualización OTA en una ranura inactiva mientras el sistema actual sigue funcionando. La documentación de AOSP también señala que los dispositivos A/B ya no necesitan la partición de caché para almacenar los paquetes de actualización OTA.

Eso no significa que hayan desaparecido todos los archivos relacionados con la caché. Significa que la antigua opción **Wipe cache partition** del modo Recovery ha perdido importancia.

Los Pixel son el ejemplo más claro. Todavía puedes iniciar un Pixel en modo Recovery, pero no debes esperar encontrar la clásica opción **Wipe cache partition** en los modelos actuales. Recovery se utiliza sobre todo para restablecer el dispositivo de fábrica, instalar actualizaciones mediante sideload y realizar reparaciones de bajo nivel.

Samsung mantuvo esta opción durante más tiempo que muchos otros fabricantes. Por eso buena parte de quienes buscan esta función en realidad están preguntando por móviles Galaxy.

## La situación de Samsung en 2026

La página de soporte de Samsung en Reino Unido todavía explica cómo usar **Clear the cache partition** desde Recovery: apagar el móvil, abrir Recovery con la combinación de botones, seleccionar **Wipe cache partition**, confirmar y reiniciar.

Al mismo tiempo, una actualización de Samsung de febrero de 2026 parece haber retirado varias herramientas de Recovery, incluida **Wipe cache partition**, en algunos modelos Galaxy. Android Authority y GalaxyClub informaron primero del cambio en la serie Galaxy S25 y en plegables más recientes, como el Galaxy Z Fold 7. Según esos informes, el menú reducido solo muestra **Reboot system now**, **Wipe data/factory reset** y **Power off** en las versiones afectadas.

Samsung no ha publicado una explicación global y clara que abarque todos los modelos y regiones. Así que el consejo prudente es este: en los Galaxy de 2026, considera **Wipe cache partition** una función que depende del firmware. Si aparece en el menú Recovery, puedes usarla. Si no aparece, eso no significa necesariamente que el móvil esté averiado.

## Antes de entrar en modo Recovery

Prueba primero lo sencillo.

Reinicia el móvil una vez. Actualiza las aplicaciones. Comprueba el almacenamiento. En un Galaxy, usa **Optimizar ahora** dentro de **Cuidado del dispositivo** o **Mantenimiento del dispositivo**, según la versión de One UI. Borra la caché de la aplicación concreta que está fallando.

Si todo el móvil se comporta de forma extraña después de una actualización importante y ya has esperado uno o dos días, entonces tiene sentido probar Recovery.

Aun así, conviene tener una copia de seguridad. Borrar la caché no debería eliminar datos personales, pero Recovery también contiene **Wipe data/factory reset**, y esa opción sí los borra. No avances deprisa por los menús cuando estés cansado.

## Cómo abrir el modo Recovery en un Samsung Galaxy

La combinación exacta de botones depende del modelo.

En muchos Galaxy recientes sin botón de inicio físico, apaga el móvil. Conéctalo a un ordenador u otro dispositivo USB-C si Recovery no aparece sin cable. Después mantén pulsados **subir volumen + tecla lateral/encendido** hasta que aparezca el logotipo de Samsung, suelta los botones y espera a que se abra el menú Recovery.

En Galaxy antiguos con un botón Bixby independiente, la combinación puede ser **subir volumen + Bixby + encendido**.

En modelos más antiguos con botón de inicio físico, usa **subir volumen + inicio + encendido**.

Cuando se abra Recovery, utiliza los botones de volumen para desplazarte y el botón de encendido para seleccionar.

## Cómo borrar la partición de caché si la opción existe

Selecciona **Wipe cache partition**.

Confirma con **Yes**.

Espera a que termine. Normalmente tarda menos de un minuto.

Selecciona **Reboot system now**.

El primer arranque después del borrado puede tardar más de lo habitual porque Android tiene que reconstruir archivos temporales. Es normal. Dale tiempo antes de valorar el rendimiento.

## Qué hacer si la opción no aparece

No restablezcas el móvil de fábrica solo porque la opción de caché haya desaparecido. Es una medida mucho más drástica.

Prueba estas alternativas:

- Borra la caché de la aplicación que da problemas desde **Ajustes > Aplicaciones > [nombre de la aplicación] > Almacenamiento > Borrar caché**.
- En Samsung, abre **Cuidado del dispositivo** o **Mantenimiento del dispositivo** y usa **Optimizar ahora**, según la versión de One UI.
- Libera almacenamiento hasta tener disponible al menos un 10 %, aunque un 15 % es un objetivo mejor.
- Inicia el móvil en Modo seguro para comprobar si una aplicación de terceros está causando la lentitud o los cierres.
- Busca una actualización del sistema más reciente si el problema empezó justo después de una versión importante de Android.

Si tienes un Pixel, OnePlus, Xiaomi, Motorola u otra marca y Recovery no muestra **Wipe cache partition**, da por hecho que el fabricante gestiona esta parte de otra manera. No busques trucos ocultos con ADB a menos que sepas exactamente qué hacen.

## ¿Sirve realmente borrar la partición de caché?

A veces. Esa es la respuesta sincera.

Puede corregir datos temporales del sistema obsoletos o dañados después de una actualización. También puede no cambiar absolutamente nada. Si el problema real es poco almacenamiento libre, una aplicación demasiado pesada, una batería degradada, limitación térmica o un almacenamiento antiguo y lento, borrar la caché no hará gran cosa.

Sigo considerándolo un paso razonable y de bajo riesgo en los Galaxy que muestran la opción. Es rápido, no borra los datos personales y puede solucionar comportamientos extraños después de una actualización. Pero no es un botón mágico de rendimiento, y no merece la pena obsesionarse si tu móvil ya no lo ofrece.

## Qué no va a solucionar

No volverá a una versión anterior de Android.

No eliminará una aplicación problemática.

No reparará un almacenamiento flash que está fallando.

No hará que un móvil con 4 GB de RAM se comporte como un buque insignia nuevo.

Si el móvil sigue lento después de borrar la caché, pasa a diagnósticos reales: uso del almacenamiento, temperatura de la batería, comportamiento de las aplicaciones, Modo seguro y estado de las actualizaciones. Ahí suele estar la respuesta.
