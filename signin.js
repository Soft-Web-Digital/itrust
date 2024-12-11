const form = document.getElementById('s-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;
    if(email === ''){
        alert('Please enter a valid email address');
    }else{
        window.location.href = 'dashboard.html';
    }
})

const pass = document.getElementById('password');
const passImg = pass.querySelector('img')
const passInput = pass.querySelector('input');

passImg.addEventListener('click', () => {
    if(passInput.type === 'password'){
        passInput.type = 'text';
    }else{
        passInput.type = 'password';
    }
})

const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        const button = form.querySelector('button');
        if (allFilled) {
            button.classList.add('all-filled');
        } else {
            button.classList.remove('all-filled');
        }
    });
})