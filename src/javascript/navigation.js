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

function downloadPdf() {
    // Replace 'My CV 2023.pdf' with the actual name of your PDF file
    var pdfUrl = 'My%20cv/My%20CV%202023.pdf'; // Use %20 for spaces

    // Create a link element
    var link = document.createElement('a');

    // Set the href attribute with the PDF file URL
    link.href = pdfUrl;

    // Set the download attribute with the desired filename
    link.download = 'My%20cv/My%20CV%202023.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document after the download is initiated
    document.body.removeChild(link);
}



