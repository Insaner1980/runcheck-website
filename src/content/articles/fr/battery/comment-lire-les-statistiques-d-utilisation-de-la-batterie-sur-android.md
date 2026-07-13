---
title: "Comment lire les statistiques d'utilisation de la batterie sur Android"
description: "Les statistiques d'utilisation de la batterie Android indiquent quelles applications et quels services consomment de l'énergie. Découvrez où les trouver, ce que signifient les pourcentages et comment repérer un vrai problème."
listSummary: "batterie, consommation et depannage"
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Health"
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Vous ouvrez Utilisation de la batterie et une application affiche 42 %. Cela semble inquiétant. Parfois, ça l'est. Parfois, ce chiffre ne veut presque rien dire.

Les statistiques de batterie d'Android sont utiles pour réduire le champ des recherches, mais elles ne constituent pas un relevé exact de chaque milliampère-heure consommé. Il faut lire les pourcentages dans leur contexte.

## Où trouver les statistiques

Sur Pixel et les appareils proches d'Android d'origine, ouvrez la section Batterie dans les Paramètres, puis **Utilisation de la batterie**. Vous pouvez afficher la consommation par application et, sur les versions récentes des Pixel, basculer entre les applications et les catégories système. Touchez une application pour ouvrir ses réglages de batterie, notamment les options d'utilisation en arrière-plan.

Sur les Samsung Galaxy, ouvrez **Paramètres > Batterie**. Sur certaines anciennes versions de One UI, le chemin passe par **Paramètres > Batterie et maintenance de l'appareil > Batterie**. Samsung affiche souvent d'abord un graphique, puis un détail de la consommation par application et par fonction. Certaines versions proposent aussi un historique plus long, souvent plus utile qu'une courte période entre deux recharges.

Sur les téléphones Xiaomi, Redmi et POCO, cherchez une rubrique consacrée à l'utilisation ou à la consommation de la batterie dans le menu Batterie. Les noms changent selon HyperOS, MIUI et le modèle. Ne soyez donc pas surpris si le libellé diffère légèrement.

Sur OnePlus, OPPO et realme, commencez dans Batterie, puis cherchez les détails d'utilisation ou la gestion de la batterie par application. Ces interfaces séparent souvent l'activité au premier plan de celle en arrière-plan lorsque vous ouvrez la fiche d'une application.

Le code `*#*#4636#*#*` ouvre un menu de test sur certains téléphones Android. Il peut afficher la tension, la température, l'état et la situation de recharge. Ce n'est pas un écran de consommation par application, et de nombreux fabricants le désactivent.

## Ce que signifient réellement les pourcentages

Le nombre affiché à côté d'une application représente généralement sa part de l'énergie consommée, et non une part de la capacité totale de la batterie.

Imaginons que le téléphone passe de 100 % à 70 %. Il a utilisé 30 points de pourcentage. Si YouTube représente 50 % dans Utilisation de la batterie, cela ne signifie pas que YouTube a vidé la moitié de toute la batterie. Cela signifie qu'Android lui attribue environ la moitié de la consommation pendant cette période, soit approximativement 15 points de batterie dans cet exemple.

Prenons maintenant le cas inverse. Le téléphone passe de 100 % à 96 %, et une application affiche 60 %. Elle domine une consommation minuscule. Son comportement peut être parfaitement normal.

C'est l'erreur la plus fréquente : s'acharner sur le pourcentage le plus élevé sans vérifier combien de batterie a réellement disparu.

## Comment Android estime la consommation

Android ne place pas un petit wattmètre sur chaque application. Il estime.

Le système suit le temps pendant lequel les composants restent dans différents états : CPU, écran, GPS, Wi-Fi, réseau mobile, Bluetooth, etc. Les fabricants fournissent un profil énergétique qui indique le courant que chaque composant est censé consommer dans ces états. Android combine ces durées avec le profil, puis attribue la consommation aux applications et aux composants système.

C'est suffisant pour dépanner. Ce n'est pas une mesure de laboratoire.

Les profils énergétiques varient selon le fabricant. Un Pixel et un Xiaomi peuvent exécuter la même application pendant la même durée et afficher des pourcentages différents. L'application ne s'est pas forcément comportée autrement. Le modèle comptable a changé.

## Lire le graphique de batterie

Commencez par le graphique, pas par la liste des applications.

Une chute rapide lorsque l'écran est allumé est souvent normale. Luminosité élevée, vidéo, cartes, jeux, appareil photo et données mobiles peuvent vider rapidement un téléphone. Une chute marquée alors que l'écran est éteint est plus intéressante. Elle peut signaler une activité en arrière-plan, un mauvais signal, une synchronisation en boucle, un processus bloqué ou un téléphone qui n'entre jamais en veille profonde.

Une courbe presque plate lorsque l'écran est éteint est ce que vous recherchez. Le téléphone se repose.

Les périodes de recharge apparaissent sous forme de pentes montantes ou de sauts verticaux. Un vide dans le graphique signifie souvent que le téléphone était éteint, que les statistiques ont été réinitialisées ou que le système n'a pas collecté de données pendant cette période. N'interprétez pas trop précisément un graphique désordonné après cinq petites recharges dans la même journée. Les recharges partielles font varier fortement les pourcentages attribués aux applications.

## Écran, temps d'éveil et qualité du signal

Certaines versions d'Android affichent des barres sous le graphique. Elles passent facilement inaperçues, mais expliquent beaucoup de choses.

Le temps d'écran allumé indique les périodes d'activité de l'affichage. Si la majeure partie de la baisse coïncide avec ces périodes, le téléphone fonctionne probablement normalement. L'écran fait partie des plus gros consommateurs d'énergie d'un smartphone moderne.

Le temps d'éveil montre quand le CPU était actif. Idéalement, il recouvre surtout le temps d'écran allumé. De longues périodes d'éveil avec l'écran éteint suggèrent des verrous d'éveil ou un travail en arrière-plan. La synchronisation des e-mails, les applications de sport, la sauvegarde cloud, la navigation, la messagerie et les lecteurs multimédias peuvent tous en provoquer. Une partie est attendue. Une application de shopping qui maintient le téléphone éveillé pendant trois heures ne l'est pas.

La qualité du signal joue aussi un rôle important. Un signal mobile faible peut consommer beaucoup d'énergie, car le modem travaille davantage pour maintenir la connexion. Si une rubrique comme `Mobile network standby` ou `Cell standby` apparaît en haut de la liste pendant que vous êtes dans un bureau en sous-sol, un train, une zone rurale ou un bâtiment en béton, le téléphone n'est pas forcément défectueux. Il lutte peut-être simplement pour rester connecté.

## Les tendances qui méritent votre attention

Une application qui consomme beaucoup n'est pas automatiquement problématique. Une application qui consomme beaucoup alors que vous l'avez à peine utilisée l'est davantage.

Une application vidéo en tête de liste après deux heures de streaming est normale. Une application d'actualités en tête après cinq minutes de lecture est suspecte. Ouvrez sa fiche et comparez son activité au premier plan et en arrière-plan.

Une consommation élevée d'Android System ou des applications système est plus difficile à interpréter. Elle peut signaler un vrai problème, notamment après une mise à jour défectueuse. Elle peut aussi signifier qu'Android n'a pas réussi à attribuer précisément la consommation à une application et l'a regroupée dans la catégorie système.

Le cas des services Google Play est similaire. Ils gèrent les notifications push, la synchronisation des comptes, la localisation et d'autres fonctions partagées par de nombreuses applications. S'ils apparaissent très haut, cherchez les applications qui demandent trop souvent la localisation. Les services Google Play peuvent être le messager plutôt que le responsable.

Que l'écran représente 40-50 % de la batterie consommée est normal pour beaucoup de personnes. Si l'écran a peu servi mais que la perte totale est élevée, autre chose travaille.

## Que faire après avoir repéré une application suspecte

Commencez sans mesures radicales. Mettez l'application à jour. Redémarrez le téléphone. Vérifiez si le problème se reproduit le lendemain.

S'il persiste, limitez l'utilisation en arrière-plan de cette application. Sur Pixel, ouvrez l'application depuis **Utilisation de la batterie**, puis modifiez **Autoriser l'utilisation en arrière-plan**, ou passez par **Paramètres > Applications > [nom de l'application] > Utilisation de la batterie par l'appli**. Sur Samsung, ouvrez l'application depuis les détails de batterie et utilisez les limites d'utilisation en arrière-plan, les applications en veille ou les applications en veille profonde, selon les options disponibles sur votre appareil.

Forcer l'arrêt est un test temporaire, pas une solution durable. Cela peut stopper une application bloquée sur le moment, mais une notification push, une tâche programmée ou un redémarrage peut la relancer. Limiter l'activité en arrière-plan est plus propre.

Le mode sans échec est utile lorsque tout le téléphone se décharge vite et qu'aucune application ne ressort. Il désactive les applications tierces. Si la consommation redevient normale, un logiciel est probablement en cause. Si elle reste identique, examinez le signal, une mise à jour système, la température de l'appareil ou la batterie elle-même.

## Ce que les statistiques ne peuvent pas vous dire

Les statistiques d'utilisation ne prouvent pas l'état de la batterie. Une cellule usée et une mauvaise application peuvent produire les mêmes symptômes au quotidien.

Elles sont aussi réinitialisées ou présentées différemment selon l'appareil. Pixel se concentre sur l'utilisation depuis la dernière recharge complète. Samsung a modifié la présentation au fil des versions de One UI, et certaines affichent l'utilisation depuis la dernière recharge plutôt que depuis un cycle complet. Les recharges partielles fréquentes raccourcissent la période observée et rendent les pourcentages plus spectaculaires.

Pour voir une tendance, il faut un historique. AccuBattery peut estimer la capacité et suivre les sessions dans le temps. runcheck conserve l'historique du niveau de batterie, de la température, de la vitesse de décharge et des données de session associées, afin de comparer plusieurs journées au lieu de s'arrêter sur un graphique bruité.

Le meilleur usage d'Utilisation de la batterie est simple : trouvez une première piste crédible, puis confirmez-la avec le comportement réel. Si le graphique, la liste des applications, la durée d'activité en arrière-plan et vos souvenirs de la journée désignent tous la même cause, vous avez probablement trouvé l'origine de la décharge.
