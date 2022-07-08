const channels = [];
let channelIndex = 0;
let currentChannel = null;

console.log(channels);

//01. CREACIÓN CANALES

function capturarcanal() {

  let inputNuevoCanal = prompt("Nombre Nuevo Canal", "Nuevo Canal");

  const newChannel = {
    name: inputNuevoCanal,
    id: 'canal-' + channelIndex,
    pos: channelIndex,
    messages: [],
  }

  channels.push(newChannel);
  console.log('Canales', channels);

  let botonNuevoCanal = '<button class="btnNomCanal" onclick="openChannel(' + newChannel.pos + ')" id="' + newChannel.id + '">' + newChannel.name + '</button>';
  listaCanales.innerHTML += botonNuevoCanal;
  currentChannel = newChannel.pos;

  //02. MOSTRANDO LA INTERFAZ COMPLETA AL CREAR NUEVO CANAL

  if (channels.length == 1) {
    document.getElementById("area_escritura").innerHTML =
      '<div class="area_escritura" >' +
      '<button class="boton_enviar" id="boton_enviar" onclick="enviarMensaje()"><i class="fa fa-plus"aria-hidden="true"></i></button>' +
      '<textarea class="caja_escritura" id="caja_escritura"></textarea>' +
      '</div>';
    document.getElementById("area_cabecera").innerHTML =
      '<div id=toda_cabecera>' +
        '<div id=nom_cabecera class="nom_cabecera">Nombre del canal</div>' +
        '<br>' +
        '<d4>Tú, Olivia Montes, Isabel Carballo</d4>' +
      '</div>' +

      '<div id="todo_busqueda">' +
        '<div class="barra_busqueda">' +
          '<button id="boton_busqueda" class="boton_busqueda" onclick="search()"><i class="fa fa-search" aria-hidden="true"></i></button>' +
          '<input type="text" id="input_busqueda" class="input_busqueda">' +
        '</div>' +
      '</div>'
  }

  openChannel(newChannel.pos);
  channelIndex++;
};

//03. ABRIENDO NUEVOS CANALES

function openChannel(ChannelPos) {
  document.getElementById("nom_cabecera").innerHTML = channels[ChannelPos].name;
  currentChannel = ChannelPos;
  console.log('Open Channel', channels[ChannelPos]);
  document.getElementById("area_mensajes_nuevos").innerHTML =
    '<div id="nom_interlocutor"><img src="IMG/iconito_2.png" class="iconito_usuario">' +
    '<d2> Olivia Montes </d2>' +
    '<d3>12:15:23</d3>' +
    '<d3> | 5 de Febrero del 2022</d3>' +
    '</div>' +
    '<div class="caja_mensajes otros-caja_mensajes">' +
    '<div class="mensaje otros-mensaje"> Hola, ¿qué tal?. Bienvenid@ al canal.</div>';

  if (channels[ChannelPos].messages.length > 0) {
    for (let message of channels[ChannelPos].messages) {
      pintarMensaje(message);
    }
  }

}

//04. BUSCANDO MENSAJES ENVIADOS

function search() {
  let results = '';
  let value = document.getElementById("input_busqueda").value;
  let listaMensajes = channels[currentChannel].messages;
  for (let messageItem of listaMensajes) {
    if (messageItem.mensaje.includes(value)) {
      //results.push(messageItem);
      results += '-' + messageItem.usuario + ': ' + messageItem.mensaje + ', ' + messageItem.fecha + '\n'
    }
  }
  if (results == "") {
    results = 'Mensaje no encontrado'
  }
  alert(results);
  console.log('resultados', results);
}

//05. CONTADOR DE TIEMPO

let mesesDelAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",];
(function Contador() {

  let actualizarHora = function () {
    fecha = new Date(),
      horas = fecha.getHours(),
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear(),


      phoras = document.getElementById("horas").innerHTML = horas,
      pminutos = document.getElementById("minutos").innerHTML = minutos,
      psegundos = document.getElementById("segundos").innerHTML = segundos,
      pdia = document.getElementById("dia").innerHTML = dia,
      pmes = document.getElementById("mes").innerHTML = mesesDelAño[mes],
      pyear = document.getElementById("year").innerHTML = year;

    if (phoras < 10) { phoras = "0" + phoras };
    if (pminutos < 10) { pminutos = "0" + pminutos };
    if (psegundos < 10) { psegundos = "0" + psegundos };

  };

  actualizarHora();
  let intervalo = setInterval(actualizarHora, 1000);

}());

//06. ENVIANDO LOS MENSAJES

function enviarMensaje() {
  console.log('enviarMensaje', channels[currentChannel]);
  let mensajeEnviado = document.getElementById("caja_escritura").value;
  if (mensajeEnviado != '') {
    let reloj = (phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear);
    let usuarioCapturar = document.getElementById("nom_usuario").innerHTML = "Alumno@ BTC";

    const newMessage = {
      usuario: usuarioCapturar,
      mensaje: mensajeEnviado,
      fecha: reloj,
    }

    channels[currentChannel].messages.push(newMessage);
    pintarMensaje(newMessage);
    console.log('mensaje', newMessage);
  }
};

function pintarMensaje(newMessage) {
  let html =
  '<div id="nom_interlocutor"><img src="IMG/iconito_1.png" class="iconito_usuario">' +
  '<d2>' + newMessage.usuario + '</d2>' +
  ' <d3>' + newMessage.fecha + '</d2>' +
  '<div class="mensaje otros-mensaje"> ' + newMessage.mensaje + ' </div> ';
  
    

  document.getElementById("area_mensajes_nuevos").innerHTML += html;
  document.getElementById("caja_escritura").value = "";
}

' <div class=" nom_usuario "><img src="IMG/iconito_1.png" class="iconito_usuario"></div>' +
    '<div class="usario_style">' + newMessage.usuario + "<p class='tiempo'>" + newMessage.fecha +
    '<div class="mensaje otros-mensaje"> ' + newMessage.mensaje + ' </div> ';

