$(document).ready(function () {

	$('a').click(function () {

		idLink = $(this).attr('id');

		$("#conteudo").removeClass();

		if(idLink == 'brasil') {

			$('#conteudo').addClass('brasil');
			$('#conteudo').html('Brasil 4º Lugar');

		} else {

			if(idLink == 'alemanha') {

				$('#conteudo').addClass('alemanha');
				$('#conteudo').html('Alemanha 1º Lugar');

			}

			if(idLink == 'argentina') {

				$('#conteudo').addClass('argentina');
				$('#conteudo').html('Argentina 2º Lugar');

			}

			if(idLink == 'holanda') {

				$('#conteudo').addClass('holanda');
				$('#conteudo').html('Holanda 3º Lugar');

			}

		}

		return false;
	});
});


$(function(){

	fonte = $('#conteudo').css('font-size').substring(0,2);

	$("#aumentar").click(function(){
		
		fonte++;
		$('#conteudo').css({'fontSize': fonte});
	});

	$("#diminuir").click(function(){

		fonte--;
		$('#conteudo').css({'fontSize': fonte});
	});

	$("#botaoVerde").click(function(){

		color = 'green';
		$('body').css({'background-color': color });
	});

	$("#botaoLaranja").click(function(){

		color = 'orange';
		$('body').css({'background-color': color });
	});

	$("#botaoVermelho").click(function(){

		color = 'red';
		$('body').css({'background-color': color });
	});

	$("#botaoAzul").click(function(){

		color = 'blue';
		$('body').css({'background-color': color });
	});

});
