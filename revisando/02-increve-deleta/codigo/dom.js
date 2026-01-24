

let btnAdicinar = document.getElementById('add')

btnAdicinar.addEventListener('click', function(){
    let nome = document.getElementById('nome').value
    let numero = document.getElementById('numero').value

    let li = document.createElement('li')
    li.id = "pessoa." + numero
    li.innerText = nome
    let list = document.getElementById('candidatos')
    list.appendChild(li)
    console.log(li)

    document.getElementById('numero').value = ''
    document.getElementById('nome').value = ''
})




let deletarPessoa = document.getElementById('dlet')

deletarPessoa.addEventListener('click', function(){

    let numeroDelet = document.getElementById('deletado').value
    let li = document.getElementById("pessoa." + numeroDelet)
   
     li.remove()
     numeroDelet = document.getElementById('deletado').value = ''


})