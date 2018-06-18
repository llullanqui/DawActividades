(function(){

	function onSuccess(data){
		console.log(data)
	}

	$.ajax({
		type: "GET",
		url: "data/citas.xml",
		contentType: "text/xml",
		dataType: "xml",
		success: onSuccess,
	})
})();

var elemento3 = document.querySelectorAll('div[class="well"]');

$(".buscar").onclick = "buscar()";

function buscar(){
	textoABuscar = document.getElementById("texto").value;
	console.log(textoABuscar);
	console.log(elemento3);
	if(textoABuscar!=""){
		for(i of elemento3){
			if(i.textContent.indexOf(textoABuscar) >= 0){
				i.classList.remove("ocultar");
				i.classList.add("mostrar");
			}else{
				i.classList.remove("mostrar")
				i.classList.add("ocultar");
			}
		}
	}else{
		for(i of elemento3){
			i.classList.remove("ocultar");
			i.classList.add("mostrar");
		}
	}
	
}