(function(){

	function onSuccess(data){
		console.log(data)
	}
	/*
	$.ajax({
		type: "GET",
		url: "data/citas.xml",
		contentType: "text/xml",
		dataType: "xml",
		success: onSuccess,
	})
	*/

	$.ajax({
		type: "GET",
		url: "data/citas.xml",
		dataType: "xml",
		success: function(data){
			$(data).find('cita').each(function(){
				var lol = $(this).find('texto').text();
				$("<div></div>").attr('class',"well").html(lol).appendTo("#quotes");
			});
		}
	});
})();

var elemento3;

$("#buscar").click(buscar);
$("#texto").on("keyup",buscar);

function buscar(){
	textoABuscar = document.getElementById("texto").value;
	elemento3 = document.querySelectorAll('div[class="well"]');
	console.log(textoABuscar);
	console.log(elemento3);
	if(textoABuscar!=""){
		for(i of elemento3){
			if(i.textContent.includes(textoABuscar)){
				i.classList.add("mostrar")
				i.classList.remove("ocultar");
			}else{
				i.classList.add("ocultar");
				i.classList.remove("mostrar");
			}
		}
	}else{
		for(i of elemento3){
			i.classList.add("mostrar");
		}
	}
}

