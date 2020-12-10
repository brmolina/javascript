
$(function() {


	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'json',
	});


	resposta.done(function(estados) {

		var comboEstado = $('#combo-estado')
		comboEstado.html('<option>Selecione o Estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function (errorctx){ console.log('erro na requisição',errorctx);});

});

