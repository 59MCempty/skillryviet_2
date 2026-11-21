# DESIGN PLAN (UX/UI Pro Max): Template Website Nội Thất — Nếp Studio

**Ngày cập nhật:** 2026-11-21  
**Tiêu chuẩn áp dụng:** `UX/UI Pro Max` × `Anthropic frontend-design` × `SOP-TAO-TEMPLATE-SKILL.md`  
**Phạm vi:** Tái cấu trúc **Hệ thống Hình ảnh**, **Bố cục Không gian (Spatial Layout)** và **Kiến trúc Điều hướng (Menu IA & Footer)** cho 4 màn hình cốt lõi (`B01 Trang chủ`, `B04 Chi tiết dự án`, `B05 Dịch vụ & Bảng giá`, `B06 Đặt lịch`) và hệ thống 9 bố cục (`B01`–`B09`).

---

## 1. Chủ Đề, Đối Tượng & Mục Tiêu Chuyển Đổi (Subject & Core Job)

- **Thương hiệu mẫu:** **Nếp Studio** — Studio thiết kế & cải tạo nội thất căn hộ theo nhịp sống thường ngày tại Việt Nam.
- **Khách hàng mục tiêu:** Gia chủ sở hữu căn hộ chung cư (32 m² – 90 m²), ưu tiên công năng thực tế, ánh sáng tự nhiên và sự linh hoạt (ví dụ: góc đọc sách ngày thường biến thành bàn ăn khi có khách), muốn biết rõ **phạm vi bàn giao và chi phí dự kiến** trước khi để lại số điện thoại.
- **Nhiệm vụ số 1 của giao diện (Primary Job):** Dẫn dắt khách đi từ **Câu chuyện không gian thật + Mặt bằng 2D (`Hiên Nắng 62 m²`)** $\rightarrow$ **Tự ước tính được chi phí minh bạch (`250.000 đ/m²`, tối thiểu `9.000.000 đ`)** $\rightarrow$ **Gửi yêu cầu đặt lịch tư vấn không áp lực**.

---

## 2. Bảng Màu Khóa Cứng (Architectural Monograph & WCAG AA/AAA)

Lấy cảm hứng từ vật liệu thật của căn hộ **Hiên Nắng** (giấy vôi ấm, đá vôi nhạt, mực than, xanh rêu khói):

| Token | Tên màu | Mã Hex | Vai trò sử dụng | Độ tương phản (WCAG) |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-paper` | Giấy Vôi Ấm (Warm Lime Paper) | `#F3F0E8` | Nền chính toàn trang | Nền chuẩn |
| `--bg-limestone` | Đá Vôi Nhạt (Light Limestone) | `#EAE6DC` | Khối tóm tắt gói & khối CTA cuối trang | `12.9:1` với `--ink-charcoal` |
| `--ink-charcoal` | Mực Than (Charcoal Ink) | `#1A1B18` | Chữ tiêu đề, nội dung chính, nét bản vẽ kiến trúc | `14.5:1` trên `--bg-paper` (AAA) |
| `--ink-muted` | Chữ Phụ (Stone Muted) | `#5C5E58` | Chữ chú thích, thông số phụ, ghi chú phát sinh | `5.8:1` trên `--bg-paper` (AA) |
| `--accent-moss` | Xanh Rêu Khói (Smoked Moss) | `#3E4A36` | Điểm nhấn duy nhất (tối đa 1 nút chính mỗi viewport) | `8.4:1` với `#F3F0E8` (AAA) |
| `--rule-hairline` | Đường Kẻ Mảnh (Warm Rule) | `#D6D1C6` | Đường kẻ `1px solid` phân tách (0 bo góc, 0 đổ bóng) | Cấu trúc |

---

## 3. Bộ Font Tiếng Việt (Typography System — Đã Kiểm Chứng Dấu)

1. **Tiêu đề có chân (`--font-display`):** **`Newsreader`** (serif) — Hiển thị sắc nét toàn bộ dấu tiếng Việt.
2. **Thân bài, Menu, Bảng giá & Form (`--font-sans`):** **`Be Vietnam Pro`** (sans-serif) — Tối ưu đọc dài và biểu mẫu tiếng Việt ở `16px`.
3. **Số liệu, Đơn giá & Diện tích:** Dùng `font-variant-numeric: tabular-nums` trên `Be Vietnam Pro` để căn thẳng hàng cột giá và diện tích (`62 m²`, `15.500.000 đ`).

---

## 4. Ba Cải Tiến Trọng Tâm (Giải Quyết Triệt Để Điểm Yếu Bản Cũ)

### 4.1. Khóa Kiến Trúc Menu 5 Mục Gốc & Chân Trang Mới (Đồng bộ 9/9 trang)
* **Nguồn chuẩn hóa:** Đồng bộ tuyệt đối với [design-system/MASTER.md](../../design-system/MASTER.md) và 9 file page-override trong [design-system/pages/](../../design-system/pages/).
* **Thanh Header (Máy tính):**
  * Trái: Logo chữ **`Nếp Studio`** (về `B01 Trang chủ`).
  * Phải/Giữa: Đúng **5 mục theo thứ tự**: **`Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ`**.
    * Trong **`Giới thiệu ▾`** xổ xuống đúng **3 mục**: **`Bộ sưu tập`** (`B03`), **`Chi tiết dự án`** (`B04`), **`Dịch vụ và bảng giá`** (`B05`).
* **Thanh Header (Điện thoại):** Hiển thị **`Nếp Studio`** (trái) và **`Menu`** (phải); chạm `Menu` mở 5 mục theo đúng thứ tự, chạm `Giới thiệu ▾` mở/thu 3 mục con. Vùng chạm `≥ 44 × 44px`.
* **Chân trang mới (9/9 trang):**
  * **Máy tính:** Trái có `Nếp Studio` và `Về Nếp Studio` (`B02`); phải có `Dịch vụ và bảng giá` (`B05`) và `Liên hệ` (`B07`); dưới cùng dòng nhỏ `Dự án minh họa · Giá minh họa`.
  * **Điện thoại:** Xếp thành 1 cột, mỗi liên kết 1 dòng rồi tới dòng ghi chú `Dự án minh họa · Giá minh họa`.

---

### 4.2. Chiến Lược Hình Ảnh Đa Góc & Bản Vẽ Kỹ Thuật (Xóa Bỏ Lỗi Lặp 1 Ảnh Ở Cả 4 Trang)
* **Lỗi ở bản cũ:** Bức ảnh *bàn ăn + băng ghế cửa sổ* bị dùng làm ảnh Hero to bản ở **cả 4 trang** (`01`, `02`, `03`, `04`), gây nhàm chán thị giác và chiếm mất không gian hiển thị bảng giá (trang 03) cũng như biểu mẫu đặt lịch (trang 04).
* **Giải pháp phân bổ hình ảnh theo đúng nhiệm vụ từng trang:**

| Màn hình | Chiến lược hình ảnh mới (UX/UI Pro Max) | Lý do & Tác dụng chuyển đổi |
| :--- | :--- | :--- |
| **01 / Trang chủ (`B01`)** | • **Hero:** Ảnh tổng thể góc ăn & băng ghế cửa sổ ngập nắng.<br>• **Chi tiết đáng nhìn:** Kết hợp **Sơ đồ mặt bằng 2D nhỏ (Mini Floorplan)** bên cạnh ảnh cận cảnh kệ sách đầu băng ghế.<br>• **Về Nếp:** Ảnh góc bếp gỗ sồi & bình gốm trên bàn. | Khách vừa thấy vẻ đẹp cảm xúc (ảnh chụp), vừa thấy ngay năng lực chuyên môn của kiến trúc sư (sơ đồ mặt bằng). |
| **02 / Chi tiết dự án (`B04`)** | • **Ảnh 1 (Hero):** Toàn cảnh phòng sinh hoạt chung Hiên Nắng 62 m².<br>• **Khối Đối chiếu 2 cột:** Cột trái là **Bản vẽ Mặt bằng bố trí 2D (Trước & Sau khi đẩy bàn ăn sát băng ghế)**; Cột phải là **Góc chụp khác (Khu bếp mở & vòm hành lang nhìn vào phòng ngủ)**.<br>• **Ảnh 3 (Chi tiết):** Cận cảnh khớp nối tủ sách và đệm ngồi bên cửa sổ. | Chứng minh câu chuyện *"Một chỗ ngồi, hai nhịp sống"* bằng cả bản vẽ kỹ thuật lẫn đa góc chụp không gian. |
| **03 / Dịch vụ & Bảng giá (`B05`)** | • **LOẠI BỎ ảnh Banner lớn đầu trang.**<br>• Thay bằng **3 hình minh họa đầu ra (Deliverable Thumbnails)** nhỏ gọn nằm ngay đầu mỗi thẻ gói:<br>  - Gói 1: Bản vẽ sơ đồ mặt bằng 2D có chú thích.<br>  - Gói 2: Phối cảnh 3D + Bảng mẫu vật liệu gỗ/vải.<br>  - Gói 3: Sổ ghi chú & biên bản đối chiếu tại công trình. | Đưa cả 3 cột bảng giá và thanh tính nhẩm diện tích lên **ngay màn hình đầu tiên (Above the fold)**, khách không phải cuộn qua ảnh lặp. |
| **04 / Đặt lịch (`B06`)** | • **LOẠI BỎ ảnh Banner lớn đầu trang** và bỏ ảnh lặp ở góc dưới.<br>• Trong thẻ *"Gói dịch vụ đang chọn"* (Cột trái Desktop), dùng **1 thẻ Moodboard nhỏ (Bản vẽ + Mẫu vật liệu gỗ/vải ô liu)** đại diện cho hồ sơ thiết kế. | Tập trung 100% sự chú ý vào việc hoàn tất biểu mẫu đặt lịch. |

---

### 4.3. Bố Cục Không Gian (Spatial Layout) & Đột Phá Trải Nghiệm Mobile
1. **Trang 01 (Trang chủ):**
   - **Trên Mobile:** Đưa ảnh Hero căn hộ Hiên Nắng lên ngay dưới tiêu đề (hoặc đầu khối), nút `Xem căn hộ` thu gọn vừa vặn kết hợp link `Xem bảng giá →`, không làm nút full-width thô cứng trước khi khách kịp nhìn thấy ảnh căn hộ.
   - **Khối Dịch vụ:** Hiển thị luôn **mức giá khởi điểm** (`1.500.000 đ/căn`, `250.000 đ/m²`, `1.200.000 đ/buổi`) ngay trên 3 cột ở Trang chủ để lọc và thu hút khách có nhu cầu thực.
2. **Trang 02 (Chi tiết dự án):**
   - Bổ sung **Thanh thông số kiến trúc (Architectural Spec Bar)** 4 cột ngay dưới tên dự án:
     `Diện tích: 62 m²` | `Hạng mục: Khách · Bếp · Ăn` | `Gói áp dụng: Thiết kế nội thất` | `Chi phí thiết kế: 15.500.000 đ`.
   - Cuối trang có hộp CTA chuyển đổi dẫn sang gói `Thiết kế nội thất` (`G02`) và `Tư vấn bố trí mặt bằng` (`G01`). *(Không tự thêm dự án `32 m²` vì Bộ sưu tập `B03` chỉ có 1 dự án `Hiên Nắng 62 m²`).*
3. **Trang 03 (Dịch vụ và bảng giá):**
   - Bỏ ảnh Banner lớn đầu trang và không dùng 3 thẻ SaaS hay ô nhập `<input m²>`. Trình bày theo dạng **Tờ Hồ Sơ Báo Giá Kiến Trúc (Architectural Fee Schedule)** gồm 3 hàng ngang phân tách bởi đường kẻ `1px solid #D6D1C6`, hiển thị sẵn ví dụ tính cho `Hiên Nắng 62 m²` (`15.500.000 đ`) và `Căn 32 m²` (`áp mức tối thiểu 9.000.000 đ`).
   - Bổ sung **3 câu hỏi thường gặp (Mini FAQ)** ngay bên dưới bảng giá để giải tỏa thắc mắc trước khi bấm đặt lịch.
4. **Trang 04 (Đặt lịch):**
   - **Trên Điện thoại (Mobile UX Breakthrough):** Thay vì để hộp *"Gói dịch vụ đang chọn"* dài chiếm hết màn hình đầu tiên, thu gọn thành **Thanh Accordion Tóm Tắt Gọn (`Compact Sticky Summary Bar`)**:
     `Đang chọn: Thiết kế nội thất · 250.000 đ/m² [Xem chi tiết ▾]`
     Nhờ vậy, toàn bộ các ô nhập `Gói quan tâm`, `Diện tích ước tính`, `Tên của bạn`, `Số điện thoại` hiển thị **ngay lập tức ở màn hình đầu tiên trên điện thoại**.
   - **Tách bạch Trạng thái sau khi gửi (State 2):** Đặt trong khung viền nét đứt có nhãn rõ *"Trạng thái thay thế sau khi bấm Gửi (State 2)"* để người xem bản phác và lập trình viên hiểu đây là màn hình xác nhận thay thế sau khi submit, không phải một hộp nằm cố định dưới nút Gửi.

---

## 5. Sơ Đồ Bố Cục Không Gian (ASCII Wireframes — Desktop & Mobile)

### 01 / Trang chủ (`B01`)
```text
MÁY TÍNH (Desktop 1280px–1440px)                                  ĐIỆN THOẠI (Mobile 390px)
+---------------------------------------------------------------+ +-------------------------+
| Nếp Studio   Trang chủ | Giới thiệu ▾ | Đặt lịch | Blog | LH | | Nếp Studio       [Menu] |
+---------------------------------------------------------------+ +-------------------------+
| [Nhãn: Dự án tiêu biểu · 62 m²]  |                            | | [Ảnh Hero Hiên Nắng]    |
| Căn hộ Hiên Nắng                 |   [ẢNH HERO HIÊN NẮNG:     | | Căn hộ Hiên Nắng        |
| Căn hộ Hiên Nắng                 |   [ẢNH HERO HIÊN NẮNG:     | | Thiết kế nội thất · 62m²|
| Bố trí lại phòng sinh hoạt chung |    Băng ghế cửa sổ &       | | [Xem căn hộ]  Bảng giá→ |
| [Xem căn hộ]   Xem bảng giá →    |    Bàn ăn gỗ sồi]          | +-------------------------+
+----------------------------------+----------------------------+ | CHI TIẾT ĐÁNG NHÌN      |
| [Sơ đồ 2D góc ăn] + [Ảnh kệ sách]| CHI TIẾT ĐÁNG NHÌN         | | [Sơ đồ 2D] [Ảnh chi tiết|
|                                  | Một chỗ ngồi, hai nhịp sống| | Một chỗ ngồi, hai nhịp..|
|                                  | Khám phá Hiên Nắng →       | +-------------------------+
+----------------------------------+----------------------------+ | DỊCH VỤ CỦA NẾP         |
| DỊCH VỤ CỦA NẾP (Có giá khởi điểm minh bạch)                  | | 1. Tư vấn mặt bằng 1.5tr|
| [1. Mặt bằng · 1.5tr] | [2. Thiết kế · 250k/m²] | [3. Thi công]| | 2. Thiết kế · 250k/m²   |
+---------------------------------------------------------------+ | 3. Đồng hành · 1.2tr    |
| VỀ NẾP STUDIO & QUY TRÌNH 3 BƯỚC | [Ảnh góc bếp & bình gốm]   | +-------------------------+
| 01. Kể sinh hoạt → 02. Phương án → 03. Chốt hồ sơ             | | VỀ NẾP & QUY TRÌNH 3 BƯỚC|
+---------------------------------------------------------------+ +-------------------------+
| FOOTER: Trái (Nếp Studio · Về Nếp Studio) | Phải (DV&Giá · LH)| | FOOTER 1 CỘT (Từng dòng)|
|         Dưới cùng: Dự án minh họa · Giá minh họa              | | Dự án minh họa · Giá... |
+---------------------------------------------------------------+ +-------------------------+
```

### 02 / Chi tiết dự án (`B04`)
```text
MÁY TÍNH (Desktop 1280px–1440px)                                  ĐIỆN THOẠI (Mobile 390px)
+---------------------------------------------------------------+ +-------------------------+
| Nếp Studio   Trang chủ | [Giới thiệu ▾] | Đặt lịch | Blog | LH| | Nếp Studio       [Menu] |
|                          +---------------------------+        | +-------------------------+
|                          | • Bộ sưu tập              |        | | Hiên Nắng (62 m²)       |
|                          | • Chi tiết dự án          |        | | [Lưới 2x2 Thông số nhanh|
|                          | • Dịch vụ và bảng giá     |        | |  62m² | Khách-Bếp-Ăn    |
+--------------------------+---------------------------+--------+ |  62m² | Khách-Bếp-Ăn    |
| Hiên Nắng                                                     | |  Gói Thiết kế | 15.5tr] |
| [62 m²]  |  [Khách · Bếp · Ăn]  |  [Gói Thiết kế]  | [15.5tr] | +-------------------------+
+---------------------------------------------------------------+ | [Ảnh tổng thể góc ăn]   |
| [ẢNH TỔNG THỂ: Băng ghế dài sát cửa sổ & bàn ăn gỗ sồi]       | | Một góc nhà cho ngày    |
+---------------------------------------------------------------+ | thường và bữa có khách  |
| Một góc nhà cho ngày thường và những bữa có khách.            | +-------------------------+
| [CỘT TRÁI: Bản vẽ Mặt bằng 2D]  | [CỘT PHẢI: Ảnh góc bếp mở & | | [Bản vẽ Mặt bằng 2D]    |
| Trước & Sau khi xoay bàn ăn     |  hành lang vòm vào phòng ngủ| | [Ảnh góc bếp & vòm cửa] |
+---------------------------------+-----------------------------+ +-------------------------+
| [Ảnh cận cảnh kệ sách đầu ghế]  | CHI TIẾT ĐÁNG NHÌN          | | CHI TIẾT: Băng ghế cửa sổ|
|                                 | Băng ghế bên cửa sổ         | +-------------------------+
+---------------------------------+-----------------------------+ | [HỘP CTA CHUYỂN ĐỔI]    |
| [HỘP CTA: Xem gói thiết kế nội thất (250k/m²) | Tư vấn 1.5tr] | +-------------------------+
+---------------------------------------------------------------+
```

### 03 / Dịch vụ và bảng giá (`B05`) — Không còn ảnh Banner lớn đẩy bảng giá xuống
```text
MÁY TÍNH (Desktop 1280px–1440px)                                  ĐIỆN THOẠI (Mobile 390px)
+---------------------------------------------------------------+ +-------------------------+
| Nếp Studio   Trang chủ | [Giới thiệu ▾] | Đặt lịch | Blog | LH| | Nếp Studio       [Menu] |
+---------------------------------------------------------------+ +-------------------------+
| Dịch vụ và bảng giá —              [Giá minh họa cho template]| | Dịch vụ & bảng giá      |
| Một phương án bố trí, một bộ bản vẽ hay một buổi tại công trình| | 01. Tư vấn mặt bằng     |
|-----------------------------------------------------------------| |     1.500.000 đ/căn     |
| 01. Tư vấn mặt bằng                 | 1.500.000 đ/căn           | | [Đặt lịch tư vấn]       |
| • 60 phút online, sơ đồ chú thích   | [Đặt lịch tư vấn]         | +-------------------------+
|-----------------------------------------------------------------| | 02. Thiết kế nội thất   |
| 02. Thiết kế nội thất               | 250.000 đ/m² (Min 9tr)    | |     250.000 đ/m²        |
| • Mặt bằng, 3D, vật liệu, bản vẽ đồ | Hiên Nắng 62m²: 15.5tr    | | Hiên Nắng 62m²: 15.5tr  |
|                                     | [Đặt lịch tư vấn]         | | [Đặt lịch tư vấn]       |
|-----------------------------------------------------------------| +-------------------------+
| 03. Đồng hành thi công              | 1.200.000 đ/buổi          | | 03. Đồng hành thi công  |
| • Đối chiếu 1 mục, ghi chú & ảnh    | [Đặt lịch tư vấn]         | |     1.200.000 đ/buổi    |
+-----------------------------------------------------------------+ | [3 câu FAQ rút gọn]     |
```

### 04 / Đặt lịch (`B06`) — Bỏ ảnh Banner đầu trang + Thu gọn hộp tóm tắt trên Mobile
```text
MÁY TÍNH (Desktop 1280px–1440px)                                  ĐIỆN THOẠI (Mobile 390px)
+---------------------------------------------------------------+ +-------------------------+
| Nếp Studio   Trang chủ | Giới thiệu ▾ | [Đặt lịch] | Blog | LH| | Nếp Studio       [Menu] |
+---------------------------------------------------------------+ +-------------------------+
| Hiên Nắng → Thiết kế nội thất → Đặt lịch                      | | Hiên Nắng → Đặt lịch    |
| Bạn muốn trao đổi về căn hộ nào?                              | | Bạn muốn trao đổi về... |
+---------------------------+-----------------------------------+ | +---------------------+ |
| GÓI DỊCH VỤ ĐANG CHỌN     | Gói quan tâm *    | Diện tích (m²)| | | Đang chọn: Thiết kế | |
| Thiết kế nội thất         | [Thiết kế NT ▾]   | [ 62 m²      ]| | | 250k/m² [Chi tiết ▾]| |
| [Moodboard Bản vẽ + Gỗ]   | Nếp có thể gọi bạn là gì? *       | | +---------------------+ |
| ------------------------- | [Tên của bạn                     ]| | Gói quan tâm * | [62 m²]|
| Phạm vi: Mặt bằng, 3D,    | Cách liên hệ *                    | | [Thiết kế nội thất ▾]   |
| vật liệu, bản vẽ đồ (2x)  | [Điện thoại (Active)] [Email]     | | Tên của bạn *           |
| ------------------------- | Số điện thoại *                   | | [Nhập tên của bạn]      |
| Giá minh họa:             | [Nhập số điện thoại              ]| | Cách liên hệ *          |
| 250.000 đ/m² (Min 9tr)    | Bạn muốn thay đổi điều gì?        | | [Điện thoại] [Email]    |
| Ước tính (62m²): 15.5tr   | [Ví dụ: căn hộ thoáng hơn...     ]| | Số điện thoại *         |
| ------------------------- | Khi nào tiện để liên hệ?          | | [Nhập số điện thoại]    |
| Quy trình 3 bước sau gửi  | [Gửi yêu cầu tư vấn (Full-width)] | | [Gửi yêu cầu tư vấn]    |
+---------------------------+-----------------------------------+ | - - - - - - - - - - - - |
| - - - Trạng thái thay thế sau khi bấm Gửi (State 2) - - - - - | | [State 2: Đã nhận YC]   |
| (✓) Studio đã nhận yêu cầu về Thiết kế nội thất...            | +-------------------------+
+---------------------------------------------------------------+
```


---

## 6. Pre-Delivery Checklist (`ui-ux-pro-max` × Nếp Studio)

Chuẩn kiểm tra đầy đủ được lưu tại [design-system/MASTER.md](../../design-system/MASTER.md) và 9 file page-override tại [design-system/pages/](../../design-system/pages/):

- [ ] Giữ nguyên bảng màu Architectural Monograph (`#F3F0E8`, `#EAE6DC`, `#1A1B18`, `#5C5E58`, `#3E4A36`, `#D6D1C6`), `border-radius: 0px`, 0 card soup, 0 pill badge, 0 icon trang trí.
- [ ] Font `Newsreader` + `Be Vietnam Pro` (`tabular-nums`) đủ dấu tiếng Việt, cỡ chữ thân bài `≥ 16px` trên Mobile.
- [ ] Header Desktop đúng 5 mục (`Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ`, `Giới thiệu ▾` xổ đúng 3 mục); Mobile `Nếp Studio` + `Menu`.
- [ ] Footer mới đồng bộ 9/9 trang (Desktop trái/phải + `Dự án minh họa · Giá minh họa`; Mobile 1 cột).
- [ ] Phân bổ hình ảnh đa dạng 9 trang (`01`–`09`), `06` chỉ có 1 dự án `Hiên Nắng 62 m²`, `09` ẩn SĐT/email/địa chỉ và không lặp form đặt lịch.
- [ ] Đạt WCAG AA (`≥ 4.5:1`), vùng chạm Mobile `≥ 44 × 44px`, `<label for>` cho mọi input, không dùng emoji làm icon, không tràn ngang ở `360px–1440px`.
