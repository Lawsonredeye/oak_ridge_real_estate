/* ============================================
   OAKRIDGE REAL ESTATE — JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFavorites();
    initNewsletterForm();
    initContactForm();
    initPropertyFilters();
    initScrollAnimations();
    initCurrentYear();
});

/* Mobile menu */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-overlay');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
    });

    if (overlay) {
        overlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        });
    });
}

/* Favorite toggle */
function initFavorites() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            btn.classList.toggle('liked');
            const icon = btn.querySelector('.fav-icon');
            if (icon) {
                icon.innerHTML = btn.classList.contains('liked') ? '&#9829;' : '&#9825;';
            }
            showToast(btn.classList.contains('liked')
                ? 'Added to favorites'
                : 'Removed from favorites');
        });
    });
}

/* Newsletter */
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value.trim()) {
            showToast('Thank you for subscribing.');
            input.value = '';
        }
    });
}

/* Contact form */
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = form.querySelector('input[name="name"]');
        if (nameInput && nameInput.value.trim()) {
            showToast('Your message has been sent. We\'ll be in touch soon.');
            form.reset();
        }
    });
}

/* Property filters */
function initPropertyFilters() {
    const filterForm = document.querySelector('.filter-bar');
    if (!filterForm) return;
    const typeSelect = filterForm.querySelector('.filter-type');
    const locationSelect = filterForm.querySelector('.filter-location');
    const searchInput = filterForm.querySelector('.filter-search');
    const label = filterForm.querySelector('.filter-label');

    function filterCards() {
        const type = typeSelect ? typeSelect.value : 'all';
        const location = locationSelect ? locationSelect.value : 'all';
        const search = searchInput ? searchInput.value.toLowerCase() : '';
        let count = 0;

        document.querySelectorAll('.property-card[data-type]').forEach(card => {
            const cardType = card.dataset.type;
            const cardLocation = card.dataset.location;
            const cardTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const match = (type === 'all' || cardType === type) &&
                (location === 'all' || cardLocation === location) &&
                (!search || cardTitle.includes(search));
            card.style.display = match ? '' : 'none';
            if (match) count++;
        });

        if (label) label.textContent = count + ' Properties';
    }

    if (typeSelect) typeSelect.addEventListener('change', filterCards);
    if (locationSelect) locationSelect.addEventListener('change', filterCards);
    if (searchInput) searchInput.addEventListener('input', filterCards);
}

/* Scroll reveal */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* Footer year */
function initCurrentYear() {
    const el = document.querySelector('#current-year');
    if (el) el.textContent = new Date().getFullYear();
}

/* Toast */
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
}
