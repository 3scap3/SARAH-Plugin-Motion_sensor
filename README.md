SARAH-Plugin-standby
====================

Plugin pour S.A.R.A.H permettant d'exploiter les fonctions de detection de mouvement du kinect


Motion_sensor
Le plugin Motion_sensor permet d'exploiter la fonction de captation de mouvement du kinect (standby) pour S.A.R.A.H.

Parametrage du fichier de proprietée Motion_sensor.prop :

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
      
L'orsque un mouvement est detecté une requette http est envoyée a l'url definite dans le champ url_motion_true.

Aprés un certain laps de temp (definit en ms par le parametre "standby" du custom.ini) , sans detection de mouvement , l'url definite dans le champ url_motion_false est appeler a son tour.

Pour integré le kinect dans votre installation domotique , pointer les url sur votre box en fonction de ses pre-requis.

NB :

Si votre sarah ecoute sur un port differend ou que le nodes js se trouve sur un ip distante (non localhost) vous devrez editer la ligne 9 du fichier Motion_sensor.js :

var url = 'http://127.0.0.1:8383/sarah/Motion_sensor?motion=' + motion

Pour afficher le status des variable dans la fenetre node js , voicis les phrases definit dans le fichier Motion_sensor.xml : :

statut
quel est ton etat
valeur standby
Exemple d'utilisation :

- Vous pouvez par exemple chainer se plugin avec le plugin kinect de jean philippe pour declenché une prise de photos en cas de detection de mouvement.

- Appeler la page d'un serveur web en (php js vbs) pour convertire la requette en language comprehensible par votre box (en fonction des api)

- Appeler directement une url de votre box domotique si celle ci prend en charge les requettes http

- n'hesiter a partager vos idées si vous en avez ^^

Voila , si vous aviez un detecteur de mouvement dans la piece ou se trouve le kinect de S.A.R.A.H vous pouvez le recuperé et le mettre ailleur ^^
