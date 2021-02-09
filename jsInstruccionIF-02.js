/*
Castro Matias Ezequiel
ejercicio 2 instruccion IF
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	var edad;

	//tomo la edad  
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>17)
	{
		alert("Usted es mayor de edad");
		//alert("su edad es: "+edad+", sos mayor de edad");
	}
/*	
	else
	{
		alert("su edad es: "+edad+", sos menor de edad");
	}
*/
	console.log("edad: "+edad);

}//FIN DE LA FUNCIÓN