---
title: "¿Por qué mi móvil pierde continuamente la conexión Wi-Fi?"
description: "La versión más irritante es esta: el Wi-Fi funciona en la cocina, se corta en el dormitorio, vuelve durante diez segundos y desaparece otra vez. Nada parece estar claramente averiado. El router está encendido, la contraseña es correcta y las aplicaciones siguen quejándose de que no hay Internet."
listSummary: "red, conectividad y android"
hub: "network"
sourceNumber: 95
order: 6
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
Empieza con una pregunta: ¿también se desconectan otros dispositivos de la misma red Wi-Fi? Si la respuesta es sí, revisa primero el router o la conexión a Internet. Si solo se desconecta el móvil, el problema probablemente está en el teléfono, en el perfil de red guardado o en la forma en la que cambia de banda.

## Si se desconectan varios dispositivos, sospecha primero del router

Reinicia el router antes de intentar nada complicado. Desenchúfalo, espera 30 segundos y vuelve a conectarlo. Esto limpia estados temporales, renueva las concesiones DHCP y obliga a los dispositivos conectados a negociar de nuevo.

Los routers domésticos pueden comportarse de forma extraña después de semanas encendidos. Pueden quedarse sin memoria, conservar entradas antiguas de dispositivos o gestionar mal el roaming tras una actualización de firmware. Reiniciarlo no es una solución profunda, pero es la forma más rápida de distinguir un fallo temporal de un problema real.

Si vuelve a ocurrir, entra en la página de administración o en la aplicación del router. Comprueba si hay actualizaciones de firmware, cuántos dispositivos están conectados y cómo están configurados los canales. Los routers económicos pueden tener dificultades cuando una casa supera los 20 clientes activos: móviles, portátiles, televisores inteligentes, altavoces, cámaras, enchufes, relojes y tablets, todos cuentan.

La banda de 2,4 GHz es otra fuente habitual de problemas. Llega más lejos que la de 5 GHz, pero dispone de muchos menos canales limpios. En edificios de pisos concurridos, varios routers pueden competir en el mismo canal o en canales que se solapan. Si eliges uno manualmente, utiliza el 1, el 6 o el 11 en 2,4 GHz y selecciona el menos saturado de los tres.

## Si solo se desconecta el móvil

Olvida la red y vuelve a conectarte. En Pixel y versiones de Android parecidas, abre **Ajustes > Redes e Internet > Internet**, toca la red o el icono de engranaje y selecciona **Olvidar**. En Samsung, abre **Ajustes > Conexiones > Wi-Fi**, toca el engranaje situado junto a la red y pulsa **Olvidar**. Después, vuelve a introducir la contraseña.

Esto borra el perfil guardado. Ayuda después de cambiar el router, la contraseña o el modo WPA2/WPA3, y cuando Android intenta reutilizar datos de conexión que ya no son válidos.

Comprueba también si el móvil salta a otra red guardada. Es menos habitual de lo que parece, pero ocurre cerca de redes abiertas, extensores de cobertura, redes de invitados y antiguos puntos de acceso del trabajo o de cafeterías. Elimina las redes que ya no utilices. No necesitas un museo de todos los puntos Wi-Fi que ha conocido tu teléfono.

## Los ajustes de batería pueden hacer que parezca desconectado

Doze y el Ahorro de batería de Android pueden retrasar la actividad de red en segundo plano cuando el teléfono está inactivo. Normalmente no apagan el Wi-Fi, pero pueden hacer que las aplicaciones de mensajería, copias de seguridad, VPN o domótica se comporten como si la conexión hubiera desaparecido.

Algunos fabricantes son más agresivos que otros. Xiaomi, OPPO, vivo y algunas versiones de OnePlus pueden restringir con más fuerza la actividad en segundo plano que Pixel. Samsung dispone de Límites de uso en segundo plano y de opciones de ahorro de energía del Wi-Fi que también pueden cambiar el comportamiento del móvil cuando está inactivo.

Si los cortes ocurren con la pantalla apagada, revisa primero la aplicación afectada. Configúrala para que no tenga restricciones de batería o elimínala de las listas de aplicaciones en suspensión. No desactives todas las funciones de ahorro de forma general salvo que quieras cargar el móvil más a menudo.

## El cambio inteligente puede pasarse de listo

Los móviles Android modernos pueden cambiar del Wi-Fi a los datos móviles cuando consideran que la red inalámbrica es débil o no tiene Internet. La idea es útil. En la práctica, un Wi-Fi algo lento puede parecer inestable porque el teléfono no deja de decidir que sabe más que tú.

En Pixel, revisa **Ajustes > Redes e Internet > Conectividad adaptativa**. Algunas versiones también muestran una opción de cambio automático dentro de los ajustes de Internet. En Samsung, abre **Ajustes > Conexiones > Wi-Fi > Wi-Fi inteligente** y busca una opción para cambiar a datos móviles. Los nombres pueden variar según la versión de One UI.

Desactiva la función durante un día si el móvil abandona el Wi-Fi aunque los demás dispositivos sigan conectados. Si el problema desaparece, has encontrado la causa.

## Band steering y roaming en redes mesh

Muchos routers utilizan el mismo nombre de red para 2,4 GHz y 5 GHz. El router y el móvil deciden entonces qué banda utilizar. Esto se llama band steering. Los buenos routers lo gestionan sin que se note. Los malos empujan el móvil de una banda a otra hasta que la conexión parece rota.

Una prueba rápida consiste en separar temporalmente las bandas. Asigna nombres distintos a las redes de 2,4 GHz y 5 GHz, y conecta el móvil a una sola. Usa 2,4 GHz cuando haya distancia y paredes. Usa 5 GHz para obtener más velocidad cerca del router.

Los sistemas mesh añaden otra capa. Si el móvil se aferra a un nodo débil en vez de pasar al más cercano, notarás cortes al moverte por la casa. Las actualizaciones del firmware suelen mejorar el roaming, pero la colocación también importa. Esconder un nodo mesh detrás del televisor o dentro de un armario es buscar problemas.

## Intensidad de la señal y colocación

La señal Wi-Fi pierde fuerza con la distancia y los obstáculos. Si el móvil funciona junto al router pero se desconecta dos habitaciones más allá, probablemente no está averiado. Solo recibe una señal débil o con mucho ruido.

Como referencia aproximada, unos -50 dBm indican una señal Wi-Fi intensa, -60 dBm está bien y por debajo de -70 dBm la estabilidad puede empezar a sufrir. Con menos de -80 dBm, los cortes intermitentes no resultan sorprendentes.

Coloca el router lejos del suelo, de paredes gruesas, estanterías metálicas, acuarios y microondas. Si es posible, sitúalo cerca del centro de la vivienda. En casas grandes, un sistema mesh adecuado suele funcionar mejor que un extensor barato, porque los extensores a menudo reducen el rendimiento y añaden otro punto de roaming.

## Los ajustes de seguridad pueden afectar a un solo dispositivo

WPA3 es el estándar de seguridad Wi-Fi actual, pero los móviles antiguos y el firmware viejo de algunos routers pueden llevarse mal con una red configurada solo con WPA3. Si un único Android se desconecta de una red WPA3 mientras todo lo demás funciona, prueba el modo mixto WPA2/WPA3.

Revisa también el filtrado MAC, los controles parentales y los límites de dispositivos del router. Si utiliza una lista blanca basada en direcciones MAC, la función de MAC aleatoria de Android puede hacer que el móvil parezca un dispositivo nuevo. En una red doméstica de confianza, puedes configurar únicamente esa red para que utilice la MAC del teléfono o del dispositivo. Mantén la MAC aleatoria en las redes públicas.

## Actualizaciones de software, incluido Android 17

Las grandes actualizaciones de Android pueden introducir fallos de conexión. También pueden dejar al descubierto errores antiguos del router que ya estaban ahí. Android 17 se publicó primero para los dispositivos Pixel compatibles en junio de 2026, mientras que los demás fabricantes lo distribuyen más adelante mediante sus propias versiones. Por eso, una conversación sobre un fallo específico de Android 17 en Pixel puede no servir para un Samsung, Xiaomi o OnePlus que todavía no haya recibido su propia compilación de Android 17.

Si el Wi-Fi empezó a cortarse justo después de una actualización, haz primero las comprobaciones aburridas: reinicia el móvil, reinicia el router, instala las actualizaciones pendientes del sistema de Google Play o el parche mensual de seguridad y olvida la red. Después, restablece los ajustes de red si hace falta.

En los Pixel actuales, abre **Ajustes > Sistema > Opciones de restablecimiento**. Allí puedes usar **Restablecer Bluetooth y Wi-Fi** y, por separado, **Restablecer ajustes de red móvil**. En Samsung, la ruta oficial es **Ajustes > Administración general > Restablecer > Restablecer ajustes de red**. Estas acciones borran conexiones Wi-Fi guardadas, emparejamientos Bluetooth o ajustes móviles según la opción, así que ten a mano las contraseñas del Wi-Fi.

## Cuándo podría ser un problema de hardware

El hardware es el último sospechoso, no el primero. Pero también falla. Las caídas, el contacto con agua, el desgaste de las antenas y los daños en la placa pueden afectar al Wi-Fi aunque otras radios sigan pareciendo normales.

Prueba el móvil en otra red Wi-Fi. Después, pruébalo en Modo seguro. Si mantiene la conexión en Modo seguro, probablemente esté interfiriendo una aplicación de terceros. Las VPN, los bloqueadores de anuncios, los cortafuegos, las aplicaciones de gestión de dispositivos y los supuestos optimizadores de Wi-Fi poco fiables son sospechosos habituales.

Si el móvil se desconecta de varios routers, continúa fallando después de restablecer la red y también pierde la conexión en Modo seguro, acudir a un servicio técnico o sustituirlo se convierte en una respuesta realista.

## Respuestas rápidas

¿Por qué se corta el Wi-Fi solo cuando la pantalla está apagada? Normalmente por restricciones de batería de la aplicación, el comportamiento de una VPN o el ahorro de energía del fabricante. La radio Wi-Fi puede seguir conectada, pero la aplicación no consigue trabajar en segundo plano.

¿Puede una funda causar cortes de Wi-Fi? Una funda normal de plástico, silicona o cuero apenas influye. Las fundas metálicas o las placas magnéticas pueden reducir la señal, sobre todo cuando ya es débil.

¿Por qué falla solo una red Wi-Fi? Eso apunta a la configuración del router o a un perfil guardado dañado. Olvida la red, vuelve a conectarte y revisa después el band steering, el modo WPA, el filtrado MAC y el firmware del router.
