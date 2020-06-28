//con esto me refiero a todo el archivo html.
$(document).ready(function(){ // cuando lea el documento que automaticamente ejecute esta funcion 
    $(".submenu").click(function(){
        // cuando haga clic sobre los submenus sobre los hijos de ul aplique
        // la funcion slideToggle();
      $(this).children("ul").slideToggle();  
    }); 
    // cuando haga click en los ul haga esta funcion 
    $("ul").click(function(p){
        p.stopPropagation();
    });
});

 