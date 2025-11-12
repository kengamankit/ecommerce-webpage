document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });
    
    // Add shadow to header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            
            // Add animation
            this.textContent = 'Added!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
    
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff0000';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        // Simple validation
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Product quick view (simulated)
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would open a modal with product details
            alert('This would open a quick view modal with product details.');
        });
    });
    
    // Animation for elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .collection-card, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.product-card, .collection-card, .step');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});