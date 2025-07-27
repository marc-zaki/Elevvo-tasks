
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header, footer');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-section');
        observer.observe(section);
    });
});
