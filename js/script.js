

function adicionar(){
    let res = document.getElementById('list')
    let tarefa= document.createElement('ul')
    let texto= document.getElementById('text').value
    tarefa.innerHTML=`<p>${texto}</p> <input type="checkbox" name="nada" class="tarefa"> <br>`
    res.appendChild(tarefa)
    console.log(tarefa)

}