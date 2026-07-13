---
title: "Comment vérifier le nombre de cycles de batterie sur Android"
description: "Le nombre de cycles indique combien de cycles complets de charge et de décharge la batterie a accumulés depuis la fabrication du téléphone. Un cycle correspond à l'utilisation de 100 % de sa capacité. Il n'a pas besoin de se produire en une seule fois. Recharger de 20 % à 70 %, puis de 40 % à 90 %, représente au total un cycle complet."
listSummary: "batterie, etat et diagnostic"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["batterie","etat","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Ce chiffre compte parce qu'une batterie lithium-ion a une durée de vie limitée, mesurée en cycles. La plupart des batteries de téléphones modernes conservent environ 80 % de leur capacité initiale après 800 à 1 000 cycles, selon leur chimie et le fabricant. Au-delà, l'autonomie quotidienne diminue nettement.

Depuis Android 14, l'API BatteryManager peut exposer le nombre de cycles, mais l'affichage réel dépend entièrement du fabricant. Quelques téléphones récents le montrent dans les Paramètres. La plupart ne le font toujours pas. Les méthodes ci-dessous sont classées selon le nombre d'appareils qu'elles couvrent, en commençant par celles qui fonctionnent sur le plus grand nombre de modèles, y compris les plus anciens.

## Applications de suivi : compatibles avec presque tous les téléphones Android

Pour la majorité des téléphones, surtout ceux sortis avant 2024, une application de suivi reste le point de départ le plus pratique.

AccuBattery estime le nombre de cycles en suivant l'énergie ajoutée pendant les recharges. Installez l'application, laissez-la fonctionner au moins une semaine pendant plusieurs sessions, puis elle calcule une valeur approximative à partir du total de milliampères-heures chargés, divisé par la capacité nominale de la batterie. Plus le suivi dure, plus l'estimation devient utile. Une installation récente qui affiche déjà un nombre de cycles extrapole à partir de très peu de données. Attendez au moins deux semaines avant de prendre ce chiffre au sérieux. AccuBattery fonctionne à partir d'Android 5.0, ce qui couvre presque tous les téléphones encore utilisés.

aBattery suit une autre méthode. Sur les appareils Android 14 ou plus récents dont le fabricant a correctement mis en œuvre le HAL d'état de la batterie, l'application peut lire directement le nombre de cycles et le pourcentage de capacité restante fournis par le système. Sur les appareils plus anciens ou dont l'implémentation du HAL est incomplète, les valeurs peuvent manquer ou être peu fiables. L'application seule ne permet pas toujours de savoir si la donnée vient réellement du matériel ou d'une valeur par défaut.

Toutes les applications de suivi ont une limite : lorsqu'aucun compteur système n'est disponible, elles estiment les cycles à partir des habitudes de recharge au lieu de lire un compteur matériel. L'estimation s'améliore avec le temps, mais elle n'est pas exacte. Deux applications installées sur le même téléphone peuvent afficher des résultats différents parce que leurs méthodes de calcul ne sont pas les mêmes.

## Codes du clavier téléphonique : vérification rapide, résultat incertain

Sur certains téléphones, des codes saisis dans l'application Téléphone révèlent des données de batterie absentes des Paramètres. Beaucoup de ces codes remontent à Android 4 ou à des versions encore plus anciennes, mais leur disponibilité dépend du fabricant et parfois de l'opérateur.

`*#*#4636#*#*` fonctionne sur certains appareils utilisant Android proche de la version d'origine, ainsi que sur certains modèles Pixel, Motorola, Nokia, Sony et d'autres marques. Lorsqu'il est pris en charge, un menu de test s'ouvre avec des informations comme le niveau de charge, la tension, la température et l'état. Le nombre de cycles n'apparaît pas sur la plupart des appareils, mais cela vaut la peine de vérifier, car certains fabricants ajoutent des champs. Ce code existe depuis plus de dix ans et fonctionne encore sur de nombreux anciens téléphones dépourvus de page moderne consacrée à la batterie.

`*#*#6485#*#*` peut afficher des données de batterie sur certains téléphones Xiaomi, POCO et Redmi, parfois avec des champs propres au fabricant comme `MB_06`. Cette méthode fonctionne sur certains modèles remontant à MIUI 10 ou à des versions antérieures. La signification exacte de ces champs et leur disponibilité varient selon le modèle et la version de MIUI ou d'HyperOS.

`*#0228#` affiche sur certains Samsung Galaxy la tension, le courant et l'état de la batterie. Il ne fournit généralement pas le nombre de cycles.

Si rien ne se passe après la saisie d'un code, le téléphone ne le prend pas en charge. Les opérateurs peuvent désactiver ces menus et les fabricants les retirent parfois lors d'une mise à jour.

## ADB : la méthode la plus approfondie sans accès root

Android Debug Bridge offre souvent l'accès le plus complet aux données de batterie sans root. Il fonctionne avec de nombreuses versions d'Android, jusqu'à des téléphones sous Android 4.1. Il faut un ordinateur et environ cinq minutes de configuration, mais ADB peut révéler des informations qu'aucune application ni aucun écran des Paramètres n'affiche.

Activez les **Options pour les développeurs** : ouvrez **Paramètres > À propos du téléphone**, puis appuyez sept fois sur le **Numéro de build**. Activez ensuite le **Débogage USB** dans les Options pour les développeurs. Branchez le téléphone en USB et autorisez la connexion lorsque le message apparaît.

Exécutez :

`adb shell dumpsys battery`

La sortie contient notamment `CHARGE_COUNTER`, la tension, la température, l'état et la santé lorsque l'appareil les expose. Sur certains téléphones, un champ `CYCLE_COUNT` apparaît avec la valeur réelle communiquée par le système. Certains appareils Samsung, Pixel et Xiaomi rendent cette donnée accessible par ADB alors qu'elle reste cachée dans les Paramètres. Sur les téléphones antérieurs à Android 14, ce champ est moins courant, mais certains fabricants exposaient déjà des propriétés propres à leur système avant la standardisation de l'API.

Si aucun nombre de cycles n'apparaît, le fabricant ne l'expose probablement pas par cette interface. Aucun logiciel ne peut extraire un compteur réel d'un matériel ou d'un micrologiciel qui ne le rend pas disponible.

`adb shell dumpsys batteryproperties` peut parfois révéler des champs supplémentaires, en particulier sur Android 14 et les versions ultérieures. Sur certains appareils, la sortie est vide ou la commande n'est pas prise en charge.

## Paramètres intégrés : seulement sur les téléphones récents

Un nombre croissant de téléphones affiche désormais le compteur de cycles directement dans les Paramètres. Si c'est le cas du vôtre, c'est la méthode la plus simple. Sinon, utilisez les solutions précédentes.

Les **Google Pixel 8a et modèles ultérieurs** affichent le nombre de cycles dans **Paramètres > À propos du téléphone > Informations sur la batterie**, avec la date de fabrication et la date de première utilisation. Les Pixel 6 à Pixel 8 Pro ne disposent pas de cet écran. Google l'a introduit avec le Pixel 8a et l'a conservé sur les séries Pixel 9 et Pixel 10. Sur les anciens Pixel, il faut passer par ADB ou une application de suivi.

Sur certains **Samsung Galaxy S25 et modèles ultérieurs**, des versions compatibles de One UI peuvent afficher davantage d'informations sur la batterie, notamment le pourcentage de capacité et le nombre de cycles. Samsung ne documente pas un chemin unique disponible sur tous les modèles et tous les marchés. Sur de nombreux anciens Galaxy, Samsung Members affiche seulement un état général indiquant que la batterie est normale, faible ou en mauvais état, sans nombre précis de cycles ni pourcentage.

Certains téléphones **OnePlus et Oppo** récents peuvent afficher l'état de la batterie dans leurs réglages, mais la disponibilité du nombre de cycles varie selon le modèle, la région et la version d'OxygenOS ou de ColorOS. Les OnePlus 7 et modèles antérieurs ne l'exposent généralement pas.

Le fond du problème reste la fragmentation. Apple a normalisé l'affichage de l'état de la batterie sur les iPhone compatibles à partir d'iOS 11.3, à partir de l'iPhone 6. Android a ajouté des interfaces permettant de remonter davantage de données, mais chaque fabricant décide encore de les renseigner et de les afficher. Chaque année, davantage de modèles proposent ces informations, mais une grande partie des téléphones Android en circulation ne montre toujours aucun compteur.

## Ce que le nombre de cycles signifie en pratique

Le nombre seul n'est qu'un compteur. Il faut le comparer à la durée de vie nominale de la batterie.

Google indique que les batteries des Pixel 3 à Pixel 8 Pro, ainsi que du Pixel Fold, devraient conserver jusqu'à 80 % de leur capacité pendant environ 800 cycles. Pour le Pixel 8a et les modèles ultérieurs, la valeur annoncée est d'environ 1 000 cycles. L'Assistant d'état de la batterie ajuste aussi progressivement la tension maximale sur les modèles compatibles afin de stabiliser les performances à mesure que la batterie vieillit.

Les téléphones récents mis sur le marché dans l'Union européenne doivent supporter au moins 800 cycles de charge et de décharge tout en conservant au moins 80 % de leur capacité initiale. Certains modèles haut de gamme récents sont conçus pour environ 1 000 cycles. Les appareils plus anciens ou vendus hors de l'UE peuvent avoir une durée nominale plus faible.

Un téléphone à 400 cycles a consommé environ la moitié de la durée nominale d'une batterie prévue pour 800 cycles. À 800 cycles, cette batterie devrait encore se situer autour de 80 % de sa capacité dans les conditions d'essai prévues. Une batterie de 5 000 mAh se comporte alors comme une batterie d'environ 4 000 mAh. À 1 200 cycles, l'autonomie quotidienne peut ne plus représenter que la moitié de celle du téléphone neuf.

Ces chiffres supposent des conditions de recharge raisonnables : température modérée, chargeurs adaptés et absence de périodes prolongées à 100 % ou 0 %. La recharge rapide par forte chaleur accélère la dégradation, et le compteur de cycles ne le montre pas. Deux téléphones à 500 cycles peuvent donc présenter des états très différents si l'un a surtout utilisé la recharge adaptative pendant la nuit et l'autre a été rechargé rapidement dans une voiture chaude.

## Lorsque le compteur n'est pas disponible

Même si aucune des méthodes précédentes ne fonctionne, les symptômes restent utiles : diminution du temps d'écran allumé par rapport à six mois plus tôt, arrêt inattendu à 15-20 %, pourcentage qui saute brutalement de 30 % à 12 %, ou chaleur pendant une utilisation légère. Tous indiquent une batterie qui a dépassé sa meilleure période.

En les associant à une estimation d'état fournie par AccuBattery après quelques semaines de suivi, vous obtenez une image raisonnable même sans compteur précis.

## FAQ

**Limiter la recharge à 80 % réduit-il le nombre de cycles ?**
Non. Les recharges partielles s'additionnent. Passer de 20 % à 80 % représente 0,6 cycle. L'intérêt de la limite à 80 % n'est pas de supprimer les cycles, mais de réduire le stress subi par les cellules à un niveau de charge élevé, ce qui ralentit le vieillissement chimique indépendamment du compteur.

**500 cycles, est-ce beaucoup ?**
Cela dépend du téléphone. À raison d'un cycle complet par jour, 500 cycles représentent environ 18 mois. À 0,7 cycle par jour, par exemple en rechargeant de 30 % à 100 %, il faut plus de deux ans. Pour savoir si ce nombre est élevé, comparez-le à la durée de vie nominale du modèle.

**Pourquoi mon Samsung n'affiche-t-il pas le nombre de cycles après la mise à jour One UI 7 ?**
Parce que Samsung ne propose pas cette information de manière uniforme sur tous les modèles, toutes les régions et tous les micrologiciels. Les Galaxy S25 l'affichent sur certaines configurations, mais une nouvelle version de One UI ne garantit pas à elle seule que la page soit disponible. Samsung n'a pas publié de calendrier universel pour les anciens modèles.

**Peut-on remettre le compteur de cycles à zéro ?**
Un véritable compteur matériel n'est pas réinitialisé par un rétablissement de la configuration d'usine, un étalonnage de la batterie ou l'installation d'une nouvelle ROM. Le remplacement physique de la batterie est la seule manière de repartir de zéro lorsque le compteur est lié au bloc-batterie ou à sa jauge. Pour un compteur seulement estimé par une application, désinstaller l'application ou effacer ses données peut remettre l'estimation à zéro. C'est une raison supplémentaire de ne pas confondre une estimation logicielle avec une valeur matérielle.
