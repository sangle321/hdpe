document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Check if product exists
    if (!productId || !products[productId]) {
        alert('Sản phẩm không tồn tại! Quay về trang chủ.');
        window.location.href = 'index.html';
        return;
    }

    const product = products[productId];

    // 3. Populate Data

    // Page Title
    document.title = `${product.name} - Trường Thọ QB`;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('breadcrumb-current').textContent = product.name;

    // Image & SKU & Desc
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-sku').textContent = `Mã sản phẩm: ${product.sku}`;
    document.getElementById('product-desc').textContent = product.description;

    // Features List
    const featureList = document.getElementById('product-features');
    featureList.innerHTML = ''; // Clear existing
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = `✅ ${feature}`;
        featureList.appendChild(li);
    });

    // Specs Table
    const tableHead = document.querySelector('#specs-table thead');
    const tableBody = document.querySelector('#specs-table tbody');

    // Clear existing
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    // Create Headers
    if (product.customTableHead) {
        tableHead.innerHTML = product.customTableHead;
    } else if (product.specsHeader) {
        const tr = document.createElement('tr');
        product.specsHeader.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            tr.appendChild(th);
        });
        tableHead.appendChild(tr);
    }

    // Create Data Rows
    product.specsData.forEach(rowData => {
        const tr = document.createElement('tr');
        rowData.forEach((cellData, index) => {
            const td = document.createElement('td');
            td.textContent = cellData;

            // Apply custom column styling if it exists
            if (product.colStyles && product.colStyles[index]) {
                td.style.cssText = product.colStyles[index];
            } else {
                // Default styling if no custom style
                td.style.border = "1px solid #e2e8f0";
            }

            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
});
