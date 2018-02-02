$('body').on('click', '#botonCalcular', function () {
	var num1 = parseInt($("#campo1").val());
	var num2 = parseInt($("#campo2").val());
	var total = 0;
	var operacion = $("#operacion").val();

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
