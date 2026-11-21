# Implementation Plan: Template Website Nếp Studio (Architectural Monograph)

**Branch**: `001-nep-studio-template` (chưa tạo nhánh Git; làm trực tiếp trong `nep-studio-template/`) | **Date**: `2026-11-21` | **Spec**: [spec.md](spec.md)

**Input**:
- Đặc tả yêu cầu & nghiệm thu: [spec.md](spec.md) (đã chốt `T023` tại `O08`)
- Nội dung & bố cục 9 trang: [Nep-Studio.md](Nep-Studio.md)
- Chuẩn thị giác Architectural Monograph: [design-system/MASTER.md](../../design-system/MASTER.md) & 9 file trong [design-system/pages/](../../design-system/pages/)
- Bản duyệt giao diện 9 trang: [design-system/nep-studio-monograph-9-pages.html](../../design-system/nep-studio-monograph-9-pages.html)
- Checklist tổng duy nhất: [tasks.md](tasks.md)

---

## 1. Summary (Tóm tắt giải pháp kỹ thuật)

Dựng bộ template website tĩnh thuần cho studio nội thất tại Việt Nam theo phong cách **Architectural Monograph** gồm **đúng 9 bố cục (`B01`–`B09`)**, đáp ứng trọn vẹn hai hành trình ưu tiên:
- **US1 (Hành trình khách studio):** Từ Trang chủ / Bộ sưu tập $\rightarrow$ Chi tiết dự án (`Hiên Nắng 62 m²`) $\rightarrow$ Dịch vụ & Bảng giá (3 gói `G01`–`G03` với công thức minh bạch) $\rightarrow$ Đặt lịch (giữ đúng gói đã chọn, cho phép đổi gói, xác nhận sau tiếp nhận thực tế).
- **US2 (Hành trình người mua chỉnh template):** Sửa **1 file dữ liệu trung tâm duy nhất (`site/data/site-data.json`)** để đổi thương hiệu, logo, ảnh, đơn giá/đơn vị/mức tối thiểu, liên hệ, thêm dự án, thêm bài viết/FAQ — mọi trang tự đồng bộ mà không phải sửa mã HTML rải rác.

Toàn bộ website dùng **HTML5 + CSS3 (CSS Variables, CSS Motion) + Vanilla JavaScript (ES Modules)**, **không phụ thuộc framework hay bước build phức tạp**, kiểm thử cục bộ qua máy chủ tĩnh nhẹ (`python3 -m http.server`) và đóng gói bàn giao hoàn chỉnh trước khi xuất bản công khai.

---

## 2. Technical Context

- **Language / Version**: HTML5 (Semantic), CSS3 (Custom Properties, Grid/Flexbox, `prefers-reduced-motion`), Vanilla JavaScript (ES2022 Modules — chạy trực tiếp trên trình duyệt hiện đại không cần bundler).
- **Primary Dependencies**: Không có runtime dependency ngoài. Font Google Fonts (`Newsreader` + `Be Vietnam Pro`, tiếng Việt đầy đủ + `tabular-nums`, kèm fallback hệ thống).
- **Storage / Content Source**: 1 file dữ liệu trung tâm `site/data/site-data.json` (kèm kiểm chuẩn cấu trúc `site/data/site-data.schema.json`).
- **Booking Submission (`B06`)**: Cổng Form không cần backend (`Formspree` hoặc `Web3Forms`) gửi trực tiếp về Email studio qua `fetch(..., { method: 'POST' })`, cấu hình tại `booking.submission` trong `site/data/site-data.json`. Mặc định ở chế độ `mode: "demo"` an toàn cho bản mẫu (mô phỏng có nhãn rõ ràng, không gửi dữ liệu thật).
- **Testing & Verification**:
  - Kiểm tra dữ liệu & liên kết nội bộ: `node scripts/validate-data.mjs`
  - Xem thử cục bộ (không lỗi CORS khi `fetch` JSON): `./scripts/preview.sh` (`http://127.0.0.1:4173`)
  - Kiểm thử giao diện tự động & trực quan: Chrome Headless (`360px`, `390px`, `430px`, `1280px`, `1440px`, zoom `200%`) + kiểm thử tay trên trình duyệt máy tính & tối thiểu 1 điện thoại thật (`SC-001`–`SC-007`).
- **Target Platform**: Trình duyệt hiện đại trên máy tính (Chrome, Safari, Edge, Firefox) và điện thoại (iOS Safari, Android Chrome, Zalo/Facebook in-app WebView).
- **Project Type**: Static Multi-Page Website Template (9 tệp HTML dùng chung engine CSS/JS và 1 nguồn dữ liệu JSON).
- **Performance & Accessibility Goals**:
  - Thời gian dựng trang đầu tiên tức thì (< 500ms cục bộ), không Layout Shift (CLS ≈ 0), tổng kích thước CSS+JS thuần < 50 KB chưa nén.
  - Đạt WCAG AA/AAA (`#1A1B18` trên `#F3F0E8` = `14.5:1`, `#5C5E58` trên `#F3F0E8` = `5.8:1`, `#3E4A36` với chữ `#F3F0E8` = `8.4:1`).
  - Vùng bấm trên Mobile `≥ 44 × 44px`, thân bài `≥ 16px`, hỗ trợ đầy đủ điều hướng bàn phím (`Tab`, `Enter`/`Space`, `Escape`, Skip link).
- **Scale / Scope**: Chính xác 9 bố cục (`B01`–`B09`), 3 gói dịch vụ ổn định (`G01`–`G03`), 1 dự án mẫu mở đầu (`Hiên Nắng 62 m²`), 1 bài viết mẫu + 5 câu FAQ (`Hỏi Nếp`), 1 tài liệu hướng dẫn người mua (`docs/HUONG-DAN-SUA-TEMPLATE.md`).

---

## 3. Constitution Check (Kiểm tra tuân thủ Hiến pháp `v1.1.0`)

| Nguyên tắc | Trạng thái | Cách kế hoạch kỹ thuật đảm bảo |
|---|---|---|
| **I. Phục vụ đủ hai hành trình (`US1` & `US2`)** | ĐẠT | `US1` chạy trọn bằng query param (`du-an.html?slug=...` → `dich-vu.html#G02` → `dat-lich.html?goi=G02&du-an=...`). `US2` tập trung 100% ở `site/data/site-data.json`. |
| **II. Phạm vi đúng 9 bố cục (`B01`–`B09`)** | ĐẠT | Đúng 9 file HTML tương ứng `B01`–`B09`. FAQ nằm trong `blog.html` (`B08`), xác nhận gửi nằm trong `dat-lich.html` (`B06`), hướng dẫn nằm ở `docs/HUONG-DAN-SUA-TEMPLATE.md` (không tạo trang web thứ 10). |
| **III. Quyết định mở phải giữ mở** | ĐẠT | `site/data/site-data.json` gắn cờ `isDemo: true`, giữ nguyên giá/dự án minh họa, ẩn trường liên hệ trống trên `lien-he.html`, không chốt giá thật hay ngách 25–45 m². |
| **IV. Dịch vụ và giá rõ ràng** | ĐẠT | Công thức tính phí `G02` (`Math.max(minFee, area * unitPrice)`) và danh sách đầu ra/phát sinh lấy từ cùng đối tượng `packages[]` trong `site-data.json` cho cả `B01`, `B04`, `B05`, `B06`. |
| **V. Tiến độ có bằng chứng** | ĐẠT | Mỗi tác vụ `T025`–`T045` trong `tasks.md` gắn đường dẫn file thật và tiêu chí kiểm tra đo được; không tạo checklist tổng thứ hai. |

---

## 4. Project Structure (Cấu trúc thư mục & đường dẫn thật)

```text
nep-studio-template/
├── design-system/                         # Nguồn chuẩn thị giác đã duyệt (KHÔNG sửa đổi phá vỡ)
│   ├── MASTER.md
│   ├── pages/01..09.md
│   ├── assets/                            # 5 ảnh sạch đã cắt rời (hien-nang-*.jpg)
│   └── nep-studio-monograph-9-pages.html
├── specs/001-nep-studio-template/
│   ├── Nep-Studio.md
│   ├── DESIGN-PLAN.md
│   ├── spec.md
│   ├── plan.md                            # File này (T024)
│   └── tasks.md                           # Checklist tổng duy nhất (đã gắn đường dẫn thật)
├── site/                                  # THƯ MỤC WEBSITE TĨNH BÀN GIAO (Static HTML5/CSS3/Vanilla JS)
│   ├── index.html                         # B01 — Trang chủ
│   ├── gioi-thieu.html                    # B02 — Giới thiệu (Về Nếp Studio)
│   ├── bo-suu-tap.html                    # B03 — Bộ sưu tập dự án
│   ├── du-an.html                         # B04 — Chi tiết dự án (?slug= hoặc dự án tiêu biểu)
│   ├── dich-vu.html                       # B05 — Dịch vụ và bảng giá (Architectural Fee Schedule)
│   ├── dat-lich.html                      # B06 — Đặt lịch tư vấn (Tờ phiếu hẹn + State xác nhận)
│   ├── lien-he.html                       # B07 — Liên hệ
│   ├── blog.html                          # B08 — Blog / Tin tức & Hỏi Nếp (FAQ tại chỗ)
│   ├── bai-viet.html                      # B09 — Chi tiết bài viết (?slug=)
│   ├── data/
│   │   ├── site-data.json                 # NGUỒN NỘI DUNG DUY NHẤT (US2 — sửa 1 chỗ cập nhật 9 trang)
│   │   └── site-data.schema.json          # Schema mô tả & kiểm hợp lệ cho site-data.json
│   ├── assets/
│   │   └── images/                        # Bộ ảnh độc lập của website (copy từ design-system/assets/)
│   ├── css/
│   │   ├── tokens.css                     # CSS Variables chuẩn Architectural Monograph (MASTER.md)
│   │   ├── base.css                       # Reset 0px, typography, skip-link, focus-visible, prefers-reduced-motion
│   │   ├── layout.css                     # Header 5 mục, Mobile Menu Drawer, Footer mới, Grids 45–55% whitespace
│   │   └── components.css                 # Fee Schedule, Paper Form underline inputs, FAQ <details>, SVG drawings, CSS Motion
│   └── js/
│       ├── data-loader.js                 # Tải site-data.json, chuẩn hóa tiền tệ VND, tính giá tối thiểu G02, tìm dự án nổi bật
│       ├── shell.js                       # Render dùng chung Header 5 mục (chuột + Enter/Space/Escape), Mobile Drawer, Footer mới
│       ├── drawings.js                    # Bản vẽ SVG kiến trúc nét mảnh (stroke-width: 1) trên nền #F3F0E8
│       ├── booking.js                     # Logic B06: đọc ?goi= & ?du-an=, đổi gói, validate, chống gửi trùng, Demo/Formspree/Web3Forms
│       └── pages.js                       # Bộ render từng trang B01–B09 từ cùng site-data.json + fallback khi thiếu/sai dữ liệu
├── docs/
│   └── HUONG-DAN-SUA-TEMPLATE.md          # Hướng dẫn người mua tự sửa nội dung (T034 — tài liệu bàn giao)
└── scripts/
    ├── preview.sh                         # Khởi chạy máy chủ tĩnh cục bộ tại http://127.0.0.1:4173
    └── validate-data.mjs                  # Script Node kiểm tra hợp lệ site-data.json, mã gói G01–G03 và đường dẫn ảnh
```

**Structure Decision**: Chọn kiến trúc **9 tệp HTML tĩnh thực thụ (`site/*.html`) chia sẻ chung 1 nguồn dữ liệu (`site/data/site-data.json`) và bộ ES Modules nhẹ (`site/js/*.js`)** thay vì SPA hash-router để:
1. Mỗi bố cục `B01`–`B09` có URL sạch, `<title>` riêng, dễ tối ưu SEO và dễ kiểm tra từng trang độc lập.
2. Thêm dự án mới hoặc bài viết mới **không phải tạo thêm file HTML** — chỉ thêm 1 mục trong `site/data/site-data.json`, trang `du-an.html?slug=<ma>` và `bai-viet.html?slug=<ma>` tự hiển thị (`FR-008`, `SC-001`).
3. Không cần `npm install` hay build step: người mua chỉ cần sửa `site/data/site-data.json` rồi chạy `./scripts/preview.sh` (hoặc kéo thả thư mục `site/` lên Cloudflare Pages / Netlify).

---

## 5. Kiến trúc Dữ liệu Trung tâm (`site/data/site-data.json`)

Toàn bộ thông tin có thể sửa ở `US2` nằm gọn trong 6 nhánh dữ liệu (khớp bảng `Key Entities` trong `spec.md`):

```jsonc
{
  "meta": {
    "isDemo": true,
    "demoNotice": "Dự án minh họa · Giá minh họa",
    "priceDisclaimer": "Giá minh họa cho template. Không cộng phí vật liệu hoặc tiền thi công vào giá thiết kế."
  },
  "brand": {
    "name": "Nếp Studio",
    "logoImage": "",             // Để trống sẽ hiển thị chữ tên thương hiệu bằng Newsreader
    "logoAlt": "Nếp Studio",
    "tagline": "Thiết kế không gian sống xoay quanh nhịp sống thường ngày.",
    "serviceArea": "Tư vấn mặt bằng trực tuyến và khảo sát theo phạm vi công bố của studio."
  },
  "contact": {
    "phone": "",                 // Để trống trong bản mẫu -> tự ẩn trên B07 và chân trang (FR-009)
    "email": "",                 // Điền thật -> tự hiện link tel:/mailto: khớp chữ hiển thị (SC-003)
    "address": "",
    "hours": ""
  },
  "packages": [
    {
      "id": "G01",               // Mã ổn định, không tự đổi khi đổi tên gói
      "number": "01",
      "name": "Tư vấn bố trí mặt bằng",
      "pricingType": "flat",     // "flat" | "per_m2" | "per_session"
      "unitPrice": 1500000,
      "minPrice": 0,
      "unitLabel": "đ/căn",
      "scopeSummary": "Căn hộ đến 70 m²",
      "audience": "...",
      "deliverables": "...",
      "extras": "...",
      "examples": ["Căn 32 m² và 62 m² cùng mức phí trong phạm vi này."],
      "featured": false
    }
    // G02 (per_m2: unitPrice 250000, minPrice 9000000, examples tự tính động từ công thức!)
    // G03 (per_session: unitPrice 1200000, sessionBundle: 2)
  ],
  "projects": [
    {
      "slug": "hien-nang",
      "featured": true,          // Đổi cờ này tự đổi cả B01 Trang chủ & mục con "Chi tiết dự án"
      "published": true,
      "name": "Căn hộ Hiên Nắng",
      "shortName": "Hiên Nắng",
      "areaM2": 62,
      "label": "Dự án minh họa",
      "spaces": "Khách · Bếp · Ăn",
      "primaryPackageId": "G02",
      "secondaryPackageId": "G01",
      "summary": "Góc đọc bên cửa sổ trở thành chỗ ngồi cho bữa tối.",
      "images": { "hero": "...", "window": "...", "kitchen": "...", "bookshelf": "..." },
      "story": { "headline": "...", "need": "...", "decision": "...", "result": "..." },
      "detailHighlight": { "label": "Chi tiết đáng nhìn", "title": "Băng ghế bên cửa sổ", "subtitle": "Một chỗ ngồi, hai nhịp sống", "body": "..." }
    }
  ],
  "blog": {
    "title": "Chuyện bố trí nhà",
    "posts": [ /* bài "truoc-khi-mua-ban-an-hay-thu-keo-ghe" */ ],
    "faqs": [ /* đúng 5 câu "Hỏi Nếp", câu 1 có defaultOpen: true */ ]
  },
  "booking": {
    "submission": {
      "mode": "demo",            // "demo" | "formspree" | "web3forms"
      "endpoint": "",            // Dán URL Formspree (https://formspree.io/f/xxx) hoặc https://api.web3forms.com/submit
      "accessKey": ""            // Chỉ dùng khi mode === "web3forms"
    },
    "messages": {
      "missingContact": "Bạn nhập số điện thoại hoặc email để studio phản hồi nhé.",
      "invalidPackage": "Gói này đã thay đổi. Bạn chọn lại một gói nhé.",
      "sending": "Đang gửi yêu cầu…",
      "error": "Yêu cầu chưa gửi được. Thông tin vẫn còn ở đây, bạn có thể thử lại.",
      "privacyNote": "Studio sẽ dùng thông tin bạn gửi để trao đổi về yêu cầu này.",
      "noConfirmNote": "Gửi yêu cầu chưa phải xác nhận lịch hẹn."
    }
  }
}
```

### Luật tính giá tự động & đồng bộ 1 nguồn cho cả Bảng giá lẫn FAQ (`js/data-loader.js`)
- Hàm `calculatePackageFee(pkg, areaM2)`:
  - Nếu `pricingType === "per_m2"`: tính `raw = areaM2 * unitPrice`, trả `Math.max(minPrice, raw)` và cờ `appliedMin = raw < minPrice`.
  - Mọi ví dụ ở `B05` (`Hiên Nắng 62 m²`, `Căn 32 m²`), thông số chi phí thiết kế ở `B04` (`15.500.000 đ`) và tóm tắt giá ở `B01`/`B06` đều **tính trực tiếp từ đối tượng `packages[]`**.
- **Nội suy giá động cho FAQ & mô tả (`interpolatePriceTokens`):** Các câu trả lời FAQ ở `B05` và `B08` dùng placeholder động (`{{G01.price}}`, `{{G02.price}}`, `{{G02.minPrice}}`, `{{G02.minAreaBreakEven}}`, `{{G02.example62}}`, `{{G02.example32}}`, `{{G03.price}}`, `{{G03.twoSessions}}`) thay vì gõ cứng số tiền. Khi người mua đổi `unitPrice` hoặc `minPrice` ở đúng 1 chỗ trong `site-data.json`, **100% vị trí (thông tin gói, bảng giá, ví dụ tính tiền, thẻ dự án, tóm tắt đặt lịch và toàn bộ FAQ) tự cập nhật đồng bộ không sót số cũ (`SC-003`)**.

### Luật điều hướng dự án → bảng giá → đặt lịch (Không nhảy cóc)
- Cuối trang `du-an.html` (`B04`), hai nút **`Xem gói Thiết kế nội thất`** và **`Xem tư vấn bố trí mặt bằng`** **bắt buộc mở sang trang `dich-vu.html?goi=G02&du-an=hien-nang#G02`** (hoặc `#G01`), tự cuộn mượt và nhấn nhẹ đường viền xanh rêu khói vào đúng gói liên quan để khách đọc trọn phạm vi, đơn giá và phát sinh trước.
- Chỉ khi bấm nút **`Đặt lịch tư vấn`** trên `dich-vu.html` (`B05`), khách mới đi tiếp sang `dat-lich.html?goi=G02&du-an=hien-nang` với gói đã chọn sẵn (`US1 Kịch bản A`).

### Tiêu chuẩn độ phân giải ảnh (`site/assets/images/`)
- Không dùng các bản cắt nhỏ mờ (`244 px` chiều rộng) cho khung ảnh lớn trên máy tính. Ảnh bìa tối thiểu `≥ 1080 px`, ảnh chi tiết (kệ sách, góc bếp, góc cửa sổ) tối thiểu `≥ 600–800 px` (tạm cắt độ phân giải cao từ nguồn ảnh gốc `1096×864` cho bản mẫu và ghi rõ tiêu chuẩn `≥ 1200 px` khi studio thay ảnh công trình thật tại `T008`).

---

## 6. Kiến trúc Gửi Đặt lịch & Xử lý Trạng thái (`site/js/booking.js`)

1. **Đọc ngữ cảnh từ URL (`dat-lich.html?goi=G02&du-an=hien-nang`):**
   - Không có `?goi=` (vào từ Menu `Đặt lịch`): hiển thị mặc định `"Chọn gói"` (`value=""`), không tự gán gói bất kỳ.
   - Có `?goi=G01|G02|G03`: chọn sẵn đúng gói, hiển thị tóm tắt gói ở cột trái (Desktop) và thanh 1 dòng mở rộng (Mobile).
   - Có `?goi=<mã không tồn tại>`: hiển thị cảnh báo tại trường gói `"Gói này đã thay đổi. Bạn chọn lại một gói nhé."` và đặt về `"Chọn gói"` (không âm thầm gán gói khác).
2. **Đổi gói & Validate tại trường:**
   - Khi khách đổi gói trong `<select>`, phần tóm tắt giá và gói gửi đi cập nhật tức thì; gói hiển thị, gói gửi và gói xác nhận luôn trùng khớp (`FR-006`).
   - Thiếu trường bắt buộc (`Gói quan tâm`, `Tên`, `Số điện thoại/Email`): báo lỗi ngay dưới ô gạch chân bằng chữ màu đất đỏ đậm `#8A2C22`, giữ nguyên dữ liệu đã nhập và đưa focus vào ô lỗi đầu tiên.
3. **Chống gửi trùng & Xác nhận trung thực (`FR-007`):**
   - Khóa nút gửi (`disabled = true`, nhãn `"Đang gửi yêu cầu…"`) trong lúc gửi để chặn double-click.
   - **Chế độ `mode: "formspree"` / `"web3forms"`:** gửi `POST` JSON gồm `packageId`, `packageName`, `areaM2`, `name`, `contactMethod`, `contactValue`, `sourceProject`, `note`, `preferredTime`. **Chỉ chuyển sang trạng thái thành công khi `response.ok === true` (HTTP 2xx)**; nếu lỗi mạng hoặc HTTP ≥ 400, mở lại nút gửi, giữ nguyên toàn bộ dữ liệu và báo `"Yêu cầu chưa gửi được. Thông tin vẫn còn ở đây, bạn có thể thử lại."`.
   - **Chế độ `mode: "demo"` (mặc định bản mẫu):** mô phỏng độ trễ 350ms rồi hiển thị tiêu đề rõ ràng **`Gửi thử thành công`** (tuyệt đối **không** ghi *"Studio đã nhận yêu cầu"* ở chế độ demo!) kèm giải thích minh bạch: *"Đây là thao tác gửi thử trên bản mẫu cho gói [tên gói cuối cùng] qua [kênh đã chọn]. Khi studio gắn nơi tiếp nhận thật, hệ thống chỉ báo đã nhận sau khi yêu cầu đến đúng hộp thư của studio."* Lưu bản ghi thử gần nhất vào `sessionStorage` để hỗ trợ kiểm thử đối chiếu `T029A`/`T038`.
   - **Chế độ `mode: "formspree"` / `"web3forms"` (nhận khách thật):** chỉ sau khi nhận phản hồi `HTTP 2xx` từ cổng tiếp nhận mới hiển thị câu *"Studio đã nhận yêu cầu về [tên gói cuối cùng]. Studio sẽ liên hệ qua [kênh đã chọn] để thống nhất lịch với bạn."*

---

## 7. Quy chuẩn Motion & Trải nghiệm Architectural Monograph (`site/css/`)

- **CSS Variables (`tokens.css`):** Khóa cứng 6 màu vật liệu `#F3F0E8`, `#EAE6DC`, `#1A1B18`, `#5C5E58`, `#3E4A36`, `#D6D1C6` + `Newsreader` + `Be Vietnam Pro` + `border-radius: 0px` + `box-shadow: none` + `accent-color: #3E4A36`.
- **CSS Motion tiết chế (`components.css`):**
  - Chỉ dùng chuyển động đáp lại thao tác người dùng (`180ms ease` đổi màu nút, đổi màu viền gạch chân khi focus, mở/đóng mượt dropdown `Giới thiệu ▾` và Mobile Drawer, mở/đóng `<details>` FAQ).
  - Tuyệt đối không dùng hiệu ứng fade/slide từng khối lặp lại kiểu AI hay hover làm dịch chuyển layout (`translateY`/`scale`).
  - Toàn bộ transition tự tắt trong `@media (prefers-reduced-motion: reduce)`.
- **Phòng lỗi mở trực tiếp bằng `file://`:** Nếu người dùng lỡ bấm đúp mở `site/index.html` qua giao thức `file://` khiến trình duyệt chặn `fetch('data/site-data.json')`, `data-loader.js` sẽ hiển thị 1 thông báo hướng dẫn điềm tĩnh cách chạy `./scripts/preview.sh` (không báo lỗi trắng trang).

---

## 8. Kế hoạch Kiểm thử & Bàn giao Cục bộ

1. **Tự động kiểm tra dữ liệu (`scripts/validate-data.mjs`):** Xác nhận JSON hợp lệ, đủ 3 gói `G01`–`G03`, mọi đường dẫn ảnh trong `site-data.json` đều tồn tại thực tế trong `site/assets/images/`, không còn chuỗi `"CHƯA CHỐT"`.
2. **Kiểm tra sớm hành trình lõi (`T029A`):** Chạy ngay sau `T029` trên `du-an.html` $\rightarrow$ `dich-vu.html` $\rightarrow$ `dat-lich.html` cho cả `G01`, `G02`, `G03`, kiểm tra đổi gói và trạng thái lỗi.
3. **Kiểm thử trình duyệt Desktop & Mobile (`T040`–`T042`):**
   - Desktop: `1280px` & `1440px`, zoom `200%`, điều hướng 100% bằng bàn phím (`Tab`, `Enter`, `Escape`).
   - Mobile: `360px`, `390px`, `430px` dọc (Chrome Headless + DevTools + ít nhất 1 điện thoại thật truy cập qua mạng LAN cục bộ từ `./scripts/preview.sh`).
4. **Đóng gói bàn giao (`T044`–`T045`):** Rà sạch dữ liệu thử (`SC-007`), đảm bảo người mua chỉ cần mở thư mục `site/` và đọc `docs/HUONG-DAN-SUA-TEMPLATE.md` là tự thay toàn bộ nội dung thành công.

---

## 9. Complexity Tracking

Không có vi phạm nào với `constitution.md` (`v1.1.0`): không thêm framework, không thêm backend riêng, không thêm bố cục thứ 10, không tạo checklist tổng thứ hai.
