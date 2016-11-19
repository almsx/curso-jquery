function obtenerRFC(){

	var persona = {
		apellidoPaterno: 'martinez',
		apellidoMaterno: 'morales',
		nombres: 'ernesto',
		anioNac: '1987',
		mes: '5',
		dia: '13',
		fechaCompleta: '2016-11-19 13:49:33',
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
	};

	console.log('Nombre(s) : '+persona.nombres);
	console.log('Apellido Paterno : '+persona.apellidoPaterno);
	console.log('Apellido Materno : '+persona.apellidoMaterno);
	console.log('Año de Nacimiento : '+persona.anioNac);
	console.log('Mes de Nacimiento : '+persona.mes);
	console.log('Día de Nacimiento : '+persona.dia);
	console.log('RFC Completo es '+persona.rfcCompleto());



};

obtenerRFC();