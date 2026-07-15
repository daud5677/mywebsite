// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('darkModeBtn');
    if (document.body.classList.contains('dark')) {
        btn.innerHTML = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        btn.innerHTML = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load Dark Mode preference
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        document.getElementById('darkModeBtn').innerHTML = '☀️';
    }
}

// Contact Form
function sendMessage(event) {
    event.preventDefault();
    alert("Shukriya! Aap ka message mil gaya. ✅");
    event.target.reset();
}