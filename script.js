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

  let nomCabecera = document.getElementById ("nom_cabecera").innerHTML = "<class='nom_cabecera'>" + nombreCapturar;
  
};

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
  let divUsuario = document.getElementById("nom_usuario").innerHTML;

  //creando el constructor
  function Mensaje(usuario,mensaje){
    this.usuario=usuario;
    this.mensaje=mensaje;
}
  //declarando las variables

  let usuarioCapturar = document.getElementById("nom_usuario").innerHTML = "Alumno@ BTC"
  let mensajeCapturar = mensajeEnviado;

  //creando nuevos objetos
  nuevoMensaje = new Mensaje (usuarioCapturar, mensajeCapturar);
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

let inputBuscar = document.getElementById("input_busqueda");
const resultado = document.getElementById ("resultado")


let filtrar = ()=> {
  resultado.innerHTML = '';
  let texto = inputBuscar.value.toLowerCase();
  for (let datos of baseData) {
    let mensajeBuscado = baseData.mensaje.toLowerCase();
    if (mensajeBuscado.indexOf(texto) !== -1){
      resultado.innerHTML += `
      <li>${baseData.mensaje}</li>
      `
    }
  }
}
