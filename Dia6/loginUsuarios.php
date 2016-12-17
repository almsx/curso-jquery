<?php
    
    include("../utils/conexion.php");
    session_start();

    //Seleccionamos lo campos y la query de nuestra BD

    $usuario = $_POST['txtUser'];
    $password = $_POST['txtPass'];

    $sql = "SELECT * FROM Usuarios WHERE usuario = '$usuario' AND contrasena = '$password'";
    //echo $sql;
    $result = mysqli_query($dbcon, $sql) or die("Error in Selecting " . mysqli_error($dbcon));

    /* Medir el resultado de la query */

    while($row=mysqli_fetch_array($result)){
            
        $nombre = $row[1];    
        $_SESSION['nombreApp'] = $nombre;
           
    }

    if (isset($_SESSION['nombreApp'])) {
            
            header("Location: inventario.html");
        
        
    } else {
            
        echo "Usuario Incorrecto, Intentar nuevamente.<br/>";
        echo "<a href=index.html>  Iniciar Sesion</a>";
        session_destroy();
    
    }
    
?>