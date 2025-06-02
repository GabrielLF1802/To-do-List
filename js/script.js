
let Savetarefas = []
window.addEventListener("beforeunload",function(event){
    localStorage.setItem("minhastarefas", JSON.stringify(Savetarefas))
}) 
window.onload = function(){
    // SE QUIZER MARCAR COMO CONCLUIDO E APAGAR AUTOMATICO
/*     const checkboxes= document.querySelectorAll('.tarefa')
    checkboxes.forEach(checkbox=>{
        checkbox.addEventListener("change", function(){
            if(this.checked){
                deletar(this)
                console.log('deu')
            }else{
                console.log('nao')
            }
        })
            
    }) */
    let historico= JSON.parse(localStorage.getItem('minhastarefas')) || []
    Savetarefas= historico
    let numTaref= historico.length
    for (let i=0; i<=numTaref-1; i++){
        let res = document.getElementById('list')
        let tarefa= document.createElement('ul')
        let texto= historico[i]
        tarefa.innerHTML=`<p>${texto}</p> <input type="checkbox" name="checkbox" class="tarefa"> <br> <button id="${texto}" onclick="deletar(this)" class="delete">🗑️</button>`
        res.appendChild(tarefa)

// pode-se fazer um foreach 
    }
}


function adicionar(){
    let res = document.getElementById('list')
    let tarefa= document.createElement('ul')
    let texto= document.getElementById('text').value
    if(texto.trim()==""){
        return
    }
    guardarTarefa(texto)
    tarefa.innerHTML=`<p>${texto}</p> <input type="checkbox" name="checkbox" class="tarefa"><button id="${texto}" onclick="deletar(this)" class="delete">🗑️</button> <br>`
    res.appendChild(tarefa)
    document.getElementById('text').value=""

    // SE QUIZER MARCAR COMO CONCLUIDO E APAGAR AUTOMATICO
/*     const checkboxes= document.querySelectorAll('.tarefa')
    checkboxes.forEach(checkbox=>{
    checkbox.addEventListener("change", function(){
        if(this.checked){
            deletar(this)
            console.log('deu')
        }else{
            console.log('nao')
        }
    })
        
}) */


}
function guardarTarefa(texto){
    Savetarefas.push(texto)

}
// MARCAR A CHECKBOX
const checkboxes= document.querySelectorAll('.tarefa')
checkboxes.forEach(checkbox=>{
    checkbox.addEventListener("change", function(){
        if(this.checked){
            deletar(this)
            console.log('deu')
        }else{
            console.log('nao')
        }
    })
        
})



function deletar(task){
    task.parentElement.remove()
    const index = Savetarefas.findIndex((conteudo)=> conteudo===task.id)
    if (index!==-1){
        Savetarefas.splice(index, 1)
    }
    console.log(Savetarefas)
}
function limpar(){
    localStorage.clear()
    Savetarefas=[]
    console.log(localStorage)
    document.getElementById('list').innerHTML=""

}

// usar foreach no onload
// colocar função de editar 