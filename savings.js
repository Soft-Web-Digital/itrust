const hamMenu = document.getElementById('ham-menu');
const dropdown = document.querySelector('.secoss')

hamMenu.addEventListener(('click'), () => {
    dropdown.classList.toggle('hidden')
})