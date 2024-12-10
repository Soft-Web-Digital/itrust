const firstForm = document.getElementById('f-form');

firstForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    window.location.href = 'signtwo.html';
})