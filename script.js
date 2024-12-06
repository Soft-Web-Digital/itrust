const faq = document.querySelectorAll('.q .visible img');
const drops = document.querySelectorAll('.drop');
const ham = document.querySelector('.ham');
const dropMenu = document.querySelector('.drop-menu')

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

drops.forEach((drop) => {
    drop.addEventListener(('click'), () => {
        const dropdown = drop.closest('.drop').querySelector('.dropdown');
        if(dropdown.classList.contains('hidden')){
            dropdown.classList.remove('hidden');
            dropdown.classList.add('flex');
        }else{
            dropdown.classList.add('hidden');
            dropdown.classList.remove('flex');
        }
    })
})

ham.addEventListener(('click'), () => {
    if(dropMenu.classList.contains('hidden')){
        dropMenu.classList.remove('hidden');
        dropMenu.classList.add('flex');
    }else{
        dropMenu.classList.add('hidden');
        dropMenu.classList.remove('flex');
    }
})  