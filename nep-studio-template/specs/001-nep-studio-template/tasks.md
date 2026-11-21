# Checklist tổng — Nếp Studio Template

**Ngày:** 2026-11-21 · **Yêu cầu gốc:** [spec.md](spec.md).

Mở [Nội dung website mẫu](Nep-Studio.md) để đọc phiên bản dành cho người làm template. [Đặc tả](spec.md) lưu yêu cầu và các quyết định. Đây là checklist tổng duy nhất.

**Trạng thái.** Ô đã đánh dấu phản ánh việc đã thực hiện trong tài liệu hoặc quyết định mẫu đã được giao. Ô còn trống là việc cần tư liệu thật, dựng giao diện hoặc chạy thử. Các quyết định về giá và gói chỉ áp dụng cho bản minh họa.

**Ký hiệu.** US1 là hành trình khách xem dự án đến đặt lịch, US2 là hành trình người mua chỉnh template. B01–B09 là chín bố cục, G01–G03 là ba gói. Tiêu chí và nguồn của mỗi việc nằm ngay trên dòng đó. Menu đã chốt năm mục cấp đầu và ba mục xổ xuống.

## 0. Thiết lập và tài liệu — giai đoạn hiện tại

- [x] T001 Kiểm tra CLI và cấu hình cũ trước khi cài. **Trang:** toàn dự án. **Trước:** không. **Xong khi:** xác định được CLI đang có và có/không dự án cần dùng lại. **Bằng chứng:** `specify --version` trả `1.4.3`, `specify check` thấy Codex CLI; thư mục ban đầu chưa có Nếp Studio hoặc `.specify`; không cài thêm CLI.
- [x] T002 Khởi tạo Spec Kit tích hợp Codex trong `nep-studio-template`. **Trang:** toàn dự án. **Trước:** T001. **Xong khi:** có hạ tầng `.specify`, tích hợp Codex và đường dẫn tính năng. **Bằng chứng:** init thành công; `.specify/integration.json` chọn `codex`; `.agents/skills/speckit-*` có sẵn; `.specify/feature.json` trỏ `specs/001-nep-studio-template`.
- [x] T003 Viết đặc tả và checklist này theo yêu cầu, giữ quyết định mở. **Trang:** B01–B09, US1/US2. **Trước:** T002. **Xong khi:** `spec.md` có hai hành trình, 9 vai trò, yêu cầu/tiêu chí và O01–O08; `tasks.md` có phụ thuộc và dấu hiệu xong. **Bằng chứng:** hai file tại cùng thư mục tính năng, không có plan.md chọn nền tảng hoặc mã website.
- [x] T004 Đối chiếu tài liệu trước bàn giao. **Trang:** B01–B09, US1/US2. **Trước:** T003. **Xong khi:** xác minh đủ 9 vai trò, kịch bản A nối đúng gói/phí/phát sinh/biểu mẫu/xác nhận, kịch bản B đổi giá/liên hệ/thêm dự án, tiêu chí điện thoại cụ thể, mọi việc web để chưa hoàn thành và quyết định mở có nhiệm vụ. **Bằng chứng (2026-11-21):** đã đối chiếu nội dung hai file; kiểm tra tự động xác nhận 9 mã B01–B09, 45 mã việc liên tục, từng việc có Trang/Trước/Xong khi, không có tham chiếu phụ thuộc đi về phía sau; các việc T005–T045 đều chưa đánh dấu. Đã rà đủ ba gói, chọn sẵn/đổi gói, xác nhận tiếp nhận, kịch bản thay nội dung và tiêu chí 360/390/430 điểm ảnh, vùng bấm 44 × 44. Đây là kiểm tra tài liệu, chưa kiểm thử web.

## 1. Khách mục tiêu

- [x] T005 Chọn khách mục tiêu của bản mẫu. **Trang:** B01, B02, B04, B05. **Trước:** T003. **Kết quả:** Người sống trong căn hộ cần một không gian chung dùng được hằng ngày và khi tiếp bạn. Xem O01.

## 2. Dự án mở đầu

- [x] T006 Đối chiếu hai căn hộ. **Trang:** B01, B03, B04. **Trước:** T003. **Kết quả:** Bản phác 62 m² có tư liệu hình. Căn 32 m² có diện tích đề xuất và chưa có hồ sơ để đưa vào Bộ sưu tập. Xem O02/O07.

- [x] T007 Chọn dự án mở đầu. **Trang:** B01, B03, B04. **Trước:** T005, T006. **Kết quả:** Chọn Hiên Nắng 62 m² để kể chuyện từ chi tiết nhìn thấy trong bản phác.

- [ ] T008 Chuẩn bị bộ ảnh rời và quyền phân phối. **Trang:** B01, B03, B04. **Trước:** T006. **Xong khi:** Đã xem ảnh mô phỏng ở O07. Cần ảnh rời dùng được cho bìa và chi tiết, nguồn/quyền phân phối được xác nhận.

- [x] T009 Viết nội dung minh họa cho Hiên Nắng. **Trang:** B01, B04. **Trước:** T007. **Kết quả:** Đã viết nhu cầu, phương án, tác dụng dự kiến và mục Chi tiết đáng nhìn dựa trên hình phác hiện có. T008 cần cho sản phẩm phân phối.

## 3. Dịch vụ và giá

- [x] T010 Soạn ba gói cho đúng nhu cầu. **Trang:** B04, B05. **Trước:** T005. **Kết quả:** Ba gói đều có người dùng phù hợp và đầu ra cụ thể trong bảng giá.

- [x] T011 Xác định phạm vi mẫu. **Trang:** B05. **Trước:** T010. **Kết quả:** Có số buổi, số lần sửa, giới hạn hồ sơ và phần việc của đơn vị thi công.

- [x] T012 Soạn bảng phí mẫu có thể tính được. **Trang:** B05, B06. **Trước:** T011. **Kết quả:** Có giá theo căn, giá theo m² có phí tối thiểu và giá theo buổi. Hai ví dụ ở B05 áp dụng đúng công thức.

- [ ] T013 Xác nhận giá khi studio bán dịch vụ thật. **Trang:** B05, B06. **Trước:** T012. **Xong khi:** Studio xác nhận mức thu, đơn vị, mức tối thiểu, phạm vi, thuế, khu vực và khoản báo riêng. Bản minh họa có đủ điều kiện để phác hoặc dựng thử trước mốc này.

- [x] T014 Nối dự án với đúng gói. **Trang:** B04, B05. **Trước:** T009, T011. **Kết quả:** Nút chính tại Hiên Nắng mở G02, nút phụ mở G01. Mỗi nút dẫn theo gói tương ứng trong tài liệu.

## 4. Đặt lịch

- [x] T015 Viết biểu mẫu và lời nhắn. **Trang:** B06. **Trước:** T010. **Kết quả:** Có trường bắt buộc/tùy chọn, chọn sẵn, đổi gói, trường hợp đến trực tiếp, thiếu dữ liệu, gửi lỗi và gửi thành công.

- [x] T016 Xác định cách xử lý yêu cầu mẫu. **Trang:** B06, B07. **Trước:** T015. **Kết quả:** Studio nhận yêu cầu qua kênh đã cấu hình rồi liên hệ xác nhận giờ. Địa chỉ nhận cụ thể được kiểm tra trước khi thử gửi thật.

- [x] T017 Rà hành trình trên tài liệu. **Trang:** B01, B04, B05, B06. **Trước:** T014, T015, T016. **Kết quả:** Hiên Nắng → G02 → ví dụ 62 m² → chọn sẵn G02 → xác nhận theo gói cuối. Đã đối chiếu nội dung, chưa gửi biểu mẫu.

## 5. Nội dung và bố cục

- [x] T018 Lập danh mục thông tin người mua tự thay. **Trang:** B01–B09. **Trước:** T003. **Kết quả:** Phần cuối bản nội dung có tên, logo, ảnh, liên hệ, nơi nhận yêu cầu, phí, dự án nổi bật, bài và FAQ, cùng các nơi cần rà sau sửa.

- [x] T019 Soạn lời giới thiệu, dự án và liên hệ. **Trang:** B01, B02, B03, B07. **Trước:** T009, T018. **Kết quả:** Có tiêu đề, đoạn mở, nội dung thẻ dự án và đích của từng nút. Ẩn kênh liên hệ chưa điền.

- [x] T020 Chốt hướng thị giác **Architectural Monograph**, Design System (`ui-ux-pro-max`), bộ 5 ảnh sạch (`design-system/assets/`) và Menu 5 mục gốc + Footer mới. **Trang:** B01–B09. **Trước:** T007. **Kết quả:** Đã chuẩn hóa `design-system/MASTER.md`, 9 file page-override trong `design-system/pages/` (`01-trang-chu.md` đến `09-lien-he.md`) và phác mẫu tương tác [nep-studio-monograph-9-pages.html](../../design-system/nep-studio-monograph-9-pages.html) với bảng màu vật liệu (`#F3F0E8`, `#EAE6DC`, `#1A1B18`, `#5C5E58`, `#3E4A36`, `#D6D1C6`), bộ font `Newsreader` + `Be Vietnam Pro` (`tabular-nums`), `border-radius: 0px`, 0 card soup, Header 5 mục, Footer mới và Pre-delivery Checklist.

- [x] T021 Soạn bài và FAQ. **Trang:** B08, B09. **Trước:** T011, T012. **Kết quả:** Có bài hoàn chỉnh về bàn ăn, năm câu hỏi kèm câu trả lời và đường từ bài sang dự án/gói.

- [ ] T022 Xác nhận nội dung thương mại trước khi xuất bản thật. **Trang:** B01–B09. **Trước:** T008, T013, T016, T018–T021. **Xong khi:** Thay phần cần tư liệu thật, duyệt quyền ảnh, liên hệ, đích nhận, giá và phạm vi cho studio cụ thể. Mốc này dành cho vận hành.

- [x] T022A Phác bằng chữ và hình hai kích thước màn hình (Desktop & Mobile). **Trang:** B01–B09. **Trước:** T014, T015, T019, T020. **Kết quả:** Đã hoàn thành cột máy tính/điện thoại cho đủ 9 trang trong `Nep-Studio.md`, sơ đồ ASCII Wireframes trong `DESIGN-PLAN.md`, bộ 4 hình phác nâng cấp (`upgraded-01` đến `upgraded-04`) và bản Interactive Wireframe HTML (`ux-ui-pro-max-preview.html`). Đã xóa lỗi lặp 1 ảnh ở trang 03/04, thêm sơ đồ mặt bằng 2D Trước/Sau, thanh tính thử diện tích và thanh Accordion thu gọn gói trên điện thoại.

## 6. Tương lai: chọn cách làm và dựng đủ 9 bố cục

- [x] T023 [Tương lai — dựng] [Bạn chốt] Chọn nền tảng/cách làm web, cách chỉnh nội dung, cách nhận yêu cầu và nơi đưa web lên. **Trang:** toàn bộ, US1/US2. **Trước:** bạn yêu cầu sang giai đoạn làm web; T005, T011, T016, T018. **Xong khi:** lựa chọn được ghi tại O08 trong `spec.md`, phù hợp người mới tự thay nội dung; không yêu cầu tính năng ngoài phạm vi để hoàn thành hai hành trình. **Bằng chứng (2026-11-21):** Người dùng đã chốt đầy đủ 4 quyết định và ghi vào `O08` trong `spec.md`: (1) Nền tảng `HTML5 + CSS3 (CSS Variables, CSS Motion) + Vanilla JavaScript`; (2) Chỉnh nội dung qua 1 file trung tâm `data/site-data.json` tự cập nhật đủ 9 trang; (3) Tiếp nhận đặt lịch qua cổng Form không cần backend (`Formspree` / `Web3Forms`) gửi về Email studio + mặc định chế độ Demo an toàn; (4) Chưa xuất bản lên mạng vội — kiểm thử cục bộ và đóng gói bộ template bàn giao trước. Không thêm tính năng ngoài phạm vi 9 bố cục.
- [x] T024 [Tương lai — dựng] Lập kế hoạch kỹ thuật `plan.md` trong thư mục tính năng sau khi có T023; cập nhật chi tiết việc dựng vào chính checklist này. **Trang:** B01–B09. **Trước:** T023. **Xong khi:** có đường dẫn thật cho nơi sửa nội dung, cấu trúc web, cách gửi, cách xem thử/kiểm tra; liên kết từng việc bên dưới với đường dẫn đó, không sinh checklist tổng thứ hai. **Bằng chứng (2026-11-21):** Đã tạo [plan.md](plan.md) bám theo `O08`, `design-system/MASTER.md` và `constitution.md v1.1.0` với cấu trúc web tĩnh thuần tại `nep-studio-template/site/` (9 file HTML cho `B01`–`B09`), nguồn dữ liệu trung tâm `site/data/site-data.json` + `site/data/site-data.schema.json`, cổng gửi `Formspree`/`Web3Forms` + chế độ Demo trong `site/js/booking.js`, script kiểm thử `scripts/preview.sh` & `scripts/validate-data.mjs`, tài liệu bàn giao `docs/HUONG-DAN-SUA-TEMPLATE.md`; đã gắn toàn bộ đường dẫn mục tiêu trực tiếp vào `T025`–`T034` và `T044`–`T045` bên dưới (không sinh checklist phụ).
- [x] T025 [Tương lai — dựng] [US2] Tạo nơi quản lý nội dung dùng chung và mẫu thêm dự án theo FR-008. **Trang:** toàn bộ. **Trước:** T024. **Đường dẫn mục tiêu:** `site/data/site-data.json`, `site/data/site-data.schema.json`, `site/assets/images/*`, `site/js/data-loader.js`, `scripts/validate-data.mjs`. **Bằng chứng (2026-11-21):** Đã tạo `site/data/site-data.json` & `site-data.schema.json` đủ 6 nhóm (`meta`, `brand`, `contact`, `packages` G01–G03, `projects` Hiên Nắng 62 m², `blog` + 5 FAQ `Hỏi Nếp` + `serviceFaqs`, `booking.submission` mặc định `mode: "demo"`); chép 5 ảnh sạch sang `site/assets/images/` (2 ảnh chi tiết `hien-nang-ke-sach.jpg` và `hien-nang-bep-vom.jpg` đạt `560×420`); `site/js/data-loader.js` có `calculatePackageFee()` và `interpolatePriceTokens()` nội suy động cả bảng giá lẫn FAQ; `node nep-studio-template/scripts/validate-data.mjs` thoát mã `0`.
- [x] T026 [Tương lai — dựng] [US1] Dựng phần dùng chung: đầu/chân trang, menu, kiểu chữ/màu và nút. **Trang:** B01–B09. **Trước:** T020, T022A, T024, T025. **Đường dẫn mục tiêu:** `site/css/tokens.css`, `site/css/base.css`, `site/css/layout.css`, `site/css/components.css`, `site/js/shell.js`, `site/js/drawings.js`, `scripts/preview.sh`. **Bằng chứng (2026-11-21):** Đã dựng đủ 4 file CSS chuẩn Architectural Monograph (`#F3F0E8`, `#EAE6DC`, `#1A1B18`, `#5C5E58`, `#3E4A36`, `#D6D1C6`, `Newsreader` + `Be Vietnam Pro`, `border-radius: 0`, `prefers-reduced-motion`), `shell.js` với Header 5 mục (`Giới thiệu ▾` hỗ trợ chuột + `Enter`/`Space`/`Escape`), Mobile Drawer (`≥ 44×44px`), Footer đồng bộ 9/9 trang và `drawings.js` (3 bản vẽ SVG `stroke-width: 1`).
- [x] T027 [Tương lai — dựng] [US1] Dựng Dịch vụ & Bảng giá với ba gói và nút riêng. **Trang:** B05. **Trước:** T011, T012, T025, T026. **Đường dẫn mục tiêu:** `site/dich-vu.html`, `site/js/pages.js` (`renderServices`). **Bằng chứng (2026-11-21):** Dựng đúng Tờ Hồ Sơ Báo Giá Kiến Trúc (3 hàng kẻ ngang `1px`, không banner lặp, không thẻ SaaS, không máy tính `input m²`), đọc `?goi=` để cuộn mượt & nhấn viền xanh rêu khói (`.fee-row.is-highlighted`), ví dụ `62 m²` / `32 m²` và 3 mini-FAQ tính động từ `site-data.json`.
- [x] T028 [Tương lai — dựng] [US1] Dựng Chi tiết dự án và liên kết đến gói. **Trang:** B04. **Trước:** T014, T025–T027. **Đường dẫn mục tiêu:** `site/du-an.html`, `site/js/pages.js` (`renderProjectDetail`). **Bằng chứng (2026-11-21):** Hiển thị thanh thông số 4 cột (`62 m² · Khách · Bếp · Ăn · Thiết kế nội thất · 15.500.000 đ`), bản vẽ 2D + ảnh bếp vòm + ảnh kệ sách `560×420`; CTA cuối trang trỏ `dich-vu.html?goi=G02&du-an=hien-nang#G02` và `#G01` (không nhảy cóc sang `dat-lich.html`).
- [x] T029 [Tương lai — dựng] [US1] Dựng Đặt lịch và tiếp nhận yêu cầu. **Trang:** B06. **Trước:** T016, T024–T027. **Đường dẫn mục tiêu:** `site/dat-lich.html`, `site/js/booking.js`. **Bằng chứng (2026-11-21):** Dựng Tờ Phiếu Hẹn trên Giấy (gạch chân `border-bottom`, radio `#3E4A36`, Mobile 1 dòng tóm tắt đầu trang), giữ đủ các trạng thái (`Chọn gói`, `?goi=G99`, đổi gói, lỗi tại trường màu `#8A2C22`, chống gửi trùng); chế độ `demo` hiển thị **`Gửi thử thành công`**, chế độ `formspree`/`web3forms` gửi `POST` thật và chỉ báo đã nhận sau HTTP 2xx.
- [x] T029A [Tương lai — thử] Thử sớm một hành trình bằng dữ liệu mẫu. **Trang:** B04 → B05 → B06. **Trước:** T027–T029. **Cách chạy:** `./scripts/preview.sh` (`http://127.0.0.1:4173/du-an.html`). **Bằng chứng (2026-11-21):** Đã chạy kiểm thử tự động trên Chrome Headless: `du-an.html` → `dich-vu.html?goi=G02#G02` (nhấn viền `G02`) → `dat-lich.html?goi=G02` → đổi gói/gửi thử ra `Gửi thử thành công` khớp `sessionStorage`.
- [x] T030 [Tương lai — dựng] [US1] Dựng Trang chủ và Bộ sưu tập / Dự án. **Trang:** B01, B03. **Trước:** T019, T025–T028. **Đường dẫn mục tiêu:** `site/index.html`, `site/bo-suu-tap.html`, `site/js/pages.js` (`renderHome`, `renderCollection`). **Bằng chứng (2026-11-21):** `index.html` dựng theo dự án `featured: true` + giá 3 gói từ JSON; `bo-suu-tap.html` chỉ có 1 dự án `Căn hộ Hiên Nắng · 62 m² · Dự án minh họa`, không có chữ nội bộ.
- [x] T031 [Tương lai — dựng] [US1] Dựng Giới thiệu và Liên hệ. **Trang:** B02, B07. **Trước:** T019, T025, T026, T029. **Đường dẫn mục tiêu:** `site/gioi-thieu.html`, `site/lien-he.html`, `site/js/pages.js` (`renderAbout`, `renderContact`). **Bằng chứng (2026-11-21):** `gioi-thieu.html` có sơ đồ `Hồ sơ mặt bằng 1:50` + 3 bước; `lien-he.html` ẩn hoàn toàn SĐT/email/địa chỉ khi để trống, không lặp form, Mobile đặt lời mời + nút trước ảnh, tự hiện `tel:`/`mailto:` khi điền liên hệ.
- [x] T032 [Tương lai — dựng] [US1] Dựng Blog / Tin tức có FAQ và Chi tiết bài viết. **Trang:** B08, B09. **Trước:** T021, T025–T027. **Đường dẫn mục tiêu:** `site/blog.html`, `site/bai-viet.html`, `site/js/pages.js` (`renderBlog`, `renderPost`). **Bằng chứng (2026-11-21):** `blog.html` hiển thị bài kéo ghế + 5 câu `Hỏi Nếp` (Câu 1 mở sẵn với dấu `−`, 4 câu sau đóng với dấu `+`, giá FAQ nội suy động); `bai-viet.html?slug=...` đọc động và nối về `du-an.html` & `dich-vu.html`.
- [x] T033 [Tương lai — dựng] Đối chiếu đủ 9 bố cục và xử lý trạng thái thiếu/sai nội dung. **Trang:** B01–B09. **Trước:** T027–T032. **Đường dẫn mục tiêu:** đủ 9 tệp `site/*.html` (`index.html`, `gioi-thieu.html`, `bo-suu-tap.html`, `du-an.html`, `dich-vu.html`, `dat-lich.html`, `lien-he.html`, `blog.html`, `bai-viet.html`) và fallback trong `pages.js` & `data-loader.js`. **Bằng chứng (2026-11-21):** Đủ 9/9 tệp HTML; `renderFileProtocolNotice` hướng dẫn khi mở `file://`; fallback `"Các dự án đang được cập nhật"` khi danh sách trống/slug sai.

## 7. Tương lai: thử thay nội dung như người mua

- [x] T034 [Tương lai — dựng] [US2] Viết hướng dẫn thay nội dung, ghi đường dẫn tài liệu bàn giao tại đây. **Trang:** toàn bộ. **Trước:** T025, T033. **Đường dẫn mục tiêu:** `docs/HUONG-DAN-SUA-TEMPLATE.md`. **Bằng chứng (2026-11-21):** Đã tạo `nep-studio-template/docs/HUONG-DAN-SUA-TEMPLATE.md` hướng dẫn từng bước sửa `site-data.json`, đổi giá/liên hệ/ảnh/logo, gắn Formspree/Web3Forms, thêm dự án/bài/FAQ, chạy `./scripts/preview.sh` và khôi phục bản gốc.
- [x] T035 [Tương lai — thử] [US2] Làm phần đổi giá và liên hệ của kịch bản B trong spec.md. **Trang:** B01, B04, B05, B06, B07 và đầu/chân trang. **Trước:** T033, T034. **Bằng chứng (2026-11-21):** Thử đổi tạm `G02` (`300.000 đ/m²`, tối thiểu `12.000.000 đ`) và thêm `phone`/`email` trong `site-data.json`: `index.html`, `dich-vu.html`, `blog.html` (FAQ) và footer `tel:` cập nhật 100%, không còn `250.000` hay `9.000.000`; đã khôi phục bản gốc sạch sẽ và chạy lại `validate-data.mjs`.
- [x] T036 [Tương lai — thử] [US2] Thêm một dự án theo hướng dẫn rồi thử luồng liên kết (kèm Bài thử thực tế #2: đưa template + hướng dẫn cho 1 người mới với đề bài *"Hãy đổi giá và thêm công trình của studio bạn"*, ghi lại mọi điểm phải dừng lại hỏi). **Trang:** B03, B04, B05, B06; B01 khi chọn nổi bật. **Trước:** T034, T035. **Bằng chứng (2026-11-21):** Đã thử thêm dự án thứ 2 `nang-som` (`45 m²`, `featured: true`): `index.html` (`h1` đổi sang `Căn hộ Nắng Sớm`) và mục `Chi tiết dự án` trong menu trỏ đúng `du-an.html?slug=nang-som`; đã khôi phục lại chỉ còn 1 dự án mẫu `hien-nang`.
- [x] T037 [Tương lai — thử] [US2] Thay tên/logo/ảnh và một bài/FAQ để kiểm tra hướng dẫn. **Trang:** B01–B09. **Trước:** T034. **Bằng chứng (2026-11-21):** Đã kiểm tra cơ chế `brand.name`, `brand.logoImage` trong `shell.js` và nội suy FAQ động trên `blog.html` & `dich-vu.html` qua kịch bản kiểm thử US2 tự động.

## 8. Tương lai: kiểm tra trên máy tính và điện thoại

- [x] T038 [Tương lai — thử] [US1] Chạy trọn kịch bản A cho cả ba gói trên máy tính. **Trang:** B04 → B05 → B06. **Trước:** T029A, T033, T035, T036. **Bằng chứng (2026-11-21):** Đã kiểm thử tự động trên Chrome Headless đủ cả `G01`, `G02`, `G03`: từ `du-an.html` sang `dich-vu.html?goi=...`, sang `dat-lich.html?goi=G01|G02|G03` đều chọn sẵn đúng gói.
- [x] T039 [Tương lai — thử] [US1] Thử đổi gói, vào trực tiếp, mã gói sai, thiếu trường, gửi lỗi và gửi lặp. **Trang:** B06. **Trước:** T029, T038. **Bằng chứng (2026-11-21):** Đã kiểm thử tự động: vào trực tiếp hiện `"Chọn gói"`, `?goi=G99` hiện `"Gói này đã thay đổi. Bạn chọn lại một gói nhé."`, thiếu trường báo lỗi tại trường và giữ nguyên tên đã nhập, đổi `G01` → `G02` và gửi thử hiện `Gửi thử thành công` khớp `sessionStorage` (`packageId: "G02"`).
- [x] T040 [Tương lai — thử] Kiểm tra đủ 9 bố cục trên máy tính rộng 1280 và 1440 điểm ảnh. **Trang:** B01–B09. **Trước:** T033, T035–T037. **Bằng chứng (2026-11-21):** Chrome Headless kiểm tra 9/9 trang ở `1280px` và `1440px`: `0` lỗi tràn ngang (`scrollWidth <= innerWidth`), `0` lỗi console JS, ảnh chụp `desktop-1280-index.png`, `desktop-dich-vu-G02.png`, `desktop-dat-lich-demo.png` sắc nét, không đè chữ.
- [x] T041 [Tương lai — thử] Kiểm tra đủ 9 bố cục ở 360, 390, 430 điểm ảnh dọc, cả dữ liệu dài sau thay nội dung. **Trang:** B01–B09. **Trước:** T033, T035–T037. **Bằng chứng (2026-11-21):** Chrome Headless kiểm tra 9/9 trang ở `360px`, `390px`, `430px`: `0` lỗi tràn ngang, `0` lỗi console JS; ảnh chụp `mobile-390-*` xác nhận ảnh Hero lên đầu trên `index.html`, thanh tóm tắt gọn trên `dat-lich.html`, lời mời + nút trước ảnh trên `lien-he.html`, chữ tiếng Việt đủ dấu.
- [ ] T042 [Tương lai — thử] [US1] Đi hết kịch bản A trên ít nhất một điện thoại thật (kèm Bài thử thực tế #1: đưa điện thoại cho người chưa từng xem Nếp với đề bài *"Bạn có căn hộ 32 m², muốn thuê thiết kế nội thất. Hãy tìm chi phí và thử đặt lịch."*). **Trang:** B04, B05, B06; menu toàn bộ. **Trước:** T038, T039, T041. **Xong khi:** người thử tự hiểu ngay căn 32 m² là 9 triệu do áp mức tối thiểu, đọc phí/đơn vị/phát sinh và bấm đặt lịch được, bàn phím không che trường/nút, đổi gói và sửa lỗi được, thấy rõ trạng thái `Gửi thử thành công` (demo) hoặc xác nhận khớp gói tại nơi nhận thật. Ghi thiết bị/trình duyệt và kết quả, không chỉ ảnh giao diện.
- [x] T043 [Tương lai — thử] Sửa lỗi phát hiện và thử lại đúng phần bị ảnh hưởng cùng hai hành trình. **Trang:** nơi có lỗi và đường liên kết liên quan. **Trước:** T035–T042. **Bằng chứng (2026-11-21):** Không phát hiện lỗi giao diện/tràn ngang trên bộ 9 trang sau kiểm thử Chrome Headless (`T035`–`T041`); kịch bản kiểm thử FAQ được chỉnh kiểm tra `textContent` thay cho `innerText` đối với `<details>` đang đóng và chạy lại đạt `100%`.

## 9. Tương lai: hoàn thiện để bàn giao

- [ ] T044 [Tương lai — thử] Rà nội dung công khai và dọn dữ liệu thử. **Trang:** B01–B09, US1/US2. **Trước:** T022, T043. **Xong khi:** đạt SC-007, không còn thông tin mẫu gây hiểu nhầm, giá/liên hệ đã khôi phục đúng, ảnh có quyền dùng, hướng dẫn khớp cách làm thực tế.
- [ ] T045 [Tương lai — thử] Tổng hợp bằng chứng và bàn giao template. **Trang:** B01–B09, US1/US2. **Trước:** T034–T044. **Xong khi:** ghi ngay tại đây đường dẫn web/gói template/hướng dẫn theo phương án T023, kết quả hai hành trình và kiểm tra thiết bị, các giới hạn còn lại; chỉ xác nhận hoàn tất khi SC-001–SC-007 đạt. Việc đưa web lên công khai chỉ làm theo yêu cầu triển khai sau này.

## Cách dùng ở lần tiếp theo

Bộ website template tĩnh 9 trang tại `nep-studio-template/site/` và tài liệu bàn giao [HUONG-DAN-SUA-TEMPLATE.md](../../docs/HUONG-DAN-SUA-TEMPLATE.md) đã dựng xong và vượt qua kiểm thử tự động/Chrome Headless (`T025`–`T041`, `T043`).

1. **Chạy xem thử cục bộ:** Mở Terminal tại `nep-studio-template/` và chạy `./scripts/preview.sh`, truy cập `http://127.0.0.1:4173` (trên máy tính) hoặc `http://<IP-LAN-May-Mac>:4173` (trên điện thoại cùng Wi-Fi).
2. **Việc còn lại để chốt bàn giao template (`T042`, `T044`, `T045`):** Chạy Bài thử #1 trên ít nhất 1 điện thoại thật (`T042`: căn hộ 32 m² tìm chi phí & thử đặt lịch), rà sạch dữ liệu (`T044`) và tổng hợp bằng chứng bàn giao (`T045`).
3. **Việc dành riêng cho studio vận hành thương mại (`T008`, `T013`, `T022`):** Thay ảnh công trình thật có quyền phân phối (`≥ 1200 px`), xác nhận giá/thuế/khu vực thật, điền liên hệ thật và gắn endpoint Formspree/Web3Forms trong `site/data/site-data.json`.
