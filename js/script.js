// 1. FUNCIÓN PARA EL MENÚ HAMBURGUESA (MÓVIL)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const btn = document.querySelector('.mobile-menu-btn');
    
    navLinks.classList.toggle('active');
    btn.classList.toggle('open'); // Por si quieres animar las rayitas luego
}

// Cerrar el menú automáticamente cuando se hace click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});


// 2. FUNCIÓN PARA GIRAR TARJETAS (SERVICIOS)
function flipCard(cid, bid) {
    const card = document.getElementById(cid);
    const btn = document.getElementById(bid);
    if(card && btn) {
        card.classList.toggle('is-flipped');
        btn.classList.toggle('active');
    }
}


// 3. EFECTO DE TRANSPARENCIA EN EL HEADER AL HACER SCROLL
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "rgba(10, 41, 71, 0.95)"; // Más opaco al bajar
    } else {
        header.style.background = "rgba(10, 41, 71, 0.8)"; // Más transparente arriba
    }
});


// 4. LÓGICA PARA COPIAR EL EMAIL AL PORTAPAPELES
document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyEmailBtn');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = "Nexosyh@gmail.com";
            const originalHTML = copyBtn.innerHTML;
            
            navigator.clipboard.writeText(email).then(() => {
                // Feedback visual de "Copiado"
                copyBtn.innerHTML = '<span style="color: #5084a6; font-size: 10px; font-weight: bold; margin-right: 5px;">¡Listo!</span>';
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar: ', err);
            });
        });
    }
});