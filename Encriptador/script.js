const	inputTexto = document.querySelectorAll(".input-text")
const	mensaje = document.querySelectorAll(".input-text-area")

function btencriptar(){
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
}

function	encriptar(String){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	StringparaEncriptar = StringParaEncriptar.tolowerCase();

	for(let i=0; i<matrizCodigo.length; i++){
		if(StringparaEncriptar.includes(matrizCodigo[i][0]))


	}
	

}