document.addEventListener("DOMContentLoaded", function() {

    // Product Array
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
        { id: 4, name: "Product D" }
    ];

    // Populate Product Select Options
    const productSelect = document.getElementById("product");
    if(productSelect){
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Dropdown submenu for navigation
    const navItems = document.querySelectorAll('.nav-menu > li');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const submenu = item.querySelector('.submenu');
            if(submenu) submenu.style.display = 'block';
        });
        item.addEventListener('mouseleave', () => {
            const submenu = item.querySelector('.submenu');
            if(submenu) submenu.style.display = 'none';
        });
    });

    // Lazy load images
    const lazyImages = document.querySelectorAll('img');
    lazyImages.forEach(img => {
        img.loading = 'lazy';
    });

    // Contact form handling
    const contactForm = document.querySelector('form');
    if(contactForm){
        contactForm.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const subject = document.getElementById('subject')?.value;
            const message = document.getElementById('message')?.value;

            const contactMessage = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                date: new Date().toISOString()
            };

            let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(contactMessage);
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

});
