const dashList = document.querySelector('.dash-listt');
const dash = dashList.querySelectorAll('li');
const sect = document.querySelector('.section');
const inputs = sect.querySelectorAll('input');
const edit = document.querySelector('.edit-button');
const change = document.querySelector('.end-buttons');
const changeII = document.querySelector('.buttso');
const editII = document.querySelector('.edit-buttonn');
const b = editII.querySelector('button');
const passwords = document.querySelector('.pass');
const pass = passwords.querySelectorAll('input');

dash.forEach(item => {
    item.addEventListener('click', () => {
        dash.forEach(d => {
            d.classList.remove('active-prof');
            d.classList.add('in-active');
            const icon = d.querySelector('img');
            if(icon.attributes.src.value === './assets/ac-icon.svg' && d.classList.contains('in-active')){
                icon.setAttribute('src', './assets/in-icon.svg');   
            }else if(icon.attributes.src.value === './assets/ac-lock.svg' && d.classList.contains('in-active')){
                icon.setAttribute('src', './assets/in-lock.svg');
            }else if(icon.attributes.src.value === './assets/ac-bell.svg' && d.classList.contains('in-active')){
                icon.setAttribute('src', './assets/in-bell.svg');
            }else if(icon.attributes.src.value === './assets/ac-curr.svg' && d.classList.contains('in-active')){
                icon.setAttribute('src', './assets/in-curr.svg');
            }else if(icon.attributes.src.value === './assets/ac-kyc.svg' && d.classList.contains('in-active')){
                icon.setAttribute('src', './assets/in-kyc.svg');
            }
        });
        item.classList.add('active-prof');
        item.classList.remove('in-active');
        const icon = item.querySelector('img');
        if(icon.attributes.src.value === './assets/in-icon.svg'){
            icon.setAttribute('src', './assets/ac-icon.svg');   
        }else if(icon.attributes.src.value === './assets/in-lock.svg'){
            icon.setAttribute('src', './assets/ac-lock.svg');
        }else if(icon.attributes.src.value === './assets/in-bell.svg'){
            icon.setAttribute('src', './assets/ac-bell.svg');
        }else if(icon.attributes.src.value === './assets/in-curr.svg'){
            icon.setAttribute('src', './assets/ac-curr.svg');
        }else if(icon.attributes.src.value === './assets/in-kyc.svg'){
            icon.setAttribute('src', './assets/ac-kyc.svg');
        }
    });
});

inputs.forEach(input => {
    input.setAttribute('disabled', '');
})

const editButton = edit.querySelector('button');

editButton.addEventListener(('click'), () => {
    inputs.forEach(input => {
        input.removeAttribute('disabled');
    })
})

const saveButton = change.querySelector('.save');

saveButton.addEventListener(('click'), () => {
    inputs.forEach(input => {
        input.setAttribute('disabled', '');
    })
    console.log('clicked')
})

pass.forEach((p) => {
    p.setAttribute('disabled', ''); 
})

const saveStuff = changeII.querySelector('.save');

saveStuff.addEventListener(('click'), () => {
    pass.forEach((p) => {
        p.setAttribute('disabled', '');
    })
})

b.addEventListener(('click'), () => {
    pass.forEach((p) => {
        p.removeAttribute('disabled')
    })
})

const security = document.querySelector('.security');
const profile = document.querySelector('.profile');
const notification = document.querySelector('.notification');
const currency = document.querySelector('.currency');
const kyc = document.querySelector('.kyc');
dash.forEach((item) => {
    item.addEventListener('click', () => {
        const sections = [security, profile, notification, currency, kyc];
        sections.forEach(section => {
            section.classList.remove('flex');
            section.classList.add('hidden');
        });
        const img = item.querySelector('img');
        if (img.attributes.src.value === "./assets/ac-icon.svg") {
            profile.classList.add('flex');
            profile.classList.add('absolute');
            profile.classList.remove('hidden');
        } else if (img.attributes.src.value === "./assets/ac-lock.svg") {
            security.classList.add('absolute');
            security.classList.add('flex');
            security.classList.remove('hidden');
        } else if (img.attributes.src.value === "./assets/ac-bell.svg") {
            notification.classList.add('absolute');
            notification.classList.add('flex');
            notification.classList.remove('hidden');
        } else if(img.attributes.src.value === "./assets/ac-curr.svg"){
            currency.classList.add('absolute');
            currency.classList.add('flex');
            currency.classList.remove('hidden');
        } else if(img.attributes.src.value === "./assets/ac-kyc.svg"){
            kyc.classList.add('absolute');
            kyc.classList.add('flex');
            kyc.classList.remove('hidden');
        }
    });
});

const fileUploadContainer = document.querySelector('.file-upload-container');
const fileInput = document.getElementById('file-upload');

fileUploadContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileUploadContainer.classList.add('border-gray-500');
});

fileUploadContainer.addEventListener('dragleave', () => {
  fileUploadContainer.classList.remove('border-gray-500');
});

fileUploadContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  alert(`Dropped file: ${e.dataTransfer.files[0].name}`);
});

const goBack = document.querySelectorAll('.go-back');

goBack.forEach((back) => {
    back.addEventListener('click', () => {
        const sections = [security, profile, notification, currency, kyc];
        sections.forEach(section => {
            section.classList.remove('absolute');
            section.classList.add('hidden');
            section.classList.remove('flex');
        });
    });
})