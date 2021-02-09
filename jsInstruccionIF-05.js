/*
Castro Matias Ezequiel
ejercicio 5 instruccion IF
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edad;
	//tomo la edad  
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad<13 || edad>17)
	{
		alert("Su edad es: "+edad+", no sos un adolecente");
	}
	else
	{
		alert("Ok");
	}
	console.log("Edad: "+edad);

}//FIN DE LA FUNCIÓN