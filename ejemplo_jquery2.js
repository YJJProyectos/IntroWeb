$(document).ready(function(){
	
//	$("#botonCalcular").on("click", function(){ // dos formas de hacer el click en jquery
	$("#botonTabla").click( function(){
		// var contenido = "<tr class='row-producto'><td>3</td><td>Notebook</td><td>14000</td></tr>";
		// $("#tabla").append(contenido);
		agregarFila("3", "Notebook", "14000");
	});
	$("#botonRemover").click( function(){
//		$("#tabla tr:eq(1)").remove();
		$(".row-producto:first").remove();
	});	
	$("#botonEsconder").click( function(){
		$(".row-producto:first").toggle();		
	});
	$("#botonPintar").click( function(){
		//$("#tabla tr:even" ).css( "background-color", "red" );
		pintarParesRojo();
	}); 
	
	$("#botonAgregar").click( function(){
		var nro = $("#campNro").val();
		var desc = $("#campDesc").val();
		var precio = $("#campPrecio").val();
		// var contenido = "<tr class='row-producto'><td>" + nro+ "</td><td>"+desc+"</td><td>"+ precio+"</td></tr>";
		// $("#tabla").append(contenido);
		agregarFila(nro, desc, precio);
		$("#campNro").val("");
		$("#campDesc").val("");
		$("#campPrecio").val("");
	});
	function pintarParesRojo(){
		$("#tabla tr:even" ).css( "background-color", "red" );		
	}
	
	function agregarFila(nro, desc, precio){
		var contenido = "<tr class='row-producto'><td>" + nro+ "</td><td>"+desc+"</td><td>"+ precio+"</td></tr>";
		$("#tabla").append(contenido);		
	}
});