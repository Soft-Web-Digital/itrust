const firstForm = document.getElementById('f-form');

firstForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    window.location.href = 'signtwo.html';
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