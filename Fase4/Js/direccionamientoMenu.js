$(document).ready(function(){
    verPagina(1);
});
function verPagina(opcion){
    if (opcion==1) {
        $("#datos").load("./complementos/inicio.html");
    }else if (opcion==2) {
        $("#datos").load("./complementos/tema1.html");
    }else if (opcion==3) {
        $("#datos").load("./complementos/tema2.html");
    }else if (opcion==4) {
        $("#datos").load("./complementos/recurso1.html");
    }else if (opcion==5) {
        $("#datos").load("./complementos/recurso2.html");
    }else if (opcion==6) {
        $("#datos").load("./complementos/encuesta1.html");
    }else if (opcion==7) {
        $("#datos").load("./complementos/encuesta2.html");
    }else if (opcion==8) {
        $("#datos").load("./complementos/autor.html");
    }
        
}