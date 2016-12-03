function hoyNoCircula(){

	var vehiculosData = [{
		idVe: '1',
		vehiculo: 'Versa',
		modelo: '2016',
		placas: 'XME-2293'
	},
	{
		idVe: '2',
		vehiculo: 'BMW',
		modelo: '2015',
		placas: 'XMZ-2238'
	},{
		idVe: '3',
		vehiculo: 'AVEO',
		modelo: '2012',
		placas: 'XME-2296'
	},{
		idVe: '4',
		vehiculo: 'VW',
		modelo: '2009',
		placas: 'XME-2387'
	},{
		idVe: '5',
		vehiculo: 'Atos',
		modelo: '2007',
		placas: 'XME-2290'
	},{
		idVe: '6',
		vehiculo: 'Versa',
		modelo: '2012',
		placas: 'XME-2292'
	},{
		idVe: '7',
		vehiculo: 'BMW',
		modelo: '2002',
		placas: 'XME-2290'
	},{
		idVe: '8',
		vehiculo: 'Chevrolet',
		modelo: '2013',
		placas: 'XME-2299'
	},{
		idVe: '9',
		vehiculo: 'VW',
		modelo: '2001',
		placas: 'XME-2291'
	},{
		idVe: '10',
		vehiculo: 'ATOS',
		modelo: '1995',
		placas: 'XME-2292'
	}
	];

	$(document).ready(function(){

		var vehiculo;
		for (var i = 0; i < vehiculosData.length; i++) {
    		
    		var coches = vehiculosData[i];

    		function semanal(parametro){
    		
				/*Obtener el ultimo digito de la placa*/
				var ultimoCaracter = parametro.substring(parametro.length-1);
				
				var dia;

				if(ultimoCaracter == '1' || ultimoCaracter == '2'){
					dia = 'Jueves';
				}

				if(ultimoCaracter == '3' || ultimoCaracter == '4'){
					dia = 'Miércoles';
				}

				if(ultimoCaracter == '5' || ultimoCaracter == '6'){
					dia = 'Lunes';
				}

				if(ultimoCaracter == '7' || ultimoCaracter == '8'){
					dia = 'Martes';
				}

				if(ultimoCaracter == '9' || ultimoCaracter == '0'){
					dia = 'Viernes';
				}
			
				return dia;
			

			};

			function sabatino(parametro){
    		
				/*Obtener el ultimo digito de la placa*/
				var ultimoCaracter = parametro.substring(parametro.length-1);
				
				var dia;

				if(ultimoCaracter == '1' || ultimoCaracter == '2'){
					dia = '4to Sábado';
				}

				if(ultimoCaracter == '3' || ultimoCaracter == '4'){
					dia = '3er Sábado';
				}

				if(ultimoCaracter == '5' || ultimoCaracter == '6'){
					dia = '1er Sábado';
				}

				if(ultimoCaracter == '7' || ultimoCaracter == '8'){
					dia = '2do Sábado';
				}

				if(ultimoCaracter == '9' || ultimoCaracter == '0'){
					dia = '5to Sábado';
				}
			
				return dia;
			

			};

			function color(parametro){
    		
				/*Obtener el ultimo digito de la placa*/
				var ultimoCaracter = parametro.substring(parametro.length-1);
				
				var dia;

				if(ultimoCaracter == '1' || ultimoCaracter == '2'){
					dia = '#5bac26';
				}

				if(ultimoCaracter == '3' || ultimoCaracter == '4'){
					dia = '#d43434';
				}

				if(ultimoCaracter == '5' || ultimoCaracter == '6'){
					dia = '#e0cd2a';
				}

				if(ultimoCaracter == '7' || ultimoCaracter == '8'){
					dia = '#dc45f3';
				}

				if(ultimoCaracter == '9' || ultimoCaracter == '0'){
					dia = '#a8ddef';
				}
			
				return dia;
			

			};

			function Verificacion(parametro){

				/*si el coche es menor a 2 años
				es nuevo y por ende se le entrega
				doble cero y circula diario y no verifica
				por 2 años proximos */

				/*si tiene de 2 a 7 años
				se le entrega la 0 y circula diario
				pero verifica cada año.
				*/

				/*si es entre 7 y 14 
				se le entrega la 1, verifica cada año
				y descansa un sabado par o impar*/

				/*si es mayor a 15 años
				se entrega la 0, verifica cada año
				y desccana todos los sabadoss*/

				var verificacion;
				var fechaActual = new Date();
				var anoActual = fechaActual.getFullYear();
				
				var edadVehiculo = anoActual - parametro.anoVeri;

				//console.log(parametro);
				//return edadVehiculo;

				
				//return edadVehiculo;
				if (edadVehiculo <= 2){
					
					verificacion = '0 - No verifica por 2 años - Circula Diario';
				
				} else if (edadVehiculo >= 3 && edadVehiculo <=14){

					var placas = parametro.plaVeri;
					var ultimoCaracter = placas.substring(placas.length-1);

					if(ultimoCaracter % 2 == 0){
						//Aqui es par
						verificacion = '1 - Verifica cada año - Descansa 2do y 4to Sábado';
					} else {
						//es impar
						verificacion = '1 - Verifica cada año - Descansa 1er y 3er Sábado';
					}

					

				} else if (edadVehiculo >=15){
					verificacion = '2 - Verifica cada año - Descansa todos los Sabádos.';
				}

				return verificacion;
				

			}

			var objetoVerificacion = {
				anoVeri: coches.modelo,
				plaVeri: coches.placas
			};

			function imgVehiculo(){
				
				return 'http://www.anuri.es/wp-content/uploads/2016/03/vehiculousado.jpg';
			
			};

    		vehiculo +=  "<tr> \
    				<td class='td col1'>"+coches.idVe +"</td> \
    				<td class='td col2'><img width=40px height=40px id='theImg' src='"+imgVehiculo()+"' /></td> \
        	        <td class='td col3'>"+coches.vehiculo +"</td> \
        	        <td class='td col4'>"+coches.modelo +"</td> \
        	        <td class='td col5'>"+coches.placas +"</td> \
        	        <td class='td col6'>"+semanal(coches.placas) +"</td> \
        	        <td class='td col7'>"+sabatino(coches.placas) +"</td> \
        	        <td class='td col8' style='background-color: "+color(coches.placas)+";'></td> \
        	        <td class='td col9'>"+Verificacion(objetoVerificacion) +"</td> \
        	        </tr>";
			
		}
	
		$('#datosCoche').html(vehiculo);




	});

};

hoyNoCircula();