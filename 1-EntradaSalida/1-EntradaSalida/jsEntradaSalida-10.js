/*
Castro Matias Ezequiel
ejercicio 10 entrada y salida de datos
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var numeroDescuento;
	var resultado;

	importe=txtIdImporte.value;
	importe=parseInt(importe);
	console.log("importe: "+importe);

	descuento=25;
	console.log("descuento: "+descuento+"%");

	numeroDescuento=((importe*descuento)/100);
	console.log("Cantidad de descuento: "+numeroDescuento);

	resultado=(importe-numeroDescuento);
	console.log("resultado: "+resultado);
	txtIdResultado.value=resultado;

	/*
	copy paste del ejercicio 9 y cambiar el nombre de las variable y textos.
	*/
}
