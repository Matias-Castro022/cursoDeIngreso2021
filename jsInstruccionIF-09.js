/*
Castro Matias Ezequiel
ejercicio 9 instruccion IF
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	let numeroRandom;
	//Genero el número RANDOM entre 1 y 10 
	numeroRandom=Math.floor(Math.random()*10)+1;
	console.log("nuemro generado: "+numeroRandom);
	alert("Su numero es: "+numeroRandom);

}//FIN DE LA FUNCIÓN