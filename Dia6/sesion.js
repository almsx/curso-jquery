function leerSesion(){

    $.ajax({
        url: 'sesion.php',
        type: 'GET',
        success: function (respuesta){
            
            var obj = $.parseJSON(respuesta);
            console.log(obj);
            var acceso = obj;
            if(acceso == 'noExisteSesion'){
                window.location.href = "index.html";
            }

        }
    });

};

leerSesion();