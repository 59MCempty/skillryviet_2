# Page Override: 04 / Đặt lịch (`B06`)

> Kế thừa tokens, font, Menu 5 mục và Footer mới từ `design-system/MASTER.md`.

## 1. Tờ Phiếu Hẹn trên Giấy (0 Banner lớn, Ô nhập gạch chân tối giản)
- **LOẠI BỎ ảnh banner lớn đầu trang.**
- Toàn bộ `<input>`, `<select>`, `<textarea>` dùng nền trong suốt trên `#F3F0E8`, chỉ có `border-bottom: 1px solid #D6D1C6` (focus `#3E4A36`), góc vuông `0px`.
- **Desktop (`1280px`):**
  - **Cột trái (Sticky):** Tóm tắt gói đang chọn (nền `#EAE6DC`, `0px`) + 3 bước tiếp theo (`01. Tiếp nhận yêu cầu`, `02. Liên hệ thống nhất giờ`, `03. Trao đổi phương án`).
  - **Cột phải:** Biểu mẫu có `<label for="...">` cho `Gói quan tâm *` (`"Chọn gói"` khi vào trực tiếp, chọn sẵn khi đi từ gói), `Diện tích ước tính (m²)`, `Nếp có thể gọi bạn là gì? *`, `Cách liên hệ *` (Điện thoại/Email), lời nhắn và khung giờ.
  - Dưới nút `Gửi yêu cầu tư vấn` (`#3E4A36`, `0px`, `min-height: 48px`) có **đủ cả 2 câu**:
    1. *"Gửi yêu cầu chưa phải xác nhận lịch hẹn."*
    2. *"Studio sẽ dùng thông tin bạn gửi để trao đổi về yêu cầu này."*
- **Mobile (`390px`):** Thu gọn tóm tắt gói thành **1 dòng kẻ mở rộng** ở đầu trang (`Đang chọn: ...  Xem chi tiết`) để Form hiện ngay đầu màn hình.
- **Trạng thái xác nhận:** Không đặt cứng bên dưới nút Gửi; chỉ hiện khi bấm Gửi hoặc bật công tắc `Xem trạng thái: Sau khi gửi`.
