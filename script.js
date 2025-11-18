document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');
    
    // Toggle navigation visibility when the hamburger button is clicked
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation
        nav.classList.toggle('active');
        
        // Update the ARIA attribute for accessibility
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
});