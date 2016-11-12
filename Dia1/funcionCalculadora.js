function Calculadora(valor1,valor2,operacion){

	if(operacion == 'suma'){
		console.log('La suma de '+valor1 + ' y '+valor2 + ' es igual a '+(valor1+valor2));
	}

	if(operacion == 'resta'){
		console.log('La resta de '+valor1 + ' y '+valor2 + ' es igual a '+(valor1-valor2));
	}

	if(operacion == 'multi'){
		console.log('La multiplicación de '+valor1 + ' y '+valor2 + ' es igual a '+(valor1*valor2));
	}

	if(operacion == 'divi'){
		console.log('La división de '+valor1 + ' y '+valor2 + ' es igual a '+(valor1/valor2));
	}

};

var x = prompt('numero 1');
var vx = parseInt(x);
var y = 3;
Calculadora(vx,y,'suma');
Calculadora(vx,y,'resta');
Calculadora(vx,y,'multi');
Calculadora(vx,y,'divi');
