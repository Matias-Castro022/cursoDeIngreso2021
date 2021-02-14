/*
Castro Matias Ezequiel
ejercicio 3 instruccion Switch
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	console.log("mes ingresado: "+mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":	
		case "Junio":		
		case "Julio":		
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Novienmbre":
		case "Diciembre":
			mensaje="Este mes tiene 30 o más días";
		break;
	/*	
		default:
			mensaje="Este mes tiene 30 o más días";
		break;
	*/
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días.";
		break;	
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN