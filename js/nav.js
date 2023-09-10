window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');
    var icon = document.getElementById('theme-button');
    var toggle = document.getElementById('nav-toggle');
    // var tty = document.getElementsByClassName('.nav__link');

  
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.backgroundColor = 'var(--body-color)'; 
      icon.style.color = 'var(--title-color)'; 
      toggle.style.color = 'var(--title-color)'; 
    //   tty.style.color = 'var(--title-color)'; 

  
    } else {
      navbar.style.backgroundColor = 'transparent'; 
      icon.style.color = 'white';  
      toggle.style.color = 'white';
    //   tty.style.color = 'white';

  
    }
  });