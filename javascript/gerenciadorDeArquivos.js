var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function loadFile(caminhoDoArquivo, atributoJson) {
    reader.open('get', caminhoDoArquivo, true); 
    reader.onreadystatechange = createCallback(atributoJson);
    reader.send(null);
}

function createCallback(atributoJson) {
    return function() {
        if(reader.readyState==4) {
        var el = document.getElementById('conteudo');
        
		var texto = reader.responseText;
		var objetoJson = JSON.parse(texto); 
		criaElementoConteudo(el, objetoJson, atributoJson)
    }
    };
}

function criaElementoConteudo(divPai, objetoJson, atributoJson){
	
	//Limpa a div pai
	divPai.innerHTML = "";
	
	//Inserindo o título
	var titulo = document.createElement("h4");
	titulo.innerHTML = atributoJson.toUpperCase();
	divPai.appendChild(titulo);
	
	objetoEspecifico = objetoJson[atributoJson];
	
	//Inserindo a descrição
	var textoInterno = document.createElement("p");
	textoInterno.innerHTML = objetoEspecifico.descricao;
	divPai.appendChild(textoInterno);
	
	//Inserindo tópicos, se houver
	var topicos = objetoEspecifico.topicos;
	if(topicos.length > 0){
		for (i = 0; i < topicos.length; i++) {
			objetoTopico = topicos[i];
			
			//Insere título do subtópico
			var subTitulo = document.createElement("h5");
			subTitulo.innerHTML = objetoTopico.titulo.toUpperCase();
			divPai.appendChild(subTitulo);
			
			//Insere descrição do subtópico
			var textoSubtopico = document.createElement("p");
			textoSubtopico.innerHTML = objetoTopico.conteudo;
			divPai.appendChild(textoSubtopico);
		} 
	}
}
