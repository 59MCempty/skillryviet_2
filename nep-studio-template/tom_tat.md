# Nếp Studio — Tóm tắt phiên làm việc

Ngày 21/11/2026 · Dự án `nep-studio-template`

**Trạng thái cuối phiên:** Đã hoàn thành phần đặc tả, checklist và bản HTML minh họa đủ 9 bố cục. Bản mẫu được đánh giá **7,5/10**. Việc ưu tiên là sửa nút ở cuối trang Hiên Nắng để khách xem được giá của đúng gói trước khi đặt lịch.

## Mục tiêu và các quyết định đã chốt

- **Khách của studio** đi từ công trình → hiểu một quyết định thiết kế → xem gói dịch vụ và chi phí → đặt lịch tư vấn.
- **Người mua template** cần tự thay tên, logo, ảnh, liên hệ, giá và thêm dự án mới. Người dùng muốn được hướng dẫn bằng tiếng Việt, với một checklist chung.
- **Dự án mở đầu** là căn hộ minh họa *Hiên Nắng 62 m²*. Mục *Chi tiết đáng nhìn* kể cách băng ghế cửa sổ vừa làm góc đọc vừa thêm chỗ ngồi quanh bàn ăn. Căn 32 m² dùng để giải thích cách tính phí. Định vị chuyên căn hộ 25–45 m² vẫn là phương án mở.
- **Nhận diện** gồm nền trắng ngà, chữ than, điểm nhấn xanh ô liu. Cách kể quyết định thiết kế cần dùng lại được khi người mua thay ảnh hoặc thêm công trình.

## Cấu trúc website

**Menu có 5 mục:** Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ. Mục **Giới thiệu** xổ đúng ba lựa chọn theo thứ tự **Bộ sưu tập · Chi tiết dự án · Dịch vụ và bảng giá**.

**Website có 9 bố cục:** Trang chủ, Giới thiệu, Bộ sưu tập, Chi tiết dự án, Dịch vụ và bảng giá, Đặt lịch, Liên hệ, Blog có FAQ và Chi tiết bài viết. Trang giới thiệu mở qua “Về Nếp Studio”, từng bài viết mở từ Blog.

**Chân trang mới đã có trong HTML**, gồm tên studio, “Về Nếp Studio”, “Dịch vụ và bảng giá”, “Liên hệ” và ghi chú “Dự án minh họa · Giá minh họa”.

## Ba gói và giá minh họa

| Gói | Khách nhận gì | Giá trong bản mẫu |
|---|---|---|
| Tư vấn bố trí mặt bằng | Buổi trực tuyến 60 phút, một sơ đồ có chú thích, một lượt góp ý | 1.500.000 đ/căn đến 70 m² |
| Thiết kế nội thất | Mặt bằng, phối cảnh, bảng vật liệu, bản vẽ triển khai và hai vòng chỉnh sửa | 250.000 đ/m², tối thiểu 9.000.000 đ/căn |
| Đồng hành thi công | Một buổi đối chiếu hạng mục với hồ sơ tại công trình, kèm ghi chú sau buổi | 1.200.000 đ/buổi, tối đa hai giờ trong khu vực phục vụ |

Ví dụ cho gói thiết kế: **62 m² × 250.000 đ = 15.500.000 đ**. Với **32 m²**, phép nhân cho 8.000.000 đ nên áp mức tối thiểu **9.000.000 đ**. Studio mua template sẽ xác nhận giá thật, phạm vi, thuế và khoản phát sinh trước khi nhận khách.

## Những gì đã làm và đã kiểm tra

1. Dùng GitHub Spec Kit với Codex để lập đặc tả và checklist. UI UX Pro Max được đề xuất cho phần rà bố cục, Frontend Design cho giai đoạn dựng giao diện.
2. Soạn nội dung cả 9 trang. Đã xem bốn hình minh họa đầu tiên của luồng Trang chủ → Hiên Nắng → Bảng giá → Đặt lịch, mỗi hình có máy tính và điện thoại. Đã viết prompt giao GPT Sol thực hiện năm hình còn lại.
3. Tìm và rà bản HTML. Đã chạy phần tạo nội dung của đủ 9 bố cục, kiểm tra các ảnh được tham chiếu có trong thư mục. Kiểm thử trên điện thoại thật và quan sát người mới tự chỉnh template còn để ngỏ.

## Checklist để tiến tới 10/10

- [ ] **Sửa đường từ dự án sang giá.** Nút “Xem gói Thiết kế nội thất” ở trang Hiên Nắng hiện mở thẳng biểu mẫu. Cho nút mở đúng gói trên bảng giá. Từ gói đó, nút “Đặt lịch tư vấn” mới mở biểu mẫu có sẵn lựa chọn.
- [ ] **Cho phép đổi giá ở một nơi.** Khi sửa đơn giá hoặc mức tối thiểu, bảng giá, phép tính ví dụ, FAQ và phần tóm tắt khi đặt lịch phải cùng cập nhật.
- [ ] **Phân biệt gửi thử và gửi thật.** Bản HTML hiện báo studio đã nhận dù chỉ đổi trạng thái trên màn hình. Bản demo cần ghi “Gửi thử thành công”. Khi vận hành thật, chỉ xác nhận sau khi nơi nhận đã tiếp nhận yêu cầu và giữ phần khách đã nhập nếu gửi lỗi.
- [ ] **Nâng chất lượng ảnh chi tiết.** Hai ảnh kệ sách và góc bếp hiện chỉ rộng 244 px. Ưu tiên thay ảnh đủ nét cho phần giải thích thiết kế trên máy tính.
- [ ] **Thử hai việc từ đầu đến cuối.** Cho một người dùng điện thoại thật tìm phí thiết kế căn 32 m² rồi đặt lịch. Cho một người mới khác đổi thương hiệu, giá, liên hệ, thêm dự án thứ hai và chọn làm tiêu biểu. Kiểm tra cả Trang chủ lẫn mục “Chi tiết dự án” mở đúng công trình mới.

## Tệp để tiếp tục

- [Bản HTML 9 bố cục](design-system/nep-studio-monograph-9-pages.html)
- [Nội dung mẫu](specs/001-nep-studio-template/Nep-Studio.md)
- [Đặc tả Spec Kit](specs/001-nep-studio-template/spec.md)
- [Checklist triển khai](specs/001-nep-studio-template/tasks.md)
