
let Savetarefas = []
window.onload = function(){
    let historico= JSON.parse(localStorage.getItem('minhastarefas'))
    Savetarefas= historico
    let numTaref= historico.length
    for (let i=0; i<=numTaref-1; i++){
        let res = document.getElementById('list')
        let tarefa= document.createElement('ul')
        let texto= historico[i]
        tarefa.innerHTML=`<p>${texto}</p> <input type="checkbox" name="nada" class="tarefa"> <br>`
        res.appendChild(tarefa)

        console.log(historico)
    }
}


function adicionar(){
    let res = document.getElementById('list')
    let tarefa= document.createElement('ul')
    let texto= document.getElementById('text').value
    guardarTarefa(texto)
    tarefa.innerHTML=`<p>${texto}</p> <input type="checkbox" name="nada" class="tarefa"> <br>`
    res.appendChild(tarefa)

}
function guardarTarefa(texto){
    Savetarefas.push(texto)
    console.log(Savetarefas)
    localStorage.setItem('minhastarefas', JSON.stringify(Savetarefas))

}
function limpar(){
    Savetarefas = []
    historico= []
}