/*
Castro Matias Ezequiel
ejercicio 9 entrada y salida de datos
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var aumento;
	var numeroAumento;
	var resultado;

	importe=txtIdSueldo.value;
	importe=parseInt(importe);
	console.log("importe: "+importe);

	aumento=10;
	console.log("aumento: "+aumento+"%");

	numeroAumento=((importe*aumento)/100);
	console.log("Cantidad de aumento: "+numeroAumento);

	resultado=(importe+numeroAumento);
	console.log("resultado: "+resultado);
	txtIdResultado.value=resultado;
}
