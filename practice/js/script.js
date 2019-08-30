function classToggle() {
    const navs = document.querySelectorAll('.nav-item')
    
    navs.forEach(nav => nav.classList.toggle('nav-item-show'));
  }
  
  document.querySelector('.nav-toggler')
    .addEventListener('click', classToggle);