

function registro(ev){
const sectionElement = ev.currentTarget.parentNode
const name = sectionElement.children.username.value
const password = sectionElement.children.password.value
const confirmPassoword = sectionElement.children.passwordConfirmation.value

if(password === confirmPassoword){
    alert('candidato: ' + name + ' cadastrado')
}else{
    alert('senhas inconpativeis')
}

console.log({name, password, confirmPassoword})

}



let btn = document.getElementById('register')

btn.addEventListener('click', registro)

// removendo um evento já exixtente
function removeElemet(){
    btn.removeEventListener('click', registro)
        alert('removido')
    
}


//fazendo outro evento


btn.addEventListener('mouseover', function(ev){
    const elementos = ev.currentTarget.parentNode
    console.log(elementos)
})

