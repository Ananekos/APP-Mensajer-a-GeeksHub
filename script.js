

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



(function relojPrincipal() {

  let actualizarHora =function(){
      fecha = new Date(),
      horas = fecha.getHours(),
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear(),

  
      phoras = document.getElementById ("horas").innerHTML=horas,
      pminutos = document.getElementById ("minutos").innerHTML=minutos,
      psegundos = document.getElementById ("segundos").innerHTML=segundos,
      pdia = document.getElementById ("dia").innerHTML=dia,
      pmes = document.getElementById ("mes").innerHTML=mesesDelAño[mes],
      pyear = document.getElementById ("year").innerHTML=year;
    
      if (phoras < 10) {phoras = "0" + phoras};
      if (pminutos < 10) {pminutos = "0" + pminutos};
      if (psegundos < 10) {psegundos = "0" + psegundos};

  };

  actualizarHora();
  let intervalo = setInterval(actualizarHora,1000);

}())


let divUsuario = document.getElementById("nom_usuario").innerHTML;
let usuario = document.getElementById("nom_usuario").innerHTML = "Alumno@ BTC" ;


function sendMensaje() {

  let mensaje = document.getElementById("caja_escritura").value;
  let reloj = ("<p class='tiempo'>" + phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear + "</p>");
  let tiempo = (phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear);

  let html = divUsuario + reloj +
        '<div class="caja_mensajes mi-caja_mensajes">' +
        '<div class="mensaje mi-mensaje"> ' + mensaje + ' </div>' +
        '<div class="separator"></div>';

  document.getElementById("area_mensajes").innerHTML += html;
  document.getElementById("caja_escritura").value = "";

   let arrMensajes = [];
   arrMensajes.push(mensaje);
   for (let i =0; i<arrMensajes.length; i++){
    console.log('arrayMensajes', arrMensajes);
    nuevoItem = arrMensajes[i];
   }
   
   let InfoCanal = {
     Canal: arrCanales,
     Nombre: usuario,
     Tiempo: tiempo,
     Mensaje: mensaje
   }

   console.log(InfoCanal);
}




