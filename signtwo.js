const form = document.getElementById('t-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = form.querySelector('input').value;
    window.location.href = 'signthree.html';
})