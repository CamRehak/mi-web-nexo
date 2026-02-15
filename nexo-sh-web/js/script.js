
function flipCard(cid, bid) {
    const card = document.getElementById(cid);
    const btn = document.getElementById(bid);
    if(card && btn) {
        card.classList.toggle('is-flipped');
        btn.classList.toggle('active');
    }
}


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "rgba(10, 41, 71, 0.50)";
    } else {
        header.style.background = "rgba(10, 41, 71, 0.2)";
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyEmailBtn');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = "Nexosyh@gmail.com";
            const originalHTML = copyBtn.innerHTML;
            
            navigator.clipboard.writeText(email).then(() => {
                copyBtn.innerHTML = '<span style="color: #5084a6; font-size: 10px; font-weight: bold; margin-right: 5px;">¡Listo!</span>';
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    }
});