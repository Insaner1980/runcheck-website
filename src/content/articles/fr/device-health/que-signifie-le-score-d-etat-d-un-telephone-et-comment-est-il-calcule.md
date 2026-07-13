---
title: "Que signifie le score d’état d’un téléphone et comment est-il calculé ?"
description: "Dans les paramètres d’un smartphone Android, les informations sur la batterie se trouvent à un endroit, celles du stockage ailleurs, et les détails du réseau dans une autre rubrique. Un score d’état rassemble ces données, généralement la batterie, la température, le réseau et le stockage, puis les résume par un score compris dans la plage 0-100. Un seul résultat au lieu de quatre catégories séparées."
listSummary: "temperature, thermique et android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperature","thermique","android","depannage","materiel"]
locale: "fr"
draft: false
---
Android ne définit aucun score d’état universel. Il n’existe pas d’écran commun à toutes les marques où « 82/100 » aurait exactement le même sens. La fonction Batterie et maintenance de l’appareil de Samsung affiche un score d’optimisation sur 100, tandis que la rubrique État de l’appareil et assistance des Pixel présente un état général et celui de certaines fonctions. Ce sont des outils propres aux fabricants, pas une norme Android. Les applications de diagnostic utilisent donc leurs propres modèles de calcul. La composition du score et ses limites comptent davantage que le chiffre seul.

## Ce qu’un score d’état mesure

Un score utile s’appuie généralement sur quatre catégories, pondérées selon leur influence sur l’usage quotidien. Ces pondérations ne sont pas normalisées.

**La batterie** devrait avoir le poids le plus élevé. Dans le modèle de runcheck, elle représente 40 % du score total. C’est logique : sur un téléphone vieillissant, une batterie dégradée est souvent le problème le plus visible. Le volet batterie tient compte de l’état renvoyé par l’API BatteryManager d’Android, de la température, de la tension et, lorsque l’appareil la fournit, d’une estimation de l’état de la batterie. Android 14 a ajouté des API plus détaillées, mais le nombre de cycles ou le pourcentage d’état n’apparaît que si le fabricant et le HAL de la batterie exposent ces données. Le calcul n’utilise pas d’API privée pour lire la capacité nominale. Une batterie à 92 % d’état et à 31 °C obtient un résultat élevé. Une batterie à 74 % qui fonctionne à 39 °C fait nettement baisser le score.

**L’état thermique** représente 25 % dans runcheck. Android indique son état avec `PowerManager.getCurrentThermalStatus()` à partir d’Android 10, puis fournit une marge thermique avec `getThermalHeadroom()` à partir d’Android 11. Ces informations permettent de savoir si le téléphone est dans une situation normale, s’il se rapproche du bridage thermique ou si la chaleur devient critique. Les températures élevées réduisent les performances du CPU et accélèrent l’usure à long terme de la batterie. Un téléphone dans un état thermique normal, avec une batterie à 28 °C, obtient un bon résultat. Un appareil déjà soumis à un bridage modéré au-dessus de 40 °C est davantage pénalisé.

**La connectivité réseau** compte pour 25 %. Lorsque le téléphone est déconnecté, le score réseau de runcheck est nul. Sans test de débit récent, l’évaluation repose sur la puissance du signal et la latence. Si un test de débit de moins d’une heure est disponible, le calcul pondère le signal à 40 %, le ping à 30 %, le débit descendant à 20 % et la stabilité, mesurée notamment par la gigue, à 10 %. Sur le Wi-Fi, une valeur de -50 à -70 dBm est excellente, de -70 à -80 dBm elle reste acceptable, et en dessous de -80 dBm les performances chutent souvent. Sur le réseau mobile, une valeur supérieure à -85 dBm est généralement forte et une valeur inférieure à -110 dBm faible. Une latence de 15 ms et une latence de 200 ms ne produisent pas la même expérience, même si les barres de signal semblent identiques.

**Le stockage** est la plus petite composante, avec 10 %. En dessous de 50 % d’occupation, aucune pénalité n’est appliquée. Dans la plage 50-80 %, l’effet reste faible. Au-dessus de 85 %, le score baisse davantage, car le contrôleur de la mémoire flash dispose de moins de place pour le nettoyage interne et le nivellement de l’usure. Dans runcheck, les seuils élevés sont donc beaucoup plus pénalisants que le simple fait de dépasser la moitié de la capacité.

## Pourquoi les pondérations comptent

L’état de la batterie affecte le téléphone toute la journée. Le stockage ne devient réellement problématique qu’au-delà de certains seuils. La qualité du réseau varie sans cesse selon des facteurs que le téléphone ne contrôle pas. L’état thermique est temporaire : un appareil chaud à cet instant peut retrouver une situation normale dix minutes plus tard.

Les applications ne pondèrent pas tous ces éléments de la même façon. Certaines leur donnent un poids égal, ce qui revient à traiter un stockage plein comme une batterie en fin de vie. Ce choix est difficile à défendre. runcheck attribue 40 % à la batterie, 25 % à la température, 25 % au réseau et 10 % au stockage, une répartition plus proche de la manière dont les problèmes sont ressentis au quotidien. Un téléphone dont la batterie est en excellent état mais dont le stockage est trop rempli reste généralement moins handicapé qu’un appareil doté de beaucoup d’espace libre mais d’une batterie très dégradée.

## Le problème de la fiabilité

Toutes les données utilisées dans le calcul ne sont pas aussi fiables. C’est là que le concept devient moins net.

Le pourcentage d’état de la batterie est exploitable lorsque le téléphone le fournit correctement, comme sur les Pixel 8a et modèles ultérieurs et sur certains Galaxy récents compatibles. Sur les appareils qui ne l’exposent pas, les applications doivent estimer la capacité à partir des recharges observées. Ces estimations s’améliorent avec le temps, mais elles sont approximatives au début. Un score construit sur une estimation incertaine hérite de cette incertitude.

Les mesures thermiques dépendent des capteurs et des API accessibles. `getCurrentThermalStatus()` fournit un niveau général allant de Normal à Shutdown, mais cette information reste grossière. `getThermalHeadroom()` renvoie une valeur indiquant la proximité du bridage, dont l’interprétation peut varier selon le SoC. La température de la batterie est disponible sur presque tous les appareils, mais elle ne représente ni la température du CPU ni celle de la surface du téléphone. L’écart peut atteindre 5-10 °C. Dans sa version actuelle, l’application ne lit pas directement la température du CPU à partir de chemins système privés.

La puissance du signal réseau en dBm est fiable lorsqu’Android la transmet. Les barres affichées, elles, ne sont pas normalisées. Trois barres sur un Samsung et trois barres sur un Pixel au même endroit peuvent correspondre à des valeurs différentes. Les barres sont une représentation visuelle. Le chiffre en dBm est plus utile.

L’utilisation du stockage est la mesure la plus cohérente entre les appareils. Le calcul est simple et ne dépend pas autant des différences d’implémentation du HAL.

Un score honnête montre ces limites au lieu de les masquer. Si l’état de la batterie vient d’une estimation plutôt que d’une mesure fournie par le matériel, l’utilisateur devrait le voir. Afficher un « 87/100 » très affirmatif alors qu’une donnée essentielle reste approximative serait trompeur. Certaines mesures sont donc accompagnées d’un indicateur de confiance.

## Les scores sur les anciens téléphones

La qualité du score dépend de la quantité de données exposée par le téléphone. Les anciens appareils en fournissent moins.

À partir d’Android 10 (API 29), le système peut signaler son état thermique. Le volet température fonctionne donc raisonnablement sur de nombreux appareils commercialisés depuis 2019, à condition que le fabricant fournisse des données utiles. Android 11 (API 30) ajoute la marge thermique, ce qui rend la mesure plus fine. Avant Android 10, les informations disponibles se limitent souvent à la température de la batterie.

L’écart est plus important pour l’état de la batterie. Android 14 a ajouté des API plus détaillées, mais la plupart des téléphones sortis avant 2024 ne transmettent ni pourcentage complet ni nombre de cycles. Sur ces appareils, l’évaluation s’appuie sur des indicateurs indirects : la classification générale Good, Overheat, Dead ou Cold, la température, la tension et l’observation des recharges dans le temps. Un téléphone sous Android 10 peut encore produire un résultat utile à partir de ces signaux, mais avec moins de précision qu’un Pixel 8a ou modèle ultérieur qui communique directement l’état et les cycles.

Le stockage et le réseau fonctionnent de manière assez cohérente sur les appareils à partir d’Android 8.

En pratique, un score sous Android 9-13 reste utile, mais dépend davantage d’estimations. Il repère les problèmes évidents, comme une batterie très dégradée, un stockage presque saturé ou une surchauffe persistante. Sa marge d’incertitude est simplement plus large.

## Comment interpréter le nombre

**75-100 :** le téléphone est en bon état. L’usure de la batterie reste normale, aucun problème thermique important n’apparaît, le stockage est suffisant et la connectivité fonctionne.

**50-74 :** un point demande de l’attention. Il s’agit souvent d’une batterie qui a perdu assez de capacité pour réduire l’autonomie, ou d’un stockage assez rempli pour affecter les performances. Un entretien ciblé peut améliorer la situation.

**25-49 :** le problème est réel. La batterie peut être fortement dégradée, le bridage thermique persistant ou le stockage presque saturé. Une réparation ou un remplacement devient envisageable.

**Moins de 25 :** un élément est probablement en train de défaillir ou se trouve dans un état critique.

Ces seuils ne sont pas officiels. Aucune autorité ne définit ce qu’est un téléphone « sain ». Ce sont des conventions utilisées par les outils de diagnostic, qui correspondent approximativement aux états bon, correct, dégradé et critique ressentis par les utilisateurs.

## Ce qu’un score d’état ne peut pas révéler

Il ne détecte pas tous les dégâts matériels. Un écran fissuré, un haut-parleur défectueux, un port de recharge desserré ou une ancienne infiltration d’eau peuvent rester invisibles dans les mesures logicielles.

Il ne prédit pas la durée de vie restante. Un score de 78 ne signifie pas que le téléphone a utilisé 78 % de sa vie. Il indique seulement que, au moment de la mesure, l’ensemble des catégories contrôlées se situe dans un état plutôt correct.

Il ne permet pas une comparaison directe entre tous les modèles. Un score de 90/100 sur un appareil d’entrée de gamme doté de 3 Go de RAM et de 32 Go de stockage n’équivaut pas à 90/100 sur un modèle haut de gamme avec 12 Go de RAM et 256 Go de stockage.

Le score est une photographie de l’instant. Il aide à suivre une tendance, par exemple pour voir si l’état du téléphone se dégrade, et à effectuer une première évaluation lors de l’achat d’un appareil d’occasion. C’est un point de départ, pas un diagnostic définitif.

## Questions fréquentes

**Les fabricants publient-ils des scores d’état officiels ?**
Il n’existe aucun score universel. Batterie et maintenance de l’appareil de Samsung affiche un score d’optimisation sur 100, mais il repose sur les propres contrôles de Samsung concernant la batterie, le stockage, la mémoire et la sécurité. La rubrique État de l’appareil et assistance des Pixel présente plutôt un état général et celui de certaines fonctions. Ces outils sont utiles, mais leurs résultats ne se comparent pas proprement d’une marque à l’autre.

**Peut-on améliorer un score faible ?**
Tout dépend de la cause. Si le stockage plein fait baisser le score, libérer de l’espace peut l’améliorer immédiatement. Une batterie dégradée ne retrouve pas sa capacité d’origine : le remplacement est la seule correction durable. Un problème thermique peut disparaître après la fermeture d’une application instable ou le retrait d’une coque qui retient trop de chaleur.

**Un score plus élevé est-il toujours meilleur ?**
Sur le même téléphone au fil du temps, oui. Une baisse durable indique une dégradation ou un problème nouveau. Entre deux appareils différents, la comparaison est moins utile. Un téléphone de trois ans à 72 peut parfaitement convenir à son propriétaire, tandis qu’un appareil neuf à 95 peut être pénalisé par une mauvaise réception dans le lieu où il est utilisé.
