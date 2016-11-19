function objetos(){

	var jugadores = {
		nombre: 'Dharwin',
		apellido: 'Quintero',
		playera: '3',
		posicion: 'Delantero',
		jersey: function(){
			return this.apellido + " " + this.playera
		}
	};

	console.log(jugadores.nombre);
	console.log(jugadores.jersey());


};

objetos();