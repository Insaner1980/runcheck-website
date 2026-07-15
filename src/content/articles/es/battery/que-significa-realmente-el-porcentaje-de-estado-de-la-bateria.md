---
title: "¿Qué significa realmente el porcentaje de estado de la batería?"
description: "El porcentaje de estado de la batería muestra su capacidad máxima actual frente a la que tenía cuando era nueva. Descubre qué significa, por qué importa el 80 % y cómo lo muestran los móviles Android."
listSummary: "bateria, estado y diagnostico"
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Health"
tags: ["bateria","estado","diagnostico","android","guia"]
locale: "es"
draft: false
---
El porcentaje de estado de la batería mide el desgaste. No es lo mismo que el porcentaje que ves en la barra de estado.

Si el móvil indica un 87 % de estado, la celda puede almacenar aproximadamente el 87 % de la carga que admitía cuando era nueva. Sigue funcionando. El depósito es simplemente más pequeño.

## La cifra que hay detrás de la cifra

Toda batería de móvil parte de una capacidad nominal. Es la cantidad de carga que la celda se diseñó para almacenar y suele expresarse en mAh. Una batería grande de 5.000 mAh debería poder guardar aproximadamente esa cantidad cuando es nueva.

Después entra en juego la química. Cada ciclo de carga y descarga envejece un poco la celda. El calor, un voltaje alto, las descargas profundas, la carga rápida y el simple paso del tiempo se van acumulando. La capa de interfaz de electrolito sólido del interior se engrosa, aumenta la resistencia interna y queda menos litio activo disponible para transportar carga entre los electrodos.

El porcentaje de estado compara la capacidad de carga completa actual con la capacidad original. Si la batería solo llega ya a unos 4.350 mAh, su estado ronda el 87 %.

Esa es la parte útil de la cifra. Indica cuánto se ha reducido lo que significa «llena».

## El porcentaje de estado no es el porcentaje de carga

Aquí es donde suele producirse la confusión. El porcentaje de carga indica lo llena que está la batería en este momento. El estado de la batería muestra cuánta energía puede almacenar cuando está llena.

Un móvil al 100 % de carga y con un 85 % de estado no contiene la misma energía que contenía al 100 % cuando era nuevo. Está lleno en relación con su capacidad envejecida. Por eso dos móviles pueden mostrar ambos un 100 % en la barra de estado y ofrecer autonomías muy distintas.

El tamaño original también cambia cómo se percibe el dato. Un móvil con una batería de 5.500 mAh al 82 % de estado puede durar más que un modelo compacto al 95 %. El porcentaje es útil, pero no cuenta toda la historia.

## Cómo muestra Android el estado de la batería

Android nunca ha gestionado el estado de la batería de forma tan clara como iOS. Durante años, la información pública que podía ver la mayoría se limitaba a un estado básico como «Good», «Overheat», «Dead», «Cold», «Over Voltage», «Unknown» o «Unspecified failure». Esos valores señalan condiciones generales o fallos evidentes, no un porcentaje preciso de capacidad.

Algunos móviles siguen mostrando únicamente ese estado básico. En dispositivos con Android puro o una versión cercana, el menú de pruebas `*#*#4636#*#*` puede enseñar información de la batería si el fabricante lo ha dejado habilitado. Muchos lo ocultan. Otros muestran temperatura y voltaje, pero no la capacidad restante.

Android 17 tampoco ha convertido este dato en algo universal. Se lanzó primero para dispositivos Pixel compatibles, pero el estado de la batería continúa dependiendo del modelo y de la información que exponga el hardware.

Pixel es el ejemplo actual más claro de una página pensada para el usuario. En Pixel 8a y modelos posteriores, Google muestra **Estado de la batería** en **Ajustes > Batería > Estado de la batería**. El resultado puede ser Normal, Reducida o No disponible, y la página **Capacidad de la batería** ofrece un porcentaje estimado frente a la capacidad original. Otros Pixel compatibles, como Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 y Pixel 8 Pro, no muestran el estado de la batería, aunque sí pueden incluir otras funciones de gestión.

Samsung sigue otro camino. La aplicación Samsung Members permite ejecutar Diagnóstico del teléfono y consultar el estado de la batería. Algunas versiones recientes de One UI también muestran más información en Ajustes en determinados modelos, pero la redacción y los datos disponibles cambian según el dispositivo y la región.

En otras marcas Android la situación es irregular. Algunos Xiaomi, HONOR, OnePlus, OPPO y realme muestran la capacidad máxima dentro de los ajustes de batería. Muchos dispositivos antiguos, modelos económicos y móviles cuyo medidor de carga ofrece pocos datos no lo hacen. En teoría, el framework de Android admite más información que antes. En la práctica, el hardware y el software del fabricante deciden lo que puedes ver.

Por eso runcheck utiliza el estado de la batería como una señal más, no como un veredicto único. Cuando el móvil expone el estado, el voltaje, la temperatura, la corriente, el número de ciclos o la capacidad, runcheck puede presentar esos indicadores con niveles de confianza en lugar de fingir que todos los Android ofrecen datos de la misma calidad.

## Por qué todo el mundo habla del 80 %

El 80 % no es una cifra mágica. Es un umbral habitual de vida útil.

Por debajo del 80 % de la capacidad original, la autonomía se ha acortado lo suficiente como para que muchas personas empiecen a notarlo. La resistencia interna también suele ser mayor, lo que aumenta la posibilidad de una caída de voltaje bajo esfuerzo. El móvil puede apagarse al hacer una ráfaga de fotos, ejecutar un juego o utilizarse durante un paseo con frío, aunque un momento antes el porcentaje no pareciera bajo.

Los fabricantes actuales publican objetivos de ciclos diferentes, así que el antiguo consejo de «300-500 ciclos» es demasiado simplista. Google indica que Pixel 8a y modelos posteriores deberían conservar hasta un 80 % de capacidad durante unos 1.000 ciclos. Los modelos desde Pixel 3 hasta Pixel 8 Pro y Pixel Fold están clasificados para unos 800 ciclos. En la Unión Europea, los smartphones y tablets introducidos en el mercado deben cumplir un requisito de ecodiseño de al menos 800 ciclos de carga y descarga conservando como mínimo el 80 % de la capacidad inicial.

Para el uso diario, yo interpretaría las cifras así:

- Por encima del 85 % suele estar bien, salvo que el móvil tuviera una batería pequeña desde el principio.
- Alrededor del 80 % es cuando quienes usan mucho el móvil suelen empezar a planificar un cambio.
- Por debajo del 75 %, las quejas sobre autonomía dejan de ser sorprendentes.
- Por debajo del 70 %, cambiar la batería suele ser la opción práctica si quieres conservar el móvil.

No son leyes. Son puntos de decisión.

## Por qué el porcentaje puede estar equivocado

El estado de la batería es una estimación. El móvil no saca la batería, la lleva a un laboratorio y la mide en condiciones controladas.

El chip medidor calcula la capacidad siguiendo la carga que entra y sale, leyendo el voltaje, observando la temperatura y comparando esos datos con un modelo de cómo debería comportarse la celda. Ese modelo puede desviarse. Periodos largos con cargas poco profundas, un cambio de batería, una actualización del sistema o una sucesión de temperaturas anómalas pueden hacer que la cifra se mueva.

Los pequeños saltos son normales. Si el estado pasa del 88 % al 90 % después de varios ciclos más completos, la batería no se ha curado. La estimación ha mejorado.

Las aplicaciones de terceros tienen la misma limitación, aunque utilicen otro método. AccuBattery, por ejemplo, estima la capacidad midiendo la corriente durante las sesiones de carga y calculando una media a lo largo del tiempo. Puede ser útil después de una o dos semanas de uso normal, pero una sola sesión no basta. Un cable barato, el calor, una carga parcial o un móvil que reduzca la velocidad cerca del 80 % pueden distorsionar el resultado.

El hardware también importa. Los móviles de gama alta suelen tener medidores de carga mejores que los modelos baratos. Algunos ofrecen valores estables y útiles. Otros devuelven siempre un 100 % porque no exponen datos reales de envejecimiento.

## Qué hacer con la cifra

Utiliza el porcentaje como una tendencia. Una lectura aislada resulta interesante. Una caída observada durante seis meses aporta mucha más información.

Si el móvil indica un 89 % y aguanta todo el día, no hagas nada. Si marca un 78 % y necesitas cargarlo dos veces al día, merece la pena consultar cuánto cuesta cambiar la batería. Si se apaga al 25 %, se calienta durante un uso ligero o el porcentaje salta de forma errática, da más importancia a esos síntomas que a la cifra.

Y si la batería se hincha, deja de usar el móvil. El porcentaje ya no importa.

runcheck ayuda porque permite ver el estado junto con la temperatura, el voltaje, la fiabilidad de la corriente, la velocidad de descarga y el historial. El envejecimiento rara vez aparece como una única cifra limpia. Se manifiesta como un patrón.

## Preguntas habituales

### ¿Un 85 % de estado de la batería es malo?

No. Al 85 %, la celda ha perdido capacidad, pero la mayoría de los móviles siguen siendo utilizables. Por ejemplo, una batería de 5.000 mAh conserva alrededor de 4.250 mAh al 85 %. Puede ser suficiente para completar el día, según el móvil y tus hábitos.

### ¿Puede volver a subir el estado de la batería?

La capacidad química real no se recupera. El envejecimiento de los iones de litio es permanente. La cifra mostrada sí puede subir si el móvil estaba infravalorando la capacidad y después la recalcula con más precisión.

### ¿Por qué mi móvil muestra «Good» en lugar de un porcentaje?

Porque muchos Android solo exponen un estado básico de la batería. «Good» significa que Android no detecta una condición de fallo. No significa que la celda conserve el 100 % de su capacidad original.

### ¿Debo cambiar la batería exactamente al llegar al 80 %?

No de forma automática. Cámbiala cuando el móvil ya no encaje en tu día, se apague de forma inesperada o muestre el estado Reducida y la autonomía se haya convertido en un problema. El 80 % es una señal para empezar a planificar, no una cuenta atrás.
