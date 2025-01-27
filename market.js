const star = document.querySelectorAll('.star');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuIcon = './assets/ham.svg'; 
const closeIcon = './assets/Close.svg'; 
const portToggle = document.getElementById('port-toggle');
const portMenu = document.getElementById('port-menu');



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

// const radioOptions = document.querySelector('.radio-options form');
// const radios = radioOptions.querySelectorAll('.in');

// radios.forEach(item => {
//     // item.classList.remove('active-radio');
//     item.addEventListener(('click'), () => {
//         radios.forEach(t => {
//             t.classList.remove('active-radio');
//             t.classList.add('inactive-radio');
//         });
//         item.classList.add('active-radio');
//         item.classList.remove('inactive-radio');
//     })
// })
const history = document.getElementById('history');
const tradeList = document.getElementById('act-trades');
const tradeItems = tradeList.querySelectorAll('p');
const chart = document.getElementById('on-chart');
const Positions =  document.getElementById('positions');
const stocksSec =  document.getElementById('stock');
const tradeSec = document.getElementById('tradeSec');

tradeItems.forEach((item) => {
    item.addEventListener(('click'), () => {
        tradeItems.forEach((item) => {
            item.classList.remove('active-trade')
            item.classList.add('inactive-trade')
        })
        item.classList.add('active-trade')
        item.classList.remove('inactive-trade')
    })
})

tradeItems.forEach((item) => {
    item.addEventListener(('click'), () => {
        const sections = [stocksSec, chart, tradeSec];
        sections.forEach((section) => {
            section.classList.add('hidden');
            section.classList.remove('block');
        })
        if(item.textContent === 'Market Stats'){
            stocksSec.classList.remove('hidden');
            stocksSec.classList.add('block');
        }else if(item.textContent === 'Charts'){
            chart.classList.remove('hidden');
            chart.classList.add('block');
        }else if(item.textContent === 'Trade'){
            tradeSec.classList.remove('hidden');
            tradeSec.classList.add('block');
        }
        else if(item.textContent === 'Positions'){
            Positions.classList.remove('hidden');
            Positions.classList.add('block');
        }else if(item.textContent === 'History'){
            history.classList.remove('hidden');
            history.classList.add('block');
        }
    })
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

// hamMenu.addEventListener(('click'), () => {
//     dropdown.classList.toggle('hidden')
// })





const navigationItems = document.querySelectorAll('.navigation p');


const sections = {
    Assets: document.querySelector('.assets'),
    Trade: document.querySelector('.trade'),
};

// Function to set the active state
function setActiveNav(targetTextContent) {
    // Update the classes for navigation items
    navigationItems.forEach((item) => {
        const isActive = item.textContent === targetTextContent;
        item.classList.toggle('active-nav', isActive);
        item.classList.toggle('inactive-nav', !isActive);
        menu.classList.add('hidden');
        hamburger.src = menuIcon; 
    });

    // Update the visibility of sections
    Object.keys(sections).forEach((key) => {
        const section = sections[key];
        const isVisible = key === targetTextContent;
        console.log(targetTextContent)
        section.classList.toggle('block', isVisible);
        section.classList.toggle('hidden', !isVisible);
        menu.classList.add('hidden');
        hamburger.src = menuIcon; 
    });
}

// Add click event listeners to navigation items
navigationItems.forEach((item) => {
    item.addEventListener('click', () => {
        setActiveNav(item.textContent);
    });
});


hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    portMenu.classList.add('hidden');
  
    if (menu.classList.contains('hidden')) {
      hamburger.src = menuIcon; 
    } else {
  
      hamburger.src = closeIcon; 
    }
  });
  

  portToggle.addEventListener('click', () => {
    portMenu.classList.toggle('hidden');
  });