---
title: "¿Por qué aparece «Sin señal» en el móvil y cómo se soluciona?"
description: "Pasos prácticos para solucionar los mensajes Sin señal, Sin servicio y Solo llamadas de emergencia en móviles Android, con comprobaciones de SIM, eSIM, operador, APN, actualizaciones y hardware."
listSummary: "red, conectividad y android"
hub: "network"
sourceNumber: 102
order: 13
tags: ["red","conectividad","android","solucion-de-problemas","guia"]
locale: "es"
draft: false
---
El móvil muestra `Sin señal`, `Sin servicio` o `Solo llamadas de emergencia` y, de repente, ese pequeño ordenador caro que llevas en la mano se convierte en una cámara con Wi-Fi. Es molesto, pero no siempre indica un problema grave.

La clave está en separar tres elementos: el móvil, la SIM o eSIM y la red del operador. Probar cosas al azar hace perder tiempo. Comprobarlas en orden suele revelar dónde está el fallo.

## Haz primero estas tres cosas

Activa el modo avión, espera unos 15 segundos y desactívalo. Esto obliga al móvil a abandonar el registro de red y volver a intentarlo.

Reinicia el móvil. Al hacerlo se recargan el módem, los servicios de la SIM y la configuración del operador. Si la pila de radio se ha quedado bloqueada, muchas veces basta con esto.

Si utilizas una SIM física, apaga el móvil, extrae la bandeja, comprueba que la tarjeta esté limpia y plana y vuelve a insertarla con firmeza. Una SIM ligeramente suelta puede dejar el móvil sin servicio después de una caída o de cambiar la funda.

Si utilizas eSIM, no borres el perfil como primer paso. Abre `Ajustes > Redes e Internet > SIMs` y comprueba que la línea eSIM esté activada. Eliminarla puede convertir un problema pequeño en una llamada al servicio de atención al cliente del operador.

## Comprueba si hay una avería del operador

Es la respuesta menos satisfactoria, pero ocurre a menudo: el móvil funciona y el operador tiene una incidencia.

Pregunta a alguien cercano que utilice el mismo operador si tiene servicio. Consulta la aplicación, la página de asistencia o las cuentas sociales del operador. Downdetector puede servir como indicio, pero se basa en avisos de usuarios, no en diagnósticos del operador.

Si varias personas del mismo operador están sin servicio en la misma zona, deja de cambiar ajustes del móvil. Espera a que el operador resuelva la incidencia o muévete a otra ubicación.

## Asegúrate de que la línea SIM está activa

El móvil puede quedarse sin servicio si la línea está desactivada, la cuenta está suspendida, se ha agotado el saldo o la tarifa de prepago, el perfil eSIM se ha trasladado a otro dispositivo o el móvil está bloqueado para un operador distinto.

En Pixel y muchos móviles con una versión de Android cercana a la original, abre `Ajustes > Redes e Internet > SIMs`, elige la SIM y comprueba que `Usar SIM` y `Datos móviles` estén activados.

En Samsung, revisa `Ajustes > Conexiones > Administrador de SIM` y `Ajustes > Conexiones > Redes móviles`.

Si aparece `Sin SIM`, la tarjeta puede estar dañada, inactiva o no estar siendo detectada. Si aparece `Solo llamadas de emergencia`, el móvil ve una red, pero no puede autenticarse con normalidad. Eso suele apuntar a la SIM, la cuenta, el bloqueo del operador o la itinerancia, más que a una antena completamente averiada.

## Después de Android 17 u otra actualización importante

Google lanzó Android 17 el 16 de junio de 2026 para la mayoría de los Pixel compatibles. Samsung, OnePlus, Xiaomi, Motorola y otras marcas siguen sus propios calendarios de actualización. Si los problemas de señal empezaron justo después de una actualización importante, el momento en que aparecieron importa.

No hagas un restablecimiento de fábrica de inmediato. Prueba antes lo siguiente:

- Reinicia otra vez el móvil cuando la actualización haya terminado por completo.
- Busca otra actualización del sistema o de los ajustes del operador.
- Activa y desactiva una vez el modo avión.
- Restablece solo los ajustes de la red móvil si tu versión de Android ofrece esa opción.
- Si 5G es inestable, selecciona temporalmente LTE o 4G como tipo de red preferido y vuelve a probar.

Algunos problemas iniciales tras una actualización se corrigen con los parches mensuales o con nuevas configuraciones del operador. El restablecimiento de fábrica debe estar casi al final de la lista, no al principio.

## Comprueba el tipo de red preferido

Abre los ajustes de la SIM y busca `Tipo de red preferido` o `Modo de red`. Elige la opción automática que incluya la generación más alta compatible, como `5G/LTE/3G/2G` o `5G/4G/3G/2G`.

Si el móvil está forzado a usar una generación de red que ya no existe en tu zona, puede quedarse sin servicio. Ocurre con ajustes antiguos limitados a 3G en países donde esa red se ha apagado. También puede pasar si seleccionaste manualmente solo LTE o solo 5G durante una prueba y olvidaste volver al modo automático.

En Samsung, la ruta habitual es `Ajustes > Conexiones > Redes móviles > Modo de red`.

En Xiaomi y POCO, comprueba `Configuración > Tarjetas SIM y redes móviles`.

Usa el buscador de Ajustes si el fabricante ha cambiado la ubicación. Les encanta moverla.

## Vuelve a activar la selección automática de red

La selección manual del operador puede dejar el móvil enganchado a la red equivocada. Es bastante común después de viajar.

En los ajustes de la SIM, busca `Seleccionar red automáticamente` o `Operadores de red`. Activa la selección automática. Si falla, realiza una búsqueda manual y elige tu operador en la lista.

Si estás en itinerancia, comprueba que tu tarifa la permita antes de activar los datos en itinerancia. Las condiciones de voz y datos pueden ser distintas según el operador.

## Comprueba los ajustes de APN cuando fallan los datos

Los ajustes de APN indican a Android cómo conectarse a la red de datos del operador. Una APN incorrecta suele causar problemas con los datos móviles o los MMS, no una pérdida total de señal, pero puede hacer que una incidencia de red parezca peor.

En Pixel y Android cercano a la versión original, abre `Ajustes > Redes e Internet > SIMs > Nombres de puntos de acceso`. En Samsung suele estar en `Ajustes > Conexiones > Redes móviles > Nombres de los puntos de acceso`.

Usa `Restablecer valores predeterminados` si la lista de APN parece incorrecta o está vacía. Para operadores móviles virtuales y compañías pequeñas, utiliza los valores publicados en la página de asistencia del propio operador. No copies ajustes aleatorios de un foro salvo que te apetezca solucionar el problema dos veces.

## Restablece los ajustes de red

Si la SIM está activa y los ajustes parecen normales, restablece la red. Esto borra las redes Wi-Fi guardadas, los emparejamientos Bluetooth, los ajustes de VPN y la configuración de la red móvil. No elimina aplicaciones, fotos, mensajes ni archivos.

En Pixel y versiones recientes de Android cercanas a la original, ve a `Ajustes > Sistema > Opciones de restablecimiento`. Puede aparecer una opción combinada como `Restablecer Wi-Fi, redes móviles y Bluetooth`, o varias opciones separadas, como `Restablecer ajustes de red móvil` y `Restablecer Bluetooth y Wi-Fi`.

Samsung: `Ajustes > Administración general > Restablecer > Restablecer ajustes de red móvil`.

En Xiaomi y POCO, busca `restablecer red` en Ajustes, porque la ruta cambia entre versiones de MIUI y HyperOS.

Reinicia después del restablecimiento y deja al móvil un minuto para registrarse en la red del operador.

## Prueba la SIM en otro móvil

Es la forma más clara de dejar de adivinar.

Inserta la SIM en otro móvil libre que admita las bandas de tu operador. Si funciona, probablemente la tarjeta y la cuenta están bien, y el problema está en el móvil original. Si sigue sin servicio, el fallo está en la SIM, la cuenta o el aprovisionamiento del operador.

También puedes probar una SIM que sepas que funciona en tu móvil. Si consigue servicio, el hardware del teléfono probablemente está bien.

Con eSIM, la prueba equivalente es más complicada porque trasladarla puede requerir una nueva activación del operador. En ese caso, el servicio de atención al cliente puede comprobar si el perfil sigue activo y asignado a tu dispositivo.

## Comprueba el IMEI en móviles de segunda mano

Si compraste el móvil de segunda mano, revisa el IMEI. Marca `*#06#` para mostrarlo.

Un móvil puede perder el servicio normal si entra en una lista de bloqueo tras haber sido denunciado como perdido o robado, si mantiene una financiación impagada vinculada al operador original o si está bloqueado para una compañía distinta de la que utilizas. Usa el comprobador del propio operador cuando exista. Los servicios de terceros pueden orientar, pero el operador tiene la última palabra en su red.

## La ubicación y los materiales del edificio importan

La intensidad de la señal puede cambiar muy deprisa. Un móvil puede mostrar todas las barras en la calle y quedarse sin servicio en un sótano, ascensor, almacén con techo metálico, aparcamiento subterráneo o piso con muros de hormigón.

Acércate a una ventana o sal al exterior. Si vuelve el servicio, el móvil está haciendo su trabajo. El edificio está bloqueando la señal.

Las fundas gruesas también pueden perjudicar la recepción si incluyen placas metálicas, imanes o accesorios mal colocados. Quítala durante un minuto si el problema empezó después de añadir un soporte, una funda tipo cartera o un anillo magnético.

Las llamadas por Wi-Fi son la solución habitual cuando la señal móvil dentro del edificio es débil, pero la conexión Wi-Fi funciona bien.

## Los valores de intensidad son mejores que las barras

Las barras son aproximadas. Los dBm aportan más información.

En muchos móviles Android, abre `Ajustes > Información del teléfono > Estado de la SIM > Intensidad de la señal`. Puedes ver un valor como `-85 dBm` o `-110 dBm`. Cuanto más cerca de cero, más fuerte es la señal.

Como orientación general, el intervalo de `-50 a -90 dBm` suele ser utilizable, por debajo de `-100 dBm` la señal es débil y alrededor de `-120 dBm` está cerca de resultar inutilizable. La experiencia exacta depende del tipo de red, la congestión y la configuración del operador, así que no trates el número como una prueba perfecta de aprobado o suspenso.

El código `*#*#4636#*#*` abre un menú de pruebas en algunos móviles Android, pero muchos fabricantes y operadores lo desactivan. Si no ocurre nada, el móvil no está averiado.

runcheck puede mostrar la intensidad de la señal y los detalles de red a lo largo del tiempo, algo más útil que mirar las barras durante diez segundos. Los problemas suelen depender de la ubicación, la hora del día y de si el móvil cambia entre LTE y 5G.

## Cuándo es probable que sea un fallo de hardware

El hardware pasa a ser el principal sospechoso cuando se cumplen todas estas condiciones:

- Tu SIM funciona en otro móvil.
- Una SIM que funciona correctamente falla en tu móvil.
- Has restablecido los ajustes de red.
- La cuenta está activa.
- Otras personas del mismo operador tienen servicio cerca.
- El móvil sigue sin servicio en varias ubicaciones.

Entre las causas habituales están una antena dañada, un lector de SIM defectuoso, corrosión cerca de la bandeja o un componente de radiofrecuencia averiado. Las caídas y la humedad son los sospechosos habituales.

Busca golpes cerca de las líneas de antena, una bandeja que no quede plana, indicadores de líquido, corrosión o daños por un impacto reciente. Si el móvil está en garantía, contacta con el fabricante o el vendedor. Si la garantía ha terminado, compara el coste de la reparación con el valor actual del móvil antes de autorizarla.

## ¿Deberías comprar un repetidor de señal?

Solo tiene sentido para una ubicación fija y cuando ya existe algo de señal utilizable en el exterior. Un repetidor amplifica una señal existente. No crea una red del operador donde no la hay.

En España, las bandas de telefonía móvil son de uso licenciado. Solo los operadores pueden instalar un repetidor o autorizar su instalación por un tercero, por lo que particulares y empresas deben contactar con su operador antes de comprar o instalar uno. No compres un amplificador cualquiera en un marketplace ni lo pongas en marcha por tu cuenta. Un equipo no autorizado puede causar interferencias y su instalación o uso puede constituir una infracción.
