$(document).ready(function(){
	
//	$("#botonCalcular").on("click", function(){ // dos formas de hacer el click en jquery
	$("#botonCalcular").click( function(){
		
		var num1 = parseInt($("#campo1").val());
		var num2 = parseInt($("#campo2").val());
		var total = 0;
		var operacion = $("#operacion").val();
		// console.log(operacion);
		// console.log(num1);
		// console.log(num2);
		switch(operacion){
			case "suma": 
				total = num1 + num2;
				break;
			case "resta":
				total = num1 - num2;
				break;
			case "dividir":
				total = num1 / num2;
				break;
			case "multiplicar":
				total = num1 * num2;
				break;
		}
		$("#resultado").html("El resultado es " + total);
	});
});