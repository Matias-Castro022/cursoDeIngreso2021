function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	//let descuento;
	//let PrecioDescuento;
	//let aumento;
	//let PrecioAumento;
	let modificacion;
	let precioModificaion;
	let precioFinal;

	precioBase=15000;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					modificacion=20;
				break;
				case "Mar del plata":
					modificacion=-20;
				break;
				default :
					modificacion=-10;
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					modificacion=-20;
				break;
				case "Mar del plata":
					modificacion=20;
				break;
				default :
					modificacion=10;
				break;
			}
		break;
		default :
			switch(destinoIngresado)
			{
				case "Cordoba":
					modificacion=0;
				break;
				default :
					modificacion=10;
				break;
			}
		break;
	}
	precioModificaion=(precioBase*modificacion)/100;
	console.log("aumento/descuento: "+precioModificaion);

	precioFinal=(precioBase+precioModificaion);

	alert("su tarifa a pagar es: $"+precioFinal);
}//FIN DE LA FUNCIÓN