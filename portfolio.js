const timeframe = document.querySelector('.timeframe');
const time = timeframe.querySelectorAll('p');

time.forEach(item => {
    // item.classList.remove('active-time');
    item.addEventListener('click', () => {
        time.forEach(t => {
            t.classList.remove('active-time');
            t.classList.add('inactive-time');
        });
        item.classList.add('active-time');
        item.classList.remove('inactive-time');
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

const navigationItem = document.querySelector('.navigation .flex');
const navItems = navigationItem.querySelectorAll('p');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navItems.forEach(t => {
            t.classList.remove('active-nav');
            t.classList.add('inactive-nav');
        });
        item.classList.add('active-nav');
        item.classList.remove('inactive-nav');
    })
})

const overview = document.querySelector('.overview');
const assets = document.querySelector('.assets');
const trade = document.querySelector('.trade');
const pending = document.querySelector('.pending');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        const sections = [overview, assets, trade, pending];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
        });
        if(item.textContent === 'Overview'){
            overview.classList.add('flex');
            overview.classList.remove('hidden');
        } else if(item.textContent === 'Assets'){
            assets.classList.add('flex');
            assets.classList.remove('hidden');
        } else if(item.textContent === 'Trade'){
            trade.classList.add('flex');
            trade.classList.remove('hidden');
        } else if(item.textContent === 'Holdings'){
            pending.classList.add('flex');
            pending.classList.remove('hidden');
        }
    })
})

const choice = document.querySelector('.choice');
const choices = choice.querySelectorAll('p');

choices.forEach((item) => {
    item.addEventListener('click', () => {
        choices.forEach(t => {
            t.classList.remove('active-choice');
            t.classList.add('inactive-choice');
        });
        item.classList.add('active-choice');
        item.classList.remove('inactive-choice');
    })
})