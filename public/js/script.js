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



// Function to update scroll margin top based on header height
function updateScrollMargin() {
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty('--scroll-margin-top', (headerHeight - 8 + 8) + 'px');
    }
}

// Initial update and on resize/load
window.addEventListener('load', updateScrollMargin);
window.addEventListener('resize', updateScrollMargin);
document.addEventListener('DOMContentLoaded', updateScrollMargin);


window.onclick = function (event) {
    const modal = document.getElementById('quoteModal');
    if (event.target == modal) {
        closeQuoteForm();
    }
}

// Ensure native smooth scroll works well with the margin
// (We can remove the manual JS scroll since CSS scroll-behavior: smooth is used)
