$(document).ready(function(){

	alunosArray = new Array();

	$("#formularioCadastro").submit(function(){

		nome = $("#nome").val().toUpperCase();
		nota =  parseFloat($("#nota").val());

		var expressaoRegular = /^[\d]{1,2}([.|,][\d])?/;

		if (!expressaoRegular.test(nota)) { 

			alert("Campo nota deve conter apenas números e o caracter .");
			return false;
		}

		alunosArray.push([nome, nota]);

		$("input:text:eq(0):visible").focus();

		$('<li>',{
			text : nome
		}).appendTo($("#nomeAluno"));

		$('<li>',{
			text : "NOTA: " + nota
		}).appendTo($("#notaAluno"));

		$("input[type='text']").val("");

		if(alunosArray.length==10){
			$("#adicionar").hide();
			$("input[type='text']").hide();
			$("label").hide();
			$("#botoes").show();
		}
		
		return false;
	});

	$("#ordenarNota").click(function(){
		alunosArray = alunosArray.sort(function(a,b) {
			return a[1] > b[1];
		});

		$("#nomeAluno").html("");
		$("#notaAluno").html("");

		for (var i = alunosArray.length-1; i>=0; i--) {
			$('<li>',{
				text : alunosArray[i][0]
			}).appendTo($("#nomeAluno"));

			$('<li>',{
				text : "NOTA: " + alunosArray[i][1]
			}).appendTo($("#notaAluno"));		
		};	
	})

	$("#nota").on("blur",function (){

		nota = formulario.nota.value;

		var expressaoRegular = /^[\d]{1,2}([.|,][\d])?/;

		if (!expressaoRegular.test(nota)) { 

			alert("Campo nota deve conter apenas números e o caracter .");
			return false;
		}
	});


	$("#ordenarNome").click(function(){
		alunosArray = alunosArray.sort(function(a,b) {
			return a[0] > b[0];
		});

		$("#nomeAluno").html("");
		$("#notaAluno").html("");

		for (var i = 0; i < alunosArray.length; i++) {
			$('<li>',{
				text : alunosArray[i][0]
			}).appendTo($("#nomeAluno"));

			$('<li>',{
				text : "NOTA: " + alunosArray[i][1]
			}).appendTo($("#notaAluno"));		
		};	
	});

	$("#media").click(function(){

		media = 0;

		//console.log(alunosArray.length);

		for (var i = alunosArray.length-1; i>=0; i--) {
			media = media + alunosArray[i][1];
		};

		media = (media/alunosArray.length).toFixed(2);

		$("#mediaAluno").html("");

		$('<p>',{
			text : "MÉDIA DA TURMA: " + media
		}).appendTo($("#mediaAluno"));
	});

});