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

// Booking calendar functionality
function initBookingForm() {
    // Handle booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmission);
    }
}

// Booking form functionality is now handled by handleBookingSubmission
// Calendar functionality has been removed as we now use a contact form approach

// Handle booking form submission
// Form submission is now handled by email-handler.js
// This function is kept for reference but is no longer used
function handleBookingSubmission(event) {
    // This function has been replaced by the client-side EmailJS implementation
    // See js/email-handler.js for the new implementation
    console.log('This function is deprecated. Using EmailJS instead.');
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