---
title: "Comment tester la qualité de l'appareil photo de votre téléphone"
description: "Des méthodes pratiques pour contrôler l'appareil photo d'un téléphone Android, notamment l'autofocus, le changement d'objectif, les défauts du capteur, la stabilité vidéo et les outils de diagnostic."
listSummary: "materiel, test et diagnostic"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["materiel","test","diagnostic","android","guide"]
locale: "fr"
draft: false
---
---

Tester un appareil photo devient plus simple dès que vous cessez de vous focaliser sur les mégapixels. Un capteur de 50 MP peut produire de mauvaises images si l'objectif est sale, si l'autofocus est endommagé ou si le module s'est légèrement déplacé après un choc.

L'objectif du test est simple : vérifier que les différents appareils photo du téléphone se comportent comme prévu.

## Commencer par un objectif propre et un sujet simple

Nettoyez la vitre de l'objectif avec un chiffon en microfibre propre. Faites-le avant tous les autres essais. Une trace de doigt peut ressembler à un mauvais HDR, à une mise au point trop douce, à un voile optique ou à de faibles performances en basse lumière.

Ouvrez l'application photo fournie avec le téléphone et visez un sujet riche en détails. Du texte imprimé, un mur texturé, un clavier ou des branches d'arbre sur fond de ciel conviennent bien. Touchez l'écran pour faire la mise au point. L'image doit devenir nette rapidement et le rester.

Si l'appareil cherche constamment la mise au point sans se stabiliser, le mécanisme d'autofocus peut être endommagé. Cela arrive après une chute, car le petit moteur à bobine mobile qui déplace la lentille est fragile. Si l'image reste floue, quel que soit l'endroit touché, comparez-la à celle d'un autre objectif du même téléphone avant d'accuser le logiciel.

Passez par tous les appareils photo disponibles : principal, ultra grand-angle, téléobjectif, macro et frontal. Si un seul reste flou alors que les autres sont nets, le problème vise probablement ce module. Il peut s'agir de poussière sous la vitre, d'un verre fissuré, d'humidité dans la zone photo ou d'un module mal aligné après une réparation.

## Chercher des défauts qui se répètent

Photographiez un mur blanc uni ou une feuille propre sous un éclairage régulier. Les défauts deviennent ainsi plus faciles à voir.

Un léger assombrissement dans les coins est normal. Les objectifs des téléphones sont minuscules et le logiciel corrige souvent les bords. Cherchez plutôt une grande tache sombre, une zone colorée ou une marque qui revient exactement au même endroit sur chaque photo.

Prenez ensuite une photo en faible lumière sans flash, puis agrandissez-la. Des points colorés lumineux qui restent à la même position sur plusieurs clichés peuvent correspondre à des pixels chauds ou à un capteur endommagé. Un pixel étrange isolé ne justifie pas de s'alarmer. Un groupe de pixels, oui.

Photographiez enfin en direction d'une fenêtre lumineuse ou d'une lampe, sans viser directement le soleil. Une dominante violette ou verte sur toute l'image peut signaler un dommage autour du filtre du capteur. Un flare normal forme des traînées ou des images fantômes près d'une source lumineuse. Il ne devrait pas devenir soudainement bien plus prononcé après une chute ou une réparation.

## Tester l'exposition et les couleurs

Prenez deux fois la même photo : une fois en plein jour, puis à l'intérieur sous une lumière chaude. Les teintes de peau, les murs blancs et les objets gris sont de bons repères, car l'œil remarque vite lorsqu'ils paraissent faux.

Les téléphones appliquent beaucoup de traitement, alors n'attendez pas une colorimétrie parfaitement neutre. Pixel, Samsung, Xiaomi et OnePlus font des choix différents. La comparaison utile se fait avec le même modèle, pas avec une autre marque au rendu photographique différent.

Consultez en ligne des exemples pris avec le même téléphone si vous avez besoin d'un point de référence. Regardez de véritables photos plutôt que de vous fier uniquement à une note globale. Les scores ont leur utilité, mais un recadrage placé côte à côte apporte davantage lorsqu'il faut diagnostiquer votre propre appareil.

## Enregistrer une courte vidéo

Filmez pendant 20-30 secondes dans la résolution maximale que vous utilisez habituellement. Effectuez un panoramique lent, marchez quelques pas et parlez pendant l'enregistrement.

Relisez la séquence et vérifiez quatre points : la mise au point, la stabilisation, les pertes d'images et la synchronisation du son. Un téléphone équipé d'une stabilisation optique doit atténuer les petits mouvements de la main. Il ne transformera pas une marche en prise de vue sur stabilisateur, mais l'image ne devrait pas non plus trembler violemment.

Si la vidéo se fige brièvement, saccade ou perd la synchronisation audio, la cause peut être la chaleur, la vitesse d'écriture du stockage, un bug de l'application photo ou le matériel. Redémarrez le téléphone, libérez de l'espace et recommencez. Si le défaut revient alors que l'appareil est froid et que le stockage est disponible, prenez-le au sérieux.

## Utiliser les diagnostics intégrés

Les Samsung Galaxy peuvent tester les appareils photo avec Samsung Members. Ouvrez l'application, appuyez sur Assistance, puis sur Diagnostics du téléphone et lancez le test de l'appareil photo. Les tests disponibles varient selon le modèle, mais Samsung inclut l'appareil photo parmi les fonctions diagnostiquées.

Le code Samsung `*#0*#` ouvre aussi des tests photo sur de nombreux Galaxy. Mega Cam vérifie l'appareil photo arrière et Front Cam le module frontal. Ces essais confirment que les modules s'ouvrent et prennent une image. Ils n'évaluent pas la qualité à votre place.

Les Xiaomi, Redmi et POCO proposent généralement des tests photo dans le menu CIT ouvert avec `*#*#6484#*#*`. Sur un téléphone équipé de plusieurs modules arrière, le menu peut les vérifier séparément.

Les Pixel n'ont pas de menu équivalent au `*#0*#` de Samsung. Le code Google `*#*#7287#*#*` ouvre les diagnostics de réparation Pixel sur les appareils compatibles, et les tests proposés peuvent varier selon le modèle, la région et la version logicielle.

Android 17 ne rend pas les diagnostics photo universels. Ils dépendent toujours de l'OEM.

## Vérifier Camera2 si certaines fonctions manquent

Si les applications photo tierces n'accèdent pas à l'exposition manuelle, au RAW, à la vidéo à haute fréquence d'images ou au téléobjectif, installez une application d'inspection Camera2 API comme Camera2 API Probe. Elle affiche ce que chaque module déclare à Android : résolutions prises en charge, modes d'autofocus, stabilisation et niveau matériel.

Ces niveaux ont leur importance. `LEGACY` indique que l'appareil photo passe par un ancien mode de compatibilité. `LIMITED` correspond à une prise en charge de base de Camera2. `FULL` ajoute un contrôle manuel plus complet. `LEVEL_3` fournit des capacités plus avancées, notamment le RAW et le retraitement sur les appareils qui les exposent.

Open Camera peut aussi vous aider à distinguer le traitement de l'application d'origine du fonctionnement du matériel. Si Open Camera fait correctement la mise au point alors que l'application préinstallée échoue, videz le cache de cette dernière et attendez une éventuelle mise à jour avant de conclure que le module est cassé.

Ce test ne vous dira pas si l'objectif est rayé. Il indique si Android voit les fonctions photo que le téléphone est censé exposer.

## Quand le matériel est probablement en cause

Un aperçu noir provenant d'un seul appareil photo, alors que le reste de l'application s'ouvre, indique souvent un module en panne ou un connecteur mal fixé. Si l'application photo ne s'ouvre pas du tout, la cause peut être logicielle. Videz son cache et redémarrez avant de supposer le pire.

Une mise au point floue, des taches répétées, des groupes de pixels défectueux, une forte dominante et un objectif qui se comporte différemment de tous les autres sont des signes matériels. Une mise à jour peut modifier le rendu des couleurs ou l'accentuation. Elle ne peut ni retirer l'humidité derrière la lentille ni réparer un moteur d'autofocus endommagé.

Si le problème est apparu après le remplacement de l'écran, de la vitre arrière ou de la batterie, retournez rapidement chez le réparateur. Un connecteur de l'appareil photo peut être mal emboîté, ou de la poussière a pu entrer pendant l'ouverture du téléphone.

runcheck ne donne pas de note à vos photos, mais l'application peut repérer les conditions environnantes qui dégradent les performances de l'appareil photo, comme la chaleur, un stockage presque plein ou une forte consommation de batterie pendant les longs enregistrements.
