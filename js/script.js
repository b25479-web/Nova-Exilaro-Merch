/**
 * script.js
 * ------------------------------------------------------------
 * All interactive behaviour for the Nova Exilaro merch site.
 * Depends on PRODUCTS / SETTINGS from products.js (loaded first).
 */

(function () {
  'use strict';

  // ============================================================
  // State
  // ============================================================

  const state = {
    cart: [],              // { lineId, code, name, price, image, size, extraFieldValue, extraFieldLabel, qty }
    activeFilter: 'All',
    lightbox: { images: [], index: 0, caption: '' },
    screenshot: null,      // { base64, mimeType, fileName, previewUrl }
    useCautionDeposit: false,
    persona: 'delhi',      // 'delhi' | 'faculty' | 'jamshedpur' | 'alum'
    acknowledged: false
  };

  let lineIdCounter = 1;

  // ============================================================
  // Utilities
  // ============================================================

  function formatINR(amount) {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  function qs(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  function qsa(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  // ============================================================
  // Toast
  // ============================================================

  const toastEl = qs('#toast');
  let toastTimer = null;

  function showToast(message) {
    toastEl.querySelector('span:last-child').textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 2200);
  }

  // ============================================================
  // Navbar
  // ============================================================

  function initNav() {
    const navbar = qs('#navbar');
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });

    qs('#cartTrigger').addEventListener('click', openCart);
  }

  // ============================================================
  // Product rendering
  // ============================================================

  const gridEl = qs('#productGrid');

  function renderProducts() {
    gridEl.innerHTML = '';
    const list = state.activeFilter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(function (p) { return p.section === state.activeFilter; });

    list.forEach(function (product) {
      gridEl.appendChild(buildProductCard(product));
    });
    syncAllCardControls();
  }

  function cartLinesForBaseSelection(code) {
    return state.cart.filter(function (l) { return l.code === code; });
  }

  function buildProductCard(product) {
    const cardState = {
      size: null,
      groupSizes: {},
      extraValue: ''
    };

    const card = el('div', 'product-card');
    card.dataset.code = product.code;

    // --- media (contain-fit so the full catalogue photo is always
    //     visible — no cropping — with a simple front/back carousel
    //     for products that have more than one shot) ---
    const mediaState = { index: 0 };
    const media = el('div', 'product-media');
    const img = el('img');
    img.src = product.images[0];
    img.alt = product.name;
    img.loading = 'lazy';
    media.appendChild(img);

    const hasMultiple = product.images.length > 1;

    if (hasMultiple) {
      const prevBtn = el('button', 'media-nav prev');
      prevBtn.type = 'button';
      prevBtn.setAttribute('aria-label', 'Previous image');
      prevBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg>';
      const nextBtn = el('button', 'media-nav next');
      nextBtn.type = 'button';
      nextBtn.setAttribute('aria-label', 'Next image');
      nextBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg>';

      const dots = el('div', 'media-dots');
      product.images.forEach(function (_, i) {
        const dot = el('span', 'media-dot' + (i === 0 ? ' active' : ''));
        dots.appendChild(dot);
      });

      function step(dir) {
        mediaState.index = (mediaState.index + dir + product.images.length) % product.images.length;
        img.src = product.images[mediaState.index];
        qsa('.media-dot', dots).forEach(function (d, i) {
          d.classList.toggle('active', i === mediaState.index);
        });
      }

      prevBtn.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
      nextBtn.addEventListener('click', function (e) { e.stopPropagation(); step(1); });

      media.appendChild(prevBtn);
      media.appendChild(nextBtn);
      media.appendChild(dots);

      let touchStartX = 0;
      media.addEventListener('touchstart', function (e) { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
      media.addEventListener('touchend', function (e) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 30) step(dx > 0 ? -1 : 1);
      }, { passive: true });
    }

    const expandBtn = el('button', 'product-expand');
    expandBtn.type = 'button';
    expandBtn.setAttribute('aria-label', 'Expand image');
    expandBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6"/></svg>';
    media.appendChild(expandBtn);

    expandBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      openLightbox(product.images, mediaState.index, product.name);
    });

    card.appendChild(media);

    // --- body ---
    const body = el('div', 'product-body');

    const top = el('div', 'product-top');
    top.appendChild(el('div', 'product-name', product.name));
    top.appendChild(el('div', 'product-price', formatINR(product.price)));
    body.appendChild(top);

    body.appendChild(el('div', 'product-desc', product.description));

    const options = el('div', 'product-options');

    function buildOptionLabel(text, guideImage) {
      if (!guideImage) return el('div', 'option-label', text);
      const wrap = el('div', 'option-label-row');
      wrap.appendChild(el('span', 'option-label', text));
      const guideBtn = el('button', 'size-guide-link', 'Size Guide');
      guideBtn.type = 'button';
      guideBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openLightbox([guideImage], 0, 'Size Guide');
      });
      wrap.appendChild(guideBtn);
      return wrap;
    }

    // single size selector
    if (product.requiresSize) {
      options.appendChild(buildOptionLabel('Size', product.sizeGuideImage));
      const row = el('div', 'size-row');
      product.sizes.forEach(function (size) {
        const pill = el('button', 'size-pill', size);
        pill.type = 'button';
        pill.addEventListener('click', function () {
          cardState.size = size;
          qsa('.size-pill', row).forEach(function (p) { p.classList.remove('active'); });
          pill.classList.add('active');
          syncControls();
        });
        row.appendChild(pill);
      });
      options.appendChild(row);
    }

    // multiple independent size choices (e.g. co-ord set: top + bottom)
    if (product.sizeGroups) {
      product.sizeGroups.forEach(function (group) {
        options.appendChild(buildOptionLabel(group.label, product.sizeGuideImage));
        const row = el('div', 'size-row');
        group.options.forEach(function (size) {
          const pill = el('button', 'size-pill', size);
          pill.type = 'button';
          pill.addEventListener('click', function () {
            cardState.groupSizes[group.key] = size;
            qsa('.size-pill', row).forEach(function (p) { p.classList.remove('active'); });
            pill.classList.add('active');
            syncControls();
          });
          row.appendChild(pill);
        });
        options.appendChild(row);
      });
    }

    // extra field: text or select
    if (product.extraField) {
      const label = el('div', 'option-label', product.extraField.label);
      options.appendChild(label);

      if (product.extraField.type === 'text') {
        const input = el('input', 'text-field');
        input.type = 'text';
        input.placeholder = product.extraField.placeholder || '';
        input.maxLength = product.extraField.maxLength || 30;
        input.addEventListener('input', function () {
          cardState.extraValue = input.value.trim();
          syncControls();
        });
        options.appendChild(input);
        options.appendChild(el('div', 'field-hint', 'Up to ' + (product.extraField.maxLength || 30) + ' characters'));
      } else if (product.extraField.type === 'select') {
        const select = el('select', 'text-field select-field');
        const placeholderOpt = el('option', '', 'Select ' + product.extraField.label);
        placeholderOpt.value = '';
        select.appendChild(placeholderOpt);
        product.extraField.options.forEach(function (opt) {
          const optionEl = el('option', '', opt);
          optionEl.value = opt;
          select.appendChild(optionEl);
        });
        select.addEventListener('change', function () {
          cardState.extraValue = select.value;
          syncControls();
        });
        options.appendChild(select);
      }
    }

    body.appendChild(options);

    // --- add-to-cart / quantity stepper zone ---
    const actionZone = el('div', 'card-action-zone');
    const addBtn = el('button', 'add-cart-btn', '<span>Add to Cart</span>');
    addBtn.type = 'button';
    actionZone.appendChild(addBtn);
    body.appendChild(actionZone);

    function composeGroupSize() {
      if (!product.sizeGroups) return null;
      const allFilled = product.sizeGroups.every(function (g) { return cardState.groupSizes[g.key]; });
      if (!allFilled) return null;
      return product.sizeGroups.map(function (g) {
        return g.label + ': ' + cardState.groupSizes[g.key];
      }).join(' · ');
    }

    function needsSize() {
      if (product.sizeGroups) {
        return product.sizeGroups.some(function (g) { return !cardState.groupSizes[g.key]; });
      }
      return product.requiresSize && !cardState.size;
    }
    function needsExtra() {
      if (!product.extraField) return false;
      return cardState.extraValue.length === 0;
    }

    function currentSizeValue() {
      return product.sizeGroups ? composeGroupSize() : cardState.size;
    }

    function matchingLine() {
      return state.cart.find(function (l) {
        return l.code === product.code &&
          l.size === currentSizeValue() &&
          l.extraFieldValue === (cardState.extraValue || null);
      });
    }

    function syncControls() {
      const existing = matchingLine();
      if (existing) {
        renderStepper(existing);
      } else {
        renderAddButton();
      }
    }

    function renderAddButton() {
      actionZone.innerHTML = '';
      const btn = el('button', 'add-cart-btn', '<span>Add to Cart</span>');
      btn.type = 'button';
      btn.disabled = needsSize() || needsExtra();
      btn.addEventListener('click', function () {
        if (needsSize() || needsExtra()) {
          showToast(needsSize() ? 'Select a size first' : 'Complete the required field first');
          return;
        }
        addToCart({
          code: product.code,
          name: product.name,
          price: product.price,
          image: product.images[0],
          size: currentSizeValue(),
          extraFieldValue: cardState.extraValue || null,
          extraFieldLabel: product.extraField ? product.extraField.label : null
        });
        syncControls();
      });
      actionZone.appendChild(btn);
    }

    function renderStepper(line) {
      actionZone.innerHTML = '';
      const stepper = el('div', 'card-qty-stepper');
      const minus = el('button', 'card-qty-btn', '−');
      minus.type = 'button';
      minus.addEventListener('click', function () {
        changeQty(line.lineId, -1);
        syncControls();
      });
      const val = el('span', 'card-qty-value', String(line.qty));
      const plus = el('button', 'card-qty-btn', '+');
      plus.type = 'button';
      plus.addEventListener('click', function () {
        changeQty(line.lineId, 1);
        syncControls();
      });
      stepper.appendChild(minus);
      stepper.appendChild(val);
      stepper.appendChild(plus);
      actionZone.appendChild(stepper);
    }

    // expose for global refresh (e.g. after cart drawer changes qty)
    card._syncControls = syncControls;
    syncControls();

    card.appendChild(body);
    return card;
  }

  function syncAllCardControls() {
    qsa('.product-card', gridEl).forEach(function (card) {
      if (card._syncControls) card._syncControls();
    });
  }

  function initFilters() {
    qsa('.filter-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        qsa('.filter-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        state.activeFilter = tab.dataset.filter;
        renderProducts();
      });
    });
  }

  // ============================================================
  // Lightbox
  // ============================================================

  const lightboxEl = qs('#lightbox');
  const lightboxImg = qs('#lightboxImg');
  const lightboxCaption = qs('#lightboxCaption');
  const lightboxPrev = qs('#lightboxPrev');
  const lightboxNext = qs('#lightboxNext');

  function openLightbox(images, startIndex, caption) {
    state.lightbox = { images: images, index: startIndex || 0, caption: caption || '' };
    renderLightbox();
    lightboxEl.classList.add('open');
    document.body.classList.add('lock-scroll');
  }

  function closeLightbox() {
    lightboxEl.classList.remove('open');
    document.body.classList.remove('lock-scroll');
    lightboxImg.classList.remove('zoomed');
  }

  function renderLightbox() {
    const { images, index, caption } = state.lightbox;
    lightboxImg.classList.remove('zoomed');
    lightboxImg.src = images[index];
    lightboxCaption.textContent = caption + (images.length > 1 ? '  ·  ' + (index + 1) + ' / ' + images.length : '');
    lightboxPrev.disabled = images.length <= 1;
    lightboxNext.disabled = images.length <= 1;
  }

  function lightboxStep(dir) {
    const { images } = state.lightbox;
    if (images.length <= 1) return;
    state.lightbox.index = (state.lightbox.index + dir + images.length) % images.length;
    renderLightbox();
  }

  function initLightbox() {
    qs('#lightboxClose').addEventListener('click', closeLightbox);
    lightboxEl.addEventListener('click', function (e) {
      if (e.target === lightboxEl) closeLightbox();
    });
    lightboxPrev.addEventListener('click', function () { lightboxStep(-1); });
    lightboxNext.addEventListener('click', function () { lightboxStep(1); });
    lightboxImg.addEventListener('click', function () {
      lightboxImg.classList.toggle('zoomed');
    });

    document.addEventListener('keydown', function (e) {
      if (!lightboxEl.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxStep(-1);
      if (e.key === 'ArrowRight') lightboxStep(1);
    });

    let touchStartX = 0;
    const stage = qs('#lightboxStage');
    stage.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        lightboxStep(dx > 0 ? -1 : 1);
      }
    }, { passive: true });
  }

  // ============================================================
  // Discount progress bar (persistent, updates on every cart change)
  // ============================================================

  const progressBar = qs('#progressBar');
  const progressFill = qs('#progressFill');
  const progressText = qs('#progressText');

  function updateProgressBar() {
    const total = cartTotal();

    if (total <= 0) {
      progressBar.classList.remove('show');
      return;
    }
    progressBar.classList.add('show');

    if (total > SETTINGS.discountThreshold) {
      progressFill.style.width = '100%';
      progressBar.classList.add('unlocked');
      progressText.textContent = '₹' + SETTINGS.discountCap + ' discount unlocked on this order';
    } else {
      const remaining = SETTINGS.discountThreshold - total;
      const pct = Math.min(100, (total / SETTINGS.discountThreshold) * 100);
      progressFill.style.width = pct + '%';
      progressBar.classList.remove('unlocked');
      progressText.textContent = formatINR(remaining) + ' away from ₹' + SETTINGS.discountCap + ' off (shop ₹' + SETTINGS.discountThreshold.toLocaleString('en-IN') + '+)';
    }
  }

  // ============================================================
  // Cart
  // ============================================================

  const cartDrawer = qs('#cartDrawer');
  const overlayEl = qs('#overlay');
  const cartBadge = qs('#cartBadge');

  function addToCart(item) {
    const existing = state.cart.find(function (line) {
      return line.code === item.code &&
        line.size === item.size &&
        line.extraFieldValue === item.extraFieldValue;
    });
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push(Object.assign({ lineId: lineIdCounter++, qty: 1 }, item));
    }
    renderCart();
    updateCartBadge();
    renderBillingSummary();
    updateProgressBar();
    showToast(item.name + ' added to cart');
  }

  function changeQty(lineId, delta) {
    const line = state.cart.find(function (l) { return l.lineId === lineId; });
    if (!line) return;
    line.qty += delta;
    if (line.qty <= 0) {
      state.cart = state.cart.filter(function (l) { return l.lineId !== lineId; });
    }
    renderCart();
    updateCartBadge();
    renderBillingSummary();
    updateProgressBar();
    syncAllCardControls();
  }

  function removeLine(lineId) {
    state.cart = state.cart.filter(function (l) { return l.lineId !== lineId; });
    renderCart();
    updateCartBadge();
    renderBillingSummary();
    updateProgressBar();
    syncAllCardControls();
  }

  function cartCount() {
    return state.cart.reduce(function (sum, l) { return sum + l.qty; }, 0);
  }

  function cartTotal() {
    return state.cart.reduce(function (sum, l) { return sum + l.qty * l.price; }, 0);
  }

  function updateCartBadge() {
    const count = cartCount();
    cartBadge.textContent = count;
    cartBadge.classList.toggle('show', count > 0);
  }

  function metaLine(item) {
    const parts = [];
    // Composite sizes (from multi-part products like the co-ord set)
    // already read naturally on their own, e.g. "Half Zipper Size: M".
    if (item.size) parts.push(item.size.indexOf(':') === -1 ? 'Size ' + item.size : item.size);
    if (item.extraFieldValue) parts.push(item.extraFieldLabel + ': ' + item.extraFieldValue);
    return parts.join(' · ') || item.code;
  }

  function renderCart() {
    const body = qs('#drawerBody');
    const footer = qs('#drawerFooter');
    body.innerHTML = '';

    if (state.cart.length === 0) {
      body.appendChild(el('div', 'cart-empty',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
        '<span>Your cart is empty</span>'));
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'flex';

    state.cart.forEach(function (line) {
      const item = el('div', 'cart-item');

      const imgWrap = el('div', 'cart-item-img');
      const img = el('img');
      img.src = line.image;
      img.alt = line.name;
      imgWrap.appendChild(img);
      item.appendChild(imgWrap);

      const info = el('div', 'cart-item-info');
      info.appendChild(el('div', 'cart-item-name', line.name));
      info.appendChild(el('div', 'cart-item-meta', metaLine(line)));

      const bottom = el('div', 'cart-item-bottom');
      const qtyControl = el('div', 'qty-control');
      const minus = el('button', '', '−');
      minus.type = 'button';
      minus.addEventListener('click', function () { changeQty(line.lineId, -1); });
      const qtyVal = el('span', 'qty-value', String(line.qty));
      const plus = el('button', '', '+');
      plus.type = 'button';
      plus.addEventListener('click', function () { changeQty(line.lineId, 1); });
      qtyControl.appendChild(minus);
      qtyControl.appendChild(qtyVal);
      qtyControl.appendChild(plus);
      bottom.appendChild(qtyControl);
      bottom.appendChild(el('div', 'cart-item-price', formatINR(line.price * line.qty)));
      info.appendChild(bottom);

      const removeBtn = el('button', 'remove-item', 'Remove');
      removeBtn.type = 'button';
      removeBtn.addEventListener('click', function () { removeLine(line.lineId); });
      info.appendChild(removeBtn);

      item.appendChild(info);
      body.appendChild(item);
    });

    qs('#drawerSubtotalValue').textContent = formatINR(cartTotal());
  }

  function openCart() {
    renderCart();
    cartDrawer.classList.add('open');
    overlayEl.classList.add('open');
    document.body.classList.add('lock-scroll');
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    overlayEl.classList.remove('open');
    document.body.classList.remove('lock-scroll');
  }

  function initCart() {
    qs('#drawerClose').addEventListener('click', closeCart);
    overlayEl.addEventListener('click', function () {
      closeCart();
      closeLightbox();
    });
    qs('#drawerCheckoutBtn').addEventListener('click', function () {
      if (state.cart.length === 0) {
        showToast('Your cart is empty');
        return;
      }
      closeCart();
      openCheckout();
    });
  }

  // ============================================================
  // Billing logic
  // ------------------------------------------------------------
  // Discount = min(cartTotal - 5000, 500), only if cartTotal > 5000.
  // Independent of the caution deposit toggle.
  //
  // If using caution deposit:
  //   cautionUsed = min(cartTotal, 5000)
  //   transferAmount = cartTotal − cautionUsed − discount
  // Else:
  //   transferAmount = cartTotal − discount
  // Never negative.
  // ============================================================

  function computeBilling() {
    const total = cartTotal();

    const discount = total > SETTINGS.discountThreshold
      ? Math.min(total - SETTINGS.discountThreshold, SETTINGS.discountCap)
      : 0;

    let cautionUsed = 0;
    let transferAmount;

    if (state.useCautionDeposit) {
      cautionUsed = Math.min(total, SETTINGS.cautionDepositLimit);
      transferAmount = Math.max(0, total - cautionUsed - discount);
    } else {
      transferAmount = Math.max(0, total - discount);
    }

    return { total: total, cautionUsed: cautionUsed, discount: discount, transferAmount: transferAmount };
  }

  function renderBillingSummary() {
    const billing = computeBilling();

    const lineItemsEl = qs('#billingLineItems');
    lineItemsEl.innerHTML = '';
    state.cart.forEach(function (line) {
      const row = el('div', 'cart-line-item');
      row.innerHTML = '<span>' + line.name + ' × ' + line.qty + '</span><span>' + formatINR(line.price * line.qty) + '</span>';
      lineItemsEl.appendChild(row);
    });

    qs('#billingCartTotal').textContent = formatINR(billing.total);
    qs('#billingCautionUsed').textContent = '− ' + formatINR(billing.cautionUsed);
    qs('#billingDiscount').textContent = '− ' + formatINR(billing.discount);
    qs('#billingTransfer').textContent = formatINR(billing.transferAmount);

    qs('#billingCautionRow').style.display = state.useCautionDeposit ? 'flex' : 'none';
    qs('#billingDiscountRow').style.display = billing.discount > 0 ? 'flex' : 'none';

    const hintEl = qs('#uploadHint');
    if (hintEl) {
      hintEl.textContent = billing.transferAmount > 0
        ? 'Required — PNG or JPG'
        : 'Optional — your order is fully covered, nothing to transfer';
    }

    return billing;
  }

  function initCautionToggle() {
    const toggle = qs('#cautionToggle');
    toggle.addEventListener('click', function () {
      if (state.persona !== 'delhi') {
        showToast('Caution deposit is only available for XLRI Delhi-NCR students');
        return;
      }
      state.useCautionDeposit = !state.useCautionDeposit;
      toggle.classList.toggle('on', state.useCautionDeposit);
      qs('#acknowledgeRow').style.display = state.useCautionDeposit ? 'flex' : 'none';
      if (!state.useCautionDeposit) {
        state.acknowledged = false;
        qs('#acknowledgeCheck').checked = false;
      }
      renderBillingSummary();
    });
  }

  // ============================================================
  // Eligibility — caution deposit is Delhi-NCR-student only.
  // Anyone else must supply address/details and cannot use it.
  // ============================================================

  function initEligibility() {
    const radios = qsa('input[name="persona"]');
    const extraFields = qs('#personaExtraFields');
    const cautionToggle = qs('#cautionToggle');
    const cautionRow = qs('#cautionToggleRow');
    const ackCheck = qs('#acknowledgeCheck');

    ackCheck.addEventListener('change', function () {
      state.acknowledged = ackCheck.checked;
    });

    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        state.persona = radio.value;
        const isDelhi = state.persona === 'delhi';

        extraFields.style.display = isDelhi ? 'none' : 'flex';
        cautionRow.classList.toggle('disabled', !isDelhi);

        if (!isDelhi) {
          // force caution off — it isn't available outside Delhi-NCR
          state.useCautionDeposit = false;
          cautionToggle.classList.remove('on');
          qs('#acknowledgeRow').style.display = 'none';
          state.acknowledged = false;
          ackCheck.checked = false;
          renderBillingSummary();
        }
      });
    });
  }

  // ============================================================
  // Checkout flow
  // ============================================================

  const checkoutSection = qs('#checkoutSection');
  const merchSection = qs('#merch');

  function openCheckout() {
    renderBillingSummary();
    checkoutSection.classList.add('active');
    merchSection.style.display = 'none';
    qs('#hero').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeCheckout() {
    checkoutSection.classList.remove('active');
    merchSection.style.display = '';
    qs('#hero').style.display = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initCheckoutNav() {
    qs('#checkoutBack').addEventListener('click', function (e) {
      e.preventDefault();
      closeCheckout();
    });
  }

  // ============================================================
  // Customer form validation
  // ============================================================

  function validateField(input, testFn, message) {
    const errorEl = input.parentElement.querySelector('.form-error-msg');
    const valid = testFn(input.value.trim());
    input.classList.toggle('error', !valid);
    if (errorEl) errorEl.textContent = valid ? '' : message;
    return valid;
  }

  function validateCustomerForm() {
    const rollNumber = qs('#fieldRoll');
    const name = qs('#fieldName');
    const phone = qs('#fieldPhone');
    const email = qs('#fieldEmail');
    const batch = qs('#fieldBatch');

    const validRoll = validateField(rollNumber, function (v) { return v.length > 0; }, 'Roll number is required');
    const validName = validateField(name, function (v) { return v.length > 1; }, 'Enter your full name');
    const validPhone = validateField(phone, function (v) { return /^[0-9]{10}$/.test(v); }, 'Enter a valid 10-digit number');
    const validEmail = validateField(email, function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, 'Enter a valid email');
    const validBatch = validateField(batch, function (v) { return v.length > 0; }, 'Batch is required');

    return validRoll && validName && validPhone && validEmail && validBatch;
  }

  function initFormLiveValidation() {
    ['#fieldRoll', '#fieldName', '#fieldPhone', '#fieldEmail', '#fieldBatch'].forEach(function (sel) {
      const input = qs(sel);
      input.addEventListener('blur', function () { validateCustomerForm(); });
      input.addEventListener('input', function () {
        input.classList.remove('error');
      });
    });
  }

  // ============================================================
  // Customer autocomplete — typing 2+ characters into Roll Number
  // or Full Name suggests matches from CONTACTS (see contacts.js).
  // Picking one pre-fills Roll/Name/Phone/Email/Batch — all still
  // freely editable afterward. No match = type everything by hand,
  // exactly as before.
  // ============================================================

  function fillCustomerFields(contact) {
    qs('#fieldRoll').value = contact.roll;
    qs('#fieldName').value = contact.name;
    qs('#fieldPhone').value = contact.phone;
    qs('#fieldEmail').value = contact.email;
    qs('#fieldBatch').value = contact.batch;
    qsa('.form-input.error', qs('.panel')).forEach(function (el) { el.classList.remove('error'); });
  }

  function renderAutocomplete(dropdownEl, matches, onPick) {
    dropdownEl.innerHTML = '';
    if (matches.length === 0) {
      dropdownEl.classList.remove('show');
      return;
    }
    matches.slice(0, 8).forEach(function (contact) {
      const item = el('div', 'autocomplete-item');
      item.appendChild(el('div', 'autocomplete-item-name', contact.name));
      item.appendChild(el('div', 'autocomplete-item-meta', contact.roll + ' · ' + contact.batch));
      item.addEventListener('mousedown', function (e) {
        // mousedown (not click) so this fires before the input's blur hides the dropdown
        e.preventDefault();
        onPick(contact);
        dropdownEl.classList.remove('show');
      });
      dropdownEl.appendChild(item);
    });
    dropdownEl.classList.add('show');
  }

  function initCustomerAutocomplete() {
    if (typeof CONTACTS === 'undefined') return;

    const rollInput = qs('#fieldRoll');
    const nameInput = qs('#fieldName');
    const rollDropdown = qs('#rollAutocomplete');
    const nameDropdown = qs('#nameAutocomplete');

    rollInput.addEventListener('input', function () {
      const query = rollInput.value.trim().toLowerCase();
      if (query.length < 2) { rollDropdown.classList.remove('show'); return; }
      const matches = CONTACTS.filter(function (c) { return c.roll.toLowerCase().indexOf(query) !== -1; });
      renderAutocomplete(rollDropdown, matches, fillCustomerFields);
    });

    nameInput.addEventListener('input', function () {
      const query = nameInput.value.trim().toLowerCase();
      if (query.length < 2) { nameDropdown.classList.remove('show'); return; }
      const matches = CONTACTS.filter(function (c) { return c.name.toLowerCase().indexOf(query) !== -1; });
      renderAutocomplete(nameDropdown, matches, fillCustomerFields);
    });

    [rollInput, nameInput].forEach(function (input, idx) {
      const dropdown = idx === 0 ? rollDropdown : nameDropdown;
      input.addEventListener('blur', function () {
        setTimeout(function () { dropdown.classList.remove('show'); }, 120);
      });
      input.addEventListener('focus', function () {
        input.dispatchEvent(new Event('input'));
      });
    });
  }

  // ============================================================
  // Payment screenshot upload
  // ============================================================

  function initUpload() {
    const zone = qs('#uploadZone');
    const input = qs('#screenshotInput');
    const preview = qs('#uploadPreview');
    const previewImg = qs('#uploadPreviewImg');
    const previewName = qs('#uploadPreviewName');
    const previewSize = qs('#uploadPreviewSize');

    function handleFile(file) {
      if (!file || !file.type.startsWith('image/')) {
        showToast('Please upload an image file');
        return;
      }
      const reader = new FileReader();
      reader.onload = function () {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(',')[1];
        state.screenshot = {
          base64: base64,
          mimeType: file.type,
          fileName: file.name,
          previewUrl: dataUrl
        };
        previewImg.src = dataUrl;
        previewName.textContent = file.name;
        previewSize.textContent = (file.size / 1024).toFixed(0) + ' KB';
        preview.classList.add('show');
      };
      reader.readAsDataURL(file);
    }

    input.addEventListener('change', function (e) {
      handleFile(e.target.files[0]);
    });

    ['dragenter', 'dragover'].forEach(function (evt) {
      zone.addEventListener(evt, function (e) {
        e.preventDefault();
        zone.classList.add('drag');
      });
    });
    ['dragleave', 'drop'].forEach(function (evt) {
      zone.addEventListener(evt, function (e) {
        e.preventDefault();
        zone.classList.remove('drag');
      });
    });
    zone.addEventListener('drop', function (e) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    });
  }

  // ============================================================
  // Order submission
  // ============================================================

  /**
   * BACKEND INTEGRATION POINT
   * Replace with a real fetch() call to the deployed Apps Script
   * Web App URL. See README.md for the exact payload shape expected.
   */
  function submitOrderToBackend(payload) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        const mockOrderId = 'ORD-' + Date.now().toString(36).toUpperCase();
        resolve({ success: true, data: { orderId: mockOrderId } });
      }, 1400);
    });
  }

  function buildOrderPayload(billing) {
    return {
      action: 'submitOrder',
      customer: {
        rollNumber: qs('#fieldRoll').value.trim(),
        name: qs('#fieldName').value.trim(),
        phone: qs('#fieldPhone').value.trim(),
        email: qs('#fieldEmail').value.trim(),
        batch: qs('#fieldBatch').value.trim()
      },
      cart: state.cart.map(function (line) {
        return {
          productCode: line.code,
          productName: line.name,
          quantity: line.qty,
          size: line.size || '',
          extraFieldResponse: line.extraFieldValue || '',
          unitPrice: line.price
        };
      }),
      billing: {
        billingAmount: billing.total,
        usedCautionDeposit: state.useCautionDeposit,
        cautionAmountUsed: billing.cautionUsed,
        discount: billing.discount,
        transferAmount: billing.transferAmount
      },
      eligibility: {
        persona: state.persona,
        address: state.persona !== 'delhi' ? qs('#fieldAddress').value.trim() : null,
        additionalDetails: state.persona !== 'delhi' ? qs('#fieldAdditionalDetails').value.trim() : null,
        cautionAcknowledged: state.persona === 'delhi' ? state.acknowledged : false
      },
      screenshotBase64: state.screenshot ? state.screenshot.base64 : null,
      screenshotMimeType: state.screenshot ? state.screenshot.mimeType : null
    };
  }

  function initSubmit() {
    const submitBtn = qs('#submitOrderBtn');
    const statusEl = qs('#formStatus');

    submitBtn.addEventListener('click', function () {
      statusEl.classList.remove('show');

      if (state.cart.length === 0) {
        showToast('Your cart is empty');
        return;
      }
      if (!validateCustomerForm()) {
        statusEl.textContent = 'Please fix the highlighted fields above.';
        statusEl.className = 'form-status show error';
        return;
      }
      if (state.persona !== 'delhi') {
        const addr = qs('#fieldAddress').value.trim();
        const details = qs('#fieldAdditionalDetails').value.trim();
        if (!addr || !details) {
          statusEl.textContent = 'Please fill in your address and additional details.';
          statusEl.className = 'form-status show error';
          return;
        }
      }
      if (state.persona === 'delhi' && state.useCautionDeposit && !state.acknowledged) {
        statusEl.textContent = 'Please confirm the caution deposit acknowledgement below.';
        statusEl.className = 'form-status show error';
        return;
      }

      const billing = computeBilling();

      // Screenshot is only mandatory when there's actually money to transfer —
      // e.g. the caution deposit can fully cover a small order.
      if (billing.transferAmount > 0 && !state.screenshot) {
        statusEl.textContent = 'Please upload your payment screenshot.';
        statusEl.className = 'form-status show error';
        return;
      }

      const payload = buildOrderPayload(billing);

      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';

      submitOrderToBackend(payload)
        .then(function (result) {
          if (result.success) {
            showSuccess();
          } else {
            statusEl.textContent = result.error || 'Something went wrong. Please try again.';
            statusEl.className = 'form-status show error';
          }
        })
        .catch(function () {
          statusEl.textContent = 'Could not reach the server. Please try again.';
          statusEl.className = 'form-status show error';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Order';
        });
    });
  }

  // ============================================================
  // Success screen
  // ============================================================

  function showSuccess() {
    qs('#successScreen').classList.add('show');
    document.body.classList.add('lock-scroll');
  }

  function resetOrderState() {
    state.cart = [];
    state.useCautionDeposit = false;
    state.screenshot = null;
    state.persona = 'delhi';
    state.acknowledged = false;
    lineIdCounter = 1;
    updateCartBadge();
    renderCart();
    updateProgressBar();
    qs('#uploadPreview').classList.remove('show');
    qs('#cautionToggle').classList.remove('on');
    qs('#acknowledgeRow').style.display = 'none';
    qs('#acknowledgeCheck').checked = false;
    qs('#personaExtraFields').style.display = 'none';
    qs('#cautionToggleRow').classList.remove('disabled');
    qs('input[name="persona"][value="delhi"]').checked = true;
    ['#fieldRoll', '#fieldName', '#fieldPhone', '#fieldEmail', '#fieldBatch', '#fieldAddress', '#fieldAdditionalDetails'].forEach(function (sel) {
      const input = qs(sel);
      if (input) { input.value = ''; input.classList.remove('error'); }
    });
    renderProducts();
  }

  function initSuccessScreen() {
    qs('#returnHomeBtn').addEventListener('click', function () {
      qs('#successScreen').classList.remove('show');
      document.body.classList.remove('lock-scroll');
      resetOrderState();
      closeCheckout();
    });
  }

  // ============================================================
  // Init
  // ============================================================

  document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
    initFilters();
    initNav();
    initLightbox();
    initCart();
    initCautionToggle();
    initEligibility();
    initCheckoutNav();
    initFormLiveValidation();
    initCustomerAutocomplete();
    initUpload();
    initSubmit();
    initSuccessScreen();
    updateCartBadge();
    renderBillingSummary();

    qs('#shopNowBtn').addEventListener('click', function () {
      document.getElementById('merch').scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
