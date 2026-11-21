# Hướng Dẫn Tự Sửa Template Website Nếp Studio

Tài liệu này dành cho chủ studio hoặc người mới không rành lập trình. Toàn bộ nội dung của **9 trang web** trong `site/` được quản lý tập trung tại **1 tệp duy nhất**: `site/data/site-data.json`.

---

## 1. Xem trước website trên máy tính

Không bấm đúp mở trực tiếp tệp `.html` bằng `file://` (trình duyệt sẽ chặn đọc tệp JSON). Hãy mở Terminal tại thư mục `nep-studio-template/` và chạy:

```bash
./scripts/preview.sh
```

Sau đó mở trình duyệt và truy cập: `http://127.0.0.1:4173`.

Để kiểm tra nhanh dữ liệu không bị lỗi cú pháp hay thiếu ảnh sau khi sửa, chạy:

```bash
node scripts/validate-data.mjs
```

---

## 2. Đổi thương hiệu, logo và ảnh

Mở `site/data/site-data.json`:

1. **Tên và câu giới thiệu (`brand`):**
   - Sửa `brand.name` (ví dụ: `"Studio An Nhiên"`).
   - Nếu dùng logo ảnh, chép file ảnh vào `site/assets/images/` rồi điền đường dẫn vào `brand.logoImage` (ví dụ `"assets/images/logo.png"`). Để trống `""` nếu muốn dùng chữ theo font `Newsreader`.
   - Sửa `brand.tagline`, `brand.aboutTitle`, `brand.aboutLead`, `brand.serviceArea`.
2. **Thay ảnh dự án:**
   - Chép ảnh mới vào `site/assets/images/` (khuyến nghị chiều rộng tối thiểu `1200 px` cho ảnh bìa và `600 px` cho ảnh chi tiết).
   - Cập nhật đường dẫn tương ứng trong `projects[].images` và mô tả `...Alt`.

---

## 3. Đổi đơn giá và phí tối thiểu

Trong mục `packages`:
- Giữ nguyên mã gói `"id": "G01"`, `"G02"`, `"G03"` để không làm gãy liên kết từ dự án sang bảng giá và biểu mẫu đặt lịch.
- Chỉ cần sửa số nguyên ở `unitPrice` và `minPrice` (ví dụ `250000`, `9000000`).
- Hệ thống tự động định dạng tiền VND và cập nhật đồng loạt **Trang chủ, Chi tiết dự án, Bảng giá, ví dụ tính tiền (`62 m²`, `32 m²`), tóm tắt Đặt lịch và toàn bộ câu trả lời FAQ** nhờ các thẻ nội suy `{{G02.price}}`, `{{G02.minPrice}}`, `{{G02.example32}}`, v.v.
- Khi dùng giá bán thật (không còn là bản minh họa), đổi `meta.isDemo` thành `false` và cập nhật `meta.priceDisclaimer`.

---

## 4. Điền thông tin liên hệ (`lien-he.html` & Chân trang)

Trong mục `contact`:
- Bản mẫu để trống `phone`, `email`, `address`, `hours` nên trang `lien-he.html` và chân trang sẽ tự ẩn các mục này.
- Khi điền số điện thoại thật vào `contact.phone` và email thật vào `contact.email`, website tự động hiển thị kèm liên kết bấm gọi (`tel:`) và gửi thư (`mailto:`).

---

## 5. Gắn nơi tiếp nhận đặt lịch thật (`dat-lich.html`)

Mặc định `booking.submission.mode` là `"demo"` (chỉ mô phỏng và hiện **`Gửi thử thành công`**, không gửi dữ liệu ra ngoài).

Khi vận hành thật:
1. Tạo form miễn phí tại **Formspree** hoặc **Web3Forms**.
2. Mở `site/data/site-data.json`, sửa nhánh `booking.submission`:
   - **Dùng Formspree:**
     ```json
     "submission": {
       "mode": "formspree",
       "endpoint": "https://formspree.io/f/MA_FORM_CUA_BAN",
       "accessKey": ""
     }
     ```
   - **Dùng Web3Forms:**
     ```json
     "submission": {
       "mode": "web3forms",
       "endpoint": "https://api.web3forms.com/submit",
       "accessKey": "ACCESS_KEY_CUA_BAN"
     }
     ```
3. Mở `dat-lich.html`, gửi thử 1 yêu cầu và kiểm tra hộp thư studio trước khi công khai.

---

## 6. Thêm dự án mới và chọn dự án nổi bật

Trong mảng `projects`:
1. Sao chép khối đối tượng của dự án `"hien-nang"`, dán xuống dưới (nhớ thêm dấu phẩy `,` ngăn cách giữa hai khối).
2. Đặt `"slug"` duy nhất không dấu (ví dụ `"can-ho-nang-som"`), điền tên, `areaM2`, ảnh, `story` và `detailHighlight`.
3. Muốn dự án nào hiển thị ở **Trang chủ** và là đích của mục menu **`Chi tiết dự án`**, đặt `"featured": true` cho dự án đó (và `"featured": false` cho dự án cũ).

---

## 7. Thêm bài Blog hoặc câu hỏi FAQ (`Hỏi Nếp`)

- **Thêm bài viết:** Thêm 1 khối vào `blog.posts[]` với `slug` không dấu; bài mới tự xuất hiện trên `blog.html` và mở chi tiết tại `bai-viet.html?slug=<slug>`.
- **Thêm/sửa FAQ:** Sửa mảng `blog.faqs[]`. Nếu muốn câu nào mở sẵn khi vào trang, đặt `"defaultOpen": true`.

---

## 8. Khôi phục bản mẫu gốc

Trước khi sửa, nên sao chép dự phòng `site/data/site-data.json` thành `site/data/site-data.backup.json`. Nếu muốn quay về bản gốc, chỉ cần chép đè lại tệp dự phòng vào `site/data/site-data.json` và chạy `node scripts/validate-data.mjs`.
