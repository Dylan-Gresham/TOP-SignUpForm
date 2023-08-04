const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cPassword');
const createAccButton = document.getElementById('createAcc');
const logInButton = document.getElementById('logIn');

function validate() {
    if(passwordInput.value === '' || confirmPasswordInput.value === '' ||
       passwordInput.value === undefined || confirmPasswordInput.value === undefined ||
       passwordInput.value === null || confirmPasswordInput.value === null) {
        return false;
    } else {
        return passwordInput.value === confirmPasswordInput.value;
    }
}

passwordInput.addEventListener('focusout', (event) => {
    if(validate()) {
        if(passwordInput.classList.contains('invalid')) {
            passwordInput.classList.remove('invalid');
            confirmPasswordInput.classList.remove('invalid');
        }

        passwordInput.classList.add('valid');
        confirmPasswordInput.classList.add('valid');
    } else {
        if(passwordInput.classList.contains('valid')) {
            passwordInput.classList.remove('valid');
            confirmPasswordInput.classList.remove('valid');
        }
        
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
    }

    event.stopPropagation();
});

confirmPasswordInput.addEventListener('focusout', (event) => {
    if(validate()) {
        if(confirmPasswordInput.classList.contains('invalid')) {
            confirmPasswordInput.classList.remove('invalid');
            passwordInput.classList.remove('invalid');
        }

        confirmPasswordInput.classList.add('valid');
        passwordInput.classList.add('valid');
    } else {
        if(confirmPasswordInput.classList.contains('valid')) {
            confirmPasswordInput.classList.remove('valid');
            passwordInput.classList.remove('valid');
        }
        
        confirmPasswordInput.classList.add('invalid');
        passwordInput.classList.add('invalid');
    }

    event.stopPropagation();
});

createAccButton.addEventListener('click', (event) => {
    if(validate()) {
        alert('Account Created!');
    } else {
        alert('Account was not created. Some input fields are still invalid.');
    }

    event.stopPropagation();
});

logInButton.addEventListener('click', (event) => {
    if(validate()) {
        alert('Logged in!');
    } else {
        alert('Account was not logged into. Some input fields are still invalid.');
    }

    event.stopPropagation();
});
