$(document).ready(function () {

//mostrar modal do jogo
$('#myModal').modal('show');


$(".dropdown-menu a").click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$("#saudacao").hide();
	$("#fecharNoticia").hide();
	color = '#fff';
	$('body').css({'background-color': color });
	$("#content").load(href);

});

$(".nav-sidebar a").click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$("#saudacao").hide();
	$("#fecharNoticia").hide();
	color = '#fff';
	$('body').css({'background-color': color });
	$("#content").load(href);

});

$("#noticia").click(function(e){
	e.preventDefault();
	$("#saudacao").hide();
	color = '#fff';
	$('body').css({'background-color': color });

	$("#content").empty();

	$("#fecharNoticia").show();

	$('<iframe>',{
		src : "http://olhardigital.uol.com.br/home",
	}).appendTo($("#content"));

});

$("#jogar").click(function(e){
	e.preventDefault();
	var href = 'jogo.html';
	$("#saudacao").hide();
	$("#fecharNoticia").hide();
	$("#content").load(href);
	$('#myModal').modal('hide');

});

$("#imagem_jogo").click(function(e){
	e.preventDefault();
	var href = 'jogo.html';
	$("#saudacao").hide();
	$("#fecharNoticia").hide();
	$("#content").load(href);
	$('#myModal').modal('hide');

});


$("#fecharNoticia").click(function(e){
	e.preventDefault();
	$("iframe").hide();
	$("#fecharNoticia").hide();
	$("#saudacao").show();
});

});