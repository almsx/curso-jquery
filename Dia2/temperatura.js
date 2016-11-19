var temp = prompt('Ingresa Grados numerico ');
var conv = prompt('Ingresa Grados a Convertir');
var resultado;


function CalcularTemperatura(temperatura,tipo){
	
	var convertir;
	tipo = tipo.toUpperCase();

	if(tipo == 'C'){

		resultado = (temperatura - 32) / 1.8;
		convertir = 'F';


	}

	if(tipo == 'F'){
		resultado = (temperatura * 1.8 ) + 32;
		convertir = 'C';

	}

	console.log(temperatura + ' Grados ' + tipo + ' es igual a ' + resultado + ' '+convertir);

};



CalcularTemperatura(temp,conv);