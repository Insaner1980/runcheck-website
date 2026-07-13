---
title: "Guide de test des capteurs Android : vérifier, diagnostiquer et corriger les problèmes"
description: "Comment savoir si la rotation automatique est en panne, si la boussole est désorientée ou si une application se comporte simplement mal ? C'est tout le problème avec les pannes de capteurs. Elles paraissent mineures jusqu'au moment où vous avez besoin de la navigation, des appels, de la stabilisation de l'appareil photo, du comptage des pas ou de la luminosité automatique."
listSummary: "materiel, test et diagnostic"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["materiel","test","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Les téléphones Android utilisent un mélange de capteurs de mouvement, d'environnement, de position et de proximité. Certains sont des composants physiques. D'autres sont des capteurs « virtuels », dont les valeurs sont calculées à partir de plusieurs puces. Lorsqu'une source devient instable, obstruée ou désactivée, le symptôme peut apparaître à un endroit totalement différent.

Commencez simplement. Les premiers tests ne nécessitent ni root, ni ADB, ni matériel de laboratoire.

## Vérifications rapides des capteurs

Essayez ces tests courants avant d'installer quoi que ce soit :

- Faites pivoter le téléphone du mode portrait au mode paysage après avoir désactivé le verrouillage de la rotation. Cela vérifie le fonctionnement de base de l'accéléromètre.
- Prenez une photo panoramique. Si le téléphone ne suit pas correctement le mouvement, le gyroscope peut être en cause.
- Passez un appel et couvrez le haut de l'écran près de l'écouteur. L'écran doit s'éteindre, puis se rallumer lorsque vous le découvrez. Cela teste le capteur de proximité.
- Activez la luminosité automatique et passez d'une pièce claire à une pièce sombre. L'écran doit s'adapter en quelques secondes.
- Ouvrez Maps et observez le faisceau bleu qui indique la direction. S'il est très large ou mal orienté, le magnétomètre a probablement besoin d'un étalonnage ou subit des interférences.

Sur un Samsung Galaxy, Samsung Members offre le parcours le plus simple : ouvrez Samsung Members, appuyez sur `Assistance`, puis lancez `Diagnostics du téléphone`. L'ancien menu `*#0*#` fonctionne également sur de nombreux Galaxy et comprend une section consacrée aux capteurs.

Sur un Pixel compatible, composez `*#*#7287#*#*` pour ouvrir Pixel Diagnostics. Sur de nombreux appareils Xiaomi, Redmi et POCO, `*#*#6484#*#*` ouvre le menu CIT. Sur Motorola, ouvrez l'application `Aide Appareil`, puis suivez `Diagnostics de l'appareil > Test Matériel`.

Ne considérez pas `*#*#4636#*#*` comme un test de capteurs. Sur de nombreux téléphones, il ouvre un écran d'information ou de test consacré au réseau, à l'utilisation, au Wi-Fi et parfois à la batterie. Ce n'est pas un menu universel de diagnostic des capteurs.

## Pourquoi les capteurs rencontrent des problèmes

Une dérive de l'étalonnage est la cause banale la plus courante. Les accéléromètres, les gyroscopes et les magnétomètres reposent tous sur un étalonnage. Le magnétomètre est particulièrement sensible, car les aimants, les coques métalliques, les supports de voiture, les ordinateurs portables, les haut-parleurs et même certains étuis portefeuille peuvent le perturber.

Les dommages physiques viennent ensuite. Une chute peut déplacer un module, déformer le châssis près du bord supérieur ou endommager une nappe. Les effets de l'eau peuvent être plus lents. Le téléphone semble fonctionner pendant une semaine, puis le capteur de proximité ou le baromètre commence à réagir bizarrement à mesure que la corrosion progresse.

Les fenêtres des capteurs peuvent aussi être obstruées sans que cela se voie. Les capteurs de proximité et de lumière ambiante se trouvent généralement près de l'écouteur ou sous une partie de l'écran. Une protection épaisse, le rebord d'une coque, de la poussière, des traces grasses ou un verre de confidentialité mal aligné peuvent bloquer ou disperser la lumière utilisée par le capteur.

Le logiciel peut également perturber les capteurs. Les grandes mises à jour d'Android, les changements de micrologiciel du fabricant, les ROM personnalisées, les autorisations des applications et une gestion agressive de la batterie peuvent modifier les données reçues par les applications. Android 17 a été publié en juin 2026 pour la plupart des Pixel compatibles, tandis que les autres marques suivent leur propre calendrier. Les bogues liés à une mise à jour ne touchent donc pas tous les téléphones au même moment.

Les réglages d'alimentation comptent eux aussi. Depuis Android 9, les applications en arrière-plan ne reçoivent plus les événements des capteurs continus comme l'accéléromètre et le gyroscope. Android 10 a ajouté la tuile pour développeurs `Sensors off`, qui peut couper l'appareil photo, le microphone et les capteurs gérés par le `SensorManager` d'Android. Si tous les capteurs semblent soudainement morts, vérifiez cette tuile avant de conclure à une panne de la carte mère.

## Testez l'accéléromètre et le gyroscope

Désactivez le verrouillage de la rotation et faites pivoter lentement le téléphone. L'écran doit changer d'orientation sans long délai ni basculements répétés. S'il refuse de pivoter dans toutes les applications, l'accéléromètre ne transmet peut-être plus correctement ses données.

Ouvrez ensuite une application de niveau à bulle ou toute application qui affiche l'inclinaison. Posez le téléphone à plat sur une table. Les valeurs doivent se stabiliser au lieu de dériver sans fin. Un petit décalage est normal. Une forte inclinaison fixe alors que le téléphone repose à plat évoque un problème d'étalonnage.

Pour le gyroscope, utilisez le mode panorama de l'appareil photo ou une application de réalité augmentée. La vue doit suivre vos mouvements de façon fluide. Si les panoramas échouent régulièrement ou si des objets en réalité augmentée glissent alors que vous ne bougez pas, le gyroscope peut produire des données instables.

La comparaison aide beaucoup dans ce cas. Testez la même application sur un autre téléphone dans la même pièce. Si les deux réagissent mal, le problème vient probablement de l'application ou de l'environnement.

## Testez le capteur de proximité

Passez un appel, puis placez votre main à environ 2 cm au-dessus de la partie supérieure de l'écran. L'affichage doit s'éteindre. Éloignez la main et il doit se rallumer.

La plupart des capteurs de proximité ne mesurent pas précisément une distance. Ils indiquent souvent seulement un état proche ou éloigné, sans progression centimètre par centimètre. Dans une application de diagnostic, vous pouvez donc voir `0 cm` puis `5 cm`, sans valeur intermédiaire. C'est normal.

Si la valeur reste bloquée, retirez la coque et la protection d'écran. Nettoyez le bord supérieur ou la zone du capteur avec un chiffon doux. Refaites le test avant d'accuser le matériel. Les protections en verre trempé sont une cause classique.

## Testez le capteur de lumière ambiante

Activez la luminosité automatique. Éclairez la partie supérieure de l'écran avec une lampe, puis couvrez la même zone avec la main. La luminosité doit réagir clairement, même si Android peut lisser la transition au lieu de la modifier instantanément.

La mesure du capteur s'affiche généralement en lux. Une pièce sombre peut se situer sous 50 lux. Un bureau classique atteint quelques centaines de lux. La lumière directe du soleil peut dépasser 10 000 lux. La valeur exacte compte moins que sa réaction logique lorsque l'éclairage change.

Si la luminosité automatique se comporte mal alors que la valeur en lux réagit correctement, le capteur fonctionne probablement. Le problème vient plutôt de l'apprentissage de la luminosité adaptative, des réglages de l'écran ou du logiciel du fabricant.

## Testez le magnétomètre et la boussole

Sortez ou éloignez-vous des objets métalliques. Ouvrez Maps et appuyez sur l'indicateur de position. Si le faisceau bleu est très large ou pointe dans la mauvaise direction, recalibrez la boussole.

Faites un mouvement en forme de huit : tenez le téléphone devant vous et dessinez un grand huit couché en faisant varier l'angle du poignet. Continuez pendant 15 à 20 secondes. Cela paraît un peu ridicule. Cela fonctionne étonnamment souvent.

Si la boussole reste fausse, retirez les accessoires magnétiques et recommencez. Les supports de voiture, les étuis portefeuille, les anneaux de type MagSafe, les couvercles d'ordinateur portable et les bureaux métalliques peuvent tous déformer les mesures. À l'intérieur, la boussole est souvent moins précise que prévu.

## Testez le baromètre

Tous les téléphones Android ne possèdent pas de baromètre. Les modèles d'entrée de gamme s'en passent souvent.

Si votre téléphone en a un, une application de capteurs doit afficher la pression atmosphérique en hPa ou en millibars. Comparez-la à une station météo proche. N'attendez pas une correspondance parfaite, car les applications météo indiquent souvent une pression ramenée au niveau de la mer, tandis que le téléphone mesure la pression locale à votre altitude.

Une valeur complètement figée peut signaler un capteur obstrué ou en panne. L'orifice de mise à l'air est minuscule, donc les peluches et la poussière comptent.

## Lisez les données brutes sans chercher la perfection

Les valeurs brutes sont utiles, mais inutile d'exiger une précision de laboratoire.

Un accéléromètre mesure l'accélération sur les axes X, Y et Z en m/s². Un téléphone posé à plat doit indiquer environ 9,8 m/s² sur un axe en raison de la gravité, et des valeurs proches de zéro sur les autres, selon son orientation.

Un gyroscope mesure la rotation en radians par seconde. Lorsque le téléphone reste immobile, les valeurs doivent se maintenir près de zéro. De minuscules mouvements et un peu de bruit sont normaux.

Un magnétomètre mesure l'intensité du champ magnétique en microteslas. Le champ magnétique terrestre se situe souvent entre environ 25 et 65 microteslas selon l'endroit. Des valeurs très éloignées de cette plage indiquent généralement des interférences.

Un capteur de lumière mesure en lux. Vous cherchez une évolution cohérente, pas une précision de laboratoire.

## Correctifs à essayer avant une réparation

Redémarrez d'abord le téléphone. C'est banal, mais cela vaut la peine.

Retirez ensuite la coque et la protection d'écran, nettoyez la zone des capteurs en haut du téléphone, désactivez l'Économiseur de batterie et vérifiez si la tuile `Sensors off` est activée dans les Options pour les développeurs. Si une seule application est touchée, contrôlez ses autorisations et ses restrictions de batterie.

Pour la boussole, recalibrez et éloignez-vous des aimants. Pour la rotation automatique, testez plusieurs applications, car certaines verrouillent elles-mêmes l'orientation. Pour la proximité, effectuez un véritable appel avec la protection d'écran retirée.

Si un capteur a cessé de fonctionner juste après une mise à jour du système, installez les mises à jour système et Google Play en attente, puis recommencez. Si le téléphone utilise une version bêta, ne considérez pas un comportement défectueux comme la preuve d'une panne matérielle avant d'avoir testé une version stable.

Une application de diagnostic comme runcheck devient utile lorsque plusieurs symptômes se superposent. La batterie, la chaleur et le réseau peuvent donner l'impression que le téléphone entier est défaillant alors que le capteur n'est qu'une partie du problème.

## Quand une panne matérielle devient probable

Soupçonnez le matériel lorsque le même capteur échoue dans toutes les applications, échoue aussi dans l'outil de diagnostic du fabricant, reste défectueux en mode sans échec et ne fonctionne toujours pas après une réinitialisation.

Les capteurs d'un téléphone sont généralement de minuscules composants soudés en surface ou intégrés à un module plus grand. Les réparateurs remplacent rarement une seule puce de capteur. En pratique, la réparation implique souvent le remplacement de l'écran, d'un module photo, de la carte inférieure ou d'une partie de la carte mère, selon l'emplacement du capteur.

Si le téléphone est tombé, s'est plié ou a été exposé à l'eau, mentionnez-le lorsque vous demandez des devis. Cela change les éléments que le technicien doit inspecter.
