---
title: "Comment tester l'écran de votre téléphone pour détecter les pixels morts et les problèmes tactiles"
description: "Vous examinez un smartphone d'occasion. Le vendeur affirme que l'écran est impeccable et, au premier regard, c'est bien l'impression qu'il donne. Puis vous affichez un fond blanc et remarquez un point noir près d'un coin. Pire encore, vous commencez à écrire et toute une bande du clavier ne réagit pas à votre doigt."
listSummary: "Vous examinez un smartphone d'occasion."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["materiel","test","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Les défauts d'écran se dissimulent facilement pendant un usage normal. Le fond d'écran, les icônes, le mode sombre et les animations peuvent les masquer. Quelques tests avec des couleurs unies et des gestes tactiles suffisent à les rendre beaucoup plus visibles.

## Pixels morts et pixels bloqués

Un pixel mort reste noir, quelle que soit l'image affichée. Il ne fonctionne plus.

Un pixel bloqué se comporte autrement. Il reste allumé dans une seule couleur, généralement rouge, verte, bleue ou blanche, même lorsque la zone autour de lui change. Il arrive qu'un outil faisant défiler rapidement les couleurs débloque ce type de pixel. Pour un pixel mort, cela fonctionne rarement.

Ces deux défauts se voient surtout sur des fonds unis. Ne vous contentez pas d'examiner l'écran d'accueil. Vous risqueriez de passer à côté de beaucoup de choses.

## Rechercher des pixels morts ou bloqués

Augmentez la luminosité, nettoyez la vitre et affichez en plein écran des aplats blanc, noir, rouge, vert, bleu et gris.

Un test dans le navigateur, comme deadpixeltest.org, convient très bien. Une application de test d'écran du Play Store peut être plus pratique, car elle peut masquer les barres d'état et de navigation, faire défiler les couleurs automatiquement et proposer des dégradés.

Certains téléphones disposent aussi d'outils intégrés :

- Samsung Galaxy : composez `*#0*#` sur de nombreux modèles, puis utilisez les tests Red, Green, Blue, Black et Touch. Vous pouvez également ouvrir Samsung Members, aller dans Assistance > Diagnostics du téléphone et lancer le test de l'écran.
- Google Pixel : composez `*#*#7287#*#*` pour ouvrir Pixel Diagnostics sur les appareils compatibles.
- Xiaomi, Redmi et POCO : essayez `*#*#6484#*#*` pour ouvrir le menu CIT.
- Motorola : ouvrez Device Help > Device diagnosis > Hardware test.

Sur un fond blanc, les pixels morts apparaissent comme de minuscules points noirs. Sur un fond noir, les pixels bloqués ressortent sous forme de points colorés lumineux. Les écrans rouge, vert et bleu aident à déterminer quel sous-pixel reste bloqué.

Prenez votre temps. Un passage lent le long des bords et dans les coins révèle davantage de défauts qu'un défilement précipité des couleurs.

## Vérifier l'uniformité de la luminosité et le marquage

Sur un téléphone LCD, un écran entièrement noir observé dans une pièce sombre peut révéler des fuites de rétroéclairage, visibles sous forme de zones nuageuses plus claires près des bords. Les écrans OLED n'utilisent pas de rétroéclairage et ne présentent donc pas ce défaut de la même manière.

Les écrans OLED ont leur propre problème : le marquage permanent, ou burn-in. Les dalles AMOLED, Super AMOLED et Dynamic AMOLED peuvent vieillir de façon inégale lorsque les mêmes éléments restent affichés pendant longtemps. Les barres de navigation, les icônes d'état, le clavier et les commandes des applications sociales laissent souvent ce type de trace.

Affichez un fond gris uni avec une luminosité moyenne. Cherchez de faibles silhouettes du clavier, des boutons de navigation, de l'horloge ou des barres d'application. Un fond rouge peut aussi faire ressortir certains marquages, car les différents sous-pixels ne vieillissent pas tous au même rythme.

Le burn-in est permanent. Les applications qui prétendent le corriger essaient généralement d'user le reste de l'écran pour rendre l'ancienne forme moins visible. Ce n'est pas une véritable réparation.

## Tester la réactivité tactile

Un écran peut sembler parfait tout en ayant un numériseur défectueux. Le numériseur est la couche qui détecte le toucher.

Ouvrez une application de dessin et choisissez un trait fin. Tracez des lignes horizontales du haut vers le bas, puis des lignes verticales de gauche à droite. Gardez-les assez rapprochées. Si le trait s'interrompt toujours au même endroit, cette zone du numériseur ne détecte pas correctement le doigt.

Une application de test tactile avec une grille rend l'opération plus simple. Chaque case doit se colorer lorsque votre doigt la traverse. Les zones mortes restent vides.

Le menu `*#0*#` de Samsung comprend un test Touch sur de nombreux Galaxy. Certains téléphones Android réagissent aussi à `*#*#2664#*#*`, mais ce code est beaucoup moins fiable que les outils du fabricant. S'il ne fonctionne pas, ce n'est pas inquiétant. Le test de dessin suffit.

Observez particulièrement les bords. Les écrans incurvés et les bordures très fines peuvent rendre la détection plus difficile à évaluer, surtout lorsque le rejet de la paume est actif.

## Tester le multitouch

La plupart des smartphones récents reconnaissent au moins cinq points de contact simultanés, et beaucoup en acceptent dix. Une application de test multitouch affiche un cercle numéroté pour chaque doigt.

Posez plusieurs doigts sur l'écran, puis déplacez-les lentement. Les cercles doivent rester attachés à vos doigts, sans sauter ni disparaître. Si le téléphone perd systématiquement un doigt dans la même zone, c'est un indice utile.

Ce test compte pour les jeux, le zoom par pincement, l'utilisation du clavier et certains gestes d'accessibilité.

## Repérer les touchers fantômes

Les touchers fantômes sont des commandes qui se déclenchent sans contact. Le téléphone ouvre des applications, saisit des lettres, fait défiler une page ou appuie sur des boutons alors que personne ne touche l'écran.

Commencez par retirer le protège-écran et la coque. Un film bon marché, de l'humidité emprisonnée ou une pression près des bords peuvent perturber le numériseur. Nettoyez l'écran, puis testez le téléphone branché et débranché, car un chargeur défectueux peut parfois créer des parasites tactiles.

Démarrez ensuite le téléphone en mode sans échec. Si les touchers fantômes continuent, la piste matérielle devient plus probable. S'ils disparaissent, une application tierce ou une surcouche peut être en cause.

Si le problème a commencé juste après une mise à jour majeure du système, prenez sérieusement en compte la piste logicielle. Android 17 a d'abord été déployé sur les Pixel compatibles, avant d'arriver progressivement chez d'autres fabricants. Un défaut tactile lié à une mise à jour peut donc apparaître sur une marque avant les autres. Installez les correctifs disponibles et recommencez le test avant de payer un remplacement d'écran.

## Que faire si vous trouvez un défaut

Sur un smartphone d'occasion, un pixel mort, une zone tactile inactive, des touchers fantômes ou un burn-in visible doivent peser sur le prix. N'acceptez pas qu'on vous affirme qu'un défaut tactile est « seulement logiciel » sans pouvoir le vérifier vous-même en mode sans échec ou avec un outil de diagnostic.

Pour un téléphone neuf acheté auprès d'un vendeur professionnel en France, signalez rapidement le défaut au vendeur. La garantie légale de conformité s'applique pendant deux ans à compter de la délivrance du bien. Vous pouvez demander une réparation ou un remplacement sans frais, et la mise en conformité doit en principe intervenir dans les 30 jours. Une garantie commerciale du fabricant peut s'ajouter à ces droits, mais ne les remplace pas.

Pour un pixel bloqué, un outil de défilement des couleurs vaut la peine d'être essayé, sans en attendre trop. Lancez-le pendant une courte session, pas toute une nuit à luminosité maximale. Les pixels morts, les touchers fantômes et les zones tactiles inactives nécessitent généralement le remplacement de l'ensemble écran.

Les prix de réparation varient trop pour donner une estimation fiable. L'écran LCD d'un modèle d'entrée de gamme peut coûter relativement peu à remplacer. Sur un smartphone haut de gamme avec un écran OLED incurvé, la facture peut être suffisamment élevée pour rendre le remplacement du téléphone plus raisonnable. Demandez un devis pour le modèle exact avant de décider.

## Réponses rapides

### Un protège-écran peut-il provoquer des pixels morts ?

Non. Les pixels morts se trouvent dans la dalle. Un protège-écran peut causer des problèmes tactiles, de faux touchers, une mauvaise réponse sur les bords ou des soucis avec le capteur de proximité, mais il ne détruit pas les pixels.

### Les pixels morts se multiplient-ils ?

Un pixel mort isolé reste généralement isolé. Si d'autres apparaissent au fil du temps, il peut y avoir un dommage de la dalle, une pression excessive ou une connexion qui commence à lâcher.

### Le burn-in est-il couvert par la garantie ?

Parfois, mais ne le présumez pas. Les fabricants peuvent considérer le burn-in comme de l'usure, surtout sur un écran OLED ancien. Un marquage important apparu très tôt mérite toutefois d'être signalé au vendeur. En France, la prise en charge dépend notamment de l'origine du défaut et de l'application de la garantie légale de conformité, indépendamment d'une éventuelle garantie commerciale.

### Un pixel mort est-il acceptable sur un téléphone neuf ?

Pour l'acheteur, non. Un téléphone neuf devrait avoir un écran sans défaut. Les politiques internes des fabricants ne sont pas toutes identiques, mais elles ne suppriment pas vos droits légaux auprès du vendeur en France.
