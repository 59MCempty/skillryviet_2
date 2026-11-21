# Design System Master File — Nếp Studio (Architectural Monograph)

> **LOGIC:** Khi thiết kế hoặc dựng bất kỳ trang nào (`B01`–`B09`), kiểm tra `design-system/pages/[page-name].md` trước.
> Mọi quy tắc toàn cục về **Architectural Monograph**, màu sắc, typography, Menu 5 mục, Footer mới và A11y dưới đây **áp dụng bắt buộc cho 9/9 trang**.

---

**Project:** Nếp Studio (Template Website Nội Thất)
**Standard:** Architectural Monograph × `ui-ux-pro-max` UX/A11y × `constitution.md` (9 Layouts `B01`–`B09`)

---

## 1. Bảng màu vật liệu thật (WCAG AA/AAA)

| Role | Token | Hex | Usage | Contrast |
|------|-------|-----|-------|----------|
| **Background (Primary)** | `--bg-paper` | `#F3F0E8` | Giấy vôi ấm (Warm Lime Paper) — nền chuẩn toàn trang | Nền chuẩn |
| **Surface (Secondary)** | `--bg-limestone` | `#EAE6DC` | Đá vôi nhạt (Light Limestone) — khối CTA, tóm tắt gói | `12.9:1` với `--ink-charcoal` |
| **Text (Primary)** | `--ink-charcoal` | `#1A1B18` | Mực than — tiêu đề, thân bài, nét bản vẽ | `14.5:1` trên `--bg-paper` (AAA) |
| **Text (Muted)** | `--ink-muted` | `#5C5E58` | Chữ phụ, chú thích, thông số | `5.8:1` trên `--bg-paper` (AA) |
| **Accent (Restrained)** | `--accent-moss` | `#3E4A36` | Xanh rêu khói — **tối đa 1 nút chính mỗi viewport** | `8.4:1` với `#F3F0E8` (AAA) |
| **Hairline / Rule** | `--rule-hairline` | `#D6D1C6` | Đường kẻ mảnh `1px solid` phân tách | Cấu trúc |

---

## 2. Typography tiếng Việt 100% chuẩn dấu

- **Tiêu đề có chân (`--font-display`):** `Newsreader` (serif)
- **Thân bài, Menu, Biểu mẫu (`--font-sans`):** `Be Vietnam Pro` (sans-serif)
- **Số liệu, Đơn giá, Diện tích:** `font-variant-numeric: tabular-nums`

```css
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap');
```

---

## 3. Hình học sắc cạnh & Khoảng thở 45–55% (8 Luật Không Mùi AI)

1. **`border-radius: 0px` toàn bộ** (nút, ảnh, hộp tóm tắt, đường kẻ).
2. **0** pill badge, **0** `box-shadow`, **0** nhãn `"Phổ biến"` / `"Gói tiêu biểu"`, **0** icon trang trí dịch vụ (Flaticon/Lucide/emoji), **0** mũi tên `→` lặp lại trên nút/link, **0** gạch ngang `—` thừa.
3. **Không "Card Soup":** Dùng khoảng thở rộng (45–55% diện tích) và đường kẻ ngang mảnh `1px solid #D6D1C6`.
4. **Menu 5 mục gốc (đồng bộ 9/9 trang):**
   - Desktop: `Nếp Studio` (trái) · `Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ` (phải). `Giới thiệu ▾` dùng `<button aria-expanded>` mở đúng 3 dòng: `Bộ sưu tập`, `Chi tiết dự án`, `Dịch vụ và bảng giá` (hỗ trợ `Enter`/`Space`/`Escape`).
   - Mobile: `Nếp Studio` (trái) và `Menu` (phải), vùng chạm tối thiểu `44 × 44px`.
5. **Footer mới (đồng bộ 9/9 trang):**
   - Ngăn cách bằng `1px solid #D6D1C6`.
   - Desktop: Trái (`Nếp Studio`, `Về Nếp Studio`), Phải (`Dịch vụ và bảng giá`, `Liên hệ`), Dưới cùng (`Dự án minh họa · Giá minh họa`).
   - Mobile: Xếp 1 cột, mỗi liên kết 1 dòng (`≥ 44px`), cuối cùng dòng `Dự án minh họa · Giá minh họa`.
6. **Bộ ảnh sạch rời (`./assets/`):** `hien-nang-hero.jpg`, `hien-nang-cua-so.jpg`, `hien-nang-binh-hoa.jpg`, `hien-nang-bep-vom.jpg`, `hien-nang-ke-sach.jpg` kết hợp bản vẽ SVG nét mảnh `stroke-width: 1` vẽ trực tiếp trên nền `#F3F0E8` (không đóng khung hộp).
7. **UX & A11y (`ui-ux-pro-max`):** Mọi `<input>`/`<select>`/`<textarea>` có `<label for="...">`, dùng đúng semantic `type`, Skip link ở đầu trang, focus ring rõ ràng, `prefers-reduced-motion`, không tràn ngang ở `360px`–`1440px`, đọc tốt ở zoom `200%`.
8. **Không lọt chữ nội bộ:** Tuyệt đối không đưa ghi chú dành cho người làm template lên giao diện khách xem (`06`, `09`).
