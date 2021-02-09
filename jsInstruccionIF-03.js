/*
Castro Matias Ezequiel
ejercicio 3 instruccion IF
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	//tomo la edad  
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad<18)
	{
		alert("sos menor de edad");
		//alert("su edad es: "+edad+", sos menor de edad");
	}
	else
	{
		alert("sos mayor de edad");
		//alert("su edad es: "+edad+", sos mayor de edad");
	}

	console.log("edad: "+edad);

}//FIN DE LA FUNCIÓN