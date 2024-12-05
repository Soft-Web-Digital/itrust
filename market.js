const star = document.querySelectorAll('.star');

star.forEach(( item ) => {
    item.addEventListener(('click'), () => {
        if(item.attributes.src.value === "./assets/unstar.svg"){
            item.setAttribute('src', './assets/star.svg')
        }else if(item.attributes.src.value === "./assets/star.svg"){
            item.setAttribute('src', './assets/unstar.svg')
        }
    })
})

const headGainer = document.querySelector('.gainer-head');

const items = headGainer.querySelectorAll('p');

items.forEach((item) => {
    item.addEventListener(('click'), () => {
        items.forEach((item) => {
            item.classList.remove('active-gain')
            item.classList.add('inactive-gain')
        })
        item.classList.add('active-gain')
        item.classList.remove('inactive-gain')
    })
})