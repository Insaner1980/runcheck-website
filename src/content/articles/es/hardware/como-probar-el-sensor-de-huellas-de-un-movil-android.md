---
title: "Cómo probar el sensor de huellas de un móvil Android"
description: "Cómo comprobar si funciona el sensor de huellas de un móvil Android mediante diagnósticos integrados, códigos de marcación, herramientas de Pixel, Samsung Members, Xiaomi CIT y pruebas manuales sencillas."
listSummary: "diagnostico, sensores y android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostico","sensores","android","hardware","guia"]
locale: "es"
draft: false
---
¿Está roto el sensor de huellas o simplemente le molesta el protector de pantalla? Parece una broma, pero es la primera pregunta que conviene hacerse.

Los fallos de huella suelen tener causas bastante corrientes. La piel seca, la humedad, un protector barato de cristal templado, un registro defectuoso o una actualización de software a medio terminar pueden hacer que un sensor en buen estado parezca averiado. El hardware también puede fallar, sobre todo después de una caída o una reparación de pantalla, pero no empieces por esa explicación.

## Comprobación rápida: desbloquea diez veces

Registra una huella, limpia la zona del sensor, sécate el dedo e intenta desbloquear el móvil diez veces seguidas.

En un sensor capacitivo trasero o lateral, conseguir 8 o 9 desbloqueos de 10 suele indicar que el hardware funciona correctamente. Si falla una o dos veces, lo más probable es que el problema sea la colocación del dedo, la suciedad, el estado de la piel o el software.

Con un sensor integrado en la pantalla, prepara la prueba con más cuidado y acepta algo más de margen en el resultado. Los sensores ópticos y ultrasónicos dependen de la superficie de la pantalla, por lo que un protector puede reducir mucho la precisión. Si un móvil limpio y sin protector falla más de 3 veces de 10, sigue investigando.

## Pruebas en Samsung Galaxy

En muchos Samsung Galaxy, abre la aplicación Teléfono preinstalada e introduce `*#0*#`. Dentro del menú de diagnóstico, busca Fingerprint Scanner o una opción relacionada con la huella dentro de Sensors. El menú puede indicar si el hardware detecta el dedo y si la coincidencia funciona.

Samsung Members es la opción con mejor soporte. Abre Samsung Members, toca Ayuda en la parte inferior, selecciona Ver pruebas dentro de Diagnóstico y ejecuta la prueba de huella si está disponible en tu modelo. La propia guía de Samsung también señala causas habituales como protectores no certificados, sensores sucios, cristal rayado, piel seca y fundas que tapan la zona del sensor.

Hay un detalle reciente de Samsung que es fácil pasar por alto: en algunos Galaxy con Android 16 y One UI 8 o una versión posterior de One UI, el registro de la huella utiliza un movimiento de deslizamiento. Sigue el gesto que aparece en pantalla en lugar de dar por hecho que todos los Galaxy siguen pidiendo toques estáticos repetidos.

## Pruebas en Xiaomi, Redmi y POCO

En un Xiaomi, Redmi o POCO, abre la aplicación Teléfono e introduce `*#*#6484#*#*`. Si no se abre el modo CIT, prueba `*#*#64663#*#*`.

Dentro de CIT, busca Fingerprint sensor check, Fingerprint input test o una opción con un nombre parecido. Las páginas de soporte de Xiaomi recomiendan expresamente la detección de hardware CIT cuando desaparece la opción de huella, así que no se trata solo de un truco de foro.

También puedes abrir la información del teléfono desde Ajustes y tocar varias veces Versión del kernel. Xiaomi cambia algunos nombres entre MIUI y HyperOS, pero este acceso suele seguir funcionando cuando el código de marcación está bloqueado.

## Pruebas en Google Pixel

Los Pixel no tienen el mismo tipo de menú público y específico para la huella que ofrecen Samsung y Xiaomi.

Para diagnósticos de reparación, Google documenta `*#*#7287#*#*`, que abre la aplicación de diagnóstico de reparación de Pixel en los modelos compatibles. Sirve para comprobar el hardware antes o después de una reparación. Google también ofrece Pixel Update and Software Repair para actualizar el sistema operativo y ajustar el Under-Display Fingerprint Sensor, o UDFPS.

Para un uso normal, la prueba práctica en un Pixel sigue siendo sencilla: elimina todas las huellas, reinicia el móvil, vuelve a registrar un dedo y prueba varios desbloqueos seguidos. Si el sensor ha desaparecido por completo de Ajustes o el registro ni siquiera empieza, el problema es más serio que unos pocos intentos fallidos.

Android 17 merece una mención porque llegó primero a los Pixel compatibles. Si el problema de la huella empieza justo después de una gran actualización de Android 17, revisa las actualizaciones posteriores y las notas de soporte de Pixel antes de pagar una reparación.

## Otros móviles Android

OnePlus, Motorola, Realme, Oppo y los móviles con una versión de Android cercana a la de Nokia varían demasiado como para ofrecer un único código universal de huella.

Empieza por la aplicación de asistencia o diagnóstico del fabricante, si el móvil incluye una. Motorola, por ejemplo, preinstala Device Help con pruebas de hardware en muchos modelos. Los dispositivos de la familia OnePlus y Oppo pueden mostrar `*#899#` u otros menús de ingeniería antiguos, pero la compatibilidad es irregular.

Una aplicación de terceros sí puede responder a una pregunta básica: ¿Android detecta algún sensor de huellas? Aplicaciones como Sensor Test, DevCheck y Phone Doctor Plus pueden mostrar si existe la capa de abstracción de hardware de huella. Normalmente no pueden ejecutar una coincidencia biométrica segura, porque Android protege deliberadamente esos datos, pero ayudan a diferenciar entre "hardware ausente" y "reconocimiento deficiente".

## Qué significa el resultado

Si el móvil ya no muestra los ajustes de huella, el sensor no se detecta o el diagnóstico informa de un fallo de hardware, lo más probable es que el problema sea físico. Entre las causas habituales están un cable flex dañado, un sensor agrietado, la exposición al agua o una sustitución de pantalla que no emparejó o alineó correctamente el lector integrado.

Cuando el hardware aparece detectado pero reconoce mal la huella, no des por hecho que la pieza está averiada. Ese es el grupo de problemas que suele tener solución.

Elimina todas las huellas y vuelve a registrarlas. Empieza con un solo dedo. Durante el registro, apoya el centro, los bordes y la punta para que el móvil obtenga un mapa útil, en lugar de guardar diez veces la misma zona parcial.

Registra el mismo dedo dos veces si el móvil lo permite. No es la solución más elegante, pero funciona con bastante frecuencia. Usa ángulos y presiones algo distintos en el segundo registro.

Retira el protector de pantalla para hacer la prueba. Es la causa más frecuente de problemas en los sensores integrados. Un protector que no esté diseñado para el modelo exacto puede dispersar la luz de los sensores ópticos o interferir con la lectura ultrasónica. Si el reconocimiento funciona sin el protector, ya has encontrado el problema.

Limpia el sensor y el dedo. La grasa, el polvo, los restos de crema, el sudor y la piel agrietada reducen la cantidad de crestas que el sensor puede leer. Si tienes las manos muy secas, aplica una pequeña cantidad de crema y deja que se absorba antes de probar. Los dedos mojados funcionan igual de mal.

Instala las actualizaciones del sistema pendientes. Los controladores de la huella forman parte del firmware y también pueden contener errores. Las grandes actualizaciones de Android, incluido Android 17 en Pixel y las versiones posteriores de otros OEM, pueden cambiar el comportamiento del sensor porque el firmware del fabricante se encuentra entre Android y el hardware.

## Cuándo merece la pena reparar

Prueba un restablecimiento de fábrica solo después de crear una copia de seguridad y agotar las soluciones normales. Puede borrar datos biométricos dañados y estados de calibración incorrectos, pero es una medida bastante drástica.

Si el sensor sigue fallando después del restablecimiento o el diagnóstico indica que el hardware no se detecta, pide un presupuesto de reparación. Los sensores traseros y laterales suelen ser piezas independientes y su sustitución puede resultar asequible. Los lectores integrados en la pantalla son distintos. Si el sensor está unido al conjunto de pantalla o necesita calibración después de cambiarla, la reparación puede costar lo suficiente como para que sustituir el móvil empiece a tener sentido.

Es una respuesta molesta, pero sigue siendo mejor que pagar por la pieza equivocada.
