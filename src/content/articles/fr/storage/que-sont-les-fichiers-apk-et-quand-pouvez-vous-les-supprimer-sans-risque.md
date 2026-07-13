---
title: "Que sont les fichiers APK et quand pouvez-vous les supprimer sans risque ?"
description: "Vous avez trouvé dans Downloads un fichier dont le nom se termine par .apk sans vous souvenir de son origine ? La plupart du temps, il s'agit simplement d'un installateur d'application Android resté sur le téléphone après l'installation ou le partage de l'application."
listSummary: "Vous avez trouvé dans Downloads un fichier dont le nom se termine par .apk sans vous souvenir de son origine ?"
hub: "storage"
sourceNumber: 84
order: 6
tags: ["stockage","android","nettoyage","optimisation","guide"]
locale: "fr"
draft: false
---
APK signifie Android Package Kit. C'est l'un des formats de paquet utilisés par Android pour installer des applications. Pour le nettoyage, l'essentiel est simple : le fichier APK visible dans Downloads n'est pas l'application qui s'exécute sur votre téléphone. C'est son installateur.

Une fois l'application installée, supprimer l'APK restant ne désinstalle pas l'application et n'efface pas ses réglages.

## D'où viennent les fichiers APK ?

La plupart des APK visibles proviennent d'une installation manuelle. Vous avez téléchargé une application depuis le site d'un développeur, APKMirror, F-Droid, un portail interne d'entreprise ou une autre source extérieure à Google Play. Après l'installation, le fichier reste souvent dans Downloads.

Les applications de messagerie constituent une autre source fréquente. Quelqu'un envoie un APK par WhatsApp, Telegram, e-mail ou messagerie professionnelle. Vous l'ouvrez une fois, ou vous ne l'installez même pas, puis il reste là et occupe de la place.

Les développeurs et les utilisateurs en entreprise rencontrent davantage de fichiers APK, car les versions de test, les applications privées et les mises à jour internes sont encore distribuées sous forme de fichiers autonomes. C'est normal dans le développement. Il est plus inhabituel qu'un APK au nom vague apparaisse sans explication sur le téléphone d'un utilisateur ordinaire.

## Pouvez-vous supprimer les fichiers APK ?

Oui, si l'APK se trouve dans un espace utilisateur normal, comme Downloads, Documents, le dossier d'une messagerie ou la catégorie des fichiers d'installation d'un gestionnaire de fichiers.

Supprimer ce fichier retire uniquement le paquet d'installation. L'application elle-même se trouve ailleurs, et Android conserve ses données séparément. Si vous effacez com.example.app.apk dans Downloads, l'application installée n'en sera pas affectée.

Il existe une grande exception, mais la plupart des utilisateurs ne la rencontreront jamais : les APK système situés dans des chemins comme /system/app/ ou /system/priv-app/ font partie d'Android ou du logiciel du fabricant. Sans accès root, vous ne pouvez normalement ni les voir ni les modifier. N'y touchez pas si vous ne savez pas exactement ce que vous faites.

## Comment trouver les fichiers APK

Ouvrez votre gestionnaire de fichiers. Selon le téléphone, il peut s'agir de Files by Google, Mes fichiers de Samsung, Gestionnaire de fichiers de Xiaomi ou Files de Motorola.

Commencez par Downloads, puis recherchez .apk. Files by Google propose également une catégorie consacrée aux fichiers d'installation sur de nombreux appareils. Lorsqu'elle apparaît, c'est le chemin le plus rapide.

Vérifiez le nom du fichier avant de le supprimer. Un fichier appelé Signal-Android-7.XX.apk ou app-release.apk peut être facile à reconnaître si vous venez de l'installer. Un nom composé d'une chaîne aléatoire ou d'un nom de paquet, comme com.company.name.apk, demande davantage de prudence.

Si l'application est déjà installée et que vous n'avez pas besoin d'une copie de sauvegarde de son installateur, supprimez le fichier.

## APK et AAB en 2026

Google Play a déplacé l'essentiel de la distribution normale des applications vers un format différent des APK importés par les développeurs. Depuis août 2021, les nouvelles applications publiées sur Google Play doivent utiliser Android App Bundle, ou AAB, comme format de publication standard. Google Play génère ensuite des APK optimisés pour chaque configuration d'appareil, afin que le téléphone ne télécharge que le code et les ressources dont il a besoin.

Cela ne signifie pas que les APK ont disparu. Android continue d'installer des APK en arrière-plan, et les développeurs utilisent toujours des fichiers APK pour les tests, la distribution en entreprise et certaines applications proposées hors de Google Play. Mais si vous trouvez des APK isolés dans Downloads, ils proviennent presque certainement d'un téléchargement manuel, d'une pièce jointe, d'un outil de sauvegarde ou d'une ancienne méthode de distribution.

## Faut-il conserver certains fichiers APK ?

Parfois.

Conservez un APK s'il correspond à une application difficile à télécharger de nouveau, par exemple une application limitée à une région, une version professionnelle privée, une ancienne version que vous utilisez volontairement ou une application open source fiable provenant d'une source connue. Même dans ce cas, déplacez-le dans un dossier clairement nommé afin de vous rappeler plus tard pourquoi vous l'avez gardé.

Supprimez le reste. Les fichiers APK peuvent être petits, mais les jeux et les grosses applications peuvent atteindre plusieurs centaines de mégaoctets ou davantage. Quelques anciens installateurs ne changent pas grand-chose sur un téléphone de 512 Go. Sur un modèle de 64 Go, ils finissent vite par compter.

## La sécurité compte plus que la taille du fichier

Un fichier APK n'est pas dangereux simplement parce qu'il s'agit d'un APK. Le risque dépend de sa source.

Un APK fourni par un développeur de confiance, un dépôt open source reconnu ou le système d'applications gérées de votre employeur n'a rien à voir avec un fichier envoyé par un inconnu ou récupéré sur un forum aléatoire. Les APK modifiés, piratés ou présentés comme une version « premium débloquée » sont un vecteur courant de logiciels malveillants. Le principal enjeu n'est pas l'espace que vous pourriez gagner. Ce sont les données de vos comptes.

Google Play Protect est activé par défaut sur les appareils Android certifiés. Il vérifie les applications lors de leur installation, analyse régulièrement l'appareil et peut avertir, désactiver ou supprimer des applications jugées dangereuses. Il peut aussi vous proposer d'envoyer à Google une application inconnue pour analyse. C'est une protection utile, pas une garantie absolue.

Une évolution actuelle de la distribution Android mérite également d'être connue. À partir du 30 septembre 2026, de nouvelles protections de vérification des développeurs entreront en vigueur au Brésil, à Singapour, en Indonésie et en Thaïlande, d'abord pour les installations provenant de plusieurs boutiques partenaires. Android prévoit d'étendre ces protections dans le monde en 2027. Google indique que les utilisateurs avertis conserveront un parcours avancé pour installer des applications non enregistrées, avec des mesures de protection supplémentaires. Pour un utilisateur ordinaire, le conseil pratique ne change pas : ne conservez et n'installez pas d'APK provenant d'une source à laquelle vous ne confieriez pas votre téléphone.

## Questions fréquentes

### Supprimer un APK désinstalle-t-il l'application ?

Non. L'APK est l'installateur. L'application reste installée jusqu'à ce que vous la désinstalliez depuis les Paramètres, le lanceur d'applications ou Google Play.

### Pourquoi certains fichiers APK portent-ils des noms étranges ?

Les navigateurs, messageries et outils de développement n'enregistrent pas toujours le fichier sous le nom public de l'application. Ils peuvent utiliser son nom de paquet interne ou un nom de téléchargement aléatoire. Le nom seul ne prouve pas qu'un fichier est dangereux, mais il justifie davantage de prudence.

### Puis-je envoyer un APK à quelqu'un d'autre ?

Techniquement, oui. Cela fonctionne surtout pour les applications simples distribuées sous la forme d'un APK unique. C'est moins fiable pour les applications installées depuis Google Play, car Play fournit souvent plusieurs APK optimisés générés à partir d'un AAB. Pour une application du Play Store, envoyez plutôt le lien vers sa fiche.
