# Page Override: 01 / Trang chủ (`B01`)

> Kế thừa tokens (`#F3F0E8`, `#EAE6DC`, `#1A1B18`, `#5C5E58`, `#3E4A36`, `#D6D1C6`), font (`Newsreader` + `Be Vietnam Pro`), Menu 5 mục và Footer mới từ `design-system/MASTER.md`.

## 1. Bố cục Hero & Nhịp hình ảnh
- **Desktop (`1280px`):** Bất đối xứng 35% chữ trái / 65% ảnh `assets/hien-nang-hero.jpg` tràn mép phải (`border-radius: 0px`). Cột trái: nhãn *Dự án tiêu biểu · 62 m²*, tiêu đề `Newsreader` *"Căn hộ Hiên Nắng"*, mô tả ngắn, 1 nút chính `Xem căn hộ` (`#3E4A36`, `0px`) và liên kết gạch chân mảnh `Xem bảng giá` (không mũi tên `→`).
- **Mobile (`390px`):** Ảnh `assets/hien-nang-hero.jpg` hiển thị ngay dưới Header → tên căn *"Căn hộ Hiên Nắng"*, `62 m²` → nút `Xem căn hộ` và liên kết `Xem bảng giá`.

## 2. Các phần bên dưới (0 Card Soup, 0 Icon trang trí)
1. **Chi tiết đáng nhìn:** Ngăn cách `1px solid #D6D1C6`. Ghép **bản vẽ mặt bằng 2D nét mảnh (`stroke-width: 1`, trực tiếp trên `#F3F0E8`, không đóng hộp)** cạnh `assets/hien-nang-cua-so.jpg` + lời kể *"Một chỗ ngồi, hai nhịp sống"* + liên kết `Khám phá Hiên Nắng`.
2. **Dịch vụ của Nếp:** 3 cột typography sạch sẽ (không khung hộp, không icon), dùng số thứ tự mảnh `01`, `02`, `03` + tên gói Serif + mô tả ngắn + đơn giá `tabular-nums` (`1.500.000 đ/căn` · `250.000 đ/m²` · `1.200.000 đ/buổi`) + liên kết `Xem dịch vụ và bảng giá`.
3. **Về Nếp Studio & Quy trình 3 bước:** Trái là câu định vị + 3 bước (`01. Kể về sinh hoạt` · `02. Xem phương án` · `03. Chốt hồ sơ`) ngăn cách `1px solid #D6D1C6` + liên kết `Về Nếp Studio`; Phải là `assets/hien-nang-binh-hoa.jpg`.
