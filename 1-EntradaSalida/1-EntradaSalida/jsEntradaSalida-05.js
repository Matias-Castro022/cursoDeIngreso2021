/*
Castro Matias Ezequiel
ejercicio 5 entrada y salida de datos
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"
*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	var apellidoIngresado;

	apellidoIngresado=prompt("ingrese su apellido");
	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;
	/*
	posible aplicar parseInt y if
	*/

	console.log("apellido: "+ apellidoIngresado+" nombre:"+nombreIngresado+ " edad:"+edadIngresada);
	alert(apellidoIngresado+", su nombre es "+nombreIngresado+" y tiene "+edadIngresada+" años");
}

