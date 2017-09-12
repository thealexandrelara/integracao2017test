function ExibeGrupoObrigatorias() {
    document.getElementById("calculo1A").style.display = "block";
	document.getElementById("fundamentosMatematica").style.display = "block";
	document.getElementById("grupoObrigatorias").style.display = "none";
	document.getElementById("grupoOptativas").style.display = "none";
	document.getElementById("grupoEspecificas").style.display = "none";
}

function ExibeIFrame(id, arquivo){
	var documento = document.getElementById(id);
	documento.src = arquivo;
	documento.style.visibility = "visible";
}