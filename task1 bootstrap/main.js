const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbarLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});