---
title: "Comment résoudre les problèmes de connexion Wi-Fi sur Android"
description: "Meta description : Des solutions étape par étape aux problèmes de Wi-Fi sur Android, notamment les déconnexions, les lenteurs, les réseaux enregistrés, le DNS, le routeur et les problèmes apparus après une mise à jour vers Android 17."
listSummary: "performances, vitesse et android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["performances","vitesse","android","optimisation","depannage"]
locale: "fr"
draft: false
---
Que faut-il essayer en premier lorsque le Wi-Fi ne fonctionne plus sur Android ? Ne commencez pas par une réinitialisation d'usine et ne passez pas une demi-heure à modifier le routeur avant d'avoir testé les solutions les plus simples. La plupart des problèmes entrent dans l'une de ces trois catégories : le téléphone refuse de se connecter, la connexion se coupe sans arrêt, ou le téléphone reste connecté mais Internet ne répond presque plus.

Suivez les étapes dans cet ordre. Vous gagnerez du temps.

## 1. Désactivez puis réactivez le Wi-Fi, puis le mode Avion

Ouvrez les réglages rapides et désactivez le Wi-Fi. Attendez cinq secondes, puis réactivez-le.

Si cela ne change rien, activez le mode Avion, attendez dix secondes, puis désactivez-le. Cette opération redémarre les radios sans fil sans imposer un redémarrage complet du téléphone. Sur un Pixel et les versions d'Android proches de l'interface Google, le mode Avion se trouve aussi dans `Paramètres > Réseau et Internet`. Sur Samsung, ouvrez `Paramètres > Connexions`.

C'est une petite manipulation, mais elle règle un nombre étonnant de blocages temporaires de la radio.

## 2. Supprimez le réseau, puis reconnectez-vous

Un profil Wi-Fi enregistré peut devenir obsolète après une mise à jour du micrologiciel du routeur, un changement de mot de passe ou de mode de sécurité, ou une nouvelle configuration du réseau maillé.

Sur Pixel et de nombreuses versions d'Android 17 proches de l'interface Google, ouvrez `Paramètres > Réseau et Internet > Internet`. Appuyez sur la roue dentée à côté du réseau, puis sur `Supprimer`. Sur Samsung, ouvrez `Paramètres > Connexions > Wi-Fi`, appuyez sur la roue dentée à côté du réseau, puis choisissez l'option permettant de l'oublier.

Sélectionnez ensuite de nouveau le réseau et saisissez son mot de passe. Si le routeur propose un réseau principal et un réseau invité, vérifiez que vous rejoignez le bon.

## 3. Redémarrez le téléphone et le routeur

Redémarrez le téléphone. Débranchez ensuite le routeur pendant 30 secondes avant de le remettre sous tension.

Faites les deux, pas seulement l'un des deux. Le téléphone peut conserver un état réseau temporaire défectueux, tandis que le routeur peut avoir un bail DHCP périmé ou une table de connexions saturée. Le redémarrage des deux côtés force une nouvelle négociation.

Si plusieurs appareils rencontrent le même problème, le redémarrage du routeur compte davantage que celui du téléphone.

## 4. Déterminez si le problème vient du Wi-Fi ou d'Internet

Android peut rester connecté au Wi-Fi alors que la connexion Internet située derrière le routeur est en panne. L'icône Wi-Fi indique seulement que le téléphone dispose d'une liaison sans fil locale.

Testez un autre appareil sur le même réseau. Si tous les appareils sont lents ou hors ligne, vérifiez le modem, le routeur et le fournisseur d'accès. Si seul le téléphone Android est concerné, poursuivez les vérifications sur le téléphone.

Essayez aussi d'ouvrir la page d'administration du routeur. De nombreux modèles utilisent l'adresse `192.168.1.1` ou `192.168.0.1`. Si cette page s'affiche mais que les sites Web ne s'ouvrent pas, la liaison Wi-Fi fonctionne. Le problème se situe probablement du côté de la connexion Internet, du DNS ou de la configuration du routeur.

## 5. Mettez à jour Android, les composants système Google Play et le routeur

Ouvrez les paramètres système et recherchez la mise à jour d'Android. Sur Pixel, le chemin est généralement `Paramètres > Système > Mises à jour logicielles`. Sur Samsung, utilisez `Paramètres > Mise à jour du logiciel > Téléchargement et installation`.

Sur les versions d'Android proches de celle des Pixel, vérifiez aussi les mises à jour du système Google Play dans la section consacrée à la sécurité et aux mises à jour. L'intitulé exact peut changer selon la version, mais les deux niveaux comptent : le système du téléphone et les composants distribués séparément par Google.

Le micrologiciel du routeur est facile à oublier. Ouvrez son application ou son interface d'administration et recherchez une mise à jour du micrologiciel, du système ou de l'administration. Les fabricants corrigent régulièrement des problèmes de stabilité Wi-Fi, et tous les routeurs ne se mettent pas à jour automatiquement de façon fiable.

## 6. Vérifiez les fonctions de bascule vers les données mobiles

Si le téléphone abandonne le Wi-Fi alors que le routeur fonctionne encore, une fonction de bascule automatique peut être en cause.

Sur Samsung, ouvrez `Paramètres > Connexions > Wi-Fi`, puis cherchez les options de `Wi-Fi intelligent`. Désactivez temporairement la fonction qui bascule vers les données mobiles lorsque la connexion Wi-Fi est jugée instable. Les intitulés varient selon la version de One UI et l'opérateur.

Sur Pixel, `Connectivité adaptative` concerne principalement la gestion de la 5G et de la consommation d'énergie. Ce n'est pas un interrupteur général qui oblige le téléphone à rester sur le Wi-Fi. La désactiver n'est donc pas un test fiable pour ce problème précis.

Laissez la fonction Samsung désactivée pendant une journée. Si la connexion devient stable, le téléphone réagissait probablement trop vite à un réseau qu'il jugeait faible ou de mauvaise qualité.

## 7. Comparez les bandes 2,4 GHz et 5 GHz

La bande 2,4 GHz porte plus loin et traverse mieux les murs. La bande 5 GHz est plus rapide près du routeur, mais elle s'affaiblit plus vite à travers les cloisons. Un téléphone connecté en 5 GHz peut parfaitement fonctionner dans la pièce voisine, puis devenir instable à l'autre bout du logement.

Si le routeur regroupe les deux bandes sous un seul nom, séparez-les temporairement, par exemple en `Maison-2G` et `Maison-5G`. Connectez le téléphone au 2,4 GHz pour privilégier la portée ou au 5 GHz pour privilégier le débit.

Vous pouvez souvent voir la bande utilisée dans les détails du réseau Wi-Fi connecté. Certaines versions d'Android affichent la fréquence ou la vitesse de liaison. Samsung présente des informations similaires dans la fiche du réseau Wi-Fi.

## 8. Vérifiez le DNS privé avant de configurer un DNS statique

Un problème de DNS peut donner l'impression que le Wi-Fi est complètement en panne. Le téléphone reste connecté, certaines applications de messagerie fonctionnent partiellement, mais les sites Web mettent longtemps à s'ouvrir ou ne trouvent pas leur adresse.

Depuis Android 9, le réglage se trouve généralement dans `Paramètres > Réseau et Internet > DNS privé`. Si vous avez choisi un fournisseur personnalisé et que la connexion ne fonctionne plus, passez temporairement sur `Automatique`. Vous pouvez aussi tester brièvement `Désactivé`, puis revenir à `Automatique`, qui reste le réglage recommandé pour la plupart des utilisateurs.

Des fournisseurs comme `dns.google` ou `one.one.one.one` peuvent être utilisés, mais saisissez le nom d'hôte exactement. Une faute dans le nom du DNS privé peut bloquer la résolution des noms aussi bien en Wi-Fi qu'avec les données mobiles.

Évitez de remplacer DHCP par une configuration `Statique` si vous ne connaissez pas l'adresse IP, la passerelle et le masque de sous-réseau corrects. Un DNS statique peut aider dans certains cas, mais une adresse IP incorrecte crée un nouveau problème qui paraît encore plus grave que le premier.

## 9. Réinitialisez les paramètres réseau

Utilisez cette solution lorsque les réglages isolés n'ont rien changé. Une réinitialisation réseau efface les réseaux Wi-Fi et les associations Bluetooth enregistrés. Selon le constructeur et la version d'Android, les paramètres du réseau mobile peuvent être réinitialisés séparément. Les photos, les applications et les fichiers ne sont pas supprimés.

Pixel et Android proche de l'interface Google : `Paramètres > Système > Options de réinitialisation > Réinitialiser le Bluetooth et le Wi-Fi`. Sur les versions récentes, la réinitialisation du réseau mobile est proposée comme une commande distincte.

Samsung : `Paramètres > Gestion globale > Réinitialisation > Réinitialiser les paramètres réseau`. Certains modèles récents séparent également le réseau mobile du Wi-Fi et du Bluetooth.

Sur Xiaomi et OnePlus, recherchez `réinitialiser le réseau` dans les Paramètres, car l'intitulé et l'emplacement changent selon la version du système.

Vous devrez ensuite vous reconnecter aux réseaux Wi-Fi et associer de nouveau vos appareils Bluetooth.

## 10. Vérifiez la date et l'heure

Une date ou une heure incorrecte peut bloquer les certificats, les portails captifs et certaines procédures d'authentification. Cela paraît trop simple, mais le problème existe après un voyage, une batterie complètement déchargée, un changement manuel de fuseau horaire ou une configuration incomplète du téléphone.

Ouvrez `Paramètres > Système > Date et heure`, puis activez le réglage automatique de l'heure et du fuseau horaire. Sur Samsung, utilisez `Paramètres > Gestion globale > Date et heure`.

## 11. Examinez la randomisation de l'adresse MAC sur un réseau de confiance

Depuis Android 10, les téléphones utilisent des adresses MAC aléatoires pour mieux protéger votre vie privée sur les réseaux Wi-Fi. C'est utile sur un réseau public. À la maison ou au travail, cela peut toutefois perturber un routeur configuré avec un filtrage MAC, des adresses IP réservées, un contrôle parental ou une limite d'appareils.

Ouvrez les détails du réseau Wi-Fi et recherchez un réglage lié à la confidentialité ou au type d'adresse MAC. Pour un réseau domestique de confiance qui refuse régulièrement le téléphone, testez l'adresse MAC de l'appareil uniquement sur ce réseau. Conservez l'adresse aléatoire ailleurs.

## 12. Corrigez les causes situées du côté du routeur

Si plusieurs appareils sont touchés, concentrez-vous sur le routeur.

Sur la bande 2,4 GHz, choisissez un canal peu encombré. Les canaux 1, 6 et 11 sont couramment utilisés pour limiter les chevauchements, même si les routeurs vendus en France peuvent aussi proposer les canaux allant jusqu'à 13. Évitez de placer le routeur derrière un téléviseur, dans un meuble fermé, près d'un four à micro-ondes, contre une étagère métallique ou directement sur le sol.

Si le routeur utilise le band steering, essayez de le désactiver ou de séparer les réseaux 2,4 GHz et 5 GHz. S'il impose uniquement WPA3 et qu'un ancien téléphone ne parvient pas à se connecter, testez le mode mixte WPA2/WPA3. Vérifiez également la limite du nombre d'appareils et supprimez les anciens appareils inutilisés si nécessaire.

Dans un grand logement, un système Wi-Fi maillé est généralement préférable à un répéteur bas de gamme. Un répéteur peut suffire, mais il réduit souvent le débit et rend le passage d'un point d'accès à l'autre moins propre.

## 13. Après Android 17 ou une autre mise à jour majeure

Android 17 a commencé à être déployé sur la plupart des Pixel compatibles en juin 2026. Les autres fabricants suivent leur propre calendrier. Si le problème Wi-Fi est apparu juste après la mise à jour, n'en concluez pas immédiatement que le routeur est tombé en panne au même moment.

Installez les correctifs mensuels disponibles, mettez à jour les applications liées à l'opérateur et à la connectivité dans le Play Store, redémarrez le téléphone et le routeur, puis supprimez et ajoutez de nouveau le réseau. Si le problème est largement signalé pour votre modèle et votre numéro de build, un correctif ultérieur peut être la seule vraie solution.

D'anciens guides recommandent encore d'effacer la partition de cache système. Ce n'est pas une première étape raisonnable sur les téléphones Android modernes. Certains modèles Samsung proposent toujours des options de cache dans le mode de récupération, mais beaucoup d'appareils récents n'utilisent plus cette ancienne méthode de dépannage de façon prévisible.

## 14. Testez le mode sans échec

Le mode sans échec démarre Android sans la plupart des applications tierces. Si le Wi-Fi fonctionne normalement dans ce mode, une application installée interfère probablement avec la connexion.

Les VPN, pare-feu, bloqueurs de publicité, outils de gestion de l'appareil et applications promettant de « booster » le Wi-Fi sont les suspects habituels. Commencez par désactiver ou désinstaller les applications réseau les plus récemment ajoutées.

## Quand envisager une réparation matérielle

Si le téléphone perd le Wi-Fi avec plusieurs routeurs, reste défaillant après la réinitialisation réseau et en mode sans échec, alors que les autres appareils fonctionnent normalement, une panne matérielle devient plausible. Les dommages de l'antenne et les défaillances de la puce Wi-Fi sont peu fréquents, mais ils existent après une chute ou un contact avec l'eau.

À ce stade, sauvegardez vos données avant d'essayer une réinitialisation d'usine. Si elle ne change rien, la réparation est l'étape suivante la plus honnête.

## Réponses rapides

Faut-il désactiver le Wi-Fi en quittant la maison ? En général, non. Android gère efficacement la recherche de réseaux, et laisser le Wi-Fi activé facilite la reconnexion aux réseaux connus ainsi que certaines fonctions de localisation.

Une coque peut-elle gêner le Wi-Fi ? Une coque classique, non. Une coque métallique, une batterie externe très épaisse ou une plaque magnétique peut dégrader la réception lorsque le signal est déjà faible.

Comment vérifier la puissance du signal Wi-Fi en dBm ? Certaines versions d'Android l'affichent dans les détails du réseau. Sinon, une application d'analyse Wi-Fi peut la mesurer. Une valeur comprise entre -30 et -50 dBm est excellente. Entre -50 et -70 dBm, le signal reste correct à bon. En dessous de -70 dBm, la connexion peut devenir instable selon les interférences.

runcheck suit l'évolution de la qualité du signal Wi-Fi dans l'écran de détail Réseau, avec la bande de fréquence, la vitesse de liaison et l'historique du signal lorsque Android fournit ces informations.
