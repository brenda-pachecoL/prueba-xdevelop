//menu hamburgues
 
var contenedorMenu =document.getElementById("contenedor-hamburguesa");
var contenedorBody = document.getElementById("contenedor-body");
function desplegarMenuHamburguesa (){

   contenedorMenu.classList.add('active');
   contenedorMenu.classList.remove('disabled');
   contenedorBody.style.overflow = "hidden";
}
function cerrarMenuHamburguesa (){
    contenedorMenu.classList.remove("active");
    contenedorMenu.classList.add('disabled');
    contenedorBody.style.overflow = "initial";
}