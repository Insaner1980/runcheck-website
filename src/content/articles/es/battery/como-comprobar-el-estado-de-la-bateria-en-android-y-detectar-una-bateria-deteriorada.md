---
title: "Cómo comprobar el estado de la batería en Android y detectar una batería deteriorada"
description: "Una batería que empieza a fallar rara vez se anuncia con un apagado espectacular. Las señales suelen aparecer poco a poco: menos tiempo de pantalla encendida, un reinicio inesperado o el móvil templado durante un uso ligero. Descarga rápida, apagados cuando todavía queda un 20 % o más, cargas cada vez más lentas, calor persistente durante tareas normales o una tapa trasera visiblemente abombada. Cualquier combinación de estos síntomas apunta a una batería degradada."
listSummary: "Una batería que empieza a fallar rara vez se anuncia con un apagado espectacular."
hub: "battery"
sourceNumber: 11
order: 1
subgroup: "Health"
tags: ["bateria","estado","diagnostico","android","guia"]
locale: "es"
draft: false
---
A diferencia de los iPhone, que muestran un porcentaje de estado de la batería en los modelos compatibles desde iOS 11.3, Android ha hecho históricamente que este dato sea más difícil de encontrar. No existe una pantalla universal de «estado de la batería». Hay que reunir la información a partir de las herramientas del fabricante, menús ocultos, patrones de uso y aplicaciones de diagnóstico.


## Respuesta rápida: cómo comprobar el estado de la batería

Hay tres métodos, del más rápido al más detallado.

**Herramientas integradas del fabricante.** Entra en Ajustes > Batería y busca algún indicador del estado. En un **Samsung**, abre Samsung Members, pulsa Asistencia, inicia Diagnóstico del teléfono y elige Estado de la batería. En los **Google Pixel 8a y modelos posteriores**, el estado aparece en Ajustes > Batería > Estado de la batería, y el número de ciclos se encuentra en Ajustes > Información del teléfono > Información de la batería. Algunos modelos recientes de **OnePlus, OPPO y realme** muestran el estado de la batería en Ajustes, pero depende del modelo, la región y la versión del sistema. En ciertos **Xiaomi y POCO**, HyperOS ofrece un porcentaje o información adicional dentro de las opciones de protección de la batería, aunque la disponibilidad cambia según el modelo y la versión.

**Menú de diagnóstico oculto.** Abre la aplicación Teléfono y marca `*#*#4636#*#*`. En los dispositivos compatibles aparece un menú de pruebas con información como el estado, la temperatura y el voltaje de la batería. El código no funciona en todos los móviles. Muchos modelos recientes de Samsung y Pixel lo tienen desactivado.

**Aplicación de diagnóstico.** Las aplicaciones de terceros estiman el estado de la batería siguiendo los patrones de carga y descarga durante varios días. Es la opción más detallada cuando el móvil no ofrece un indicador integrado.

Una capacidad estimada inferior al 80 % de la capacidad nominal, o un estado como «Reducida», «Débil» o «Mala», hace razonable plantearse un cambio de batería. «No disponible» solo significa que el teléfono no puede calcular ese dato.


## Por qué se deterioran las baterías

Todos los móviles Android utilizan baterías de iones de litio o polímero de litio. Son ligeras, almacenan mucha energía y se pueden recargar, pero su propia química limita su vida útil.

**Los ciclos de carga son uno de los principales mecanismos de envejecimiento.** Un ciclo completo equivale a utilizar el 100 % de la capacidad de la batería, ya sea de una vez o sumando varias cargas parciales. Gastar un 50 % hoy y otro 50 % mañana cuenta como un ciclo. Durante años se habló de un umbral de 500 ciclos, pero muchos modelos actuales están diseñados para conservar alrededor del 80 % de su capacidad original después de unos 800-1.000 ciclos completos. Los móviles introducidos en el mercado de la Unión Europea desde el 20 de junio de 2025 deben soportar al menos 800 ciclos de carga y descarga conservando como mínimo el 80 % de la capacidad.

**El envejecimiento por tiempo ocurre aunque no uses el móvil.** Las celdas de iones de litio sufren reacciones químicas secundarias inevitables por el simple paso del tiempo y la termodinámica. La capa de interfaz de electrolito sólido del ánodo se va engrosando y aumenta la resistencia interna. Un móvil guardado en un cajón durante un año tendrá una batería mediblemente más débil que cuando era nuevo.

**El calor es lo que más daño causa.** Las temperaturas superiores a 30 °C (86 °F) ya se consideran elevadas para una celda de iones de litio. Cargar mientras juegas, dejar el móvil dentro de un coche caliente o utilizarlo bajo el sol acelera la degradación química. Un único episodio prolongado de sobrecalentamiento puede provocar daños permanentes. Además, los efectos se acumulan: una temperatura alta combinada con una carga cercana al 100 % es la peor situación, por eso muchos móviles actuales permiten limitar la carga al 80 % o ralentizarla durante la noche. Incluso con un clima moderado, un móvil sobre el salpicadero y a pleno sol puede alcanzar temperaturas perjudiciales en menos de una hora.

**Los hábitos de carga importan, aunque menos de lo que suele decirse.** Cargar siempre hasta el 100 % y agotar la batería hasta el 0 % somete la celda a más tensión que mantenerla dentro del intervalo del 20-80 %. La carga rápida también produce más calor que la carga normal. Aun así, la diferencia al cabo de un año entre cargar siempre rápido hasta el 100 % y cargar con suavidad hasta el 80 % suele ser menor de lo que sugieren muchos consejos de Internet. El calor y el tiempo pesan más. El verdadero riesgo son los cargadores no certificados: una alimentación inestable puede dañar las celdas de forma permanente.

El resultado es sencillo: una batería de 5.000 mAh se convierte poco a poco en una de 4.000 mAh y luego en una de 3.500 mAh, hasta que ya no aguanta un día normal.


## Pasos de diagnóstico manual

Los ajustes integrados de Android ofrecen pistas útiles incluso cuando no muestran un porcentaje preciso. Ninguno de estos pasos requiere instalar nada.

**Comprueba el consumo por aplicación.** Ve a Ajustes > Batería > Uso de batería. La ruta exacta cambia según el fabricante y algunos móviles agrupan estas opciones bajo apartados como cuidado del dispositivo. Busca aplicaciones que consuman una cantidad desproporcionada, sobre todo si apenas las has utilizado. Una aplicación en segundo plano responsable de un 15 % o más del consumo puede ser el verdadero problema, no una celda degradada.

**Compara el tiempo de pantalla encendida.** Anota cuántas horas de pantalla ofrece una carga completa y compáralas con las especificaciones originales o con lo que recuerdas de los primeros meses. Una caída del 30-40 % respecto a la autonomía anterior apunta a una degradación real.

**Observa las caídas bruscas de porcentaje.** Una batería sana se descarga de forma más o menos lineal. Pasar del 45 % al 20 % en pocos minutos con un uso ligero, o apagarse al 15 %, indica que la curva de voltaje real ya no coincide con la estimación de carga del sistema. Es un síntoma clásico de envejecimiento.

**Mide el tiempo de carga.** Comprueba cuánto tarda en pasar del 20 % al 80 % utilizando siempre el mismo cargador. Si tarda claramente más que antes, puede haber aumentado la resistencia interna. Lo contrario también da pistas: un móvil que carga muy rápido pero se descarga con la misma rapidez quizá esté calculando mal la capacidad restante.

**Fíjate en los apagados bajo carga.** Una batería degradada no puede mantener el voltaje cuando aumenta bruscamente la demanda. Que el móvil se apague al abrir un juego exigente pese a mostrar un nivel razonable es una de las señales más claras de final de vida útil.

**Comprueba la temperatura al tacto.** Navegar, enviar mensajes o usar redes sociales de forma ligera debería producir como mucho un calor suave. Si la parte trasera está claramente caliente durante esas tareas, el aumento de la resistencia interna puede estar generando calor adicional.

**Busca señales físicas.** Una tapa trasera que se levanta, una pantalla que empieza a separarse del marco o un móvil que se balancea sobre una superficie plana pueden indicar que la batería se ha hinchado. Es un problema de seguridad. Deja de usar el móvil, no lo cargues y llévalo cuanto antes a un servicio técnico. No es algo que convenga «vigilar». La hinchazón no mejora por sí sola.

**Usa el diagnóstico del fabricante.** Además de los indicadores anteriores, algunos móviles incluyen pruebas específicas. En los Pixel compatibles, busca Diagnóstico de la batería en Ajustes > Batería. Samsung Members incluye una sección de Diagnóstico del teléfono que permite comprobar la batería. En determinados Xiaomi, los ajustes de protección de la batería muestran información más detallada, según el modelo y la versión de HyperOS.


## Diagnóstico avanzado: voltaje, temperatura y patrones de descarga

Varias métricas permiten entender mejor qué sucede dentro de la celda.

**Comportamiento del voltaje.** Una celda de iones de litio completamente cargada suele estar alrededor de 4,2 V y, descargada, alrededor de 3,0-3,3 V. Una batería sana mantiene un voltaje relativamente estable bajo una demanda moderada. Son señales de advertencia un voltaje que fluctúa de forma errática durante un uso ligero, que cae bruscamente cuando la demanda es moderada o que está muy por debajo de 3,7 V mientras el móvil aún muestra un porcentaje de batería. Estos patrones pueden indicar una estimación desajustada o una degradación que ya impide un uso fiable.

**Patrones de temperatura.** El funcionamiento normal suele situarse entre 20 °C y 35 °C (68-95 °F). Hasta 40 °C puede ser aceptable durante tareas intensivas, como jugar o utilizar la navegación. Superar de forma continua los 45 °C activa la gestión térmica del móvil, reduce el rendimiento y ralentiza la carga. Una batería que alcanza esas temperaturas con frecuencia entra en un círculo vicioso: más calor provoca más degradación, y esa degradación genera todavía más calor.

**Forma de la curva de descarga.** En una celda sana, la parte central de la descarga, aproximadamente entre el 30 % y el 70 %, es relativamente plana y lenta. A medida que avanza la degradación, esa zona se comprime: la batería baja más deprisa en los porcentajes altos, el tramo central se acorta y las lecturas por debajo del 30 % se vuelven menos fiables. Una batería que se desploma entre el 50 % y el 30 % ha perdido capacidad útil. Seguir el patrón durante varios días o semanas permite ver si empeora y a qué velocidad.

**Efectos de la resistencia interna.** Las herramientas de consumo no pueden medirla directamente, pero sus consecuencias sí se ven: calor durante la carga, un nivel que cae deprisa bajo esfuerzo y se recupera al dejar el móvil en reposo, o una velocidad máxima de carga menor. Todo procede de la dificultad de la batería para mover iones a través de unas estructuras internas degradadas.

Las aplicaciones de diagnóstico convierten estas observaciones en cifras. Siguen las cargas y descargas durante varios días para estimar la capacidad actual frente a la capacidad nominal. Si una batería de 5.000 mAh solo almacena ya 3.800 mAh, su estado es aproximadamente del 76 % y el cambio se ha vuelto aconsejable. La mayoría de las aplicaciones necesitan varios días y varios ciclos completos para estabilizar la estimación, así que no saques conclusiones el primer día.

runcheck combina el diagnóstico de batería con el análisis de red, temperatura y almacenamiento en una evaluación unificada. Es útil porque los problemas de batería no siempre aparecen aislados. Un componente que funciona mal y genera calor puede parecer un problema de autonomía, mientras que un cuello de botella en el almacenamiento obliga a la CPU a trabajar más de lo necesario.

Evita las aplicaciones que prometen «potenciar», «calibrar» o «restaurar» el estado de la batería. Ninguna aplicación puede revertir la degradación química. Las que resultan útiles muestran lecturas reales de voltaje y temperatura, guardan datos a lo largo del tiempo y funcionan en el propio dispositivo sin exigir cuentas ni subir información a la nube.


## Preguntas frecuentes

**¿Cuánto suele durar la batería de un móvil Android antes de tener que cambiarla?**

Durante años se utilizó el umbral de 500 ciclos como referencia, pero es demasiado bajo como regla general para los modelos actuales. Muchos móviles recientes están diseñados para conservar alrededor del 80 % de la capacidad después de unos 800-1.000 ciclos completos, según el modelo, la química, los hábitos de carga, la exposición al calor y la intensidad de uso. Algunas baterías duran cuatro años. Otras muestran una degradación clara después de 18 meses.

**¿Con qué porcentaje de estado conviene cambiar la batería?**

Alrededor del 80 % de la capacidad nominal es cuando la mayoría empieza a notar la diferencia. En ese punto, una batería de 4.500 mAh almacena en la práctica unos 3.600 mAh. Por debajo del 70 %, a muchas personas les resulta difícil utilizar el móvil con normalidad durante todo el día.

**¿Se puede recuperar el estado de la batería?**

No. La degradación es un proceso químico irreversible. Lo que sí puedes hacer es ralentizar el deterioro futuro: mantener el móvil fresco, cargarlo entre el 20 % y el 80 % cuando sea práctico, usar el cargador del fabricante o una alternativa certificada y activar las funciones de carga inteligente si el móvil las ofrece.

**¿Puede una actualización de software causar un consumo que parezca un fallo de hardware?**

Sí, y ocurre más de lo que mucha gente cree. Una actualización mal optimizada puede disparar el uso de la CPU en segundo plano, consumir batería y generar calor. Antes de dar por hecho que existe un fallo físico, comprueba en Ajustes > Batería > Uso de batería si alguna aplicación está gastando una cantidad anormal. Si el responsable es una aplicación o un proceso del sistema, actualizarlo, borrar su caché o esperar a un parche suele resolverlo.

**¿Es seguro seguir usando un móvil con la batería hinchada?**

No. Deja de usarlo, no lo cargues y llévalo a un servicio técnico. La hinchazón indica acumulación de gas por degradación química interna. En casos extremos, una batería de iones de litio hinchada puede romperse o incendiarse.

**¿La carga rápida degrada antes la batería?**

La carga rápida genera más calor, y el calor acelera la degradación. Los protocolos actuales lo controlan bastante bien: cargan deprisa hasta aproximadamente el 70-80 % y luego reducen la velocidad. El efecto existe, pero suele ser pequeño frente a la temperatura ambiente y los hábitos generales de carga. Utilizar el cargador del fabricante suele ser seguro. Reservar la carga rápida para cuando realmente la necesitas y usar una carga normal durante la noche es un compromiso razonable.

**¿Por qué el móvil se apaga al 15-20 % en lugar de llegar al 0 %?**

La capacidad real de la batería ya no coincide con lo que espera el software. Al avanzar la degradación cambia la curva de voltaje y el algoritmo pierde precisión. El teléfono cree que queda carga, pero la batería no puede mantener el voltaje bajo esfuerzo. Un ciclo completo de carga y descarga puede recalibrar a veces la lectura, pero si ocurre con frecuencia hay que cambiar la batería.

**¿Cada cuánto conviene comprobar el estado de la batería?**

Cada pocos meses. La degradación es gradual y comprobarla de forma obsesiva no cambia el resultado. Tiene sentido hacer una revisión adicional si la autonomía cambia de repente, aparecen apagados inesperados o el móvil se calienta más de lo normal.


## Qué hacer con los resultados

Empieza por revisar el gráfico de consumo y utiliza las herramientas de estado integradas por el fabricante. Presta atención a cómo se comporta el móvil en el día a día, porque los síntomas prácticos suelen importar más que una cifra aislada. Para seguir la evolución con precisión, una aplicación de diagnóstico que registre voltaje, temperatura y capacidad a lo largo del tiempo puede detectar tendencias que pasarían desapercibidas durante semanas.

El 80 % es el umbral en el que la degradación empieza a afectar claramente al uso diario. Por debajo de ese nivel, cambiar la batería cuesta mucho menos que comprar un móvil nuevo y puede alargar la vida útil del dispositivo entre dos y tres años.
