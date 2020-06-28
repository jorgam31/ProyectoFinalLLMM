
        function cerrar(){
         var modal = document.getElementById("modal").setAttribute("style","display:none");
         
     }

     setTimeout("cerrar",3000);


     function validar(){

         var nombre,apellidos,correo,
         exprecorreo,exprenombre, expreapell,campotexto;
         
         nombre = document.getElementById('nombre').value;

         apellidos = document.getElementById('apellidos').value;
         correo = document.getElementById('correo').value;
         
         exprecorreo = /\w+@\w+\.[a-z]{2,3}/; // w -> todo lo alfanumerico + -> se puede repetir @ \w alfanumerico \. -> obligatoriamente un punto
         exprenombre = /^[a-z]{3,15}$/i;
         expreapell = /^[a-z]+\s+[a-z]{5,50}/;
         
             campotexto = document.getElementById('textarea').value;
         var mensajemostrado = document.getElementById('pmensaje');
         if(nombre == "" || apellidos == "" || correo == "" || campotexto == ""){
              modal.setAttribute("style","display:block");
              mensajemostrado.innerHTML="Houston, Tenemos un problema: Debes rellenar todos los campos";
         }else if(!exprenombre.test(nombre)){  
             /*alert("nombre contiene caracteres no validos");*/
              modal.setAttribute("style","display:block");
              mensajemostrado.innerHTML="Nombre contiene caracteres no validos";
             return false;    
         }else if(!expreapell.test(apellidos)){  
             modal.setAttribute("style","display:block");
              mensajemostrado.innerHTML="Debes Completar con dos apellidos";
             return false;    
         }else if(!exprecorreo.test(correo)){
             modal.setAttribute("style","display:block");
              mensajemostrado.innerHTML="Correo no valido. Debes introducir un correo valido.";
             return false; 
         }else{
            
             modal.setAttribute("style","display:block");
              mensajemostrado.innerHTML="Gracias por contactar con nosotros.\n Recibirá una respuesta a su correo que ha proporcionado.";
         }
         }  

         function revisar(elemento){
             if(elemento.value==''){
                 elemento.className='error';
                 } else{
                 elemento.className='input-100';
             }


         }

 