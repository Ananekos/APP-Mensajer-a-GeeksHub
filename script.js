const btnAñadirCanales = document.querySelector(".btn_añadir_canales");
let arrCanales = [];

btnAñadirCanales.addEventListener("click", function (evento){
    arrCanales.push(prompt("Nombre del nuevo canal:"));
    let lista = document.createElement("li");
    for (let i =0; i<arrCanales.length; i++){
        console.log('arrayCanales', arrCanales);
        nuevoItem = arrCanales[i];
        lista.innerHTML = nuevoItem;
        listaCanales.appendChild(lista);
		
    }
});


function sendMessage() {
  var message = document.getElementById("typing-box").value;
  var html = '<div class="nombre_usuario"> Alumno@BTC </div>' +
        '<div class="message-box my-message-box">' +
        '<div class="message my-message"> ' + message + ' </div>' +
        '<div class="separator"></div>' +
        '</div>';
        
  document.getElementById("message-area").innerHTML += html;
  document.getElementById("typing-box").value = "";
  
}
