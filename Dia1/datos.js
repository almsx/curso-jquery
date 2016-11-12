function misDatos(){

	//var anio = '1987';
	//var mes = '04';
	//var dia = '13';
	var anio = prompt('Ingresa tu Año de Nacimiento');
	var mes = prompt('Ingresa tu Fecha de Nacimiento');
	var dia = prompt('Ingesa tu dia');
	var nac  = new Date(anio, mes, dia); 
	var fechaHoy = new Date();
	
	var firstName = 'Alberto';
	var lastName = 'Luebbert';

	console.log('Hola '+firstName.toUpperCase() +' '+lastName.toLowerCase() + ' Tu fecha de Nacimiento es  '+anio+ ' / ' + mes + ' / '+dia);

	
	console.log('La fecha de hoy es '+fechaHoy.getFullYear() + ' / ' + fechaHoy.getMonth() + ' / ' +fechaHoy.getDate());

	function fecha(date1,date2){
  		
  		//date 1 es para la fecha de nacimiento
  		//date 2 es para leer la fecha del dia de hoy
  		//console.log('Fecha 1 Nacimiento'+date1);
  		//console.log('fecha 2 dia de hoy'+date2);

  		//Obtenemos milisegundos de un dia
  		var one_day=1000*60*60*24;

  		//obtenemos los milisegundos de ambas fechas
  		var date1_ms = date1.getTime();
  		var date2_ms = date2.getTime();

  		//Obtenemos los milisegundos entre ambas fechas
  		var difference_ms = date2_ms - date1_ms;
  		console.log(difference_ms);

  		//var nacimiento = new Date(date1.getFullYear() + 10, date1.getMonth(), date1.getDate());
		
		//return nacimiento;
		//console.log('nacimiento '+nacimiento);

		// Convertimos la diferencia de milisegundos a dias
		// Y por ultimo calculamos los dias entre numero de dias por año
		// usando la funcion floor redondea hacía abajo.
  		var dias = Math.round(difference_ms/one_day);
  		console.log('Tu edad es de '+Math.floor(dias/365) + ' años');

	}
	
	fecha(nac,fechaHoy);
	



};



      


/*
//Set the two dates
var y2k  = new Date(2000, 0, 1); 
var Jan1st2010 = new Date(y2k.getFullYear() + 10, y2k.getMonth(), y2k.getDate());
var today= new Date();
//displays 726
console.log( 'Days since ' 
           + Jan1st2010.toLocaleDateString() + ': ' 
           + Date.daysBetween(Jan1st2010, today));

};
*/

misDatos();