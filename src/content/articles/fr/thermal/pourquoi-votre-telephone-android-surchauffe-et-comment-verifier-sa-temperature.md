---
title: "Pourquoi votre téléphone Android surchauffe et comment vérifier sa température"
description: "Un téléphone Android peut sembler chaud pour des raisons banales, pour des raisons sérieuses ou sans raison évidente. Le plus difficile est de savoir quel chiffre vous regardez et s'il a réellement un sens."
listSummary: "temperature, thermique et android"
hub: "thermal"
sourceNumber: 53
order: 1
tags: ["temperature","thermique","android","depannage","materiel"]
locale: "fr"
draft: false
---
## Commencez par vérifier la température

Utilisez d'abord les outils intégrés. Ils sont moins spectaculaires que les applications de capteurs, mais risquent moins d'afficher une précision que le téléphone ne fournit pas réellement.

Android 17 est d'abord déployé sur les appareils Pixel compatibles, avant que les autres marques Android ne suivent leur propre calendrier. Sur les Pixel 6a et modèles ultérieurs, ouvrez **Paramètres > Batterie**, puis choisissez **Diagnostics de la batterie > Le téléphone est très chaud**. L'outil du Pixel n'affiche pas toujours une température brute de la batterie. Il donne des conseils adaptés à l'appareil en fonction de son état thermique actuel.

Pour vérifier l'état de la batterie sur les Pixel récents, ouvrez l'écran Batterie, puis choisissez **État de la batterie**. La page d'assistance actuelle de Google indique que l'état et la capacité de la batterie sont disponibles sur les Pixel 8a et modèles ultérieurs, mais pas sur la Pixel Tablet. Les modèles plus anciens, comme les Pixel 6a, Pixel 7, Pixel 7a, Pixel 8 et Pixel 8 Pro, n'affichent pas cet état de la batterie.

Sur les téléphones Samsung Galaxy, le contrôle officiel de l'état de la batterie passe par l'application Samsung Members. Ouvrez **Samsung Members > Assistance > Diagnostics du téléphone > État de la batterie**. Samsung classe le résultat comme Normal, Faible ou Mauvais. Certains modèles Galaxy affichent aussi des informations utiles sur la batterie et la maintenance de l'appareil dans les Paramètres, mais les noms exacts des menus changent selon la version de One UI, la région et le modèle.

L'ancien code de numérotation `*#*#4636#*#*` vaut encore la peine d'être essayé, mais n'en faites pas le cœur de votre diagnostic. Sur certains téléphones Android, il ouvre un menu de test contenant des informations sur le téléphone, le Wi-Fi, l'utilisation et parfois la batterie. Sur de nombreuses versions récentes de Samsung, Xiaomi et Pixel, l'écran de batterie est absent ou le code ne fait rien. C'est normal. Cela ne signifie pas que votre appareil est défectueux.

Une application de diagnostic est la solution de repli lorsque le fabricant n'affiche pas assez d'informations. Les bonnes applications indiquent la température de la batterie, le courant de recharge, l'état thermique d'Android et un historique. Méfiez-vous toutefois des valeurs très précises pour la température du CPU. Android ne fournit pas aux applications ordinaires une mesure universelle et propre de cette température. Certaines applications lisent des capteurs du fabricant lorsque l'appareil l'autorise. D'autres n'affichent que la température de la batterie. D'autres encore l'estiment.

runcheck est utile lorsque le schéma général vous intéresse davantage qu'un chiffre isolé. L'application met les relevés thermiques en relation avec l'état de la batterie, le réseau, la pression sur le stockage et l'historique de l'appareil. Vous pouvez ainsi voir si la chaleur a commencé pendant la recharge, avec un signal faible, à cause d'une application en arrière-plan ou dans le cadre d'une tendance plus longue.

## Comment interpréter le chiffre ?

La température de la batterie n'est pas la température de surface. Un téléphone peut sembler chaud parce que son châssis évacue la chaleur du processeur, tandis que la batterie reste dans une plage normale. L'inverse peut aussi arriver, surtout pendant la recharge.

Utilisez les plages suivantes comme repères pratiques, pas comme règles de laboratoire :

- **20-35 °C :** plage normale pour un usage quotidien. Les messages, la navigation web et le streaming léger devraient généralement rester dans cette zone, sauf si la pièce est chaude.
- **35-40 °C :** le téléphone est chaud, mais cette température est courante pendant la navigation GPS, les appels vidéo, les jeux, les téléchargements en 5G ou la recharge.
- **40-45 °C :** il faut commencer à surveiller la situation. Le téléphone peut réduire la luminosité, ralentir la recharge ou diminuer ses performances.
- **Au-dessus de 45 °C :** cessez d'ajouter de la chaleur. Débranchez le téléphone, fermez les applications exigeantes, retirez la coque et mettez-le à l'abri du soleil.
- **Autour de 50 °C ou davantage :** considérez qu'il s'agit d'une surchauffe, surtout si le téléphone affiche un avertissement, s'éteint ou devient inconfortable à tenir.

Les fabricants décrivent généralement les conditions sûres en fonction de la température ambiante. Samsung indique une plage optimale de 0-35 °C (32-95 °F) pour les appareils Galaxy, et Google donne la même plage ambiante dans ses consignes de sécurité pour les Pixel. Les relevés internes de la batterie peuvent temporairement monter plus haut sous forte charge, mais c'est la chaleur répétée qui accélère son usure.

## D'où vient la chaleur ?

La plupart de la chaleur d'un téléphone provient de quatre sources : le SoC, la batterie, les radios et l'environnement.

Le CPU et le GPU chauffent lorsqu'ils travaillent beaucoup. Les jeux, l'enregistrement vidéo en 4K, le traitement photo, le montage vidéo, la navigation et l'installation d'applications sollicitent suffisamment les composants pour que le téléphone chauffe près du bloc photo ou sur sa partie supérieure. Lorsque la chaleur ne s'évacue pas assez vite, les contrôles thermiques d'Android réduisent les performances. C'est le bridage thermique (thermal throttling).

La batterie chauffe pendant la recharge et lors des décharges importantes. Une recharge rapide produit davantage de chaleur qu'un chargeur lent de 5 W ou 10 W, car la batterie reçoit plus de puissance en moins de temps. Utiliser le téléphone pendant une recharge rapide crée la double charge classique : chaleur de la recharge plus chaleur du processeur.

Les radios comptent plus qu'il n'y paraît. Un signal mobile faible oblige le modem à travailler davantage. Dans un sous-sol avec une seule barre de réseau, un téléphone peut chauffer davantage au repos que le même appareil posé sur un bureau avec un Wi-Fi puissant. Si la chaleur disparaît en mode Avion, la recherche de réseau faisait probablement partie du problème.

L'environnement fixe le point de départ. Un téléphone exposé au soleil, laissé dans une voiture chaude, placé sous un oreiller ou enfermé dans une coque épaisse dispose de moins de marge pour se refroidir. Les téléphones n'ont pas de ventilateur. Ils évacuent la chaleur par le châssis, l'écran et la coque arrière.

## La recharge sans fil mérite une attention particulière

La recharge sans fil est pratique, mais moins tolérante qu'un câble. Les chargeurs Qi et Qi2 utilisent l'induction magnétique, et l'alignement compte. Qi2 améliore cet alignement grâce à des aimants. La norme Qi2 25W augmente aussi la puissance sans fil certifiée par rapport à l'ancien niveau de 15 W, mais la chaleur doit toujours s'évacuer quelque part.

Un chargeur Qi2 bien aligné ou un chargeur du type Pixel Stand convient généralement. Un tapis mal aligné, une coque épaisse, un anneau métallique ou une pièce chaude peuvent transformer une recharge normale en recharge très chaude. Pour résoudre une recharge sans fil lente sur un Pixel, Google conseille notamment de retirer la coque, de garder l'appareil hors du soleil direct, de vérifier son alignement et de s'assurer que le chargeur ne bloque pas la circulation de l'air.

La règle pratique est simple : si la recharge sans fil fait chauffer votre téléphone chaque nuit, changez l'installation. Essayez sans coque, choisissez un chargeur certifié, alignez correctement l'appareil et activez une limite de charge à 80 % si votre modèle la propose. Une chaleur occasionnelle n'est pas dramatique. Un téléphone chaud, maintenu à 100 % pendant des heures sur le chargeur, prend une moins bonne habitude.

## Vérifications intégrées avant d'installer quoi que ce soit

Ouvrez l'écran **Utilisation de la batterie** et cherchez les applications qui consomment de l'énergie alors que vous ne les avez pas utilisées. Une application de navigation après un trajet, c'est logique. Une application de shopping qui utilise 18 % de la batterie pendant la nuit ne l'est pas.

Redémarrez le téléphone. Vraiment. Un service bloqué peut maintenir le CPU actif pendant des heures, et un redémarrage efface cet état plus vite qu'une enquête dans chaque menu d'application.

Vérifiez les mises à jour récentes. Une mise à jour Android majeure, notamment Android 17 sur les Pixel actuellement puis les versions des fabricants, peut faire chauffer le téléphone pendant une journée, le temps d'optimiser les applications, de reconstruire les index et de terminer la synchronisation dans le cloud. Si la chaleur disparaît après 24-48 heures, il s'agissait probablement du travail de fond suivant la mise à jour.

Essayez le mode sans échec si la chaleur revient même après un redémarrage. Sur les Pixel, utilisez la combinaison du bouton d'alimentation correspondant à votre modèle, puis appuyez de manière prolongée sur **Éteindre** ou **Redémarrer** jusqu'à l'apparition de l'invite du mode sans échec. Ce mode désactive les applications téléchargées. Si l'appareil reste frais, une application tierce est probablement en cause.

## Vérifications avancées avec ADB

Si vous êtes à l'aise avec ADB, vous pouvez examiner les zones thermiques depuis un ordinateur :

```bash
adb shell for z in /sys/class/thermal/thermal_zone*; do echo "$z"; cat "$z/type"; cat "$z/temp"; done
```

De nombreuses valeurs sont exprimées en millièmes de degré Celsius, donc `38000` correspond à 38 °C. Lire les nombres n'est pas le plus difficile. Il faut surtout comprendre à quel capteur chacun correspond. Les fabricants nomment les zones thermiques différemment, et certains relevés sont bloqués ou peu utiles sur les versions grand public.

Pour les diagnostics au niveau des applications, les API thermiques publiques d'Android sont généralement plus propres. Android 10 a introduit les niveaux d'état thermique via `PowerManager`, et les versions plus récentes exposent aussi la marge thermique sur les appareils compatibles. Une valeur proche de 1,0 signifie que l'appareil approche d'un bridage sévère avec la charge de travail actuelle.

## Questions courantes

### Est-il normal qu'un téléphone soit chaud ?

Oui, pendant la recharge, les jeux, la navigation, les appels vidéo, le partage de connexion et les téléchargements volumineux. Un téléphone tiède n'est pas automatiquement en danger. C'est la chaleur au repos qui mérite une enquête.

### La surchauffe peut-elle endommager définitivement le téléphone ?

Une chaleur répétée touche surtout la batterie. Les batteries lithium-ion vieillissent plus vite lorsqu'elles restent chaudes, en particulier à un niveau de charge élevé. Les téléphones modernes se protègent en ralentissant, en interrompant la recharge, en désactivant certaines fonctions ou en s'éteignant avant d'atteindre le pire scénario.

### Faut-il fermer toutes les applications ?

Fermez l'application qui produit activement de la chaleur, comme un jeu, une session avec l'appareil photo, un éditeur vidéo ou une application de navigation. Ne passez pas votre temps à balayer toutes les applications inactives. Android gère mieux la mémoire que ne le laissent croire les anciens conseils sur les task killers.

### Pourquoi le téléphone chauffe-t-il pendant la recharge ?

La recharge crée de la chaleur dans la batterie. La recharge rapide en crée davantage. Utiliser le téléphone en même temps ajoute la chaleur du processeur et de l'écran. Si le téléphone chauffe dès que la recharge commence, essayez un chargeur plus lent, un autre câble et une recharge sans coque.

## En bref

Commencez par les outils du fabricant, puis utilisez une application de diagnostic si vous avez besoin d'un historique. Considérez les codes de numérotation comme un bonus, pas comme une garantie. Et si le téléphone est clairement trop chaud, ne continuez pas à le solliciter. Supprimez la source de chaleur, laissez-le refroidir, puis cherchez le schéma qui se répète.

*Meta description : Découvrez comment vérifier la température d'un téléphone Android, comment interpréter les températures sûres de la batterie et comment Android 17, les diagnostics Pixel, Samsung Members, la recharge, les applications et la puissance du signal influencent la surchauffe.*
