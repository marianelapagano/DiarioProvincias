//SCRIPT PARA CREAR UNA BARRA DE PROGRESO CUYA ANCHURA DEPENDE DEL PORCENTAJE DE SCROLL REALIZADO

//DETECCIÓN DE EVENTO Y LLAMADA A LA FUNCIÓN
        $(window).on('scroll',progresoBarra);

        //función de hacer crecer la barra en función de la posición del scroll
        function progresoBarra(){
            
            var scrollRealizado = $(window).scrollTop();
            
            //console.log(scrollRealizado);
            
            var altoTotal = $('body').innerHeight() - $(window).innerHeight();

            //console.log(altoTotal);

            var porCiento = scrollRealizado / altoTotal * 100;

            //console.log(porCiento);

            //Cambiar propiedad Width del elemento que hace aparecer la barra

            $('#progreso').css('width', porCiento + '%');

        }