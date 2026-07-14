---
title: "Cómo solucionar problemas de conexión Wi-Fi en Android"
description: "Soluciones paso a paso para los problemas de Wi-Fi en Android, incluidos los cortes de conexión, una red lenta, los fallos con redes guardadas, los ajustes de DNS, las comprobaciones del router y las incidencias tras actualizar a Android 17."
listSummary: "rendimiento, velocidad y android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
¿Qué deberías probar primero cuando falla el Wi-Fi en Android? No empieces con un restablecimiento de fábrica ni pierdas media hora cambiando ajustes del router antes de probar lo más sencillo. La mayoría de los problemas de Wi-Fi encajan en uno de estos tres casos: el móvil no se conecta, se conecta pero pierde la conexión o sigue conectado aunque Internet parece no funcionar.

Prueba estas soluciones en este orden. Ahorrarás tiempo.

## 1. Desactiva y activa el Wi-Fi y después el modo avión

Desliza hacia abajo para abrir los Ajustes rápidos y desactiva el Wi-Fi. Espera cinco segundos y vuelve a activarlo.

Si no funciona, activa el modo avión, espera diez segundos y desactívalo. Así se reinician las radios inalámbricas del móvil sin tener que reiniciar todo el dispositivo. En Pixel y en versiones de Android cercanas a la estándar también encontrarás el modo avión en Ajustes > Redes e Internet. En Samsung, está dentro de Ajustes > Conexiones.

Es una solución pequeña, pero resuelve una cantidad sorprendente de fallos temporales del estado de la radio.

## 2. Olvida la red y vuelve a conectarte

Un perfil Wi-Fi guardado puede quedar desactualizado después de instalar nuevo firmware en el router, cambiar la contraseña o el modo de seguridad, o reconfigurar un sistema mesh.

En Pixel y en muchas versiones similares a Android 17, ve a Ajustes > Redes e Internet > Internet. Toca el icono de ajustes junto a la red y después Olvidar. En Samsung, abre Ajustes > Conexiones > Wi-Fi, toca el icono de ajustes junto a la red y selecciona Olvidar.

Vuelve a conectarte seleccionando la red e introduciendo la contraseña. Si el router tiene una red principal y otra para invitados, comprueba que estás entrando en la correcta.

## 3. Reinicia el móvil y el router

Reinicia el móvil. Después, reinicia el router desconectándolo de la corriente durante 30 segundos.

Haz las dos cosas, no solo una. El móvil puede haberse quedado en un estado de red temporal incorrecto y el router puede conservar una concesión DHCP obsoleta o una tabla de conexiones saturada. Reiniciar ambos extremos obliga a negociar de nuevo la conexión.

Si varios dispositivos tienen problemas con el Wi-Fi, reiniciar el router es más importante que reiniciar el móvil.

## 4. Comprueba si falla el Wi-Fi o la conexión a Internet

Android puede estar conectado al Wi-Fi aunque la conexión a Internet que hay detrás del router esté caída. El icono de Wi-Fi solo indica que el móvil tiene un enlace inalámbrico local.

Prueba otro dispositivo en la misma red. Si todos están lentos o sin conexión, revisa el módem, el router y el proveedor de Internet. Si solo falla el móvil Android, continúa con las soluciones del teléfono.

También puedes intentar abrir la página de administración del router. Muchos routers usan 192.168.1.1 o 192.168.0.1. Si esa página carga pero las webs no, el Wi-Fi funciona y el problema está en la conexión de salida, el DNS o la configuración del router.

## 5. Actualiza Android, los componentes del sistema de Google Play y el firmware del router

En Pixel y otros móviles con Android similar al estándar, busca la actualización de software en Ajustes > Sistema e instala todo lo que esté pendiente. En Samsung, usa Ajustes > Actualización de software > Descargar e instalar.

En los Pixel también conviene abrir Seguridad y privacidad y buscar las actualizaciones del sistema de Google Play. El texto y la ubicación exactos pueden cambiar, pero la idea es la misma: importan tanto el firmware del móvil como los componentes del sistema.

Es fácil olvidarse del firmware del router. Abre su aplicación o panel de administración y busca actualizaciones de firmware, sistema o administración. Los fabricantes corrigen con frecuencia errores de estabilidad Wi-Fi, pero muchos routers no se actualizan solos de forma fiable.

## 6. Desactiva el cambio automático de Wi-Fi a datos móviles

Si el móvil abandona el Wi-Fi sin motivo aunque el router funciona, puede deberse al cambio automático de red.

En Pixel, revisa Ajustes > Redes e Internet > Conectividad adaptativa. En Samsung, abre los ajustes de Wi-Fi, entra en Wi-Fi inteligente y desactiva temporalmente la opción que cambia a datos móviles cuando la conexión Wi-Fi parece inestable.

Déjala desactivada durante un día. Si el Wi-Fi se estabiliza, la función estaba reaccionando con demasiada agresividad ante una red que consideraba débil o de baja calidad.

## 7. Comprueba si usas 2,4 GHz o 5 GHz

La banda de 2,4 GHz ofrece más alcance y atraviesa mejor las paredes. La de 5 GHz es más rápida cerca del router, pero pierde señal antes al cruzar obstáculos. Un móvil conectado a 5 GHz puede funcionar perfectamente en la habitación contigua y empezar a fallar en el otro extremo de la vivienda.

Si el router combina ambas bandas bajo el mismo nombre de red, sepáralas temporalmente con nombres como HomeWiFi-2G y HomeWiFi-5G. Conecta el móvil a 2,4 GHz si necesitas alcance o a 5 GHz si priorizas la velocidad.

Normalmente puedes ver la banda actual abriendo los detalles de la red Wi-Fi conectada. Android puede mostrar la frecuencia o la velocidad del enlace. Samsung ofrece datos parecidos en la pantalla de ajustes de la red Wi-Fi.

## 8. Revisa el DNS privado antes de cambiar a un DNS estático

Un problema de DNS puede hacer que el Wi-Fi parezca roto. El móvil indica que está conectado, algunas aplicaciones de mensajería funcionan a medias, pero las páginas web se quedan cargando o no resuelven las direcciones.

En Android 9 y versiones posteriores, ve a Ajustes > Redes e Internet > DNS privado. Si tienes configurado un proveedor personalizado y el Wi-Fi falla, selecciona temporalmente Automático o Desactivado y vuelve a probar.

Puedes usar proveedores como `dns.google` o `one.one.one.one`, pero escribe el nombre exactamente. Un nombre de host incorrecto en DNS privado puede impedir la resolución de nombres tanto por Wi-Fi como por datos móviles.

Evita cambiar una red Wi-Fi de DHCP a configuración estática salvo que conozcas la dirección IP, la puerta de enlace y los valores de subred correctos. Un DNS estático puede ayudar en casos concretos, pero introducir mal los datos IP crea un problema nuevo que parece todavía peor que el original.

## 9. Restablece los ajustes de red

Usa esta opción cuando las soluciones individuales no hayan funcionado. El restablecimiento de red borra los ajustes de Wi-Fi, Bluetooth y red móvil sin eliminar fotos, aplicaciones ni archivos.

En Pixel y Android similar al estándar, abre Ajustes > Sistema > Opciones de restablecimiento y elige la opción correspondiente a Wi-Fi y Bluetooth o a la red móvil, según lo que muestre tu versión.

En Samsung, ve a Ajustes > Administración general > Restablecer > Restablecer ajustes de red.

En Xiaomi y OnePlus, la ruta cambia según la versión. Usa el buscador de Ajustes y busca `restablecer red`.

Tendrás que volver a conectarte a las redes Wi-Fi y vincular de nuevo los dispositivos Bluetooth.

## 10. Comprueba la fecha y la hora

Una fecha o una hora incorrectas pueden romper las comprobaciones de certificados, los portales cautivos y algunos procesos de autenticación. Parece demasiado simple, pero ocurre después de viajar, agotar por completo la batería, cambiar manualmente la zona horaria o tener problemas durante la configuración del dispositivo.

Busca Fecha y hora en Ajustes y activa la hora y la zona horaria automáticas. En Samsung, está en Ajustes > Administración general > Fecha y hora.

## 11. Revisa la aleatorización de la dirección MAC en redes de confianza

Android 10 y las versiones posteriores usan direcciones MAC aleatorias para mejorar la privacidad en Wi-Fi. Es una buena medida en redes públicas. En casa o en el trabajo, puede confundir a routers que usan filtrado MAC, direcciones IP reservadas, controles parentales o límites de dispositivos.

Abre los detalles de la red Wi-Fi y busca las opciones de privacidad o de dirección MAC. Si una red doméstica de confianza rechaza continuamente el móvil, prueba la dirección MAC del dispositivo solo para esa red. Mantén la dirección MAC aleatoria en las demás.

## 12. Corrige las causas relacionadas con el router

Si fallan varios dispositivos, céntrate en el router.

En 2,4 GHz, usa los canales 1, 6 u 11 y elige el menos saturado. Evita colocar el router detrás del televisor, dentro de un armario, junto a un microondas, cerca de estanterías metálicas o directamente en el suelo.

Si el router usa band steering, prueba a desactivarlo o separa las redes de 2,4 y 5 GHz. Si utiliza solo WPA3 y un móvil antiguo tiene problemas, prueba el modo mixto WPA2/WPA3. Si existe un límite de dispositivos, amplíalo o elimina equipos antiguos.

En viviendas grandes, un sistema mesh suele funcionar mejor que un repetidor barato. Los repetidores pueden servir, pero a menudo reducen la velocidad y provocan comportamientos extraños al cambiar de punto de acceso.

## 13. Después de Android 17 u otra actualización importante

Google publicó Android 17 el 16 de junio de 2026 para la mayoría de los Pixel compatibles. Los demás fabricantes siguen sus propios calendarios. Si el Wi-Fi empezó a fallar justo después de actualizar, no des por hecho que el router se ha estropeado de repente.

Instala cualquier parche de seguridad posterior, actualiza desde Play Store las aplicaciones relacionadas con el operador y la conectividad, reinicia el móvil y el router, y olvida la red para volver a conectarte. Si el fallo está extendido en tu modelo y compilación concretos, es posible que la solución real llegue en un parche mensual.

Los consejos antiguos suelen recomendar borrar la partición de caché del sistema. Yo no empezaría por ahí en un móvil Android moderno. Algunos modelos Samsung todavía muestran opciones de caché en el modo de recuperación, pero muchos dispositivos recientes ya no usan ese método de una forma en la que se pueda confiar como solución general.

## 14. Prueba el modo seguro

El modo seguro inicia Android sin la mayoría de las aplicaciones de terceros. Si el Wi-Fi funciona con normalidad en ese modo, alguna aplicación instalada está interfiriendo.

Las sospechosas habituales son las aplicaciones VPN, los cortafuegos, los bloqueadores de anuncios, las herramientas de gestión del dispositivo y las supuestas aplicaciones para «potenciar el Wi-Fi». Desinstala o desactiva primero las aplicaciones de red instaladas más recientemente.

## Cuándo plantearse una reparación

Si el móvil pierde el Wi-Fi con varios routers, sigue fallando después de restablecer la red y también falla en modo seguro mientras otros dispositivos funcionan bien, empieza a ser probable que exista un problema de hardware. Los daños en la antena y los fallos del chip Wi-Fi no son habituales, pero tampoco son raros después de una caída o de contacto con agua.

En ese punto, haz un restablecimiento de fábrica solo después de crear una copia de seguridad. Si tampoco ayuda, la reparación es el siguiente paso razonable.

## Respuestas rápidas

¿Deberías desactivar el Wi-Fi al salir de casa? Normalmente no. Android gestiona el escaneo con bastante eficiencia, y mantenerlo activo ayuda a conectarse a redes conocidas y a mejorar la precisión de la ubicación.

¿Puede una funda interferir con el Wi-Fi? Una funda normal no. Las fundas metálicas, las fundas-batería gruesas o las placas magnéticas pueden empeorar la recepción cuando la señal ya es débil.

¿Cómo se comprueba la intensidad de la señal Wi-Fi en dBm? Algunas versiones de Android la muestran en los detalles de la red. Si la tuya no lo hace, una aplicación de análisis Wi-Fi puede enseñarla. Entre -30 y -50 dBm es excelente, entre -50 y -70 dBm va de aceptable a buena, y por debajo de -70 dBm la conexión puede volverse inestable según las interferencias.

runcheck registra la calidad de la señal Wi-Fi a lo largo del tiempo en la pantalla de detalles de Red, junto con datos como la banda de frecuencia, la velocidad del enlace y el historial de señal cuando Android los proporciona.
