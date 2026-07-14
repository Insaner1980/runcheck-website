---
title: "Cómo probar el puerto de carga de tu móvil"
description: "Aprende a comprobar el puerto de carga de un móvil Android con pruebas de cables, limpieza segura, lecturas de corriente y herramientas de diagnóstico integradas."
listSummary: "carga, bateria y android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["carga","bateria","android","guia","hardware"]
locale: "es"
draft: false
---
---

Tienes que sujetar el cable en un ángulo extraño, el icono de carga aparece y desaparece, y el móvil solo carga si permanece completamente quieto. Es fácil pensar que el puerto está averiado, pero no empieces por ahí.

Empieza por las comprobaciones aburridas. Resuelven más casos de los que parece.

## Descarta primero el cable y el adaptador

Prueba otro cable USB-C o Micro-USB con el mismo adaptador. Después usa otro adaptador con el cable original. Si puedes, prueba ambos accesorios con otro móvil o una tableta.

Un cable puede romperse por dentro mucho antes de mostrar daños por fuera. Basta con que falle uno de los contactos de datos o alimentación para que un cargador rápido pase a cargar muy despacio. El revestimiento puede seguir pareciendo perfecto. Es molesto, pero normal.

Si el mismo cable y adaptador cargan correctamente otro dispositivo, el puerto del móvil gana puntos como sospechoso. Si otro cable arregla el problema de inmediato, probablemente el puerto no era la causa.

## Inspecciona el puerto

Apaga el móvil e ilumina directamente el interior del puerto con una linterna. Busca pelusa compactada contra la pared del fondo. La pelusa del bolsillo se acumula poco a poco, el conector la comprime cada vez que lo enchufas y acaba impidiendo que entre hasta el final.

Comprueba también el ajuste. Un conector USB-C en buen estado debería quedar firme. No tendría que soltarse, moverse demasiado ni desconectarse al desplazar un poco el móvil. Una pequeña holgura es normal, sobre todo en dispositivos antiguos. Que la conexión se corte no lo es.

Busca residuos verdes, blancos u oscuros en los contactos. Suelen indicar corrosión o exposición a humedad. Quitar el polvo puede solucionar una acumulación de pelusa. No repara un contacto corroído.

## Límpialo con cuidado

Si ves polvo o pelusa, orienta el puerto hacia abajo y prueba unas ráfagas cortas con una pera de aire manual o un bote de aire comprimido. No dispares desde muy cerca. La idea es soltar la suciedad, no empujarla más al fondo.

Para la pelusa compactada, usa un cepillo seco y suave para electrónica o un cepillo de dientes limpio y seco. Evita las herramientas metálicas. Un alfiler puede doblar un contacto o provocar un cortocircuito. Tampoco usaría un palillo de madera salvo que no tengas ninguna alternativa mejor, porque puede astillarse y dejar un problema nuevo dentro del puerto.

No viertas alcohol ni limpiador de contactos dentro del móvil. Que un técnico use líquidos en condiciones controladas no convierte el método en una reparación doméstica segura.

Después de limpiar, conecta de nuevo el cargador. Si ahora encaja con más firmeza, la pelusa era probablemente la causa principal.

## Comprueba la corriente de carga

Android ofrece lecturas de corriente de la batería mediante `BatteryManager` en los dispositivos que admiten esa medición. Aplicaciones como Ampere pueden mostrarlas, pero úsalas para comparar, no como si fueran un instrumento de laboratorio.

Abre Ampere con el cargador desconectado y observa la lectura de descarga. Conecta el cargador, espera unos 10 segundos y deja que el valor se estabilice. El nivel de batería, la temperatura, el brillo de la pantalla y las reglas de carga del propio móvil influyen en la cifra.

Un cargador de 2 A no siempre mostrará 2000 mA. Si la batería está casi llena, el móvil reduce la velocidad de forma intencionada. Pero si ves unos 200 o 300 mA con un cargador de pared y un cable que sabes que funcionan, y la cifra salta cada vez que tocas el conector, el puerto no está manteniendo un contacto estable.

Los propietarios de un Samsung tienen otra opción. Abre Samsung Members, entra en Ayuda > Ver pruebas dentro de Diagnóstico y ejecuta las comprobaciones relacionadas con la carga por cable o la conexión USB, si aparecen en tu modelo.

El código de Samsung `*#0*#` también abre un menú de pruebas de hardware en muchos Galaxy. Usa la aplicación Teléfono de Samsung, no un marcador de terceros. En versiones recientes de One UI, modelos de operador o móviles con restricciones de seguridad, puede no ocurrir nada. Actualmente es normal.

Android 17 no añadió una prueba universal del puerto de carga para todos los móviles Android. Pixel, Samsung y Xiaomi siguen utilizando rutas de diagnóstico distintas.

## Prueba el modo seguro

Si el puerto está limpio, el cable encaja bien y la carga sigue comportándose de forma extraña, inicia el móvil en modo seguro. Este modo desactiva las aplicaciones de terceros y permite detectar con rapidez si alguna está interfiriendo.

En muchos móviles Android, abre el menú de encendido y mantén pulsada la opción de apagar hasta que aparezca el aviso de modo seguro. En muchos Samsung, reinicia el dispositivo y mantén pulsado el botón de bajar volumen durante el arranque.

Si la carga funciona con normalidad en modo seguro, revisa las aplicaciones de batería, automatización, seguridad o animaciones de carga instaladas recientemente. Alguna puede estar alterando el comportamiento de la carga o las notificaciones.

## Cuándo necesita reparación el puerto

Es probable que el puerto esté dañado cuando se cumplen todas estas condiciones: el cargador y el cable funcionan con otros dispositivos, el puerto está limpio, el conector sigue quedando suelto y las lecturas de corriente permanecen bajas o inestables.

La dificultad de la reparación depende del móvil. Muchos Samsung Galaxy, Xiaomi, Motorola y modelos Android económicos colocan el puerto USB en una placa secundaria independiente. Suele ser una reparación rutinaria. En otros dispositivos, el puerto está soldado a la placa principal, lo que exige más experiencia y encarece el trabajo porque requiere una reparación a nivel de placa.

La carga inalámbrica puede sacarte del apuro si el móvil la admite. Evita por completo el puerto USB, aunque suele ser más lenta y menos cómoda que la carga por cable.

Si la carga lleva semanas empeorando, no esperes a que el puerto deje de funcionar por completo. runcheck registra el comportamiento de carga, el consumo de corriente y las tendencias de suministro eléctrico a lo largo del tiempo, lo que facilita detectar un puerto que está fallando antes de quedarte con la batería agotada.
