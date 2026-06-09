document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // 📱 0. MOBILE HAMBURGER MENU SYSTEM
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // ==========================================================================
    // 📊 1. ANIMATED COUNTER SYSTEM (C.E. Years & Goal Numbers)
    // ==========================================================================
    const counters = document.querySelectorAll('.count-num');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            const speed = target > 100 ? 150 : 5; 
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 15); 
            } else {
                if (target < 10) {
                    counter.innerText = '0' + target;
                } else {
                    counter.innerText = target;
                }
            }
        };
        
        updateCount();
    });

    // ==========================================================================
    // ✉️ 2. CLIENT-SIDE FORM VALIDATION SYSTEM & LOCAL STORAGE
    // ==========================================================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            let errorMessage = "";

            if (nameInput && nameInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please enter your name.\n";
            }

            if (emailInput) {
                const emailValue = emailInput.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailValue === "") {
                    isValid = false;
                    errorMessage += "Please enter your email address.\n";
                } else if (!emailPattern.test(emailValue)) {
                    isValid = false;
                    errorMessage += "Please enter a valid email address.\n";
                }
            }

            if (messageInput && messageInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please write your message.";
            }

            if (!isValid) {
                event.preventDefault();
                alert(errorMessage);
            } else {
                localStorage.setItem('lastMessage', nameInput.value);
                alert("Thank you, " + nameInput.value + "! Your message has been sent successfully.");
            }
        });
    }
});