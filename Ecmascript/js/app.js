/*
	Mi EcmaScript

	consola web
	2+2
	'hola'
	console.log('hola')
	alert('Pop Up!')
*/

/*
* Conversión de tipos
*/

/*console.log('Comentario '+100)
console.log(52+ ' Comentario ')
console.log("37" + 7)
console.log("37" - 7)

console.log(parseInt("37") + 7)
console.log(parseInt("37") - 7)
*/

function saludar(nombre) {
  return "Intro a " + nombre; //Cuando se llama, esta funcion devuelve "Hola " y el nombre que se le ha pasado como argumento.
}

function abc(cadena) {
	return "MORITE PINCHE PUTO " + cadena;
}
/*Llamar a la función e imprimir por pantalla / mensaje de alerta*/

/*
* Funciones
* var, let y const
* BOM y DOM
* Eventos
*/

(function() {
	/*Mostrar un mensaje de alerta al cargar*/

	/* Obtener el elemento con el id quote1 */
	//var elemento = document.getElementById("quote1");
	//console.log(elemento);

	/* Obtener el elemento con el id quotes */
	//var elemento1 = document.getElementById("quotes");
	//console.log(elemento1);

	/* Obtener los elementos con la etiqueta div y mostrar el contenido*/
	//var elemento2 = document.getElementsByTagName("div");
	//for(indice in elemento2) {
	//	console.log(elemento2[indice]);
	//}

	//for(ja of elemento2) {
	//	console.log(ja);
	//}

	/* Obtener los elementos con la clase well */
	//var elemento3 = document.querySelectorAll('div[class="well"]')
	//for (ja of elemento3){
	//	console.log(ja)
	//}

	/* Query Selector para los div's con clase well dentro del div con id quotes */
	//var elemento4 = document.querySelectorAll('div#quotes > div[class="well"]')
	//for (ja of elemento4){
	//	console.log(ja)
	//}

	/* Mostrar los autores de las frases */
	//var elemento5 = document.querySelectorAll('div#quotes > div[class="well"]');
	//for (ja of elemento5){
	//	console.log(ja.getAttribute("author"));
	//}

	/* Mostrar el texto de los div's cuyo autor termine en ous */
	//var elemento3 = document.querySelectorAll('div[author$="ous"]')
	//for(i of elemento3){
	//	console.log(i.textContent);
	//}

	/* Crear un h3 con el autor de cada div con clase well */
	//var elementos = document.querySelectorAll('div[class="well"]');
	//for(elemento of elementos) {
	//	var h3 = document.createElement('h3');
	//	h3.textContent = elemento.getAttribute('author');
	//	console.log(h3);
	//}
	/* Insertar el h3 antes del p dentro de la cita */
	var elementos = document.querySelectorAll('div[class="well"]');
	for(elemento of elementos) {
		var h3 = document.createElement('h3');
		h3.textContent = elemento.getAttribute('author');
	}
	/* Obtener el texto del input con id texto */

	/* Al dar clic en el botón buscar debe ocultar las citas que no contengan el texto ingresado en input (id='texto')*/

})();

