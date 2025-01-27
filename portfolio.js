
const toggleButton = document.getElementById('toggle-button');
const moreText = document.getElementById('more-text');
const arrow = document.getElementById('arrow');

const menuIcon = './assets/ham.svg'; 
const closeIcon = './assets/Close.svg'; 
// Select all navigation items across different navigation sections
const navigationItems = document.querySelectorAll('.navigation p');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const sections = {
    Overview: document.querySelector('.overview'),
    Accounts: document.querySelector('.account'),
    Holdings: document.querySelector('.holdings'),
    Positions: document.querySelector('.positions'),
    History: document.querySelector('.history'),
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

const portfolioHide = document.getElementById('port-hide');
const portfolioValue = document.getElementById('port-value');

portfolioHide.addEventListener('click', () => {
    if(portfolioValue.textContent == "$45,545.65"){
        portfolioValue.textContent = "$*******";
    }else{
        portfolioValue.textContent = "$45,545.65";
    }
})


hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  portMenu.classList.add('hidden');

  if (menu.classList.contains('hidden')) {
    hamburger.src = menuIcon; 
  } else {

    hamburger.src = closeIcon; 
  }
});


const portToggle = document.getElementById('port-toggle');
const portMenu = document.getElementById('port-menu');

portToggle.addEventListener('click', () => {
  portMenu.classList.toggle('hidden');
});





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




  




  

  