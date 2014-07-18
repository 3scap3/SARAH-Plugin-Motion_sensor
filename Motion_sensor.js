//La première action est déclenché par la detection de mouvements :
exports.standBy = function(motion, data, SARAH){
  console.log('========================================================================================================================================='); 	
  //On récupére l'état de motion : "motion is a boolean true/false"
  console.log('DEBUG exports.standBy STANDBY :');
  console.log('SATUT de motion = ' + motion);
  
  //On envoi la requette url du coter "export action"  avec l'etat de "motion" , pour pouvoire le récuperé dans "data" en appellant une fonction http
  var url = 'http://127.0.0.1:8080/sarah/Motion_sensor?motion=' + motion
  http(url);
}

//La deuxiéme action est declenchée par la premiére en simulant l'appélle du plugin , avec transmition de la variable motion :
exports.action = function(data, callback, config, SARAH){
  
  //Une fois la requette de l'export.stanBy envoyée , on peut recuperer les paramétres data avec la variable motion  et a config pour les url d'actions
  
  console.log('DEBUG exports.action STANDBY.');
  console.log('VARIABLE url_true du .prop = ' + config.modules.Motion_sensor.url_motion_true);
  console.log('VARIABLE url_false du .prop = ' + config.modules.Motion_sensor.url_motion_false);
  console.log('VARIABLE data.motion transmise par l exports.stanBy = ' + data.motion);
   
  //On affecte les variables passée par les objets en paramétre : 
  url_true = config.modules.Motion_sensor.url_motion_true;
  url_false = config.modules.Motion_sensor.url_motion_false;
  motion = data.motion
  
  console.log('VARIABLE Affecter motion = ' + motion);
  
  //Les deux blocs conditionelles qui déclenche l'url déclarée dans le point prop en fonction de la captation de mouvements :
  if (motion == 'true') {
	//Appelle la fonction pour executé la requette http
	var url = url_true;
	http(url);
	callback({'tts' : 'Motion = ' + data.motion});
  }
  
  if (motion == 'false') {
	var url = url_false;	
	//Appelle la fonction pour executé la requette http
	http(url);
	callback({'tts' : 'Motion = ' + data.motion});
  }
}

//Fonction http pour les requette :
function http(url){

var request = require('request');
 
request({ 'uri' : url }, function (err, response, body){

	if (err || response.statusCode != 200) {
		console.log('INFOS : L action a échoué');
		//callback({'tts': "L'action a échouée"});
		//console.log('=========================================================================================================================================');
	}
	else {
		console.log('INFOS : url poster dans la requette http : ' + url);
		console.log('INFOS : Tout est ok , la requette est éxécuter');
		//callback({'tts': 'Tout est ok , la requette est éxécutée' });
		//console.log('=========================================================================================================================================');
	}
	return;
	});
}
