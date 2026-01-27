function register(elemento){
    const nome =  elemento.children.username.value 
    const senha = elemento.children.password.value
    const confirmeSenha = elemento.children.passwordConfirmation.value

    if(senha === confirmeSenha){
        alert('candidato criado')
    }else{
        alert('erro, verifique a senha e tente novamente')
    }
}