---
title: "Comment effectuer un diagnostic complet sur un smartphone Android"
description: "Android ne propose pas un bouton unique capable de tout vérifier d’un coup. Les outils existent, mais ils sont répartis entre les paramètres, des codes secrets à composer, les applications des fabricants et des commandes système que la plupart des utilisateurs ne voient jamais. Ce guide les réunit dans une seule procédure, applicable au plus grand nombre de téléphones possible, tout en signalant les différences liées au fabricant, à l’opérateur et à la version d’Android."
listSummary: "Android ne propose pas un bouton unique capable de tout vérifier d’un coup."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","mises-a-jour","securite","logiciel","guide"]
locale: "fr"
draft: false
---
## Le chemin le plus rapide : les outils de diagnostic du fabricant

De nombreux fabricants Android fournissent leur propre utilitaire de diagnostic, préinstallé ou accessible avec un code. Commencez par là avant d’installer une autre application.

**Les smartphones Samsung Galaxy** disposent des outils intégrés les plus faciles d’accès. Ouvrez l’application Téléphone et composez `*#0*#`. Sur les modèles compatibles, un panneau de test s’affiche avec des commandes pour l’écran (fonds rouge, vert et bleu afin de repérer les pixels morts), le tactile, les caméras avant et arrière, les haut-parleurs, le moteur de vibration et des capteurs comme l’accéléromètre ou le capteur de proximité. Le code fonctionne sur de nombreux Galaxy, anciens comme récents, mais certains firmwares d’opérateur ou variantes régionales désactivent les menus de service. Samsung propose aussi une série de contrôles dans Samsung Members. Ouvrez l’application, appuyez sur **Assistance**, puis sur **Diagnostics du téléphone**. Vous pouvez alors tester la batterie, l’écran, le tactile, le son, le Wi-Fi, le Bluetooth et plusieurs capteurs, avec un résultat pour chaque élément. Samsung Members est disponible sur la plupart des Galaxy récents. Selon le modèle, la région et la version de One UI, certains appareils affichent aussi davantage d’informations sur l’état de la batterie et le nombre de cycles.

**Les smartphones Google Pixel** offrent deux parcours utiles. Sur les Pixel 6 et modèles ultérieurs, **Paramètres > État de l’appareil et assistance** présente l’état général, celui de certaines fonctions, des informations sur la batterie et la température, ainsi que des contrôles suggérés pour la recharge ou l’écran tactile. Le mode de diagnostic destiné aux réparations peut également être lancé sur les Pixel compatibles : ouvrez l’application Téléphone en restant connecté à Internet, puis composez `*#*#7287#*#*`. Sur les Pixel 8a et modèles ultérieurs, **Paramètres > À propos du téléphone > Informations sur la batterie** indique le nombre de cycles, la date de fabrication et la date de première utilisation. Sur beaucoup d’autres téléphones proches d’Android d’origine, le code `*#*#4636#*#*` ouvre un menu de test contenant des informations sur le téléphone, le réseau, la batterie et l’utilisation. Ce code existe depuis longtemps, mais son fonctionnement dépend du fabricant, du modèle, du firmware et de l’opérateur.

**Les smartphones Xiaomi, POCO et Redmi** disposent d’un menu CIT, pour Component Integrated Testing. Composez `*#*#6484#*#*` ou `*#*#64663#*#*` dans l’application Téléphone. Sur les modèles compatibles, la suite teste notamment l’écran tactile, les couleurs, le capteur de proximité, l’accéléromètre, le gyroscope, la boussole, le flash, les haut-parleurs, le microphone, les caméras, la vibration, le Wi-Fi, le Bluetooth, le GPS et le lecteur d’empreintes. Chaque test demande une confirmation manuelle : le téléphone affiche un motif ou produit un son, puis vous indiquez si le résultat est correct.

**Les smartphones OnePlus** répondent parfois au code `*#808#`. Lorsqu’il est disponible, le menu peut tester l’écran, le son, la connectivité et les capteurs. Sa présence varie toutefois davantage que chez Samsung ou Google.

Aucun de ces codes n’est universel. Les téléphones vendus par un opérateur peuvent les bloquer, et un fabricant peut les retirer lors d’une mise à jour. Si rien ne se passe, le code n’est pas pris en charge ou a été désactivé sur cet appareil.

## Les outils Android intégrés disponibles sur presque tous les téléphones

Même sans menu propre au fabricant, les paramètres d’un téléphone Android récent contiennent des informations utiles. Ce n’est pas un bilan matériel complet, mais cela suffit à repérer beaucoup de problèmes courants.

**L’utilisation de la batterie**, dans la rubrique **Batterie** des paramètres, montre l’évolution de la décharge pendant les dernières 24 heures, ou sur plusieurs jours chez certains fabricants. Cherchez une chute anormalement rapide, souvent liée à une application ou à un processus actif en arrière-plan. Sur Android 9 et 10, l’écran est plus sommaire et affiche surtout les applications classées selon leur consommation, ce qui reste utile pour trouver les principaux responsables. À partir d’Android 14, certaines applications tierces peuvent aussi lire des propriétés supplémentaires fournies par le HAL de la batterie, comme une capacité estimée ou un nombre de cycles. Ces données n’apparaissent que si le fabricant les expose correctement.

**Le stockage**, dans la rubrique **Stockage** des paramètres, répartit l’espace entre les applications, les images, les vidéos, les fichiers audio, les documents et le système. Si le téléphone ralentit alors que le stockage dépasse environ 85 %, le manque d’espace peut y contribuer. La mémoire flash NAND a besoin d’une marge libre pour organiser les écritures, le nivellement de l’usure et le nettoyage interne.

**Le réseau**, dans la rubrique **Réseau et Internet**, indique le type de connexion et le réseau Wi-Fi utilisé. Pour obtenir un chiffre plus précis sur le réseau mobile, recherchez l’état de la SIM dans la rubrique **À propos du téléphone**. La puissance du signal est généralement exprimée en dBm. Une valeur comprise entre -50 et -90 dBm correspond souvent à une réception correcte à forte. En dessous de -110 dBm, la réception devient faible, mais les seuils exacts varient selon la technologie radio et l’appareil.

**Les options pour les développeurs** contiennent aussi quelques outils utiles. Activez-les dans **À propos du téléphone** en appuyant sept fois sur le **numéro de build**. Vous aurez notamment accès aux **services en cours d’exécution**, qui montrent les processus actifs et l’usage de la mémoire, au **débogage USB** nécessaire pour ADB, et à la commande **Créer un rapport de bug**, qui produit un journal système détaillé.

## Tester les capteurs et le matériel sans application

Le capteur de proximité peut répondre au code `*#*#0588#*#*` sur certains appareils. Pour les autres capteurs, des essais simples suffisent souvent. Ouvrez Google Maps et vérifiez que le cône de direction bleu tourne lorsque vous pivotez le téléphone, ce qui sollicite la boussole et le gyroscope. Passez un appel et approchez l’appareil de votre oreille pour voir si l’écran s’éteint. Activez la luminosité automatique, puis couvrez la partie supérieure de l’écran pour tester le capteur de lumière ambiante.

Le GPS peut être testé avec n’importe quelle application cartographique. Une application spécialisée affiche en plus le nombre de satellites et la qualité de leurs signaux. En extérieur, avec une vue dégagée du ciel, la position devrait être obtenue rapidement à partir de plusieurs satellites. Le délai exact dépend du lieu, de la météo, de l’assistance réseau et du temps écoulé depuis la dernière localisation.

## Quand une application tierce apporte vraiment quelque chose

Les outils intégrés couvrent beaucoup de points, mais ils laissent des angles morts. Les applications tierces sont surtout utiles dans trois situations.

L’estimation de l’état de la batterie est la plus évidente. AccuBattery suit les recharges dans le temps et estime la capacité restante par rapport à la capacité nominale. Il lui faut plusieurs cycles, souvent environ une semaine d’utilisation, avant de produire une estimation exploitable. La précision s’améliore ensuite avec les nouvelles données. DevCheck affiche en temps réel les fréquences CPU et GPU, les zones thermiques, le courant et la tension de la batterie ainsi que les valeurs des capteurs. Il est particulièrement utile pour chercher un bridage thermique ou un capteur qui renvoie constamment une valeur incohérente. AIDA64 fournit surtout un inventaire détaillé du matériel : SoC, résolution et densité de l’écran, RAM, stockage et codecs installés. C’est davantage de l’identification que du diagnostic, mais cela aide à confirmer ce que contient réellement le téléphone.

Aucune de ces applications ne peut lire une information que le fabricant garde inaccessible. Si le HAL de la batterie ne fournit ni état précis, ni nombre de cycles, une application ne peut pas les inventer. Elle doit les estimer à partir des habitudes de recharge.

## Diagnostic approfondi avec ADB

Android Debug Bridge donne accès au diagnostic le plus détaillé possible sans root. Branchez le téléphone à un ordinateur par USB après avoir activé le débogage USB, puis utilisez les commandes suivantes.

`adb shell dumpsys battery` affiche le niveau, la température, la tension, l’état de charge et l’état général de la batterie. Sur certains appareils, la sortie comprend aussi le nombre de cycles. Les champs varient selon le fabricant : Samsung peut fournir des valeurs qu’un Pixel n’expose pas, et inversement.

`adb shell dumpsys batterystats` génère un journal très volumineux de l’utilisation de la batterie, avec les wakelocks, l’activité des applications et le trafic réseau. L’outil Battery Historian de Google peut transformer ces données en chronologie visuelle afin de montrer ce qui a consommé l’énergie et à quel moment.

`adb shell dumpsys connectivity` indique l’état du réseau, les serveurs DNS et les interfaces actives.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` tente de lire les capteurs de température. Toutes les zones ne sont pas accessibles. À partir d’Android 12, les politiques SELinux limitent davantage la lecture de certains chemins sysfs, et ces restrictions se sont renforcées au fil des versions. Plusieurs zones peuvent donc répondre « Permission denied », même avec ADB.

ADB demande un ordinateur et un minimum d’aisance avec la ligne de commande. Pour la plupart des utilisateurs, les paramètres, l’application de diagnostic du fabricant et quelques tests manuels soigneux suffisent.

## Interpréter les résultats

Les chiffres bruts n’ont de sens qu’avec leur contexte. Une batterie à 32 °C pendant un usage léger est normale. Une batterie à 42 °C alors que le téléphone reste inactif dans une pièce fraîche ne l’est pas. Un stockage rempli à 78 % ne pose généralement pas de problème. À 92 %, les ralentissements deviennent beaucoup plus probables. Un signal de -85 dBm fonctionne souvent correctement en intérieur, tandis qu’à -115 dBm les appels peuvent se couper.

Le but n’est pas de trouver un seul nombre qui dise « en panne ». Il faut comparer les mesures à ce qui est attendu et repérer les tendances : une batterie qui a perdu 15 % de capacité en six mois, un capteur toujours bloqué à zéro ou un stockage presque plein qui ralentit tout le système.

runcheck rassemble les diagnostics de batterie, de température, de réseau et de stockage dans un même tableau de bord, avec un score d’état commun. Cela évite de vérifier chaque catégorie séparément. L’application signale aussi les mesures dont la fiabilité est limitée grâce à un indicateur de confiance, un détail utile puisque tous les téléphones Android ne remontent pas chaque valeur avec la même précision.

## Questions fréquentes

**Puis-je effectuer un diagnostic sur un téléphone qui ne démarre pas ?**
Seulement en partie. Si l’appareil entre en mode récupération, généralement avec les boutons Marche/Arrêt et Volume haut pendant le démarrage, vous pouvez vérifier l’écran, le tactile et les boutons. Certains Samsung proposent aussi un mode Download pour le flashage du firmware. Un diagnostic complet exige un système en fonctionnement.

**Les applications de diagnostic ont-elles besoin d’un accès root ?**
Non. Toutes les méthodes décrites ici fonctionnent sans root. Le root donne accès à davantage de données au niveau du kernel, mais il peut affecter la garantie, faire échouer les attestations SafetyNet ou Play Integrity et n’est pas nécessaire pour un contrôle pratique de l’état du téléphone.

**À quelle fréquence faut-il lancer un diagnostic complet ?**
Lorsque le téléphone se comporte anormalement : applications plus lentes à s’ouvrir, décharge inattendue, pertes de connexion ou surchauffe. Aucun calendrier fixe n’est nécessaire. Avant l’achat d’un smartphone d’occasion, effectuez toujours un contrôle complet avant de conclure la transaction.

**Le code `*#0*#` fonctionne-t-il sur les téléphones autres que Samsung ?**
Non. Xiaomi utilise `*#*#6484#*#*` sur de nombreux modèles, OnePlus peut répondre à `*#808#`, le diagnostic de réparation Pixel utilise `*#*#7287#*#*`, et certains appareils proches d’Android d’origine acceptent `*#*#4636#*#*`. La disponibilité dépend du modèle, de la région, du firmware et de l’opérateur.

**Un diagnostic peut-il modifier mes données ou mes paramètres ?**
Les tests ordinaires se contentent de lire les informations. Le principal risque est d’appuyer par erreur sur une commande de réinitialisation dans un menu de service. Restez dans les sections consacrées au diagnostic et aux tests.
