/*
Castro Matias Ezequiel
ejercicio 6 entrada y salida de datos
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

	console.log("primer numero: "+primerNumero);
	console.log("segundo numero: "+segundoNumero);

	console.log("resultado: "+resultado);
	alert("El resultado de su suma es "+resultado);
}

