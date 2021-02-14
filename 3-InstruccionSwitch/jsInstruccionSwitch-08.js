/*
Castro Matias Ezequiel
ejercicio 8 instruccion Switch
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje=" hace FRIO";
		break;
		case "Cataratas":
		case "Mar del plata":
			mensaje=" hace CALOR";
		break;
	}

	alert("en "+destinoIngresado+mensaje);
}//FIN DE LA FUNCIÓN