---
title: "Les bloatwares ralentissent-ils votre téléphone, et peut-on les supprimer ?"
description: "Les applications Android préinstallées peuvent occuper du stockage, envoyer des notifications et exécuter des services en arrière-plan. Voici leur effet réel et ce que vous pouvez supprimer sans risque."
listSummary: "performances, vitesse et android"
hub: "performance"
sourceNumber: 78
order: 15
tags: ["performances","vitesse","android","optimisation","depannage"]
locale: "fr"
draft: false
---
---

Les bloatwares sont accusés de ralentir presque tous les téléphones Android, mais la réalité est moins spectaculaire. Une application préinstallée ne ralentit pas l'appareil simplement parce que son icône existe. Le problème commence lorsqu'elle fonctionne en arrière-plan, réveille le téléphone, envoie des notifications, se met à jour ou maintient des services actifs alors que vous ne lui avez rien demandé.

C'est ce qui agace. Vous pouvez acheter un téléphone, refuser une application pendant la configuration, ne jamais l'ouvrir et tout de même retrouver plus tard des services associés dans la liste des applications.

## Ce que font réellement les bloatwares

Une application préinstallée inactive coûte surtout de l'espace de stockage. Elle n'utilise ni CPU, ni RAM, ni données mobiles, ni batterie tant qu'Android ou une autre application ne lance pas l'un de ses composants.

Certains paquets préinstallés font davantage que rester immobiles. Des services liés à Facebook, comme `com.facebook.appmanager`, ont été livrés sur certains téléphones comme paquets compagnons. Les appareils Samsung peuvent inclure Samsung Free, Samsung Global Goals, Samsung TV Plus et d'autres applications Samsung en plus de celles de Google. Les téléphones vendus par un opérateur peuvent ajouter des outils de compte, des assistants de configuration, des applications de messagerie vocale, des essais de sécurité et des installateurs d'applications promotionnelles.

Un ou deux services en arrière-plan ne ruinent généralement pas les performances. Quinze services sur un téléphone d'entrée de gamme, c'est autre chose. Un appareil doté de 3 ou 4 Go de RAM, avec un lanceur lourd, des réseaux sociaux, des utilitaires d'opérateur et des services du fabricant, peut sembler plus lent qu'un ancien modèle haut de gamme équipé d'un logiciel plus propre et de davantage de marge mémoire.

Le stockage est plus simple à contrôler que l'activité en arrière-plan. Ouvrez **Paramètres > Stockage > Applications** ou **Paramètres > Applications**, triez par taille si votre téléphone le permet, puis cherchez ce que vous n'utilisez pas. Le chemin exact change selon la marque. Sur Pixel, l'organisation reste assez simple. Samsung regroupe davantage de fonctions dans **Batterie et maintenance appareil**, tandis que Xiaomi répartit souvent ses outils entre les Paramètres et l'application Sécurité.

## Désactivez d'abord, désinstallez lorsque Android l'autorise

Android vous laisse désinstaller certaines applications préinstallées comme des applications ordinaires. Maintenez leur icône, ouvrez les informations de l'application et cherchez **Désinstaller**. Si le bouton manque, est grisé ou a été remplacé par **Désactiver**, Android considère l'application comme une application système.

La désactivation est le choix le plus prudent pour commencer. Ouvrez **Paramètres > Applications**, sélectionnez l'application, puis appuyez sur **Désactiver**. Une application désactivée cesse de fonctionner, disparaît du lanceur et ne reçoit plus les mises à jour ordinaires. Elle occupe encore une partie du stockage, car son paquet d'origine reste dans l'image système, mais Android supprime ses mises à jour et ses données utilisateur lorsqu'il le peut.

Ce détail compte. Désactiver une application système ne libérera pas miraculeusement plusieurs gigaoctets. L'opération peut tout de même aider si l'application avait téléchargé des mises à jour, mis des médias en cache, enregistré votre compte ou créé des données locales.

Samsung et d'autres OEM affichent parfois **Désinstaller** pour une application fournie avec le téléphone. Dans de nombreux cas, cette action retire la couche de mises à jour installée pour l'utilisateur et laisse la copie d'usine inactive. De votre point de vue, le résultat convient : vous vouliez la retirer de votre usage quotidien, pas l'arracher à la partition système en lecture seule.

## Quand une suppression avec ADB a du sens

Pour les paquets récalcitrants, ADB peut retirer une application pour l'utilisateur actuel sans accès root :

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Cette commande ne supprime pas le paquet de la partition système. Elle le masque et le désactive pour l'utilisateur 0, c'est-à-dire l'utilisateur principal du téléphone. Une réinitialisation d'usine le fera revenir.

N'utilisez cette méthode que si vous connaissez le paquet exact et comprenez ce que vous retirez. Le nom du paquet peut apparaître dans l'URL du Play Store. Vous pouvez aussi afficher la liste des paquets avec :

```text
adb shell pm list packages
```

Des outils comme Canta et Universal Android Debloater Next Generation simplifient la tâche. Canta fonctionne sur le téléphone avec Shizuku. UAD-ng s'exécute sur un ordinateur et s'appuie sur des listes de paquets annotées avec des niveaux de risque. Ces indications sont utiles, mais elles ne sont pas infaillibles. Si un élément est marqué unsafe, expert, framework, provider, dialer, launcher ou lié aux Google Play services, laissez-le en place à moins de disposer d'un vrai plan de récupération.

Vraiment. Supprimer le mauvais paquet peut casser les notifications, les appels, les installations depuis le Play Store, les widgets, la synchronisation des comptes ou même le démarrage.

## Quels téléphones sont généralement les plus sobres

Les Pixel achetés sans offre opérateur restent parmi les options Android grand public les plus propres. Ils incluent les applications de Google, mais évitent généralement les lots ajoutés par les opérateurs lorsqu'ils sont achetés directement. Motorola s'en rapproche souvent, avec quelques fonctions Moto plutôt qu'un second écosystème complet d'applications.

Samsung s'est amélioré, mais propose encore ses propres versions de plusieurs catégories déjà couvertes par Google : navigateur, boutique d'applications, galerie, notes, services de compte, télévision et flux d'actualité. Certaines personnes les apprécient. Pour les autres, cela ressemble à de l'encombrement.

Xiaomi, Redmi, Poco, Oppo, Realme et Vivo varient fortement selon le pays et la gamme de prix. Un modèle européen et un modèle destiné au marché indien portant le même nom matériel peuvent être livrés avec des applications tierces, des recommandations, des publicités ou des invitations à installer d'autres applications différentes. Les modèles d'opérateur forment une catégorie à part, car l'opérateur peut ajouter ses propres applications quel que soit le fabricant.

Nothing et OnePlus ont également changé au fil des années. Certaines versions sont sobres, d'autres ont ajouté davantage de services partenaires que leurs adeptes ne l'espéraient. La réputation d'une marque donne un indice, pas une preuve. Avant d'acheter, consultez des tests récents du modèle exact vendu dans votre région.

## Ce qu'il ne faut pas désactiver

Ne désactivez pas Google Play services. De nombreuses applications en dépendent pour les notifications push, la localisation, la connexion, les cartes, les contrôles de sécurité et la facturation. Vous transformeriez un léger agacement en téléphone défaillant.

Soyez prudent avec Android System WebView, le lanceur par défaut, l'application Téléphone, l'application de messagerie, le clavier, le gestionnaire d'autorisations, l'installateur de paquets, l'application Paramètres, le fournisseur de contacts, le fournisseur multimédia et tout paquet contenant `framework` ou `provider`. Leurs noms sont austères parce qu'il s'agit de l'infrastructure du système.

Les applications Google individuelles comme Google TV, YouTube Music, Google News ou Google One peuvent généralement être désactivées si vous ne les utilisez pas. Chrome l'est souvent aussi lorsqu'un autre navigateur est installé, mais le comportement varie assez selon les OEM pour qu'il soit prudent de vérifier ensuite WebView et le navigateur par défaut.

## Un bloatware peut-il être un malware ?

Une application légitime de Google, Samsung, Motorola, Xiaomi, d'un opérateur ou d'un autre OEM connu n'est pas automatiquement un malware. Elle peut malgré tout être agaçante, lourde ou trop insistante avec ses notifications.

Le risque augmente sur les téléphones très bon marché de marques obscures, les ROM non officielles ou les appareils achetés sur des places de marché où le firmware a pu être modifié. Si une application préinstallée affiche des publicités, installe d'autres applications, demande des autorisations étranges ou revient sans cesse après sa suppression, recherchez le nom exact de son paquet avant de lui faire confiance.

## Après une mise à jour du système

Une grande mise à jour d'Android ou du logiciel de l'OEM peut réactiver des applications que vous aviez désactivées. Les mises à jour de sécurité mensuelles les laissent généralement tranquilles, mais le phénomène se produit assez souvent pour justifier une vérification après une mise à niveau importante.

Android 17 ne change pas le conseil de base. Google l'a publié le 16 juin 2026 et l'a d'abord déployé sur la plupart des Pixel compatibles. Les autres marques l'intègrent ensuite à leur propre interface selon leur calendrier. Sur Samsung, Xiaomi, Oppo et les appareils similaires, la question des bloatwares dépend toujours davantage de l'image logicielle de l'OEM et de la version opérateur que du numéro d'Android.
