const btnAñadirCanales = document.querySelector(".btn_añadir_canales");
var resultadoPrm;
var arrCanales = [];



btnAñadirCanales.addEventListener("click", function (evento){
	
	for (var i =0; i<=0; i++){
		arrCanales.push(prompt("Nombre del nuevo canal:"));
		console.log(arrCanales);
		nuevoItem = arrCanales[i];
		var lista = document.createElement("li");
		lista.innerHTML = nuevoItem.value;
		listaCanales.appendChild(lista);
        nuevoItem.value = "";
	}
});


