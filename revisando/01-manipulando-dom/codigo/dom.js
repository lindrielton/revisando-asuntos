

const criar = document.getElementById('criatcontact');


criar.addEventListener('click', function(){

    let section = document.getElementById('contact-list')
    let h2 = document.createElement('h2')
    h2.innerText = 'Contato - '
    

    let ul = document.createElement('ul')
    let li = document.createElement('li')

    li.innerText = 'Nome: '
    const input = document.createElement('input')
    input.type = 'texto'
    input.name = 'texto'
    input.placeholder = 'primeiro Nome'

    li.appendChild(input)
    ul.appendChild(li)
    


   
    let liContact = document.createElement('li')

    liContact.innerText = 'Telefone: '
    const inputContact = document.createElement('input')
    inputContact.type = 'tel'
    inputContact.name = 'fullname'
    inputContact.placeholder = '(xx)xxxx-xxxx'

    liContact.appendChild(inputContact)
    ul.appendChild(liContact)

   
    let liEndereco = document.createElement('li')

    liEndereco.innerHTML = '<label for="adress">Endereço: </label>'
    const inputEndereco = document.createElement('input')
    inputEndereco.type = 'text'
    inputEndereco.name = 'address'
    inputEndereco.placeholder = 'Rua'
    inputEndereco.id = 'adress'

    liEndereco.appendChild(inputEndereco)
    ul.appendChild(liEndereco)

   section.append(h2, ul,)


     


})



let remover = document.getElementById('remevcotact')


remover.addEventListener('click', function(){

    let section = document.getElementById('contact-list')

    let h2 = document.getElementsByTagName('h2')
    let ul = document.getElementsByTagName('ul')

    section.removeChild(h2[h2.length-1])
    section.removeChild(ul[ul.length-1])

})