const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
})