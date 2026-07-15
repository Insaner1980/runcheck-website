---
title: "El móvil Android no se enciende: guía de solución de problemas"
description: "¿Tu móvil Android no se enciende o se ha quedado con la pantalla negra? Sigue las comprobaciones más seguras, desde la carga y el reinicio forzado hasta Recovery y las opciones de reparación."
listSummary: "¿Tu móvil Android no se enciende o se ha quedado con la pantalla negra?"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","articulo","guia"]
locale: "es"
draft: false
---
---

Alguien conecta un móvil, no ve nada, pulsa cinco veces el botón de encendido y da por hecho que está muerto. A veces lo está. Con más frecuencia, la batería se ha descargado por completo, el software se ha congelado con la pantalla apagada o la pantalla ha fallado aunque el propio móvil siga funcionando.

El orden importa. Empieza por las comprobaciones de bajo riesgo. No saltes directamente a las herramientas de restablecimiento de fábrica salvo que Android empiece claramente a cargarse y no quede otra vía.

## Cárgalo como si la batería estuviera completamente vacía

Usa un cargador de pared, no el puerto USB de un portátil ni un cargador inalámbrico. La carga inalámbrica es cómoda cuando todo funciona, pero añade problemas de alineación y calor que no necesitas durante una avería.

Conecta el móvil con un cable y un adaptador que sepas que funcionan. Después déjalo quieto durante al menos 15 minutos. Un dispositivo muy descargado puede no mostrar al principio el icono de batería. Es normal.

Pasados 15 minutos, busca cualquier señal de vida. Un icono de batería, una vibración, un sonido de carga o un pequeño LED indican que está entrando corriente. Déjalo cargar al menos hasta el 10 % antes de intentar encenderlo.

Si no aparece nada, cambia una cosa cada vez: el cable, el cargador y el enchufe. Mira el puerto USB-C con una linterna. La pelusa del bolsillo puede quedar tan compactada que el cable parezca insertado aunque no haga buen contacto. Si limpias el puerto, utiliza un palillo de madera o una herramienta de plástico. No uses metal.

## Fuerza el reinicio de la forma correcta

Una pantalla negra no siempre significa que Android esté apagado. Puede estar congelado con la pantalla inactiva.

Utiliza el método de reinicio forzado correspondiente a la marca:

- En los Pixel, mantén pulsado el botón de encendido durante un máximo de 60 segundos. Suéltalo cuando aparezca el logotipo de Google.
- En los Samsung Galaxy, mantén pulsada la tecla lateral o **encendido + bajar volumen** hasta que el móvil se apague y reinicie. Normalmente son más de 7 segundos.
- En los Xiaomi, Redmi y POCO, mantén pulsado el botón de encendido durante más de 10 segundos.
- En otros móviles Android, prueba a mantener pulsados **encendido + bajar volumen** durante 10-20 segundos. Si no funciona, mantén pulsado solo el botón de encendido durante más tiempo.

Una vibración, sonidos de notificación o que el móvil suene al llamarlo desde otro teléfono apuntan a la pantalla, no al dispositivo entero. Es una pista útil. Reparar la pantalla es una molestia, pero es un problema distinto a tener una placa base muerta.

## Comprueba si solo ha fallado la pantalla

Llama al móvil. Usa el **Localizador de Google** desde otro dispositivo si estaba activado. Conéctalo a un cargador y escucha si emite algún sonido o nota si vibra. Enchúfalo a un ordenador y comprueba si Windows, macOS o una herramienta compatible de transferencia para Android detecta algo.

Aunque el ordenador detecte el móvil, no des por hecho que los datos están a salvo. La mayoría de los dispositivos Android actuales no muestran sus archivos por USB hasta que desbloqueas la pantalla y autorizas la transferencia. Aun así, que el ordenador lo detecte significa que al menos parte del hardware sigue funcionando.

Una pantalla rota con manchas negras, líneas o una retroiluminación apenas visible apunta a daños en el panel. Una exposición reciente a líquidos es más grave. Incluso un contacto breve puede corroer conectores o provocar más tarde un cortocircuito en el circuito de alimentación.

Una batería hinchada es la situación en la que debes detenerte. Si la tapa trasera sobresale, la pantalla se está levantando o el móvil ya no queda plano sobre una mesa, no lo cargues ni intentes presionarlo para cerrarlo. Llévalo a un servicio técnico.

## Si llega al logotipo pero no termina de arrancar

Ver el logotipo de Samsung, Pixel, Xiaomi o Android significa que el dispositivo no está completamente muerto. Está fallando durante el arranque.

Prueba el Modo seguro si el proceso avanza lo suficiente. En muchos dispositivos puedes mantener pulsado bajar volumen durante el arranque para iniciar Android con las aplicaciones descargadas desactivadas. Si el Modo seguro funciona, desinstala las aplicaciones recientes y reinicia con normalidad.

Un bucle o un bloqueo antes de la pantalla de bloqueo exige entrar en Recovery. En los Pixel se suele mantener pulsado **encendido + bajar volumen** para abrir el bootloader y después seleccionar **Recovery Mode**. En Samsung es habitual usar **subir volumen + encendido** con el móvil apagado, y los modelos recientes pueden necesitar un cable USB conectado. En Xiaomi se utiliza con frecuencia **subir volumen + encendido**.

En Recovery, selecciona primero **Reboot system now**. Si el móvil ofrece **Wipe cache partition**, pruébalo después porque no borra los datos personales. Los Pixel normalmente no muestran esa opción, así que sáltala. **Wipe data/factory reset** es el último paso local porque borra el móvil.

Google publicó Android 17 el 16 de junio de 2026 para la mayoría de los Pixel compatibles, y otros dispositivos aptos lo recibirán durante 2026. Si el problema de arranque comenzó justo después de esa actualización o de otra versión importante del sistema, consulta la página de soporte del fabricante por si existe una herramienta de reparación o un aviso antes de borrar los datos.

## Usa las herramientas de reparación por ordenador con cuidado

Las herramientas para ordenador pueden reinstalar Android, pero no son soluciones mágicas para recuperar archivos.

La herramienta Pixel Update and Software Repair de Google es el primer recurso más seguro para Pixel 3 y posteriores que ejecuten Android 10 o una versión más reciente, siempre que el móvil pueda conectarse por USB. Android Flash Tool puede instalar imágenes en dispositivos Pixel compatibles mediante un navegador con WebUSB, pero necesita que el móvil se encuentre en el estado correcto y puede exigir desbloquearlo o borrar sus datos.

Samsung Smart Switch ofrece recuperación de software de emergencia para algunos fallos de actualización. MiFlash puede reinstalar el firmware en dispositivos Xiaomi compatibles, pero suele necesitar acceso al bootloader o al modo fastboot y la ROM correcta para el modelo exacto.

Aquí es donde los tutoriales se vuelven peligrosos. Instalar una compilación incorrecta puede dificultar todavía más la recuperación. Si no conoces ya el número de modelo, la región, el estado del bootloader y la situación de las copias de seguridad, un servicio técnico es la opción más segura.

## Cuándo probablemente es un fallo de hardware

Si no aparece ningún icono de carga, no hay vibración, el ordenador no detecta el dispositivo y el reinicio forzado no produce respuesta después de probar varios cargadores, lo más probable es que el problema sea de hardware.

Los fallos más habituales son una batería agotada, un puerto USB-C dañado, un circuito de gestión de energía averiado, un fallo de pantalla, daños por líquido o una avería de la placa base. La batería y el puerto suelen estar en el extremo más barato de las reparaciones. Los fallos de placa no.

Si el móvil está cubierto por una garantía legal, una garantía comercial o un seguro, utiliza primero ese canal. Un taller independiente puede hacer un buen trabajo, pero el proveedor de la garantía puede rechazar reclamaciones posteriores si otra empresa ya ha abierto el dispositivo.

## Cómo salvar los datos

Sin una copia de seguridad, un fallo de arranque deja muy pocas opciones. Recovery no permite que un móvil normal sin root muestre sus archivos. La transferencia por USB suele exigir que el dispositivo esté desbloqueado. A veces es posible trabajar alrededor de una pantalla muerta con salida de vídeo USB-C, un hub, un teclado y un ratón, pero solo en modelos que admiten salida de pantalla y que todavía consiguen arrancar.

Existen servicios profesionales de recuperación de datos, pero son caros y no garantizan el resultado. El cifrado moderno de Android también significa que extraer solo el chip de almacenamiento normalmente no basta. Hay que reparar el dispositivo lo suficiente para poder desbloquearlo.

Esa es la parte que nadie quiere oír. Las copias de seguridad son aburridas hasta el día en que dejan de serlo.
