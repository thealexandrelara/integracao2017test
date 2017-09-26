var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function loadFile(caminhoDoArquivo) {
    reader.open('get', caminhoDoArquivo, true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents() {
    if(reader.readyState==4) {
        var el = document.getElementById('target');
        
		var texto = reader.responseText;
		var objetoJson = JSON.parse(texto); 
				
		el.innerHTML = objetoJson.apresentacao;
    }
}