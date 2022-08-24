var pacientes = [] //variável global

function adicionarPacientes(){

	var inNome = document.getElementById('inNome')
	var outLista = document.getElementById('outLista')

	nome = inNome.value

	if(nome == ""){
		alert('Informe o nome!')
		inNome.focus()
		return
	}
	pacientes.push(nome)
	var lista = "" //para concatenar os nomes

	for(i = 0; i < pacientes.length ; i++){
		lista += (i+1) + ". " + pacientes[i] + "\n"
	}
	inNome.value = ""
	inNome.focus()

	outLista.textContent = lista

	
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarPacientes)

function urgenciaPaciente(){

	var inNome = document.getElementById('inNome')
	var outLista = document.getElementById('outLista')

	nome = inNome.value

	if(nome == ""){
		alert('Informe o nome do paciente!')
		inNome.focus()
		return
	}
	pacientes.unshift(nome)
	var lista = ""

	for(var i = 0; i< pacientes.length; i++){
		lista += (i+1) + ". " + pacientes[i] + "\n"
	}

	outLista.textContent = lista

	inNome.value = ""
	inNome.focus()
}
var btUrgencia = document.getElementById('btUrgencia')
btUrgencia.addEventListener('click', urgenciaPaciente)

function atender(){

	var inNome = document.getElementById('inNome')
	var outLista = document.getElementById('outLista')
	var outAtendimento = document.getElementById('outAtendimento')

	if(pacientes.length == 0){
		alert('Não há pacientes na fila')
		inNome.focus()
		return
	}
	//remove o primeiro elemento do vetor
	var atender = pacientes.shift()
	//exibe o nome do paciente em atendimento
	outAtendimento.textContent = atender
	var lista = ""

	for(var i = 0; i < pacientes.length; i++){
		lista += (i+1) + ". " + pacientes[i] + "\n"
	}

	outLista.textContent = lista
}
var btAtender = document.getElementById('btAtender')
btAtender.addEventListener('click', atender)