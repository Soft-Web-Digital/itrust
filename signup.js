const firstForm = document.getElementById('f-form');
const pass = document.getElementById('pass');
const confPass = document.getElementById('passconf');

firstForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    pass.value == confPass.value ? window.location.href = 'signtwo.html' : alert('Passwords do not match');
    // window.location.href = 'signtwo.html';
})

const passwords = document.querySelectorAll('.password');

passwords.forEach((item) => {
    const img = item.querySelector('img');
    const input = item.querySelector('input');

    img.addEventListener('click', () => {
        if(input.type === 'password'){
            input.type = 'text';
        }else{
            input.type = 'password';
        }
    })
})

const inputs = firstForm.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        const button = firstForm.querySelector('button');
        if (allFilled) {
            button.classList.add('all-filled');
        } else {
            button.classList.remove('all-filled');
        }
    });
})