SARAH-Plugin-standby
====================

Plugin pour S.A.R.A.H permettant d'exploiter les fonctions de détection de mouvement du kinect.


## Motion_sensor

Le plugin Motion_sensor permet d'exploiter la fonction de captation de mouvement du kinect (standby) pour S.A.R.A.H.

Paramétrage du fichier de propriétés `Motion_sensor.prop` :
```json
			{
			  "modules": { 
				"standby": {
				  "description": "plugin pour interagir avec le fonctionalités de detection de mouvement de sarah , ou comment recuperer un ms13 gratos ^^",
				  "version": "0.2",
				  "url_motion_true": "http://xxx.xxx.xxx.xxx/on",
				  "url_motion_false": "http://xxx.xxx.xxx.xxx/off"
				}
			  }
			} 
```

Lorsque un mouvement est detecté, une requête http est envoyée à l'url définie dans le champ `url_motion_true`.

Après un certain laps de temps (défini en ms par le paramètre "standby" du custom.ini) sans détection de mouvement, l'url définie dans le champ `url_motion_false` est appelée à son tour.

Pour integrer le kinect dans votre installation domotique, pointez les urls sur votre box en fonction de ces pré-requis.

Pour afficher le statut des variables dans la fenêtre NodeJS, voici les phrases définies dans le fichier `Motion_sensor.xml` :
  - statut
  - quel est ton etat
  - valeur standby

Exemple d'utilisation :
  - Vous pouvez par exemple chainer ce plugin avec le plugin kinect de Jean Philippe pour déclencher une prise de photo en cas de détection de mouvement.
  - Appeler la page d'un serveur web en (php/js/vbs) pour convertir la requête en langage compréhensible par votre box (en fonction des api)
  - Appeler directement une url de votre box domotique si celle-ci prend en charge les requêtes http
  - N'hésitez pas à partager vos idées si vous en avez ^^

Voilà, si vous aviez un détecteur de mouvement dans la piece où se trouve le kinect de S.A.R.A.H vous pouvez le récuperer et le mettre ailleur ^^
