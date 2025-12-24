function openQuoteForm() {
    document.getElementById('quoteModal').style.display = 'block';
    return false;
}

function closeQuoteForm() {
    document.getElementById('quoteModal').style.display = 'none';
}

function submitQuote(event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
    closeQuoteForm();
}

window.onclick = function (event) {
    const modal = document.getElementById('quoteModal');
    if (event.target == modal) {
        closeQuoteForm();
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
