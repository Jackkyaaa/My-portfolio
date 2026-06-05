document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // 📊 1. ANIMATED COUNTER SYSTEM (C.E. Years & Goal Numbers)
    // ==========================================================================
    const counters = document.querySelectorAll('.count-num');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Adjust counting speed based on the target value magnitude
            const speed = target > 100 ? 150 : 5; 
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 15); 
            } else {
                // Pad single-digit goals with a leading zero for design consistency
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
    // ✉️ 2. CLIENT-SIDE FORM VALIDATION SYSTEM (Contact Page)
    // ==========================================================================
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            let errorMessage = "";

            // Name Field Validation
            if (nameInput && nameInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please enter your name.\n";
            }

            // Email Field Validation via Regular Expression (Regex)
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

            // Message Field Validation
            if (messageInput && messageInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please write your message.";
            }

            // Execute submission block or successful execution alert
            if (!isValid) {
                event.preventDefault();
                alert(errorMessage);
            } else {
                alert("Thank you, " + nameInput.value + "! Your message has been sent successfully.");
            }
        });
    }
});