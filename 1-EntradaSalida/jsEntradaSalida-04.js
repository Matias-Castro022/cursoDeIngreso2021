/* 
Castro Matias Ezequiel
ejercicio 4 entrada y salida de datos
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado=prompt("Ingrese su nombre por favor");

	console.log("usted es: "+nombreIngresado);
	txtIdNombre.value=nombreIngresado;

	//es valido concatenar ("usted es: "+ ...)
}

