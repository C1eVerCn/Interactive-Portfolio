/* Task 1: highlight current page */
// Get all navigation links
const navlinks = document.querySelectorAll('.nav-menu a');

// when scrolling, check which section is in view
window.addEventListener('scroll', () => {
    let current = '';

    // check each section
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.pageYOffset;
        // better threshold: sectionTop - 100
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    // remove all actives, then add active to current point
    navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* Task 2: Add "Back to Top" button functionality */
const BacktoTopButton = document.getElementById('back-to-top');

if (BacktoTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            BacktoTopButton.classList.add('show');
        }
        else {
            BacktoTopButton.classList.remove('show');
        }
    });

    BacktoTopButton.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

/* Task 3: Dark/Light mode toggle */
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const saveTheme = localStorage.getItem('theme') || 'light';
if (saveTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Toggle theme on button click (safe guard)
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

/* Task 4: contact form validation */
const contactForm = document.getElementById('contactform');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name === '' || email === '' || message === '') {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please input a valid email address', 'error');
            return;
        }

        showFormMessage('Message sent successfully!', 'success');
        contactForm.reset();
    });
}

function showFormMessage(text, type) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.style.color = type === 'success' ? 'green' : 'red';
    formMessage.style.marginTop = '10px';
}

/* Task 5: Filter project cards */
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

// default show all
let currentFilter = 'all';

// Add event listeners to filter buttons (safe guard)
if (filterButtons.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // update current filter type
            currentFilter = button.dataset.filter;

            // remove all buttons of active state
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // add active state to current button
            button.classList.add('active');

            // execute filtering
            filterProjects();
        });
    });

    // ensure 'all' button is active on load
    const allBtn = document.querySelector('.filter-buttons button[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active');
}

function filterProjects() {
    projectCards.forEach(card => {
        const raw = card.dataset.tags || '';
        const tags = raw.split(',').map(t => t.trim()).filter(Boolean);

        if (currentFilter === 'all' || tags.includes(currentFilter)) {
            card.classList.remove('hidden');
        }
        else {
            card.classList.add('hidden');
        }
    });
}

// Initial filtering
filterProjects();