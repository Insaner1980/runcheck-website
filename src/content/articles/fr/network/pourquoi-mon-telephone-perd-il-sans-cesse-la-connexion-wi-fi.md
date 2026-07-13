---
title: "Pourquoi mon téléphone perd-il sans cesse la connexion Wi-Fi ?"
description: "La version la plus agaçante est celle où le Wi-Fi fonctionne dans la cuisine, disparaît dans la chambre, revient pendant dix secondes, puis coupe de nouveau. Rien ne semble clairement en panne. Le routeur est allumé, le mot de passe est correct et les applications se contentent d'indiquer « pas de connexion Internet »."
listSummary: "reseau, connectivite et android"
hub: "network"
sourceNumber: 95
order: 6
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Commencez par une question : les autres appareils connectés au même Wi-Fi se déconnectent-ils aussi ? Si oui, examinez d'abord le routeur ou la connexion Internet. Si seul votre téléphone coupe, le problème vient probablement du téléphone, du profil réseau enregistré ou de la façon dont il passe d'une bande à l'autre.

## Si plusieurs appareils se déconnectent, commencez par le routeur

Redémarrez le routeur avant de chercher une solution compliquée. Débranchez-le, attendez 30 secondes, puis rebranchez-le. Cela efface certains états temporaires, renouvelle les baux DHCP et force les appareils à négocier de nouveau leur connexion.

Les routeurs grand public deviennent parfois instables après plusieurs semaines sans redémarrage. Ils peuvent manquer de mémoire, conserver de vieilles entrées d'appareils ou mal gérer l'itinérance après une mise à jour du micrologiciel. Un redémarrage n'est pas une réparation profonde, mais c'est le moyen le plus rapide de distinguer un incident temporaire d'un problème durable.

Si le problème revient, ouvrez l'interface d'administration ou l'application du routeur. Recherchez les mises à jour du micrologiciel, le nombre d'appareils connectés et les réglages de canal. Un routeur d'entrée de gamme peut peiner avec 20 appareils actifs ou davantage : téléphones, ordinateurs, téléviseurs, enceintes, caméras, prises, montres et tablettes comptent tous.

La bande des 2,4 GHz pose souvent problème. Elle porte plus loin que celle des 5 GHz, mais dispose de beaucoup moins de canaux propres. Dans un immeuble très occupé, plusieurs routeurs peuvent utiliser des canaux identiques ou qui se chevauchent. Si vous choisissez manuellement un canal en 2,4 GHz, limitez-vous à 1, 6 ou 11 et sélectionnez le moins encombré.

## Si seul le téléphone se déconnecte

Supprimez le réseau enregistré puis reconnectez-vous. Sur Pixel et les versions proches d'Android standard, ouvrez **Paramètres > Réseau et Internet > Internet**, puis affichez les réseaux enregistrés et choisissez **Supprimer** pour le réseau concerné. Sur Samsung, ouvrez **Paramètres > Connexions > Wi-Fi**, touchez l'icône de réglage du réseau, puis choisissez l'option permettant de l'oublier ou de le supprimer. Reconnectez-vous ensuite avec le mot de passe.

Cette opération efface le profil enregistré. Elle aide après un changement de routeur, de mot de passe ou de mode WPA2/WPA3, ainsi que lorsque Android tente de réutiliser d'anciens paramètres devenus incorrects.

Vérifiez aussi si le téléphone passe vers un autre réseau enregistré. Ce cas est moins fréquent qu'on ne le pense, mais il existe près des réseaux ouverts, des répéteurs, des réseaux invités et d'anciens Wi-Fi de travail ou de café. Supprimez ceux que vous n'utilisez plus. Votre téléphone n'a pas besoin de conserver un musée de tous les points d'accès rencontrés.

## Les réglages de batterie peuvent donner l'impression que la connexion coupe

Les fonctions Doze et Économiseur de batterie d'Android peuvent retarder l'activité réseau en arrière-plan lorsque le téléphone reste inactif. Le Wi-Fi n'est généralement pas coupé, mais les applications de messagerie, de sauvegarde, de VPN ou de maison connectée peuvent se comporter comme si la connexion avait disparu.

Certains fabricants appliquent des restrictions plus agressives que d'autres. Xiaomi, OPPO, vivo et certaines versions de OnePlus peuvent limiter fortement l'activité en arrière-plan. Samsung propose aussi des limites d'utilisation en arrière-plan et des options d'économie d'énergie Wi-Fi qui peuvent modifier le comportement du téléphone lorsqu'il est inactif.

Si les coupures surviennent lorsque l'écran est éteint, examinez d'abord l'application concernée. Autorisez-lui une utilisation de la batterie sans restriction ou retirez-la des listes d'applications en veille. Ne désactivez pas toutes les fonctions d'économie d'énergie au niveau du système, sauf si vous aimez recharger plus souvent.

## Le basculement intelligent peut être trop intelligent

Les téléphones Android récents peuvent passer du Wi-Fi aux données mobiles lorsque le Wi-Fi paraît faible ou n'a plus accès à Internet. L'idée est utile. En pratique, un Wi-Fi simplement lent peut sembler instable parce que le téléphone décide sans cesse de changer de réseau.

Sur Pixel, vérifiez **Paramètres > Réseau et Internet > Connectivité adaptative**. Certaines versions proposent également une option de basculement automatique dans les réglages Internet. Sur Samsung, ouvrez **Paramètres > Connexions > Wi-Fi > Wi-Fi intelligent**, puis cherchez l'option de basculement vers les données mobiles.

Désactivez cette fonction pendant une journée si le téléphone quitte le Wi-Fi alors que les autres appareils restent connectés. Si le problème disparaît, vous avez trouvé la cause.

## Band steering et itinérance sur un réseau maillé

De nombreux routeurs utilisent le même nom de réseau pour les bandes 2,4 GHz et 5 GHz. Le routeur et le téléphone choisissent alors la bande à utiliser. Cette fonction s'appelle le band steering. Les bons routeurs la gèrent discrètement. Les mauvais font passer le téléphone d'une bande à l'autre jusqu'à rendre la connexion instable.

Pour faire un essai rapide, séparez temporairement les bandes. Donnez des noms différents aux réseaux 2,4 GHz et 5 GHz, puis connectez le téléphone à l'un d'eux. Choisissez 2,4 GHz pour la distance et les murs, 5 GHz pour la vitesse près du routeur.

Les systèmes maillés ajoutent une difficulté. Si le téléphone reste accroché à un nœud faible au lieu de rejoindre le plus proche, la connexion peut couper lorsque vous vous déplacez dans le logement. Les mises à jour du routeur améliorent souvent l'itinérance, mais le placement compte aussi. Un nœud caché derrière un téléviseur ou dans un meuble part avec un sérieux handicap.

## Puissance du signal et emplacement

Le Wi-Fi s'affaiblit avec la distance et les obstacles. Un téléphone qui fonctionne près du routeur mais coupe deux pièces plus loin n'est probablement pas défectueux. Il reçoit simplement un signal faible ou perturbé.

À titre indicatif, un Wi-Fi autour de -50 dBm est fort, -60 dBm reste correct et la stabilité commence souvent à souffrir sous -70 dBm. Sous -80 dBm, les coupures intermittentes ne sont pas surprenantes.

Placez le routeur en hauteur, loin des murs épais, des étagères métalliques, des aquariums et des fours à micro-ondes. Installez-le si possible vers le centre du logement. Dans une grande habitation, un véritable système maillé est généralement préférable à un répéteur bon marché, car les répéteurs réduisent souvent le débit et ajoutent un point d'itinérance supplémentaire.

## Les réglages de sécurité peuvent ne gêner qu'un appareil

WPA3 est la norme de sécurité Wi-Fi actuelle, mais certains anciens téléphones et micrologiciels de routeur gèrent mal les réseaux configurés uniquement en WPA3. Si un seul téléphone Android coupe sur un réseau WPA3 alors que tout le reste fonctionne, essayez le mode mixte WPA2/WPA3.

Vérifiez aussi le filtrage MAC, le contrôle parental et les limites d'appareils du routeur. Si le routeur utilise une liste blanche fondée sur les adresses MAC, l'adresse MAC aléatoire d'Android peut être interprétée comme un nouvel appareil. Pour un réseau domestique de confiance, vous pouvez sélectionner l'adresse MAC du téléphone ou de l'appareil dans les paramètres de confidentialité propres à ce réseau. Conservez l'adresse aléatoire sur les réseaux publics.

## Les mises à jour logicielles, y compris Android 17

Les grandes mises à jour d'Android peuvent introduire des problèmes de connexion. Elles peuvent aussi révéler un défaut ancien du routeur. Android 17 a été publié d'abord pour la plupart des Pixel compatibles en juin 2026, tandis que les autres fabricants le diffusent plus tard à travers leurs propres versions logicielles. Une discussion consacrée à un problème Android 17 sur Pixel ne s'applique donc pas forcément à un Samsung, un Xiaomi ou un OnePlus qui n'a pas encore reçu sa version d'Android 17.

Si les coupures ont commencé juste après une mise à jour, faites d'abord les vérifications ordinaires : redémarrez le téléphone et le routeur, installez les mises à jour Google Play du système ou les correctifs de sécurité disponibles, puis supprimez le réseau enregistré avant de vous reconnecter. Réinitialisez ensuite les paramètres réseau si nécessaire.

Sur Pixel et sur les versions récentes d'Android, utilisez **Paramètres > Système > Options de réinitialisation > Réinitialiser le Bluetooth et le Wi-Fi** pour les connexions sans fil. Les paramètres du réseau mobile peuvent être réinitialisés séparément. Sur Samsung, ouvrez les options de réinitialisation depuis la gestion globale et choisissez la réinitialisation des paramètres réseau proposée par votre version de One UI. Ces opérations suppriment les réseaux Wi-Fi enregistrés, les associations Bluetooth et certains réglages mobiles. Gardez donc vos mots de passe Wi-Fi à portée de main.

## Quand le matériel devient suspect

Le matériel est le dernier suspect, pas le premier. Mais une chute, une infiltration d'eau, une antenne vieillissante ou une carte endommagée peuvent provoquer des coupures Wi-Fi alors que les autres radios semblent fonctionner.

Testez le téléphone sur un autre réseau Wi-Fi, puis en mode sans échec. S'il reste connecté en mode sans échec, une application tierce interfère probablement. Les VPN, bloqueurs de publicité, pare-feu, applications de gestion d'appareil et pseudo-optimiseurs Wi-Fi douteux sont des suspects fréquents.

Si le téléphone coupe sur plusieurs routeurs, continue après une réinitialisation des paramètres réseau et se déconnecte encore en mode sans échec, une réparation professionnelle ou un remplacement devient une réponse réaliste.

## Réponses rapides

Pourquoi le Wi-Fi coupe-t-il uniquement lorsque l'écran est éteint ? Le plus souvent, la cause est une restriction de batterie appliquée à l'application, le comportement d'un VPN ou l'économie d'énergie du fabricant. La radio Wi-Fi peut rester connectée alors que l'application n'est plus autorisée à travailler en arrière-plan.

Une coque peut-elle provoquer des coupures Wi-Fi ? Une coque normale en plastique, silicone ou cuir a peu d'effet. Une coque métallique ou une plaque magnétique peut réduire le signal, surtout lorsqu'il est déjà faible.

Pourquoi un seul réseau Wi-Fi pose-t-il problème ? Cela indique généralement un réglage du routeur ou un profil enregistré corrompu. Supprimez le réseau, reconnectez-vous, puis vérifiez le band steering, le mode WPA, le filtrage MAC et le micrologiciel du routeur.
