# Nếp Studio · Nội dung & Bố cục Website Mẫu (Bản nâng cấp UX/UI Pro Max)

**Bản dành cho người làm template.** Căn hộ mở đầu là **Hiên Nắng 62 m²**. Một người xem có thể nhìn thấy băng ghế bên cửa sổ, đối chiếu **sơ đồ mặt bằng 2D Trước & Sau** cùng các góc nhìn thực tế để hiểu vì sao studio đặt bàn ăn ở đó, tự tính nhẩm chi phí thiết kế cho diện tích căn hộ của mình ngay ở đầu trang bảng giá rồi gửi yêu cầu tư vấn. Tài liệu này kết hợp cùng [Phiếu Thiết Kế UX/UI Pro Max](DESIGN-PLAN.md).

---

## 1. Kiến trúc Menu Điều hướng (Khóa cứng Menu 5 mục gốc — đồng bộ 9/9 trang)

**Trang chủ ｜ Giới thiệu ▾ ｜ Đặt lịch ｜ Blog ｜ Liên hệ**

| Mục trên thanh Header | Đích đến & Hành vi tương tác |
|---|---|
| **Trang chủ** (`B01`) | Mở trang chủ. Logo chữ **Nếp Studio** ở góc trái cũng dẫn về đây. |
| **Giới thiệu ▾** (`B03`, `B04`, `B05`) | Xổ xuống đúng **3 mục** theo thứ tự:<br>1. **Bộ sưu tập** (`B03` — Danh sách công trình; bản mẫu hiện có 1 dự án `Căn hộ Hiên Nắng 62 m²`).<br>2. **Chi tiết dự án** (`B04` — Mở thẳng dự án đang được chọn làm tiêu biểu: `Hiên Nắng 62 m²`).<br>3. **Dịch vụ và bảng giá** (`B05` — So sánh 3 gói dịch vụ và thanh tính nhẩm chi phí theo `m²`). |
| **Đặt lịch** (`B06`) | Mở biểu mẫu đặt lịch ở trạng thái `"Chọn gói"` (hoặc giữ gói chọn sẵn nếu đi từ `B04`/`B05`). |
| **Blog** (`B08`) | Mở danh sách bài viết *"Chuyện bố trí nhà"* và mục hỏi đáp nội thất **Hỏi Nếp** (FAQ). Từ đây mở từng bài (`B09`). |
| **Liên hệ** (`B07`) | Mở trang trao đổi với Nếp (ảnh cận cảnh góc cửa sổ, ẩn hoàn toàn SĐT/email/địa chỉ trong bản mẫu và không lặp lại form đặt lịch; chỉ có nút dẫn sang `Đặt lịch` `B06`). |

**Tương tác trên Điện thoại & Bàn phím:**
- Trên điện thoại, thanh Header hiển thị `Nếp Studio` bên trái và `Menu` bên phải. Chạm `Menu` mở danh sách theo đúng thứ tự 5 mục trên; chạm `Giới thiệu ▾` để mở/thu đúng 3 mục con. Vùng chạm tối thiểu `44 × 44px`.
- Trên máy tính, menu `Giới thiệu ▾` dùng nút semantic (`<button aria-expanded>`), mở/đóng được bằng cả chuột lẫn bàn phím (`Enter`/`Space` để mở, `Escape` để đóng và trả tiêu điểm về nút).
- Khi chưa chọn dự án tiêu biểu, `Chi tiết dự án` mở dự án xuất bản gần nhất; khi danh sách trống, mở `Bộ sưu tập` với thông báo *"Các dự án đang được cập nhật"*.

---

## 2. Chân trang dùng chung (Footer mới — đồng bộ 9/9 trang)

Cuối cả 9 bố cục (`B01`–`B09`), dùng nền giấy vôi ấm `#F3F0E8` (`--bg-paper`) ngăn cách bằng đường kẻ mảnh `1px solid #D6D1C6`:
- **Trên máy tính:**
  - Bên trái: `Nếp Studio` và liên kết `Về Nếp Studio` (`B02`).
  - Bên phải: liên kết `Dịch vụ và bảng giá` (`B05`) và `Liên hệ` (`B07`).
  - Dưới cùng: dòng chữ nhỏ `Dự án minh họa · Giá minh họa`.
- **Trên điện thoại:** Xếp thành **1 cột**, mỗi liên kết nằm trên 1 dòng riêng (vùng chạm `≥ 44px`), cuối cùng là dòng ghi chú `Dự án minh họa · Giá minh họa`.

---

## 3. Chiến lược Hình ảnh & Bố cục Không gian (Xóa bỏ lỗi lặp 1 ảnh ở cả 4 trang)

Bản phác cũ dùng cùng một bức ảnh *bàn ăn + băng ghế cửa sổ* làm ảnh lớn đầu trang cho cả 4 màn hình (`01`, `02`, `03`, `04`). Bản nâng cấp quy định rõ **vai trò hình ảnh và không gian màn hình đầu tiên (Above the fold)** cho từng trang:

### 3.1. Căn hộ mở đầu: Hiên Nắng 62 m² (Bộ tư liệu đa góc + Mặt bằng 2D)
- **Khách mục tiêu của bản mẫu:** Gia chủ sống trong căn hộ tại Việt Nam, muốn bố trí lại phòng sinh hoạt chung để vừa dùng thoải mái hằng ngày cho 2 người, vừa đủ chỗ khi bạn bè đến ăn tối.
- **Bộ 4 tư liệu thị giác chuẩn của dự án `Hiên Nắng 62 m²`:**
  1. **Ảnh 1 (Hero tổng thể):** Góc nhìn chính diện băng ghế dài chạy dọc cửa sổ ngập nắng, đệm xanh ô liu, bàn ăn gỗ sồi và 2 ghế rời.
  2. **Bản vẽ 2 (Sơ đồ Mặt bằng 2D Trước & Sau):** Bản vẽ nét kiến trúc (Architectural Line Floorplan) đặt cạnh lời kể, chỉ rõ chuyển động kéo bàn ăn về phía băng ghế cửa sổ để tăng từ 2 chỗ đọc sách thành 5–6 chỗ ngồi ăn tối.
  3. **Ảnh 3 (Góc nhìn đối diện — Khu bếp mở & Hành lang vòm):** Góc nhìn từ bàn ăn hướng về hệ tủ bếp gỗ sồi phẳng và vòm cửa dẫn vào phòng ngủ sáng thoáng.
  4. **Ảnh 4 (Cận cảnh Chi tiết đáng nhìn):** Khớp nối giữa đầu băng ghế cửa sổ, đệm tựa vải lanh và kệ sách âm tường.

### 3.2. Tối ưu Bố cục Không gian trên 4 màn hình trọng tâm

1. **Màn hình 01 / Trang chủ (`B01`):**
   - **Hero (Máy tính & Điện thoại):** Trên máy tính chia 2 cột bất đối xứng (40% chữ bên trái, 60% ảnh Hero bên phải). **Trên điện thoại**, đưa ảnh Hero căn hộ Hiên Nắng lên hiển thị ngay dưới thanh tiêu đề, theo sau là tên căn, thông số `62 m²` và cụm nút gọn gàng (`[Xem căn hộ]` + `Xem bảng giá →`), tránh việc để nút bấm trải ngang 100% thô cứng chắn trước ảnh.
   - **Chi tiết đáng nhìn:** Ghép **Sơ đồ mặt bằng 2D góc ăn** bên cạnh **Ảnh cận cảnh băng ghế & giá sách** để khách thấy ngay tư duy bố trí mặt bằng của kiến trúc sư.
   - **Dịch vụ của Nếp:** Hiển thị luôn **mức giá khởi điểm minh bạch** ngay dưới mỗi cột dịch vụ (`1.500.000 đ/căn` · `250.000 đ/m²` · `1.200.000 đ/buổi`).
   - **Về Nếp Studio:** Bổ sung **Quy trình 3 bước tinh gọn** (`01. Kể về sinh hoạt → 02. Xem phương án → 03. Chốt hồ sơ`) cạnh ảnh góc bếp và bình gốm.

2. **Màn hình 02 / Chi tiết dự án (`B04`):**
   - **Thanh thông số kiến trúc (4-Column Spec Bar):** Ngay dưới tiêu đề `Hiên Nắng`, hiển thị thanh thông số 4 ô đóng khung mảnh:
     `Diện tích: 62 m²` ｜ `Không gian: Khách · Bếp · Ăn` ｜ `Gói thực hiện: Thiết kế nội thất` ｜ `Chi phí thiết kế: 15.500.000 đ`.
   - **Đa dạng hóa thị giác:** Sau ảnh tổng thể và câu chuyện mở đầu (*"Một góc nhà cho ngày thường và những bữa có khách"*), chia **lưới 2 cột đối chiếu**:
     - Cột trái: **Sơ đồ Mặt bằng 2D (Trước & Sau khi xoay bàn ăn)**.
     - Cột phải: **Ảnh góc bếp gỗ sồi & vòm hành lang nhìn vào phòng ngủ**.
   - **Cuối trang:** Hộp CTA màu xanh nhạt (*"Bạn cũng muốn bố trí lại góc ăn và cần bản vẽ để làm đồ?"*) với nút dẫn sang gói `Thiết kế nội thất` (`G02`) và `Tư vấn bố trí mặt bằng` (`G01`). *(Không tự thêm liên kết dự án `32 m²` vì Bộ sưu tập bản mẫu chỉ có 1 dự án `Hiên Nắng 62 m²`).*

3. **Màn hình 03 / Dịch vụ và bảng giá (`B05`):**
   - **LOẠI BỎ ảnh Banner lớn ở đầu trang.** Không dùng 3 thẻ SaaS hay ô nhập `<input m²>`.
   - Trình bày dạng **Tờ Hồ Sơ Báo Giá Kiến Trúc** gồm 3 hàng ngang phân tách bởi đường kẻ `1px solid #D6D1C6` (hiển thị sẵn ví dụ tính cho `Hiên Nắng 62 m²: 15.500.000 đ` và `Căn 32 m²: áp mức tối thiểu 9.000.000 đ`).
   - **Hỏi nhanh về chi phí (Mini FAQ):** Đặt 3 câu hỏi thường gặp dạng đóng/mở ngay dưới bảng giá để giải đáp tức thì trước khi khách bấm chọn gói.

4. **Màn hình 04 / Đặt lịch (`B06`):**
   - **LOẠI BỎ ảnh Banner lớn ở đầu trang.** Đi thẳng vào thanh ngữ cảnh `Hiên Nắng → Thiết kế nội thất → Đặt lịch` và câu hỏi mở đầu *"Bạn muốn trao đổi về căn hộ nào?"*.
   - **Đột phá UX trên Điện thoại:** Thay vì đặt toàn bộ hộp *"Gói dịch vụ đang chọn"* dài chắn hết màn hình đầu tiên, thu gọn thành **Thanh Accordion Tóm Tắt (`Compact Summary Bar`)**:
     `Gói đang chọn: Thiết kế nội thất · 250.000 đ/m² [Xem chi tiết ▾]`
     Nhờ đó, khách mở trang Đặt lịch trên điện thoại sẽ nhìn thấy ngay các ô nhập `Gói quan tâm`, `Diện tích ước tính (m²)`, `Tên của bạn` và `Số điện thoại` mà không phải cuộn trang.
   - **Trên Máy tính:** Cột trái giữ thẻ tóm tắt gói cố định (Sticky) có kèm **hình Moodboard bản vẽ + mẫu gỗ/vải** (thay cho bức ảnh phòng ăn bị lặp) và **Quy trình 3 bước sau khi gửi**. Cột phải là biểu mẫu có thêm ô `Diện tích ước tính (m²)` nằm cạnh ô `Gói quan tâm` để tự động tính nhẩm phí tham khảo.
   - **Tách bạch Trạng thái sau khi gửi (State 2):** Đặt khung xác nhận (*"Studio đã nhận yêu cầu..."*) vào một hộp viền nét đứt ghi rõ **`Trạng thái thay thế sau khi bấm Gửi (Confirmation State)`** để không gây hiểu nhầm là phần tử hiển thị cố định dưới nút Gửi.

---

## 4. Ba gói dịch vụ khách có thể so sánh & tự tính phí

**Giá minh họa cho template.** Các con số dùng để khách hiểu rõ cách tính. Studio mua mẫu sẽ thay bằng giá thật, chính sách thuế, khu vực phục vụ và điều kiện của mình. Không cộng phí vật liệu hoặc tiền thi công vào giá thiết kế.

| Mã & Tên gói | Minh họa đầu ra | Khách nhận được | Giá minh họa | Khi phát sinh thêm |
|---|---|---|---|---|
| **G01 · Tư vấn bố trí mặt bằng** | Sơ đồ mặt bằng 2D có chú thích | Một buổi trực tuyến 60 phút cho căn hộ đến 70 m². Khách gửi mặt bằng có kích thước và ảnh hiện trạng. Sau buổi, nhận 1 sơ đồ bố trí có chú thích và 1 lượt góp ý chỉnh sơ đồ. | **1.500.000 đ/căn**.<br>Căn 32 m² và 62 m² cùng mức phí trong phạm vi này. | Đo tại nhà, thêm phương án hoặc căn lớn hơn 70 m² được báo riêng để khách đồng ý trước. Phối cảnh và bản vẽ đóng đồ thuộc gói G02. |
| **G02 · Thiết kế nội thất** *(Gói tiêu biểu từ Hiên Nắng)* | Phối cảnh 3D + Bảng vật liệu + Bản vẽ đồ | Mặt bằng bố trí, phối cảnh các phòng trong phạm vi, bảng vật liệu và bản vẽ triển khai đồ nội thất đã thống nhất. Gồm 2 vòng chỉnh sửa tổng hợp. | **250.000 đ/m²**, tối thiểu **9.000.000 đ/căn**.<br>Tính trên diện tích thực sự thiết kế. | Đổi phạm vi sau duyệt, thêm vòng sửa hoặc khảo sát ngoài phạm vi được báo riêng. Khách duyệt phí trước khi làm. |
| **G03 · Đồng hành thi công** | Biên bản & ảnh đối chiếu hiện trạng | Một lần đến công trình (tối đa 2 giờ) trong khu vực studio công bố để đối chiếu 1 hạng mục với hồ sơ thiết kế. Sau buổi nhận ghi chú, ảnh và điểm cần trao đổi với nhà thầu. | **1.200.000 đ/buổi**.<br>Gói 2 buổi trong phạm vi: **2.400.000 đ**. | Thêm buổi tính theo đơn giá; đi xa hoặc kéo dài buổi được báo riêng trước khi đặt. Nhà thầu phụ trách thi công và bảo hành. |

**Ví dụ tính nhẩm trực quan ngay trên thẻ G02 và thanh tính thử:**
- **Căn hộ Hiên Nắng (62 m²):** `62 × 250.000 = 15.500.000 đ`
- **Căn hộ Studio nhỏ (32 m²):** `32 × 250.000 = 8.000.000 đ` $\rightarrow$ Áp dụng mức phí tối thiểu: **`9.000.000 đ`**

---

## 5. Bản phác chi tiết cho đủ 9 bố cục (`B01`–`B09`)

| Mã & Trang | Nội dung và thứ tự đọc trên Máy tính (`1280px–1440px`) | Trên Điện thoại (`360px–430px`) |
|---|---|---|
| **B01. Trang chủ** | Header 5 mục (`Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ`). Hero 2 cột: Cột trái giữ nhãn *"Dự án tiêu biểu · 62 m²"*, tiêu đề *"Căn hộ Hiên Nắng"*, mô tả ngắn, nút **Xem căn hộ** và link **Xem bảng giá →**; Cột phải là ảnh Hero băng ghế & bàn ăn. Bên dưới lần lượt là: **Chi tiết đáng nhìn** (Sơ đồ 2D + ảnh cận cảnh góc đọc), **Dịch vụ của Nếp** (3 cột kèm giá khởi điểm), **Về Nếp Studio & Quy trình 3 bước** (kèm ảnh góc bếp & bình gốm), Footer mới. | Header `Nếp Studio` + `Menu`. Ảnh Hero hiển thị ngay đầu trang → Tên căn & diện tích `62 m²` → Cụm nút gọn → Khối Chi tiết đáng nhìn (Sơ đồ 2D + Ảnh + Lời kể) → 3 thẻ dịch vụ có giá → Về Nếp & 3 bước → Footer 1 cột. |
| **B02. Giới thiệu (`Về Nếp`)** | Mở từ liên kết **Về Nếp Studio** ở Footer hoặc khối Về Nếp trên `B01`. Tiêu đề *"Một căn nhà bắt đầu từ cách bạn sống"* + **ảnh góc bàn làm việc có bản vẽ & mẫu vật liệu**. Đoạn mở về triết lý lắng nghe thói quen ăn ở, cất đồ, đọc sách. Tiếp đến là 3 bước: **01. Kể về sinh hoạt → 02. Xem phương án → 03. Chốt hồ sơ**, khu vực phục vụ mẫu và nút **Xem căn hộ Hiên Nắng**. | Ảnh góc bàn làm việc → Tiêu đề & triết lý → 3 bước theo chiều dọc → Nút dẫn sang dự án tiêu biểu hoặc bảng giá. |
| **B03. Bộ sưu tập dự án** | Mở từ `Giới thiệu ▾ → Bộ sưu tập`. Tiêu đề *"Những căn hộ và cách chúng được sử dụng"*. **Chỉ có 1 dự án duy nhất là `Căn hộ Hiên Nắng · 62 m²`** (*"Góc đọc bên cửa sổ trở thành chỗ ngồi cho bữa tối"*, gắn nhãn gói *Thiết kế nội thất*); không tự thêm dự án `32 m²`. | 1 thẻ dự án duy nhất. Tên, diện tích `62 m²`, gói áp dụng và mô tả nằm ngay dưới ảnh bìa, rõ ràng, không đè chữ lên ảnh. |
| **B04. Chi tiết dự án** | Mở từ thẻ dự án hoặc `Giới thiệu ▾ → Chi tiết dự án`. Tiêu đề **Hiên Nắng** + **Thanh thông số 4 cột** (`62 m²` · `Khách - Bếp - Ăn` · `Thiết kế nội thất` · `15.500.000 đ`). Ảnh tổng thể → Câu chuyện *"Một góc nhà cho ngày thường và những bữa có khách"* → **Lưới 2 cột: Sơ đồ Mặt bằng 2D (Trước/Sau) & Ảnh góc bếp/vòm hành lang** → Mục **Chi tiết đáng nhìn: Băng ghế bên cửa sổ** → Hộp CTA chuyển đổi (**Xem gói thiết kế nội thất** + **Xem tư vấn bố trí mặt bằng**). | Tiêu đề + Lưới thông số 2×2 → Ảnh tổng thể → Lời kể → Sơ đồ Mặt bằng 2D → Ảnh góc bếp → Chi tiết băng ghế → Hộp CTA. |
| **B05. Dịch vụ & Bảng giá** | Mở từ `Giới thiệu ▾ → Dịch vụ và bảng giá` hoặc Footer. **Không dùng ảnh Banner lớn đầu trang**, không dùng 3 thẻ SaaS hay ô nhập `m²`. Trình bày dạng **Tờ Hồ Sơ Báo Giá Kiến Trúc** gồm 3 hàng ngang phân tách bởi đường kẻ `1px solid #D6D1C6` (kèm ví dụ `62 m²` / `32 m²` và mục phát sinh). Bên dưới là **3 câu hỏi thường gặp (Mini FAQ)** và ghi chú thuế/vật liệu. | Tiêu đề → 3 hàng báo giá xếp dọc ngăn cách bởi đường kẻ `1px` (kèm ví dụ `62 m²` & `32 m²`) → 3 câu hỏi FAQ rút gọn. |
| **B06. Đặt lịch** | Mở từ mục `Đặt lịch` hoặc nút chọn gói. **Không dùng ảnh Banner lớn đầu trang.** Thanh ngữ cảnh `Hiên Nắng → Thiết kế nội thất → Đặt lịch` + Tiêu đề *"Bạn muốn trao đổi về căn hộ nào?"*. Cột trái (Sticky): Thẻ tóm tắt gói đang chọn kèm **Moodboard bản vẽ + mẫu vật liệu** và quy trình 3 bước sau gửi. Cột phải: Biểu mẫu có ô `Gói quan tâm *` cạnh `Diện tích ước tính (m²)`, `Tên của bạn *`, `Cách liên hệ *` (Điện thoại/Email), lời nhắn và khung giờ. Khung **Trạng thái xác nhận sau khi gửi (State 2)** tách biệt rõ. | **Thanh Accordion Tóm Tắt Gọn** ở đầu trang (`Đang chọn: Thiết kế nội thất · 250.000 đ/m² [Xem chi tiết ▾]`) → Hiển thị ngay các ô nhập liệu chính trong màn hình đầu tiên → Nút gửi `48px` cao dễ chạm. |
| **B07. Liên hệ** | Mở từ mục `Liên hệ` trên Header/Footer. Tiêu đề *"Trao đổi với Nếp"* + **ảnh cận cảnh góc cửa sổ**. **Ẩn hoàn toàn SĐT/email/địa chỉ** trong bản mẫu (chỉ hiện khi chủ studio điền vào nguồn dữ liệu dùng chung) và **không lặp lại form đặt lịch**; có nút chính dẫn sang **Gửi yêu cầu tư vấn** (`B06`). | Ảnh cận cảnh góc cửa sổ → Tiêu đề → Hướng dẫn liên hệ → Nút **`Gửi yêu cầu tư vấn →`** (`B06`, cao `48px`). |
| **B08. Blog & Hỏi Nếp (FAQ)** | Mở từ mục `Blog` trên Header. Tiêu đề *"Chuyện bố trí nhà"*. Danh sách bài viết mở đầu bằng bài *"Trước khi mua bàn ăn, hãy thử kéo ghế"* kèm **ảnh chiếc ghế kéo ra khỏi bàn ăn**. Ngay bên dưới là chuyên mục **Hỏi Nếp** gồm 5 câu FAQ mở/đóng tại chỗ kèm liên kết sang gói dịch vụ tương ứng. | Thẻ bài viết (ảnh chiếc ghế kéo ra khỏi bàn ăn) hiển thị trước, danh sách 5 câu hỏi Accordion **Hỏi Nếp** ngay bên dưới. |
| **B09. Chi tiết bài viết** | Mở từ bài viết trong `B08`. Tiêu đề bài viết → **ảnh chiếc ghế kéo ra khỏi bàn ăn** → Mở bài → 3 đoạn hướng dẫn thực hành kèm sơ đồ khoảng lùi kéo ghế → Hộp điều hướng cuối bài: **Xem góc bàn ăn Hiên Nắng** (`B04`) và **Xem gói tư vấn bố trí mặt bằng** (`B05`). | Bố cục 1 cột tối ưu đọc dài (cỡ chữ `16px–17px`, chiều dài dòng `< 75` ký tự), cuối bài có 2 nút dẫn rõ ràng. |

---

## 6. Biểu mẫu và lời nhắn cho khách (`B06 Đặt lịch`)

| Trường | Cách hiển thị |
|---|---|
| Gói quan tâm · bắt buộc | Đến từ một gói thì chọn sẵn tên gói. Đến từ menu thì hiện “Chọn gói”. Khách có thể đổi. Nếu liên kết cũ mang gói đã xóa, hiện “Gói này đã thay đổi. Bạn chọn lại một gói nhé.” |
| Tên của bạn · bắt buộc | Nhãn “Nếp có thể gọi bạn là gì?” |
| Cách liên hệ · bắt buộc | Chọn điện thoại hoặc email rồi nhập đúng một thông tin tương ứng. |
| Căn hộ và khung giờ · tùy chọn | “Bạn muốn thay đổi điều gì trong nhà?” và “Khi nào tiện để studio liên hệ?” |
| Nút gửi | **Gửi yêu cầu tư vấn**. Dòng bên cạnh: *"Gửi yêu cầu chưa phải xác nhận lịch hẹn."* và *"Studio sẽ dùng thông tin bạn gửi để trao đổi về yêu cầu này."* |

Thiếu liên hệ: “Bạn nhập số điện thoại hoặc email để studio phản hồi nhé.” Đang gửi: “Đang gửi yêu cầu…” Gửi lỗi: “Yêu cầu chưa gửi được. Thông tin vẫn còn ở đây, bạn có thể thử lại.” Sau khi nơi nhận đã tiếp nhận: “Studio đã nhận yêu cầu về [tên gói cuối cùng]. Studio sẽ liên hệ qua [kênh đã chọn] để thống nhất lịch với bạn.” Bản trình diễn tương lai chỉ dùng dữ liệu thử và phải ghi rõ khi mô phỏng thao tác gửi.

**Nơi nhận khi vận hành.** Chủ studio điền một hộp thư hoặc nơi quản lý yêu cầu do mình kiểm soát. Mỗi yêu cầu gồm tên, thông tin liên hệ, gói cuối, dự án nguồn nếu có và lời nhắn. Người nhận liên hệ để thống nhất giờ. Chỉ bật gửi thật sau khi đã kiểm tra nơi nhận thuộc về studio.

---

## 7. Bài đầu tiên trên Blog (`B08` & `B09`)

### Trước khi mua bàn ăn, hãy thử kéo ghế

Một chiếc bàn có thể vừa với khoảng sàn trống mà vẫn vướng lúc dùng. Điều đáng thử là chuyện xảy ra đúng giờ cơm: một người đang ngồi, người kia bê tô canh từ bếp ra, rồi cả hai cùng đứng dậy.

**Đánh dấu mặt bàn trên sàn.** Dùng băng giấy đánh dấu bốn góc theo kích thước bàn bạn đang cân nhắc. Lấy một chiếc ghế đang dùng, đặt vào đúng phía bạn định ngồi rồi kéo ra như khi rời bàn. Giữ ghế ở đó và đi thử từ bếp qua. Chính động tác kéo ghế mới cho thấy phần sàn bạn cần chừa.

**Thử một bữa thường và một bữa có khách.** Đặt hai bát lên bàn cho bữa thường. Sau đó nghĩ đến người thứ ba, thứ tư: họ lấy ghế từ đâu, ai cần đứng lên để nhường đường? Trong phương án Hiên Nắng, băng ghế ở sẵn bên cửa sổ. Khi kê bàn về phía ấy, một chỗ đọc sách có thể trở thành một phía của bàn ăn.

**Chụp lại chỗ bị vướng.** Một tấm ảnh khi ghế đang kéo ra và một sơ đồ có kích thước hữu ích hơn ảnh căn phòng đã dọn gọn. Ghi thêm món đồ bạn muốn giữ. Khi trao đổi về mặt bằng, hai bên có thể bắt đầu từ đúng góc thường bất tiện nhất.

**Xem góc bàn ăn Hiên Nắng** mở Chi tiết dự án. **Xem gói tư vấn bố trí mặt bằng** mở đúng gói tư vấn trên trang giá.

### Hỏi Nếp (5 câu FAQ tại `B08`)

1. **Chưa có bản vẽ căn hộ thì bắt đầu thế nào?** Chụp các góc phòng và ghi kích thước bạn đo được. Gói tư vấn trong bản mẫu cần mặt bằng có kích thước để vẽ phương án. Studio sẽ cho biết phần nào cần đo bổ sung.
2. **Có thể giữ lại bàn hoặc tủ cũ không?** Có thể lấy món đồ đó làm điểm xuất phát. Hãy gửi ảnh cùng chiều dài, rộng và cao để thử vị trí trên mặt bằng.
3. **Chỉ muốn sắp lại bàn ghế thì chọn gói nào?** Chọn Tư vấn bố trí mặt bằng để nhận sơ đồ có chú thích. Nếu cần phối cảnh, vật liệu và bản vẽ đóng đồ, xem gói Thiết kế nội thất.
4. **Căn nhỏ tính phí thiết kế thế nào?** Nhân diện tích thiết kế với đơn giá và đối chiếu mức tối thiểu. Mở gói Thiết kế nội thất để xem phép tính theo chính sách hiện hành.
5. **Đặt lịch có đồng nghĩa studio sẽ đến công trình không?** Sau khi gửi yêu cầu, studio liên hệ để thống nhất thời gian và phạm vi. Nếu muốn đối chiếu hạng mục đang thi công với hồ sơ, chọn Đồng hành thi công.

---

## 8. Người mua sửa template ở đâu?

| Phần nội dung cần có | Sửa một lần | Kiểm tra ở đâu |
|---|---|---|
| Thương hiệu và liên hệ | Đổi tên, logo hoặc chữ tên studio, email, điện thoại, khu vực và nơi nhận yêu cầu. Để trống trường chưa dùng. | Đầu trang, chân trang, Giới thiệu, Liên hệ, xác nhận gửi. Kiểm tra cả chữ hiển thị và đích bấm. |
| Dự án | Thêm tên, diện tích, ảnh và lời mô tả ảnh, nhu cầu, quyết định, kết quả, chi tiết đáng nhìn và gói liên quan. Chọn một dự án tiêu biểu. | Bộ sưu tập có thẻ mới. Trang chủ và mục “Chi tiết dự án” cùng mở đúng dự án tiêu biểu. |
| Dịch vụ | Đổi tên gói, đầu ra, đơn giá, mức tối thiểu, khu vực và phát sinh. Công thức và ví dụ lấy dữ liệu từ cùng gói. | Từ dự án sang bảng giá rồi đặt lịch. Giá và tên gói cập nhật cả khi đổi lựa chọn trong biểu mẫu. |
| Blog | Thêm bài, ảnh, câu hỏi và câu trả lời. Chọn gói liên quan khi cần. | Blog mở đúng bài, FAQ mở tại chỗ và liên kết dịch vụ còn đúng. |

**Trước khi đưa lên mạng thay mặt một studio thật**, thay nội dung minh họa bằng thông tin studio đã duyệt, kiểm tra quyền dùng ảnh, xác nhận giá và điều kiện, điền liên hệ và thử gửi đến đúng nơi nhận. Việc dựng trang, bấm thử trên trình duyệt và thử trên điện thoại thật thuộc giai đoạn tiếp theo.
