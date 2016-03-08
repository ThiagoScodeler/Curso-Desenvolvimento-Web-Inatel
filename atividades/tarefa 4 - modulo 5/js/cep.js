$(document).ready(function () {
	
	$("#formulario").submit(function() {

		var cep = $('#cepCidade').val();

		cep = cep.replace(/\D/g,"");

		$.ajax({
			url:"http://cep.correiocontrol.com.br/"+cep+".json",
			data: '',
			dataType: 'json',
			success: function(data) {

				$('#bairro').html(data.bairro);
				$('#logradouro').html(data.logradouro);
				$('#cep').html(data.cep);
				$('#uf').html(data.uf);
				$('#localidade').html(data.localidade);
				
			}
		});
		return false;
	});
});

