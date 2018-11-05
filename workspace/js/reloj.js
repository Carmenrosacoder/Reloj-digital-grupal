
window.addEventListener('load', ()=>{
	horaPeruana();
	var popUp = document.getElementById("popUp");
	var boton = document.getElementById("boton_popUp");
	var boton_cerrar = document.getElementById("boton_popUp_cerrar");
	var checkboxes = document.querySelectorAll(".check"); 

	boton.addEventListener('click',()=>{
		mostrarPopUp();
	});
	boton_cerrar.addEventListener('click',()=>{
		cerrarPopUp();
	});
	checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkPais));  

	function checkPais(e) {  
		if (this.checked) {
			var pais = this.value;
			var intervalo = this.getAttribute('data');
			agregarZonaHoraria(pais,intervalo);
			var new_contenedor_pais = document.createElement("h2");
			var new_contenedor_hora = document.createElement("h3");
			var new_hora_pais = document.querySelector("li[value='"+pais+"']");
			new_hora_pais.appendChild(new_contenedor_pais);
			new_hora_pais.appendChild(new_contenedor_hora);
			horaPais(pais);

		}
		else document.querySelector("#selecciones li[value='"+this.value+"']").remove();
		
	  }
	function mostrarPopUp(){
		
		popUp.style.visibility = "visible";
	}
	function cerrarPopUp(){
		popUp.style.visibility = "hidden";
	}
	
	function agregarZonaHoraria(element,intervalo){
		var caja_horas = document.getElementById("selecciones");
		var new_hora = document.createElement('li');
		var valor = document.createAttribute("value");
		var data_li =document.createAttribute("data");
		data_li.data = intervalo;
		valor.value =element;
		new_hora.setAttribute('value', element);
		new_hora.setAttribute('data', intervalo);                       

		caja_horas.appendChild(new_hora);
	}	
});

function horaPeruana(){
		
	var fecha = new Date();
	var	horas = fecha.getHours();
	var	minutos = fecha.getMinutes();
	var	segundos = fecha.getSeconds();
	var dia = fecha.getDay();
	var mes = fecha.getMonth();
	var diaNumero = fecha.getDate();
	console.log(dia, mes)
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var nombreDia= new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
	var idHoras = document.getElementById('horas');
	var idMinutos = document.getElementById('minutos');
	var idSegundos = document.getElementById('segundos');

	idHoras.textContent = horas;
	idMinutos.textContent = minutos;
	idSegundos.textContent = segundos;

	var date = document.getElementById("date");
	date.innerHTML = nombreDia[dia]+", "+ diaNumero +" de "+meses[mes];

	console.log(fecha.toDateString());
	setTimeout("horaPeruana()", 500);
	
}

function horaPais(pais){
	var fecha = new Date();
	var h = fecha.getHours();
	var m = fecha.getMinutes();
	var s = fecha.getSeconds();
	var newIntervalo = document.querySelector("li[value='"+pais+"']");
	var a = newIntervalo.getAttribute('data');
	var newHour = h + parseInt(a);
	setTimeout('horaPais("'+pais+'")',500);

	var new_hora_pais = document.querySelector("li[value='"+pais+"'] h2");
	var new_hora_hora = document.querySelector("li[value='"+pais+"'] h3");
	new_hora_pais.textContent = pais;
	new_hora_hora.textContent = newHour+":"+m+":"+s;
	
}
