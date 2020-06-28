
// Esta función me permite deshabilitar el desplazamiento. 
function deshabilitarDespl(){
    // La ventana estará fija en la coordenada X = 0 Y = 0
    window.scrollTo(0,0); 
}

// Cuando carge el documento html ...
$(document).ready(function(){  
    // El elemento con id 'super' por defecto estará oculto y 
    // se mostrará con una animación 'fadein' de 3000 milisegundos.
    // 'super' es el fondo blanco que no permite ver la página correctamente hasta que se cierre el anuncio.
 //   $("#super").hide().fadeIn(3000); 
   // $("#anuncio").hide().fadeIn(10000); // es el div del anuncio se mostrara con una animacion
  
   $("#super").hide().fadeIn(3000);
   $("#anuncio").hide().slideDown(3000);
    // Añado al documento html 'window'  un oyente.
    // Cuando el usuario intente hacer scroll, llamo a la función 'deshabilitarDespl'.
    window.addEventListener("scroll",deshabilitarDespl);
});

$(document).ready(function(){
        // Cuando el usuario haga clic en la 'X'.
        $("#cerrar").click(function(){
            // Oculto el div con id 'anuncio'.
            $("#anuncio").remove(); 
            // Oculto el div con id 'super'.
            $("#super").remove();
            // Quitamos el oyente que deshabilita el desplazamiento.
            // El usuario puede desplazarse por la página.
            window.removeEventListener("scroll",deshabilitarDespl);
        });
        //  O Si el usuario hace click en el botón 'MÁS INFORMACIÓN'. 
        // También ocultamos el anuncio y permitimos el desplazamiento por la página.
        $("#minfo").click(function(){
             // Oculto el div con id 'anuncio'
             $("#anuncio").remove(); 
             // Oculto el div con id 'super'
             $("#super").remove();
             // Quitamos el oyente que deshabilita el desplazamiento.
             // El usuario puede desplazarse por la página.
             window.removeEventListener("scroll",deshabilitarDespl);

        });

        
});
