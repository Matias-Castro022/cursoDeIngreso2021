/*
Castro Matias Ezequiel
ejercicio 1 instruccion IF
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	var edad;
	//tomo la edad  
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad==15)
	{
		alert("Niña bonita");
	}
	else
	{
		alert("Su edad es: "+edad);
	}

/*
si bien funciona, es menos productivo, usos innecesarios del procesador, estaria mal.

	if (edad<15)
	{
		alert("Su edad es: "+edad);
	}
	else
	{
		if (edad>15)
		{
			alert("Su edad es: "+edad);
		}
		else
		{
			alert("Niña bonita");
		}
	}
*/
	console.log("edad: "+edad);
}//FIN DE LA FUNCIÓN