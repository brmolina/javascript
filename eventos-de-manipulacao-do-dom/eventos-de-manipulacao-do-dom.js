$(function () {
	var botao1 = $('#botao1');

	botao1.on('click', function(event) {
		console.log('botao1 clicado', botao1);
	});

	$('#link1').on('click', function(e){
		e.preventDefault();
		console.log('Link 1 clicado');
	});

	$('#input1').on('keyup', function(e){

		if(e.keyCode === 13){
			console.log('Enter pressionado');
		};
	});

	$('#input1').on('keydown', function(e){
		if (e.keyCode === 9){
			console.log("Tab pressionado");
		}
		
	})

});