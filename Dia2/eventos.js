function inicio(){

	/*

	Esta función se ejecutara después de 3 segundos
	mandando un alert con la frase Hola

	*/
	setTimeout(function(){
	 	alert("Hola"); 
	}, 3000);


	/*

	Esta función se ejecuta cada 2 segundos mostrando
	la fecha y hora actual del sistema.

	*/
	setInterval(function(){

		var diaHoy = new Date();
		var day = diaHoy.getDate();
		var mon = diaHoy.getMonth() +1;
		var year = diaHoy.getFullYear();
		var hora = diaHoy.getHours();
		var minu = diaHoy.getMinutes();
		var secon = diaHoy.getSeconds();

		console.log('hoy es ' + day + '/' + mon+'/'+year+ ' y son las '+hora+':'+minu+':'+secon);

	}, 2000);
}

window.onload = function() {

	//La siguiente linea ejecutara la función inicio
    inicio();
	
	/*
	
	Este codigo hace que el sitio despues de 3 segundos
	de haber cargado totalmente, redirecciona a google

	setTimeout(function(){
	 	window.location = "http://www.google.com";
	}, 3000);
	
	*/

};