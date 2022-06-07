const channels = [];

console.log(channels);

//01. CREACIÓN NUEVOS CANALES

function capturarcanal (){

  let inputNuevoCanal = prompt("Nombre Nuevo Canal", "Nuevo Canal");
  let reloj = (phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear);
  
  const newChannel = {
    name: inputNuevoCanal,
    messages: [],
  }
  channels.push(newChannel);
  console.log(channels);

  let lista = document.createElement ("button");
  lista.innerHTML = inputNuevoCanal;
  lista.className = 'btnNomCanal';
  lista.id = 'btnNomCanal';
  listaCanales.appendChild(lista);

  document.getElementById ("nom_cabecera").innerHTML = "<class='nom_cabecera'>" + inputNuevoCanal;

};


//02. CONTADOR DE TIEMPO

let mesesDelAño = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
(function Contador() {

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

}());

//03. ENVIANDO LOS MENSAJES

function enviarMensaje(){
  

  let mensajeEnviado = document.getElementById("caja_escritura").value;
  let reloj = (phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear);
  let usuarioCapturar = document.getElementById("nom_usuario").innerHTML = "Alumno@ BTC";

  const newMessage = {
    usuario: usuarioCapturar,
    mensaje: mensajeEnviado,
    fecha: reloj,
  }

  channels.push({messages:[newMessage], date: reloj });

  /*let btnCanal = document.getElementById("btnNomCanal").textContent;

  channels.forEach(object =>{
    if(object.name === btnCanal){
    } channels.push({messages:[newMessage], date: reloj });

});*/

 //03.1 Impriendo en pantalla
  
 let html = '<div id="nom_usuario"><img src="IMG/iconito_1.png" class="iconito_usuario"></div>' + 
 '<div class="usario_style">'+ usuarioCapturar + "<p class='tiempo'>" + "<p class='tiempo'>" + reloj +
 '<div class="mensaje"> ' + mensajeEnviado + ' </div>';

 document.getElementById("area_mensajes").innerHTML += html;
 document.getElementById("caja_escritura").value = "";

};

//04. RELACIONANDO CANAL CON SUS MENSAJES



  //function agregar (newMessage,channelActive){
    //console.log(channels);
//};

