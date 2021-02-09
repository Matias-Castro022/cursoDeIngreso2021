/*
Castro Matias Ezequiel
ejercicio 6 instruccion IF
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edad;

	//tomo la edad

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad<13)
	{
		alert("Sos un niño.");
	}  
	else
	{
		if (edad>17)
		{
			alert("Sos mayor de edad.");
		}
		else
		{
			alert("Sos un adolecente");
		}
	}

	console.log("edad: "+edad);
/*si en lugar de un numero se ingresa un texto, la edad es NaN
y el alert es "sos un adolecente", por logica de programacion
todo lo que no sea un numero menor a trece o mayor a 17
activa las lineas de codigo 26 a 29
*/

}//FIN DE LA FUNCIÓN