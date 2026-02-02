/*## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

function createLabel(text,htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label
}

function createInput(id, value, name, type ="text", placehoder = ''){
    const input = document.createElement('input')
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placehoder;
    return input

}



const addTechbtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developes = []
let inputRows = 0


addTechbtn.addEventListener('click', function(ev){
    ev.preventDefault()
    const stackInput = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows ++
    newRow.id = 'inputRows-' + rowIndex
    newRow.className = 'inputRow'

    const tecNameLabel = createLabel('Nome: ', 'techName-' + rowIndex )
    const tecNameInput = createInput('techName-' + rowIndex , null, 'techName')

    const expLabel = createLabel('Experiência: ', )

    const id1 = 'tecName' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 Anos : ', id1 )

    const id2 = 'tecName' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 Anos : ', id2 )

    const id3 = 'tecName' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5 ou + anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ Anos : ', id3 )


    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){
        stackInput.removeChild(newRow)
    })

    newRow.append(tecNameLabel, tecNameInput, expLabel ,  expRadio1, expLabel1 , expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)

    stackInput.appendChild(newRow)

})



form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let tecHnologies = []
    inputRows.forEach(function(row){
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        tecHnologies.push({name: techName, exp: techExp})
    })
    const newDev = {fullname : fullnameInput.value, tecnologi: tecHnologies}
      developes.push(newDev)
      alert('deve cadastrado')

      fullnameInput.value = ''
      inputRows.forEach(function (row){
      row.remove()
   })

   console.log(developes)
})




