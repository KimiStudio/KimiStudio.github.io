document.addEventListener('DOMContentLoaded', function() {
    // Add the page-fade class to the body
    document.body.classList.add('page-fade');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href$=".html"]');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle internal links
            const href = this.getAttribute('href');
            if (href.startsWith('http') || href.startsWith('//')) {
                return; // Let external links behave normally
            }
            
            e.preventDefault(); // Prevent default navigation
            const targetUrl = this.href;
            
            // Add fade-out class to trigger the transition
            document.body.classList.add('fade-out');
            
            // Navigate to the new page after transition completes
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 600); // Match this with the CSS transition duration
        });
    });
});