CREATE TABLE Coches( 
	idVehiculo INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	imagenVehiculo VARCHAR(500) NOT NULL DEFAULT 'images/coche.png',
	vehiculo TEXT NOT NULL, 
	modelo TEXT NOT NULL, 
	placas TEXT NOT NULL 
);