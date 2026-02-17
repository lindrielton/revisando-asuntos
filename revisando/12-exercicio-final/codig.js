/*Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML,
 CSS e Javascript. Você pode desenvolver com liberdade, da forma que preferir,
  mas o jogo precisa atender aos seguintes requisitos:

- Deve ser possível incluir os nomes dos dois jogadores;
- O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
- Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
- Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve ser possível clicar naquela região novamente;
- Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
- Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
- Deve ser possível reiniciar o jogo para jogar novamente.*/


const gamer1 = document.getElementById('gamer1')
const gamer2 = document.getElementById('gamer2')
const tictac = document.getElementById('tic-tac-toe')

let updatePlayer = document.getElementById('updatedPlayer')

const elementoPai = document.getElementById('elementPai')

const x = document.querySelector('#x')
const o = document.querySelector('#o')

const areaGame = document.querySelectorAll('.tic')



 
let gameratualizad = gamer1.value


areaGame.forEach(function(list){
  list.addEventListener('click', function(){
    
    if(gameratualizad === gamer1.value){
      gameratualizad = gamer2.value
    }else{
      gameratualizad = gamer1.value
    }

     updatePlayer.innerText = 'Jogador: ' + gameratualizad

  })
   

  
})




//  document.body.classList.toggle('is-light')
 //    document.body.classList.toggle('is-dark')
 //input.type =  input.type !== 'radio'  ?   'radio' : 'text'