<?php
    
    //Abrimos BD
    $connection = mysqli_connect("localhost","root","","Vehiculos") or die("Error " . mysqli_error($connection));

    //Seleccionamos lo campos y la query de nuestra BD
    $sql = "select * from Coches";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //Creamos un arreglo de informacion
    $emparray = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    //Generamos el JSON de nuestra query
    echo json_encode($emparray);

    //Cerramos la conexion
    mysqli_close($connection);
    
?>