/*
Castro Matias Ezequiel
ejercicio 7 instruccion Switch
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje=" se encuentra al Oeste.";
		break;
		case "Cataratas":
			mensaje=" se encuentra al Norte.";
		break;
		case "Mar del plata":
			mensaje=" se encuentra al Este.";
		break;
		case "Ushuaia":
			mensaje=" se encuentra a Sur.";
		break
	}
	alert(destinoIngresado+mensaje);
}//FIN DE LA FUNCIÓN