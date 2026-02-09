
/*## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o
 funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

function novaLabel(nametexto, htmlfor){
    const labelname = document.createElement('label')
    labelname.innerText = nametexto;
    labelname.htmlFor = htmlfor;
    return labelname;

}


function inputTec(id,value,name,type='texto'){
    const inputTec = document.createElement('input')
    inputTec.id = id;
    inputTec.value = value;
    inputTec.name = name;
    inputTec.type = type;
    return inputTec

}


const form = document.getElementById('devForm')
const inputCandidato = document.getElementById('fullname')
const btnTecnologia = document.getElementById('addTechBtn')
const stack = document.getElementById('stackInputs')
let contwrou = 0;

let develops = []



btnTecnologia.addEventListener('click', function(ev){
    ev.preventDefault()

 const newRow = document.createElement('li')
 const cont = contwrou
 contwrou ++ 
 newRow.id = 'line-' + cont
 newRow.className = 'inputs'
 


    const nametcnologi = novaLabel('Nome: ', 'line-' + cont)
    const inputTc = inputTec('line-'+ cont, null, 'tecnologi')

    const experienci = novaLabel(' Experiencia: ')

    const identficador = 'line-' + cont + '.1'
    const inputradio1 = inputTec(identficador,'0-2 Anos', 'inputRdio' + cont, 'radio')
    const labelradio1 = novaLabel('0-2 anos',  identficador)

    const identficador2 = 'line-' + cont + '.2'
    const inputradio2 = inputTec(identficador2,'3-4 Anos', 'inputRdio' + cont, 'radio')
    const labelradio2 = novaLabel('3-4 anos', identficador2)

    const identficador3 = 'line-' + cont + '.3'
    const inputradio3 = inputTec(identficador3,'5 + anos', 'inputRdio' + cont, 'radio')
    const labelradio3 = novaLabel('5 + anos ', identficador3)

    const btnRemove = document.createElement("button")
    btnRemove.type = 'button'
    btnRemove.id = 'btnremove'
    btnRemove.innerText = 'Remover'
    btnRemove.addEventListener('click', function(){
       stack.removeChild(newRow)

    
})


    newRow.append(nametcnologi, inputTc, experienci, inputradio1,labelradio1, inputradio2, labelradio2, inputradio3, labelradio3, btnRemove)
    stack.appendChild(newRow)

    console.log(nametcnologi)
    console.log(inputTc)

})


document.addEventListener('submit', function(ev){
    ev.preventDefault()

    const Nome = document.getElementById('fullname')
    const tecname = document.querySelectorAll('.inputs')

     const inform = []
    tecname.forEach(function(row){
        const nametec = document.querySelector('#' + row.id + ' input[name="tecnologi"]').value
        const rsdio = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        inform.push({name: nametec, rsinputs: rsdio})

    })
        const alunocadastrado = ({fname: Nome.value, skil: inform})
         develops.push(alunocadastrado)
         console.log(develops)


         document.getElementById('fullname').value = ''
         tecname.forEach((list)=>{
            list.remove()
        })


       

})
