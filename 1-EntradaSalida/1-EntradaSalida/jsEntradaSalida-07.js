/*
Castro Matias Ezequiel
ejercicio 7 entrada y salida de datos
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=txtIdNumeroUno.value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=txtIdNumeroDos.value;
	segundoNumero=parseInt(segundoNumero);

	resultado=(primerNumero+segundoNumero);

	console.log("resultado: "+resultado);
	alert("El resultado de su suma es: "+ resultado);	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=txtIdNumeroUno.value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=txtIdNumeroDos.value;
	segundoNumero=parseInt(segundoNumero);

	resultado=(primerNumero-segundoNumero);

	console.log("resultado: "+resultado);
	alert("El resultado de su resta es: "+resultado);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=txtIdNumeroUno.value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=txtIdNumeroDos.value;
	segundoNumero=parseInt(segundoNumero);

	resultado=(primerNumero*segundoNumero);

	console.log("resultado: "+resultado);
	alert("El resultado de su mulplicacion es: "+resultado);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=txtIdNumeroUno.value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=txtIdNumeroDos.value;
	segundoNumero=parseInt(segundoNumero);

	resultado=(primerNumero/segundoNumero);

	console.log("resultado: "+resultado);
	alert("El resultado de su divicion es: "+resultado)
}

