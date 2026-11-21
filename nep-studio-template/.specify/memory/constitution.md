# Nguyên tắc dự án Nếp Studio Template

## Core Principles

### I. Phục vụ đủ hai hành trình
Mọi thay đổi phải giữ hành trình khách studio từ công trình đến yêu cầu tư vấn và khả năng người mua tự thay nội dung template.

### II. Phạm vi đúng 9 bố cục
FAQ nằm trong Blog / Tin tức. Xác nhận gửi thành công nằm trong Đặt lịch. Không tự thêm bố cục thứ mười.

### III. Quyết định mở phải giữ mở
Không tự chốt ngách 25–45 m², dự án mở đầu 32 m², giá, nền tảng hoặc công cụ. Ghi quyết định mở trong spec.md và nối với tasks.md.

### IV. Dịch vụ và giá rõ ràng
Mỗi gói có đầu ra, cách tính phí, phần bao gồm và phát sinh. Đặt lịch giữ đúng gói và cho phép đổi.

### V. Tiến độ có bằng chứng
Chỉ đánh dấu hoàn thành việc đã làm. Viết kịch bản kiểm tra không có nghĩa đã kiểm thử website.

## Giới hạn hiện tại
Giai đoạn thiết lập đặc tả, Design System Architectural Monograph (`design-system/MASTER.md` + 9 trang + `nep-studio-monograph-9-pages.html`) và chốt nền tảng (`T023` tại `O08`) đã hoàn tất theo yêu cầu người dùng. Giai đoạn tiếp theo là lập kế hoạch kỹ thuật (`T024 plan.md`), dựng đủ 9 bố cục bằng `HTML5 + CSS3 + Vanilla JS` dùng `data/site-data.json`, kiểm thử cục bộ và đóng gói bàn giao (chưa xuất bản công khai lên mạng). Các quyết định thương mại (`O01`–`O05`, ảnh/giá/liên hệ thật của studio vận hành) vẫn giữ mở.

## Quy trình tài liệu
`spec.md` là nguồn yêu cầu; `tasks.md` là checklist duy nhất; `plan.md` (tạo ở `T024`) là kế hoạch kỹ thuật gắn đường dẫn file thật vào `tasks.md`. Không sinh checklist tổng thứ hai. Kiểm tra chất lượng và bằng chứng thực thi ghi trực tiếp vào từng đầu việc trong `tasks.md`.

## Governance
Phiên bản đầu rút từ yêu cầu ngày 2026-11-21. Khi người dùng đổi phạm vi, sửa `spec.md` trước rồi cập nhật `tasks.md` và nguyên tắc nếu cần. Tăng phiên bản lớn khi thay nguyên tắc, phiên bản nhỏ khi thêm nguyên tắc hoặc chuyển giai đoạn đã chốt, bản vá khi làm rõ. Không coi quyết định thương mại mở là đã duyệt.

**Version**: 1.1.0 | **Ratified**: 2026-11-21 | **Last Amended**: 2026-11-21
