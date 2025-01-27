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

// const headGainerTwo = document.querySelector('.gainer-head-two');

// const headItems = headGainerTwo.querySelectorAll('p');

// headItems.forEach((item) => {
//     item.addEventListener(('click'), () => {
//         headItems.forEach((item) => {
//             item.classList.remove('active-gains')
//             item.classList.add('inactive-gain')
//         })
//         item.classList.add('active-gains')
//         item.classList.remove('inactive-gain')
//     })
// })

const select = document.getElementById('select');
const crypto = document.querySelector('.crypto');
const stocks = document.querySelector('.stocks');
// const returns = document.querySelector('.go-back');

// returns.addEventListener(('click') , () => {
//     stocks.classList.add('hidden');
//     stocks.classList.remove('flex');
//     crypto.classList.add('flex');
//     crypto.classList.remove('hidden');
// })

// const returnsTwo = document.querySelector('.go-back-two');

// returnsTwo.addEventListener(('click') , () => {
//     stocks.classList.add('hidden');
//     stocks.classList.remove('flex');
//     crypto.classList.add('flex');
//     crypto.classList.remove('hidden');
// })

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

// const buttonList = document.querySelector('.pre-grpah .buttons');
// const buttonss = buttonList.querySelectorAll('button');

// buttonss.forEach((item) => {
//     item.addEventListener(('click'), () => {
//         buttonss.forEach((item) => {
//             item.classList.remove('pre-active-button')
//             item.classList.add('pre-inactive-button')
//         })
//         item.classList.add('pre-active-button')
//         item.classList.remove('pre-inactive-button')
//     })
// })

const tradeOptions = document.querySelector('.trade .h');

const options = tradeOptions.querySelectorAll('p');
options.forEach(item => {
    item.addEventListener('click', () => {
        options.forEach(t => {
            t.classList.remove('active-option');
            t.classList.remove('sell-option'); // Remove sell class if previously added
            t.classList.add('inactive-option');
        });

        item.classList.add('active-option');
        item.classList.remove('inactive-option');

        // Check if the textContent is "sell" and add a specific class
        if (item.textContent.trim().toLowerCase() === 'sell') {
            item.classList.add('sell-option');
        }
    });
});


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

const tradeSection = document.querySelector('.trade');
const pendingSection = document.querySelector('.pending');
const markSection = document.querySelector('.mark');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        const sections = [tradeSection, pendingSection, markSection];
        sections.forEach((section) => {
            section.classList.add('hidden')
            section.classList.add('flex')
        })
        if(item.textContent === "Watchlist"){
            pendingSection.classList.add("flex");
            markSection.classList.add("flex");
            markSection.classList.remove("hidden");
            pendingSection.classList.remove("hidden");
        } else if(item.textContent === "Trade"){
            tradeSection.classList.add("flex");
            tradeSection.classList.remove("hidden");
        }
    })
})

const hamMenu = document.getElementById('ham-menu');
const dropdown = document.querySelector('.secoss')

hamMenu.addEventListener(('click'), () => {
    dropdown.classList.toggle('hidden')
})