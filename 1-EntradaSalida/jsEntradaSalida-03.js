/*
Castro Matias Ezequiel
ejercicio 3 de entrada y salida de datos
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;

	//nombreIngresado=txtIdNombre.value; es mas rapido y abreviado, solo soportado por google
	//nombreIngresado=document.getElementById('txtIdNombre').value; es soportado por todos los navegadores	

	console.log("su nombre es "+nombreIngresado);
	alert("su nombre es "+nombreIngresado);

}


