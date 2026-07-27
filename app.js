/* ==========================================================================
   2EM İÇ MİMARLIK VE MOBİLYA - Application Logic
   Interactive Showcase, Portfolio Filtering, Modal Controls, Quote Simulator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header & Navigation Logic
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link update on scroll
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Close nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // 2. Hero Background Image Slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function nextSlide() {
    if (!heroSlides.length) return;
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, 6000);

  // 3. Project Portfolio Data & Filtering
  const projectItems = [
    {
      id: 1,
      title: 'Istinye Waterside Villa',
      category: 'villa',
      categoryLabel: 'Villa & Konut',
      location: 'İstanbul, Türkiye',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Boğaz manzarasında masif ceviz kaplama, özel İtalyan mermeri yemek alanı ve 3D entegre aydınlatmalı mobilya üretimi.'
    },
    {
      id: 2,
      title: 'Katara Hills Hilton Resort',
      category: 'otel',
      categoryLabel: 'Otel & FF&E',
      location: 'Doha, Katar',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      description: 'LXR Hotels & Resorts bünyesinde 34 adet lüks vikanın özel mobilya, panelleme ve FF&E üretimi.'
    },
    {
      id: 3,
      title: 'Grand Soho Luxury Suite Hotel',
      category: 'otel',
      categoryLabel: 'Otel & FF&E',
      location: 'New York, ABD',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      description: 'New York şehir merkezinde 120 odalı boutique otel için havacılık kalitesinde pirinç ve lake mobilyalar.'
    },
    {
      id: 4,
      title: 'Bodrum Loft Horizon Residences',
      category: 'villa',
      categoryLabel: 'Villa & Konut',
      location: 'Bodrum, Muğla',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'Doğal taş ve masif meşe dokularıyla bezeli özel üretim oturma takımları ve giyinme odaları.'
    },
    {
      id: 5,
      title: 'Azure Mayfair Mega Yacht',
      category: 'yat',
      categoryLabel: 'Yat & Marine',
      location: 'Monako / İstanbul',
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
      description: '55 metrelik süperyat için marin standartlarında suya ve neme dayanıklı teak & deri kaplama mobilyalar.'
    },
    {
      id: 6,
      title: 'Vanguard Headquarters B2B',
      category: 'kurumsal',
      categoryLabel: 'Kurumsal & B2B',
      location: 'Maslak, İstanbul',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      description: 'Yönetim kurulu toplantı masaları, ses yalıtımlı ahşap paneller ve akustik özel tasarım dinlenme alanları.'
    }
  ];

  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? projectItems 
      : projectItems.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', p.id);
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <span class="project-tag-badge">${p.categoryLabel}</span>
        </div>
        <div class="project-info">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-location"><i class="fas fa-map-marker-alt" style="color: var(--accent-gold); margin-right: 4px;"></i> ${p.location}</p>
          <span class="project-link">Detayları İncele <i class="fas fa-arrow-right"></i></span>
        </div>
      `;
      card.addEventListener('click', () => openProjectModal(p));
      projectsGrid.appendChild(card);
    });
  }

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  // 4. Products / Collections Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.getAttribute('data-tab'));
      if (targetTab) {
        targetTab.style.display = 'grid';
      }
    });
  });

  // 5. Lightbox Modal Controls (Project Details)
  const projectModal = document.getElementById('projectModal');
  const projectModalClose = document.getElementById('projectModalClose');
  const modalImg = document.getElementById('modalProjectImg');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalLoc = document.getElementById('modalProjectLocation');
  const modalDesc = document.getElementById('modalProjectDesc');

  function openProjectModal(p) {
    if (!projectModal) return;
    modalImg.src = p.image;
    modalTitle.textContent = p.title;
    modalLoc.textContent = `${p.categoryLabel} | ${p.location}`;
    modalDesc.textContent = p.description;
    projectModal.classList.add('active');
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', () => {
      projectModal.classList.remove('active');
    });
  }

  // 6. Interactive Quote & Consultation Modal Logic
  const quoteModal = document.getElementById('quoteModal');
  const quoteModalClose = document.getElementById('quoteModalClose');
  const triggerButtons = document.querySelectorAll('[data-open-quote]');

  triggerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (quoteModal) quoteModal.classList.add('active');
    });
  });

  if (quoteModalClose) {
    quoteModalClose.addEventListener('click', () => {
      quoteModal.classList.remove('active');
    });
  }

  // Close modals on overlay click
  [projectModal, quoteModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

  // Quote Form Instant Simulation Logic
  const quoteForm = document.getElementById('quoteForm');
  const projectTypeSelect = document.getElementById('projectType');
  const projectAreaInput = document.getElementById('projectArea');
  const estimateBox = document.getElementById('estimateResult');

  function updateEstimate() {
    if (!projectTypeSelect || !projectAreaInput || !estimateBox) return;
    const type = projectTypeSelect.value;
    const area = parseFloat(projectAreaInput.value) || 0;

    let baseWeeks = 4;
    let ratePerSqM = 350;

    if (type === 'hotel') { baseWeeks = 10; ratePerSqM = 500; }
    else if (type === 'villa') { baseWeeks = 8; ratePerSqM = 450; }
    else if (type === 'yacht') { baseWeeks = 12; ratePerSqM = 800; }

    const calculatedWeeks = Math.max(baseWeeks, Math.round(baseWeeks + (area / 100) * 2));
    const totalEstimate = area > 0 ? (area * ratePerSqM).toLocaleString('tr-TR') : 0;

    estimateBox.innerHTML = `
      <div style="background: rgba(197, 160, 89, 0.1); border: 1px solid var(--accent-gold); padding: 1rem; border-radius: 4px; margin-top: 1rem;">
        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-gold); display: block; margin-bottom: 0.25rem;">Tahmini Üretim ve Montaj Süresi</span>
        <strong style="font-size: 1.2rem; color: #fff;">${calculatedWeeks} - ${calculatedWeeks + 3} Hafta</strong>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.4rem;">Modoko tesislerimizde 3D render onayı sonrası imalat başlar.</p>
      </div>
    `;
  }

  if (projectTypeSelect) projectTypeSelect.addEventListener('change', updateEstimate);
  if (projectAreaInput) projectAreaInput.addEventListener('input', updateEstimate);

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Talebiniz başarıyla 2EM İç Mimarlık ve Mobilya ekibimize ulaştı! 24 saat içerisinde mimarlarımız sizinle iletişime geçecektir.');
      quoteModal.classList.remove('active');
      quoteForm.reset();
    });
  }

  // 7. Language Switch Simulation (TR / EN)
  const langBtn = document.getElementById('langSwitch');
  let currentLang = 'TR';

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'TR' ? 'EN' : 'TR';
      langBtn.textContent = currentLang;

      if (currentLang === 'EN') {
        document.querySelectorAll('[data-tr]').forEach(el => {
          el.setAttribute('data-tr-original', el.textContent);
          if (el.hasAttribute('data-en')) {
            el.textContent = el.getAttribute('data-en');
          }
        });
      } else {
        document.querySelectorAll('[data-tr]').forEach(el => {
          if (el.hasAttribute('data-tr-original')) {
            el.textContent = el.getAttribute('data-tr-original');
          }
        });
      }
    });
  }
});
