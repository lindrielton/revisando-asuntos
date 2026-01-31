const button = document.querySelector('#orderForm')

button.addEventListener('submit', function(evento){
    evento.preventDefault()//inped o conportamento padrao/ previne o carregamento das action.
    const prent = evento.currentTarget.parentNode
    console.log(prent)

    //pegando inputs

    const name = document.querySelector('input[name="name"]').value
    const adress = document.querySelector('input[name="address"]').value
    const selector = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observation = document.querySelector('textarea[name="observations"]').value


    let salad = ''
     document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
            salad += ' ' + item.value + '\n'
     })


     console.log({name, adress, selector, main , observation, salad})



})