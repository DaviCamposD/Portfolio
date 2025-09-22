// decer clean
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// itens aparecem de acordo com que eu deco o site
const sections = document.querySelectorAll(
    ".hero, .sobre, .experiencia, .projetos, .skills"
);

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Aplica o observer em cada section
sections.forEach(section => {
    observer.observe(section);
});

// efeito vermelho barra de navegacao
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

setInterval(createParticle, 2000);

// nao lembro porem se tirar da b.o
setInterval(() => {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.animationPlayState = 'paused';
            setTimeout(() => {
                line.style.animationPlayState = 'running';
            }, 100);
        }, index * 300);
    });
}, 8000);

// recarregar animacao 
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Funcionalidade do botão dark/light mode
const darkmodeBtn = document.getElementById('darkmode');
const body = document.body;

// Verifica se há uma preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('light-theme', savedTheme === 'light');
    darkmodeBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}

// Event listener para o botão
darkmodeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    const isLightTheme = body.classList.contains('light-theme');

    // Atualiza o ícone do botão
    darkmodeBtn.textContent = isLightTheme ? '🌙' : '☀️';

    // Salva a preferência no localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Função createParticle (caso seja usada em algum lugar)
function createParticle() {
    // Implementação da função se necessário
}