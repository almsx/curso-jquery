<?php 

include("../utils/conexion.php");

/*

var_dump($_POST);

esta función permite conocer en forma de arreglo
todo lo que provenga de una petición tipo POST
a partir de un formulario

*/

$p_vehiculo = $_POST['txtMarca'];
$p_modelo = $_POST['txtModelo'];
$p_placas = $_POST['txtPlacas'];

$insertarCoche = "INSERT INTO Coches(vehiculo, modelo, placas) VALUES ('$p_vehiculo', '$p_modelo', '$p_placas')";

$run = mysqli_query($dbcon,$insertarCoche); 

header('Location: inventario.html');


?>