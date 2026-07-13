---
title: "Comment tester le matériel d'un téléphone Android : guide de diagnostic complet (2026)"
description: "Votre téléphone Android peut sembler fonctionner normalement alors qu'un composant commence à lâcher. Une batterie fatiguée, un haut-parleur affaibli, un capteur de proximité défectueux ou une antenne endommagée ne se signalent pas toujours clairement. Vous constatez simplement une autonomie plus courte, des appels étranges, une chaleur aléatoire ou une zone de l'écran qui ne répond plus."
listSummary: "Votre téléphone Android peut sembler fonctionner normalement alors qu'un composant commence à lâcher."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Bonne nouvelle : vous pouvez tester la plupart de ces éléments avant de payer une réparation. Android propose des pages de paramètres, les fabricants fournissent parfois leurs propres diagnostics, et plusieurs codes ou vérifications manuelles couvrent les principaux composants. Le problème, c'est qu'aucune méthode n'est vraiment universelle.

Android 17 a été publié en juin 2026 pour la plupart des Pixel compatibles, tandis que les autres marques suivent leur propre calendrier. Cela compte, car les menus de diagnostic, les écrans consacrés à l'état de la batterie et les chemins dans les paramètres varient selon la version d'Android, l'interface du fabricant, la configuration opérateur et la région. Considérez chaque code de ce guide comme un raccourci possible, pas comme une promesse.

## Réponse rapide

Commencez par l'outil de diagnostic officiel de la marque lorsqu'il existe.

- Samsung Galaxy : ouvrez Samsung Members, appuyez sur `Assistance`, puis lancez `Diagnostics du téléphone`. Vous pouvez choisir `Tester tout` ou vérifier un composant précis, par exemple la batterie, le haut-parleur, le microphone, l'écran, l'appareil photo ou les capteurs. De nombreux Galaxy acceptent aussi `*#0*#` dans l'application Téléphone pour ouvrir un menu de test matériel.
- Google Pixel : composez `*#*#7287#*#*` en étant connecté à Internet pour ouvrir Pixel Diagnostics sur les Pixel compatibles. Pour la Pixel Tablet, utilisez le parcours web de réparation et de diagnostic de Google.
- Motorola : ouvrez l'application `Aide Appareil`, puis suivez `Diagnostics de l'appareil > Test Matériel`.
- Xiaomi, Redmi et POCO : essayez `*#*#6484#*#*` pour ouvrir le menu de diagnostic CIT. Sur de nombreux modèles, vous pouvez aussi y accéder en appuyant plusieurs fois sur la version du kernel dans les informations du téléphone.
- Téléphones proches d'Android standard : `*#*#4636#*#*` peut ouvrir un menu de test sur de nombreux appareils, surtout pour les informations liées au téléphone, au réseau, à l'utilisation et parfois à la batterie. Ce n'est pas un diagnostic matériel complet, et de nombreux modèles Samsung ou fournis par un opérateur le bloquent.

Si un code ne produit aucun effet, inutile d'insister. Passez aux tests manuels ci-dessous ou utilisez une application de diagnostic.

## Déterminez d'abord s'il s'agit d'un problème logiciel ou matériel

Cette étape peut vous éviter une dépense inutile. Un bogue logiciel peut ressembler exactement à une panne matérielle.

Le mode sans échec est le premier filtre. Maintenez le bouton d'alimentation jusqu'à l'apparition du menu, puis effectuez un appui prolongé sur `Éteindre` jusqu'à ce que l'option de mode sans échec s'affiche. La combinaison varie sur certains téléphones, mais le but reste le même : démarrer Android sans les applications tierces.

Si le problème disparaît en mode sans échec, une application tierce est probablement impliquée. Désinstallez les applications ajoutées récemment, une par une, puis redémarrez normalement après chaque suppression. Si le problème persiste en mode sans échec, la cause se trouve dans Android, le micrologiciel du fabricant ou le matériel.

La réinitialisation d'usine est le dernier test logiciel. Sauvegardez vos données auparavant. Si le problème persiste après une réinitialisation propre, sans restaurer les applications, une panne matérielle devient nettement plus probable.

Cherchez des motifs répétitifs. Une zone tactile morte toujours au même endroit pointe vers l'écran ou le numériseur. Un téléphone qui s'éteint à 20 % mais fonctionne lorsqu'il reste branché évoque la batterie. Un appareil photo qui s'est mis à vibrer après une chute peut avoir un module de mise au point ou de stabilisation optique endommagé. Si l'instabilité a commencé juste après une mise à jour majeure, notamment Android 17 sur Pixel, installez les correctifs disponibles et refaites les tests avant de conclure à une panne de carte mère.

## Pourquoi le matériel tombe en panne

Les batteries s'usent. C'est simplement la chimie des batteries lithium-ion. Google utilise une capacité restante de 80 % comme seuil de remplacement recommandé pour les Pixel, avec un nombre de cycles nominal qui dépend du modèle. Les Pixel 3 à Pixel 8 Pro et le Pixel Fold sont donnés pour 800 cycles, tandis que le Pixel 8a et les modèles suivants sont donnés pour 1 000 cycles.

Les ports et les boutons s'usent à force de servir. Les ports USB-C accumulent les peluches, surtout lorsque le téléphone reste dans une poche. Les boutons perdent leur clic après des milliers de pressions. Les grilles des haut-parleurs s'encrassent si progressivement que vous ne remarquez parfois le problème que lorsque les appels deviennent étouffés.

Les chutes provoquent des pannes plus étranges. Un téléphone peut survivre sans verre fissuré tout en ayant un connecteur desserré, un module photo endommagé, un châssis déformé ou une soudure fragilisée. L'eau est pire, car la corrosion peut apparaître plusieurs jours ou semaines plus tard.

La chaleur accélère presque tous ces phénomènes. Charger le téléphone en plein soleil, jouer pendant la charge ou laisser l'appareil dans une voiture chaude peut user la batterie plus vite et déclencher un bridage thermique. Une température de batterie durablement supérieure à environ 40 °C mérite d'être prise au sérieux.

Les variations de fabrication existent aussi. Deux téléphones portant le même nom de modèle ne se comportent pas forcément de façon identique. De petites différences entre les puces, le contact thermique, les dalles, l'étalonnage des capteurs, le micrologiciel du modem ou les variantes régionales peuvent modifier l'autonomie, la chaleur, la réception et les résultats de benchmark. Cela ne signifie pas automatiquement qu'un appareil est défectueux. Les chiffres publiés en ligne sont des plages, pas des promesses.

## Testez la batterie

Commencez par les informations que votre téléphone affiche réellement.

Sur le Pixel 8a et les modèles suivants, ouvrez `Paramètres > Batterie > État de la batterie`. Le téléphone indique si l'état est `Normale` ou `Réduite`, et la capacité de la batterie correspond à une estimation de la capacité restante par rapport à l'origine. Les Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 et Pixel 8 Pro n'affichent pas ce même état de batterie.

Sur Samsung, utilisez les diagnostics de Samsung Members. Ouvrez `Samsung Members > Assistance > Diagnostics du téléphone`, puis sélectionnez la batterie. Le libellé exact peut varier légèrement selon la région et la version, mais l'application Members reste plus sûre que des codes de batterie trouvés au hasard.

Sur OnePlus, OPPO, realme, Xiaomi et d'autres marques, cherchez dans `Paramètres > Batterie` ou dans l'application d'entretien de l'appareil. Certains modèles affichent l'état de la batterie, d'autres non. En pratique, les informations proposées par Android restent très inégales d'un fabricant à l'autre.

La batterie devient suspecte si le téléphone se décharge vite pendant une utilisation légère, s'éteint entre 15 et 20 %, chauffe pendant la charge ou présente un gonflement de la coque arrière ou de l'écran. Cessez d'utiliser un téléphone dont la batterie est gonflée et faites-le réparer. Ce n'est pas un problème logiciel.

## Testez l'écran et la couche tactile

Pour repérer des pixels morts, affichez en plein écran des images blanches, noires, rouges, vertes et bleues. Parcourez lentement toute la dalle du regard. Les pixels morts restent noirs. Les pixels bloqués restent allumés dans une seule couleur. Sur un écran OLED, le marquage se voit plus facilement sur un fond gris uniforme à luminosité moyenne.

Pour le tactile, ouvrez une application de dessin et tracez des lignes horizontales et verticales serrées sur toute la surface. Les interruptions révèlent les zones mortes. Vous pouvez aussi activer les Options pour les développeurs, puis `Afficher les appuis` ou `Emplacement du pointeur`, et faire glisser votre doigt sur toute la dalle.

Le menu `*#0*#` de Samsung comprend des tests d'affichage et de tactile sur de nombreux Galaxy. Pixel Diagnostics, l'outil Motorola et le menu CIT de Xiaomi peuvent également vérifier l'écran et la couche tactile lorsqu'ils sont disponibles.

## Testez les haut-parleurs et les microphones

Lancez une sonnerie, puis une musique ou une vidéo que vous connaissez bien. Écoutez les grésillements, la distorsion ou une différence marquée entre les deux canaux stéréo. Sur un téléphone stéréo, couvrez un haut-parleur à la fois avec un doigt pour distinguer l'écouteur supérieur du haut-parleur inférieur.

Pour le microphone, enregistrez un court message vocal à bout de bras, puis réécoutez-le. Faites ensuite un véritable appel. Le son des appels passe par la réduction de bruit et le traitement du réseau, si bien qu'un enregistrement peut être correct alors que les appels restent mauvais.

Avant d'accuser le matériel, retirez la coque, déconnectez les appareils Bluetooth, nettoyez les ouvertures du haut-parleur et du microphone avec une brosse douce et sèche, puis vérifiez l'autorisation du microphone pour l'application utilisée.

## Testez les appareils photo

Ouvrez l'application photo et essayez chaque caméra disponible : grand-angle arrière, ultra grand-angle, téléobjectif, macro le cas échéant, puis caméra avant. Cherchez une mise au point qui oscille, des zones floues toujours au même endroit, une dominante colorée, des tremblements en vidéo ou des clics anormaux pendant la mise au point.

La stabilisation optique peut être endommagée par une chute. Le symptôme est souvent évident : la vidéo tremble alors que vos mains restent stables, ou le module émet un bourdonnement. Le logiciel peut modifier le traitement de l'image, mais il ne peut pas réparer un mécanisme de stabilisation physiquement desserré.

## Testez la charge et les ports

Essayez un câble et un chargeur dont vous connaissez le bon fonctionnement avant d'accuser le téléphone. Cela paraît élémentaire, mais une quantité surprenante de « ports USB-C défectueux » sont en réalité des câbles usés.

Examinez le port avec une lampe. Les peluches peuvent se tasser au fond et empêcher la fiche de s'enfoncer complètement. Retirez-les très prudemment avec un outil en bois ou en plastique, ou utilisez de l'air à faible pression. Ne grattez pas les contacts avec du métal.

Si le téléphone ne charge que dans un certain angle, se déconnecte dès que vous le bougez ou refuse le transfert de données avec plusieurs câbles, le port ou la carte inférieure peut nécessiter une réparation.

## Testez les capteurs

Les pannes de capteurs produisent des symptômes très précis : la rotation automatique cesse de fonctionner, l'écran reste allumé pendant les appels, la boussole indique la mauvaise direction ou la luminosité automatique réagit de façon excessive.

Pour l'accéléromètre et le gyroscope, désactivez le verrouillage de la rotation et faites pivoter lentement le téléphone. L'écran doit suivre correctement. Une photo panoramique est aussi un test raisonnable du gyroscope, car l'assemblage dépend du suivi des mouvements.

Pour le capteur de proximité, passez un appel et couvrez le haut de l'écran près de l'écouteur. L'écran doit s'éteindre, puis se rallumer lorsque vous découvrez la zone. Retirez la coque et la protection d'écran avant de déclarer le capteur défectueux.

Pour le capteur de lumière, activez la luminosité automatique et passez d'un environnement clair à un environnement sombre. L'écran doit s'adapter en quelques secondes.

Pour le magnétomètre, ouvrez Maps ou une application de boussole dehors, loin des voitures, ordinateurs portables, aimants et tables métalliques. Si la direction est fausse, recalibrez avec un mouvement en forme de huit.

Le menu `*#0*#` de Samsung et Samsung Members peuvent tester les capteurs. Pixel Diagnostics, l'outil Motorola et le menu CIT de Xiaomi peuvent aussi en couvrir certains, selon le modèle.

## Testez le matériel réseau

Les pannes d'antenne et de radio sont plus difficiles à démontrer, car le réseau de l'opérateur change en permanence. Comparez votre téléphone avec un autre appareil utilisant le même réseau, au même endroit et au même moment.

La puissance du signal est généralement indiquée en dBm dans les informations d'état ou de SIM. L'échelle est négative, donc une valeur plus proche de zéro est meilleure. Environ `-50 dBm` est excellent, `-90 dBm` reste exploitable et `-110 dBm` ou moins est faible. Ces valeurs ne signifient pas exactement la même chose en LTE, en 5G et en Wi-Fi. Utilisez-les pour comparer, pas comme un seuil universel de réussite ou d'échec.

Si votre téléphone perd le Wi-Fi alors que tous les autres appareils restent connectés, essayez-le près du routeur, sur un autre réseau Wi-Fi et avec le Bluetooth désactivé. Si le même téléphone échoue partout, le matériel radio ou le micrologiciel devient plus suspect.

runcheck est utile ici, car il regroupe les données de batterie, de température, de réseau, de stockage et de test de débit dans une même vérification. Après une chute, une surchauffe ou un contact avec l'eau, plusieurs symptômes peuvent se chevaucher.

## Quand envisager une réparation

Une réparation devient raisonnable lorsqu'un problème est reproductible, persiste en mode sans échec, survit à une réinitialisation propre et apparaît aussi dans le diagnostic du fabricant ou un test manuel.

Ne remplacez pas un composant parce qu'une application s'est mal comportée une seule fois. En revanche, faites réparer ou remplacer le téléphone si la batterie gonfle, si le port de charge bouge physiquement, si le tactile échoue toujours dans la même zone, si les appareils photo vibrent après une chute ou si les microphones échouent dans les enregistrements comme dans les appels.

## Questions fréquentes

### Les codes de diagnostic sont-ils sûrs ?

Les menus courants mentionnés ici servent surtout à consulter des informations ou à lancer des tests interactifs. N'entrez tout de même pas des codes pris au hasard sur Internet. Certains codes de fabricant peuvent modifier les paramètres radio ou déclencher des opérations de maintenance.

### Pourquoi `*#*#4636#*#*` ne fonctionne-t-il pas ?

Ce code n'est pas normalisé sur Android. Il fonctionne sur de nombreux appareils proches d'Android standard, mais Samsung, les opérateurs ou le micrologiciel du fabricant peuvent le désactiver.

### À quelle fréquence faut-il tester le matériel ?

Une vérification tous les quelques mois suffit pour l'entretien courant. Testez immédiatement après une chute importante, un contact avec l'eau, une décharge soudaine de la batterie, un problème de charge, ou avant l'achat ou la vente d'un téléphone d'occasion.

### Un téléphone lent a-t-il toujours un problème matériel ?

Non. Commencez par le mode sans échec, l'espace de stockage disponible, les mises à jour des applications et les mises à jour système récentes. Si la lenteur persiste après une réinitialisation d'usine, il devient pertinent d'examiner le matériel, l'usure du stockage, la faiblesse de la batterie ou le bridage thermique.
