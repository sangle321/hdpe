# Trường Thọ QB - Giải Pháp Ống Nước Bền Vững

Website giới thiệu và nhận báo giá cho các sản phẩm ống nhựa PVC, HDPE, PPR của Công ty TNHH Trường Thọ QB.

## 🚀 Tính năng
- Giới thiệu sản phẩm và thông số kỹ thuật.
- Form đăng ký nhận báo giá tích hợp EmailJS.
- Giao diện đáp ứng (Responsive).
- Bản đồ chỉ đường Google Maps.

## 🛠️ Hướng dẫn cài đặt

### 1. Yêu cầu hệ thống
- Đã cài đặt [Node.js](https://nodejs.org/) (để dùng npm).
- Đã cài đặt [Firebase CLI](https://firebase.google.com/docs/cli):
  ```bash
  npm install -g firebase-tools
  ```

### 2. Cài đặt Firebase
1. Truy cập [Firebase Console](https://console.firebase.google.com/).
2. Tạo một dự án mới (ví cập: `truongthoqb-99815`).
3. Bật tính năng **Hosting**.
4. Liên kết thư mục dự án với Firebase:
   ```bash
   firebase login
   firebase use --add
   ```
   *Lưu ý: Chọn đúng Project ID bạn vừa tạo.*

### 3. Cấu hình EmailJS (Gửi Email)
Dự án sử dụng EmailJS để gửi thông tin khách hàng từ Form báo giá trực tiếp về email của bạn.

1. Đăng ký tài khoản tại [EmailJS](https://www.emailjs.com/).
2. **Add New Service**: Chọn dịch vụ email ( Gmail, Outlook, v.v.). Lưu lại `Service ID`.
3. **Email Templates**: Tạo một template mới. Sử dụng các biến sau để khớp với mã nguồn:
   - `{{from_name}}`: Tên khách hàng.
   - `{{phone_number}}`: Số điện thoại.
   - `{{product_type}}`: Loại sản phẩm.
   - `{{message}}`: Ghi chú.
   - `{{to_email}}`: Email nhận thông báo.
4. Lưu lại `Template ID`.
5. Đi tới **Account** -> **Public Key**. Lưu lại `Public Key`.

**Cập nhật mã nguồn:**
Mở file [public/js/script.js](file:///e:/TruongThoQB/public/js/script.js) và thay thế các giá trị cấu hình:
```javascript
// Configuration - Replace with your EmailJS IDs
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

## 🌐 Triển khai (Deploy)
Sau khi đã cấu hình xong, bạn có thể đưa website lên internet bằng Firebase Hosting:

```bash
firebase deploy
```

Website của bạn sẽ khả dụng tại địa chỉ `https://<YOUR_PROJECT_ID>.web.app`.

## 📂 Cấu trúc thư mục
- `public/`: Chứa toàn bộ mã nguồn frontend (HTML, CSS, JS, Images).
- `firebase.json`: Cấu hình Firebase Hosting.
- `.firebaserc`: Quản lý Project ID của Firebase.

---
© 2025 Trường Thọ QB.
