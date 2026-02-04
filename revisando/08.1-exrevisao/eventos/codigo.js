// faça um exercicio de fixação praticando e manipulando o que foi passado nas aulas anteriores


function novaLabel(nametexto, htmlfor){
    const labelname = document.createElement('label')
    labelname.innerText = nametexto;
    labelname.htmlFor = htmlfor;
    return labelname;

}


function inputTec(id,name,type='texto'){
    const inputTec = document.createElement('input')
    inputTec.id = id;
    inputTec.name = name;
    inputTec.type = type;
    return inputTec

}


const form = document.getElementById('devForm')
const inputCandidato = document.getElementById('fullname')
const btnTecnologia = document.getElementById('addTechBtn')
const stack = document.getElementById('stackInputs')
let contwrou = 0



btnTecnologia.addEventListener('click', function(ev){
    ev.preventDefault()

 const newRow = document.createElement('li')
 const cont = contwrou
 contwrou ++ 
 newRow.id = 'line-' + cont
 newRow.className = 'inputs'
 


    const nametcnologi = novaLabel('Nome: ', 'line-' + cont)
    const inputTc = inputTec('line-'+ cont, 'tecnologi',)


    newRow.append(nametcnologi, inputTc)
    stack.appendChild(newRow)

    console.log(nametcnologi)
    console.log(inputTc)

})