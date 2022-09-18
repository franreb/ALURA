var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adicionar");
	var paciente = capturarDatosPaciente(form);
	
	
	var errores = validarPaciente(paciente);
	if(errores.length > 0){
		exhibirMensajesErrores(errores);
		return;
	}

	adicionarPacienteEnLaTabla(paciente);
	form.reset();

	var mensajeErrores = document.querySelector("#mensajes-Errores");
	mensajeErrores.innerHTML = "";
});

function adicionarPacienteEnLaTabla(paciente){
	var pacienteTr = construirTr(paciente);
	var tabla = document.querySelector("#tabla-pacientes");
	tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form){
	var paciente = {
		 nombre: form.nombre.value,
		 peso: form.peso.value,
		 altura: form.altura.value,
		 gordura: form.gordura.value,
		 imc: calcularIMC(form.peso.value,form.altura.value)
	}	
	return paciente;
}

function construirTr(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");	

	pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
	pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(construirTd(paciente.gordura,"info-gorudra"));
	pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));
	

	return pacienteTr;
}

function construirTd(dato,clase){
	var td = document.createElement("td");
	td.classList.add(clase);
	td.textContent = dato;
	return td;
}

function validarPaciente(paciente){

	var errores = [];
	if(paciente.nombre.length == 0){
		errores.push("El Nombre no puede estar vacio");
	}

	if(paciente.peso.length == 0){
		errores.push("El Peso no puede estar vacio");
	}

	if(paciente.altura.length == 0){
		errores.push("La Altura no puede estar vacia");
	}

	if(paciente.gordura.length == 0){
		errores.push("La Gordura no puede estar vacia");
	}

	if(!validarPeso(paciente.peso)){
		errores.push("El Peso es Incorrecto");
	}
	

	if(!validarAltura(paciente.altura)){
		errores.push("La Altura es Incorrecta");
	}

	return errores;
}

function exhibirMensajesErrores(errores){
	var ul = document.querySelector("#mensajes-Errores");
	ul.innerHTML = "";
		errores.forEach(function(error){
		var li = document.createElement("li");
		li.textContent = error;
		ul.appendChild(li);

	});

}
