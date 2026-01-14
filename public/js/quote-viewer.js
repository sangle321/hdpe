document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const quoteId = urlParams.get('id');

    const pdfMap = {
        'hdpe_pk_tn.pdf': {
            title: 'Báo Giá Phụ Kiện HDPE Hàn Trong - Ngoài',
            file: 'https://drive.google.com/file/d/15LGBp_JSq-sAa5tsWhrNnp8pQVwl-96A/preview'
        },
        'hdpe_pk_sg.pdf': {
            title: 'Báo Giá Phụ Kiện HDPE Siết Gioăng',
            file: 'https://drive.google.com/file/d/19vAuuH2gTlv9Qxh3Z7q6wGQy4-_F6h1u/preview'
        },
        'hdpe_van.pdf': {
            title: 'Báo Giá Van HDPE',
            file: 'https://drive.google.com/file/d/1heGS5EN9C04HMZrfbJCaMXfT3VMnnK_c/preview'
        }
    };

    const quoteTitle = document.getElementById('quote-title');
    const pdfContainer = document.getElementById('pdf-container');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');

    if (quoteId && pdfMap[quoteId]) {
        const quoteInfo = pdfMap[quoteId];
        let pdfUrl = quoteInfo.file;

        // If it's a relative path, prepend "pdfs/" if not already present
        // (Though in our map we already have either full URL or relative path)

        // Update UI
        quoteTitle.textContent = quoteInfo.title;
        breadcrumbCurrent.textContent = quoteInfo.title;

        // Create PDF Viewer
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (pdfUrl.includes('drive.google.com')) {
            if (isMobile) {
                pdfContainer.innerHTML = `
                    <div class="fallback-message">
                        <p>Trình xem PDF có thể bị hạn chế trên di động.</p>
                        <a href="${pdfUrl.replace('/preview', '/view')}" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">Mở bằng Google Drive</a>
                    </div>
                    <iframe src="${pdfUrl}" class="pdf-viewer" allow="autoplay" style="margin-top: 1rem;"></iframe>
                `;
            } else {
                pdfContainer.innerHTML = `<iframe src="${pdfUrl}" class="pdf-viewer" allow="autoplay"></iframe>`;
            }
        } else if (isMobile) {
            pdfContainer.innerHTML = `
                <div class="fallback-message">
                    <p>Bạn đang sử dụng thiết bị di động. Nếu trình xem không hiển thị, vui lòng tải trực tiếp.</p>
                    <a href="${pdfUrl}" class="btn btn-primary" style="margin-top: 1rem;">Mở Tệp PDF</a>
                </div>
                <iframe src="https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + '/' + pdfUrl)}&embedded=true" class="pdf-viewer"></iframe>
            `;
        } else {
            pdfContainer.innerHTML = `<iframe src="${pdfUrl}#toolbar=0" class="pdf-viewer"></iframe>`;
        }
    } else {
        quoteTitle.textContent = 'Không tìm thấy thông tin báo giá';
        pdfContainer.innerHTML = `
            <div class="fallback-message">
                <p>Rất tiếc, chúng tôi không tìm thấy tệp báo giá bạn yêu cầu.</p>
                <a href="index.html#products" class="btn btn-primary" style="margin-top: 1rem;">Quay Lại Trang Sản Phẩm</a>
            </div>
        `;
    }
});
