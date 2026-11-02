/* =========================================
   FRESH BAKES BAKERY - PART 3 JAVASCRIPT
   ========================================= */

// --- 1. ENQUIRY FORM VALIDATION & AJAX ---
document.addEventListener('DOMContentLoaded', function() {
    
    // Only run form logic if the form exists on the page
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop page reload

            let isValid = true;
            
            // Get form values
            const name = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Reset error messages
            document.getElementById('nameError').style.display = 'none';
            document.getElementById('emailError').style.display = 'none';
            document.getElementById('phoneError').style.display = 'none';

            // Validation checks
            if (name.trim().length < 3) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            // Simple email regex check
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            // Check phone number (must be 10 digits)
            if (phone.trim().length > 0 && !phone.match(/^\d{10}$/)) {
                document.getElementById('phoneError').style.display = 'block';
                isValid = false;
            }

            // If everything is valid, do the AJAX submission
            if (isValid) {
                const formData = {
                    name: name,
                    email: email,
                    phone: phone,
                    type: document.getElementById('type').value,
                    message: document.getElementById('message').value
                };

                // AJAX using Fetch API
                fetch('https://httpbin.org/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    // Show success message and reset form
                    document.getElementById('formSuccess').style.display = 'block';
                    enquiryForm.reset();
                    setTimeout(() => {
                        document.getElementById('formSuccess').style.display = 'none';
                    }, 5000);
                })
                .catch(error => {
                    alert("There was an error submitting your form.");
                    console.error('Error:', error);
                });
            }
        });
    }

    // --- 2. INTERACTIVE ACCORDION (For Home Page) ---
    const accordions = document.getElementsByClassName("accordion-btn");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // --- 3. DYNAMIC PRODUCT SEARCH & FILTER (For Products Page) ---
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                let title = card.querySelector('h3').textContent.toLowerCase();
                let desc = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(filter) || desc.includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});