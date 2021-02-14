/*
Castro Matias Ezequiel
ejercicio 4 instruccion Switch(con default)
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;
	
	switch(mesDelAño)
	{
		/*
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje=" tiene 31 dias.";
		break;
		*/
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje=" tiene 30 dias.";
		break;
		case "Febrero":
			mensaje=" tiene 28 dias.";
		break;
		default:
			mensaje=" tiene 31 dias.";
		break;
	}
	alert(mesDelAño+mensaje);
}//FIN DE LA FUNCIÓN