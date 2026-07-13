---
title: "Stockage interne ou carte SD : que faut-il mettre où ?"
description: "Une carte microSD peut augmenter l'espace disponible sur un smartphone Android, mais elle n'équivaut pas au stockage interne. C'est là que la confusion commence. Avoir plus d'espace ne signifie pas disposer d'un espace aussi rapide."
listSummary: "stockage, android et nettoyage"
hub: "storage"
sourceNumber: 86
order: 8
tags: ["stockage","android","nettoyage","optimisation","guide"]
locale: "fr"
draft: false
---
La différence compte encore davantage en 2026, car les smartphones Android utilisent des solutions de stockage très variées. Beaucoup de modèles haut de gamme et de milieu de gamme n'ont plus du tout de logement microSD. Les Pixel n'en ont pas, Samsung l'a supprimé de la gamme Galaxy S il y a plusieurs années et certains Galaxy A actuels s'en passent aussi. En parallèle, de nombreux anciens Galaxy A et M, certains Motorola Moto G et des Sony Xperia acceptent toujours les cartes microSD.

Vérifiez donc votre modèle exact. Le nom de la gamme ne suffit pas.

## L'écart de vitesse est bien réel

Le stockage interne des smartphones Android modernes repose en général sur l'UFS. Les modèles haut de gamme actuels utilisent souvent de l'UFS 4.x. Le stockage UFS 4.0 de Samsung est annoncé avec des débits pouvant atteindre 4 200 MB/s en lecture et 2 800 MB/s en écriture. Même d'anciens modèles de milieu de gamme équipés d'UFS 2.1 peuvent approcher 850 MB/s en lecture séquentielle.

Une carte microSD ordinaire est beaucoup plus lente. Même une bonne carte UHS-I reste généralement plus proche des performances d'un support externe que de celles du stockage intégré au téléphone. Les mentions imprimées sur la carte peuvent aussi prêter à confusion. V30 indique un débit d'écriture vidéo soutenu d'environ 30 MB/s, ce qui est utile pour enregistrer des vidéos, mais cela ne transforme pas un support amovible en UFS lorsqu'une application effectue des milliers de petites lectures et écritures.

Cette différence d'accès aléatoire explique pourquoi les applications fonctionnent moins bien depuis une carte SD.

## Gardez les applications dans le stockage interne

Dans la mesure du possible, les applications doivent rester dans le stockage interne. Leur lancement, leurs bases de données, la synchronisation en arrière-plan, les notifications, les miniatures et les caches sollicitent constamment le stockage. Placez tout cela sur une carte lente et vous ressentirez des ralentissements.

Android peut déplacer certaines applications vers un stockage adopté ou externe, mais seulement si l'application et l'appareil l'autorisent. Une application ne peut être placée sur un stockage adopté que si son développeur a activé cette possibilité avec l'attribut android:installLocation. Beaucoup ne le font pas.

Les jeux sont le cas où la tentation est la plus forte. Un jeu de 15 GB semble être le candidat idéal pour la carte SD. En pratique, les temps de chargement s'allongent, les mises à jour ralentissent et certains jeux refusent tout simplement d'être déplacés. Si vous devez libérer de l'espace, désinstaller un jeu auquel vous ne jouez plus est généralement plus efficace que d'essayer de l'exécuter depuis une carte.

## Placez les fichiers multimédias sur la carte SD

Les photos, vidéos, morceaux de musique, podcasts, films, cartes hors connexion, PDF et fichiers d'archive sont de meilleurs candidats pour une carte SD. Ils sont lus par blocs plus volumineux et n'exigent pas les mêmes performances d'accès aléatoire que les applications.

Si votre application Appareil photo le prend en charge, choisissez la carte SD comme emplacement de stockage. Les applications Appareil photo de Samsung, Motorola et Sony ont proposé cette option sur de nombreux modèles équipés d'un logement pour carte, mais le chemin exact varie selon le modèle et la version d'Android. Cherchez un réglage lié à l'emplacement de stockage dans les paramètres de l'appareil photo.

Certaines applications de streaming peuvent aussi enregistrer leurs téléchargements hors connexion sur la carte SD. Netflix, Spotify, YouTube et les applications de cartographie ont modifié leurs réglages au fil du temps. Vérifiez donc directement dans l'application au lieu de supposer qu'Android gère ce choix de manière globale.

Il y a une contrepartie. Si la carte tombe en panne, les photos et téléchargements qu'elle contient deviennent eux aussi indisponibles. Conservez une sauvegarde dans le cloud, sur un ordinateur ou sur un autre support pour tout fichier important.

## Le stockage adoptable est plus séduisant en théorie qu'en pratique

Android 6.0 a introduit le stockage adoptable. Android peut alors formater et chiffrer un support amovible afin qu'il se comporte davantage comme le stockage interne. La carte devient liée à ce téléphone et le système peut y enregistrer des applications ainsi que des données privées.

Sur le papier, cela règle le manque de stockage interne. Dans la réalité, c'est un compromis. Une carte lente peut rendre le téléphone poussif. Si elle tombe en panne, Android risque aussi de perdre des données qu'il s'attendait à trouver. Retirer une carte adoptée sans l'éjecter correctement peut endommager les applications ou les données qui y sont stockées.

Sur certains appareils, Android avertit pendant la configuration lorsqu'une carte est lente. Cet avertissement ne rend évidemment pas le support plus rapide. Il vous prévient simplement avant que vous vous engagiez.

Le stockage adoptable n'est pas non plus disponible partout. Certains fabricants le masquent ou le désactivent, notamment lorsque l'expérience risquerait d'être mauvaise. Si l'option n'apparaît pas, cela peut être un choix du fabricant et non une erreur de votre part.

## Le stockage portable reste le choix le plus sûr

Avec le stockage portable, la carte reste un volume séparé. Vous pouvez la retirer, la lire sur un ordinateur, y copier des fichiers ou en récupérer, et l'utiliser surtout pour les médias.

Pour la plupart des gens, c'est la meilleure configuration. Gardez les applications et leurs données dans le téléphone. Envoyez les photos et vidéos de l'appareil photo, la musique hors connexion, les films, les documents et les sauvegardes vers la carte. C'est moins sophistiqué, mais une panne provoque moins de dégâts en chaîne.

La simplicité est un avantage ici.

## Que faire lorsque le stockage interne est presque plein ?

Quand il reste très peu de stockage interne, le téléphone peut ralentir. La mémoire flash a besoin de blocs libres pour écrire et effectuer ses opérations de nettoyage. Android doit aussi conserver de la place pour les mises à jour des applications et du système, les caches et les fichiers temporaires. Même un téléphone de 128 GB peut mal fonctionner si les derniers gigaoctets sont constamment saturés.

Commencez par **Paramètres > Stockage**. Si les photos et vidéos occupent l'essentiel de l'espace, déplacez-les vers la carte ou le cloud. Si les applications dominent, désinstallez celles que vous n'utilisez plus et videz le cache des plus gourmandes. Si le dossier Téléchargements est plein, supprimez les anciens programmes d'installation, fichiers ZIP, PDF et vidéos exportées.

Déplacer l'icône d'une application vers un stockage amovible est rarement la solution propre que l'on espère.

## Les classes de vitesse des cartes SD, simplement

Les classes 10 et U1 conviennent aux photos ordinaires, à la musique et aux documents.

V30 est un choix plus sûr pour l'enregistrement vidéo 4K, car cette classe repose sur une vitesse d'écriture soutenue.

A1 et A2 décrivent les performances applicatives. Ces mentions comptent surtout si vous tenez à utiliser le stockage adoptable ou à exécuter des charges proches de celles d'une application depuis la carte. Elles ne transforment pas une carte microSD en stockage UFS.

Achetez des cartes de marques connues et méfiez-vous des modèles de grande capacité anormalement bon marché. Les fausses cartes restent courantes et leur mode de défaillance est particulièrement désagréable : la capacité semble énorme, puis les anciens fichiers commencent à se corrompre.

## Si votre téléphone n'a pas de logement pour carte SD

Utilisez le cloud pour les photos et les vidéos, transférez les fichiers volumineux vers un ordinateur ou servez-vous ponctuellement d'une clé USB-C compatible USB OTG. Au-delà de cela, la réponse est assez banale : désinstallez les applications inutiles, videz les caches devenus excessifs, supprimez les anciens téléchargements et évitez d'acheter la prochaine fois un téléphone doté d'un stockage trop limité.

Cette dernière remarque est directe parce qu'elle est vraie. Un smartphone Android de 64 GB peut encore convenir en 2026, mais il laisse très peu de marge pour les vidéos, les jeux, les cartes hors connexion et plusieurs années de médias issus des messageries.
