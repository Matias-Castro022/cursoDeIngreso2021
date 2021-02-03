/*
Castro Matias Ezequiel
ejercicio 8 entrada y salida de datos
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;
	var resto;
	//var respuesta;
	//respuesta=("el resto de su operacion es: "+ resto)
	//alert(respuesta)

	dividendo=txtIdNumeroDividendo.value;
	dividendo=parseInt(dividendo);
	console.log("dividendo: "+dividendo);

	divisor=txtIdNumeroDivisor.value;
	divisor=parseInt(divisor);
	console.log("divisor: "+divisor);

	resultado=(dividendo/divisor);
	resultado=parseInt(resultado);
	console.log("resultado: "+resultado);

	resto=(dividendo%divisor);
	resto=parseInt(resto);
	console.log("resto: "+resto);

	alert("El resto es: "+resto);

}
