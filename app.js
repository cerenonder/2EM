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
      id: 201,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Lüks Mağaza & Çanta Teşhir Showroomu',
      image: 'assets/projects/showroom_1.jpg'
    },
    {
      id: 202,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Acar Karşılama Resepsiyonu & Ofis Showroomu',
      image: 'assets/projects/showroom_2.jpg'
    },
    {
      id: 203,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Endüstriyel Konsept Studio & Showroom Alanı',
      image: 'assets/projects/showroom_3.jpg'
    },
    {
      id: 204,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Butik Tekstil & Elbise Teşhir Showroomu',
      image: 'assets/projects/showroom_4.jpg'
    },
    {
      id: 205,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Cemden Lüks Mağaza & Ahşap Showroom',
      image: 'assets/projects/showroom_5.jpg'
    },
    {
      id: 206,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Kırmızı Ahşap Raflı Lüks Çanta Showroomu',
      image: 'assets/projects/showroom_6.jpg'
    },
    {
      id: 207,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Kavisli Koltuk & Aydınlatmalı Showroom Lounge',
      image: 'assets/projects/showroom_7.jpg'
    },
    {
      id: 208,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Toplantı Masası & Modern Askılı Showroom',
      image: 'assets/projects/showroom_8.jpg'
    },
    {
      id: 209,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Geniş İç Mekan Ticari Showroom Alanı',
      image: 'assets/projects/showroom_9.jpg'
    },
    {
      id: 210,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Cemden Takım Elbise Teşhir & Vitrin Showroomu',
      image: 'assets/projects/showroom_10.jpg'
    },
    {
      id: 211,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Mermer Masa & Özel Ahşap Teşhir Showroomu',
      image: 'assets/projects/showroom_11.jpg'
    },
    {
      id: 212,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Prada Marfa Konsept Çanta & Aksesuar Showroomu',
      image: 'assets/projects/showroom_12.jpg'
    },
    {
      id: 213,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Yeşil & Ahşap Özel Teşhir Dolabı Showroomu',
      image: 'assets/projects/showroom_13.jpg'
    },
    {
      id: 214,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Özel Aydınlatmalı Raf & Çanta Showroom Galeri',
      image: 'assets/projects/showroom_14.jpg'
    },
    {
      id: 215,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Modern Butik İç Mekan & Görsel Teşhir Showroomu',
      image: 'assets/projects/showroom_15.jpg'
    },
    {
      id: 216,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Geniş Askılı Ahşap Dokulu Kumaş Showroomu',
      image: 'assets/projects/showroom_16.jpg'
    },
    {
      id: 217,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Krem & Pembe Lüks Çanta Teşhir Ünitesi Showroomu',
      image: 'assets/projects/showroom_17.jpg'
    },
    {
      id: 218,
      category: 'showroom',
      categoryTag: 'SHOWROOM',
      title: 'Ahşap Panel Teşhir Wall & Mimari Showroom',
      image: 'assets/projects/showroom_18.jpg'
    },
    {
      id: 301,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Klasik Oymalı Ahşap Kahve & Tatlı Barı',
      image: 'assets/projects/restaurant_1.jpg'
    },
    {
      id: 302,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Lüks Yeşil Mermer Spa & Hamam Lounge',
      image: 'assets/projects/restaurant_2.jpg'
    },
    {
      id: 303,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Ahşap Çıtalı Koridor & Gizli Aydınlatma Yolu',
      image: 'assets/projects/restaurant_3.jpg'
    },
    {
      id: 304,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Mermer Tezgahlı Özel Kokteyl Bar & Lounge',
      image: 'assets/projects/restaurant_4.jpg'
    },
    {
      id: 305,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Lüks Siyah-Beyaz Mermer Lavabo & WC Suite',
      image: 'assets/projects/restaurant_5.jpg'
    },
    {
      id: 306,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Panoramik Cam Tavan Teras Restoran & Avize',
      image: 'assets/projects/restaurant_6.jpg'
    },
    {
      id: 307,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Deniz Manzaralı Teras Restoran & Avize Lounge',
      image: 'assets/projects/restaurant_7.jpg'
    },
    {
      id: 308,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Gece Konsepti Dış Mekan Restoran & Kış Bahçesi',
      image: 'assets/projects/restaurant_8.jpg'
    },
    {
      id: 309,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Şömineli İç Mekan Restoran & Tavla Salonu',
      image: 'assets/projects/restaurant_9.jpg'
    },
    {
      id: 310,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Sıcak Aydınlatmalı Lüks Restoran Masaları',
      image: 'assets/projects/restaurant_10.jpg'
    },
    {
      id: 311,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Lumière Klasik Cephe & Dış Mekan Kafe',
      image: 'assets/projects/restaurant_11.jpg'
    },
    {
      id: 312,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Ahşap Çıtalı Şarküteri & Gurme Teşhir Barı',
      image: 'assets/projects/restaurant_12.jpg'
    },
    {
      id: 313,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Gurme Kahvaltı & Zeytinyağlılar Teşhir Tezgahı',
      image: 'assets/projects/restaurant_13.jpg'
    },
    {
      id: 314,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Ahşap Panelli Kafe & Barista Bankosu',
      image: 'assets/projects/restaurant_14.jpg'
    },
    {
      id: 315,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Geniş İç Mekan Restoran & Şömineli Oturma Alanı',
      image: 'assets/projects/restaurant_15.jpg'
    },
    {
      id: 316,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Gurme Bahçeşehir Gece Cephe & Işıklı Tabela',
      image: 'assets/projects/restaurant_16.jpg'
    },
    {
      id: 317,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Gurme Bahçeşehir Ana Bina Mimari Dış Görünüm',
      image: 'assets/projects/restaurant_17.jpg'
    },
    {
      id: 318,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Gurme Logoslu Ahşap Çıta Sıcak Yemek Büfesi',
      image: 'assets/projects/restaurant_18.jpg'
    },
    {
      id: 319,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Açık Büfe & Şarküteri Alanı Genel Görünüm',
      image: 'assets/projects/restaurant_19.jpg'
    },
    {
      id: 320,
      category: 'restoran-kafe',
      categoryTag: 'RESTORAN & KAFE',
      title: 'Cam Tavanlı Cam Kış Bahçesi Restoran Seating',
      image: 'assets/projects/restaurant_20.jpg'
    },
    {
      id: 401,
      category: 'otel',
      categoryTag: 'OTEL',
      title: 'Lüks Dış Mekan Kafe & Otel Lounge Verandası',
      image: 'assets/projects/hotel_1.jpg'
    },
    {
      id: 402,
      category: 'otel',
      categoryTag: 'OTEL',
      title: 'Lüks Yatak Odası Suite & Mermer Duvar Paneli',
      image: 'assets/projects/hotel_2.jpg'
    },
    {
      id: 403,
      category: 'otel',
      categoryTag: 'OTEL',
      title: 'Cam Korumalı Özel Ahşap Gardırop & Suite Oda',
      image: 'assets/projects/hotel_3.jpg'
    },
    { id: 501, category: 'ofis', categoryTag: 'OFİS', title: 'Modern Dünya Haritası & Yönetici Ofisi', image: 'assets/projects/office_1.jpg' },
    { id: 502, category: 'ofis', categoryTag: 'OFİS', title: 'Işıklı Cam Kütüphane & Prestij Ofis', image: 'assets/projects/office_2.jpg' },
    { id: 503, category: 'ofis', categoryTag: 'OFİS', title: 'Ahşap Harita Paneli & Çağdaş Ofis Masası', image: 'assets/projects/office_3.jpg' },
    { id: 504, category: 'ofis', categoryTag: 'OFİS', title: 'Gömme Kitaplık & Özel Aydınlatmalı Çalışma Alanı', image: 'assets/projects/office_4.jpg' },
    { id: 505, category: 'ofis', categoryTag: 'OFİS', title: 'PlayStation Medya Ünitesi & Ofis Lounge', image: 'assets/projects/office_5.jpg' },
    { id: 506, category: 'ofis', categoryTag: 'OFİS', title: 'Koleksiyon Araba Teşhir Vitrini & Toplantı Masası', image: 'assets/projects/office_6.jpg' },
    { id: 507, category: 'ofis', categoryTag: 'OFİS', title: 'Dikey Peyzaj & Botanik Toplantı Odası', image: 'assets/projects/office_7.jpg' },
    { id: 508, category: 'ofis', categoryTag: 'OFİS', title: 'Geniş Yönetici Masası & Özel Kitaplık', image: 'assets/projects/office_8.jpg' },
    { id: 509, category: 'ofis', categoryTag: 'OFİS', title: 'İkili Yönetici Masası & Oluklu Cam Bölme', image: 'assets/projects/office_9.jpg' },
    { id: 510, category: 'ofis', categoryTag: 'OFİS', title: 'Doğal Taş Doku & Lüks Makam Odası', image: 'assets/projects/office_10.jpg' },
    { id: 511, category: 'ofis', categoryTag: 'OFİS', title: 'Chesterfield Deri Koltuk & Işıklı Tavan Suite', image: 'assets/projects/office_11.jpg' },
    { id: 601, category: 'magaza', categoryTag: 'MAĞAZA', title: 'MERJ Jewellery Butik Köşk Mağaza', image: 'assets/projects/store_1.jpg' },
    { id: 602, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Ardem Butik Giyim & Pembe Koltuk Lounge', image: 'assets/projects/store_2.jpg' },
    { id: 603, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Marcha Prive Karşılama Bankosu & Giyim Teşhiri', image: 'assets/projects/store_3.jpg' },
    { id: 604, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Güzellik Salonu & Makyaj Yıkama Ünitesi', image: 'assets/projects/store_4.jpg' },
    { id: 605, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Işıklı Neon Ayna & Kuaför Salonu', image: 'assets/projects/store_5.jpg' },
    { id: 606, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Spor Ayakkabı & Kırmızı Konsept Mağaza', image: 'assets/projects/store_6.jpg' },
    { id: 607, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Pirinç Detaylı Butik Elbise Teşhir Ünitesi', image: 'assets/projects/store_7.jpg' },
    { id: 608, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Sutyen & İç Giyim Teşhir Duvarı', image: 'assets/projects/store_8.jpg' },
    { id: 609, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Metal Fileli Spor Ayakkabı Teşhir Modülü', image: 'assets/projects/store_9.jpg' },
    { id: 610, category: 'magaza', categoryTag: 'MAĞAZA', title: 'İç Giyim & Pembemsi Neon Işıklı Vitrin', image: 'assets/projects/store_10.jpg' },
    { id: 611, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Turuncu Duvarlı Kemal Tanca Ayakkabı Standı', image: 'assets/projects/store_11.jpg' },
    { id: 612, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Ahşap Çerçeveli Mağaza Orta Stantları', image: 'assets/projects/store_12.jpg' },
    { id: 613, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Çocuk Oyun Alanı & Ahşap Parkur Mağazası', image: 'assets/projects/store_13.jpg' },
    { id: 614, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Nike & Adidas Ayakkabı Teşhir Duvarı', image: 'assets/projects/store_14.jpg' },
    { id: 615, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Ahşap Çocuk Oyun Evi & Etkinlik Alanı', image: 'assets/projects/store_15.jpg' },
    { id: 616, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Minimalist Metal Askılık & Beton Duvar', image: 'assets/projects/store_16.jpg' },
    { id: 617, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Erkek Klasik Ayakkabı & Çanta Teşhir Ünitesi', image: 'assets/projects/store_17.jpg' },
    { id: 618, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Takım Elbise Butiği & Yeşil Paneller', image: 'assets/projects/store_18.jpg' },
    { id: 619, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Sarı Ahşap Detaylı Takım Elbise Mağazası', image: 'assets/projects/store_19.jpg' },
    { id: 620, category: 'magaza', categoryTag: 'MAĞAZA', title: '24 Erzincanspor Lisanslı Ürün Mağazası', image: 'assets/projects/store_20.jpg' },
    { id: 621, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Bakırkazan Lokum & Şekerleme Mağazası', image: 'assets/projects/store_21.jpg' },
    { id: 622, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Marka Gold Kuyumcu Teşhir Bankoları', image: 'assets/projects/store_22.jpg' },
    { id: 623, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Bakırkazan Şekerleme Bankosu & Geometrik Zemin', image: 'assets/projects/store_23.jpg' },
    { id: 624, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Kuyumcu Vitrini & Marka Gold', image: 'assets/projects/store_24.jpg' },
    { id: 625, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Gri Asma Raflı Modern Duvar Teşhiri', image: 'assets/projects/store_25.jpg' },
    { id: 626, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Bakırkazan Camlı Lokum Teşhir Tezgahı', image: 'assets/projects/store_26.jpg' },
    { id: 627, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Gold Kuyumcu Teşhir Bankosu & Aynalı Duvar', image: 'assets/projects/store_27.jpg' },
    { id: 628, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Kuruyemiş & Şarküteri Teşhir Rafları', image: 'assets/projects/store_28.jpg' },
    { id: 629, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Pembe Konsept Kuyumcu & Mücevherat Mağazası', image: 'assets/projects/store_29.jpg' },
    { id: 630, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Rayyen Kasa Bankosu & Kahve Köşesi', image: 'assets/projects/store_30.jpg' },
    { id: 631, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Kırmızı Halılı & Halat Askılı Butik Mağaza', image: 'assets/projects/store_31.jpg' },
    { id: 632, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Çanta Mağazası Vitrin & Stant Görünümü', image: 'assets/projects/store_32.jpg' },
    { id: 633, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Pembe Raflı Lüks Çanta Mağazası', image: 'assets/projects/store_33.jpg' },
    { id: 634, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Modern Gece Aydınlatmalı Ofis & Mağaza Lounge', image: 'assets/projects/store_34.jpg' },
    { id: 635, category: 'magaza', categoryTag: 'MAĞAZA', title: 'MOGS Karşılama Bankosu & Ahşap Panel', image: 'assets/projects/store_35.jpg' },
    { id: 636, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Zühre Karşılama Bankosu & Işıklı Tabela', image: 'assets/projects/store_36.jpg' },
    { id: 637, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Zühre Premium Seating Lounge & Rose Gold Stant', image: 'assets/projects/store_37.jpg' },
    { id: 638, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Soğutmalı Şarküteri Vitrini & Ahşap Doku', image: 'assets/projects/store_38.jpg' },
    { id: 639, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Şarküteri Reyonu & Market Dolapları', image: 'assets/projects/store_39.jpg' },
    { id: 640, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Süpermarket Rafları & Ürün Teşhiri', image: 'assets/projects/store_40.jpg' },
    { id: 641, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Mermer Zeminli Zühre Butik Stant Alanı', image: 'assets/projects/store_41.jpg' }
  ];

  const categorySections = [
    { key: 'konut', title: 'Konut Projeleri' },
    { key: 'magaza', title: 'Mağaza Projeleri' },
    { key: 'showroom', title: 'Showroom Projeleri' },
    { key: 'ofis', title: 'Ofis Projeleri' },
    { key: 'otel', title: 'Otel Projeleri' },
    { key: 'restoran-kafe', title: 'Restoran & Kafe Projeleri' },
    { key: 'ic-mekanlar', title: 'İç Mekan Projeleri' }
  ];

  const projectsContainer = document.getElementById('projectsGrid');
  let currentFilter = 'all';

  function createProjectCardHTML(p, originalIndex) {
    return `
      <div class="project-card" data-id="${p.id}" data-index="${originalIndex}">
        <div class="project-thumb">
          <img src="${p.image}" alt="2EM Mimarlık Proje Görseli" loading="lazy">
          <div class="project-overlay-icon"><i class="fas fa-search-plus"></i></div>
        </div>
      </div>
    `;
  }

  function renderProjects(filter = 'all') {
    if (!projectsContainer) return;
    currentFilter = filter;
    projectsContainer.innerHTML = '';

    const itemsToRender = filter === 'all'
      ? projectItems
      : projectItems.filter(item => item.category === filter);

    const gridDiv = document.createElement('div');
    gridDiv.className = 'projects-grid';
    gridDiv.innerHTML = itemsToRender.map((item, idx) => createProjectCardHTML(item, idx)).join('');
    projectsContainer.appendChild(gridDiv);

    // Attach click listeners to cards to open modal with proper index
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openProjectModal(idx, filter);
      });
    });
  }

  // Filter Tab Buttons Event Listeners
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  renderProjects('all');



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
  const projectModalPrev = document.getElementById('projectModalPrev');
  const projectModalNext = document.getElementById('projectModalNext');
  const modalImg = document.getElementById('modalProjectImg');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCounter = document.getElementById('modalProjectCounter');

  let activeModalList = [...projectItems];
  let currentProjectIndex = 0;

  function updateModalProject() {
    if (!activeModalList.length) return;
    const p = activeModalList[currentProjectIndex];
    if (!p) return;
    modalImg.src = p.image;
    modalImg.alt = p.title || '2EM Mimarlık Proje Görseli';
    if (modalTitle) modalTitle.textContent = p.title || 'Proje Detayı';
    if (modalCounter) modalCounter.textContent = `${currentProjectIndex + 1} / ${activeModalList.length}`;
  }

  function openProjectModal(indexInActiveList, categoryFilter = null) {
    if (!projectModal) return;

    const filterToUse = categoryFilter !== null ? categoryFilter : currentFilter;
    if (filterToUse && filterToUse !== 'all') {
      activeModalList = projectItems.filter(p => p.category === filterToUse);
    } else {
      activeModalList = [...projectItems];
    }

    if (typeof indexInActiveList === 'number' && indexInActiveList >= 0 && indexInActiveList < activeModalList.length) {
      currentProjectIndex = indexInActiveList;
    } else {
      currentProjectIndex = 0;
    }

    updateModalProject();
    projectModal.classList.add('active');
  }

  function showPrevProject() {
    if (!activeModalList.length) return;
    currentProjectIndex = (currentProjectIndex - 1 + activeModalList.length) % activeModalList.length;
    updateModalProject();
  }

  function showNextProject() {
    if (!activeModalList.length) return;
    currentProjectIndex = (currentProjectIndex + 1) % activeModalList.length;
    updateModalProject();
  }

  if (projectModalPrev) {
    projectModalPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevProject();
    });
  }

  if (projectModalNext) {
    projectModalNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextProject();
    });
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', () => {
      projectModal.classList.remove('active');
    });
  }

  // Keyboard navigation for project modal
  document.addEventListener('keydown', (e) => {
    if (!projectModal || !projectModal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      showPrevProject();
    } else if (e.key === 'ArrowRight') {
      showNextProject();
    } else if (e.key === 'Escape') {
      projectModal.classList.remove('active');
    }
  });

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
        messageText += `\n• Proje Detayı: ${note}`;
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
