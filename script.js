* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }

:root {
    --primary: #6c5ce7;
    --secondary: #a29bfe;
    --accent: #fd79a8;
    --dark: #0a0a1a;
    --light: #f8f9ff;
    --text: #2d3436;
    --gray: #636e72;
    --white: #ffffff;
    --shadow: 0 20px 40px rgba(108,92,231,0.15);
    --gradient: linear-gradient(135deg, #6c5ce7, #a29bfe, #fd79a8);
}

body {
    background: var(--light);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
    cursor: none;
}

body.dark {
    --light: #0a0a1a;
    --text: #f8f9ff;
    --white: #16162a;
    --gray: #b2bec3;
    background: var(--light);
    color: var(--text);
}

html { scroll-behavior: smooth; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* Custom Cursor */
.cursor {
    width: 10px;
    height: 10px;
    background: var(--primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.2s;
    mix-blend-mode: difference;
}
.cursor-follower {
    width: 40px;
    height: 40px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.3s ease;
    mix-blend-mode: difference;
}
.cursor.active { transform: scale(3); }
.cursor-follower.active { transform: scale(0.5); }

@media (max-width: 768px) {
    body { cursor: auto; }
    .cursor, .cursor-follower { display: none; }
}

/* Preloader */
.preloader {
    position: fixed;
    inset: 0;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    transition: opacity 0.8s, visibility 0.8s;
}
.preloader.hidden { opacity: 0; visibility: hidden; }
.loader-text {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}
.loader-text span {
    font-size: 60px;
    font-weight: 900;
    color: white;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: bounce-letter 1s ease infinite;
}
.loader-text span:nth-child(2) { animation-delay: 0.1s; }
.loader-text span:nth-child(3) { animation-delay: 0.2s; }
.loader-text span:nth-child(4) { animation-delay: 0.3s; }

@keyframes bounce-letter {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.loader-bar {
    width: 200px;
    height: 3px;
    background: rgba(255,255,255,0.2);
    border-radius: 5px;
    overflow: hidden;
}
.loader-progress {
    width: 0%;
    height: 100%;
    background: var(--gradient);
    animation: load 1.5s ease forwards;
}
@keyframes load { to { width: 100%; } }

/* Particles */
.particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}
.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.5;
    animation: float-particle 15s infinite linear;
}
@keyframes float-particle {
    from { transform: translateY(100vh) translateX(0); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    to { transform: translateY(-100vh) translateX(100px); opacity: 0; }
}

/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(248,249,255,0.7);
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 15px 0;
    transition: 0.4s;
    border-bottom: 1px solid rgba(108,92,231,0.1);
}
body.dark nav { background: rgba(10,10,26,0.7); }
nav.scrolled { padding: 10px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    font-size: 32px;
    font-weight: 900;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
}
.logo span { color: var(--accent); -webkit-text-fill-color: var(--accent); }

.nav-links { display: flex; list-style: none; gap: 30px; }
.nav-links a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: 0.3s;
    position: relative;
    padding: 5px 0;
}
.nav-links a span { color: var(--primary); font-weight: 700; margin-right: 5px; font-size: 12px; }
.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient);
    transition: 0.4s;
}
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
.nav-links a:hover, .nav-links a.active { color: var(--primary); }

.nav-right { display: flex; align-items: center; gap: 15px; }
#darkModeBtn {
    background: var(--gradient);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.4s;
}
#darkModeBtn:hover { transform: rotate(180deg) scale(1.1); }

.menu-toggle { display: none; cursor: pointer; flex-direction: column; gap: 5px; }
.menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--primary);
    border-radius: 5px;
    transition: 0.3s;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: 0.4s;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}
.btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient);
    transition: 0.4s;
    z-index: -1;
}
.btn-primary { background: var(--gradient); color: white; box-shadow: 0 10px 30px rgba(108,92,231,0.3); }
.btn-primary:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(108,92,231,0.5); }
.btn-outline { background: transparent; color: var(--primary); border: 2px solid var(--primary); }
.btn-outline:hover { color: white; transform: translateY(-5px); }
.btn-outline::before { transform: scaleX(0); transform-origin: right; }
.btn-outline:hover::before { transform: scaleX(1); transform-origin: left; }

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 20px 100px;
    position: relative;
    overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    animation: blob-move 20s infinite ease-in-out;
}
.blob-1 { width: 500px; height: 500px; background: var(--primary); top: -100px; left: -100px; }
.blob-2 { width: 400px; height: 400px; background: var(--accent); bottom: -100px; right: -100px; animation-delay: 5s; }
.blob-3 { width: 300px; height: 300px; background: var(--secondary); top: 50%; left: 50%; animation-delay: 10s; }

@keyframes blob-move {
    0%, 100% { transform: translate(0,0) scale(1); }
    33% { transform: translate(50px,-50px) scale(1.1); }
    66% { transform: translate(-50px,50px) scale(0.9); }
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    position: relative;
    z-index: 2;
}
.hero-greeting {
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
}
.line { display: inline-block; width: 40px; height: 2px; background: var(--primary); }

.hero-text h1 {
    font-size: 80px;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    font-family: 'Space Grotesk', sans-serif;
}
.reveal {
    display: inline-block;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: reveal-text 1s ease forwards;
    opacity: 0;
    transform: translateY(50px);
}
.reveal:nth-child(2) { animation-delay: 0.3s; }
@keyframes reveal-text {
    to { opacity: 1; transform: translateY(0); }
}

.hero-text h2 { font-size: 32px; margin-bottom: 25px; color: var(--text); font-weight: 600; }
.typing { color: var(--primary); border-right: 3px solid var(--primary); padding-right: 5px; }

.hero-desc { color: var(--gray); margin-bottom: 35px; font-size: 17px; max-width: 500px; }
.hero-buttons { display: flex; gap: 20px; margin-bottom: 40px; flex-wrap: wrap; }

.social-icons { display: flex; gap: 15px; }
.social-icons a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--white);
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: var(--shadow);
    transition: 0.4s;
    font-size: 18px;
}
.social-icons a:hover {
    background: var(--gradient);
    color: white;
    transform: translateY(-8px) rotate(360deg);
}

.hero-image { display: flex; justify-content: center; position: relative; }
.image-wrapper {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    overflow: visible;
    position: relative;
    animation: float 4s ease-in-out infinite;
}
.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid var(--white);
    box-shadow: var(--shadow);
    position: relative;
    z-index: 2;
}
.image-glow {
    position: absolute;
    inset: -20px;
    background: var(--gradient);
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.5;
    animation: pulse-glow 3s ease-in-out infinite;
}
@keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
}
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
}

.floating-badge {
    position: absolute;
    width: 70px;
    height: 70px;
    background: var(--white);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: var(--primary);
    box-shadow: var(--shadow);
    z-index: 3;
    animation: badge-float 4s ease-in-out infinite;
}
.badge-1 { top: 20px; left: -20px; animation-delay: 0s; color: #E44D26; }
.badge-2 { bottom: 40px; left: -30px; animation-delay: 1s; color: #1572B6; }
.badge-3 { top: 40px; right: -20px; animation-delay: 2s; color: #F7DF1E; }
.badge-4 { bottom: 20px; right: -30px; animation-delay: 3s; color: #61DAFB; }

@keyframes badge-float {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

/* Marquee */
.marquee {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    background: var(--gradient);
    overflow: hidden;
    z-index: 1;
}
.marquee-content {
    display: flex;
    gap: 50px;
    white-space: nowrap;
    animation: marquee-scroll 20s linear infinite;
}
.marquee-content span {
    color: white;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
}
@keyframes marquee-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
}

/* Sections */
section { padding: 120px 0; position: relative; z-index: 2; }
.section-header { text-align: center; margin-bottom: 80px; }
.subtitle {
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}
.section-header h2 {
    font-size: 55px;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Space Grotesk', sans-serif;
}

/* Glitch Effect */
.glitch { position: relative; }
.glitch::before, .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--light);
}
.glitch::before {
    animation: glitch-1 3s infinite;
    color: var(--primary);
    z-index: -1;
    -webkit-text-fill-color: var(--primary);
}
.glitch::after {
    animation: glitch-2 3s infinite;
    color: var(--accent);
    z-index: -2;
    -webkit-text-fill-color: var(--accent);
}
@keyframes glitch-1 {
    0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
    20% { clip-path: inset(20% 0 30% 0); transform: translate(-3px,3px); }
    40% { clip-path: inset(50% 0 20% 0); transform: translate(3px,-3px); }
}
@keyframes glitch-2 {
    0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
    20% { clip-path: inset(30% 0 40% 0); transform: translate(3px,-3px); }
    40% { clip-path: inset(10% 0 60% 0); transform: translate(-3px,3px); }
}

/* About */
.about-content { display: grid; grid-template-columns: 1fr 1.3fr; gap: 60px; align-items: center; }
.about-img-wrap { position: relative; }
.about-img-wrap img {
    width: 100%;
    border-radius: 30px;
    box-shadow: var(--shadow);
    transition: 0.4s;
}
.about-img-wrap:hover img { transform: scale(1.02); }
.experience-badge {
    position: absolute;
    bottom: 30px;
    right: -30px;
    background: var(--gradient);
    color: white;
    padding: 25px;
    border-radius: 20px;
    box-shadow: var(--shadow);
    text-align: center;
    animation: badge-bounce 3s ease-in-out infinite;
}
.experience-badge h3 { font-size: 40px; font-weight: 900; }
.experience-badge p { font-size: 12px; }
@keyframes badge-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.about-text h3 {
    font-size: 32px;
    margin-bottom: 20px;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Space Grotesk', sans-serif;
}
.about-text > p { color: var(--gray); margin-bottom: 30px; font-size: 16px; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px; }
.stat-box {
    text-align: center;
    padding: 25px 15px;
    background: var(--white);
    border-radius: 20px;
    box-shadow: var(--shadow);
    transition: 0.4s;
    border: 2px solid transparent;
}
.stat-box:hover { transform: translateY(-10px); border-color: var(--primary); }
.stat-box h3 {
    font-size: 40px;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Space Grotesk', sans-serif;
}
.stat-box p { color: var(--gray); font-size: 13px; }

/* Services */
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.service-card {
    background: var(--white);
    padding: 50px 35px;
    border-radius: 25px;
    transition: 0.4s;
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}
.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: 0.4s;
    z-index: 0;
}
.service-card:hover::before { transform: scaleY(1); }
.service-card > * { position: relative; z-index: 1; transition: 0.4s; }
.service-card:hover { transform: translateY(-15px); }
.service-card:hover h3, .service-card:hover p, .service-card:hover .service-link { color: white; }
.service-card:hover .service-icon { background: white; color: var(--primary); }
.service-card:hover .card-number { color: rgba(255,255,255,0.3); }

.card-number {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 60px;
    font-weight: 900;
    color: rgba(108,92,231,0.1);
    font-family: 'Space Grotesk', sans-serif;
}
.service-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient);
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    margin-bottom: 25px;
    transition: 0.4s;
}
.service-card h3 { margin-bottom: 15px; color: var(--text); font-size: 22px; }
.service-card p { color: var(--gray); margin-bottom: 20px; }
.service-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: 0.3s;
}

/* Skills */
.skills-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.skill-item { margin-bottom: 30px; }
.skill-info { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: 600; }
.skill-info span i { color: var(--primary); margin-right: 8px; }
.skill-bar { height: 12px; background: var(--white); border-radius: 10px; overflow: hidden; box-shadow: inset 0 2px 5px rgba(0,0,0,0.1); }
.skill-progress {
    height: 100%;
    background: var(--gradient);
    border-radius: 10px;
    transition: width 2s ease-in-out;
    position: relative;
}
.skill-progress::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shine 2s infinite;
}
@keyframes shine {
    from { transform: translateX(-100%); }
    to { transform: translateX(100%); }
}

/* Tech Orbit */
.tech-orbit {
    position: relative;
    width: 400px;
    height: 400px;
    margin: 0 auto;
}
.orbit-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    height: 100px;
    background: var(--gradient);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    box-shadow: var(--shadow);
    z-index: 3;
}
.orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px dashed rgba(108,92,231,0.3);
    border-radius: 50%;
    transform: translate(-50%,-50%);
}
.orbit-1 { width: 250px; height: 250px; animation: rotate 15s linear infinite; }
.orbit-2 { width: 380px; height: 380px; animation: rotate 25s linear infinite reverse; }
.orbit-item {
    position: absolute;
    width: 50px;
    height: 50px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: var(--primary);
    box-shadow: var(--shadow);
}
.orbit-1 .orbit-item:nth-child(1) { top: -25px; left: 50%; transform: translateX(-50%); }
.orbit-1 .orbit-item:nth-child(2) { right: -25px; top: 50%; transform: translateY(-50%); }
.orbit-1 .orbit-item:nth-child(3) { bottom: -25px; left: 50%; transform: translateX(-50%); }
.orbit-1 .orbit-item:nth-child(4) { left: -25px; top: 50%; transform: translateY(-50%); }
.orbit-2 .orbit-item:nth-child(1) { top: -25px; left: 50%; transform: translateX(-50%); }
.orbit-2 .orbit-item:nth-child(2) { right: -25px; top: 50%; transform: translateY(-50%); }
.orbit-2 .orbit-item:nth-child(3) { bottom: -25px; left: 50%; transform: translateX(-50%); }
.orbit-2 .orbit-item:nth-child(4) { left: -25px; top: 50%; transform: translateY(-50%); }

@keyframes rotate { to { transform: translate(-50%,-50%) rotate(360deg); } }

/* Projects */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.project-card {
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: var(--shadow);
    aspect-ratio: 4/3;
}
.project-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s;
}
.project-card:hover img { transform: scale(1.15); }
.project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(108,92,231,0.95), transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px;
    color: white;
    opacity: 0;
    transition: 0.4s;
    transform: translateY(30px);
}
.project-card:hover .project-overlay { opacity: 1; transform: translateY(0); }
.project-tag {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 10px;
    width: fit-content;
}
.project-overlay h3 { font-size: 24px; margin-bottom: 15px; }
.project-overlay a {
    width: 50px;
    height: 50px;
    background: white;
    color: var(--primary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    align-self: flex-start;
    transition: 0.3s;
}
.project-overlay a:hover { transform: rotate(45deg); }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.testimonial-card {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: var(--shadow);
    transition: 0.4s;
    position: relative;
}
.testimonial-card:hover { transform: translateY(-10px) scale(1.02); }
.quote-icon {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 40px;
    color: var(--primary);
    opacity: 0.2;
}
.stars { font-size: 20px; margin-bottom: 15px; }
.testimonial-card > p { color: var(--gray); margin-bottom: 25px; font-style: italic; line-height: 1.8; }
.client { display: flex; align-items: center; gap: 15px; }
.client img { width: 55px; height: 55px; border-radius: 50%; border: 3px solid var(--primary); }
.client h4 { color: var(--text); margin-bottom: 3px; }
.client p { color: var(--gray); font-size: 13px; margin: 0; }

/* Contact */
.contact-content { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; }
.contact-info { display: flex; flex-direction: column; gap: 25px; }
.contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: var(--white);
    border-radius: 15px;
    box-shadow: var(--shadow);
    transition: 0.3s;
}
.contact-item:hover { transform: translateX(10px); }
.contact-icon {
    width: 55px;
    height: 55px;
    background: var(--gradient);
    color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    flex-shrink: 0;
}
.contact-item h4 { color: var(--text); margin-bottom: 5px; }
.contact-item p { color: var(--gray); font-size: 14px; }

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--white);
    padding: 40px;
    border-radius: 25px;
    box-shadow: var(--shadow);
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.contact-form input, .contact-form textarea {
    padding: 15px 20px;
    border: 2px solid transparent;
    background: var(--light);
    border-radius: 12px;
    font-size: 15px;
    color: var(--text);
    font-family: inherit;
    transition: 0.3s;
    width: 100%;
}
.contact-form input:focus, .contact-form textarea:focus {
    outline: none;
    border-color: var(--primary);
    transform: translateY(-2px);
}

/* Footer */
footer {
    background: var(--dark);
    color: white;
    padding: 60px 0 30px;
    text-align: center;
    position: relative;
    z-index: 2;
}
.footer-logo {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 15px;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.footer-tagline { color: rgba(255,255,255,0.7); margin-bottom: 25px; }
.footer-social { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; }
.footer-social a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.4s;
}
.footer-social a:hover {
    background: var(--gradient);
    transform: translateY(-8px) rotate(360deg);
}
.copyright { color: rgba(255,255,255,0.5); font-size: 14px; }

/* Back to Top */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    background: var(--gradient);
    color: white;
    border-radius: 50%;
    display: none;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: var(--shadow);
    z-index: 100;
    transition: 0.4s;
}
.back-to-top.show { display: flex; }
.back-to-top:hover { transform: translateY(-10px) scale(1.1); }

/* Responsive */
@media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .nav-links {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: var(--white);
        flex-direction: column;
        padding: 40px 20px;
        transition: 0.4s;
    }
    .nav-links.active { left: 0; }
    .hero-container, .about-content, .contact-content, .skills-wrapper { grid-template-columns: 1fr; }
    .hero-text h1 { font-size: 50px; }
    .hero-text h2 { font-size: 24px; }
    .image-wrapper { width: 300px; height: 300px; }
    .hero-buttons, .social-icons { justify-content: center; }
    .section-header h2 { font-size: 36px; }
    .experience-badge { right: 10px; padding: 15px; }
    .experience-badge h3 { font-size: 28px; }
    .form-row { grid-template-columns: 1fr; }
    .tech-orbit { width: 300px; height: 300px; }
    .orbit-1 { width: 200px; height: 200px; }
    .orbit-2 { width: 290px; height: 290px; }
}
