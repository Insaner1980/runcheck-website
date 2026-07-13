---
title: "Comment tester le moteur de vibration de votre téléphone"
description: "Des méthodes rapides pour tester le moteur de vibration d'un téléphone Android avec les réglages, le retour haptique du clavier, le mode sans échec et les diagnostics du fabricant."
listSummary: "materiel, test et diagnostic"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["materiel","test","diagnostic","android","guide"]
locale: "fr"
draft: false
---
---

Un téléphone silencieux ne signifie pas automatiquement que son moteur de vibration est mort. Les problèmes viennent le plus souvent des réglages, puis du logiciel, et seulement ensuite du matériel.

Cet ordre compte. Remplacer un moteur haptique alors que le mode Ne pas déranger bloquait les vibrations ne ferait que gaspiller de l'argent.

## Vérifier d'abord les réglages de vibration

Ouvrez les Paramètres et cherchez Sons et vibrations, Sons ou un menu consacré au retour haptique. Le chemin exact dépend du fabricant.

Sur un Samsung Galaxy, allez dans Paramètres > Sons et vibrations > Intensité des vibrations. Les appels, les notifications, les interactions système et les médias peuvent avoir des réglages distincts. Il est facile de baisser l'un d'eux tout en laissant les autres actifs.

Vérifiez aussi le mode Ne pas déranger. Sur les Pixel et les versions proches d'Android standard, les commandes se trouvent généralement dans Paramètres > Notifications > Ne pas déranger. Sur Samsung, utilisez Paramètres > Notifications > Ne pas déranger. Selon votre configuration des appels, des applications et des horaires, ce mode peut supprimer les vibrations.

Dernier détail : contrôlez le clavier. Gboard, Samsung Keyboard et SwiftKey possèdent chacun leur propre réglage de retour haptique. Si la vibration est désactivée dans l'application du clavier, la saisie restera silencieuse même avec un moteur en parfait état.

## Lancer un test de vibration direct

Les Samsung Galaxy offrent l'option intégrée la plus claire. Ouvrez Samsung Members, appuyez sur Assistance, puis sur Diagnostics du téléphone et lancez le test Vibration. Samsung répertorie la vibration comme un test distinct sur les modèles compatibles, ce qui est plus sûr que de dépendre d'un code caché.

L'ancien code Samsung `*#0*#` ouvre encore un menu de test matériel sur de nombreux Galaxy. Appuyez sur Vibration et le téléphone doit vibrer jusqu'à la fermeture du test. Le code nécessite l'application Téléphone de Samsung. Le micrologiciel d'un opérateur, les réglages de sécurité d'une version récente de One UI ou des restrictions d'entreprise peuvent bloquer ce menu.

Certains téléphones Android réagissent aussi à `*#*#0842#*#*`, un ancien code de test de la vibration et du rétroéclairage. Ne le considérez pas comme universel. Les Pixel ne le prennent généralement pas en charge, et beaucoup d'applications Téléphone modernes l'ignorent.

Sur les Xiaomi, Redmi et POCO, essayez le menu CIT avec `*#*#6484#*#*`. Le nom du menu et la liste des tests varient entre les versions de MIUI et d'HyperOS, mais la vibration y figure souvent.

## Tester le retour haptique fin avec le clavier

Ouvrez une application de notes et saisissez quelques phrases. Si le retour tactile est activé, chaque touche doit produire une petite impulsion.

Ce test est utile, car il vérifie à la fois les vibrations subtiles et le bourdonnement plus puissant des appels entrants. Si le moteur produit les impulsions du clavier mais reste silencieux pour les appels, le problème se situe probablement dans un canal de notification.

Sous Android, les applications peuvent gérer la vibration pour chaque canal de notification. Ouvrez Paramètres > Applications, choisissez l'application concernée, puis vérifiez sa section Notifications. Pour Téléphone, Messages, WhatsApp, Telegram ou Gmail, assurez-vous que la vibration est activée dans le canal précis utilisé.

## Distinguer le logiciel du matériel

Redémarrez d'abord le téléphone. Cela paraît trop simple, mais un dysfonctionnement logiciel peut interrompre le retour haptique, puis disparaître après un redémarrage.

Si la vibration revient après le redémarrage avant de disparaître de nouveau, essayez le mode sans échec. Sur de nombreux téléphones Android, ouvrez le menu d'alimentation et maintenez Éteindre jusqu'à ce que l'option soit proposée. Sur beaucoup de Samsung, redémarrez l'appareil en maintenant Volume bas pendant le démarrage.

Le mode sans échec désactive les applications tierces. Si la vibration y fonctionne, supprimez ou désactivez une à une les applications récentes d'automatisation, de filtrage d'appels, d'économie de batterie, de lancement ou d'accessibilité. Ce sont les suspects habituels.

Si la vibration ne fonctionne pas en mode sans échec, ne répond pas dans Samsung Members ou dans le menu de test du fabricant, et que tous les réglages sont actifs, le moteur ou sa connexion est probablement en cause.

## Ce qui peut tomber en panne à l'intérieur

Les téléphones Android utilisent généralement l'un de deux types de moteurs haptiques. Les modèles anciens ou moins chers emploient souvent un moteur à masse rotative excentrée, ou ERM. La sensation ressemble à un petit bourdonnement tournant. Les appareils de milieu et haut de gamme utilisent plus souvent un actionneur résonant linéaire, ou LRA, dont les impulsions sont plus nettes et plus précises.

Les deux peuvent tomber en panne. Une chute peut desserrer une nappe, endommager une soudure ou fissurer le support qui maintient le moteur contre le châssis. L'eau peut corroder le connecteur. L'usure reste possible, même si ces moteurs tiennent généralement longtemps tant que le téléphone n'a pas subi de choc ou n'a pas déjà été ouvert.

Une vibration intermittente est un signe classique de mauvaise connexion. Forte un jour, faible le lendemain, puis totalement absente après une chute. Ce comportement est plus révélateur qu'un moteur qui s'arrête une fois pour toutes.

## À quoi s'attendre pour la réparation

Le remplacement du moteur de vibration fait souvent partie des réparations matérielles les moins coûteuses. Un téléphone scellé doit toutefois être chauffé, débarrassé de son adhésif puis refermé soigneusement. Sur certains modèles modulaires, notamment chez Fairphone, la pièce peut être remplacée par l'utilisateur. Sur la plupart des téléphones Android courants, un technicien doit ouvrir la coque arrière.

Si le téléphone est tombé récemment et que la vibration est devenue instable juste après, demandez au réparateur de vérifier le connecteur avant de remplacer le moteur. Il arrive que le moteur fonctionne encore et que la nappe soit simplement mal emboîtée.

runcheck ne teste pas directement le moteur de vibration, mais l'application aide à repérer des signes associés, comme une surchauffe, une évolution de la consommation ou une charge instable après une chute ou un contact avec l'humidité.
