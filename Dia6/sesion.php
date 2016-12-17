<?php 

session_start();

if (isset($_SESSION['nombreApp'])) {
            
        echo json_encode("siExisteSesion");
        
} else {
            
        echo json_encode("noExisteSesion");
    
}


?>