const buton = document.getElementById('register')


buton.addEventListener('click', mostarElements)



function mostarElements(ev){
     const Elements = ev.currentTarget.parentNode
     let Nome = Elements.children.username.value
     let senha = Elements.children.password.value
     let reptSenha = Elements.children.passwordConfirmation.value
     console.log({Nome, senha, reptSenha})
     
}


function removendoElementos(){
    buton.removeEventListener('click', mostarElements)
}




buton.addEventListener('mousemove', function(ev){
    console.log(ev.currentTarget)
})