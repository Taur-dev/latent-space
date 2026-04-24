const DATA_URL = 'data/collection.json';

let allImages = [];
let currentIndex = 0;

const lightbox          = document.getElementById('lightbox');
const lbImg             = document.getElementById('lightbox-img');
const lbHudId           = document.getElementById('lightbox-hud-id');
const panelTitle        = document.getElementById('panel-title');
const panelClaude       = document.getElementById('panel-claude');
const panelGemini       = document.getElementById('panel-gemini');
const panelMeta         = document.getElementById('panel-meta');
const panelSectionClaude = document.getElementById('panel-section-claude');
const panelSectionGemini = document.getElementById('panel-section-gemini');
const labelClaude        = document.getElementById('label-claude');
const reviewerDisplay    = document.getElementById('lightbox-reviewer-display');
const reviewerDisplayName = document.getElementById('reviewer-display-name');

// ─── Bootstrap ────────────────────────────────────────────────────────────────

async function init() {
  try {
    const res  = await fetch(DATA_URL);
    const data = await res.json();

    populateHeader(data.museum);
    buildGallery(data.sets);
    setupScrollAnimations();
    setupKeyboard();
    updateHeaderDate();
  } catch (err) {
    console.error('Failed to load collection data:', err);
  }
}

// ─── Header ───────────────────────────────────────────────────────────────────

function populateHeader(museum) {
  const titleEl = document.getElementById('museum-title');
  const subtitleEl = document.getElementById('museum-subtitle');
  const descEl = document.getElementById('museum-description');

  if (museum.title)       titleEl.textContent    = museum.title;
  if (museum.subtitle)    subtitleEl.textContent = museum.subtitle;
  if (museum.description) descEl.textContent     = museum.description;

  document.title = museum.title || 'LATENT SPACE';
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', museum.title || 'LATENT SPACE');
}

function updateHeaderDate() {
  const el = document.getElementById('header-date');
  if (!el) return;
  const d = new Date();
  el.textContent = `${d.getUTCFullYear()}.${String(d.getUTCMonth() + 1).padStart(2, '0')}.${String(d.getUTCDate()).padStart(2, '0')} UTC`;
}

// ─── Gallery render ────────────────────────────────────────────────────────────

function buildGallery(sets) {
  const gallery = document.getElementById('gallery');
  allImages = [];

  sets.forEach(set => {
    const block = document.createElement('section');
    block.className = 'set-block';
    block.setAttribute('data-set', set.set_number);

    const header = document.createElement('div');
    header.className = 'set-header';
    const promptText = set.prompt && !set.prompt.startsWith('[')
      ? `<span class="set-prompt">${set.prompt}</span>` : '';
    header.innerHTML = `
      <span class="set-number">SET ${String(set.set_number).padStart(2, '0')}</span>
      ${set.set_title ? `<span class="set-title">${set.set_title}</span>` : ''}
      ${promptText}
    `;

    const grid = document.createElement('div');
    grid.className = 'set-grid';

    set.images.forEach(image => {
      const globalIdx = allImages.length;
      allImages.push(image);

      const card = document.createElement('div');
      card.setAttribute('data-id', image.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Open ${image.title}`);

      if (image.type === 'review') {
        card.className = 'review-card';
        const label = document.createElement('div');
        label.className = 'review-card-label';
        label.textContent = 'MUSEUM REVIEW';
        const name = document.createElement('div');
        name.className = 'review-card-reviewer';
        name.textContent = image.title;
        const preview = document.createElement('div');
        preview.className = 'review-card-preview';
        const reviewText = image.review || '';
        preview.textContent = reviewText.startsWith('[') ? '' : reviewText.slice(0, 100);
        card.appendChild(label);
        card.appendChild(name);
        card.appendChild(preview);
      } else {
        card.className = 'thumb-card';
        const img = document.createElement('img');
        img.src = image.filename;
        img.alt = image.title;
        img.loading = 'lazy';
        const hint = document.createElement('span');
        hint.className = 'thumb-title-hint';
        hint.textContent = image.title;
        card.appendChild(img);
        card.appendChild(hint);
      }

      card.addEventListener('click', () => openLightbox(globalIdx));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(globalIdx);
        }
      });

      grid.appendChild(card);
    });

    block.appendChild(header);
    block.appendChild(grid);
    gallery.appendChild(block);
  });
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function openLightbox(idx) {
  if (idx < 0 || idx >= allImages.length) return;
  currentIndex = idx;
  const image = allImages[idx];
  const isReview = image.type === 'review';

  panelTitle.textContent = image.title;
  panelMeta.textContent  = `SET ${String(image.set_number).padStart(2, '0')} · ${image.id}`;
  document.getElementById('lightbox-panel').scrollTop = 0;

  if (isReview) {
    lbImg.src = '';
    lbImg.alt = '';
    lbHudId.textContent = `REVIEW · ${image.id}`;
    reviewerDisplayName.textContent = image.title;
    labelClaude.textContent = 'REVIEW';
    panelClaude.textContent = image.review || '';
    panelSectionGemini.style.display = 'none';
    lightbox.classList.add('is-review');
  } else {
    lbImg.src = image.filename;
    lbImg.alt = image.title;
    lbHudId.textContent = `ID:${image.id}`;
    labelClaude.textContent = 'CLAUDE PERSPECTIVE';
    panelClaude.textContent = image.claude_perspective;
    panelGemini.textContent = image.gemini_perspective;
    panelSectionGemini.style.display = '';
    lightbox.classList.remove('is-review');
  }

  lightbox.removeAttribute('aria-hidden');
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.classList.remove('panel-ready');
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => lightbox.classList.add('panel-ready'), 100);
    });
  });

  document.getElementById('lightbox-close').focus();
}

function closeLightbox() {
  lightbox.classList.remove('panel-ready');
  setTimeout(() => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }, 220);
}

function navigate(direction) {
  const next = currentIndex + direction;
  if (next >= 0 && next < allImages.length) {
    lightbox.classList.remove('panel-ready');
    setTimeout(() => openLightbox(next), 80);
  }
}

// ─── Lightbox controls ────────────────────────────────────────────────────────

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => navigate(-1));
document.getElementById('lightbox-next').addEventListener('click', () => navigate(1));

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// ─── Keyboard ─────────────────────────────────────────────────────────────────

function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  navigate(1);
    if (e.key === 'ArrowLeft')   navigate(-1);
  });
}

// ─── Scroll entrance animations ───────────────────────────────────────────────

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.set-block').forEach(block => observer.observe(block));
}

// ─── Run ──────────────────────────────────────────────────────────────────────

init();
