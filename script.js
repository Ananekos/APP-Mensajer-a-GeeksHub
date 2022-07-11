const channels = [];
let channelIndex = 0;
let currentChannel = null;

console.log(channels);

//01. CREACIÓN CANALES

function creatingChannels() {

  let inputNewChannel = prompt("Nombre Nuevo Canal", "Nuevo Canal");

  const newChannel = {
    name: inputNewChannel,
    id: 'canal-' + channelIndex,
    pos: channelIndex,
    messages: [],
  }

  channels.push(newChannel);
  console.log('Canales', channels);

  let btnNewChannel = '<button class="btn_channel_name" onclick="openChannel(' + newChannel.pos + ')" id="' + newChannel.id + '">' + newChannel.name + '</button>';
  channelsList.innerHTML += btnNewChannel;
  currentChannel = newChannel.pos;

  //02. MOSTRANDO LA INTERFAZ COMPLETA AL CREAR NUEVO CANAL

  if (channels.length == 1) {
    document.getElementById("writing_area").innerHTML =
      '<div class="writing_area" >' +
      '<button class="btn_send" id="btn_send" onclick="enviarMensaje()"><i class="fa fa-plus"aria-hidden="true"></i></button>' +
      '<textarea class="input_box" id="input_box"></textarea>' +
      '</div>';
    document.getElementById("head_container").innerHTML =
      '<div id=all_header>' +
        '<div id=channel_name_head class="channel_name_head">Nombre del canal</div>' +
        '<br>' +
        '<d4>Tú, Olivia Montes, Isabel Carballo</d4>' +
      '</div>' +

      '<div id="all_search">' +
        '<div class="search_bar">' +
          '<button id="search_button" class="search_button" onclick="search()"><i class="fa fa-search" aria-hidden="true"></i></button>' +
          '<input type="text" id="input_search" class="input_search">' +
        '</div>' +
      '</div>'
  }

  openChannel(newChannel.pos);
  channelIndex++;
};

//03. ABRIENDO NUEVOS CANALES

function openChannel(ChannelPos) {
  document.getElementById("channel_name_head").innerHTML = channels[ChannelPos].name;
  currentChannel = ChannelPos;
  console.log('Open Channel', channels[ChannelPos]);
  document.getElementById("new_messages_area").innerHTML =
    '<div id="nom_interlocutor"><img src="IMG/iconito_2.png" class="user_icon">' +
    '<d2> Olivia Montes </d2>' +
    '<d3>12:15:23</d3>' +
    '<d3> | 5 de Febrero del 2022</d3>' +
    '</div>' +
    '<div class="mesages_box otros-mesages_box">' +
    '<div class="mensaje other_user_message"> Hola, ¿qué tal?. Bienvenid@ al canal.</div>';

  if (channels[ChannelPos].messages.length > 0) {
    for (let message of channels[ChannelPos].messages) {
      pintarMensaje(message);
    }
  }
}

//04. BUSCANDO MENSAJES ENVIADOS

function search() {
  let results = '';
  let value = document.getElementById("input_search").value;
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
      hours = fecha.getHours(),
      minutes = fecha.getMinutes(),
      seconds = fecha.getSeconds(),
      day = fecha.getDate(),
      month = fecha.getMonth(),
      year = fecha.getFullYear(),


      phours = document.getElementById("hours").innerHTML = hours,
      pminutes = document.getElementById("minutes").innerHTML = minutes,
      pseconds = document.getElementById("seconds").innerHTML = seconds,
      pday = document.getElementById("day").innerHTML = day,
      pmonth = document.getElementById("month").innerHTML = mesesDelAño[month],
      pyear = document.getElementById("year").innerHTML = year;

    if (phours < 10) { phours = "0" + phours };
    if (pminutes < 10) { pminutes = "0" + pminutes };
    if (pseconds < 10) { pseconds = "0" + pseconds };

  };

  actualizarHora();
  let intervalo = setInterval(actualizarHora, 1000);

}());

//06. ENVIANDO LOS MENSAJES

function enviarMensaje() {
  console.log('enviarMensaje', channels[currentChannel]);
  let mensajeEnviado = document.getElementById("input_box").value;
  if (mensajeEnviado != '') {
    let reloj = (phours + ":" + pminutes + ":" + pseconds + " | " + pday + " de " + pmonth + " del " + pyear);
    let usuarioCapturar = document.getElementById("user_name").innerHTML = "Alumno@ BTC";

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
  '<div id="nom_interlocutor"><img src="IMG/iconito_1.png" class="user_icon">' +
  '<d2>' + newMessage.usuario + '</d2>' +
  ' <d3>' + newMessage.fecha + '</d2>' +
  '<div class="mensaje other_user_message"> ' + newMessage.mensaje + ' </div> ';
  
    

  document.getElementById("new_messages_area").innerHTML += html;
  document.getElementById("input_box").value = "";
}
