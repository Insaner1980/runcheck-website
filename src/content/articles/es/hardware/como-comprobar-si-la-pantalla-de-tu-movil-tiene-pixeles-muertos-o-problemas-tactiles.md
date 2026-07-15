---
title: "Cómo comprobar si la pantalla de tu móvil tiene píxeles muertos o problemas táctiles"
description: "Estás revisando un móvil de segunda mano. El vendedor asegura que la pantalla está perfecta y, a primera vista, lo parece. Entonces abres una imagen blanca y ves un punto negro cerca de una esquina. O, peor aún, empiezas a escribir y una franja del teclado no responde al dedo."
listSummary: "Estás revisando un móvil de segunda mano."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["hardware","pruebas","diagnostico","android","guia"]
locale: "es"
draft: false
---
Los problemas de pantalla pueden pasar desapercibidos durante el uso normal. El fondo de pantalla, los iconos, el modo oscuro y el movimiento ocultan muchos defectos. Unas cuantas pruebas con colores uniformes y respuesta táctil permiten detectarlos mucho mejor.

## Píxeles muertos y píxeles atascados

Un píxel muerto permanece negro sin importar lo que muestre la pantalla. Ha dejado de funcionar.

Un píxel atascado es distinto. Se queda encendido en un color, normalmente rojo, verde, azul o blanco, aunque cambie lo que hay alrededor. A veces responde a herramientas que alternan colores rápidamente. Los píxeles muertos, por lo general, no.

Ambos se ven mejor sobre fondos de color uniforme. No basta con mirar la pantalla de inicio y dar la prueba por terminada. Así es fácil pasar por alto un defecto.

## Comprueba si hay píxeles muertos o atascados

Sube bastante el brillo, limpia el cristal y muestra colores uniformes a pantalla completa. Usa blanco, negro, rojo, verde, azul y gris.

Una prueba desde el navegador, como deadpixeltest.org, sirve perfectamente. Una aplicación de prueba de pantalla de Google Play puede resultar más cómoda porque puede ocultar las barras de estado y navegación, cambiar los colores automáticamente e incluir degradados.

Algunos móviles incorporan sus propias pruebas:

- Samsung Galaxy: en muchos modelos puedes marcar `*#0*#` y usar las pruebas de rojo, verde, azul, negro y respuesta táctil. En Samsung Members también puedes abrir Ayuda > Ver pruebas, dentro de Diagnóstico.
- Google Pixel: marca `*#*#7287#*#*` para abrir Pixel Repair Diagnostics en los dispositivos compatibles. Necesitas conexión a internet.
- Xiaomi, Redmi y POCO: prueba `*#*#6484#*#*` para abrir el menú CIT.
- Motorola: en la aplicación Device Help, abre el diagnóstico del dispositivo y entra en las pruebas de hardware.

Sobre un fondo blanco, los píxeles muertos parecen puntos negros diminutos. Sobre un fondo negro, los píxeles atascados aparecen como puntos brillantes de color. Las pantallas roja, verde y azul ayudan a identificar qué subpíxel está bloqueado.

Hazlo con calma. Una pasada lenta por los bordes y las esquinas descubre más defectos que cambiar de color lo más rápido posible.

## Comprueba la uniformidad del brillo y el quemado

En un móvil con pantalla LCD, una imagen negra en una habitación oscura ayuda a detectar fugas de luz. Suelen verse como zonas algo más claras o nubladas cerca de los bordes. Las pantallas OLED no usan retroiluminación, así que no presentan este problema de la misma forma.

OLED tiene su propio riesgo: el quemado de pantalla. Los paneles AMOLED, Super AMOLED y Dynamic AMOLED pueden envejecer de manera desigual cuando los mismos elementos permanecen visibles durante mucho tiempo. Las barras de navegación, los iconos de estado, el teclado y los controles de redes sociales son formas habituales.

Usa un fondo gris uniforme con brillo medio para buscar señales de quemado. Fíjate en sombras tenues del teclado, los botones de navegación, el reloj o las barras de una aplicación. Una pantalla roja también puede hacer más visibles algunos casos, porque los distintos subpíxeles no envejecen al mismo ritmo.

El quemado es permanente. Las aplicaciones que prometen arreglarlo suelen intentar desgastar el resto del panel para que la marca antigua destaque menos. Eso no es una reparación real.

## Prueba la respuesta táctil

Una pantalla puede verse perfecta y tener un digitalizador defectuoso. El digitalizador es la capa que detecta el toque.

Abre una aplicación de dibujo y elige un pincel fino. Traza líneas horizontales desde la parte superior hasta la inferior y después líneas verticales de izquierda a derecha. Déjalas bastante juntas. Si la línea se corta siempre en la misma zona, esa parte del digitalizador no está registrando bien el dedo.

Una aplicación de prueba táctil con cuadrícula facilita el proceso. Cada casilla debería marcarse al pasar el dedo. Las zonas muertas se quedan vacías.

El menú `*#0*#` de Samsung incluye una prueba táctil en muchos Galaxy. Algunos móviles Android también responden a `*#*#2664#*#*`, pero este código funciona de forma mucho menos uniforme que las herramientas del fabricante. Si no hace nada, no pasa nada. La prueba de dibujo es suficiente.

Presta especial atención a los bordes. En pantallas curvas o con marcos muy finos, la respuesta lateral puede ser más difícil de valorar, sobre todo si está activa la protección contra toques accidentales con la palma.

## Prueba el multitáctil

La mayoría de los móviles actuales admite al menos cinco puntos táctiles simultáneos, y muchos llegan a diez. Una aplicación de prueba multitáctil muestra un círculo numerado por cada dedo.

Apoya varios dedos y muévelos despacio. Los círculos deberían seguirlos sin saltar ni desaparecer. Si el móvil pierde siempre uno de los dedos en la misma zona, es una señal útil.

Esto importa en juegos, gestos de pellizco para ampliar, escritura y funciones de accesibilidad.

## Vigila los toques fantasma

Los toques fantasma son pulsaciones que aparecen sin que nadie toque la pantalla. El móvil abre aplicaciones, escribe letras, se desplaza o pulsa botones por sí solo.

Primero quita el protector de pantalla y la funda. Los protectores baratos, la humedad atrapada y la presión en los bordes pueden confundir al digitalizador. Limpia la pantalla y prueba tanto con el cargador conectado como desconectado, porque un cargador defectuoso puede introducir ruido eléctrico en la respuesta táctil.

Después inicia el móvil en modo seguro. Si los toques fantasma continúan, es más probable que el origen sea físico. Si desaparecen, puede estar implicada una aplicación de terceros o una superposición en pantalla.

Si el problema empezó justo después de una actualización importante del sistema, considera seriamente la posibilidad de un fallo de software. Android 17 llegó primero a los Pixel compatibles y el calendario del resto depende de cada fabricante, así que un error táctil relacionado con una actualización puede aparecer antes en una marca que en otra. Instala los parches pendientes y vuelve a probar antes de pagar una sustitución de pantalla.

## Qué hacer si encuentras un defecto

En un móvil de segunda mano, cualquier píxel muerto, zona táctil sin respuesta, toque fantasma o quemado visible debería influir en el precio. No aceptes que te digan que un problema táctil es «solo software» si no puedes comprobar por tu cuenta el modo seguro o las herramientas de diagnóstico.

Si el móvil es nuevo, contacta cuanto antes con el vendedor o el fabricante. Las políticas comerciales de Pixel, Samsung y los operadores no tratan igual todos los defectos de píxeles. En España, los bienes nuevos comprados a un vendedor profesional tienen una garantía legal de tres años, pero sigue siendo más prudente comunicar el problema durante el plazo de devolución o cambio, en lugar de esperar.

Puede merecer la pena probar una herramienta de cambio rápido de colores con un píxel atascado, pero mantén expectativas bajas. Úsala durante una sesión corta, no toda la noche con el brillo al máximo. Los píxeles muertos, los toques fantasma y las zonas táctiles sin respuesta suelen requerir la sustitución del conjunto de pantalla.

El precio de la reparación varía demasiado como para dar una cifra general. Sustituir el LCD de un modelo económico puede ser relativamente barato. Una pantalla OLED curva de gama alta puede costar tanto que empiece a tener más sentido cambiar de móvil. Pide un presupuesto para el modelo exacto antes de decidir.

## Respuestas rápidas

### ¿Puede un protector de pantalla causar píxeles muertos?

No. Los píxeles muertos están dentro del panel. Un protector sí puede causar problemas táctiles, pulsaciones falsas, mala respuesta en los bordes o fallos del sensor de proximidad, pero no mata píxeles.

### ¿Se extienden los píxeles muertos?

Un píxel muerto aislado suele seguir siendo uno solo. Si aparecen más con el tiempo, puede haber daños en el panel, presión sobre la pantalla o una conexión que está fallando.

### ¿Cubre la garantía el quemado de pantalla?

A veces, pero no lo des por hecho. Muchos fabricantes consideran el quemado un efecto del desgaste, especialmente en móviles OLED antiguos. Un quemado intenso y prematuro merece una reclamación, aunque la cobertura dependerá de la garantía aplicable y de la legislación de consumo.

### ¿Es aceptable un píxel muerto en un móvil nuevo?

Para quien compra, no. Un móvil nuevo debería tener una pantalla limpia. Que el fabricante esté de acuerdo depende de su política, y por eso importa tanto actuar dentro del plazo de devolución o cambio.
