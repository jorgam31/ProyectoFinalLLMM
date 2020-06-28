$(document).ready(function(){

    var imgItems=$('.slider li').length;
    var imgPos = 1 // variable posicion imagenes utlizada en la funcion nextSlider
    for(i=1; i<=imgItems;i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }
    /*ocultar a todas las diapositivas y mostrar solo la primera.*/ 
    $('.slider li').hide(); // oculta todas las imagenes(diapositivas);
    $('.slider li:first').show(); // show() es una funcion que muestra algo
    $('.pagination li:first').css({'color':'#ff0000','background':'#ff0000'});
 
    /* HAY QUE CREAR 3 FUNCIONES  
        PARA QUE LA PAGINACION FUNCIONE
        LAS FLECHAS PARA QUE AVANCEN LAS IMAGENES PARA LA DERECHA
         LAS FLECHAS PARA QUE RETROCEDAN LAS IMAGENES PARA LA IZQUIERDA
 */
   $('.pagination li').click(pagination); // Evento clic llamamos a la funcion pagination
   $('.right span').click(nextSlider); // al pulsar la flecha derecha pasamos a la imagen siguiente
   $('.left span').click(prevSlider); // al pulsar la flecha izquierda pasamos a la imagen anterior

   // Para que sea automatico
   setInterval(function(){
        nextSlider();
   },4000)

   /* CREAMOS LAS FUNCIONES */
   function pagination(){
        // variable que almacena el index de todos mis objetos;
        // index empieza en 0 pero mi imagen se llamara 'imagen1.png' ponemos index()+1 para que pase a la primera imagen
        var paginationPos = $(this).index()+1;
        
        $('.slider li').hide();
        // para que funcione nth-child es una variable tenemos que usar + 
        $('.slider li:nth-child(' + paginationPos + ')').fadeIn(); // fadeIn efecto acepta como parametro milisegundos.
        
        $('.pagination li').css({'color':'#b4b4b4','background':'#b4b4b4'});
        $(this).css({'color':'#ff0000','background':'#ff0000'});

        imgPos = paginationPos; // si adelanto con las flechas pueda continuar con los circulos
    }
    
    function nextSlider(){ // para que funcione la flecha derecha 
        // variable para que coja la posicion de la imagen esta variable es global (declarada arriba)
        if(imgPos >= imgItems){ // si es mayor que 4 <- es lo que vale imgItems osea que hemos llegado al final
            // volvemos a la primera imagen osea a la primera posicion 
            imgPos = 1;
        }   else {
            // si no hemos llegado a 4 osea al final 
            imgPos++; // incrementamos en 1
        }
          //.pagination li -> son los circulos rojos  
        $('.pagination li').css({'color':'#b4b4b4','background':'#b4b4b4'});
       // $(this).css({'color':'#ff000','background':'#ff0000'});
       $('.pagination li:nth-child('+ imgPos+')').css({'color':'#ff0000','background:':'#ff0000'}); 
       
       // cuando vaya a llamar a una variable en la pseudoclase nth:child lo tengo que llamar entre los simbolos 
        // nth-child( ' +  nombrevariable  + ')
        $('.slider li').hide(); // oculta las fotos 
        $('.slider li:nth-child('+imgPos+')').fadeIn();
    }
    function prevSlider(){
           
        if(imgPos <= 1){ 
            imgPos = imgItems;
        }   else {
            imgPos--;
        }

        $('.pagination li').css({'color':'#b4b4b4','background':'#b4b4b4'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#ff0000','background':'#ff0000'});
        $('.slider li').hide(); // oculta las fotos 
        $('.slider li:nth-child(' + imgPos+ ')').fadeIn(); // animacion
    }
});