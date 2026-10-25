// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a, .btn[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Filter project cards by category
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the selected category from the button's data attribute
        const filter = button.getAttribute('data-filter');

        // Update which button looks active
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show or hide cards based on category
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});