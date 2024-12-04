const timeframe = document.querySelector('.timeframe');
const time = timeframe.querySelectorAll('p');

time.forEach(item => {
    item.classList.remove('active-time');
    item.addEventListener('click', () => {
        time.forEach(t => {
            t.classList.remove('active-time');
            t.classList.add('inactive-time');
        });
        item.classList.add('active-time');
        item.classList.remove('inactive-time');
    })
})