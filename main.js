const loginForm = document.querySelector('.login-form')
const btnLogin = document.querySelector('.button2')
const registerForm = document.querySelector('.register-form')
const btnRegister = document.querySelector('.button1')

btnLogin.addEventListener('click', toggleLoginForm)



document.addEventListener('DOMContentLoaded', function(){
    btnRegister.addEventListener('click', function(event){
        if (registerForm.classList.contains('inactive')){
                registerForm.classList.remove('inactive')
                loginForm.classList.add('inactive')
            } else {
                registerForm.classList.add('inactive')
            }
    })
})

function toggleLoginForm(){
    loginForm.classList.toggle('inactive')
    registerForm.classList.add('inactive')
}




