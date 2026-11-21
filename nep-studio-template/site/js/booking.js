import {
  escapeHtml,
  formatVnd,
  formatPackageRate,
  formatPackageSummaryLine,
  calculatePackageFee,
  interpolatePriceTokens,
  getPackageById,
  getProjectBySlug
} from './data-loader.js';

/**
 * booking.js
 * B06 Đặt lịch: đọc ?goi= & ?du-an=, đổi gói, validate tại trường,
 * chống gửi trùng và phân tách rõ chế độ Demo vs Formspree/Web3Forms.
 */

export function renderBooking(data, mount) {
  const params = new URLSearchParams(window.location.search);
  const rawPkg = params.get('goi') || '';
  const sourceSlug = params.get('du-an') || '';

  const matchedPkg = rawPkg ? getPackageById(data, rawPkg) : null;
  const invalidPkgWarning = Boolean(rawPkg && !matchedPkg);
  const sourceProject = sourceSlug ? getProjectBySlug(data, sourceSlug) : null;

  const state = {
    selectedPkg: matchedPkg ? matchedPkg.id : '',
    areaM2: sourceProject ? String(sourceProject.areaM2 || '') : '',
    name: '',
    method: 'Điện thoại',
    contact: '',
    note: '',
    time: '',
    submitted: false,
    isSending: false,
    submitError: '',
    invalidPkgWarning
  };

  function draw() {
    const pkg = state.selectedPkg ? getPackageById(data, state.selectedPkg) : null;
    const msgs = data.booking?.messages || {};
    const mode = data.booking?.submission?.mode || 'demo';

    const summaryTitle = pkg ? `${pkg.name} · ${formatPackageSummaryLine(pkg)}` : 'Chưa chọn gói cụ thể';
    const summaryScope = pkg
      ? interpolatePriceTokens(pkg.deliverables, data)
      : 'Bạn có thể chọn một trong ba gói tư vấn ngay trong biểu mẫu bên cạnh.';
    const summaryExtra = pkg ? interpolatePriceTokens(pkg.extras, data) : '';

    let estimateLine = '';
    const numericArea = Number(state.areaM2);
    if (pkg && pkg.pricingType === 'per_m2' && numericArea >= 10) {
      const calc = calculatePackageFee(pkg, numericArea);
      estimateLine = `<p class="tabular" style="font-size:14px;font-weight:500;margin-top:8px;">Ước tính cho ${escapeHtml(numericArea)} m²: ${escapeHtml(formatVnd(calc.amount))}${calc.appliedMin ? ' (áp mức tối thiểu)' : ''}</p>`;
    }

    const contextCrumb = sourceProject
      ? `<div class="context-crumb">${escapeHtml(sourceProject.shortName || sourceProject.name)} → ${escapeHtml(pkg ? pkg.name : 'Đặt lịch')} → Đặt lịch</div>`
      : '';

    const pkgOptions = (data.packages || []).map((p) => `
      <option value="${escapeHtml(p.id)}" ${state.selectedPkg === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>
    `).join('');

    const formOrConfirm = state.submitted ? (
      mode === 'demo' ? `
        <div class="confirm-box" role="status" aria-live="polite">
          <span class="eyebrow">Trạng thái: Mô phỏng gửi thử</span>
          <h2>Gửi thử thành công</h2>
          <p>Bản mẫu chỉ mô phỏng thao tác gửi thử cho gói <strong>${escapeHtml(pkg ? pkg.name : 'tư vấn')}</strong> qua <strong>${escapeHtml(state.method)}</strong>. Khi studio gắn nơi tiếp nhận thật, hệ thống mới gửi yêu cầu và báo studio đã tiếp nhận sau khi nhận phản hồi thành công.</p>
          <div class="actions-row">
            <button type="button" class="text-link" data-action="reset-booking">Quay lại biểu mẫu</button>
          </div>
        </div>
      ` : `
        <div class="confirm-box" role="status" aria-live="polite">
          <span class="eyebrow">Trạng thái: Đã tiếp nhận</span>
          <h2>Studio đã nhận yêu cầu về ${escapeHtml(pkg ? pkg.name : 'gói tư vấn')}</h2>
          <p>Studio sẽ liên hệ qua ${escapeHtml(state.method)} để thống nhất lịch với bạn.</p>
          <div class="actions-row">
            <button type="button" class="text-link" data-action="reset-booking">Gửi thêm yêu cầu khác</button>
          </div>
        </div>
      `
    ) : `
      <form novalidate data-action="booking-form">
        <div class="grid-2" style="gap:24px;margin-bottom:0;">
          <div class="field">
            <label for="booking-pkg">Gói quan tâm *</label>
            <select id="booking-pkg" name="pkg" data-field="pkg" required>
              <option value="" ${state.selectedPkg === '' ? 'selected' : ''}>Chọn gói</option>
              ${pkgOptions}
            </select>
            <div class="error-msg ${state.invalidPkgWarning ? 'show' : ''}" data-error="pkg">${escapeHtml(state.invalidPkgWarning ? (msgs.invalidPackage || 'Gói này đã thay đổi. Bạn chọn lại một gói nhé.') : (msgs.missingPackage || 'Bạn chọn một gói dịch vụ nhé.'))}</div>
          </div>
          <div class="field">
            <label for="booking-area">Diện tích ước tính (m²)</label>
            <input id="booking-area" type="number" min="10" placeholder="Ví dụ: 62" value="${escapeHtml(state.areaM2)}" data-field="area" />
          </div>
        </div>

        <div class="field">
          <label for="booking-name">Nếp có thể gọi bạn là gì? *</label>
          <input id="booking-name" type="text" placeholder="Tên của bạn" value="${escapeHtml(state.name)}" data-field="name" required />
          <div class="error-msg" data-error="name">${escapeHtml(msgs.missingName || 'Bạn nhập tên để studio tiện xưng hô nhé.')}</div>
        </div>

        <div class="field">
          <label>Cách liên hệ *</label>
          <div class="radio-row">
            <label class="radio-opt">
              <input type="radio" name="booking-method" value="Điện thoại" ${state.method === 'Điện thoại' ? 'checked' : ''} data-field="method" />
              <span>Điện thoại</span>
            </label>
            <label class="radio-opt">
              <input type="radio" name="booking-method" value="Email" ${state.method === 'Email' ? 'checked' : ''} data-field="method" />
              <span>Email</span>
            </label>
          </div>
          <label for="booking-contact" style="margin-top:8px;">${state.method === 'Email' ? 'Địa chỉ email *' : 'Số điện thoại *'}</label>
          <input id="booking-contact" type="${state.method === 'Email' ? 'email' : 'tel'}" placeholder="${state.method === 'Email' ? 'ten@example.com' : '09xx xxx xxx'}" value="${escapeHtml(state.contact)}" data-field="contact" required />
          <div class="error-msg" data-error="contact">${escapeHtml(msgs.missingContact || 'Bạn nhập số điện thoại hoặc email để studio phản hồi nhé.')}</div>
        </div>

        <div class="field">
          <label for="booking-note">Bạn muốn thay đổi điều gì trong nhà?</label>
          <textarea id="booking-note" rows="2" placeholder="Ví dụ: góc ăn hơi chật khi có khách" data-field="note">${escapeHtml(state.note)}</textarea>
        </div>

        <div class="field">
          <label for="booking-time">Khi nào tiện để studio liên hệ?</label>
          <input id="booking-time" type="text" placeholder="Ví dụ: buổi tối sau 19h hoặc cuối tuần" value="${escapeHtml(state.time)}" data-field="time" />
        </div>

        ${state.submitError ? `<div class="error-msg show" role="alert" style="margin-bottom:16px;">${escapeHtml(state.submitError)}</div>` : ''}

        <div style="margin-top:28px;">
          <button type="submit" class="btn-primary" style="width:100%;" ${state.isSending ? 'disabled' : ''}>
            ${escapeHtml(state.isSending ? (msgs.sending || 'Đang gửi yêu cầu…') : 'Gửi yêu cầu tư vấn')}
          </button>
          <p class="muted" style="font-size:13px;margin:12px 0 4px;">${escapeHtml(msgs.noConfirmNote || 'Gửi yêu cầu chưa phải xác nhận lịch hẹn.')}</p>
          <p class="muted" style="font-size:13px;margin:0;">${escapeHtml(msgs.privacyNote || 'Studio sẽ dùng thông tin bạn gửi để trao đổi về yêu cầu này.')}</p>
        </div>
      </form>
    `;

    mount.innerHTML = `
      <section class="container">
        ${contextCrumb}
        <span class="eyebrow">Đặt lịch tư vấn</span>
        <h1 style="margin-bottom:32px;">Bạn muốn trao đổi về căn hộ nào?</h1>

        <div class="mobile-summary-line">
          <button type="button" class="mobile-summary-trigger" aria-expanded="false" data-action="toggle-mobile-summary">
            <span class="tabular">Đang chọn: ${escapeHtml(pkg ? `${pkg.name} · ${formatPackageRate(pkg)}` : 'Chọn gói')}</span>
            <span style="text-decoration:underline;text-underline-offset:3px;flex-shrink:0;">Xem chi tiết</span>
          </button>
          <div class="mobile-summary-detail" data-mobile-summary-detail>
            <p style="margin-bottom:8px;"><strong>${escapeHtml(summaryTitle)}</strong></p>
            ${estimateLine}
            <p style="margin-bottom:8px;">${escapeHtml(summaryScope)}</p>
            ${summaryExtra ? `<p style="margin-bottom:0;">${escapeHtml(summaryExtra)}</p>` : ''}
          </div>
        </div>

        <div class="booking-grid">
          <aside class="summary-box booking-sidebar-desktop">
            <span class="eyebrow">Gói dịch vụ đang chọn</span>
            <h3 class="tabular">${escapeHtml(summaryTitle)}</h3>
            ${estimateLine}
            <p style="font-size:14px;">${escapeHtml(summaryScope)}</p>
            ${summaryExtra ? `<p class="muted" style="font-size:13px;">${escapeHtml(summaryExtra)}</p>` : ''}
            <div style="border-top:1px solid var(--rule-hairline);margin-top:20px;padding-top:16px;font-size:14px;">
              <div style="margin-bottom:8px;"><span class="tabular muted">01.</span> Tiếp nhận yêu cầu</div>
              <div style="margin-bottom:8px;"><span class="tabular muted">02.</span> Liên hệ thống nhất giờ</div>
              <div><span class="tabular muted">03.</span> Trao đổi phương án</div>
            </div>
          </aside>
          <div>${formOrConfirm}</div>
        </div>
      </section>
    `;

    bindBookingEvents(mount, data, state, draw);
  }

  draw();
}

function bindBookingEvents(mount, data, state, draw) {
  const summaryBtn = mount.querySelector('[data-action="toggle-mobile-summary"]');
  const summaryDetail = mount.querySelector('[data-mobile-summary-detail]');
  if (summaryBtn && summaryDetail) {
    summaryBtn.addEventListener('click', () => {
      const isOpen = summaryDetail.classList.toggle('open');
      summaryBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const resetBtn = mount.querySelector('[data-action="reset-booking"]');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.submitted = false;
      state.submitError = '';
      draw();
    });
  }

  const pkgSelect = mount.querySelector('[data-field="pkg"]');
  if (pkgSelect) {
    pkgSelect.addEventListener('change', (e) => {
      state.selectedPkg = e.target.value;
      state.invalidPkgWarning = false;
      draw();
    });
  }

  const areaInput = mount.querySelector('[data-field="area"]');
  if (areaInput) {
    areaInput.addEventListener('input', (e) => {
      state.areaM2 = e.target.value;
    });
    areaInput.addEventListener('change', (e) => {
      state.areaM2 = e.target.value;
      draw();
    });
  }

  const nameInput = mount.querySelector('[data-field="name"]');
  if (nameInput) {
    nameInput.addEventListener('input', (e) => { state.name = e.target.value; });
  }

  mount.querySelectorAll('[data-field="method"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
      state.method = e.target.value;
      draw();
    });
  });

  const contactInput = mount.querySelector('[data-field="contact"]');
  if (contactInput) {
    contactInput.addEventListener('input', (e) => { state.contact = e.target.value; });
  }

  const noteInput = mount.querySelector('[data-field="note"]');
  if (noteInput) {
    noteInput.addEventListener('input', (e) => { state.note = e.target.value; });
  }

  const timeInput = mount.querySelector('[data-field="time"]');
  if (timeInput) {
    timeInput.addEventListener('input', (e) => { state.time = e.target.value; });
  }

  const form = mount.querySelector('[data-action="booking-form"]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (state.isSending) return;

      const msgs = data.booking?.messages || {};
      form.querySelectorAll('.error-msg').forEach((el) => el.classList.remove('show'));
      state.submitError = '';

      let firstInvalid = null;
      if (!state.selectedPkg) {
        const err = form.querySelector('[data-error="pkg"]');
        err.textContent = msgs.missingPackage || 'Bạn chọn một gói dịch vụ nhé.';
        err.classList.add('show');
        firstInvalid = firstInvalid || pkgSelect;
      }
      if (!state.name.trim()) {
        form.querySelector('[data-error="name"]').classList.add('show');
        firstInvalid = firstInvalid || nameInput;
      }
      if (!state.contact.trim()) {
        form.querySelector('[data-error="contact"]').classList.add('show');
        firstInvalid = firstInvalid || contactInput;
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const pkg = getPackageById(data, state.selectedPkg);
      const submission = data.booking?.submission || { mode: 'demo' };
      const payload = {
        packageId: state.selectedPkg,
        packageName: pkg ? pkg.name : state.selectedPkg,
        areaM2: state.areaM2 || '',
        name: state.name.trim(),
        contactMethod: state.method,
        contactValue: state.contact.trim(),
        sourceProject: new URLSearchParams(window.location.search).get('du-an') || '',
        note: state.note.trim(),
        preferredTime: state.time.trim()
      };

      state.isSending = true;
      draw();

      try {
        if (submission.mode === 'demo') {
          await new Promise((r) => setTimeout(r, 350));
          try {
            sessionStorage.setItem('nep_last_booking_demo', JSON.stringify(payload));
          } catch {}
          state.isSending = false;
          state.submitted = true;
          draw();
          return;
        }

        const endpoint = submission.endpoint;
        if (!endpoint) {
          throw new Error('MISSING_ENDPOINT');
        }

        const bodyPayload = submission.mode === 'web3forms'
          ? { access_key: submission.accessKey || '', subject: `Yêu cầu tư vấn: ${payload.packageName}`, ...payload }
          : payload;

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(bodyPayload)
        });

        if (!res.ok) {
          throw new Error(`HTTP_${res.status}`);
        }

        state.isSending = false;
        state.submitted = true;
        draw();
      } catch {
        state.isSending = false;
        state.submitError = msgs.error || 'Yêu cầu chưa gửi được. Thông tin vẫn còn ở đây, bạn có thể thử lại.';
        draw();
      }
    });
  }
}
