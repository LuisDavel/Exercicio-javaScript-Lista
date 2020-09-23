var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(event){
    if(event.key === 'Enter'){
        adicionar();
    }
    console.log(event);
};

botaoAdicionar.onfocus = function(event){
    console.log(event);
}

botaoAdicionar.onmouseover = function(event){
    console.log(event);
}

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(event){
    console.log(event);

    var tarefa = inputTarefa.value;

    if (tarefa !== ''){
        var li = document.createElement('li');
        li.innerText = tarefa; 

        li.classList.add('para-fazer');
        li.onclick = function(){
            li.classList.remove('para-fazer');
            li.classList.add('concluida');
        }

        li.ondblclick = function(){
            li.classList.remove('concluida');
            li.classList.add('para-fazer');
        }

        var ol = document.getElementById('tarefas');
        ol.appendChild(li);

        inputTarefa.value = '';
    }
};