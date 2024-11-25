const faq = document.querySelectorAll('.q .visible img');

faq.forEach((question) => {
    question.addEventListener('click', () => {
        const drop = question.closest('.q').querySelector('.hide');
        
        if (question.attributes.src.value === './assets/x.svg') {
            question.setAttribute('src', './assets/plus.svg');
            drop.classList.add('hidden');
        } else {
            question.setAttribute('src', './assets/x.svg');
            drop.classList.remove('hidden');
        }
    });
});