/*
Castro Matias Ezequiel
ejercicio 5 instruccion Switch
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo la hora
	let horaDelDia;
	let mensaje;

	horaDelDia=document.getElementById('txtIdHora').value;
	horaDelDia=parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje=", es de mañana.";
		break;
		/*
		default :
			mensaje=", no es de mañana.";
		break;
		no es necesario
		*/
	}

	alert("Son las "+horaDelDia+mensaje);

}//FIN DE LA FUNCIÓN