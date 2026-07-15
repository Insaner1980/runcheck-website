---
title: "¿Qué son las actualizaciones del sistema de Google Play?"
description: "Abre la pantalla de actualizaciones de Android y probablemente verás dos fechas que no coinciden. Una corresponde al nivel del parche de seguridad de Android. La otra muestra la fecha de una actualización modular de Google."
listSummary: "Abre la pantalla de actualizaciones de Android y probablemente verás dos fechas que no coinciden."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","actualizaciones","seguridad","software","guia"]
locale: "es"
draft: false
---
Parece un error. Normalmente no lo es.

Son dos canales de actualización distintos. El nivel del parche de seguridad llega a través del fabricante del móvil, como Google, Samsung, Xiaomi, OnePlus o Motorola. La otra fecha procede del sistema modular de actualizaciones de Android de Google en los dispositivos compatibles.

## La versión breve

Estas actualizaciones Mainline corrigen partes concretas de Android sin esperar a una actualización completa del sistema enviada por el fabricante.

No sustituyen a las actualizaciones normales de Android. No cambian tu móvil de Android 16 a Android 17. Tampoco corrigen todas las vulnerabilidades. Pero permiten que Google actualice algunos componentes del sistema operativo mediante la infraestructura de Google Play.

Esto importa porque las actualizaciones de Android recorren una cadena larga. Google publica el código. Los fabricantes de chips y dispositivos lo integran. Los operadores pueden probarlo. Después, la actualización llega al móvil. El canal modular evita parte de esa cadena para componentes concretos.

## Cómo funciona Project Mainline

La tecnología se llama Project Mainline, también denominada componentes modulares del sistema en la documentación de Android. Se introdujo con Android 10.

Mainline separa determinadas partes de Android en módulos. Algunos usan el formato APK y se parecen más a los paquetes de aplicaciones. Otros usan APEX, pueden cargarse antes durante el arranque y se ocupan de componentes más profundos del sistema.

Lo importante es que la instalación es atómica. Si un conjunto de módulos no puede instalarse correctamente, Android revierte la operación en lugar de dejar el móvil a medio actualizar.

Bien. En este caso, que sea aburrido es una ventaja.

## Qué componentes se actualizan

El conjunto exacto de módulos depende de la versión de Android y de la compilación del dispositivo, así que no esperes que todos los móviles Android tengan la misma lista. Las versiones más recientes suelen incluir más componentes modulares que Android 10.

Entre los ejemplos están componentes de red, resolución DNS, gestión multimedia, permisos, Conscrypt para TLS, portales cautivos, la interfaz de documentos, el uso compartido de conexión y partes de Android Runtime en las versiones compatibles.

No son piezas decorativas. Un fallo del framework multimedia puede afectar a muchas aplicaciones. Un error en un componente TLS puede comprometer conexiones cifradas de todo el dispositivo. Actualizar estas partes mediante un canal modular puede llevar las correcciones a muchos más móviles que esperar a que cada fabricante publique un paquete OTA completo.

## Cómo comprobar la fecha

En muchos móviles Android recientes, abre Ajustes y busca Actualización del sistema de Google Play dentro de la sección de Seguridad y privacidad o de actualizaciones del sistema.

En Samsung, la ubicación cambia según la versión de One UI. Puede aparecer en la sección de actualizaciones de Seguridad y privacidad o dentro de la información de software del teléfono. Si no la encuentras, usa la búsqueda de Ajustes y escribe el nombre de la actualización.

Puedes tocar la entrada para comprobar si hay una actualización. Si Android pide reiniciar después, hazlo. Algunas actualizaciones basadas en APEX no entran en vigor hasta que el móvil se reinicia.

## Por qué la fecha puede parecer antigua

La fecha que aparece en pantalla no significa simplemente "la última vez que se corrigió algo". Puede representar la versión de un paquete de módulos, y no todas las actualizaciones cambian la fecha visible de una forma evidente.

Por eso, la fecha del sistema de Google Play puede quedarse por detrás del parche de seguridad de Android sin que el móvil esté averiado. Yo solo me preocuparía si ambas fechas fueran antiguas, o si el dispositivo llevara meses sin instalar ninguna actualización del sistema y además hubiera desaparecido de la lista de soporte del fabricante.

La parte frustrante es que Android no ofrece a la mayoría de usuarios un registro claro de cambios módulo por módulo. Normalmente solo ves una fecha y un botón para reiniciar.

## Qué móviles las reciben

Este canal está ligado al sistema modular de Android y a los servicios de Google. En la práctica, cubre la mayoría de móviles Android certificados por Google que usan Android 10 o una versión posterior.

Los móviles sin servicios de Google no reciben el mismo canal de actualizaciones distribuido por Google. Algunos socios de Android pueden actualizar módulos Mainline mediante su propio mecanismo OTA, pero no es lo mismo que la distribución de Google en un móvil certificado.

Las versiones antiguas de Android también tienen menos componentes modulares. Un móvil con Android 10 puede beneficiarse de Mainline, pero no dispone de la misma cobertura de módulos que un dispositivo con Android 16 o Android 17.

## Qué no pueden corregir

Mainline no puede parchearlo todo.

No corrige el kernel del dispositivo salvo que una solución concreta llegue mediante una vía modular compatible. No actualiza el firmware cerrado del módem, la cámara, la GPU o el Wi-Fi. Tampoco repara aplicaciones del sistema específicas del fabricante ni su código de proveedor. Y no amplía el periodo oficial de soporte del dispositivo.

Sí, el canal modular ayuda. No, no vuelve completamente seguro un móvil abandonado.

## Actualizaciones del sistema de Google Play frente a Google Play Services

Los nombres se parecen demasiado y eso causa confusión.

Google Play Services es un framework de nivel de aplicación. Las aplicaciones lo usan para el inicio de sesión, las API de ubicación, las notificaciones, funciones de cuenta, comprobaciones de seguridad y otros servicios de Google. Se actualiza como una aplicación.

Las actualizaciones del sistema se ocupan de módulos del sistema operativo. Llegan a capas más profundas de Android.

Ambos proceden de Google. Ambos pueden actualizarse sin una OTA completa del fabricante. No son la misma capa.

## Qué hacer con esta información

Mantén al día los dos canales. Instala las actualizaciones normales de Android que publique el fabricante y comprueba de vez en cuando la actualización modular.

Si tu móvil sigue recibiendo parches del fabricante, una fecha del sistema de Google Play algo más antigua suele ser solo ruido. Si ha dejado de recibir ambos tipos de actualización, conviene empezar a tratarlo como un dispositivo que está dejando de ser seguro para el uso diario.
