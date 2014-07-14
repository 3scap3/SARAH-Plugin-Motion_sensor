var url_true;
var url_false;

exports.action = function(data, callback, config, SARAH){

	// Narrow to plugiin's config
  url_true = config.modules.standby.url_motion_true;
	url_false = config.modules.standby.url_motion_false;
	  
	// >>> your code here <<<
	  
	// Appelle la fonction pour executer la requette http
	//http();
	  
	  
	 //exports.standBy = function(motion){
	 //var etat_motion = motion
	 //console.log('DEBUG ACTION STANDBY.');
	 //}

	// callback({'tts' : text});
	callback({'tts' : 'pour linstant je ne sait pas '}); 
}

//exports.standBy = function(motion , data, SARAH){
exports.standBy = function(motion , data, callback, config, SARAH){
//exports.standBy = function(motion){
	 
	console.log('=========================================================================================================================================');
		 
	//motion is a boolean true/false
	var etat_motion = motion
	console.log('DEBUG ACTION STANDBY.');
	//callback({'tts' : 'motion est ' + etat_motion});

	var text = 'je suis en standbye';
	//PROBLEMES JE N ARRIVE PAS A ACCEDER AU PROP POUR DEFINIRE L URL PAR LE FICHIER DE CONFIG ...
  //url_true = config.modules.standby.url_motion_true;
	//url_false = config.modules.standby.url_motion_false;
  var url_true = 'votre url en dur pour du mouvment detecter';
	var url_false = 'votre url en dur en abscence de mouvement';

console.log('INFOS on est dans le plugin standby.');

	if (motion == true) {
		console.log('INFOS DEBUG la variable motion est : ' + motion); 
		
		//Appelle la fonction pour executer la requette http
		var url = url_true;
		http(url);
		
	}
		  
	if (motion == false) {
		console.log('INFOS DEBUG la variable motion est : ' + motion);
		
		var url = url_false;	
		//Appelle la fonction pour executer la requette http
		http(url);
	}

}


 //Fonction http pour les requette :
 function http(url){
  //var url = config.modules.requette_http.my_url;
  
  console.log('var url = ' + url);
  
  var request = require('request');
  
  request({ 'uri' : url }, function (err, response, body){
		if (err || response.statusCode != 200) {
		  console.log('INFOS : L action a échoué');
		  //callback({'tts': "L'action a échoué"});
		  console.log('=========================================================================================================================================');
		  }
		  else {
		  console.log('INFOS : Tout est ok , la requette est éxécuter');
		  //callback({'tts': 'Tout est ok , la requette est éxécuter' });
          console.log('=========================================================================================================================================');

		  }
		  return;
		});
	}
// callback({'tts' : text});	