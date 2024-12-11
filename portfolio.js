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
    const rad = item.querySelector('input');
    item.addEventListener(('click'), () => {
        radios.forEach(t => {
            t.classList.remove('active-radio');
            t.classList.add('inactive-radio');
            rad.checked = false;
        });
        item.classList.add('active-radio');
        item.classList.remove('inactive-radio');
        rad.checked = true;
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

const portfolioHide = document.getElementById('port-hide');
const portfolioValue = document.getElementById('port-value');

portfolioHide.addEventListener('click', () => {
    if(portfolioValue.textContent == "$45,545.65"){
        portfolioValue.textContent = "$*******";
    }else{
        portfolioValue.textContent = "$45,545.65";
    }
})

const hideMobile = document.getElementById('hide-mobile');
const mobileValue = document.getElementById('mobile-value');

hideMobile.addEventListener('click', () => {
    if(mobileValue.textContent == "$45,545.65"){
        mobileValue.textContent = "$*******";
    }else{
        mobileValue.textContent = "$45,545.65";
    }
})

const invHide = document.getElementById('inv-hide');
const mobileInv = document.getElementById('mobile-inv');

invHide.addEventListener('click', () => {
    if(mobileInv.textContent == "$0.00"){
        mobileInv.textContent = "$***";
    }else{
        mobileInv.textContent = "$0.00";
    }
})

document.querySelectorAll('.showInput').forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
        // Find the parent input-collapse container
        const collapseContainer = toggleButton.closest('.input-collapse');
        const collapseContent = collapseContainer.querySelector('.collapse-content');

        // Toggle visibility of collapse content
        collapseContent.classList.toggle('hidden');

        // Change the icon based on the state
        const isCollapsed = collapseContent.classList.contains('hidden');
        toggleButton.setAttribute(
            'src',
            isCollapsed ? './assets/show.svg' : './assets/collapse.svg'
        );
    });
});

const hamMenu = document.getElementById('ham-menu');
const dropdown = document.querySelector('.secoss')

hamMenu.addEventListener(('click'), () => {
    dropdown.classList.toggle('hidden')
})