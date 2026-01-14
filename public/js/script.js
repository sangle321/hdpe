function openQuoteForm() {
    document.getElementById('quoteModal').style.display = 'block';
    return false;
}

function closeQuoteForm() {
    document.getElementById('quoteModal').style.display = 'none';
}

// Initialize EmailJS with your Public Key
// (function() {
//     emailjs.init("YOUR_PUBLIC_KEY");
// })();


async function submitQuote(event) {
    event.preventDefault();

    // Configuration - Replace with your EmailJS IDs
    const SERVICE_ID = "";
    const TEMPLATE_ID = "";
    const PUBLIC_KEY = "";

    // Initialize EmailJS (can also be done globally)
    emailjs.init(PUBLIC_KEY);

    // Get form data
    const templateParams = {
        from_name: document.getElementById('quoteName').value,
        phone_number: document.getElementById('quotePhone').value,
        product_type: document.getElementById('quoteProduct').value,
        message: document.getElementById('quoteNote').value,
        to_email: 'onghdpemientrung@gmail.com'
    };

    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    try {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerText = 'Đang gửi...';

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

        if (response.status === 200) {
            alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
            closeQuoteForm();
            event.target.reset();
        } else {
            throw new Error('EmailJS returned non-200 status');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau hoặc liên hệ Hotline: 0913477799');
    } finally {
        // Reset loading state
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
    }
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
