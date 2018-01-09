function eventoClick(){	
	var miIdDiv = document.getElementById("miIdDiv");
	var texto = "<b>Hola a todos jajaja</b>";
	miIdDiv.innerHTML = texto;
}
function clickBoton(){
	var elementos = document.getElementsByName("campoRadio");
	var  tam = elementos.length;
	for (var i = 0 ;  i <  tam; i++) {
		if (elementos[i].checked){
			var radio = document.getElementById("radioValor");
			radio.innerHTML = "Radio contiene " + elementos[i].value.toString() ;
			// break;
		}
	}
}