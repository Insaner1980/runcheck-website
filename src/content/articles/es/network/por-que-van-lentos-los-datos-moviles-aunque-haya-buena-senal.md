---
title: "¿Por qué van lentos los datos móviles aunque haya buena señal?"
description: "Tener todas las barras de cobertura no garantiza unos datos móviles rápidos. Descubre por qué un móvil Android puede mostrar buena señal y aun así navegar despacio por la congestión, la limitación de velocidad, el Ahorro de datos, los ajustes de APN, una VPN o los cambios entre 5G y LTE."
listSummary: "Tener todas las barras de cobertura no garantiza unos datos móviles rápidos."
hub: "network"
sourceNumber: 97
order: 8
tags: ["rendimiento","velocidad","android","optimizacion","solucion-de-problemas"]
locale: "es"
draft: false
---
Ves todas las barras de cobertura, pero la página sigue sin cargar. El móvil indica 5G o LTE. La señal parece buena. Aun así, los datos móviles avanzan como si estuvieran atascados.

La explicación es que una buena señal solo demuestra una cosa: el móvil recibe suficientemente bien la antena de telefonía. Dice mucho menos sobre la carga de esa antena, la prioridad de tu tarifa, las interferencias, el enrutamiento del operador, la sobrecarga de una VPN o si el teléfono está conectado a la capa de red adecuada.

## Una buena señal no equivale a datos rápidos

Las barras de cobertura reflejan sobre todo la potencia de la señal de radio. La velocidad de datos depende de la capacidad disponible.

Una antena comparte el ancho de banda con todos los dispositivos conectados. En una tarde tranquila, una persona puede alcanzar cientos de Mbps con 5G. En una estación de tren a la hora de salida del trabajo, esa misma antena puede ir lenta aunque el móvil muestre una señal fuerte. La antena no está lejos. Está saturada.

Por eso la velocidad suele caer en estadios, conciertos, aeropuertos, centros comerciales, bloques de pisos densos y rutas con mucho tráfico de viajeros. El enlace de radio puede ser bueno mientras la red recibe demasiadas solicitudes de datos a la vez.

La calidad de la señal también importa. Si RSRQ o SINR son malos, el móvil puede mostrar bastantes barras y seguir funcionando mal porque la señal útil está mezclada con interferencias. Es frecuente en los límites de una celda, entre edificios altos y en zonas donde se solapan varias antenas.

## La congestión es la causa más habitual

Si los datos móviles van lentos en lugares u horas concretos, la congestión es la principal sospechosa. El trayecto de primera hora, la pausa para comer y la tarde-noche son ejemplos clásicos. También lo son los eventos deportivos y los centros urbanos.

No existe un ajuste mágico que arregle una antena saturada. Puedes activar y desactivar el modo avión para volver a registrarte en la red, acercarte a una ventana, cambiar entre 5G y LTE o usar Wi-Fi cuando esté disponible. Pero si la antena está sobrecargada, la solución real depende de que el operador añada capacidad.

Una prueba útil consiste en medir la velocidad a distintas horas. Si el mismo lugar va rápido de madrugada y lento a las 18:00, probablemente el problema no está en tu móvil.

## Límites de la tarifa, reducción de velocidad y pérdida de prioridad

Muchas tarifas incluyen una cantidad de datos a máxima velocidad, incluso cuando se anuncian como ilimitadas. Al superar ese umbral pueden ocurrir dos cosas.

La reducción fija de velocidad es fácil de reconocer. El operador limita la conexión durante el resto del ciclo de facturación, a veces a unos pocos Mbps o menos. Las barras de señal no cambian nada porque la restricción se aplica en la red del operador.

La pérdida de prioridad es más discreta. La velocidad puede ser normal cuando la antena está tranquila y caer durante la congestión porque se atiende antes a otros clientes o a tarifas de mayor nivel. Algunas ofertas de operadores móviles virtuales (OMV) y tarifas ilimitadas más baratas funcionan así.

Comprueba en la aplicación del operador el consumo de datos a máxima velocidad y las condiciones de la tarifa. En Pixel y móviles similares, también puedes revisar Ajustes > Redes e Internet > SIMs > Uso de datos de aplicaciones. En Samsung, usa Ajustes > Conexiones > Uso de datos > Uso de datos móviles.

## Ahorro de datos y límites por aplicación

El Ahorro de datos de Android puede hacer que la conexión parezca averiada si olvidaste que estaba activado. Restringe los datos en segundo plano de la mayoría de las aplicaciones y puede interrumpir sincronizaciones, vistas previas, subidas y notificaciones.

En Pixel y muchos móviles con Android similar al estándar, revisa Ajustes > Redes e Internet > Ahorro de datos. En Samsung, ve a Ajustes > Conexiones > Uso de datos > Ahorro de datos.

Samsung también permite controlar los datos móviles de cada aplicación dentro de Uso de datos. Si solo va lenta una aplicación y todo lo demás funciona, comprueba si tiene desactivados los datos en segundo plano. Lo mismo ocurre con la optimización de batería. Una aplicación muy restringida puede parecer que tiene un problema de red cuando en realidad Android la está frenando.

## El móvil puede estar usando el modo de red equivocado

El modo de red determina qué generaciones móviles puede utilizar el teléfono. Si quedó bloqueado en 3G, solo 4G o algún modo restringido usado durante una prueba, no elegirá la mejor conexión disponible.

En Pixel y muchos móviles Android, abre Ajustes > Redes e Internet > SIMs y revisa Tipo de red preferido. En Samsung, usa Ajustes > Conexiones > Redes móviles > Modo de red. Elige el modo automático más alto que tenga sentido, por ejemplo 5G/LTE/3G/2G automático, si lo admiten el móvil y el operador.

No des por hecho que 5G siempre es más rápido. El 5G de banda baja puede rendir de forma parecida a un buen LTE. Un 5G débil puede ir peor que un LTE fuerte. Si los datos son lentos en 5G y mejoran al cambiar a LTE, usa LTE en esa zona y sigue con tu día.

Android 17 añade otra variable para los propietarios de un Pixel, porque Google lo publicó primero para la mayoría de los Pixel compatibles el 16 de junio de 2026. Si los datos móviles o el 5G empeoraron justo después de actualizar, busca un parche mensual posterior, una actualización de los ajustes del operador e informes sobre tu modelo concreto. Samsung, Xiaomi, OnePlus, OPPO, vivo y otros fabricantes distribuyen sus versiones de Android 17 según sus propios calendarios, por lo que un fallo específico de Pixel no tiene por qué afectarles.

## Ajustes de APN después de cambiar de operador o SIM

El APN, o nombre de punto de acceso, indica al móvil cómo conectarse a la red de datos del operador. La mayoría de los teléfonos reciben los valores correctos automáticamente. Los problemas suelen aparecer al cambiar de compañía, pasar a un OMV, insertar una SIM nueva, convertirla en eSIM o restaurar una copia de seguridad creada con otro operador.

En Samsung, revisa Ajustes > Conexiones > Redes móviles > Nombres de los puntos de acceso. En Android similar al de Pixel, la opción suele estar dentro de Ajustes > Redes e Internet > SIMs > Nombres de puntos de acceso, aunque el operador puede ocultar o bloquear parte del menú.

No adivines los valores del APN. Usa exactamente los que publique tu operador. Un APN incorrecto puede impedir que funcionen los datos móviles, los MMS, la conexión compartida o el roaming.

Si no estás seguro, usa Restablecer valores predeterminados dentro del menú de APN cuando esté disponible y después reinicia el móvil.

## Las aplicaciones en segundo plano pueden consumir la conexión

Las copias de seguridad de fotos, las descargas de pódcast, la restauración de mensajes, las actualizaciones de Play Store, los mapas sin conexión y la sincronización de aplicaciones pueden ejecutarse en segundo plano. Si la conexión ya es limitada, esas tareas dejan menos ancho de banda para la aplicación que estás usando.

Revisa el uso de datos por aplicación durante el periodo de facturación actual. Si una aplicación ha consumido una cantidad inesperada, abre sus ajustes y limita los datos en segundo plano o configura las descargas para que se hagan solo por Wi-Fi.

En Play Store, abre Ajustes > Preferencias de red > Actualizar aplicaciones automáticamente y selecciona Solo por Wi-Fi si los datos móviles son limitados o lentos.

## Una VPN puede ralentizarlo todo

Una VPN cifra el tráfico y lo envía a otro servidor antes de llegar a la web o aplicación de destino. Eso añade latencia. También puede reducir la velocidad si el servidor VPN está lejos, saturado o mal conectado con la red de tu operador.

Busca el icono de una llave en la barra de estado. Desconecta la VPN para hacer una prueba. Si la velocidad mejora, elige un servidor más cercano o cambia de protocolo. Si necesitas una VPN de trabajo, el cuello de botella puede estar en la red de la empresa, no en tu móvil ni en el operador.

## Problemas con la SIM o la eSIM

Una SIM física dañada puede provocar fallos extraños en los datos móviles sin perder las barras de señal. Extráela, revisa los contactos metálicos, vuelve a insertarla y reinicia el móvil. Si tiene varios años, pide una sustitución al operador.

Con una eSIM puedes desactivar y volver a activar el perfil desde los ajustes de la SIM, pero no lo elimines salvo que sepas cómo instalarlo de nuevo. Algunos operadores exigen un código QR nuevo o una activación desde su aplicación.

En móviles con doble SIM, comprueba además que la línea correcta esté seleccionada para los datos móviles. Es fácil dejar los datos asignados a la SIM equivocada después de un viaje.

## Haz pruebas de velocidad que sirvan de verdad

Mide la velocidad antes de cambiar cinco ajustes a la vez. Puedes usar Ookla Speedtest, Fast.com o M-Lab. Haz una prueba en el mismo lugar con 5G y LTE si el teléfono permite cambiar de red. Repite después a otra hora.

Observa la descarga, la subida, el ping y el jitter. La subida suele ser el primer valor que empeora cuando la calidad de la señal es mala. Un ping y un jitter altos hacen que las videollamadas y los juegos funcionen mal aunque la descarga parezca aceptable.

En LTE, entre 10 y 50 Mbps es habitual en muchas zonas, con picos mayores cuando la red está tranquila. En 5G, la velocidad varía mucho más según la banda. La banda baja puede parecerse a LTE. La banda media puede ser bastante más rápida. mmWave puede alcanzar velocidades muy altas, pero solo en zonas de cobertura pequeñas.

Si LTE con buena señal se mantiene por debajo de 5 Mbps en varios lugares y momentos, revisa los límites de la tarifa, el APN, las VPN, las incidencias del operador y el estado de la SIM. Si solo ocurre en un lugar concurrido y a una hora concreta, la respuesta aburrida pero probable es la congestión.

La pantalla de detalles de Red de runcheck muestra juntas la intensidad de la señal, el tipo de conexión, la latencia y el historial. Así resulta más fácil ver si la lentitud coincide con una señal débil, una latencia mala o un lugar concreto.

## Lista rápida de comprobación

Prueba esto en orden:

- Desactiva el Ahorro de datos y vuelve a probar.
- Activa el modo avión durante diez segundos para forzar un nuevo registro en la red.
- Comprueba si has superado el límite de datos a máxima velocidad de tu tarifa.
- Cambia entre 5G automático y solo LTE para hacer una prueba.
- Desconecta la VPN.
- Pausa descargas grandes, copias de seguridad y actualizaciones de Play Store.
- Restablece el APN o introduce exactamente los valores del operador.
- Reinicia el móvil.
- Restablece los ajustes de red si el problema aparece en lugares distintos.

Si los datos solo van lentos en un lugar concurrido, probablemente el móvil no está averiado. La red está saturada.
