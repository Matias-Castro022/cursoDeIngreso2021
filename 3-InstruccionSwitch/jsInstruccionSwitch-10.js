function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	console.log("estacion ingresada: "+estacionIngresada);
	console.log("destino ingresado"+destinoIngresado);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="se viaja.";
				break;
				default :
					mensaje="no se viaja.";
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje="se viaja.";
				break;
				default :
					mensaje="no se viaja.";
				break
			}
		break;
		case "Otoño":
			mensaje="se viaja.";
		break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="no se viaja.";
				break;
				default :
					mensaje="se viaja.";
				break;
			}
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN