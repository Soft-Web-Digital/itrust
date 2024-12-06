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

const headGainerTwo = document.querySelector('.gainer-head-two');

const headItems = headGainerTwo.querySelectorAll('p');

headItems.forEach((item) => {
    item.addEventListener(('click'), () => {
        headItems.forEach((item) => {
            item.classList.remove('active-gains')
            item.classList.add('inactive-gain')
        })
        item.classList.add('active-gains')
        item.classList.remove('inactive-gain')
    })
})

const select = document.getElementById('select');
const crypto = document.querySelector('.crypto');
const stocks = document.querySelector('.stocks');
const returns = document.querySelector('.go-back');

returns.addEventListener(('click') , () => {
    stocks.classList.add('hidden');
    stocks.classList.remove('flex');
    crypto.classList.add('flex');
    crypto.classList.remove('hidden');
})

const returnsTwo = document.querySelector('.go-back-two');

returnsTwo.addEventListener(('click') , () => {
    stocks.classList.add('hidden');
    stocks.classList.remove('flex');
    crypto.classList.add('flex');
    crypto.classList.remove('hidden');
})

select.addEventListener('change', () => {
    const selectedValue = select.value;

    if(selectedValue === "crypto"){
        crypto.classList.remove('hidden');
        crypto.classList.add('flex');
        stocks.classList.add('hidden');
        stocks.classList.remove('flex')
    }else if(selectedValue === "stocks"){
        stocks.classList.remove('hidden');
        stocks.classList.add('flex');
        crypto.classList.add('hidden');
        crypto.classList.remove('flex')
    }
});

const buttonList = document.querySelector('.pre-grpah .buttons');
const buttonss = buttonList.querySelectorAll('button');

buttonss.forEach((item) => {
    item.addEventListener(('click'), () => {
        buttonss.forEach((item) => {
            item.classList.remove('pre-active-button')
            item.classList.add('pre-inactive-button')
        })
        item.classList.add('pre-active-button')
        item.classList.remove('pre-inactive-button')
    })
})

const tradeOptions = document.querySelector('.trade .h');

const options = tradeOptions.querySelectorAll('p');

options.forEach(item => {
    // item.classList.remove('active-option');
    item.addEventListener('click', () => {
        options.forEach(t => {
            t.classList.remove('active-option');
            t.classList.add('inactive-option');
        });
        item.classList.add('active-option');
        item.classList.remove('inactive-option');
    })
})

const radioOptions = document.querySelector('.radio-options form');
const radios = radioOptions.querySelectorAll('.in');

radios.forEach(item => {
    // item.classList.remove('active-radio');
    item.addEventListener(('click'), () => {
        radios.forEach(t => {
            t.classList.remove('active-radio');
            t.classList.add('inactive-radio');
        });
        item.classList.add('active-radio');
        item.classList.remove('inactive-radio');
    })
})

