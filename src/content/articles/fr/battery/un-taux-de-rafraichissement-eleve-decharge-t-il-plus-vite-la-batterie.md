---
title: "Un taux de rafraîchissement élevé décharge-t-il plus vite la batterie ?"
description: "Méta-description : Un écran 120 Hz peut consommer plus de batterie qu'un écran 60 Hz, surtout avec une fréquence fixe. Les téléphones à affichage adaptatif réduisent l'effet en abaissant la fréquence lorsque les mouvements ne l'exigent pas."
listSummary: "batterie, mythes et android"
hub: "battery"
sourceNumber: 30
order: 20
subgroup: "Drain"
tags: ["batterie","mythes","android","test","faits"]
locale: "fr"
draft: false
---
Le conseil habituel consiste à désactiver le 120 Hz lorsqu'on veut préserver la batterie. Il n'est vrai qu'à moitié.

Un taux de rafraîchissement élevé peut consommer davantage que 60 Hz, mais tous les téléphones 120 Hz n'en paient pas le même prix. Sur un modèle ancien ou abordable doté d'une fréquence élevée fixe, le 120 Hz peut réduire nettement l'autonomie. Sur un téléphone récent à fréquence variable, l'effet est souvent beaucoup plus faible, car l'écran ne reste pas à 120 Hz toute la journée. Il monte pendant le défilement et les animations, puis redescend lorsque l'image ne bouge plus.

Cette différence compte davantage que la fiche technique.

## Ce que change réellement le 120 Hz

Un écran 60 Hz se rafraîchit 60 fois par seconde. Un écran 120 Hz se rafraîchit 120 fois par seconde. Deux fois plus de rafraîchissements demandent plus de travail à la chaîne d'affichage et, lorsque l'application produit réellement une fréquence d'images élevée, davantage de travail au GPU.

Vous sentez la différence en faisant défiler une page, en passant d'un écran à l'autre, en ouvrant des menus et en jouant à des jeux compatibles. Le téléphone paraît plus réactif, car l'affichage se met à jour plus souvent et les mouvements semblent moins saccadés.

L'inconvénient est simple : l'écran et son contrôleur consomment plus d'énergie. En mode 120 Hz fixe, les tests d'autonomie réalisés sur d'anciens téléphones à fréquence élevée montrent souvent une baisse globale d'environ 10 %, parfois davantage selon la luminosité, le type de dalle et la charge de travail. Pour une utilisation dominée par l'écran, la différence se remarque.

## La fréquence variable est le point essentiel

Tous les téléphones Android modernes ne gèrent pas le 120 Hz de la même façon.

Certaines dalles fonctionnent avec une fréquence fixe. Vous choisissez 60 ou 120 Hz, et le téléphone reste proche de cette valeur tant que l'écran est allumé. Ces modèles subissent la plus forte pénalité, car l'écran continue de se rafraîchir rapidement même lorsque vous lisez une page immobile.

Les meilleures dalles adaptent automatiquement leur fréquence. Beaucoup de téléphones haut de gamme utilisent un écran LTPO OLED capable de descendre bien en dessous de 60 Hz pour un contenu statique, puis de remonter à 120 Hz dès que vous touchez l'écran. Certaines dalles peuvent atteindre 1 Hz. D'autres utilisent une plage plus limitée, par exemple 10, 24, 30, 60 et 120 Hz. Le comportement exact dépend de l'écran, de la version d'Android, de l'application et des réglages du fabricant.

Cette dernière partie est compliquée. Un téléphone peut annoncer un 120 Hz adaptatif tout en se comportant différemment dans Chrome, YouTube, les jeux, le lanceur d'applications et l'écran Always-on. Vous n'avez pas besoin de tout régler manuellement, mais cela explique pourquoi un téléphone 120 Hz peut tenir plus longtemps qu'un autre.

## Le 120 Hz fixe est celui qui coûte le plus de batterie

Si votre téléphone ne dispose pas d'une bonne dalle adaptative, le 120 Hz consomme davantage.

Le contenu statique illustre le mieux ce gaspillage. Lire un article, regarder des photos, consulter une carte ou laisser une recette affichée ne nécessite pas 120 rafraîchissements par seconde. Une dalle fixe continue pourtant de les produire. Vous gagnez peu en confort visuel et payez le coût énergétique pendant tout ce temps.

C'est pourquoi certains téléphones de milieu de gamme à 120 Hz fixe semblent étonnamment gourmands par rapport aux modèles haut de gamme. L'affichage est fluide, mais la dalle ne sait pas ralentir aussi efficacement.

Sur un téléphone qui atteint normalement 7 heures d'utilisation écran allumé à 60 Hz, forcer le 120 Hz toute la journée peut retirer une part sensible de cette autonomie. Je ne donnerais pas un nombre d'heures précis, car les appareils varient trop, mais perdre une heure ou plus sur une dalle à fréquence fixe est tout à fait plausible.

## Le jeu change la situation

Le jeu représente le pire scénario pour la consommation en 120 Hz.

Si un jeu fonctionne à 120 fps, l'écran se rafraîchit rapidement et le GPU calcule davantage d'images. La batterie subit les deux à la fois. Ajoutez une forte luminosité, les données mobiles, un casque Bluetooth et une pièce chaude, et le graphique de consommation devient vite peu flatteur.

Certains jeux restent limités à 30 ou 60 fps, même sur un téléphone 120 Hz. Dans ce cas, le réglage de fréquence compte moins. Le téléphone peut toujours afficher le jeu sur une dalle à fréquence élevée, mais le GPU ne produit pas 120 images différentes chaque seconde.

Pour de longues sessions de jeu loin d'un chargeur, le 60 Hz reste le choix ennuyeux, mais raisonnable.

## Comment modifier le réglage sur Android

Sur Pixel, le réglage se trouve généralement dans **Paramètres > Écran et commandes tactiles > Affichage fluide**. Google recommande toujours de désactiver **Affichage fluide** parmi les moyens d'économiser la batterie sur les Pixel 4 et modèles ultérieurs, y compris les modèles Fold.

Sur Samsung Galaxy, ouvrez **Paramètres > Écran > Fluidité des mouvements**. **Standard** correspond à 60 Hz. **Adaptative** permet d'atteindre jusqu'à 120 Hz sur les modèles et les applications compatibles. Les termes peuvent varier légèrement selon la version de One UI et la région.

Sur OnePlus, Xiaomi, Motorola, Nothing et les autres téléphones Android, cherchez dans **Paramètres > Écran** des intitulés tels que fréquence de rafraîchissement, taux de rafraîchissement de l'écran ou affichage fluide.

Si une option adaptative est disponible, utilisez-la au quotidien. Si les seuls choix sont 60 Hz fixe et 120 Hz fixe, choisissez 120 Hz lorsque la fluidité compte et 60 Hz lorsque l'autonomie est prioritaire.

## Faut-il désactiver le 120 Hz ?

Désactivez-le en voyage, lorsque la batterie est faible, pendant de longues sessions de jeu ou si vous lisez du contenu statique pendant des heures. Utiliser 60 Hz n'endommage pas le téléphone. L'affichage paraît seulement moins fluide une fois que vos yeux se sont habitués au 120 Hz.

Pour un usage quotidien sur un téléphone haut de gamme récent doté d'une fréquence adaptative, je laisserais le 120 Hz activé. Le téléphone réduit déjà la fréquence quand il le peut, et la fluidité du défilement fait partie des rares améliorations modernes que l'on remarque à chaque utilisation.

Sur un ancien téléphone à fréquence élevée ou un modèle abordable à 120 Hz fixe, soyez plus pragmatique. La fluidité est agréable. Avoir encore de la batterie à 19 h l'est davantage.
