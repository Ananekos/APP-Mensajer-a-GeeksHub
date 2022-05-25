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

let mesesDelAño = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];



(function () {

  var actualizarHora =function(){
      fecha = new Date(),
      horas = fecha.getHours(),
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear(),

  
      phoras = document.getElementById ("horas").textContent=horas,
      pminutos = document.getElementById ("minutos").textContent=minutos,
      psegundos = document.getElementById ("segundos").textContent=segundos,
      pdia = document.getElementById ("dia").textContent=dia,
      pmes = document.getElementById ("mes").textContent=mesesDelAño[mes],
      pyear = document.getElementById ("year").textContent=year
    
      
      pdia.textContent = dia;

      pmes.textContent = mesesDelAño [mes];

      pyear.textContent = year;

      if (horas < 10) {horas = "0" + horas};
      if (minutos < 10) {minutos = "0" + minutos};
      if (segundos < 10) {segundos = "0" + segundos};

      phoras.textContent = horas;
      pminutos.textContent = minutos;
      psegundos.textContent = segundos;

  };

  actualizarHora();
  var intervalo = setInterval(actualizarHora,1000);

}())


var nombreUsuario = document.getElementById("nom_usuario").innerHTML;


function sendMessage() {
  var message = document.getElementById("typing-box").value;
  var html = nombreUsuario +

        '<div class="message-box my-message-box">' +
        '<div class="message my-message"> ' + message + ' </div>' +
        '<div class="separator"></div>'

  document.getElementById("message-area").innerHTML += html;
  document.getElementById("typing-box").value = "";
  
}