document.addEventListener('DOMContentLoaded', function () {
    const page = document.querySelector('.page');
    const BASE_WIDTH = 1400;

    function updateScale() {
        if (!page) return;
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= BASE_WIDTH) {
            page.style.transform = 'scale(1)';
            page.style.width = '100%';
            page.style.maxWidth = '1400px';
            page.style.height = 'auto';
            document.body.style.overflow = 'auto';
        } else {
            const scale = viewportWidth / BASE_WIDTH;
            page.style.transform = `scale(${scale})`;
            page.style.width = '1400px';
            page.style.maxWidth = 'none';
            page.style.height = 'auto';
            page.style.transformOrigin = 'top center';
            document.body.style.overflow = 'hidden';
        }
    }

    updateScale();
    window.addEventListener('resize', updateScale);

    const headers = document.querySelectorAll('.faq-accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            document.querySelectorAll('.faq-accordion-item').forEach(el => {
                if (el !== item) el.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    const burgerBtn = document.querySelector('.mobile-menu-toggle');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const backBtn = document.querySelector('.mobile-menu-back');
    const menuLinks = document.querySelectorAll('.mobile-menu-nav a');
    const ctaBtn = document.querySelector('.mobile-menu-cta');

    function openMobileMenu() {
        menuOverlay?.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        menuOverlay?.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    burgerBtn?.addEventListener('click', openMobileMenu);
    backBtn?.addEventListener('click', closeMobileMenu);
    menuLinks.forEach(link => link?.addEventListener('click', closeMobileMenu));
    ctaBtn?.addEventListener('click', closeMobileMenu);

    const images = document.querySelectorAll('.gallery-image');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    if (images.length > 0 && prevBtn && nextBtn) {
        let currentSlide = 0;
        const totalSlides = images.length;

        function showSlide(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let next = currentSlide + 1;
            if (next >= totalSlides) next = 0;
            showSlide(next);
        }

        function prevSlide() {
            let prev = currentSlide - 1;
            if (prev < 0) prev = totalSlides - 1;
            showSlide(prev);
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
});
