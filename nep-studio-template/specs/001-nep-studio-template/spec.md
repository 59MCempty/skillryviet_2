# Đặc tả: Template website Nếp Studio

**Ngày tạo:** 2026-11-21 · **Trạng thái:** Đã dựng hoàn chỉnh bộ website tĩnh 9 bố cục (`site/*.html`, `site/data/site-data.json`), hướng dẫn người mua (`docs/HUONG-DAN-SUA-TEMPLATE.md`) và kiểm thử tự động/trực quan đạt chuẩn (`T025`–`T041`, `T043`). Còn bước `T042` (thử trên điện thoại thật) và `T044`–`T045` (nghiệm thu bàn giao).

**Thư mục tính năng:** `specs/001-nep-studio-template/` · **Nhánh Git:** Chưa tạo.

**Đọc trước:** [Design System MASTER](../../design-system/MASTER.md), [Phác mẫu 9 trang Architectural Monograph](../../design-system/nep-studio-monograph-9-pages.html), [Phiếu Thiết Kế](DESIGN-PLAN.md) và [Nội dung và bố cục Nếp Studio](Nep-Studio.md) là bộ chuẩn giao diện & nội dung đã duyệt. Tài liệu này ghi các yêu cầu nghiệm thu và các quyết định đã chốt.

**Theo dõi:** [tasks.md](tasks.md) là checklist tổng duy nhất. Các kịch bản và tiêu chí dưới đây dành cho website tương lai, chưa phải kết quả kiểm thử.

## Mục tiêu và giới hạn

Template dành cho studio nội thất tại Việt Nam. Khách xem công trình, hiểu nhu cầu đã được giải quyết như thế nào, xem đúng dịch vụ và giá, rồi gửi yêu cầu tư vấn. Câu chuyện nội thất cần nối với dịch vụ có thể bán, có phạm vi và chi phí rõ ràng.

Người mua template tự đổi tên thương hiệu, logo, ảnh, giá, thông tin liên hệ và thêm dự án thông qua **1 file dữ liệu trung tâm (`data/site-data.json`)** theo hướng dẫn bàn giao (đã chốt tại `T023` / `O08`).

Giai đoạn hiện tại đã chuyển sang chuẩn bị dựng web theo lựa chọn `T023`: lập kế hoạch kỹ thuật (`T024 plan.md`), dựng đủ 9 bố cục (`B01`–`B09`), kiểm thử cục bộ trên máy tính/điện thoại và đóng gói bộ template bàn giao trước khi xuất bản lên mạng công khai.

## User Scenarios & Testing — Hai hành trình và cách nghiệm thu

### US1 — Khách studio đi từ dự án đến yêu cầu tư vấn (ưu tiên P1)

Trang chủ hoặc Bộ sưu tập / Dự án → Chi tiết dự án → hiểu nhu cầu, giải pháp và kết quả → đúng gói tại Dịch vụ & Bảng giá → đọc đầu ra, phí, phát sinh → Đặt lịch có sẵn gói và cho phép đổi → gửi yêu cầu → xác nhận đã gửi.

**Lý do ưu tiên:** Tạo cơ hội kinh doanh từ công trình, không dừng ở việc xem ảnh.

**Kiểm tra riêng:** Dùng một dự án và một gói có đủ nội dung, đi hết kịch bản A mà không cần chỉnh thương hiệu hoặc thêm dự án.

**Kịch bản A — Đi hết hành trình:**

1. Cho một dự án có nhu cầu và gói liên quan đã xác định; khi mở Chi tiết dự án, khách thấy nhu cầu, quyết định thiết kế, kết quả và lý do gói đó phù hợp. Không khẳng định số liệu chưa có bằng chứng.
2. Khi bấm xem dịch vụ liên quan, khách đến đúng gói tại Dịch vụ & Bảng giá, không phải đoán lại trong danh sách.
3. Trước khi đặt lịch, khách đọc được đầu ra, giới hạn, giá và đơn vị tính, điều kiện áp dụng, phần bao gồm và phát sinh. Mỗi gói cho biết số tiền hoặc khoảng phí khách có thể dự trù. Nếu cần khảo sát riêng, ghi điều kiện khiến giá thay đổi. Ví dụ tính theo m² áp dụng cả mức phí tối thiểu.
4. Khi bấm đặt lịch tại gói, biểu mẫu hiển thị sẵn đúng tên gói. Khách đổi được sang một trong hai gói còn lại và thấy thông tin phí tương ứng.
5. Khi gửi đủ thông tin hợp lệ và yêu cầu được tiếp nhận thực tế, khách thấy thông báo đã nhận, gói cuối cùng đã chọn và bước tiếp theo. Khi kiểm thử sau này, dữ liệu tại nơi nhận phải khớp thông báo.
6. Xác nhận gửi yêu cầu không đồng nghĩa cuộc hẹn đã được studio duyệt. Không hứa giờ phản hồi hay giữ lịch nếu chưa có quy trình.

**Tình huống bổ sung:** Vào Đặt lịch trực tiếp phải thấy “Chọn gói”, không tự gán gói bất kỳ. Thiếu trường bắt buộc thì báo tại trường, giữ phần đã nhập. Gửi lỗi không được báo thành công; cho thử lại. Đổi gói thì dữ liệu gửi và xác nhận theo lựa chọn mới.

### US2 — Người mua tự thay nội dung template (ưu tiên P1)

Đọc hướng dẫn → tìm nơi sửa thương hiệu, logo, ảnh, giá, liên hệ, dự án → cập nhật → xem trước → kiểm tra mọi vị trí liên quan. Không phải tìm từng đoạn chữ rải rác để sửa cùng một giá hoặc số điện thoại.

**Lý do ưu tiên:** Khả năng tự thay nội dung là điều kiện của sản phẩm template.

**Kiểm tra riêng:** Dùng dữ liệu mẫu và một bộ thay thế để thử chỉnh nội dung, không cần gửi yêu cầu tư vấn thật.

**Kịch bản B — Sửa giá, đổi liên hệ, thêm dự án:**

1. Ghi giá và đơn vị hiện tại của một gói; đổi sang bộ giá thử có nhãn “dữ liệu kiểm thử”. Kiểm tra B05, tóm tắt tại B01, phần liên quan B04 và thông tin gói B06 nếu có hiển thị giá. Nơi chỉ dẫn liên kết không cần lặp giá; mọi nơi có giá phải khớp nguồn đã sửa.
2. Đổi điện thoại, email, địa chỉ và liên kết liên hệ mẫu. Kiểm tra B07, đầu/chân trang, nút gọi/email và thông báo đặt lịch nếu nhắc liên hệ. Cả chữ và đích bấm phải đổi, không còn liên hệ cũ.
3. Thêm dự án có mã riêng, tên, diện tích, ảnh bìa, nhu cầu, giải pháp, kết quả, “Chi tiết đáng nhìn” và gói liên quan. Dự án xuất hiện tại B03, mở đúng B04; chỉ xuất hiện B01 khi chọn làm nổi bật.
4. Từ dự án mới, đến đúng gói rồi Đặt lịch; biểu mẫu chọn đúng gói. Dự án cũ vẫn hoạt động.
5. Đổi tên thương hiệu, logo và một ảnh; kiểm tra đủ 9 bố cục và mô tả thay thế của ảnh. Người mua làm được bằng hướng dẫn, không cần người tạo sửa hộ.
6. Khôi phục dữ liệu thử trước bàn giao, ghi nơi đã sửa và kết quả trong tasks.md.

### Trường hợp cần xử lý

| Tình huống | Kết quả cần có khi triển khai |
| --- | --- |
| Giá chưa duyệt | Bản template ghi rõ “Giá minh họa”. Studio bán dịch vụ thay giá và kiểm tra cách tính, thuế và phát sinh trước khi bật nhận khách. |
| Liên kết mang mã gói không còn tồn tại | Báo cần chọn lại, không âm thầm gán gói khác. |
| Thiếu ảnh hoặc quyền dùng ảnh | Ghi thiếu khi chuẩn bị; trước bàn giao phải có ảnh hợp lệ và mô tả ảnh. Không coi ảnh mô phỏng là công trình thật. |
| Chưa có kết quả đo được | Kể quyết định và quan sát có căn cứ; không bịa phần trăm tiết kiệm hoặc lời chứng thực. |
| Chưa có nội dung hoặc liên kết sai | Có hướng về danh sách, Liên hệ hoặc Đặt lịch trong bố cục hiện có. |
| Lỗi mạng hoặc bấm gửi nhiều lần | Giữ dữ liệu hợp lý, báo rõ, hạn chế gửi trùng; không báo đã nhận nếu chưa nhận. |
| Tên, giá hoặc nội dung dài sau khi thay | Chữ, đơn vị và nút vẫn đọc/bấm được trên điện thoại. |

## Requirements — Yêu cầu

### Điều hướng đã chốt (Khóa Menu 5 mục gốc & Footer mới — đồng bộ 9/9 trang)

Thanh Header máy tính gồm đúng **5 mục theo thứ tự**: **Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ**.
- **“Giới thiệu ▾”** xổ xuống đúng **3 mục**: **Bộ sưu tập** (`B03`), **Chi tiết dự án** (`B04`), **Dịch vụ và bảng giá** (`B05`).
- Trên điện thoại, Header hiển thị **Nếp Studio** và **Menu**; chạm `Menu` mở danh sách theo đúng thứ tự trên; chạm `Giới thiệu ▾` để mở/thu ba mục con.
- **Footer mới (9/9 trang):** Máy tính trái có `Nếp Studio` và `Về Nếp Studio` (`B02`), phải có `Dịch vụ và bảng giá` (`B05`) và `Liên hệ` (`B07`), dưới cùng dòng nhỏ `Dự án minh họa · Giá minh họa`. Điện thoại xếp thành 1 cột, mỗi liên kết 1 dòng rồi tới dòng ghi chú.

Dự án tiêu biểu, phương án thay thế khi chưa chọn hoặc khi danh sách trống, cùng thao tác bàn phím được mô tả chi tiết tại [design-system/MASTER.md](../../design-system/MASTER.md), [bản nội dung](Nep-Studio.md) và [phiếu thiết kế](DESIGN-PLAN.md).

### Vai trò của đúng 9 bố cục

Mã B01–B09 dùng trong checklist. Một bố cục chi tiết dùng lại cho nhiều dự án/bài viết, không tính thêm bố cục.

| Mã | Bố cục | Nhiệm vụ, hình ảnh và bố cục không gian tối thiểu | Hành động tiếp theo |
| --- | --- | --- | --- |
| B01 | Trang chủ | Hero 2 cột (Mobile đưa ảnh Hero lên trước tiêu đề + nút gọn); mục “Chi tiết đáng nhìn” ghép **Sơ đồ mặt bằng 2D + ảnh cận cảnh kệ sách**; 3 cột dịch vụ hiển thị **giá khởi điểm minh bạch**; mục “Về Nếp” có **Quy trình 3 bước** + ảnh góc bếp. | Xem dự án, xem gói, đặt lịch. |
| B02 | Giới thiệu (`Về Nếp`) | Mở từ Footer `Về Nếp Studio`. **Ảnh góc bàn làm việc có bản vẽ & mẫu vật liệu**, triết lý studio, quy trình 3 bước (*Kể về sinh hoạt → Xem phương án → Chốt hồ sơ*), khu vực phục vụ mẫu. | Xem công trình hoặc dịch vụ. |
| B03 | Bộ sưu tập | Mở từ `Giới thiệu ▾ → Bộ sưu tập`. **Chỉ có 1 dự án duy nhất `Căn hộ Hiên Nắng 62 m²`** (ảnh bìa, tên, diện tích, nhãn gói *Thiết kế nội thất*, không tự thêm dự án `32 m²`). | Mở đúng chi tiết. |
| B04 | Chi tiết dự án | Thanh thông số 4 cột (`62 m²` · `Khách-Bếp-Ăn` · `Thiết kế nội thất` · `15.500.000 đ`); ảnh tổng thể; lưới 2 cột đối chiếu **Bản vẽ Mặt bằng 2D (Trước & Sau)** và **Ảnh góc bếp mở & hành lang vòm**; mục “Chi tiết đáng nhìn” (cận cảnh băng ghế); hộp CTA kèm giá. | Đến đúng gói/giá và đặt lịch. |
| B05 | Dịch vụ & Bảng giá | **Không đặt ảnh Banner lớn đầu trang**, không dùng 3 thẻ SaaS hay ô nhập `m²`. Trình bày dạng **Tờ Hồ Sơ Báo Giá Kiến Trúc** gồm 3 hàng ngang ngăn cách bởi đường kẻ `1px solid #D6D1C6`, kèm ví dụ `62 m²` (`15.500.000 đ`) & `32 m²` (`9.000.000 đ`) và 3 câu hỏi nhanh (Mini FAQ). | Đặt lịch tại từng gói. |
| B06 | Đặt lịch | **Không đặt ảnh Banner lớn đầu trang.** Trên Mobile, thu gọn thông tin gói thành **Thanh Accordion Tóm Tắt (`[Xem chi tiết ▾]`)** để các ô nhập liệu hiện ngay đầu màn hình. Trên Desktop, cột trái dùng Moodboard bản vẽ + mẫu vật liệu và quy trình 3 bước sau gửi; cột phải có thêm ô `Diện tích ước tính (m²)`. Khung xác nhận sau gửi (State 2) tách biệt rõ. | Gửi và thấy xác nhận. |
| B07 | Liên hệ | **Ảnh cận cảnh góc cửa sổ**, tiêu đề *"Trao đổi với Nếp"*. **Ẩn hoàn toàn SĐT/email/địa chỉ** trong bản mẫu (chỉ hiện khi chủ studio điền) và **không lặp lại form đặt lịch**. | Sang Đặt lịch (`B06`). |
| B08 | Blog / Tin tức có FAQ về nội thất | Danh sách bài mở đầu bằng **ảnh chiếc ghế kéo ra khỏi bàn ăn** và chuyên mục **Hỏi Nếp (5 câu FAQ nội thất)** trong cùng bố cục, giải đáp trước khi mua dịch vụ. | Mở bài, xem gói hoặc đặt lịch. |
| B09 | Chi tiết bài viết | Tiêu đề, **ảnh chiếc ghế kéo ra khỏi bàn ăn**, nội dung hướng dẫn kèm sơ đồ khoảng lùi kéo ghế, liên kết về góc bàn ăn Hiên Nắng (`B04`) và gói tư vấn mặt bằng (`B05`). | Về Blog / Tin tức, xem gói hoặc đặt lịch. |

FAQ không có trang riêng. Xác nhận gửi nằm trong B06. Hướng dẫn người mua là tài liệu bàn giao, không phải trang công khai thứ mười.

### Functional Requirements — Yêu cầu có thể kiểm tra

- **FR-001:** Có đúng 9 bố cục; đủ năm mục chính theo thứ tự đã chốt, “Giới thiệu” xổ đúng ba mục, B02/B09 và các trang còn lại đều có đường vào; FAQ nằm trong B08.
- **FR-002:** Mỗi dự án có nhu cầu, giải pháp và kết quả có căn cứ. “Chi tiết đáng nhìn” dùng ảnh và lời kể ngắn giải thích một quyết định thiết kế.
- **FR-003:** Dự án liên kết gói bằng mã ổn định, có lý do phù hợp. Nhiều gói thì phân biệt vai trò; không tự khẳng định studio đã cung cấp dịch vụ chưa xác nhận.
- **FR-004:** B05 có đủ ba gói trong bảng dưới; chi tiết đầu ra và giá chưa tự suy ra từ tên gói.
- **FR-005:** Mỗi gói có khách phù hợp, đầu ra, giới hạn, phần không bao gồm, số vòng sửa/phạm vi nếu áp dụng, giá/căn cứ báo giá, tiền tệ, đơn vị và điều kiện. Làm rõ thuế, phí tối thiểu, phát sinh nếu áp dụng; khoản không áp dụng phải xác nhận rồi ghi rõ.
- **FR-006:** Nút đặt lịch tại gói và nơi đã xác định gói mang đúng lựa chọn đến B06; khách đổi được. Gói hiển thị, gói gửi và gói xác nhận trùng nhau.
- **FR-007:** B06 kiểm tra dữ liệu và có trạng thái gửi theo US1. Chỉ báo thành công sau tiếp nhận thực tế; cách tiếp nhận chưa chọn.
- **FR-008:** Người mua có nơi sửa rõ ràng và hướng dẫn cho tên, logo, ảnh, giá, liên hệ, gói, dự án, bài và FAQ. Một thay đổi giá/liên hệ cập nhật mọi nơi sử dụng; thêm dự án không phải sửa cấu trúc bố cục.
- **FR-009:** Phân biệt nội dung nháp, mô phỏng, dữ liệu thử và nội dung thật. Không công khai giá thử hoặc công trình chưa xác thực như thông tin thật.
- **FR-010:** Tiêu chí máy tính/điện thoại SC-004–SC-006 áp dụng cho đủ 9 bố cục, cả sau khi thay nội dung.
- **FR-011:** FAQ về quy trình/phí phải khớp B05, có liên kết dịch vụ phù hợp khi cần.
- **FR-012:** Biểu mẫu chỉ thu thông tin cần thiết, giải thích dùng để liên hệ tư vấn, không công khai dữ liệu khách. Trường thông tin bản mẫu theo O05; chưa suy diễn yêu cầu pháp lý.

### Ba gói dịch vụ

[Bảng ba gói, phạm vi, phát sinh và hai ví dụ tính tiền](Nep-Studio.md) là nguồn nội dung cho bản mẫu. G01 là Tư vấn bố trí mặt bằng, G02 là Thiết kế nội thất, G03 là Đồng hành thi công. Mỗi nơi tham chiếu giá, kể cả biểu mẫu, lấy từ cùng một gói. Giá được ghi rõ là giá minh họa. Mức thu thực tế, thuế, khu vực phục vụ và điều kiện phát sinh do studio mua template xác nhận khi vận hành.

### Key Entities — Nội dung người mua quản lý

| Nhóm | Thông tin | Nơi sử dụng |
| --- | --- | --- |
| Thương hiệu | Tên, logo, mô tả, màu/chữ sau khi chốt | Đầu/chân trang, B01, B02, mọi chỗ nhắc thương hiệu |
| Liên hệ | Điện thoại, email, địa chỉ/phạm vi, kênh, giờ tiếp nhận nếu có | B07, đầu/chân trang, B06 nếu nhắc liên hệ |
| Gói | Mã G01–G03, tên, đầu ra, giới hạn, phí, điều kiện, phát sinh | B05 và nơi tham chiếu/tóm tắt ở B01, B04, B06, B08, B09 |
| Dự án | Mã riêng, tên, loại, diện tích, ảnh, nhu cầu, giải pháp, kết quả, chi tiết, gói, trạng thái nổi bật | B03, B04; B01 khi chọn nổi bật |
| Bài và FAQ | Tiêu đề/câu hỏi, nội dung, ảnh, gói liên quan nếu có | B08, B09; FAQ chỉ B08 |
| Yêu cầu tư vấn | Họ tên, cách liên hệ, gói cuối cùng, trường bổ sung sau khi chốt | B06 và đích nhận được chọn sau |

Đây là cấu trúc nội dung. Mẫu dữ liệu, ví dụ, nội dung trang và hướng dẫn người mua nằm trong [bản nội dung](Nep-Studio.md).

## Success Criteria — Tiêu chí nghiệm thu tương lai

- **SC-001:** 9/9 bố cục có nội dung và đường vào. Mở/thu “Giới thiệu” bằng chuột, chạm và bàn phím, đếm đúng ba mục con, thử mở B02 từ chân trang và B09 từ Blog; FAQ tại B08. Dùng lại bố cục chi tiết không tăng số bố cục.
- **SC-002:** Kịch bản A không có liên kết sai; thử cả G01, G02, G03, đổi gói và vào B06 trực tiếp. Mọi lần gửi thử thành công có gói tại nơi nhận khớp xác nhận.
- **SC-003:** Kịch bản B đổi thành công một giá kèm đơn vị, toàn bộ liên hệ, tên/logo/ảnh, thêm một dự án; không còn giá/liên hệ cũ ở nơi hiển thị. Người mua tự làm theo hướng dẫn.
- **SC-004:** Ở chiều rộng 360, 390, 430 điểm ảnh, chế độ dọc, đủ 9 bố cục không tràn ngang; chữ nội dung mục tiêu tối thiểu 16 điểm ảnh. Giá và đơn vị cùng thấy trong thẻ gói, không cần rê chuột/cuộn ngang. Điều kiện và phát sinh đọc được trước khi gửi yêu cầu.
- **SC-005:** Trên điện thoại, nút đặt lịch và phần tương tác có vùng bấm tối thiểu 44 × 44 điểm ảnh, không bị phần cố định/bàn phím che; menu mở/đóng được, lỗi và xác nhận đọc được. Thử ít nhất một điện thoại thật ngoài kích thước mô phỏng.
- **SC-006:** Ở máy tính rộng 1280 và 1440 điểm ảnh, đủ 9 bố cục không đè chữ, cắt giá/đơn vị hoặc sai liên kết. Dùng bàn phím đi qua menu, gói, biểu mẫu và gửi được, thấy vị trí đang chọn. Phóng chữ 200% vẫn đọc/thao tác được. Chữ thường tương phản tối thiểu 4,5:1, chữ lớn 3:1.
- **SC-007:** Trước bàn giao, 3/3 gói đáp ứng FR-005 và được người dùng duyệt; nội dung công khai không còn “CHƯA CHỐT”, dữ liệu thử, ảnh thiếu quyền hay lời hứa chưa xác minh.

Kích thước và tiêu chí thao tác trên là tiêu chí nghiệm thu đề xuất để kiểm tra được cụ thể, chưa phải số đo của website hiện có.

## Assumptions — Giả định và phụ thuộc

- Tiếng Việt là ngôn ngữ chính. Dự kiến phí thể hiện bằng VND, dùng giá VND minh họa ở bản mẫu. Giá bán thật theo O04.
- Đặt lịch hiện là gửi yêu cầu tư vấn; chưa yêu cầu thanh toán, tài khoản, lịch trống thời gian thực hoặc tự chấp nhận cuộc hẹn.
- Có thể chuẩn bị bản nháp có nhãn khi chờ quyết định. Công khai và nghiệm thu cuối phải chờ quyết định liên quan.
- Cần xác nhận nội dung công trình, quyền ảnh, dịch vụ/giá, liên hệ, cách nhận yêu cầu. Không coi mô phỏng là công trình thật.
- Hướng thị giác đã được khóa thành hệ token Architectural Monograph hoàn chỉnh tại [design-system/MASTER.md](../../design-system/MASTER.md) (`#F3F0E8`, `#EAE6DC`, `#1A1B18`, `#5C5E58`, `#3E4A36`, `#D6D1C6`, font `Newsreader` + `Be Vietnam Pro`, `border-radius: 0px`).

## Các quyết định của bản mẫu và phần cần studio thật cung cấp

| Mã | Quyết định cho template | Phần còn mở khi bán hoặc vận hành |
|---|---|---|
| O01 | Tập trung vào người sống trong căn hộ muốn dùng phòng sinh hoạt chung linh hoạt hơn. | Ngách riêng 25–45 m² là lựa chọn khi đổi thương hiệu. |
| O02 | Dùng 3 căn hộ minh họa hoàn chỉnh trong Bộ sưu tập: **Hiên Nắng 62 m²** (`featured: true`, gói G02), **Góc Sáng 32 m²** (gói G02 áp phí tối thiểu 9.000.000 đ) và **Bếp Lành 48 m²** (gói G01 Tư vấn mặt bằng 1.500.000 đ), mỗi căn có trang chi tiết & bản vẽ 2D riêng. | Studio thay bằng công trình thật và ảnh có quyền phân phối khi vận hành thương mại. |
| O03 | Ba gói, phạm vi bàn giao, số buổi/vòng sửa và các việc tính thêm có trong bản nội dung. | Chủ studio xác nhận phạm vi thật khi thay mẫu. |
| O04 | G01 theo căn, G02 theo m² có mức tối thiểu, G03 theo buổi. Có tiền minh họa và phép tính ở B05. | Giá thu thực tế, thuế và khu vực phục vụ. |
| O05 | Tên, một cách liên hệ và gói là bắt buộc. Khung giờ và lời nhắn tùy chọn. Người phụ trách của studio nhận và liên hệ lại. | Địa chỉ nhận thật và việc gửi thử khi có website. |
| O06 | Chuẩn **Architectural Monograph**: Giấy vôi ấm (`#F3F0E8`), đá vôi nhạt (`#EAE6DC`), mực than (`#1A1B18`), chữ phụ (`#5C5E58`), xanh rêu khói (`#3E4A36`), đường kẻ mảnh (`#D6D1C6`), font `Newsreader` + `Be Vietnam Pro` (`tabular-nums`), `border-radius: 0px`, 0 card soup, 0 icon trang trí. Menu khóa cứng 5 mục (`Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ`, `Giới thiệu ▾` xổ đúng 3 mục) và Footer mới đồng bộ 9/9 trang theo [design-system/MASTER.md](../../design-system/MASTER.md). | Kiểm tra giao diện khi dựng web thực tế. |
| O07 | Đã nâng cấp bộ 4 bản phác UX/UI Pro Max: [01 Trang chủ](../../../generated_images/upgraded-01-trang-chu.jpg), [02 Chi tiết dự án](../../../generated_images/upgraded-02-chi-tiet-du-an.jpg), [03 Dịch vụ & Bảng giá](../../../generated_images/upgraded-03-dich-vu-bang-gia.jpg), [04 Đặt lịch](../../../generated_images/upgraded-04-dat-lich.jpg). Đã bổ sung sơ đồ mặt bằng 2D, đa góc nhìn (góc bếp, vòm hành lang, kệ sách) và hình minh họa đầu ra từng gói để xóa lỗi lặp 1 ảnh qua 4 trang. | Cần bộ ảnh rời có quyền phân phối, thông tin và địa chỉ liên hệ thật khi studio vận hành thương mại. |
| O08 | **Đã chốt `T023` (2026-11-21):**<br>• **Nền tảng & kiến trúc:** `HTML5 + CSS3 (CSS Variables, CSS Motion) + Vanilla JavaScript` (static thuần, không framework nặng).<br>• **Cách chỉnh nội dung (`US2`):** `1 file dữ liệu trung tâm (data/site-data.json)` — sửa 1 nơi tự cập nhật cả 9 trang (`B01`–`B09`), khớp SOP Skillry.<br>• **Tiếp nhận đặt lịch (`B06`):** Cổng Form không cần backend (`Formspree` / `Web3Forms`) gửi về Email chủ studio + mặc định có **chế độ Demo an toàn** cho bản mẫu (cấu hình trong `data/site-data.json`, chỉ báo thành công thật khi nhận phản hồi HTTP 2xx).<br>• **Xuất bản (Hosting):** Chưa đưa lên mạng công khai vội — kiểm thử cục bộ và đóng gói bộ template bàn giao trước (sẵn sàng triển khai lên Cloudflare Pages / Netlify / Vercel khi cần). | Chủ studio điền endpoint Formspree/Web3Forms thật, thay ảnh/giá/liên hệ thật và chọn nơi xuất bản công khai khi vận hành thương mại. |

## Dấu vết thiết lập và giới hạn bàn giao

Trước khi tạo, thư mục làm việc chưa có `nep-studio-template` hoặc cấu hình Spec Kit để dùng lại. Máy có `specify 1.4.3` và Codex CLI. Đã khởi tạo bằng `specify init nep-studio-template --integration codex --script sh --non-interactive`; cấu hình tại `.specify/integration.json`. Không cài lại CLI. Đã đọc mẫu đặc tả qua bộ giải mẫu Spec Kit, đăng ký đường dẫn trong `.specify/feature.json`.

Theo tiến độ hiện tại, `T023` đã được người dùng chốt đầy đủ tại `O08` (`HTML5 + CSS3 + Vanilla JS`, `data/site-data.json`, cổng Formspree/Web3Forms + chế độ Demo an toàn, kiểm thử cục bộ & đóng gói bàn giao). Bước tiếp theo là `T024` lập `plan.md` và gắn đường dẫn triển khai trực tiếp vào `tasks.md` (không tạo checklist tổng thứ hai). Mọi kiểm thử website `SC-001`–`SC-007` sẽ thực hiện sau khi dựng giao diện ở `T025`–`T043`.
