/*
Castro Matias Ezequiel
ejercicio 1 InstruccionSwitch
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño=txtIdMes.value;

	console.log("mes ingresado: "+mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
		{
			mensaje="que comiences bien el año!!!.";
			break;
		}
		case "Marzo":
		{
			mensaje="a clases!!!.";
			break;
		}
		case "Julio":
		{
			mensaje="se vienen las vacaciones!!!.";
			break;
		}
		case "Diciembre":
		{
			mensaje="Felices fiesta!!!.";
			break;
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN