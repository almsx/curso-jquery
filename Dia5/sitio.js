function leerJSON(){

	$.ajax({
        
        url:   'GenerarJSON.php',
        type:  'GET',
        success:  function (response) {
            
            console.log(response);
            var obj = $.parseJSON(response);

            var tam = obj.length;
            console.log('mide '+tam);
            
                        

        }
    
    });

};

leerJSON();


