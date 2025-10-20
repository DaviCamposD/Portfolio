// EFEITO HEADER
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Funcionalidade do botão dark/light mode
function FuncaoDarkmode() {
    const body = document.body;
    const button = document.getElementById("darkmode");

    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
}