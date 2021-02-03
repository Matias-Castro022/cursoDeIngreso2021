/*
Castro Matias Ezequiel
ejercicio 2 entrada y salida de datos
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var texto;
 
	texto=prompt("Ingrese su nombre por favor.");

	console.log("su nombre es "+texto);
	alert("su nombre es "+texto);

	/*
	var: crea una variable, distintos valores que se pueden modificar a lo largo
	del proceso

	prompt: permite ingresar texto literal por medio de una ventana emergente
	dentro de la misma pagina.

	console.log: muestra en la consola distinto elementos.
	*/
}

