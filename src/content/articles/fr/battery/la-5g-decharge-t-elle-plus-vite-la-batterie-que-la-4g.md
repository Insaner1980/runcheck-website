---
title: "La 5G décharge-t-elle plus vite la batterie que la 4G ?"
description: "Méta-description : La 5G peut consommer plus de batterie que la 4G LTE, mais l'écart dépend de la puissance du signal, du type de réseau et du modem du téléphone. Voici quand la 5G compte vraiment et quand la LTE est un meilleur choix pour l'autonomie."
listSummary: "batterie, consommation et depannage"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Oui, la 5G peut décharger la batterie plus vite que la 4G LTE. Mais l'écart n'est plus aussi catastrophique qu'avec la première génération de téléphones 5G.

Une analyse de Speedtest Intelligence d'Ookla a mesuré une consommation supérieure d'environ 6 à 11 % en 5G par rapport à la LTE, selon le SoC du téléphone. La différence est réelle. Sur un appareil récent avec un signal correct, elle ne sépare toutefois pas, en général, une journée complète d'un téléphone à plat. Sur un ancien modèle 5G, ou dans une zone où l'appareil alterne constamment entre LTE et 5G, l'effet peut encore être évident.

Android 17 a d'abord été déployé sur les appareils Pixel compatibles, tandis que les autres téléphones Android le reçoivent plus tard par l'intermédiaire de leur fabricant et de leur opérateur. Cela ne change pas le fond du problème concernant la batterie et la 5G, mais l'emplacement des réglages peut varier selon que votre téléphone utilise encore Android 16, fonctionne déjà sous Android 17 ou attend une mise à jour Samsung, OnePlus, Xiaomi, Motorola ou d'un autre OEM.

## La puissance du signal compte plus que le logo

Le problème de batterie ne vient généralement pas de la petite icône 5G. Il vient du modem qui travaille trop.

Un téléphone bénéficiant d'un signal 5G puissant peut consommer moins qu'un appareil qui s'accroche à une LTE faible. Lorsque le signal est mauvais, le modem doit augmenter sa puissance d'émission. Cet effort supplémentaire se traduit par de la chaleur et une décharge plus rapide. Si votre téléphone se trouve à la limite de la couverture, la génération du réseau compte moins que l'instabilité de la connexion.

C'est pourquoi deux personnes utilisant le même téléphone peuvent obtenir des résultats complètement différents. Près d'une bonne couverture 5G en bande moyenne, la différence d'autonomie peut passer presque inaperçue. Sur un trajet traversant des zones mal couvertes, le téléphone peut passer de la 5G à la LTE, revenir en 5G, puis redescendre encore. Cette recherche permanente gaspille de l'énergie, car le modem renégocie sans cesse la connexion au lieu de rester sur un réseau stable.

Rien de magique. La stabilité compte plus que la vitesse.

## Pourquoi certains réseaux 5G consomment davantage

Les premiers déploiements de la 5G utilisaient souvent la 5G Non-Standalone, abrégée NSA. Dans cette configuration, le téléphone s'appuie sur la LTE comme connexion d'ancrage, tandis que la 5G fournit une capacité de données supplémentaire. Autrement dit, le téléphone peut travailler avec la 4G et la 5G en même temps.

Cette double connexion a permis aux opérateurs de lancer la 5G plus rapidement, mais elle n'était pas idéale pour l'autonomie. Une activité radio supplémentaire consomme de l'énergie, surtout lorsque la couche 5G est faible ou intermittente.

La 5G Standalone, ou SA, supprime l'ancrage LTE et permet au téléphone de se connecter à un cœur de réseau 5G. Elle peut être plus efficace du point de vue énergétique, mais sa couverture reste inégale. Certains opérateurs l'ont largement étendue. D'autres poursuivent encore le déploiement ville par ville, bande par bande et appareil par appareil. Les réglages courants du téléphone n'affichent généralement pas une simple mention NSA ou SA. Le test pratique reste donc le même : la connexion 5G est-elle forte et stable là où vous utilisez réellement le téléphone ?

## Les bandes basses, moyennes et mmWave ne se comportent pas de la même façon

La 5G n'est pas une technologie uniforme. La bande utilisée compte.

La 5G en bande basse porte loin et traverse mieux les bâtiments, mais ses débits sont souvent proches de ceux de la LTE. Son effet sur la batterie reste généralement modéré, car le signal se comporte davantage comme celui des anciennes bandes cellulaires.

La 5G en bande moyenne offre le meilleur compromis pour beaucoup de personnes. Elle est courante dans les villes et les banlieues, et peut être nettement plus rapide que la LTE sans la fragilité de la mmWave. Beaucoup de comparaisons réelles d'autonomie en 5G concernent cette catégorie. La consommation supplémentaire y est visible, mais le plus souvent gérable.

La mmWave est le cas extrême. Elle peut offrir des débits très élevés, mais sa portée est courte et les murs la bloquent facilement. Le téléphone peut devoir fournir davantage d'efforts radio pour conserver la connexion, puis revenir sur une autre bande dès que vous vous déplacez. La plupart des gens ne rencontrent la mmWave que dans certains lieux, comme des stades, des aéroports ou des quartiers urbains très denses. Elle ne représente donc pas l'usage quotidien habituel de la 5G.

## Les modems récents ont réduit une grande partie de l'écart

L'âge du téléphone joue beaucoup. Les premiers appareils 5G utilisaient souvent un modem séparé, ce qui ajoutait de la consommation et de la chaleur. Les téléphones Android haut de gamme récents, ainsi que de nombreux modèles de milieu de gamme, utilisent des conceptions plus intégrées et une commutation réseau plus intelligente.

C'est pourquoi les anciens conseils sur la 5G peuvent induire en erreur. Un téléphone de l'époque du Galaxy S20 et un modèle haut de gamme de 2025 ou 2026 n'effectuent pas le même travail avec le même matériel. Sur un appareil 5G de première ou de deuxième génération, forcer la LTE peut encore économiser une quantité appréciable de batterie. Sur un Pixel, Galaxy, OnePlus, Xiaomi ou Motorola récent, dans une zone bien couverte, le mode automatique est généralement le meilleur réglage par défaut.

Les anciens téléphones ont un autre problème : leur marge de capacité est plus faible. Lorsqu'une batterie a déjà perdu de la capacité après plusieurs années de recharge, chaque inefficacité du réseau devient plus visible.

## Que modifier sur Android

Commencez par une règle simple : laissez la 5G en mode automatique, sauf si vous avez une raison de faire autrement.

Sur Pixel et sur de nombreux téléphones proches d'Android standard, cherchez **Paramètres > Réseau et Internet > SIM > [votre SIM] > Type de réseau préféré**. Selon l'opérateur, vous pouvez voir des options telles que 5G, LTE ou des modes automatiques. Certains opérateurs masquent ou limitent ce menu. C'est agaçant, mais normal.

Sur Samsung Galaxy, le chemin habituel est **Paramètres > Connexions > Réseaux mobiles > Mode réseau**. Les choix exacts dépendent de la région, du micrologiciel de l'opérateur et de la version de One UI.

Utilisez uniquement la LTE lorsque le téléphone change constamment de réseau, lorsque la 5G est plus lente que la LTE dans votre zone ou lorsque vous devez préserver chaque pourcentage de batterie pendant un voyage. Réactivez la 5G lorsque vous retrouvez une bonne couverture.

Les Pixel disposent aussi de **Connectivité adaptative** dans **Paramètres > Réseau et Internet > Connectivité adaptative**. Laissez cette fonction activée, sauf pendant un diagnostic. Elle permet au téléphone de prendre des décisions réseau en tenant compte de la batterie, au lieu de vous obliger à surveiller manuellement la radio.

Après une mise à jour Android majeure, y compris Android 17 sur les Pixel compatibles, ne jugez pas l'autonomie pendant les premières heures. Le téléphone peut encore optimiser les applications, synchroniser des données et appliquer la configuration de l'opérateur. Si la 5G se comporte soudainement mal après une mise à jour, recherchez les mises à jour de l'opérateur, redémarrez le téléphone et envisagez de réinitialiser les paramètres du réseau mobile avant d'accuser la 5G elle-même.

## Quand désactiver la 5G

Désactivez la 5G lorsque le téléphone chauffe dans votre poche, que le signal se coupe régulièrement ou que le graphique de batterie montre que le réseau mobile domine la consommation de la journée. La LTE peut aussi être préférable en itinérance internationale. Un téléphone qui cherche la 5G sur des réseaux inconnus peut gaspiller de l'énergie sans réel bénéfice.

Ne désactivez pas la 5G simplement parce qu'une personne en ligne affirme qu'elle détruit toujours l'autonomie. Ce conseil est trop simpliste. Sur un téléphone moderne bien couvert, le Wi-Fi, la luminosité de l'écran, les applications en arrière-plan et un mauvais signal ont souvent plus d'effet.

## Questions fréquentes

### La 5G endommage-t-elle la batterie à long terme ?

La 5G n'endommage pas directement la batterie. Elle consomme de l'énergie. Le vieillissement de la batterie vient surtout des cycles de charge, de la chaleur, du temps et des longues périodes passées à un niveau de charge élevé. Le problème indirect est la chaleur : si une faible couverture 5G maintient le modem actif et le téléphone chaud pendant des heures, cette chaleur peut contribuer à l'usure de la batterie avec le temps.

### Le Wi-Fi consomme-t-il moins que la 5G ?

En général, oui. Une bonne connexion Wi-Fi sollicite presque toujours moins la batterie que les données mobiles. À la maison, au travail ou dans un hôtel doté d'un Wi-Fi stable, utilisez-le.

### Faut-il désactiver la 5G en voyage ?

Parfois. Si le pays dispose d'une bonne couverture 5G et que votre offre d'itinérance la prend correctement en charge, laissez le mode automatique. Si le téléphone recherche sans cesse la 5G, chauffe ou perd le réseau, passez en LTE jusqu'à retrouver une connexion stable.
