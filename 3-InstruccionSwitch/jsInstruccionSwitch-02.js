/*
Castro Matias Ezequiel
ejercicio 2 InstruccionSwitch
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño=txtIdMes.value;
	
	console.log("mes ingresado: "+mesDelAño);

	/*switch(mesDelAño)
	{
		case "Enero":
		{
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
			break;
		}
		case "Febrero":
		{
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
			break;
		}
		case "Marzo":
		{
			mensaje=". Falta para el invierno.";
			break;
		}
		case "Abril":
		{
			mensaje=". Falta para el invierno.";
			break;
		}
		case "Mayo":
		{
			mensaje=". Falta para el invierno.";
			break;
		}
		case "Junio":
		{
			mensaje=". Falta para el invierno.";
			break;
		}
		case "Julio":
		{
			mensaje=". Abrigate que hace frio.";
			break;
		}
		case "Agosto":
		{
			mensaje=". Abrigate que hace frio.";
			break;
		}
		case "Sepriembre":
		{
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
			break;
		}
		case "Octubre":
		{
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
			break;
		}
		case "Novienmbre":
		{
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
			break;
		}
		case "Diciembre":
		{
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
			break;
		}
	}*/

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje=". Falta para el invierno.";
		break;
		case "Julio":
		case "Agosto":
			mensaje=". Abrigate que hace frio.";
		break;
		case "Sepriembre":
		case "Octubre":
		case "Novienmbre":
		case "Diciembre":
			mensaje=". Ya pasamos el frio, ahora calor!!!.";
		break;
	}

	alert("estamos en "+mesDelAño+mensaje);




}//FIN DE LA FUNCIÓN