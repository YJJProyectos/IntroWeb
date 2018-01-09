function eventoClickCalculadora(){
	var campo1 = document.getElementById("campo1");
	var campo2 = document.getElementById("campo2");
	var operacion = document.getElementById("operacion");
	var indiceSeleccionado = operacion.selectedIndex;
	var valorOperacion = (operacion.options[indiceSeleccionado]).value;
	var validacion = validarCampos(campo1.value, campo2.value);
	var result = document.getElementById("resultado");
	var textoAMostrar;
	switch(validacion){
		case 0: 
				var resultado;
				switch(valorOperacion){
						case "suma": resultado = parseInt(campo1.value) + parseInt(campo2.value); break;
						case "resta": resultado= parseInt(campo1.value) - parseInt(campo2.value); break;
						case "dividir": validarDivisionPorCero(campo2.value); resultado = parseInt(campo1.value) / parseInt(campo2.value); break;
						case "multiplicar": resultado = parseInt(campo1.value) * parseInt(campo2.value); break;
				}
				textoAMostrar = "El resultado es " + resultado.toString(); break;
		case 1:	
			textoAMostrar = "Falta el campo 1"; break;
		case 2:
			textoAMostrar = "Falta el campo 2"; break;
		case 3:
			textoAMostrar = "Faltan los dos campos" ; break;
	}
	result.innerHTML = textoAMostrar;
}
function validarCampos(campo1, campo2){
	if ( campo1 == ""  && campo2 == ""){
		return 3
	} else if (campo2 == "") {
		return 2
	} else if (campo1 == ""){
		return 1
	} else 
		return 0
}
function validarDivisionPorCero(campo2){
	if (campo2 == 0){
		alert("Division por cero");
	}
}
