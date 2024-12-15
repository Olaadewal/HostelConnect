// Script to handle responsive navigation menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    // Toggle the navigation menu on clicking the menu icon
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close the menu when clicking outside (for better UX)
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});
