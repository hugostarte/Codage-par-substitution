var abonnements = function() {
	var caculer = document.getElementById('calculer').addEventListener("click", calculer);	
	var calculerlettre = document.getElementById('calculerlettre').addEventListener("click", codetexte);	
}
window.addEventListener("load",abonnements);// lance la fonction abonnements après le chargement de ma page

var calculer = function(){
	var resultat = document.getElementById("resultat");
	resultatCodage= "";
	nombre = document.getElementById('nombre').value;
	

	var k = 0;
	resultat0 = "";
	while(k == 0){
		var somme = 0;
		for (var i = 0; i < nombre.length; i++) {
			if(nombre.charAt(i) == 0){
				somme = somme + 1;
				resultat0 = somme;}
		} k = 1;
	} 
	 if(nombre != ""){
		chaine = nombre.length;
		for (i=0; i<chaine; i++){
		resultatCodage += 9 - nombre.charAt(i) ;}
	resultat.innerHTML = "Il y a <b>" + resultat0 + "</b> zéro dans le nombre saisi. </br><b> "+nombre + "</b> correspond à <b>" +resultatCodage + "</b> en codage par substitution.";
	}
		 else {
		resultat.innerHTML = " <span id='erreur'>Veuillez saisir un nombre ! </span>";
	}
	
}

var codetexte = function(){
	var resultatlettre = document.getElementById("resultatlettre");
	lettre = document.getElementById('lettre').value;
	var k = 0;
	affiche = "";
	while(k == 0 ){
		for (var i=0; i < lettre.length; i++){
			ASCII = lettre.charCodeAt(i);
			if(ASCII <= 122 && ASCII >= 97 ){
				affiche += String.fromCharCode(219 - ASCII);
			}else{
				affiche = "<span id='erreur'>Votre message doit être saisi en lettre minuscule ! </span>";
			}
			resultatlettre.innerHTML = affiche;
			}
	k = 1;
	}
	
}