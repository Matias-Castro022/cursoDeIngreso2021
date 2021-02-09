/*
Castro Matias Ezequiel
ejercicio 7 instruccion IF
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	console.log(edad+" años, "+estadoCivil);

	if (edad<18 && estadoCivil!="Soltero")
	{
		console.log("Ilegal");

		alert("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		console.log("legal");
	}
	

	
	


}//FIN DE LA FUNCIÓN