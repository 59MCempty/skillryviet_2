/**
 * drawings.js
 * Bản vẽ SVG kiến trúc nét mảnh (stroke-width: 1) trực tiếp trên nền #F3F0E8.
 */

export const SVG_FLOORPLAN_2D = `
  <svg viewBox="0 0 420 220" width="100%" height="auto" role="img" aria-label="Bản vẽ mặt bằng 2D Trước và Sau khi xoay bàn ăn về phía băng ghế cửa sổ" style="display:block;max-width:420px;">
    <rect x="20" y="20" width="380" height="170" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <line x1="20" y1="70" x2="20" y2="140" stroke="#3E4A36" stroke-width="3"/>
    <text x="20" y="13" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#3E4A36">Cửa sổ nắng</text>
    <rect x="24" y="42" width="22" height="124" fill="#EAE6DC" stroke="#1A1B18" stroke-width="1"/>
    <rect x="130" y="65" width="70" height="44" fill="none" stroke="#5C5E58" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="132" y="57" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Trước</text>
    <line x1="122" y1="88" x2="88" y2="88" stroke="#3E4A36" stroke-width="1"/>
    <polyline points="94,84 88,88 94,92" fill="none" stroke="#3E4A36" stroke-width="1"/>
    <rect x="50" y="65" width="44" height="78" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <rect x="102" y="75" width="10" height="22" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <rect x="102" y="111" width="10" height="22" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="52" y="57" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#1A1B18">Sau (5–6 chỗ)</text>
    <rect x="290" y="20" width="110" height="36" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="315" y="42" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Bếp mở</text>
    <path d="M 280 190 A 24 24 0 0 1 328 190" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="276" y="208" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Vòm hành lang</text>
  </svg>
`;

export const SVG_FLOORPLAN_GOC_SANG = `
  <svg viewBox="0 0 420 220" width="100%" height="auto" role="img" aria-label="Bản vẽ mặt bằng 2D căn hộ studio Góc Sáng 32 m² với vách lam lửng nối bàn làm việc" style="display:block;max-width:420px;">
    <rect x="20" y="20" width="380" height="170" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <line x1="20" y1="54" x2="20" y2="156" stroke="#3E4A36" stroke-width="3"/>
    <text x="20" y="13" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#3E4A36">Ban công đón sáng</text>
    <rect x="44" y="34" width="84" height="34" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="52" y="55" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#1A1B18">Bàn làm việc</text>
    <line x1="138" y1="26" x2="138" y2="112" stroke="#3E4A36" stroke-width="3"/>
    <text x="146" y="42" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#3E4A36">Vách lam 1,4 m</text>
    <rect x="162" y="54" width="110" height="72" fill="#EAE6DC" stroke="#1A1B18" stroke-width="1"/>
    <text x="190" y="94" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#1A1B18">Giường ngủ</text>
    <rect x="52" y="122" width="44" height="44" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="56" y="148" font-family="Be Vietnam Pro, sans-serif" font-size="9" fill="#5C5E58">Bàn 2 chỗ</text>
    <rect x="308" y="20" width="92" height="42" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="330" y="45" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Tủ bếp</text>
    <line x1="36" y1="104" x2="294" y2="104" stroke="#5C5E58" stroke-width="1" stroke-dasharray="4 3" opacity="0.65"/>
    <text x="148" y="176" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Gió &amp; ánh sáng xuyên suốt</text>
  </svg>
`;

export const SVG_FLOORPLAN_BEP_LANH = `
  <svg viewBox="0 0 420 220" width="100%" height="auto" role="img" aria-label="Bản vẽ mặt bằng 2D căn hộ Bếp Lành 48 m² giữ nguyên bếp cũ và bổ sung kệ đảo mảnh 45 cm" style="display:block;max-width:420px;">
    <rect x="20" y="20" width="380" height="170" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <line x1="20" y1="50" x2="20" y2="145" stroke="#3E4A36" stroke-width="3"/>
    <text x="20" y="13" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#3E4A36">Cửa sổ chính</text>
    <rect x="242" y="20" width="158" height="34" fill="#EAE6DC" stroke="#1A1B18" stroke-width="1"/>
    <text x="266" y="41" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#1A1B18">Tủ bếp giữ nguyên</text>
    <rect x="254" y="80" width="96" height="24" fill="none" stroke="#3E4A36" stroke-width="1.5"/>
    <text x="258" y="96" font-family="Be Vietnam Pro, sans-serif" font-size="9" fill="#3E4A36">Kệ đảo mảnh 45 cm</text>
    <rect x="74" y="34" width="108" height="42" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="92" y="59" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#1A1B18">Bàn ăn xoay dọc</text>
    <rect x="132" y="102" width="76" height="44" fill="none" stroke="#5C5E58" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="140" y="128" font-family="Be Vietnam Pro, sans-serif" font-size="9" fill="#5C5E58">Vị trí cũ (vướng)</text>
    <line x1="34" y1="146" x2="354" y2="146" stroke="#3E4A36" stroke-width="1" stroke-dasharray="5 3"/>
    <polyline points="346,142 354,146 346,150" fill="none" stroke="#3E4A36" stroke-width="1"/>
    <text x="116" y="168" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#3E4A36">Trục sáng &amp; lối đi rộng 90 cm qua vòm</text>
    <path d="M 358 190 A 20 20 0 0 1 398 190" fill="none" stroke="#1A1B18" stroke-width="1"/>
  </svg>
`;

export function getProjectFloorplanSvg(type) {
  if (type === 'goc-sang') return SVG_FLOORPLAN_GOC_SANG;
  if (type === 'bep-lanh') return SVG_FLOORPLAN_BEP_LANH;
  return SVG_FLOORPLAN_2D;
}

export const SVG_WORKDESK = `
  <svg viewBox="0 0 420 200" width="100%" height="auto" role="img" aria-label="Minh họa kiến trúc góc bàn làm việc với tờ mặt bằng 2D và mẫu vật liệu" style="display:block;max-width:420px;">
    <line x1="16" y1="176" x2="404" y2="176" stroke="#1A1B18" stroke-width="1"/>
    <rect x="36" y="34" width="190" height="122" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <rect x="52" y="50" width="110" height="86" fill="none" stroke="#5C5E58" stroke-width="1"/>
    <line x1="90" y1="50" x2="90" y2="136" stroke="#D6D1C6" stroke-width="1"/>
    <line x1="52" y1="92" x2="162" y2="92" stroke="#D6D1C6" stroke-width="1"/>
    <text x="52" y="148" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Hồ sơ mặt bằng 1:50</text>
    <rect x="36" y="162" width="140" height="8" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <line x1="64" y1="162" x2="64" y2="170" stroke="#1A1B18" stroke-width="1"/>
    <line x1="92" y1="162" x2="92" y2="170" stroke="#1A1B18" stroke-width="1"/>
    <line x1="120" y1="162" x2="120" y2="170" stroke="#1A1B18" stroke-width="1"/>
    <rect x="256" y="42" width="60" height="60" fill="#EAE6DC" stroke="#1A1B18" stroke-width="1"/>
    <text x="256" y="116" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Gỗ sồi tự nhiên</text>
    <rect x="330" y="42" width="60" height="60" fill="#3E4A36" stroke="#1A1B18" stroke-width="1"/>
    <text x="330" y="116" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Vải lanh ô liu</text>
  </svg>
`;

export const SVG_CHAIR_PULL = `
  <svg viewBox="0 0 420 210" width="100%" height="auto" role="img" aria-label="Sơ đồ khoảng lùi kéo ghế ra khỏi bàn ăn và lối đi từ bếp" style="display:block;max-width:420px;">
    <rect x="44" y="48" width="130" height="80" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="86" y="92" font-family="Be Vietnam Pro, sans-serif" font-size="11" fill="#1A1B18">Bàn ăn</text>
    <rect x="180" y="66" width="28" height="44" fill="none" stroke="#5C5E58" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="224" y="66" width="32" height="44" fill="#EAE6DC" stroke="#1A1B18" stroke-width="1"/>
    <line x1="174" y1="146" x2="256" y2="146" stroke="#3E4A36" stroke-width="1"/>
    <line x1="174" y1="140" x2="174" y2="152" stroke="#3E4A36" stroke-width="1"/>
    <line x1="256" y1="140" x2="256" y2="152" stroke="#3E4A36" stroke-width="1"/>
    <text x="176" y="166" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#3E4A36">Khoảng kéo ghế 60–75 cm</text>
    <line x1="320" y1="24" x2="320" y2="172" stroke="#1A1B18" stroke-width="1" stroke-dasharray="5 4"/>
    <polyline points="315,34 320,24 325,34" fill="none" stroke="#1A1B18" stroke-width="1"/>
    <text x="278" y="190" font-family="Be Vietnam Pro, sans-serif" font-size="10" fill="#5C5E58">Lối đi từ bếp</text>
  </svg>
`;
