const radioWrap = document.querySelector('.rad');
const radio = radioWrap.querySelectorAll('.flex input');
const inputsTwo = document.querySelector('.inputs-two')
const inputs = document.querySelector('.inputs')
const total = document.getElementById('totalPages')

radio.forEach((rad) => {
    rad.addEventListener('click', () => {
        const sections = [inputs, inputsTwo];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
        });
        if(rad.value === "crypto"){
            inputsTwo.classList.add('flex');
            inputsTwo.classList.remove('hidden');
        }else if(rad.value === "card"){
            inputs.classList.add('flex');
            inputs.classList.remove('hidden');
        }
    })    
})

const tabs = document.querySelector('.buttons');
const tab = tabs.querySelectorAll('button');

tab.forEach((t) => {
    t.addEventListener('click', () => {
        tab.forEach((t) => {
            t.classList.remove('active-tab');
            t.classList.add('inactive-tab');
        });
        t.classList.add('active-tab');
        t.classList.remove('inactive-tab');
    })
})

tab.forEach((t) => {
    t.addEventListener('click', () => {
        const sections = [depositSection, transferSection, withdrawSection];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
            section.classList.remove('md:flex');
        });
        if(t.textContent === "Deposit" && t.classList.contains('active-tab')){
            depositSection.classList.add('flex');
            depositSection.classList.remove('hidden');
        }else if(t.textContent === "Transfer" && t.classList.contains('active-tab')){
            transferSection.classList.add('flex');
            transferSection.classList.remove('hidden');
        }else if(t.textContent === "Withdraw" && t.classList.contains('active-tab')){
            withdrawSection.classList.add('flex');
            withdrawSection.classList.remove('hidden');
        }
    })
})

const mobileTabs = document.querySelector('.mobile-buttons');
const mobileTab = mobileTabs.querySelectorAll('button');

mobileTab.forEach((t) => {
    t.addEventListener('click', () => {
        mobileTab.forEach((t) => {
            t.classList.remove('active-tab');
            t.classList.add('inactive-tab');
        });
        t.classList.add('active-tab');
        t.classList.remove('inactive-tab');
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

const vert = document.querySelector('.vert');
const depositSection = document.querySelector('.deposit-section');
const transferSection = document.querySelector('.transfer');
const withdrawSection = document.querySelector('.withdraw');
const goBack = document.querySelectorAll('.go-back');

goBack.forEach((g) => {
    g.addEventListener('click', () => {
        const sections = [depositSection, transferSection, withdrawSection];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
            vert.classList.remove('hidden');
        });
    })
})


mobileTab.forEach((t) => {
    t.addEventListener('click', () => {
        const sections = [depositSection, transferSection, withdrawSection];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
            vert.classList.add('hidden');
        });
        if(t.textContent === "Deposit" && t.classList.contains('active-tab')){
            depositSection.classList.add('flex');
            depositSection.classList.remove('hidden');
        }else if(t.textContent === "Transfer" && t.classList.contains('active-tab')){
            transferSection.classList.add('flex');
            transferSection.classList.remove('hidden');
        }else if(t.textContent === "Withdraw" && t.classList.contains('active-tab')){
            withdrawSection.classList.add('flex');
            withdrawSection.classList.remove('hidden');
        }
    })
})

const secondRadio = document.querySelector('.radios');
const radioValues = secondRadio.querySelectorAll('input');
const fInputs = document.querySelector('.f-inputs');
const sInputs = document.querySelector('.s-inputs');

radioValues.forEach((r) => {
    r.addEventListener('change', () => {
        const sections = [fInputs, sInputs];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
        });
        if(r.value === "bank"){
            fInputs.classList.add('flex');
            fInputs.classList.remove('hidden');
        }else if(r.value === "coin"){
            sInputs.classList.add('flex');
            sInputs.classList.remove('hidden');
        }
    })
})




