$(document).ready(function(){
	horaPeruana();
	setInterval("horaPeruana()", 500);
	$('.check').click(function(){
		var ids= $(this).attr('data-id');
		var numer=$(this).attr('data');
		horaInternacional(numer,ids);

		setInterval("horaInternacional("+numer+","+String("'"+ids+"'")+")", 500);
	});
});

function horaPeruana(){
	var fecha = new Date();
	var	horas = fecha.getHours();
	var	minutos = fecha.getMinutes();
	var	segundos = fecha.getSeconds();
	var idHoras = document.getElementById('horas');
	var idMinutos = document.getElementById('minutos');
	var idSegundos = document.getElementById('segundos');
	idHoras.textContent = horas;
	idMinutos.textContent = minutos;
	idSegundos.textContent = segundos;

}
function horaInternacional(a, b){

	var fecha = new Date();
	var	horas = fecha.getHours();
	var	minutos = fecha.getMinutes();
	var	segundos = fecha.getSeconds();

	var horaTotal=horas+parseInt(a)+":"+ minutos+":"+segundos;
	
	$('#selecciones').html('<div id="'+b+'">'+ horaTotal +'</div>');
}
/*function reloj(indice, elem){
	var fecha = new Date();
	var	horas = fecha.getHours();
	var	minutos = fecha.getMinutes();
	var	segundos = fecha.getSeconds();
    var dia = fecha.getDay();
    var dianumero = fecha.getDate();
    var mes = fecha.getMonth();

        if (minutos < 10 || segundos <10){ minutos = "0" + minutos;
        if(segundos<10){
        segundos = "0" + segundos;} }
    if (indice == -1) {
        var idHoras = document.getElementById('horas');
        var idMinutos = document.getElementById('minutos');
        var idSegundos = document.getElementById('segundos');
        var iddia =document.getElementById('dia');
        var iddianumero = document.getElementById('dianumero');
        var idmes = document.getElementById('mes');
        idHoras.textContent = horas;
		idMinutos.textContent = minutos;
		idSegundos.textContent = segundos;
		iddia.textContent = weekdays[dia];
		iddianumero.textContent = dianumero;
	    idmes.textContent= months[mes];
	    setTimeout('reloj(-1)', 500);

    }

}reloj(-1, null);

function horasint(){
	if($(elem).is(':checked')) {
		var valor= $(elem).attr('data');
		var idHoras = document.getElementById('horas');
        var idMinutos = document.getElementById('minutos');
        var idSegundos = document.getElementById('segundos');
        idHoras.textContent = horas;
		idMinutos.textContent = minutos;
		idSegundos.textContent = segundos;
	    setTimeout('reloj(valor)', 500);
        var gmt=horas+5;
        zonah[valor].zonahoraria;
        gmt= gmt+zonah[valor].zonahoraria;
        $('#selecciones').html('<div id="seleccion"></div>');
        $('#seleccion').addClass(zonah[valor].ciudad).html(zonah[valor].ciudad + gmt+":"+ minutos+":"+ segundos);
    }
}



$(document).ready(function(){
    $('.check').change(function(){
		var indice = $(this).attr('data');
		reloj(indice, this);
	});
});
*/
