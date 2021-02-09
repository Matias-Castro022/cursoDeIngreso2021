/*
Castro Matias Ezequiel
ejercicio 4 instruccion IF
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	var edad;
	//tomo la edad

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>12 && edad<18)
	{
		alert("Su edad es: "+edad+", sos un adolecente");
	}

	/*
	if (edad<13 || edad>17)
	
		utiliza || porque se tiene en cuenta si el numero es mayor o menor
		si solo cumple una de esas condiciones se toma como valido e ingresa
		a la funcion if. en cambio, si no cumple ninguna usa la funcion else.
	
	{
		alert("Su edad es: "+edad);
	}
	else
	{
		alert("Su edad es: "+edad+", sos un adolecente");
	}
	*/
	console.log("Edad: "+edad);
	

}//FIN DE LA FUNCIÓN