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
let meses = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",]

var fecha = new Date();
let datedia = fecha.getDate();
let datemes = fecha. getMonth();
let dateyear = fecha.getFullYear();
let datehoras = fecha.getHours();
let dateminutos = fecha.getMinutes();
let datesegundos = fecha.getSeconds();

/* var FechaYHora = {
pDia : document.getElementById("dia").textContent=dia,
pMes : document.getElementById("mes").textContent=mes,
pyear : document.getElementById("year").textContent=years,
pHoras : document.getElementById("horas").textContent=horas,
pMinutos : document.getElementById("minutos").textContent=minutos,
pSegundos : document.getElementById("segundos").textContent=segundos
}*/

let pDia =document.getElementById("dia").textContent=datedia,
    pMes = document.getElementById("mes").textContent=meses [datemes],
    pYear = document.getElementById("year").textContent=dateyear,
    pHoras = document.getElementById("horas").textContent=datehoras,
    pMinutos = document.getElementById("minutos").textContent=dateminutos,
    pSegundos = document.getElementById("segundos").textContent=datesegundos;
    
    console.log (pMes);


  
function sendMessage() {
  var message = document.getElementById("typing-box").value;
  var html = nombreUsuario + 
        '<d3 id="dia" class="dia">' + "  " + pHoras + ' </d3>' +
        '<d3 id="dia" class="dia">' +":"+ pMinutos + ' </d3>' +
        '<d3 id="dia" class="dia">' +":"+ pSegundos + ' </d3>' +
        '<d5 id="dia" class="dia">' +" | "+ pDia + ' </d5>' +
        '<d5 id="dia" class="dia">' +" de "+ pMes + ' </d5>' +
        '<d5 id="dia" class="dia">' +" del "+ pYear + ' </d5>' +
        '<div class="message-box my-message-box">' +
        '<div class="message my-message"> ' + message + ' </div>' +
        '<div class="separator"></div>'
        

  document.getElementById("message-area").innerHTML += html;
  document.getElementById("typing-box").value = "";
  
}
