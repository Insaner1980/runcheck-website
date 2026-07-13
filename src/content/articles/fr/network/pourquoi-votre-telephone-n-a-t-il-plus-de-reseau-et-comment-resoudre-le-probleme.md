---
title: "Pourquoi votre téléphone n'a-t-il plus de réseau, et comment résoudre le problème ?"
description: "Meta description : Des étapes concrètes pour corriger les messages Aucun signal, Aucun service et Appels d'urgence uniquement sur Android, avec des vérifications de la SIM, de l'eSIM, de l'opérateur, de l'APN, des mises à jour et du matériel."
listSummary: "reseau, connectivite et android"
hub: "network"
sourceNumber: 102
order: 13
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Votre téléphone affiche `Aucun signal`, `Aucun service` ou `Appels d'urgence uniquement`, et le petit ordinateur coûteux que vous avez dans la main se retrouve soudain réduit à un appareil photo avec Wi-Fi. C'est pénible, mais pas toujours grave.

L'essentiel consiste à distinguer trois éléments : le téléphone, la SIM ou l'eSIM, et le réseau de l'opérateur. Procéder au hasard fait perdre du temps. Les tester dans l'ordre permet généralement de trouver l'origine de la panne.

## Commencez par ces trois gestes

Activez le mode Avion, attendez environ 15 secondes, puis désactivez-le. Le téléphone abandonne ainsi son enregistrement réseau en cours et tente de se connecter de nouveau.

Redémarrez le téléphone. Le redémarrage recharge le modem, les services SIM et la configuration de l'opérateur. Si la pile radio est bloquée, cela suffit souvent.

Avec une SIM physique, éteignez le téléphone, retirez le tiroir, vérifiez que la carte est propre et bien plane, puis remettez-la correctement en place. Une SIM légèrement déplacée peut provoquer une perte de service après une chute ou un changement de coque.

Avec une eSIM, ne supprimez pas son profil dès la première tentative. Ouvrez `Paramètres > Réseau et Internet > Cartes SIM` et vérifiez que la ligne eSIM est activée. Supprimer une eSIM peut transformer un petit incident en appel obligatoire au service client de l'opérateur.

## Vérifiez si l'opérateur rencontre une panne

Ce n'est pas la réponse la plus satisfaisante, mais le cas est fréquent : le téléphone fonctionne et le réseau de l'opérateur rencontre un problème.

Demandez à une personne proche, chez le même opérateur, si elle a du réseau. Consultez l'application de l'opérateur, sa page d'assistance ou ses comptes officiels sur les réseaux sociaux. Downdetector peut donner un indice, mais ses informations reposent sur les signalements des utilisateurs, pas sur les diagnostics internes de l'opérateur.

Si plusieurs personnes utilisant le même opérateur n'ont plus de service dans la même zone, arrêtez de modifier les paramètres du téléphone. Attendez le rétablissement du réseau ou déplacez-vous.

## Vérifiez que la ligne SIM est active

Un téléphone peut afficher l'absence de service lorsque la ligne SIM est désactivée, le compte suspendu, le crédit prépayé épuisé, le profil eSIM transféré sur un autre appareil ou le téléphone verrouillé sur un autre opérateur.

Sur un Pixel et de nombreux téléphones proches d'Android standard, ouvrez `Paramètres > Réseau et Internet > Cartes SIM`, sélectionnez la SIM, puis vérifiez que `Utiliser la SIM` et `Données mobiles` sont activés.

Sur Samsung, consultez `Paramètres > Connexions > Gestionnaire SIM` et `Paramètres > Connexions > Réseaux mobiles`.

Si le téléphone affiche `Aucune SIM`, la carte peut être endommagée, inactive ou non détectée. S'il affiche `Appels d'urgence uniquement`, il voit un réseau mais ne parvient pas à s'authentifier normalement. Cela oriente souvent vers la SIM, le compte, le verrouillage opérateur ou l'itinérance plutôt que vers une antenne totalement hors service.

## Après Android 17 ou une autre mise à jour majeure

Android 17 a été publié en juin 2026 pour la plupart des Pixel compatibles. Samsung, OnePlus, Xiaomi, Motorola et les autres marques suivent leur propre calendrier. Si les problèmes de signal ont commencé juste après une mise à jour majeure, le moment où ils sont apparus compte.

Ne lancez pas immédiatement une réinitialisation d'usine. Essayez d'abord ceci :

- Redémarrez encore une fois le téléphone après la fin de la mise à jour.
- Recherchez une autre mise à jour système ou une mise à jour de la configuration opérateur.
- Activez puis désactivez une fois le mode Avion.
- Réinitialisez uniquement les paramètres du réseau mobile si votre version d'Android propose cette option.
- Si la 5G est instable, sélectionnez temporairement LTE ou 4G comme type de réseau préféré, puis refaites un test.

Certains problèmes apparus juste après une mise à jour sont corrigés par les correctifs mensuels ou par une nouvelle configuration de l'opérateur. La réinitialisation d'usine doit rester près de la fin de la liste, pas au début.

## Vérifiez le type de réseau préféré

Ouvrez les paramètres de la SIM et cherchez `Type de réseau préféré` ou `Mode réseau`. Choisissez l'option automatique qui comprend la génération la plus élevée prise en charge, par exemple `5G/LTE/3G/2G` ou `5G/4G/3G/2G`.

Si le téléphone est forcé sur une génération de réseau qui n'existe plus dans votre zone, il peut afficher une absence de service. Cela arrive avec d'anciens réglages limités à la 3G dans les pays ou régions où ce réseau a été arrêté. Le même problème peut se produire si vous avez sélectionné LTE uniquement ou 5G uniquement pour un test, puis oublié de rétablir le mode automatique.

Sur Samsung, le chemin est généralement `Paramètres > Connexions > Réseaux mobiles > Mode réseau`.

Sur Xiaomi et POCO, consultez `Paramètres > Cartes SIM et réseaux mobiles`.

Utilisez la recherche des Paramètres si le fabricant a encore déplacé l'option. Ils aiment bien la déplacer.

## Rétablissez la sélection automatique du réseau

Une sélection manuelle de l'opérateur peut bloquer le téléphone sur le mauvais réseau. C'est fréquent après un voyage.

Dans les paramètres de la SIM, cherchez `Sélectionner automatiquement` ou `Opérateurs réseau`. Activez la sélection automatique. Si elle échoue, lancez une recherche manuelle et choisissez votre opérateur dans la liste.

En itinérance, vérifiez que votre forfait l'autorise avant d'activer les données à l'étranger. Les règles concernant les appels et les données peuvent varier selon l'opérateur.

## Vérifiez les paramètres APN en cas de problème de données

Les paramètres APN indiquent à Android comment se connecter au réseau de données de l'opérateur. Un mauvais APN provoque généralement un problème de données mobiles ou de MMS plutôt qu'une absence totale de signal, mais il peut compliquer le diagnostic.

Sur un Pixel ou un appareil proche d'Android standard, ouvrez `Paramètres > Réseau et Internet > Cartes SIM > Noms des points d'accès`. Sur Samsung, le chemin est généralement `Paramètres > Connexions > Réseaux mobiles > Nom des points d'accès`.

Utilisez `Restaurer les paramètres par défaut` si la liste des APN paraît incorrecte ou vide. Pour un MVNO ou un petit opérateur, reprenez les valeurs indiquées sur sa propre page d'assistance. Évitez de copier des réglages APN trouvés au hasard sur un forum, sauf si vous avez envie de résoudre le problème deux fois.

## Réinitialisez les paramètres réseau

Si la SIM est active et que les réglages semblent normaux, réinitialisez les paramètres réseau. Selon le téléphone, cette opération peut effacer les réseaux Wi-Fi enregistrés, les associations Bluetooth, certains réglages VPN et la configuration du réseau mobile. Elle ne supprime ni les applications, ni les photos, ni les messages, ni les fichiers.

Sur un Pixel récent, ouvrez `Paramètres > Système > Options de réinitialisation`. Vous pouvez voir des options séparées, comme `Réinitialiser les paramètres du réseau mobile` et `Réinitialiser le Bluetooth et le Wi-Fi`, ou l'ancienne option combinée `Reset Wi-Fi, mobile & Bluetooth` lorsque l'interface l'affiche en anglais.

Samsung : `Paramètres > Gestion globale > Réinitialisation > Réini. paramètres du réseau mobile`.

Xiaomi et POCO : recherchez `réinitialiser le réseau` dans les Paramètres, car le chemin varie entre MIUI et HyperOS.

Redémarrez après la réinitialisation et laissez au téléphone une minute pour s'enregistrer auprès de l'opérateur.

## Testez la SIM dans un autre téléphone

C'est le moyen le plus propre de cesser de deviner.

Placez votre SIM dans un autre téléphone déverrouillé qui prend en charge les bandes de votre opérateur. Si elle y fonctionne, la SIM et le compte sont probablement en ordre, et le problème vient du téléphone d'origine. Si elle n'obtient toujours aucun service, la SIM, le compte ou le provisionnement de l'opérateur est en cause.

Essayez aussi, si possible, une SIM dont vous savez qu'elle fonctionne dans votre téléphone. Si elle capte le réseau, le matériel du téléphone est probablement opérationnel.

Avec une eSIM, le test équivalent est plus compliqué, car son transfert peut nécessiter une nouvelle activation par l'opérateur. Dans ce cas, le service client peut vérifier si le profil eSIM est toujours actif et attribué à votre appareil.

## Vérifiez l'IMEI d'un téléphone d'occasion

Si le téléphone a été acheté d'occasion, vérifiez son IMEI. Composez `*#06#` pour l'afficher.

En France, un téléphone déclaré volé peut être bloqué à l'aide de son IMEI après le signalement aux forces de l'ordre et à l'opérateur. Un terminal verrouillé sur un autre opérateur peut également refuser votre SIM. Dans certains autres marchés, un financement impayé lié à l'opérateur d'origine peut aussi entraîner des restrictions.

Contactez l'opérateur concerné lorsque c'est possible. Les services tiers de vérification d'IMEI peuvent fournir un indice, mais ils ne remplacent pas la décision de l'opérateur sur son propre réseau.

## Le lieu et les matériaux du bâtiment comptent

La puissance du signal peut changer très vite. Un téléphone peut afficher toutes les barres dehors et aucun service dans un sous-sol, un ascenseur, un entrepôt à toiture métallique, un parking souterrain ou un appartement entouré de béton.

Approchez-vous d'une fenêtre ou sortez. Si le service revient, le téléphone fait son travail. C'est le bâtiment qui bloque le signal.

Une coque épaisse peut aussi nuire à la réception si elle contient une plaque métallique, des aimants ou un accessoire mal placé. Retirez-la pendant une minute si le problème a commencé après l'ajout d'un support, d'un étui portefeuille ou d'un anneau magnétique.

Les appels Wi-Fi sont la solution habituelle lorsque le signal mobile passe mal à l'intérieur, mais que la connexion Wi-Fi est bonne.

## Les valeurs de puissance sont plus utiles que les barres

Les barres restent approximatives. Les dBm sont plus parlants.

Sur de nombreux téléphones Android, ouvrez `Paramètres > À propos du téléphone > État de la SIM > Puissance du signal`. Vous pouvez voir une valeur comme `-85 dBm` ou `-110 dBm`. Plus elle est proche de zéro, plus le signal est fort.

À titre indicatif, une valeur comprise entre environ `-50 et -90 dBm` est exploitable, sous `-100 dBm` le signal est faible, et autour de `-120 dBm` il devient presque inutilisable. L'expérience réelle dépend du type de réseau, de la congestion et de la configuration de l'opérateur. N'utilisez donc pas ce nombre comme un verdict absolu.

Le code `*#*#4636#*#*` ouvre un menu de test sur certains téléphones Android, mais de nombreux fabricants et opérateurs le désactivent. S'il ne se passe rien, votre téléphone n'est pas cassé.

runcheck peut afficher la puissance du signal et les détails du réseau dans le temps, ce qui est plus utile que de fixer les barres pendant dix secondes. Les problèmes de réception dépendent souvent du lieu, de l'heure et des basculements entre LTE et 5G.

## Quand le matériel devient suspect

Une panne matérielle devient plus probable lorsque toutes ces conditions sont réunies :

- Votre SIM fonctionne dans un autre téléphone.
- Une SIM dont le fonctionnement est confirmé échoue dans le vôtre.
- Les paramètres réseau ont été réinitialisés.
- Le compte est actif.
- D'autres personnes chez le même opérateur ont du réseau à proximité.
- Le téléphone reste sans service dans plusieurs lieux.

Les causes matérielles courantes comprennent une antenne endommagée, un lecteur SIM défectueux, de la corrosion près du tiroir SIM ou un composant radiofréquence en fin de vie. Les chutes et l'humidité sont les suspects habituels.

Cherchez des bosses près des lignes d'antenne, un tiroir SIM qui ne se place pas à plat, des indicateurs d'humidité, de la corrosion ou des traces de choc récent. Si le téléphone est sous garantie, contactez le fabricant ou le vendeur. Hors garantie, comparez le coût du devis à la valeur actuelle du téléphone avant d'accepter la réparation.

## Faut-il acheter un amplificateur de signal ?

Seulement pour un lieu fixe, et seulement s'il existe déjà un signal extérieur exploitable. Un répéteur amplifie un signal présent. Il ne crée pas un réseau mobile là où il n'y en a aucun.

En France, l'installation d'un répéteur de téléphonie mobile sans l'autorisation préalable des opérateurs concernés est interdite. L'équipement doit aussi respecter les exigences européennes applicables aux équipements radio. N'achetez pas un amplificateur puissant au hasard sur une place de marché en espérant que tout ira bien. Un appareil mal installé ou non autorisé peut brouiller les réseaux mobiles environnants.
