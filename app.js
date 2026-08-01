/* ==========================================================================
   2EM İÇ MİMARLIK VE MOBİLYA - Application Logic
   Interactive Showcase, Portfolio Filtering, Modal Controls, Quote Simulator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header ve Navigation Logic
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

  // Slayt geçiş hızı (4.2 saniye)
  setInterval(nextSlide, 4200);

  // 3. Project Portfolio Data ve Filtering
  const projectItems = [
    {
      id: 101,
      title: 'August Boutique & Patisserie Counter',
      image: 'assets/projects/august_patisserie_1.jpg'
    },
    {
      id: 102,
      title: 'August Boutique Display & Wall Panel',
      image: 'assets/projects/august_patisserie_2.jpg'
    },
    {
      id: 103,
      title: 'August Seating & Table Lounge',
      image: 'assets/projects/august_patisserie_3.jpg'
    },
    {
      id: 109,
      title: 'Panoramik Cam Tavan Teras Büfe & Kafe',
      image: 'assets/projects/project_9.jpg'
    },
    {
      id: 105,
      title: 'August Exterior Facade & Outdoor Lounge',
      image: 'assets/projects/august_patisserie_5.jpg'
    },
    {
      id: 107,
      title: 'Panoramik Cam Tavan Restoran & Avize Lounge',
      image: 'assets/projects/project_7.jpg'
    },
    {
      id: 108,
      title: 'Lüks Yatak Odası Suite & Giyinme Odası',
      image: 'assets/projects/project_8.jpg'
    },
    {
      id: 110,
      title: 'Modern Lüks Salon & TV Ünitesi & Yemek Alanı',
      image: 'assets/projects/project_10.jpg'
    },
    {
      id: 112,
      title: 'Lüks Yatak Odası & Özel Ahşap Giyinme Dolabı',
      image: 'assets/projects/project_12.jpg'
    }
  ];

  const projectsGrid = document.getElementById('projectsGrid');

  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    projectItems.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', p.id);
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="2EM Mimarlık Proje Görseli" loading="lazy">
          <div class="project-overlay-icon"><i class="fas fa-search-plus"></i></div>
        </div>
      `;
      card.addEventListener('click', () => openProjectModal(p));
      projectsGrid.appendChild(card);
    });
  }

  renderProjects();



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
    projectModal.classList.add('active');
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', () => {
      projectModal.classList.remove('active');
    });
  }

  // 6. Interactive Quote ve Consultation Modal Logic
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

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quoteName')?.value?.trim() || '';
      const phone = document.getElementById('quotePhone')?.value?.trim() || '';
      const email = document.getElementById('quoteEmail')?.value?.trim() || '';
      const note = document.getElementById('quoteNote')?.value?.trim() || '';

      let messageText = `Merhaba 2EM İç Mimarlık & Mobilya,\nWeb sitenizden yeni bir teklif/danışmanlık talebi oluşturuldu:\n\n` +
        `• Ad Soyad: ${name}\n` +
        `• Telefon: ${phone}\n` +
        `• E-posta: ${email || 'Belirtilmedi'}`;

      if (note) {
        messageText += `\n• Proje Detayı / Notlar: ${note}`;
      }

      const encodedMsg = encodeURIComponent(messageText);
      const wa1 = `https://wa.me/905518601842?text=${encodedMsg}`;
      const wa2 = `https://wa.me/905374478191?text=${encodedMsg}`;

      // Open BOTH WhatsApp numbers directly in separate tabs
      window.open(wa1, '_blank');
      setTimeout(() => {
        window.open(wa2, '_blank');
      }, 300);

      // Close modal cleanly immediately
      if (quoteModal) {
        quoteModal.classList.remove('active');
      }
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
        document.documentElement.setAttribute('lang', 'en');
        document.querySelectorAll('[data-tr]').forEach(el => {
          if (!el.hasAttribute('data-tr-original')) {
            el.setAttribute('data-tr-original', el.innerHTML);
          }
          if (el.hasAttribute('data-en')) {
            let textEn = el.getAttribute('data-en');
            // Clean up Turkish dotted İ to standard Latin I
            textEn = textEn.replace(/İ/g, 'I');
            el.innerHTML = textEn;
          }
        });

        const nameInput = document.getElementById('quoteName');
        const noteInput = document.getElementById('quoteNote');
        if (nameInput) nameInput.placeholder = 'e.g. John Doe';
        if (noteInput) noteInput.placeholder = 'e.g. Villa living room furniture, store concept design or any questions...';
      } else {
        document.documentElement.setAttribute('lang', 'tr');
        document.querySelectorAll('[data-tr]').forEach(el => {
          if (el.hasAttribute('data-tr-original')) {
            el.innerHTML = el.getAttribute('data-tr-original');
          }
        });

        const nameInput = document.getElementById('quoteName');
        const noteInput = document.getElementById('quoteNote');
        if (nameInput) nameInput.placeholder = 'Ahmet Yılmaz';
        if (noteInput) noteInput.placeholder = 'Örn: Villa salon mobilyası, mağaza konsept tasarımı veya sormak istediğiniz sorular...';
      }
    });
  }
});
