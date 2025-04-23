// Main JavaScript file for KimiStudio website

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initGalleryFilters();
    initBookingForm();
    initContactForm();
});

// Testimonial slider functionality
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length <= 1) return;
    
    let currentIndex = 0;
    
    // Auto-scroll testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        const scrollPosition = testimonials[currentIndex].offsetLeft;
        document.querySelector('.testimonial-slider').scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }, 5000);
}

// Booking form functionality
function initBookingForm() {
    // Handle booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            // Booking form submission is now handled by EmailJS in email-handler.js
            // Prevent default and show a message if needed, or remove this handler if not required
            event.preventDefault();
            // Optionally, you can remove this block if not needed
        });
    }
}

// Mobile navigation functionality
function initMobileNav() {
    const header = document.querySelector('header');
    
    // Add scroll event to make header sticky
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}