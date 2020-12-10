var estado = (function() {
	var comboEstado = $('#combo-estado');

	function iniciar() {
		$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'json',
		success: onEstadosRetornados,
		error: onError
	});
	}

	function onEstadosRetornados(estados) {
		comboEstado.html('<option>Selecione o Estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	};

	function onError() {
		resposta.fail(function (errorctx){ console.log('erro na requisição',errorctx);});
	};

	return {
		iniciar: iniciar
	}
})();

estado.iniciar();

/*$(function() {



	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'json',
	});


	resposta.done(function(estados) {

		
		comboEstado.html('<option>Selecione o Estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function (errorctx){ console.log('erro na requisição',errorctx);});

});*/