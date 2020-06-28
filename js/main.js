function cerrar(){
     $('.publicidad').css('display','none'); /*FUNCION JQUERY*/ 
}
$(document).ready(function(){ // llamamos al body del documento html
     // cuando haga clic en el boton subir ...
     $('#flecha').click(function(){
         $('body,html').animate({
             scrollTop:'0px'  // va para arriba 
         
     },1800);
     }),
     // cuando HAGA SCROLL
     $(window).scroll(function(){
         if($(this).scrollTop() > 0){
             $('#flecha').slideDown(300);
         }else{
             $('#flecha').slideUp(300);
         }
     });
 });