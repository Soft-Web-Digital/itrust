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