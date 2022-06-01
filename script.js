function capturarcanal (){

  let inputNuevoCanal = prompt("Nombre Nuevo Canal", "Nuevo Canal");
  
  //creando el constructor
  function Canal(nombre,){
    this.nombre=nombre; 
}
  //declarando las variables
  let nombreCapturar = inputNuevoCanal;
  
  //creando nuevos objetos
  let nuevoCanal = new Canal (nombreCapturar);
  console.log(nombreCapturar);

  let lista = document.createElement ("li")
  nuevoItem = nombreCapturar;
  lista.innerHTML = nuevoItem;
  listaCanales.appendChild(lista);

  document.getElementById ("nom_cabecera").innerHTML = "<class='nom_cabecera'>" + nombreCapturar;
  //document.getElementById("area_mensajes").innerHTML = "";
  
};

//Contador de tiempo
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

function enviarMensaje(){

  let mensajeEnviado = document.getElementById("caja_escritura").value;
  let reloj = ("<p class='tiempo'>" + phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear + "</p>");
  let relojDos = (+ phoras + ":" + pminutos + ":" + psegundos + " | " + pdia + " de " + pmes + " del " + pyear);
  let divUsuario = document.getElementById("nom_usuario").innerHTML;

  //creando el constructor
  function Mensaje(usuario,mensaje,fecha){
    this.usuario=usuario;
    this.mensaje=mensaje;
    this.fecha=fecha;
}
  //declarando las variables

  let usuarioCapturar = document.getElementById("nom_usuario").innerHTML = "Alumno@ BTC"
  let mensajeCapturar = mensajeEnviado;

  //creando nuevos objetos
  nuevoMensaje = new Mensaje (usuarioCapturar, mensajeCapturar,relojDos);
  agregar();

  //mostrando en pantalla
  let html = '<div id="nom_usuario"><img src="IMG/iconito_1.png" class="iconito_usuario"><d2>Alumno@ BTC</d2></div>' + reloj +
        '<div class="caja_mensajes mi-caja_mensajes">' +
        '<div class="mensaje mi-mensaje"> ' + mensajeCapturar + ' </div>' +
        '<div class="separator"></div>';

  document.getElementById("area_mensajes").innerHTML += html;
  document.getElementById("caja_escritura").value = "";

};

//creando el array de nuevos objetos
var baseData = [];
function agregar (){
    baseData.push(nuevoMensaje); 
    console.log(nuevoMensaje);
};

//barra de busqueda
const formulario = document.getElementById('input_busqueda');
const boton = document.getElementById('boton_busqueda');
const resultado = document.getElementById('area_mensajes');

const filtrar = ()=>{
    //console.log(formulario.value);
    //resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for(let datos of baseData){
        let mensaje = datos.mensaje;
        if(mensaje.indexOf(texto) !== -1){
          resultado.innerHTML = document.getElementById("caja_escritura").value = ( `<p class='mensaje_encontrado'>
          Usuario: ${datos.usuario} - Mensaje: "${datos.mensaje}" - Fecha y hora: ${datos.fecha}
          `);
        }else{resultado.innerHTML = ( `<p class='mensaje_no_encontrado'> Lo siento, mensaje no encontrado.
        `);

        }

    }
    
}

boton.addEventListener('click', filtrar);
//formulario.addEventListener('keyup',filtrar);
//filtrar();
