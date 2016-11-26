function tablaPersona(){

	var personas = [{
		apellidoPaterno: 'luebbert',
		apellidoMaterno: 'mendoza',
		nombres: 'alberto tadeo',
		anioNac: '1987',
		mes: '5',
		dia: '13',
		edad: function(){

			var date2 = new Date();
			var date1 = new Date(this.anioNac, this.mes, this.dia); 

			//Obtenemos milisegundos de un dia
  			var one_day=1000*60*60*24;

  			//obtenemos los milisegundos de ambas fechas
  			var date1_ms = date1.getTime();
  			var date2_ms = date2.getTime();

  			//Obtenemos los milisegundos entre ambas fechas
  			var difference_ms = date2_ms - date1_ms;
  			console.log(difference_ms);

  			// Convertimos la diferencia de milisegundos a dias
			// Y por ultimo calculamos los dias entre numero de dias por año
			// usando la funcion floor redondea hacía abajo.
  			var dias = Math.round(difference_ms/one_day);
  			//console.log('Tu edad es de '+Math.floor(dias/365) + ' años');
  			var edadTotal = Math.floor(dias/365);
  			return edadTotal;

		},
		rfcCompleto: function(){
			
			var rfc;
			var aPat;
			var auxPaterno = (this.apellidoPaterno).toUpperCase();
			var auxPat = auxPaterno.search("DE LA");
			
			if(auxPat == 0){
				
				aPat = this.apellidoPaterno[6] + this.apellidoPaterno[7];

			} else {

				//Validar que la segunda letra sea A, E, I, O U (vocal)
				var vocal = (this.apellidoPaterno[1]).toUpperCase();
				console.log(vocal);

				if(vocal == 'A' || vocal == 'E' || vocal == 'I' || vocal == 'O' || vocal == 'U'){
					
					aPat = this.apellidoPaterno[0] + this.apellidoPaterno[1];
				
				} else {
					
					aPat = this.apellidoPaterno[0] + this.apellidoPaterno[2];
				
				}
			

			}


			var aMat = this.apellidoMaterno[0];
			var name = this.nombres[0];
			
			var year;
			var mes;
			var dia;
			
			if(this.anioNac.length == 4){
				year = this.anioNac[2] + this.anioNac[3];
			} else {
				year = this.anioNac;
			}

			if(this.mes.length == 1){
				mes = '0'+this.mes;
			} else {
				mes = this.mes;
			}

			if(this.dia.length == 1){
				dia = '0'+this.dia;
			} else {
				dia = this.dia;
			}

			//Revisar que no tenga las primeras 4 letras
			//frases altisonantes

			var letras = aPat + aMat + name;
			letras = letras.toUpperCase();

			var auxAltisonantes = letras.search("PENE");
			var auxAltisonantes2 = letras.search("MAME");
			var auxAltisonantes3 = letras.search("MAMO");
			//var txt = cadenaReemplazo.replace("Windows", "Linux");
			var reemplazoLetras;
			
			if(auxAltisonantes == 0 || auxAltisonantes2 == 0 || auxAltisonantes3 == 0){
				reemplazoLetras = aPat + aMat + "X";
			} else {
				reemplazoLetras = letras;
			}


			rfc = reemplazoLetras + year + mes + dia + '-XXX';
			rfc = rfc.toUpperCase();
			return rfc;


		}
	}, {
		apellidoPaterno: 'martinez',
		apellidoMaterno: 'fernandez',
		nombres: 'francisco fernando',
		anioNac: '1985',
		mes: '12',
		dia: '11',
		edad: function(){

			var date2 = new Date();
			var date1 = new Date(this.anioNac, this.mes, this.dia); 

			//Obtenemos milisegundos de un dia
  			var one_day=1000*60*60*24;

  			//obtenemos los milisegundos de ambas fechas
  			var date1_ms = date1.getTime();
  			var date2_ms = date2.getTime();

  			//Obtenemos los milisegundos entre ambas fechas
  			var difference_ms = date2_ms - date1_ms;
  			console.log(difference_ms);

  			// Convertimos la diferencia de milisegundos a dias
			// Y por ultimo calculamos los dias entre numero de dias por año
			// usando la funcion floor redondea hacía abajo.
  			var dias = Math.round(difference_ms/one_day);
  			//console.log('Tu edad es de '+Math.floor(dias/365) + ' años');
  			var edadTotal = Math.floor(dias/365);
  			return edadTotal;

		},
		rfcCompleto: function(){
			
			var rfc;
			var aPat;
			var auxPaterno = (this.apellidoPaterno).toUpperCase();
			var auxPat = auxPaterno.search("DE LA");
			
			if(auxPat == 0){
				
				aPat = this.apellidoPaterno[6] + this.apellidoPaterno[7];

			} else {

				//Validar que la segunda letra sea A, E, I, O U (vocal)
				var vocal = (this.apellidoPaterno[1]).toUpperCase();
				console.log(vocal);

				if(vocal == 'A' || vocal == 'E' || vocal == 'I' || vocal == 'O' || vocal == 'U'){
					
					aPat = this.apellidoPaterno[0] + this.apellidoPaterno[1];
				
				} else {
					
					aPat = this.apellidoPaterno[0] + this.apellidoPaterno[2];
				
				}
			

			}


			var aMat = this.apellidoMaterno[0];
			var name = this.nombres[0];
			
			var year;
			var mes;
			var dia;
			
			if(this.anioNac.length == 4){
				year = this.anioNac[2] + this.anioNac[3];
			} else {
				year = this.anioNac;
			}

			if(this.mes.length == 1){
				mes = '0'+this.mes;
			} else {
				mes = this.mes;
			}

			if(this.dia.length == 1){
				dia = '0'+this.dia;
			} else {
				dia = this.dia;
			}

			//Revisar que no tenga las primeras 4 letras
			//frases altisonantes

			var letras = aPat + aMat + name;
			letras = letras.toUpperCase();

			var auxAltisonantes = letras.search("PENE");
			var auxAltisonantes2 = letras.search("MAME");
			var auxAltisonantes3 = letras.search("MAMO");
			//var txt = cadenaReemplazo.replace("Windows", "Linux");
			var reemplazoLetras;
			
			if(auxAltisonantes == 0 || auxAltisonantes2 == 0 || auxAltisonantes3 == 0){
				reemplazoLetras = aPat + aMat + "X";
			} else {
				reemplazoLetras = letras;
			}


			rfc = reemplazoLetras + year + mes + dia + '-XXX';
			rfc = rfc.toUpperCase();
			return rfc;


		}
	}];

	//console.log('la tabla mide '+personas.length);

	$(document).ready(function(){

		
		var datosPersona = '';
		
		for (var i = 0; i < personas.length; i++) {
    		
    		var personaRFC = personas[i];
    		var cumpleContribuyente;

    		var mes = personaRFC.mes;
    		var dia = personaRFC.dia;
    		var ano = personaRFC.anioNac;
    		var mesStyle;
    		var anoStyle;
    		var diaStyle;

    		if(mes.length == 1){
    			mesStyle = '0'+mes;
    		} else {
    			mesStyle = mes;
    		}

    		if(dia.length == 1){
    			diaStyle = '0'+dia;
    		} else {
    			diaStyle = dia;
    		}

    		if(ano.length == 2){
    			anoStyle = '19'+ano;
    		} else {
    			anoStyle = ano;
    		}

    		cumpleContribuyente = diaStyle + '-'+mesStyle + '-'+ anoStyle;

    		datosPersona +=  "<tr> \
    				<td class='td col1'>"+personaRFC.nombres +"</td> \
        	        <td class='td col2'>"+personaRFC.apellidoPaterno +"</td> \
        	        <td style='border:3px solid yellowgreen;'>"+personaRFC.apellidoMaterno +"</td> \
        	        <td class='td col4'>"+cumpleContribuyente+"</td> \
        	        <td class='td col5'>"+personaRFC.edad() +"</td> \
        	        <td class='td col6'>"+personaRFC.rfcCompleto() +"</td> \
        	    	</tr>";
			
		}
	
		$('#datosRFC').html(datosPersona);




	});


};

tablaPersona();