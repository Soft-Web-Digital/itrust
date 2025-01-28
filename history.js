const switchTabs = document.querySelector('.switch')
const tabss = switchTabs.querySelectorAll('p')

tabss.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabss.forEach((t) => {
            t.classList.remove('active-history')
        })
        tab.classList.add('active-history')
    })
})

const trade = document.querySelector('.trades-history');
const transaction = document.querySelector('.transaction-history');
const savings = document.querySelector('.savings-history');

tabss.forEach((tab) => {
    tab.addEventListener('click', () => {
        const sections = [trade, transaction, savings];
        sections.forEach((section) => {
            section.classList.remove('flex');
            section.classList.add('hidden');
        })
        if(tab.textContent === "Trade History"){
            trade.classList.add('block');
            trade.classList.remove('hidden');
        }else if(tab.textContent === "Transaction History"){
            transaction.classList.add('flex');
            transaction.classList.remove('hidden');
        }else if(tab.textContent === "Savings History"){
            savings.classList.add('flex');
            savings.classList.remove('hidden')
        }
    })
})

const hamMenu = document.getElementById('ham-menu');
const dropdown = document.querySelector('.secoss')

hamMenu.addEventListener(('click'), () => {
    dropdown.classList.toggle('hidden')
})