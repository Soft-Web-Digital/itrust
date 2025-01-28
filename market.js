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



const tradeOptions = document.querySelector('.trade');

const options = tradeOptions.querySelectorAll('p');

options.forEach(item => {
    item.addEventListener('click', () => {
        // Reset classes for all options
        options.forEach(t => {
            buyForm.classList.remove('hidden');
            buyForm.classList.add('block');
            sellForm.classList.remove('block');
            sellForm.classList.add('hidden');
        });
        // Toggle forms based on the selected option
        if (item.textContent.trim().toLowerCase() === 'sell') {
            sellForm.classList.remove('hidden');
            sellForm.classList.add('block');
            buyForm.classList.remove('block');
            buyForm.classList.add('hidden');
        } else if (item.textContent.trim().toLowerCase() === 'buy') {
            buyForm.classList.remove('hidden');
            buyForm.classList.add('block');
            sellForm.classList.remove('block');
            sellForm.classList.add('hidden');
        }
    });
});
const radioOptions = document.querySelector('.radio-options ');
const radios = radioOptions.querySelectorAll('.in');



const tradeList = document.getElementById('act-trades');
const tradeItems = tradeList.querySelectorAll('p');
const chart = document.getElementById('on-chart');
const Positions =  document.getElementById('positions');
const stocksSec =  document.getElementById('stock');
const tradeSec = document.getElementById('tradeSec');
const history = document.getElementById('history');
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
        const sections = [stocksSec, chart, tradeSec,Positions,history];
        sections.forEach((section) => {
            section.classList.add('hidden');
            section.classList.remove('block');
        })
        if(item.textContent === 'Market Stats'){
            stocksSec.classList.remove('hidden');
            stocksSec.classList.add('flex');
        }else if(item.textContent === 'Charts'){
            chart.classList.remove('hidden');
            chart.classList.add('flex');
        }else if(item.textContent === 'Trade'){
            console.log(item.textContent)
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
    Assets: document.querySelectorAll('.assets'),
    Trade: document.querySelectorAll('.trade'),
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
        const isVisible = key === targetTextContent;

        // Loop through all elements in the section array
        sections[key].forEach((section) => {
            section.classList.toggle('block', isVisible);
            section.classList.toggle('hidden', !isVisible);
        });
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

  const radiobutton = document.querySelectorAll('.radio-switch')
  const radiocircle = document.querySelectorAll('.radio-circle')
  const tabItems = document.querySelectorAll('.tab p');


  
  const radioContainers = document.querySelectorAll('.radio-options');

  // Iterate through each container and set up event listeners
radioContainers.forEach((container) => {
  const radios = container.querySelectorAll('.in'); // Get all radio buttons within the container

  radios.forEach((item, index) => {
    // Add click event listener to each radio option
    item.addEventListener('click', () => {
      // Reset all radio buttons in the current container
      radios.forEach((t) => {
        t.classList.remove('active-radio');
        t.classList.add('inactive-radio');

        // Reset styles for radio-switch and radio-circle
        const radioSwitch = t.querySelector('.radio-switch');
        const radioCircle = t.querySelector('.radio-circle');
        radioSwitch.classList.remove('active'); // Reset border color
        radioCircle.classList.remove('active'); // Reset circle background
      });

      // Activate the clicked radio option
      item.classList.add('active-radio');
      item.classList.remove('inactive-radio');

      const radioSwitch = item.querySelector('.radio-switch');
      const radioCircle = item.querySelector('.radio-circle');
      radioSwitch.classList.add('active'); // Change border color
      radioCircle.classList.add('active'); // Change circle background

      // Show or hide forms based on the selected radio button
      const stockForms = document.querySelectorAll('.stock-form');
      const cryptoForms = document.querySelectorAll('.crypto-form');

      if (index === 0) {
        // Show stock forms (both buy and sell) and hide crypto forms
        stockForms.forEach((form) => {
          form.classList.add('block');
          form.classList.remove('hidden');
        });
        cryptoForms.forEach((form) => {
          form.classList.add('hidden');
          form.classList.remove('block');
        });
      } else if (index === 1) {
        // Show crypto forms (both buy and sell) and hide stock forms
        cryptoForms.forEach((form) => {
          form.classList.add('block');
          form.classList.remove('hidden');
        });
        stockForms.forEach((form) => {
          form.classList.add('hidden');
          form.classList.remove('block');
        });
      }
    });
  });

  // Set the first option (Stocks) as default active on page load
  const defaultRadio = radios[0];
  if (defaultRadio) {
    defaultRadio.click(); // Trigger the click event for the first option
  }
});

  // Tabs setup
  const tabs = {
    Buy: document.querySelector('.buy-form'),
    Sell: document.querySelector('.sell-form'),
  };
  
  // Function to switch tabs and reset the active radio to the first option
  function setActiveTab(targetTextContent) {
    Object.keys(tabs).forEach((key) => {
      const section = tabs[key];
      const isVisible = key === targetTextContent;
      section.classList.toggle('block', isVisible);
      section.classList.toggle('hidden', !isVisible);
    });
  
    // Reset the first radio in all containers to be the active option
    radioContainers.forEach((container) => {
      const radios = container.querySelectorAll('.in');
      radios.forEach((t) => {
        t.classList.remove('active-radio');
        t.classList.add('inactive-radio');
  
        const radioSwitch = t.querySelector('.radio-switch');
        const radioCircle = t.querySelector('.radio-circle');
        radioSwitch.classList.remove('active');
        radioCircle.classList.remove('active');
      });
  
      // Activate the first radio in the current container
      const firstRadio = radios[0];
      if (firstRadio) {
        firstRadio.classList.add('active-radio');
        firstRadio.classList.remove('inactive-radio');
  
        const firstRadioSwitch = firstRadio.querySelector('.radio-switch');
        const firstRadioCircle = firstRadio.querySelector('.radio-circle');
        firstRadioSwitch.classList.add('active');
        firstRadioCircle.classList.add('active');
      }
    });
  }
  
  // Add event listeners to tab items
  tabItems.forEach((item) => {
    item.addEventListener('click', () => {
      setActiveTab(item.textContent.trim());
    });
  });





  const stockTabItem = document.querySelectorAll('.stock-tab p');


  const stockTabs = {
    Buy: document.querySelector('.buy-stock'),
    Sell: document.querySelector('.sell-stock'),
  };
  

  function setActiveStockTab(targetTextContent) {
    Object.keys(stockTabs).forEach((key) => {
      const section = stockTabs[key];
      const isVisible = key === targetTextContent;
      section.classList.toggle('block', isVisible);
      section.classList.toggle('hidden', !isVisible);
    });
 
    
  }
  
  stockTabItem.forEach((item) => {
    item.addEventListener('click', () => {
        setActiveStockTab(item.textContent.trim());
    });
  });