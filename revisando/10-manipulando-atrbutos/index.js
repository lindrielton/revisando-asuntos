const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
   // input.value =  'olá mundo!'
   // input.getAttribute('value')

   // console.log(input.value)// o input. value pega o valor em tempo real
   // console.log(input.getAttribute('value'))//o get atribut ele pega o valor definido no html
})


document.getElementById('type').addEventListener('click', function(){
     //input.type =  input.type !== 'radio'  ?   'radio' : 'text'
     input.setAttribute('type', 'radio')// só que ele não alterna
})


document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'escreva algo..'
    
})


document.getElementById("disable").addEventListener("click", function(){
    input.setAttribute('disabled', !input.disabled)
   
})



// atributos data do html são uma forma de utilizar valores 

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log("o valor do atrbuto  data-somenthing é :"  + data)
    input.dataset.somethingElse = 'Algun outro Valor'// sempre usar camel case no js
    console.log("o valor do atrbuto  data-somenthing  agora é :"  + input.dataset.somethingElse )
})

