---
title: "Que signifie vraiment le pourcentage d'état de la batterie ?"
description: "Le pourcentage d'état de la batterie compare sa capacité maximale actuelle à celle d'origine. Découvrez ce que signifie ce chiffre, pourquoi le seuil de 80 % compte et comment les téléphones Android l'affichent."
listSummary: "Le pourcentage d'état de la batterie compare sa capacité maximale actuelle à celle d'origine."
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Health"
tags: ["batterie","etat","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Le chiffre qui décrit l'état de la batterie mesure son usure. Ce n'est pas le même pourcentage que celui affiché dans la barre d'état.

Si votre téléphone indique un état de 87 %, sa batterie peut stocker environ 87 % de la charge qu'elle contenait lorsqu'elle était neuve. Elle fonctionne encore. Son réservoir est simplement devenu plus petit.

## Ce qui se cache derrière le chiffre

Chaque batterie de téléphone possède au départ une capacité nominale. C'est la quantité de charge que la cellule a été conçue pour stocker, généralement exprimée en mAh. Une grande batterie annoncée à 5 000 mAh doit contenir environ cette quantité lorsqu'elle est neuve.

Puis la chimie entre en jeu. Chaque cycle de charge et de décharge vieillit légèrement la cellule. La chaleur, une tension élevée, les décharges profondes, la recharge rapide et le simple passage du temps s'additionnent. La couche d'interface électrolyte solide à l'intérieur de la batterie s'épaissit, la résistance interne augmente et il reste moins de lithium actif pour transporter la charge entre les électrodes.

Le pourcentage d'état compare la capacité maximale actuelle à la capacité nominale d'origine. Si la batterie ne peut plus dépasser environ 4 350 mAh, son état est proche de 87 %.

C'est là que ce chiffre devient utile. Il montre dans quelle mesure le « plein » a rétréci.

## Le pourcentage d'état n'est pas le niveau de charge

C'est une confusion fréquente. Le niveau de charge indique à quel point la batterie est pleine maintenant. L'état de la batterie indique combien d'énergie elle peut stocker lorsqu'elle est pleine.

Un téléphone chargé à 100 % avec une batterie à 85 % de son état initial ne contient pas autant d'énergie qu'à 100 % lorsqu'il était neuf. Il est plein par rapport à sa capacité actuelle, déjà réduite. Voilà pourquoi deux téléphones peuvent afficher 100 % dans leur barre d'état et offrir des autonomies très différentes.

La taille d'origine change aussi la façon dont vous ressentez ce pourcentage. Un téléphone de 5 500 mAh à 82 % peut encore tenir plus longtemps qu'un modèle compact à 95 %. Le chiffre est utile, mais il ne raconte pas toute l'histoire.

## Comment Android affiche l'état de la batterie

Android n'a jamais géré l'état de la batterie aussi clairement qu'iOS. Pendant des années, l'information publique la plus visible se limitait à un état général, par exemple bon état, surchauffe, batterie déchargée, température trop basse, surtension, état inconnu ou défaillance non précisée. Ces indications signalent des conditions ou des défauts évidents. Ils ne donnent pas un pourcentage précis de capacité restante.

Certains téléphones n'affichent toujours que cet état élémentaire. Sur les appareils proches d'Android d'origine, le menu de test `*#*#4636#*#*` peut montrer des informations sur la batterie si le fabricant l'a laissé actif. Beaucoup le masquent. Certains affichent la température et la tension, mais pas l'état de la batterie.

Android 17 n'a pas rendu cette information universelle. Le système a d'abord été publié sur la plupart des Pixel compatibles, mais l'affichage de l'état dépend toujours du modèle et des données que le matériel expose.

Les Pixel sont actuellement l'exemple le plus clair d'une véritable page destinée au grand public. Sur les Pixel 8a et modèles ultérieurs, Google affiche l'État de la batterie dans **Paramètres > Batterie > État de la batterie**. Les statuts proposés sont « Normale », « Réduite » ou « Indisponible », et la page Capacité de la batterie donne une estimation en pourcentage par rapport à la capacité d'origine. Les Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 et Pixel 8 Pro n'affichent pas cet état, même s'ils peuvent prendre en charge d'autres fonctions de gestion de la batterie.

Samsung suit une autre approche. L'application Samsung Members peut lancer les Diagnostics du téléphone et afficher l'état de la batterie. Certaines versions récentes de One UI montrent davantage d'informations sur certains modèles, mais les détails et les libellés varient selon l'appareil, le micrologiciel et la région.

Les autres marques Android restent irrégulières. Certains modèles Xiaomi, HONOR, OnePlus, OPPO et realme affichent une capacité maximale dans leurs réglages de batterie. Les téléphones plus anciens, les modèles d'entrée de gamme et les appareils dont la jauge fournit peu de données n'affichent souvent rien. En théorie, Android prend mieux en charge ces informations qu'auparavant. En pratique, le matériel et le logiciel du fabricant décident de ce que vous voyez.

C'est pour cette raison que runcheck considère l'état de la batterie comme un indicateur parmi d'autres, et non comme un verdict unique. Lorsque le téléphone expose un état, une tension, une température, un courant, un nombre de cycles ou une capacité, runcheck peut présenter ces mesures avec un niveau de confiance au lieu de prétendre que tous les appareils Android fournissent des données de même qualité.

## Pourquoi tout le monde parle du seuil de 80 %

Le chiffre de 80 % n'a rien de magique. C'est un seuil courant de durée de service.

Sous 80 % de la capacité d'origine, l'autonomie a suffisamment diminué pour que beaucoup de personnes le remarquent. La résistance interne est aussi généralement plus élevée, ce qui augmente le risque de chute de tension sous charge. Le téléphone peut alors s'éteindre pendant une rafale de photos, un jeu ou une promenade par temps froid, même si le niveau affiché ne semblait pas vide quelques secondes auparavant.

Les fabricants publient désormais des objectifs de cycles différents, ce qui rend trop simpliste l'ancien conseil des « 300-500 cycles ». Google indique que les Pixel 8a et modèles ultérieurs devraient conserver jusqu'à 80 % de leur capacité pendant environ 1 000 cycles de charge. Les Pixel 3 à Pixel 8 Pro, ainsi que le Pixel Fold, sont annoncés pour environ 800 cycles. Dans l'Union européenne, les smartphones et tablettes mis sur le marché doivent respecter une exigence d'écoconception d'au moins 800 cycles de charge et de décharge tout en conservant au moins 80 % de leur capacité initiale.

Pour un usage quotidien, vous pouvez lire les chiffres ainsi :

- Au-dessus de 85 %, tout va généralement bien, sauf si le téléphone avait déjà une petite batterie.
- Autour de 80 %, les personnes qui utilisent beaucoup leur téléphone commencent souvent à prévoir un remplacement.
- Sous 75 %, les plaintes d'autonomie ne sont plus surprenantes.
- Sous 70 %, remplacer la batterie est souvent le choix pratique si vous comptez garder le téléphone.

Ce ne sont pas des règles officielles. Ce sont des repères de décision.

## Pourquoi le chiffre peut être faux

L'état de la batterie reste une estimation. Le téléphone ne place pas la cellule dans un laboratoire pour la mesurer dans des conditions contrôlées.

Une puce de jauge estime la capacité en suivant la charge qui entre et sort, la tension, la température et le comportement pendant la recharge, puis compare ces données à un modèle de la cellule. Ce modèle peut dériver. De longues périodes de recharges peu profondes, un remplacement de batterie, une mise à jour du système ou une série de températures inhabituelles peuvent faire varier la valeur affichée.

De petits écarts sont normaux. Si l'état passe de 88 % à 90 % après quelques cycles plus complets, la batterie ne s'est pas réparée. L'estimation s'est améliorée.

Les applications tierces rencontrent la même limite avec une autre méthode. AccuBattery, par exemple, estime la capacité en mesurant le courant reçu pendant les sessions de recharge et en calculant une moyenne dans le temps. Le résultat peut devenir utile après une ou deux semaines d'utilisation normale, mais une seule session ne suffit pas. Un câble médiocre, la chaleur, une recharge partielle ou un téléphone qui ralentit la recharge près de 80 % peuvent fausser le calcul.

Le matériel compte aussi. Certains téléphones remontent des valeurs stables et utiles. D'autres restent bloqués à 100 % parce qu'ils n'exposent pas de données réelles sur le vieillissement. Le prix du téléphone ne garantit pas à lui seul la qualité de la mesure.

## Que faire de ce chiffre

Utilisez l'état comme une tendance. Une mesure isolée est intéressante. Une baisse observée pendant six mois l'est davantage.

Si le téléphone indique 89 % et tient encore toute la journée, ne faites rien. S'il affiche 78 % et que vous devez le recharger deux fois par jour, il vaut probablement la peine de demander le prix d'un remplacement. Si l'appareil s'éteint à 25 %, chauffe pendant une utilisation légère ou affiche des pourcentages qui sautent, accordez plus d'importance à ces symptômes qu'au chiffre lui-même.

Et si la batterie gonfle, cessez d'utiliser le téléphone. Le pourcentage n'a plus d'importance.

runcheck est utile dans ce cas, car il permet de comparer l'état de la batterie avec la température, la tension, la fiabilité du courant, la vitesse de décharge et l'historique. Le vieillissement se présente rarement sous la forme d'un chiffre parfaitement net. Il apparaît comme un ensemble de signes.

## Questions courantes

### Un état de batterie à 85 % est-il mauvais ?

Non. À 85 %, la cellule a perdu une partie de sa capacité, mais la plupart des téléphones restent utilisables. Une grande batterie conserve par exemple environ 4 250 mAh à 85 %. Selon le téléphone et vos habitudes, cela peut encore suffire pour une journée complète.

### L'état de la batterie peut-il remonter ?

La capacité chimique réelle ne revient pas. Le vieillissement du lithium-ion est permanent. Le chiffre affiché peut toutefois augmenter si le téléphone sous-estimait la capacité et la recalcule ensuite plus précisément.

### Pourquoi mon téléphone indique-t-il seulement que l'état est bon au lieu d'afficher un pourcentage ?

Parce que de nombreux téléphones Android n'exposent qu'un état élémentaire. Un état « bon » signifie qu'Android ne détecte pas de défaut précis. Cela ne veut pas dire que la cellule conserve 100 % de sa capacité d'origine.

### Faut-il remplacer la batterie exactement à 80 % ?

Pas automatiquement. Remplacez-la lorsque le téléphone ne tient plus votre journée, s'éteint de manière inattendue ou affiche un état Réduit avec une autonomie devenue gênante. Le seuil de 80 % est un signal de planification, pas un compte à rebours.
