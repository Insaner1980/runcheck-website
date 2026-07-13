---
title: "Comment tester les haut-parleurs et le microphone d'un téléphone"
description: "La plupart des problèmes audio sur un téléphone ne viennent pas d'un haut-parleur ou d'un microphone hors service. Il s'agit plus souvent de peluches, d'un routage Bluetooth, d'une autorisation refusée, d'une coque mal ajustée, d'eau dans une grille ou d'un appel réseau qui donne l'impression d'une panne matérielle."
listSummary: "materiel, test et diagnostic"
hub: "hardware"
sourceNumber: 107
order: 4
tags: ["materiel","test","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Cela ne rend pas le problème moins pénible. Si vos interlocuteurs ne vous entendent pas ou si le haut-parleur grésille à mi-volume, vous devez tout de même identifier la pièce en cause.

## Savoir quel composant audio vous testez

La plupart des smartphones Android possèdent plusieurs haut-parleurs et plusieurs microphones.

L'écouteur téléphonique se trouve près du bord supérieur et sert aux appels classiques. Le haut-parleur principal est généralement placé en bas. Il diffuse le mode mains libres, les médias, les alarmes et les sonneries. Sur de nombreux modèles, les deux fonctionnent ensemble pour produire un son stéréo.

Le microphone principal se situe souvent près du port USB-C. Un second microphone, placé vers le haut, participe à la réduction du bruit pendant les appels. Certains téléphones en ajoutent un troisième pour la vidéo ou l'enregistrement audio directionnel.

Ces composants peuvent tomber en panne séparément. Le mode mains libres peut fonctionner alors que l'écouteur donne un son exécrable. Un mémo vocal peut être parfaitement clair tandis que les appels restent mauvais, car le traitement téléphonique, la qualité du réseau ou le microphone secondaire entrent alors en jeu.

## Tester le haut-parleur principal

Ouvrez Paramètres > Sons et vibrations, ou le menu audio équivalent de votre téléphone, puis lancez une sonnerie. Pendant la lecture, augmentez le volume des médias.

Écoutez s'il y a des vibrations parasites, des bourdonnements, des grésillements ou des baisses soudaines de volume. Lancez ensuite un morceau ou une vidéo que vous connaissez bien. Une simple sonnerie révèle mal les distorsions dans les basses ou l'agressivité des aigus.

Si le téléphone possède des haut-parleurs stéréo, couvrez-les un par un avec un doigt. Vous ne cherchez pas un équilibre parfait. Le côté de l'écouteur est souvent moins puissant que le haut-parleur inférieur. Ce qui compte, c'est de repérer un côté muet, très déformé ou nettement plus faible que d'habitude.

Ne testez pas uniquement au volume maximal. Certains haut-parleurs endommagés saturent à volume moyen. À l'inverse, une grille partiellement bouchée peut sembler correcte lorsqu'on pousse le son, mais rester étouffée à un niveau normal.

## Tester l'écouteur téléphonique

Passez un appel normal et placez le téléphone contre votre oreille. Augmentez le volume pendant l'appel, pas avant. Android gère séparément le volume des médias, de la sonnerie et des appels.

Cherchez un niveau trop faible, des grésillements, des coupures ou un son qui change lorsque vous appuyez légèrement près du bord supérieur. Ce dernier symptôme peut indiquer une connexion mal fixée après une chute.

Pour éviter de déranger quelqu'un, appelez votre messagerie vocale ou une autre ligne que vous contrôlez. L'essentiel est que le téléphone utilise l'écouteur, et non le haut-parleur inférieur.

## Tester le microphone avec un enregistrement

Ouvrez l'application d'enregistrement fournie avec le téléphone, ou une application de confiance. Enregistrez 10-15 secondes en parlant normalement, à environ une longueur de bras.

Réécoutez le fichier. Votre voix doit être claire, régulière et suffisamment forte, sans souffle, bourdonnement ni effet de « voix sous une couverture ».

Retournez ensuite le téléphone et enregistrez un autre extrait en parlant vers le bord supérieur. Les applications ne choisissent pas tous les microphones de la même manière, donc ce test n'isole pas forcément le second microphone. Il peut toutefois révéler une ouverture bouchée ou une grande différence entre les deux positions.

Si les enregistrements sont nets mais que vos interlocuteurs décrivent une voix robotique, ne concluez pas trop vite à une panne du microphone. Ce type de son vient le plus souvent de la latence du réseau, de pertes de paquets, d'un problème d'appels Wi-Fi ou du traitement de l'opérateur.

## Tester le microphone pendant un appel

Appelez une personne qui vous donnera un avis franc. Posez-lui trois questions précises :

- Ma voix est-elle claire ou étouffée ?
- Entendez-vous des parasites, un bourdonnement ou un bruit de vent ?
- Ma voix se coupe-t-elle ?

Passez ensuite en mode mains libres et reposez les mêmes questions. Ce mode utilise les microphones et la réduction du bruit autrement. Si les appels normaux échouent alors que le mains libres est correct, le problème peut venir du chemin du microphone principal, du mode d'appel avec l'écouteur ou de la réduction du bruit.

Testez les appels Wi-Fi et le réseau mobile si les deux sont disponibles. Si la qualité change radicalement entre les deux alors que les enregistrements restent propres, le microphone n'est probablement pas le principal responsable.

## Utiliser les diagnostics intégrés

Les Samsung Galaxy proposent deux solutions utiles. Samsung Members est la plus sûre : ouvrez l'application, appuyez sur Assistance, puis sur Diagnostics du téléphone. Lancez les tests Microphone et Haut-parleur, ou exécutez l'ensemble des diagnostics. De nombreux Galaxy acceptent aussi le code `*#0*#`, qui comprend des tests Speaker et Receiver.

Sur les Google Pixel compatibles, vous pouvez ouvrir Pixel Diagnostics en composant `*#*#7287#*#*` lorsque le téléphone est connecté à Internet. Il s'agit de la procédure de diagnostic Pixel actuelle, contrairement à certains anciens codes liés au signal que l'on voit encore circuler.

Les téléphones Motorola incluent généralement Device Help. Ouvrez Device Help > Device diagnosis > Hardware test, puis choisissez Microphone ou le test du haut-parleur concerné.

Sur les Xiaomi, Redmi et POCO, le menu CIT s'ouvre souvent avec `*#*#6484#*#*`. Il propose des tests distincts pour le haut-parleur, l'écouteur et le microphone.

Si l'outil du fabricant réussit tous les tests mais qu'une seule application n'accède toujours pas au microphone, vérifiez d'abord son autorisation.

## Écarter les causes courantes qui ne sont pas matérielles

Commencez par les éléments physiques. Retirez la coque et recommencez. Certaines coques, surtout les modèles renforcés bon marché ou universels, ne s'alignent pas correctement avec les ouvertures du microphone.

Nettoyez les grilles avec une brosse sèche à poils souples. Brossez leur surface sans enfoncer quoi que ce soit. Un léger souffle d'air peut aider, mais évitez de diriger de l'air comprimé à forte pression dans les ouvertures.

Déconnectez le Bluetooth. Les téléphones acheminent facilement le son vers des écouteurs, une montre, une voiture ou une enceinte que vous aviez oubliés. Désactivez complètement le Bluetooth pendant un essai.

Vérifiez les autorisations du microphone dans Paramètres > Applications > nom de l'application > Autorisations. Contrôlez aussi le raccourci d'accès au microphone dans le volet des réglages rapides, s'il est présent. Si la tuile Sensors off des Options pour les développeurs est active, désactivez-la, car elle peut bloquer l'accès au microphone et aux capteurs.

Vérifiez le mode Ne pas déranger et le volume, mais assurez-vous d'agir sur le bon réglage. Pendant un appel, appuyez sur Volume + pour modifier le volume de l'appel. Pendant la lecture d'un média, les boutons règlent le volume multimédia.

## Et après un contact avec de l'eau ?

De l'eau dans la chambre d'un haut-parleur rend le son étouffé, faible ou bourdonnant. Laissez le téléphone sécher dans un endroit ventilé. N'utilisez pas de chaleur, ne le mettez pas dans du riz et n'introduisez aucun outil pointu dans la grille.

Les applications qui diffusent des sons graves peuvent parfois aider à chasser l'eau du haut-parleur. Utilisez-les avec prudence et à volume modéré. Elles ne font pas de miracle et ne répareront ni la corrosion ni un microphone endommagé.

Après une exposition à l'eau salée, à l'eau d'une piscine ou à une boisson sucrée, un simple séchage peut ne pas suffire. Ces liquides laissent des résidus.

## Quand une réparation devient raisonnable

Une réparation mérite d'être envisagée lorsque le problème apparaît dans plusieurs applications, persiste sans coque et avec le Bluetooth désactivé, fait échouer le diagnostic du fabricant et reste présent après un redémarrage ou un test en mode sans échec.

Le remplacement d'un haut-parleur est souvent plus simple que celui d'un écran. La réparation du microphone peut demander davantage de travail, car le microphone principal peut être intégré à la nappe du port de charge ou à la carte inférieure. Le coût dépend beaucoup du modèle, de l'étanchéité, de la disponibilité des pièces et d'une éventuelle ouverture antérieure du téléphone.

Pour un appareil encore couvert, contactez le vendeur ou le fabricant avant de passer par un atelier indépendant. Les dégâts causés par un liquide ou un choc peuvent modifier la prise en charge, mais une défaillance audio normale mérite d'être signalée.

## Réponses rapides

### Pourquoi le mode mains libres fonctionne-t-il alors que les appels normaux sont très mauvais ?

Le haut-parleur principal et l'écouteur sont deux composants distincts. Le mode d'appel normal utilise aussi un traitement différent du microphone. Testez séparément l'écouteur et le microphone d'appel.

### Une mise à jour logicielle peut-elle corriger un problème audio ?

Oui, si le problème vient du routage audio, d'un pilote, des autorisations ou du traitement des appels. Non, si la membrane du haut-parleur est déchirée, si l'ouverture du microphone est corrodée ou si un connecteur est mal fixé.

### Pourquoi ma voix n'est-elle étouffée que dans une seule application ?

Cela indique généralement une autorisation, la réduction de bruit de l'application, un routage Bluetooth ou le choix du mauvais microphone. Comparez avec l'application d'enregistrement intégrée et un appel téléphonique normal.

### Comment tester le microphone de réduction du bruit ?

Passez un appel dans un environnement modérément bruyant et comparez le mode normal au mains libres. Si votre interlocuteur entend beaucoup plus de bruit de fond que prévu, le microphone secondaire ou le traitement de réduction du bruit peut être en cause. Les diagnostics du fabricant fournissent une confirmation plus fiable qu'un simple appel.
