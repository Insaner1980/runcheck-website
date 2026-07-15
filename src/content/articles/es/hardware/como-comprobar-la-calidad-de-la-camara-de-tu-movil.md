---
title: "Cómo comprobar la calidad de la cámara de tu móvil"
description: "Métodos prácticos para comprobar la cámara de un móvil Android, incluidos el enfoque automático, el cambio de objetivo, los defectos del sensor, la estabilidad de vídeo y las herramientas de diagnóstico."
listSummary: "hardware, pruebas y diagnostico"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["hardware","pruebas","diagnostico","android","guia"]
locale: "es"
draft: false
---
---

Probar una cámara resulta más fácil cuando dejas de pensar en megapíxeles. Un sensor de 50 MP puede hacer fotos malas si el objetivo está sucio, el enfoque automático está averiado o el módulo de cámara se ha desplazado ligeramente tras un golpe.

El objetivo es sencillo: comprobar si las cámaras del móvil se comportan como deberían.

## Empieza con un objetivo limpio y un motivo sencillo

Limpia el cristal de los objetivos con un paño de microfibra limpio. Hazlo antes de cualquier otra prueba. Una huella puede parecer un HDR defectuoso, falta de nitidez, neblina en el objetivo o mal rendimiento con poca luz.

Abre la aplicación de cámara predeterminada y apunta a algo con detalle fino. Sirven un texto impreso, una pared con textura, un teclado o ramas de árboles contra el cielo. Toca la pantalla para enfocar. La imagen debería quedar nítida con rapidez y mantenerse así.

Si la cámara busca el enfoque hacia delante y hacia atrás sin estabilizarse, el mecanismo de enfoque automático puede estar dañado. Es habitual después de una caída, porque el pequeño motor de bobina móvil que desplaza la lente es delicado. Si la imagen no queda nítida pulses donde pulses, compárala con otro objetivo del mismo móvil antes de culpar al software.

Cambia entre todas las cámaras disponibles: principal, ultra gran angular, teleobjetivo, macro y frontal. Si solo una se ve borrosa mientras las demás enfocan bien, el problema apunta a ese módulo. Puede haber polvo bajo el cristal protector, una cubierta agrietada, humedad en la zona de la cámara o un módulo desalineado después de una reparación.

## Busca defectos que se repitan

Fotografía una pared blanca lisa o una hoja limpia con iluminación uniforme. Así los defectos destacan más.

Un ligero oscurecimiento en las esquinas es normal. Los objetivos de los móviles son diminutos y el software suele corregir los bordes. Lo que buscas es una mancha oscura intensa, una zona coloreada o una marca que aparezca exactamente en el mismo lugar en todas las fotos.

Después haz una foto con poca luz y sin flash. Amplíala. Los puntos brillantes de color que permanecen en la misma posición en varias imágenes pueden ser píxeles calientes o daños del sensor. Un píxel extraño aislado no es motivo para alarmarse. Un grupo sí es distinto.

Ahora toma una foto hacia una ventana o una lámpara brillante, pero no directamente al sol. Un tono morado o verde extendido por toda la imagen puede indicar daños alrededor del filtro del sensor. Los reflejos normales aparecen como rayas o formas fantasma cerca de una luz intensa. No deberían empeorar de repente respecto a cómo se veía la cámara antes de una caída o reparación.

## Prueba la exposición y el color

Haz la misma foto dos veces: una con luz diurna y otra en interiores con iluminación cálida. Los tonos de piel, las paredes blancas y los objetos grises sirven como referencia porque el ojo detecta con facilidad cuando se ven mal.

Los móviles aplican mucho procesamiento, así que no esperes un color completamente neutro. Pixel, Samsung, Xiaomi y OnePlus toman decisiones distintas. La comparación útil es con el mismo modelo, no con otra marca que tenga un estilo de imagen diferente.

Consulta fotos tomadas con el mismo modelo en internet si necesitas una referencia. Mira muestras reales en lugar de confiar únicamente en puntuaciones de cámaras. Las notas pueden orientar, pero una ampliación comparada lado a lado dice más cuando intentas diagnosticar tu propio móvil.

## Graba un vídeo corto

Graba entre 20 y 30 segundos con la resolución más alta que uses normalmente. Mueve la cámara lentamente de un lado a otro, camina unos pasos y habla mientras grabas.

Reproduce el vídeo y comprueba cuatro cosas: enfoque, estabilización, pérdida de fotogramas y sincronización del audio. Un móvil con estabilización óptica debería suavizar los pequeños movimientos de la mano. No convertirá una grabación caminando en una toma de gimbal, pero tampoco debería verse violentamente temblorosa.

Si el vídeo se congela un instante, da tirones o pierde la sincronización del audio, la causa puede ser la temperatura, la velocidad de escritura del almacenamiento, un fallo de la aplicación de cámara o el hardware. Reinicia el móvil, libera espacio y repite la prueba. Si vuelve a ocurrir con el dispositivo frío y almacenamiento disponible, tómalo en serio.

## Usa las herramientas de diagnóstico integradas

Los Samsung Galaxy pueden probar las cámaras mediante Samsung Members. Abre la aplicación, toca Ayuda y luego Ver pruebas dentro de Diagnóstico. Ejecuta la prueba de cámara que aparezca en tu modelo o inicia el diagnóstico completo. Las pruebas disponibles varían, pero Samsung incluye Cámara entre las funciones que puede comprobar.

El código `*#0*#` de Samsung también abre opciones de cámara en muchos Galaxy. Mega Cam prueba la cámara trasera y Front Cam la cámara frontal. Estas comprobaciones confirman que los módulos pueden abrirse y capturar una imagen. No valoran por ti la calidad fotográfica.

Los Xiaomi, Redmi y POCO suelen incluir pruebas de cámara en el menú CIT, que se abre con `*#*#6484#*#*`. En móviles con varias cámaras traseras, el menú puede comprobar cada objetivo por separado.

Los Pixel no tienen un menú equivalente al `*#0*#` de Samsung. El código de Google `*#*#7287#*#*` abre Pixel Repair Diagnostics en dispositivos compatibles, con conexión a internet. Las pruebas concretas pueden variar según el modelo, la región y la versión del software.

Android 17 no hizo universales los diagnósticos de cámara. Siguen dependiendo del OEM.

## Comprueba Camera2 si faltan funciones

Si las aplicaciones de cámara de terceros no pueden usar exposición manual, RAW, vídeo con alta frecuencia de fotogramas o un teleobjetivo, instala una aplicación de inspección de Camera2 API, como Camera2 API Probe. Muestra lo que cada cámara declara a Android: resoluciones compatibles, modos de enfoque automático, estabilización y nivel de hardware.

Los niveles de hardware importan. `LEGACY` indica que la cámara funciona mediante un modo de compatibilidad antiguo. `LIMITED` ofrece compatibilidad básica con Camera2. `FULL` añade controles manuales más completos. `LEVEL_3` incorpora capacidades más avanzadas, incluidas la captura RAW y las funciones de reprocesamiento en los dispositivos que las exponen.

Open Camera también resulta útil para separar el procesamiento de la aplicación original del funcionamiento físico de la cámara. Si Open Camera enfoca bien pero la aplicación del fabricante no, borra la caché de la aplicación Cámara y espera a una actualización de software antes de asumir que el módulo está averiado.

Esto no te dirá si el objetivo está rayado. Te indica si Android puede ver las funciones que la cámara debería ofrecer.

## Cuándo es probablemente un problema de hardware

Una vista previa negra en una sola cámara, mientras el resto de la aplicación abre con normalidad, suele indicar un módulo averiado o un conector flojo. Si la aplicación de cámara no abre en absoluto, la causa también puede ser software, así que borra su caché y reinicia antes de asumir lo peor.

El enfoque borroso, las manchas repetidas, los grupos de píxeles muertos, un tono intenso y una cámara que se comporta de forma distinta a todas las demás son señales físicas. Las actualizaciones pueden cambiar el color o el nivel de enfoque artificial. No pueden limpiar humedad detrás del objetivo ni reparar un motor de enfoque dañado.

Si el problema apareció después de cambiar la pantalla, la tapa trasera o la batería, vuelve pronto al taller. Puede que el conector de la cámara no esté completamente asentado o que entrara polvo mientras el móvil estaba abierto.

runcheck no puntúa tus fotos, pero puede ayudarte a detectar las condiciones que perjudican el rendimiento de la cámara, como el calor, el poco espacio disponible o un consumo elevado de batería durante grabaciones largas.
