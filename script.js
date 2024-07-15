// JavaScript for responsive navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // JavaScript for form validation
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            // Validate form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const request = document.getElementById('request').value.trim();

            if (name === '' || email === '' || request === '') {
                alert('Please fill out all fields.');
                return; // Stop further execution
            }

            // If all fields are filled out, you can submit the form
            // Example: form.submit(); // Uncomment this line to submit the form
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const images = document.querySelectorAll('.purpose-image, .image-row img');
    const goals = document.querySelectorAll('.goal');

    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        });
    }, options);

    const throttle = (fn, wait) => {
        let time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        };
    };

    const observeElements = () => {
        sections.forEach(section => {
            observer.observe(section);
        });

        images.forEach(image => {
            observer.observe(image);
        });

        goals.forEach((goal, index) => {
            if (index % 2 === 0) {
                goal.classList.add('fade-in-left');
            } else {
                goal.classList.add('fade-in-right');
            }
            observer.observe(goal);
        });
    };

    window.addEventListener('scroll', throttle(observeElements, 200));
    observeElements(); // initial call to observe elements in view on load
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const services = document.querySelectorAll('.service');

    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        });
    }, options);

    const throttle = (fn, wait) => {
        let time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        };
    };

    const observeElements = () => {
        sections.forEach(section => {
            observer.observe(section);
        });

        services.forEach(service => {
            observer.observe(service);
        });
    };

    window.addEventListener('scroll', throttle(observeElements, 200));
    observeElements(); // initial call to observe elements in view on load
});

