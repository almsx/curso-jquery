<?php 

include("../utils/conexion.php");

$cocheEliminar = $_POST['id'];

$queryEliminar = "DELETE FROM Coches WHERE idVehiculo = ".$cocheEliminar;

if(mysqli_query($dbcon, $queryEliminar)){
    	
    	echo json_encode("siElimino");
    	
} else { 
    	
    	echo json_encode("noElimino");

}


?>