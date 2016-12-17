<?php 

session_start();

$usuario = $_SESSION['nombreApp'];
echo json_encode($usuario);


 ?>