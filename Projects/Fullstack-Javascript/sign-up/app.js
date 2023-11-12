const passwordElement = document.getElementById('password');
const confirmPasswordElement = document.getElementById('confirm-password');

passwordElement.addEventListener('input', checkMatch);
confirmPasswordElement.addEventListener('input', checkMatch);

function checkMatch(){
    if(passwordElement.value != confirmPasswordElement.value || passwordElement.value == ''){
        passwordElement.classList.remove('valid');
        passwordElement.classList.add('invalid');
        confirmPasswordElement.classList.remove('valid');
        confirmPasswordElement.classList.add('invalid');
    }
    else{
        passwordElement.classList.remove('invalid');
        passwordElement.classList.add('valid');
        confirmPasswordElement.classList.remove('invalid');
        confirmPasswordElement.classList.add('valid');
    }
}