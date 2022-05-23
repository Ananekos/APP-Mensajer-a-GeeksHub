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


var nombreUsuario = document.getElementById("nom_usuario").innerHTML;
var fecha = new Date();

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
  
function sendMessage() {
  var message = document.getElementById("typing-box").value;
  var html = nombreUsuario + fecha +
        '<div class="message-box my-message-box">' +
        '<div class="message my-message"> ' + message + ' </div>' +
        '<div class="separator"></div>'

  document.getElementById("message-area").innerHTML += html;
  document.getElementById("typing-box").value = "";
  
}
