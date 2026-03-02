/*# 14 - Exercício 12

## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores,
 suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do 
desenvolvedor e um botão para adicionar uma nova tecnologia.

- Ao clicar no botão um evento deve ser disparado 
criando no formulário uma nova linha de inputs contendo:

    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência
     (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)

    - um botão de remover que deve excluir essa linha.

- O formulário também deve ter um botão de cadastrar que salva as 
informações do dev em um array e limpa o formulário. Para testar o 
funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript
 e a página deve funcionar sem acionar um recarregamento.*/


function creatLabel(forname, name){
    let label = document.createElement("label")
    label.forname = forname;
    label.textContent = name
    return label;

}

function creatInput( id, value, name,  placeholder = '', type = 'text',){
      let input = document.createElement("input")
      input.id = id;
      input.value = value;
      input.name = name;
      input.placeholder = placeholder;
      input.type = type;
      return input
}


let bunttonClic = document.getElementById('btn')
let arealist = document.getElementById("areaList")
let cont = 0
let devs = []



bunttonClic.addEventListener("click", function(ev){
    ev.preventDefault()
      let li = document.createElement('li')
      li.classList = 'nods'
      let rowid = 'list-' + cont
      cont ++
    

      li.appendChild(creatLabel('NameCandidato', 'Nome :')) 
      li.appendChild(creatInput(rowid, '' ))

      li.appendChild(creatLabel('experiencia', '  experiência :'))
      let id1 = ' -0.2'
      li.appendChild(creatInput(id1,  id1, 'exp-'+ cont, undefined,  'radio'))
      li.appendChild(creatLabel('experiencia', '  0-2 anos :'))

      let id2 = ' -3.4'  
      li.appendChild(creatInput(id2,  id2 ,'exp-'+ cont, undefined, 'radio'))
      li.appendChild(creatLabel('experiencia', ' 3-4 anos :'))
      
      let id3 =  ' -.5'  
      li.appendChild(creatInput(id3,  id3 ,'exp-'+ cont, undefined, 'radio')) 
      li.appendChild(creatLabel('experiencia', ' + 5 anos : '))
      
     

    let  buttonrmv = document.createElement('button')
     buttonrmv.innerText = 'Remover'
     buttonrmv.type = 'button'
     buttonrmv.id = 'remove'


    

     li.appendChild(buttonrmv)
     arealist.append(li , registerDev)



   let btnRemove =  document.querySelectorAll("#remove")
    
   btnRemove.forEach(function(btn){
    btn.addEventListener('click', function(ev){
         let listas = ev.currentTarget.parentNode
         listas.remove()
       
    })
    
     
   })



    document.getElementById("registerDev").addEventListener("click", function(ev){
        ev.preventDefault()
        let nome = document.getElementById('nomeDev').value
        document.querySelectorAll('.nods').forEach(function(row){
           
            let listerMarqued =  {
                NameDev:nome,
                NameTecnologia:row.querySelector('input[type="text"]').value,
                experiEncia:row.querySelector('input[type="radio"]:checked').value + 'anos'
              
            }

          devs.push(listerMarqued)

        })
        console.log(devs)
        
    })


    

})


  










