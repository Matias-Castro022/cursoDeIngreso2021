/*
Castro Matias Ezequiel
ejercicio 5 entrada y salida de datos
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;

	/*
	posible aplicar parseInt y if
	*/

	console.log("nombre:"+nombreIngresado+ " edad:"+edadIngresada);
	alert("su nombre es: "+nombreIngresado+" y usted tiene "+edadIngresada+" años");
}

