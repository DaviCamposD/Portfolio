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

// MODAL 

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const btn = document.querySelector('.myBtn');
    const closeBtn = modal?.querySelector('.close');

    if (!modal || !btn || !closeBtn) return;

    btn.addEventListener('click', () => {
        if (typeof modal.showModal === 'function') {
            modal.showModal();
        } else {
            modal.setAttribute('open', '');
        }
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof modal.close === 'function') {
            modal.close();
        }
        modal.style.display = 'none'; 
        document.body.style.overflow = ''; 
    });

    modal.addEventListener('close', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
});
