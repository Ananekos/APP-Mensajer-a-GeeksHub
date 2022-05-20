const btnAñadirCanales = document.querySelector(".btn_añadir_canales");
const btnAñadirMensaje = document.querySelector(".btn_añadir_canales");
var arrCanales = [];



btnAñadirCanales.addEventListener("click", function (evento){
    arrCanales.push(prompt("Nombre del nuevo canal:"));
    var lista = document.createElement("li");
    for (var i =0; i<arrCanales.length; i++){
        console.log('arrayCanales', arrCanales);
        nuevoItem = arrCanales[i];
        lista.innerHTML = nuevoItem;
        listaCanales.appendChild(lista);
		
    }
});

