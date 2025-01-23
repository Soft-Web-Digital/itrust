
const toggleButton = document.getElementById('toggle-button');
const moreText = document.getElementById('more-text');
const arrow = document.getElementById('arrow');

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
const holdings = document.querySelector('.holdings');
const history = document.querySelector('.history');
const position = document.querySelector('.positions');
const account = document.querySelector('.account');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        const sections = [overview, holdings, history, position,account];
        sections.forEach(section => {
            section.classList.remove('block');
            section.classList.add('hidden');
        });
        if(item.textContent === 'Overview'){
            overview.classList.add('block');
            overview.classList.remove('hidden');
        } else if(item.textContent === 'Holdings'){
            holdings.classList.add('block');
            holdings.classList.remove('hidden');
        } else if(item.textContent === 'History'){
            history.classList.add('block');
            history.classList.remove('hidden');
        } else if(item.textContent === 'Positions'){
            position.classList.add('block');
            position.classList.remove('hidden');
        }
        else if(item.textContent === 'Accounts'){
            account.classList.add('block');
            account.classList.remove('hidden');
        }
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

// const hideMobile = document.getElementById('hide-mobile');
// const mobileValue = document.getElementById('mobile-value');

// hideMobile.addEventListener('click', () => {
//     if(mobileValue.textContent == "$45,545.65"){
//         mobileValue.textContent = "$*******";
//     }else{
//         mobileValue.textContent = "$45,545.65";
//     }
// })

const invHide = document.getElementById('inv-hide');
const mobileInv = document.getElementById('mobile-inv');

// invHide.addEventListener('click', () => {
//     if(mobileInv.textContent == "$0.00"){
//         mobileInv.textContent = "$***";
//     }else{
//         mobileInv.textContent = "$0.00";
//     }
// })

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

toggleButton.addEventListener('click', () => {
    moreText.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180'); 
    if (moreText.classList.contains('hidden')) {
      toggleButton.querySelector('span').textContent = 'Show More';
    } else {
      toggleButton.querySelector('span').textContent = 'Show Less';
    }
  });



  const ctx = document.getElementById('myChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(110, 116, 244, 0.3)'); // Top color (lighter)
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Bottom color (transparent)
  const myChart  = new Chart(ctx, {
    type: 'line', // Line chart type for area chart
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'], // Labels for the x-axis
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2], 
        fill: true, 
        backgroundColor: gradient,
        borderColor: '#5156BE',
        borderWidth: 1,
        tension: 0.4, 
        cubicInterpolationMode: 'monotone' 
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true // Ensure y-axis starts from 0
        }
      }
    }
  });



  const ctxDonut = document.getElementById('myDonutChart').getContext('2d');


  const myDonutChart = new Chart(ctxDonut, {
    type: 'doughnut', // Donut chart type
    data: {
      datasets: [{
        label: 'Dataset 1',
        data: [300, 50, 100,222], // Data points for the donut chart
        backgroundColor: ['#6E74F4', '#F1CF24', '#3AB67A','#8284BF'],
      
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      },
        cutout: '70%'
    }
  });

  function updateRowProgress(rowSelector, progressPercentage) {
    const progressCell = document.querySelector(`${rowSelector} td.absolute`);
    if (progressCell) {
      progressCell.style.width = `${progressPercentage}%`;
    }
  }

  updateRowProgress('tr', 75);




  




  

  