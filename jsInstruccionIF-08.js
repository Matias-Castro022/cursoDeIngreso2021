/*
Castro Matias Ezequiel
ejercicio 8 instruccion IF
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
NO HACER NADA, pero si no es asi, y es soltero y no es menor,
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	console.log(edad+" años, "+estadoCivil);

	if (edad>17 && estadoCivil=="Soltero")
	{
		console.log("Soltero y mayor");
		alert("Es soltero y no es menor");
	}
	else
	{
		console.log("todo lo demas")
	}
	
	


}//FIN DE LA FUNCIÓN