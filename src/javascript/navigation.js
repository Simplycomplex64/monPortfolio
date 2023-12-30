document.addEventListener('DOMContentLoaded', function () {
    fetch('navigation/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navContainer').innerHTML = data;

            // Get the current page's filename (e.g., "index.html" or "contact.html")
            var currentPage = window.location.pathname.split('/').pop();

            // Find the corresponding link and add the "active" class
            var navLinks = document.querySelectorAll('#navContainer nav a');
            navLinks.forEach(function (link) {
                var linkPage = link.getAttribute('href').split('/').pop();
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        });
});

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('menu-active');
  }
  
