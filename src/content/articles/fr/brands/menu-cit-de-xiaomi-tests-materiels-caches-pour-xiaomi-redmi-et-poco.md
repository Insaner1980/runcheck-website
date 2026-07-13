---
title: "Menu CIT de Xiaomi : tests matériels cachés pour Xiaomi, Redmi et POCO"
description: "Le menu CIT de Xiaomi permet de lancer les tests matériels intégrés d'un téléphone Xiaomi. Découvrez les codes, le chemin par les Paramètres, les tests utiles et les limites de CIT."
listSummary: "Le menu CIT de Xiaomi permet de lancer les tests matériels intégrés d'un téléphone Xiaomi."
hub: "brands"
sourceNumber: 159
order: 7
tags: ["materiel","test","diagnostic","android","guide"]
locale: "fr"
draft: false
---
CIT est le contrôle matériel intégré le plus rapide sur la plupart des téléphones Xiaomi, y compris les modèles Redmi et POCO sous une version officielle de MIUI ou d'HyperOS. Le menu n'est pas très élégant. Il donne peu d'explications. Mais lorsque vous devez savoir si l'écran tactile, le haut-parleur, le microphone, un capteur ou un appareil photo répond réellement, il vous mène au résultat plus vite que la plupart des applications de diagnostic du Play Store.

Dans ses pages d'assistance, Xiaomi parle généralement de détection du matériel ou de mode CIT. Vous le rencontrerez surtout lors du dépannage d'un problème précis, comme un écran tactile qui réagit tout seul ou un téléphone qui redémarre sans cesse. Ce menu sert à tester l'appareil à un instant donné, pas à suivre son état dans le temps.

Voilà toute l'idée.

## Commencez par ouvrir CIT

Le chemin le plus rapide passe par un code. Ouvrez l'application Téléphone et saisissez `*#*#6484#*#*`. Sur certaines versions Xiaomi, `*#*#64663#*#*` ouvre le même menu de détection du matériel. Il n'est pas nécessaire d'appuyer sur le bouton d'appel.

Si le code ne produit aucun effet, essayez le chemin par les Paramètres. Ouvrez **Paramètres > À propos du téléphone**, accédez à la page des informations détaillées ou de toutes les caractéristiques selon votre version, puis appuyez plusieurs fois sur **Version du noyau**. Sur de nombreuses versions de MIUI et d'HyperOS, le téléphone affiche un compte à rebours avant d'ouvrir CIT.

Le chemin exact varie, car Xiaomi a modifié l'organisation des Paramètres entre MIUI, HyperOS, les versions régionales et les tablettes. Les anciennes versions de MIUI peuvent afficher **Version du noyau** directement sous À propos du téléphone. Les versions récentes d'HyperOS la placent généralement dans la page des caractéristiques détaillées.

Si aucune des deux méthodes n'ouvre CIT, vérifiez trois points avant de conclure que le téléphone ne possède pas cette fonction : il doit utiliser un firmware Xiaomi officiel, l'application Téléphone d'origine et non une ROM personnalisée comme LineageOS. Les ROM personnalisées suppriment souvent les composants de diagnostic privés de Xiaomi.

## Ce que CIT peut réellement tester

CIT accède au matériel de manière assez directe pour être utile, mais ses résultats restent simples : réussite ou échec. Il peut vous dire qu'un microphone n'a rien enregistré ou qu'une zone tactile n'a pas répondu. Il ne peut pas déterminer si la cause est un dégât des eaux, une nappe mal connectée, un écran de remplacement défectueux ou un bug du firmware.

Le contenu du menu change selon le modèle. Un Redmi Note dépourvu de NFC n'affichera pas la même liste qu'un Xiaomi haut de gamme équipé d'un émetteur infrarouge, d'un lecteur d'empreintes sous l'écran, d'un baromètre et de plusieurs modules photo. C'est normal.

Les contrôles CIT les plus courants concernent l'écran, la dalle tactile, l'écouteur, le haut-parleur, les microphones, le moteur de vibration, les appareils photo, le lecteur d'empreintes, le capteur de proximité, le capteur de luminosité ambiante, l'accéléromètre, le gyroscope, la boussole, le lecteur de carte SIM, le Wi-Fi, le Bluetooth, le NFC, l'émetteur infrarouge et l'état de charge.

## Le test tactile est celui à lancer en premier

Si vous achetez un Xiaomi d'occasion, commencez par le test tactile. Il repère des problèmes qu'un simple balayage de l'écran d'accueil peut laisser passer.

Le test affiche généralement une grille ou une zone de dessin. Faites glisser votre doigt sur les sections demandées et cherchez des trous, des lignes interrompues ou des zones qui refusent de devenir vertes. Un téléphone d'occasion peut sembler impeccable tout en ayant une bande morte près du bord du numériseur. Mieux vaut la découvrir avant de payer qu'après.

Les propres pages d'assistance de Xiaomi recommandent le mode CIT lorsque la dalle réagit toute seule, ralentit ou ne répond pas correctement. Elles rappellent aussi les causes banales que l'on oublie facilement : verre fissuré, eau, protection d'écran tierce, doigts humides, chargeur instable ou application défectueuse. Le test est utile, mais il n'est pas magique.

## Capteurs, audio, appareils photo et connectivité

Les tests audio sont simples. Le test du haut-parleur diffuse un son par les haut-parleurs principaux, celui de l'écouteur utilise le haut-parleur d'appel, et le test du microphone enregistre puis relit un court extrait. Écoutez s'il y a des craquements, un volume faible, du souffle ou un silence complet. Le microphone inférieur peut tomber en panne alors que les appels semblent encore normaux, car le téléphone peut changer de microphone selon l'application.

Les tests de capteurs affichent généralement des valeurs en direct ou vous demandent un petit geste. Couvrez le capteur de proximité près de l'écouteur. Faites pivoter le téléphone pour le gyroscope. Déplacez-le pour l'accéléromètre et la boussole. Orientez le capteur de luminosité vers une lampe, puis éloignez-le. Si les valeurs ne changent jamais, il y a un problème.

Les tests des appareils photo ouvrent les modules avant et arrière. Ils confirment que l'appareil photo démarre, fait la mise au point et capture une image. Ils ne prouvent pas que la qualité est bonne. Une lentille rayée, une stabilisation défaillante, de la poussière sous la vitre ou une mauvaise application photo tierce peuvent encore causer des problèmes hors du test.

Les contrôles de connectivité recherchent des réseaux Wi-Fi ou des appareils Bluetooth. Cela suffit pour confirmer que la radio détecte ce qui l'entoure. Ils ne diagnostiquent ni votre routeur, ni votre opérateur, ni votre VPN, ni un appartement saturé de réseaux bruyants sur la bande 2,4 GHz.

## Batterie, charge et informations de version

CIT peut afficher des informations de base sur la batterie et la charge, comme le niveau, la tension, la température et la détection d'un chargeur. C'est utile lorsqu'un téléphone refuse de se recharger ou n'accepte qu'un seul câble.

Ne confondez pas cela avec un véritable historique de l'état de la batterie. CIT ne fournit ni graphique de dégradation sur la durée, ni chronologie des cycles de charge, ni comparaison entre chargeurs. Ce n'est qu'un instantané.

De nombreuses versions Xiaomi comprennent aussi une zone d'informations matérielles. Les pages d'assistance de Xiaomi indiquent que le code `*#*#6484#*#*` peut ouvrir la détection du matériel et donner accès à des éléments comme l'IMEI, le numéro de build, la version de la bande de base, la version du kernel, l'identifiant du CPU et la version matérielle. C'est pratique pour comparer la version logicielle affichée dans les Paramètres avec les informations de bas niveau de l'appareil.

## Android 17, HyperOS et compatibilité

Android 17 est arrivé d'abord sur les appareils Pixel compatibles. Google classe aussi Xiaomi parmi les partenaires de la bêta Android 17, mais cela ne signifie pas que tous les téléphones Xiaomi, Redmi ou POCO utilisent déjà la version stable d'Android 17.

Sur les téléphones Xiaomi, la couche qui compte ici est le firmware MIUI ou HyperOS. CIT est une fonction de détection du matériel propre à Xiaomi, pas une fonction générique d'Android 17. Une mise à jour d'HyperOS peut déplacer le menu, bloquer un code, renommer un test ou corriger un bug de diagnostic sans qu'Android lui-même soit la raison principale.

En clair, ne vous inquiétez pas si un guide écrit pour MIUI 14 ne correspond pas exactement à votre téléphone sous HyperOS. Essayez les deux méthodes d'accès.

## Quand CIT est utile

CIT convient surtout aux contrôles rapides avant l'achat d'un téléphone d'occasion, après une chute, après un contact avec de l'eau ou après le remplacement d'un écran ou d'une batterie. Lancez le test automatique complet si vous avez le temps. Utilisez les tests individuels si vous connaissez déjà la zone problématique.

Faites une capture d'écran du résultat si vous avez besoin d'une preuve. Ne comptez pas sur CIT pour conserver un rapport permanent que vous pourriez exporter plus tard.

L'outil est moins utile pour un téléphone lent, des plantages aléatoires d'applications, un stockage presque plein, une décharge observée sur plusieurs jours ou un bridage thermique pendant le jeu. Ces problèmes demandent un historique, pas un test matériel d'une minute.

## Questions fréquentes

### CIT peut-il endommager le téléphone ?

Non. Les tests habituels lisent les capteurs, diffusent du son, activent le moteur de vibration, ouvrent les appareils photo et vérifient la réponse des composants. Ils n'effacent pas les données et ne flashent pas le firmware. Quittez avec la touche Retour ou redémarrez le téléphone si le menu reste bloqué.

### Pourquoi certains libellés sont-ils en chinois ?

Certains modèles Xiaomi et Redmi affichent encore des libellés CIT non traduits, surtout avec un firmware destiné à la Chine ou une ancienne version de MIUI. Les tests fonctionnent généralement de la même manière. La langue est gênante, pas dangereuse.

### CIT fonctionne-t-il sur les téléphones POCO et les tablettes Xiaomi ?

En général, oui, si l'appareil utilise un firmware Xiaomi officiel. Les tests disponibles dépendent du matériel. Une tablette uniquement Wi-Fi n'affichera pas les mêmes contrôles cellulaires qu'un téléphone Redmi, et un POCO sans émetteur infrarouge ne proposera pas de test infrarouge.

---
