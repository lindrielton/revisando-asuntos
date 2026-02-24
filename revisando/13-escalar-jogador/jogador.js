const nome = document.querySelector("#NomeJogador")
const numeroGamer = document.querySelector("#numeroCamisa")
const position = document.querySelector("#posicao")
let ul = document.getElementById('listJogador')
const buttonScaler = document.querySelector("#escaler")



buttonScaler.addEventListener("click", playerGamer)


function playerGamer(){
    
    let li = document.createElement("li")
    li.append('Jogador :' + nome.value + '\n ' + 'Numero da Camisa :'  + '' + numeroGamer.value + '\n' +  "Posição :" + ""  + ' '  + position.value)
         li.classList = 'lista' + numeroGamer.value
    ul.appendChild(li)
   
    
    
   
}


document.getElementById('remover').addEventListener('click', function(){
    const gamerDelet = document.getElementById('gameremove')
    const li = document.querySelector('.lista' + gamerDelet.value)
    if(li){
        alert('Desejá remover este atleta ' + gamerDelet.value)
        ul.remove(li)
    }else{
        alert('dados invalidos')
    }

     nome.value = ''
     numeroGamer.value = ''
     position.value = ''
     gamerDelet.value = ''

   
   
})