---
title: "Qu'est-ce qu'un VPN et ralentit-il votre connexion ?"
description: "Meta description : Une explication simple du fonctionnement d'un VPN sur Android, de son effet sur le débit et l'autonomie, et des situations dans lesquelles son utilisation est utile."
listSummary: "reseau, connectivite et android"
hub: "network"
sourceNumber: 99
order: 10
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Un VPN modifie le chemin emprunté par le trafic Internet de votre téléphone. Au lieu de laisser les applications se connecter directement par le réseau Wi-Fi ou l'opérateur mobile, le téléphone envoie d'abord le trafic dans un tunnel chiffré jusqu'à un serveur VPN. Les sites et les applications voient l'adresse IP de ce serveur, pas l'adresse IP publique habituelle de votre connexion.

Cela paraît plus mystérieux que ça ne l'est. Un VPN est utile, mais ce n'est pas un champ de force pour la vie privée.

## Ce qu'un VPN masque réellement

Lorsqu'un VPN est actif, le propriétaire du réseau Wi-Fi, l'opérateur du hotspot ou votre opérateur mobile peut généralement voir que le téléphone communique avec un serveur VPN. Il voit aussi la quantité de données échangées. En revanche, il ne devrait pas voir les sites et les destinations des applications à l'intérieur du tunnel, à condition que le VPN fonctionne correctement et prenne aussi en charge les requêtes DNS.

Le fournisseur du VPN se retrouve toutefois au milieu du trajet. Il peut voir certaines métadonnées de connexion et, selon l'architecture de son service, se trouver en mesure d'en observer davantage. Le choix du fournisseur compte donc beaucoup. Pour la confidentialité, un VPN gratuit douteux peut être pire que l'absence de VPN.

Sur Android, l'application VPN fonctionne comme un service persistant en arrière-plan. Une petite icône VPN apparaît normalement dans la barre d'état. Sauf si l'application utilise le split tunneling, le trafic des navigateurs, des applications et des services système passe par le tunnel VPN.

## Pourquoi un VPN peut ralentir le téléphone

Tous les VPN ajoutent du travail. Le téléphone chiffre les paquets, les envoie au serveur VPN, attend que celui-ci les transmette, puis reçoit la réponse par le même chemin en sens inverse.

Deux éléments changent :

- La latence augmente. Un serveur VPN proche n'ajoute parfois qu'un petit délai. Un serveur situé à l'autre bout du monde peut rendre la navigation, les jeux et les appels vidéo nettement moins réactifs.
- Le débit peut baisser. Le chiffrement demande du traitement, et le serveur VPN devient un goulot d'étranglement s'il est surchargé ou trop éloigné.

Avec un bon VPN, un serveur proche et un protocole récent, la différence peut être presque invisible pour la navigation ou la messagerie. Avec un serveur lointain, un serveur gratuit encombré ou un ancien protocole, le ralentissement devient évident.

La comparaison utile est la suivante : une connexion WireGuard vers un serveur situé dans votre pays peut sembler presque normale, tandis qu'une connexion OpenVPN TCP vers un serveur distant de 8 000 km peut alourdir même les pages les plus simples.

## Le protocole compte

Les applications VPN permettent souvent de choisir un protocole. Certaines masquent ce choix derrière des noms comme `Smart`, `Automatique` ou un mode propre à la marque.

WireGuard est le premier protocole moderne que j'essaierais lorsque l'application le propose. Sa conception est plus compacte que celle des protocoles plus anciens et il offre généralement de bonnes performances sur téléphone.

OpenVPN est plus ancien et très largement compatible. Il reste utile, notamment sur les réseaux qui bloquent les protocoles plus récents, mais il paraît souvent plus lent. OpenVPN UDP est généralement plus rapide qu'OpenVPN TCP. TCP peut aider sur un réseau instable ou très filtré, au prix d'une surcharge supplémentaire.

IKEv2/IPsec reste courant sur mobile, car il gère bien le passage du Wi-Fi aux données mobiles. Il peut être un bon compromis, en particulier pour un VPN professionnel.

Si le VPN est lent, ne changez pas immédiatement de fournisseur. Essayez d'abord un serveur proche et un autre protocole.

## La consommation de batterie existe, mais elle varie

Un VPN peut consommer davantage de batterie, car le téléphone maintient le tunnel ouvert et chiffre le trafic. Il n'existe pas de pourcentage universel honnête. La luminosité de l'écran, la qualité du signal, la synchronisation en arrière-plan, la vidéo et le protocole VPN changent tous le résultat.

Pour un peu de navigation et de messagerie, la consommation supplémentaire reste souvent trop faible pour apparaître clairement dans les statistiques de batterie. Regardez des vidéos pendant plusieurs heures à travers un VPN sur une connexion mobile faible, et elle peut devenir visible.

L'optimisation de la batterie peut aussi casser la connexion. Si le VPN se déconnecte sans cesse, ouvrez les paramètres de batterie de l'application et autorisez son activité sans restriction en arrière-plan. L'intitulé varie selon la marque, mais le réglage se trouve généralement dans `Paramètres > Applications > [application VPN] > Batterie`.

## VPN permanent et kill switch

Android 7.0 et les versions ultérieures prennent en charge le VPN permanent pour les applications compatibles. Android peut relancer le VPN au démarrage et tenter de le maintenir actif tant que le téléphone est allumé. Il existe aussi une option de blocage des connexions lorsque le VPN ne fonctionne pas, souvent appelée kill switch.

Sur Pixel et de nombreux téléphones proches de l'interface Android de Google, ouvrez `Paramètres > Réseau et Internet > VPN`, puis appuyez sur la roue dentée à côté du profil. Le réglage officiel en français s'appelle `VPN permanent`. L'option qui bloque le trafic sans VPN n'est pas proposée par toutes les applications et son intitulé varie selon la version.

Le kill switch est utile, mais il faut accepter son compromis. Si l'application plante, si le serveur ne répond plus ou si l'économie de batterie arrête le VPN, Android peut bloquer tout accès à Internet jusqu'au rétablissement du tunnel. Le Wi-Fi paraît alors en panne alors qu'il fonctionne parfaitement.

## Quand un VPN peut améliorer le débit

Cela semble contradictoire, mais un VPN peut accélérer la connexion dans quelques cas précis.

Si un réseau limite certains types de trafic, le tunnel peut masquer leur nature. Le réseau voit toujours un flux chiffré vers un serveur VPN, mais il peut ne plus identifier aussi facilement une vidéo, une session de jeu ou un appel VoIP.

Cela ne signifie pas qu'un VPN crée de la bande passante. Il ne transforme pas une mauvaise 4G en bonne 5G. Il ne répare pas un routeur défaillant. Il change seulement le trajet et rend le type de trafic moins visible pour le réseau local.

## Méfiez-vous particulièrement des VPN gratuits

Les VPN gratuits doivent financer leurs serveurs d'une manière ou d'une autre. Certains s'appuient sur une offre payante. D'autres utilisent la publicité, la collecte de données, des quotas, une infrastructure médiocre ou des pratiques encore moins recommandables.

L'offre gratuite de Proton VPN fait partie des exceptions les mieux établies. Proton indique proposer des données illimitées, aucune publicité, une politique de non-journalisation et des applications auditées de manière indépendante. Le service gratuit est financé par les abonnements payants. Il reste plus limité que les formules payantes, avec une seule connexion et un choix de serveurs plus restreint.

Le mauvais scénario, c'est une application gratuite dont le propriétaire est difficile à identifier, qui demande des autorisations agressives, ne publie aucun audit, n'explique pas son modèle économique et présente une politique de confidentialité vide de sens. N'installez pas cela sur le téléphone que vous utilisez pour la banque, le travail ou les messages privés.

## Quand utiliser un VPN sur Android

Un VPN est surtout utile sur les réseaux que vous ne contrôlez pas : Wi-Fi public, hôtel, aéroport, café, logement partagé, établissement scolaire ou réseau professionnel. Il sert aussi lorsque vous souhaitez empêcher votre fournisseur d'accès ou votre opérateur mobile de voir les destinations réseau auxquelles vous vous connectez.

Sur le Wi-Fi de votre domicile, l'intérêt dépend de votre priorité. Si vous voulez masquer vos destinations de navigation à votre fournisseur d'accès, laissez-le actif. Si vous privilégiez le débit maximal et la latence minimale pour jouer ou passer un appel vidéo, désactivez-le ou utilisez le split tunneling pour ces applications.

Le split tunneling mérite d'être configuré. Faites passer la navigation sensible, la messagerie et les réseaux Wi-Fi inconnus par le VPN. Autorisez les applications qui fonctionnent mal derrière un VPN, comme certaines applications bancaires, à utiliser la connexion normale.

## Ce contre quoi un VPN ne vous protège pas

Un VPN n'arrête pas le phishing. Il ne rend pas un faux site bancaire digne de confiance. Il ne protège pas un compte dont le mot de passe est réutilisé. Il ne supprime pas un logiciel malveillant du téléphone. Il ne transforme pas un fournisseur VPN douteux en service fiable.

Il protège une couche précise : le routage du réseau et la confidentialité du trafic entre le téléphone et le serveur VPN.

C'est utile. Ne lui demandez simplement pas de remplir tous les rôles de sécurité.

## Réponses rapides

Un VPN masque-t-il mon activité à l'opérateur mobile ?

Il masque les sites et les destinations des applications à l'intérieur du tunnel, mais l'opérateur peut toujours voir que vous utilisez un VPN et quelle quantité de données vous transférez. Les appels cellulaires classiques et les SMS ne passent pas dans le VPN.

Un VPN peut-il empêcher une application de fonctionner ?

Oui. Les applications bancaires, les services de streaming, les applications professionnelles et certains jeux peuvent bloquer le trafic VPN ou le considérer comme suspect. Utilisez le split tunneling lorsqu'une seule application pose problème.

Faut-il le laisser activé en permanence ?

Sur un réseau public, c'est souvent judicieux. À la maison, le choix dépend de l'équilibre recherché entre confidentialité, débit et latence. Testez vos applications habituelles avant d'activer à la fois le `VPN permanent` et le blocage de toutes les connexions hors VPN.

Fonctionne-t-il avec les données mobiles ?

Oui. Un VPN fonctionne en Wi-Fi comme avec les données mobiles. Sur le réseau mobile, un signal faible et la saturation de l'opérateur restent déterminants. Le VPN peut sembler plus lent simplement parce que la connexion de départ est déjà en difficulté.
