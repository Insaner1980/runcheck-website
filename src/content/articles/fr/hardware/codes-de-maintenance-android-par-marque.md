---
title: "Codes de service Android par marque : parcours documentés qui peuvent encore fonctionner"
description: "Parcours de maintenance et de diagnostic documentés ici pour Samsung, Pixel et Xiaomi. Leur disponibilité et leur comportement varient selon le modèle, la région, l'opérateur, le logiciel et le fabricant ; Android 17 ne fournit pas de jeu de codes universel."
listSummary: "Parcours de service et de diagnostic propres à chaque marque, avec des limites selon le modèle et le logiciel."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostic", "capteurs", "android", "materiel", "guide"]
locale: "fr"
draft: false
---
Il n'existe pas de liste complète fiable. Les codes dépendent du fabricant, du modèle, de l'application Téléphone, du micrologiciel, de l'opérateur et de la région. Seuls ceux reliés à une documentation officielle actuelle sont conservés.

Preuves directes : [Samsung documente `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google le code Pixel `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB) et [Xiaomi l'accès CIT](https://www.mi.com/global/support/faq/details/KA-491482/) avec `*#*#6484#*#*` ou `*#*#64663#*#*` sur les appareils concernés.

## Samsung Galaxy

Samsung conserve l'un des systèmes de diagnostic les plus pratiques, notamment parce qu'il propose à la fois des codes à saisir et une application officiellement prise en charge.

`*#0*#` ouvre l'écran de test matériel de Samsung sur de nombreux Galaxy. La présentation dépend du modèle, mais vous pouvez souvent vérifier l'écran, le tactile, les appareils photo, les haut-parleurs, la vibration, les capteurs et parfois le lecteur d'empreintes. Sur certains modèles opérateur ou micrologiciels fortement verrouillés, le code ne s'ouvre pas.

Samsung Members est la solution la plus sûre pour la plupart des utilisateurs. Ouvrez l'application, appuyez sur Assistance, puis sur Diagnostics du téléphone. Les résultats sont plus faciles à interpréter que ceux du menu de maintenance.

## Xiaomi, Redmi et POCO

[La page d'assistance Xiaomi](https://www.mi.com/global/support/faq/details/KA-491482/) documente deux codes à saisir dans l'application Téléphone pour un test CIT de l'écran tactile sur les appareils concernés : `*#*#6484#*#*` et `*#*#64663#*#*`.

Dans le test documenté, faites glisser un doigt sur l'écran et recherchez des lignes interrompues ou supplémentaires. La source n'étaye que ce dépannage de l'écran tactile. La disponibilité et le fonctionnement varient selon le modèle, la région, l'opérateur, le micrologiciel et la version du logiciel.

## Google Pixel

Les Pixel prennent en charge certains codes Android communs, mais le principal code de diagnostic actuel leur est propre.

`*#*#7287#*#*` ouvre la Pixel Repair Diagnostics App sur les Pixel compatibles. Google le documente pour contrôler le matériel avant ou après une réparation. Une connexion Internet est nécessaire et l'application vous guide à l'écran.

Pour les contrôles liés à la batterie sur les Pixel 6 et modèles ultérieurs, ouvrez Paramètres > Batterie > Diagnostics de la batterie. Il s'agit d'un chemin normal dans les Paramètres, pas d'un code caché.

D'anciens articles mentionnent parfois le code `.12345+=` dans la calculatrice pour ouvrir un mode d'ingénierie Pixel. Mieux vaut ne pas compter dessus en 2026. Utilisez plutôt le code officiel des diagnostics Pixel.

## Safety

Si un code documenté ne fonctionne pas, utilisez l'application de diagnostic ou les instructions de service prises en charge par le fabricant. Ne désactivez pas les protections et ne saisissez aucun code de réinitialisation, provisionnement, étalonnage radio, firmware ou programmation provenant d'une liste non vérifiée.
