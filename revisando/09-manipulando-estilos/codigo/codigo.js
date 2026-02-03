function userLigthTheme(){
    document.body.style.color =   "#212529"
    document.body.style.backgroundColor = "#f1f5f9" 
    console.log('oi')
}

function userBlackTheme(){
    document.body.style.color = "#f1f5f9"
    document.body.style.backgroundColor = "#212529"
}


function switchTime(){
     document.body.classList.toggle('is-light')
     document.body.classList.toggle('is-dark')

}




document.getElementById('lightBtn').addEventListener('click', userLigthTheme)

document.getElementById('darkBtn').addEventListener("click", userBlackTheme)

document.getElementById('switchBtn').addEventListener('click', switchTime)
