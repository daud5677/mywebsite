// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
});

// Initialize AOS
AOS.init({ duration: 1000, once: true, offset: 100 });

// Custom Cursor
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 100);
});

document.querySelectorAll('a, button, .service-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
    });
});

// Create Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const icon = document.querySelector('#darkModeBtn i');
    if (document.body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
}

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    document.querySelector('#darkModeBtn i').classList.replace('fa-moon', 'fa-sun');
}

// Mobile Menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Scroll Effects
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const backBtn = document.getElementById('backToTop');
    if (window.scrollY > 300) backBtn.classList.add('show');
    else backBtn.classList.remove('show');

    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        if (window.scrollY >= top) current = sec.id;
    });
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

// Typing Effect
const words = ['Web Developer', 'UI/UX Designer', 'Freelancer', 'Creative Coder', 'Problem Solver'];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typing');

function type() {
    const word = words[wordIndex];
    if (isDeleting) {
        typingEl.textContent = word.substring(0, charIndex--);
        if (charIndex < 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; }
    } else {
        typingEl.textContent = word.substring(0, charIndex++);
        if (charIndex > word.length) { isDeleting = true; setTimeout(type, 1500); return; }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Counter Animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;
            const step = target / 50;
            const update = () => {
                count += step;
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(update);
                } else counter.textContent = target;
            };
            update();
            counterObserver.unobserve(counter);
        }
    });
});
counters.forEach(c => counterObserver.observe(c));

// Skill Bars Animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => bar.style.width = width, 200);
            });
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) skillObserver.observe(skillsSection);

// Contact Form
function sendMessage(event) {
    event.preventDefault();
    alert("✅ Shukriya! Aap ka message mil gaya. Main jaldi reply karunga.");
    event.target.reset();
}
