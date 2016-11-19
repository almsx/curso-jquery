function cadenas(){

	//Cuanto mide una cadena y conocer la posición de un caracter
	var modeloCarro = "Volvo XC60";
	var unsoloCaracter = modeloCarro[6];
	console.log(unsoloCaracter);
	console.log('Mide Cadena '+modeloCarro.length);

	//Conocer posición de una palabra dentro de una cadena

	var nuevaCadena = "Localizar palabra 'localizar' por favor!";
	var posicionPalabra = nuevaCadena.indexOf("localizar");
	console.log(posicionPalabra);

	//Buscar la palabra "localizar" en la variable nuevaCadena

	var busquedaPalabra = nuevaCadena.search("localizar");
	console.log(busquedaPalabra);

	//Reemplaza texto en una cadena
	var cadenaReemplazo = "Uso Windows en mi maquina porque no me gusta Windows";
	console.log(cadenaReemplazo);
	var txt = cadenaReemplazo.replace("Windows", "Linux");
	console.log(txt);
	var txt2 = txt.replace("Windows", "MACOS");
	console.log(txt2);

	//Metodo Split donde imprimira la letra A
	var cadenaComas = "a,b,c,d,e,f";
	var arr = cadenaComas.split(",");
	console.log(arr[0]);
	console.log(arr);






};

cadenas()