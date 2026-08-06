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

  const projectItems = [
    {
      id: 701,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Modern Ankastre Mutfak & Ada Yemek Masası Tasarımı',
      image: 'assets/projects/interior_1.jpg'
    },
    {
      id: 702,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Özel Kahve Barı & Ahşap Çıtalı Yemek Alanı Enstalasyonu',
      image: 'assets/projects/interior_2.jpg'
    },
    {
      id: 703,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Mermer Backsplash & LED Aydınlatmalı Mutfak Tezgahı',
      image: 'assets/projects/interior_3.jpg'
    },
    {
      id: 704,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Özel Ölçü Çamaşır & Kurutma Makinesi Gömme Dolap Ünitesi',
      image: 'assets/projects/interior_4.jpg'
    },
    {
      id: 705,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Özel İmalat Panjurlu Gardırop & Giyinme Odası Dolabı',
      image: 'assets/projects/interior_5.jpg'
    },
    {
      id: 706,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Entegre Çalışma Masalı & LED Kitaplıklı Genç Odası',
      image: 'assets/projects/interior_6.jpg'
    },
    {
      id: 707,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Doğal Taş Duvarlı & Asma Şömineli Lüks Salon Lounge',
      image: 'assets/projects/interior_7.jpg'
    },
    {
      id: 708,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Mermer & Turkuaz Çini Detaylı Özel Lüks Türk Hamamı',
      image: 'assets/projects/interior_8.jpg'
    },
    {
      id: 709,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Özel Ses Yalıtımlı Akustik Panelli Ev Sinema Odası',
      image: 'assets/projects/interior_9.jpg'
    },
    {
      id: 710,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ahşap Çıta Detaylı & Özel Aydınlatmalı Ebeveyn Yatak Odası',
      image: 'assets/projects/interior_10.jpg'
    },
    {
      id: 711,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Pembe & Beyaz Temalı Kemerli Çocuk Odası Gardırobu',
      image: 'assets/projects/interior_11.jpg'
    },
    {
      id: 712,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Siyah Mermer & Bakır Evye Detaylı Lüks Banyo',
      image: 'assets/projects/interior_12.jpg'
    },
    {
      id: 713,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ahşap Çıta TV Paneli & Modern Çalışma Alanı',
      image: 'assets/projects/interior_13.jpg'
    },
    {
      id: 714,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Çatı Katı Ahşap Mertek & Özel Depolama Üniteleri',
      image: 'assets/projects/interior_14.jpg'
    },
    {
      id: 715,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Bakır & Bronz Patina Dokulu Lüks Mutfak Dolapları',
      image: 'assets/projects/interior_15.jpg'
    },
    {
      id: 716,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Pembe Neon Işıklı & Siyah Mermer Lüks Banyo',
      image: 'assets/projects/interior_16.jpg'
    },
    {
      id: 717,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Krem Panjurlu Köşe Gardırop & Makyaj Masası',
      image: 'assets/projects/interior_17.jpg'
    },
    {
      id: 718,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Asansör Yanı Özel Aydınlatmalı Camlı Vitrin',
      image: 'assets/projects/interior_18.jpg'
    },
    {
      id: 719,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ahşap Çıta Panelli Yatak Başlığı Enstalasyonu',
      image: 'assets/projects/interior_19.jpg'
    },
    {
      id: 720,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Oval Duvar Kitaplığı & Asma Çalışma Masası',
      image: 'assets/projects/interior_20.jpg'
    },
    {
      id: 721,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Pembe & Krem Temalı Ranza ve Gardırop Grubu',
      image: 'assets/projects/interior_21.jpg'
    },
    {
      id: 722,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Yeşil Mermer & Göbek Taşı Detaylı Özel Hamam',
      image: 'assets/projects/interior_22.jpg'
    },
    {
      id: 723,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Mavi Temalı Merdiven Depolamalı Çocuk Ranzası',
      image: 'assets/projects/interior_23.jpg'
    },
    {
      id: 724,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Dikey Peyzaj & Botanik Duvarlı Lüks WC',
      image: 'assets/projects/interior_24.jpg'
    },
    {
      id: 725,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Minimalist Beyaz Mutfak & Mermer Tezgah',
      image: 'assets/projects/interior_25.jpg'
    },
    {
      id: 726,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Sarı & Turkuaz Temalı Çocuk Odası TV Ünitesi',
      image: 'assets/projects/interior_26.jpg'
    },
    {
      id: 727,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ada Çayı Yeşili & Krem Ankastre Mutfak',
      image: 'assets/projects/interior_27.jpg'
    },
    {
      id: 728,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ada Çayı Yeşili Yemek Köşesi & Kahve Barı',
      image: 'assets/projects/interior_28.jpg'
    },
    {
      id: 729,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'L Tipi Camlı Dolaplı Gri Mutfak & Yemek Masası',
      image: 'assets/projects/interior_29.jpg'
    },
    {
      id: 730,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Yeşil Seramik & Botanik Duvarlı Çift Evyeli Banyo',
      image: 'assets/projects/interior_30.jpg'
    },
    {
      id: 731,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Klasik Kemerli Ahşap Konsol & Çıta Duvar Paneli',
      image: 'assets/projects/interior_31.jpg'
    },
    {
      id: 732,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Klasik Kemer Camlı Üst Dolap Mutfak Takımı',
      image: 'assets/projects/interior_32.jpg'
    },
    {
      id: 733,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Koyu Ahşap & Cam Vitrinli Lüks L Mutfak',
      image: 'assets/projects/interior_33.jpg'
    },
    {
      id: 734,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ahşap Çıta Koridor & Mutfak Giriş Kapısı Paneli',
      image: 'assets/projects/interior_34.jpg'
    },
    {
      id: 735,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Dikey Yeşil Fayanslı & Yaprak Desen Banyo',
      image: 'assets/projects/interior_35.jpg'
    },
    {
      id: 736,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Kemerli LED Işıklı Ayna & Mermer Lavabo Ünitesi',
      image: 'assets/projects/interior_36.jpg'
    },
    {
      id: 737,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Lüks Mermer Ada Tezgahı & Şaraplık Detayı',
      image: 'assets/projects/interior_37.jpg'
    },
    {
      id: 738,
      category: 'ic-mekanlar',
      categoryTag: 'İÇ MEKAN',
      title: 'Ada Çayı Yeşili Çift Yataklı Çocuk Odası',
      image: 'assets/projects/interior_38.jpg'
    },
    {
      id: 801,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Bronz Cam Gardıroplu Lüks Yatak Odası',
      image: 'assets/projects/residential_1.jpg'
    },
    {
      id: 802,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Gömme LED Şeritli TV Ünitesi & Modern Salon',
      image: 'assets/projects/residential_2.jpg'
    },
    {
      id: 803,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Mermer Başlıklı Yatak Odası & Aplik Enstalasyonu',
      image: 'assets/projects/residential_3.jpg'
    },
    {
      id: 804,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Lüks Villa Havuz Başı Cam Gazebo Lounge',
      image: 'assets/projects/residential_4.jpg'
    },
    {
      id: 805,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Prestij Yönetici Ofisi & Villa Karşılama Alanı',
      image: 'assets/projects/residential_5.jpg'
    },
    {
      id: 806,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Mermer Masa & Yuvarlak Aynalı Lüks Yemek Odası',
      image: 'assets/projects/residential_6.jpg'
    },
    {
      id: 807,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Kemerli LED Işıklı Makyaj Masası & Altın Perde',
      image: 'assets/projects/residential_7.jpg'
    },
    {
      id: 808,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Geniş Ahşap Çıta TV Ünitesi & Vitrin Dolabı',
      image: 'assets/projects/residential_8.jpg'
    },
    {
      id: 809,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'LED Aydınlatmalı TV Ünitesi Cephe Görünümü',
      image: 'assets/projects/residential_9.jpg'
    },
    {
      id: 810,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Bronz Patina Dokulu Lüks Mutfak & Yemek Masası',
      image: 'assets/projects/residential_10.jpg'
    },
    {
      id: 811,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Koyu Gri & Beyaz Geometrik Gardıroplu Yatak Odası',
      image: 'assets/projects/residential_11.jpg'
    },
    {
      id: 812,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Işıklı Şaraplık Vitrinli & Turuncu Tablolu Lüks Salon',
      image: 'assets/projects/residential_12.jpg'
    },
    {
      id: 813,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Sarı & Gri Temalı Kompakt Genç Odası',
      image: 'assets/projects/residential_13.jpg'
    },
    {
      id: 814,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Taş Duvarlı & Ahşap Sürgülü Kapılı Otantik Yatak Odası',
      image: 'assets/projects/residential_14.jpg'
    },
    {
      id: 815,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Lüks Villa Havuz Başı Ateş Çukuru & Pergola Barbekü',
      image: 'assets/projects/residential_15.jpg'
    },
    {
      id: 816,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Bronz Cam Gardıroplu & Yuvarlak Aynalı Yatak Odası',
      image: 'assets/projects/residential_16.jpg'
    },
    {
      id: 817,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Mermer Panelli & Altın Perdeli Yatak Odası',
      image: 'assets/projects/residential_17.jpg'
    },
    {
      id: 818,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Çıta Duvar Panelli & Lüks TV Ünitesi',
      image: 'assets/projects/residential_18.jpg'
    },
    {
      id: 819,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Çift LED Aynalı & Calacatta Mermer Banyo',
      image: 'assets/projects/residential_19.jpg'
    },
    {
      id: 820,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Taş Duvarlı & Ahşap Kirişli Villa Oturma Odası',
      image: 'assets/projects/residential_20.jpg'
    },
    {
      id: 821,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'L Koltuklu & TV Panelli Modern Yemek Köşesi',
      image: 'assets/projects/residential_21.jpg'
    },
    {
      id: 822,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Hazeran Başlıklı Doğal Meşe Komodin Detayı',
      image: 'assets/projects/residential_22.jpg'
    },
    {
      id: 823,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Özel Çıtalı Cam Separatör & Piyano Alanı',
      image: 'assets/projects/residential_23.jpg'
    },
    {
      id: 824,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ahşap Banyo Tezgahı & Mermer Evye Yakın Çekim',
      image: 'assets/projects/residential_24.jpg'
    },
    {
      id: 825,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Işıklı Aynalı & Raflı Ahşap Banyo Dolabı',
      image: 'assets/projects/residential_25.jpg'
    },
    {
      id: 826,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Organik Aynalı & Altın Detaylı Konsol Ünitesi',
      image: 'assets/projects/residential_26.jpg'
    },
    {
      id: 827,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Altın Çıtalı & Oturma Nişli Giriş Vestiyer Ünitesi',
      image: 'assets/projects/residential_27.jpg'
    },
    {
      id: 828,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Krem & Ahşap Gardırop Nişli Yatak Odası',
      image: 'assets/projects/residential_28.jpg'
    },
    {
      id: 829,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Pembe & Gri Merdiven Çekmeceli Çocuk Ranzası',
      image: 'assets/projects/residential_29.jpg'
    },
    {
      id: 830,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Doğal Meşe Asma TV Konsolu Detayı',
      image: 'assets/projects/residential_30.jpg'
    },
    {
      id: 831,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Brüt Beton Dokulu Duvar Paneli & TV Ünitesi',
      image: 'assets/projects/residential_31.jpg'
    },
    {
      id: 832,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Bronz Camlı & LED Aydınlatmalı Giyinme Odası Gardırobu',
      image: 'assets/projects/residential_32.jpg'
    },
    {
      id: 833,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Cam Gardırop İçi Işıklı Makyaj Masası',
      image: 'assets/projects/residential_33.jpg'
    },
    {
      id: 834,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ahşap Lambri Kaplamalı Misafir Yatak Odası',
      image: 'assets/projects/residential_34.jpg'
    },
    {
      id: 835,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Skandinav Tarzı Beyaz Başlıklı Yatak Odası',
      image: 'assets/projects/residential_35.jpg'
    },
    {
      id: 836,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Krem & Altın Çerçeve Cam Dolaplı Genç Odası',
      image: 'assets/projects/residential_36.jpg'
    },
    {
      id: 837,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Pudra Pembe Oyun Çadırlı & Bulut LED\'li Çocuk Odası',
      image: 'assets/projects/residential_37.jpg'
    },
    {
      id: 838,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Pencere Önü Çalışma Masalı Genç Odası',
      image: 'assets/projects/residential_38.jpg'
    },
    {
      id: 839,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ceviz Dolaplı & Bilgisayar Masalı Genç Odası',
      image: 'assets/projects/residential_39.jpg'
    },
    {
      id: 840,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ceviz & Beyaz Genç Odası Çalışma Ünitesi',
      image: 'assets/projects/residential_40.jpg'
    },
    {
      id: 841,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Pembe & Krem Kulübe Kitaplıklı Çocuk Gardırobu',
      image: 'assets/projects/residential_41.jpg'
    },
    {
      id: 842,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Mermer Konsol Tabanlı Ahşap TV Ünitesi',
      image: 'assets/projects/residential_42.jpg'
    },
    {
      id: 843,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Çıta Duvar Kaplamalı Entegre Cam Vitrinli Kapı',
      image: 'assets/projects/residential_43.jpg'
    },
    {
      id: 844,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Geniş Modüler Koltuklu & Aydınlatmalı Villa Salonu',
      image: 'assets/projects/residential_44.jpg'
    },
    {
      id: 845,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Gri Kadife Başlıklı Lüks Yatak Odası Enstalasyonu',
      image: 'assets/projects/residential_45.jpg'
    },
    {
      id: 846,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Çatı Katı Ahşap Kitaplık & Tripod Projektör Aydınlatma',
      image: 'assets/projects/residential_46.jpg'
    },
    {
      id: 847,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Bahçe Ahşap Köpek Evi & Kulübe Tasarımı',
      image: 'assets/projects/residential_47.jpg'
    },
    {
      id: 848,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Çatı Katı LED Şerit Aydınlatmalı Ahşap Çalışma Masası',
      image: 'assets/projects/residential_48.jpg'
    },
    {
      id: 849,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Su Yeşili Lambri Başlıklı & Botanik Duvar Kağıtlı Çocuk Odası',
      image: 'assets/projects/residential_49.jpg'
    },
    {
      id: 850,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Parlak Gri Ankastre Mutfak & Köşe Yemek Locası',
      image: 'assets/projects/residential_50.jpg'
    },
    {
      id: 851,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Lineer Aplikli Ahşap Lambri Oturma Odası Köşesi',
      image: 'assets/projects/residential_51.jpg'
    },
    {
      id: 852,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Japandi Tarzı Kemerli Kitaplıklı & Krem Oturma Odası',
      image: 'assets/projects/residential_52.jpg'
    },
    {
      id: 853,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Traverten Arka Fonlu Özel Ahşap TV Ünitesi',
      image: 'assets/projects/residential_53.jpg'
    },
    {
      id: 854,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Mermer Ada Tezgahlı & Kolon Spotlu Açık Mutfak',
      image: 'assets/projects/residential_54.jpg'
    },
    {
      id: 855,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Klasik Kemer Camlı Çift Kapı & Radyatör Kapatma Konsolu',
      image: 'assets/projects/residential_55.jpg'
    },
    {
      id: 856,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Klasik Pirinç Hamam Musluğu & Mermer Kurna Detayı',
      image: 'assets/projects/residential_56.jpg'
    },
    {
      id: 857,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ada Çayı Yeşili & Beyaz Country Mutfak & Kahve Köşesi',
      image: 'assets/projects/residential_57.jpg'
    },
    {
      id: 858,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ahşap Pergola İçi Şezlong Köşesi & Dinlenme Alanı',
      image: 'assets/projects/residential_58.jpg'
    },
    {
      id: 859,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Villa Bahçe Pergola Barbekü & Yemek Pavilyonu',
      image: 'assets/projects/residential_59.jpg'
    },
    {
      id: 860,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Lüks Villa Açık Havuz & Şezlong Gazebosu',
      image: 'assets/projects/residential_60.jpg'
    },
    {
      id: 861,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Ahşap Kaplama Sauna Odası & Taş Duvar Detayı',
      image: 'assets/projects/residential_61.jpg'
    },
    {
      id: 862,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Gömme LED Şeritli & Füme Cam Vitrinli TV Ünitesi',
      image: 'assets/projects/residential_62.jpg'
    },
    {
      id: 863,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Yarım Dairesel LED Işıklı & Ahşap Çıtalı Dresuar Ayna Ünitesi',
      image: 'assets/projects/residential_63.jpg'
    },
    {
      id: 864,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'LED Alt Aydınlatmalı Göbek Taşlı & Çifte Kurnalı Lüks Hamam',
      image: 'assets/projects/residential_64.jpg'
    },
    {
      id: 865,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Modern Lüks Krem Yatak Odası & Altın Detaylı Baza Yatak',
      image: 'assets/projects/residential_65.jpg'
    },
    {
      id: 866,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Modern Ankastre L Mutfak & Kahve Barı Tezgahı',
      image: 'assets/projects/residential_66.jpg'
    },
    {
      id: 867,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Siyah Mermer Kaplama Lüks Spa Banyo & Gömme Jakuzi',
      image: 'assets/projects/residential_67.jpg'
    },
    {
      id: 868,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Yuvarlak Aynalı & Pirinç Ayaklı Lüks Krem Makyaj Masası',
      image: 'assets/projects/residential_68.jpg'
    },
    {
      id: 869,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Siyah Mermer & Sauna Cam Kapılı Lüks Spa Alanı',
      image: 'assets/projects/residential_69.jpg'
    },
    {
      id: 870,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Çift Kemer Başuclu & Mavi Nevresimli Çocuk Yatak Ünitesi',
      image: 'assets/projects/residential_70.jpg'
    },
    {
      id: 871,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Puantiye Kapaklı & Kemer Makyaj Nişli Gardırop',
      image: 'assets/projects/residential_71.jpg'
    },
    {
      id: 872,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Bilye Ahşap Sütunlu Cibinlikli Çocuk Karyolası',
      image: 'assets/projects/residential_72.jpg'
    },
    {
      id: 873,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Koyu Ahşap Çıtalı Beşik Çatı Tavan Kaplaması',
      image: 'assets/projects/residential_73.jpg'
    },
    {
      id: 874,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Koyu Cila Ahşap Çıta Kaplamalı TV Ünitesi & Vitrin',
      image: 'assets/projects/residential_74.jpg'
    },
    {
      id: 875,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Klasik Çıtalı Lake Beyaz Gardırop Kapakları',
      image: 'assets/projects/residential_75.jpg'
    },
    {
      id: 876,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Klasik Siyah Banyo Konsolu & Mermer Tezgah Çifte Evye',
      image: 'assets/projects/residential_76.jpg'
    },
    {
      id: 877,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Klasik Siyah Tekli Banyo Lavabo Dolabı & Altın Musluk',
      image: 'assets/projects/residential_77.jpg'
    },
    {
      id: 878,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Koyu Cila Ahşap Lambri Duvar & Entegre Gizli Kapı',
      image: 'assets/projects/residential_78.jpg'
    },
    {
      id: 879,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'İçi LED Şerit Aydınlatmalı Beyaz Gardırop Düzenleyici',
      image: 'assets/projects/residential_79.jpg'
    },
    {
      id: 880,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Klasik Koyu Ahşap Banyo Dolabı & Mermer Lavabo Tezgahı',
      image: 'assets/projects/residential_80.jpg'
    },
    {
      id: 881,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Koyu Ahşap Banyo Dolabı & Cam Duş Kabinli Banyo',
      image: 'assets/projects/residential_81.jpg'
    },
    {
      id: 882,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Orta Çalışma Masası Nişli Krem Gömme Gardırop',
      image: 'assets/projects/residential_82.jpg'
    },
    {
      id: 883,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Açık Kapaklı LED Aydınlatmalı Krem Gömme Gardırop',
      image: 'assets/projects/residential_83.jpg'
    },
    {
      id: 884,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Fransız Pencere Yanı Koyu Cila LED Raflı Kitaplık',
      image: 'assets/projects/residential_84.jpg'
    },
    {
      id: 885,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Modern Gri Köşe Yuvarlatılmış Kütüphaneli Gardırop & Masa',
      image: 'assets/projects/residential_85.jpg'
    },
    {
      id: 886,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Takı & Aksesuar Bölmeli Çekmeceli Lake Makyaj Masası Nişi',
      image: 'assets/projects/residential_86.jpg'
    },
    {
      id: 887,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Koyu Ahşap Şömine Çevresi Kütüphane & Dekoratif Aplikler',
      image: 'assets/projects/residential_87.jpg'
    },
    {
      id: 888,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Doğal Taş Şömine Bacası & Yan LED Aydınlatmalı Kitaplıklar',
      image: 'assets/projects/residential_88.jpg'
    },
    {
      id: 889,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Kemerli LED Aydınlatmalı Gömme Kitaplık & Gri Kavisli L Koltuk',
      image: 'assets/projects/residential_89.jpg'
    },
    {
      id: 890,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Sarı & Mavi Modern Özel Çalışma Masası & Ünite Tasarımı',
      image: 'assets/projects/residential_90.jpg'
    },
    {
      id: 891,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Kemer Camlı Üst Dolaplı Krem Ankastre Mutfak',
      image: 'assets/projects/residential_91.jpg'
    },
    {
      id: 892,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Kasetli Ahşap Duvar Paneli & Tavan Kaplaması Entegre Aplikli',
      image: 'assets/projects/residential_92.jpg'
    },
    {
      id: 893,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Dikey LED Işıklı & Çıtalı Makyaj Masası Ünitesi',
      image: 'assets/projects/residential_93.jpg'
    },
    {
      id: 894,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Baza Entegre Gardıroplu & Cam Vitrinli Lüks Gri Yatak Odası',
      image: 'assets/projects/residential_94.jpg'
    },
    {
      id: 895,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Oval LED Işıklı Ayna & Flüt Profilli Lavabo Tezgahı',
      image: 'assets/projects/residential_95.jpg'
    },
    {
      id: 896,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Entegre Çamaşır & Kurutma Makinesi Dolap Ünitesi & Duşakabin',
      image: 'assets/projects/residential_96.jpg'
    },
    {
      id: 897,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Kemer LED Nişli Ahşap Meşe Lavabo Konsolu & Ayna',
      image: 'assets/projects/residential_97.jpg'
    },
    {
      id: 898,
      category: 'konut',
      categoryTag: 'KONUT',
      title: 'Kemerli Ahşap Arka Fonlu & Yivli Cam Kapaklı Büfe / Kahve Barı',
      image: 'assets/projects/residential_98.jpg'
    },
    // MAĞAZA PROJELERİ (IDs 901–931)
    { id: 901, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Mücevher & Takı Kiosku Standı (MERJ Jewellery)', image: 'assets/projects/store_1.jpg' },
    { id: 902, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Giyim Mağazası Tavan LED Aydınlatma & Toplantı Masası (ARDEM)', image: 'assets/projects/store_2.jpg' },
    { id: 903, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Modern Kadın Giyim Mağazası Karşılama Bankosu (MARCHA PRIVE)', image: 'assets/projects/store_3.jpg' },
    { id: 904, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Kuaför & Güzellik Salonu Yıkama Üniteleri & Makyaj Alanı', image: 'assets/projects/store_4.jpg' },
    { id: 905, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Güzellik Salonu Aynalı Stantlar & Neon Tabela Tasarımı', image: 'assets/projects/store_5.jpg' },
    { id: 906, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Endüstriyel Konsept Spor Ayakkabı & Giyim Mağazası Stantları', image: 'assets/projects/store_6.jpg' },
    { id: 907, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Gold Detaylı Ahşap Çıtalı Kadın Butik Stantları', image: 'assets/projects/store_7.jpg' },
    { id: 908, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Modern İç Giyim & Mağaza Modüler Duvar Reyonları', image: 'assets/projects/store_8.jpg' },
    { id: 909, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Özel Perfore Metal Döner Ayakkabılık Teşhir Ünitesi', image: 'assets/projects/store_9.jpg' },
    { id: 910, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Pembe LED Konseptli İç Giyim Duvar Teşhir Ünitesi', image: 'assets/projects/store_10.jpg' },
    { id: 911, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Minimalist Beton Kaplama Asılı Giysi Askılıkları', image: 'assets/projects/store_11.jpg' },
    { id: 912, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Ahşap Klasik Ayakkabı & Çanta Teşhir Dolap Üniteleri', image: 'assets/projects/store_12.jpg' },
    { id: 913, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Kırmızı & Siyah LED Aydınlatmalı Konsept Taraftar Mağazası (Erzincanspor)', image: 'assets/projects/store_13.jpg' },
    { id: 914, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Nefti Yeşil & Taba Deri Duvar Kaplamalı Erkek Takım Elbise Mağazası', image: 'assets/projects/store_14.jpg' },
    { id: 915, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lüks Erkek Giyim Karşılama Alanı, Kahve Barı & Oturma Grubu', image: 'assets/projects/store_15.jpg' },
    { id: 916, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Çikolata & Lokum Mağazası Ada Tezgahı & Asma Tavan (BAKIRKAZAN)', image: 'assets/projects/store_16.jpg' },
    { id: 917, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Kuyumcu Mağazası Vitrin & Lambri Duvar Tasarımı (MARKA GOLD)', image: 'assets/projects/store_17.jpg' },
    { id: 918, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Lokum & Tatlı Mağazası Duvara Entegre Kapaklı Raflar & Servis Adası', image: 'assets/projects/store_18.jpg' },
    { id: 919, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Beton Stilde Modern Duvar Sergileme Rafları', image: 'assets/projects/store_19.jpg' },
    { id: 920, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Pembe Bordo Kadife Temalı Kuyumcu / Takı Mağazası Vitrini', image: 'assets/projects/store_20.jpg' },
    { id: 921, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Mermer Tabanlı Bilyeli Lambri Duvarlı Altın Takı Teşhir Standı', image: 'assets/projects/store_21.jpg' },
    { id: 922, category: 'magaza', categoryTag: 'MAĞAZA', title: 'LED Şeritli & Cam Kapaklı Kuruyemiş & Gurme Ürün Stantları', image: 'assets/projects/store_22.jpg' },
    { id: 923, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Yeşil & Ahşap Konseptli Butik Giyim Bankosu (RAYYEN)', image: 'assets/projects/store_23.jpg' },
    { id: 924, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Geometrik Ahşap Lambri Panelli & Metal Askılıklı Duvar Reyonları', image: 'assets/projects/store_24.jpg' },
    { id: 925, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Calacatta Mermer Duvar & Rose Gold Askılıklı Butik (ZÜHRE)', image: 'assets/projects/store_25.jpg' },
    { id: 926, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Calacatta Mermer Duvar & Dairesel Aynalı Butik Dinlenme Salonu', image: 'assets/projects/store_26.jpg' },
    { id: 927, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Şarküteri & Gurme Ürünler Kavisli Soğutuculu Teşhir Reyonu', image: 'assets/projects/store_27.jpg' },
    { id: 928, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Gurme Mağaza Kavisli Dolap & Camlı Soğutucu Teşhir Ünitesi', image: 'assets/projects/store_28.jpg' },
    { id: 929, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Ahşap Kaplama Duvar Rafları & Ambalajlı Gurme Ürün Reyonları', image: 'assets/projects/store_29.jpg' },
    { id: 930, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Calacatta Mermer Zemin & Gold Butik Salonu Giriş Alanı', image: 'assets/projects/store_30.jpg' },
    { id: 931, category: 'magaza', categoryTag: 'MAĞAZA', title: 'Rose Gold Metal Giysi Askılıkları & Orta Çekmeceli Teşhir Adası', image: 'assets/projects/store_31.jpg' },
    // SHOWROOM PROJELERİ (IDs 932–949)
    { id: 932, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Lüks Deri & Çanta Showroom İç Mekan & Aynalı Tavan Tasarımı', image: 'assets/projects/showroom_1.jpg' },
    { id: 933, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Yuvarlak Yuvalı LED Işıklı Aynalı Showroom Sergileme Alanı', image: 'assets/projects/showroom_2.jpg' },
    { id: 934, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Taş Duvar Dokulu Karşılama Bankosu & Modern Showroom Ofisi (ACAR)', image: 'assets/projects/showroom_3.jpg' },
    { id: 935, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Ahşap Çıtalı & LED Şeritli Takım Elbise Showroom Karşılama Bankosu (CEMDEN)', image: 'assets/projects/showroom_4.jpg' },
    { id: 936, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Kaktüs Dekoru & Beton Panel Showroom Fotoğraf Stüdyosu', image: 'assets/projects/showroom_5.jpg' },
    { id: 937, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Turuncu Deri Koltuklu & Halılı Lüks Çanta Showroom Oturma Grubu', image: 'assets/projects/showroom_6.jpg' },
    { id: 938, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Aynalı & Raf Sistemli Lüks Butik Showroom Salonu', image: 'assets/projects/showroom_7.jpg' },
    { id: 939, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Ahşap Raflı & Sütun LED Aydınlatmalı Tekstil Showroom Sergisi', image: 'assets/projects/showroom_8.jpg' },
    { id: 940, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Ahşap Kaplama Raylı & LED Nişli Showroom Reyonu', image: 'assets/projects/showroom_9.jpg' },
    { id: 941, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Altın Çerçeveli LED Şeritli Özel Çanta Showroom Vitrini', image: 'assets/projects/showroom_10.jpg' },
    { id: 942, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Krem Ahşap Raflı & LED Işıklı Lüks Çanta Showroom Reyonu', image: 'assets/projects/showroom_11.jpg' },
    { id: 943, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Özel Aydınlatmalı Ahşap & Metal Kumaş Teşhir Ünitesi (Showroom)', image: 'assets/projects/showroom_12.jpg' },
    { id: 944, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Ahşap Kaset Tavanlı & LED Şeritli Geniş Showroom Alanı', image: 'assets/projects/showroom_13.jpg' },
    { id: 945, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Ahşap Kaset Tavan & Duvar Modüler Kumaş Teşhir Reyonları', image: 'assets/projects/showroom_14.jpg' },
    { id: 946, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Pudra & Krem Deri Çanta Showroom Sergileme Ünitesi', image: 'assets/projects/showroom_15.jpg' },
    { id: 947, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Yeşil & Mermer Konseptli Çantalı Lüks Showroom Çalışma Masası (PRADA MARFA)', image: 'assets/projects/showroom_16.jpg' },
    { id: 948, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Açık Renk Mermer Zeminli Lüks Çanta Showroom Koridoru', image: 'assets/projects/showroom_17.jpg' },
    { id: 949, category: 'showroom', categoryTag: 'SHOWROOM', title: 'Minimalist Beton Duvar & LED Nişli Butik Showroom Teşhir Alanı', image: 'assets/projects/showroom_18.jpg' },
    // OFİS PROJELERİ (IDs 951–963)
    { id: 951, category: 'ofis', categoryTag: 'OFİS', title: 'Modern Yönetici Masası & Dünya Haritası Metal Duvar Sanatı', image: 'assets/projects/office_1.jpg' },
    { id: 952, category: 'ofis', categoryTag: 'OFİS', title: 'Yivli Cam Kapaklı LED Kütüphane & Lüks Ofis Oturma Grubu', image: 'assets/projects/office_2.jpg' },
    { id: 953, category: 'ofis', categoryTag: 'OFİS', title: 'Klinik / Muayenehane Çalışma Masası & Sanat Tablosu Tasarımı', image: 'assets/projects/office_3.jpg' },
    { id: 954, category: 'ofis', categoryTag: 'OFİS', title: 'Yönetici Makam Masası & Özel Çıtalı Kütüphane Ünitesi', image: 'assets/projects/office_4.jpg' },
    { id: 955, category: 'ofis', categoryTag: 'OFİS', title: 'LED Aydınlatmalı Kütüphane Kitaplık & Özel Ölçü Dolaplar', image: 'assets/projects/office_5.jpg' },
    { id: 956, category: 'ofis', categoryTag: 'OFİS', title: 'Ahşap Duvar Panel TV Ünitesi & Konsol (PlayStation Store Ekranlı)', image: 'assets/projects/office_6.jpg' },
    { id: 957, category: 'ofis', categoryTag: 'OFİS', title: 'Model Araba Koleksiyonu Vitrinli Toplantı Odası & Akustik Duvar', image: 'assets/projects/office_7.jpg' },
    { id: 958, category: 'ofis', categoryTag: 'OFİS', title: 'Ahşap Lambri Panel & TV Konsolu Yan Görünüm', image: 'assets/projects/office_8.jpg' },
    { id: 959, category: 'ofis', categoryTag: 'OFİS', title: 'Dikey Bahçe / Canlı Bitki Panelli Ahşap Toplantı Masası', image: 'assets/projects/office_9.jpg' },
    { id: 960, category: 'ofis', categoryTag: 'OFİS', title: 'Ahşap Lambri Panel & TV Konsolu Ön Görünüm', image: 'assets/projects/office_10.jpg' },
    { id: 961, category: 'ofis', categoryTag: 'OFİS', title: 'LED Aydınlatmalı Ahşap Kütüphane & Dinlenme Koltuğu', image: 'assets/projects/office_11.jpg' },
    { id: 962, category: 'ofis', categoryTag: 'OFİS', title: 'İkili Yönetici Masası & Cam Kapaklı LED Kütüphane Kitaplık', image: 'assets/projects/office_12.jpg' },
    { id: 963, category: 'ofis', categoryTag: 'OFİS', title: 'Doğal Taş Kaplamalı Lüks Yönetici Odası & Yivli Cam Kütüphane', image: 'assets/projects/office_13.jpg' },
    // OTEL PROJELERİ (IDs 971–978)
    { id: 971, category: 'otel', categoryTag: 'OTEL', title: 'Yeşil Mermer Kaplama & Çini Motifli Türk Hamamı & Spa Masaj Alanı', image: 'assets/projects/hotel_1.jpg' },
    { id: 972, category: 'otel', categoryTag: 'OTEL', title: 'Otel Bistro & Kafe Dış Mekan Oturma Alanı (Gece Işıklandırması)', image: 'assets/projects/hotel_2.jpg' },
    { id: 973, category: 'otel', categoryTag: 'OTEL', title: 'Calacatta Mermer Fonlu Lüks Otel Suit Odası & Ahşap Aynalı Gardırop', image: 'assets/projects/hotel_3.jpg' },
    { id: 974, category: 'otel', categoryTag: 'OTEL', title: 'Calacatta Mermer Fonlu Lüks Otel Suit Odası & Yivli Cam LED Gardırop', image: 'assets/projects/hotel_4.jpg' },
    { id: 975, category: 'otel', categoryTag: 'OTEL', title: 'Klasik Oymalı Sütunlu Kafe & Kahve Barı Teşhir Dolabı (LUMIÈRE)', image: 'assets/projects/hotel_5.jpg' },
    { id: 976, category: 'otel', categoryTag: 'OTEL', title: 'Ahşap Çıtalı Koridor & Taş Yürüyüş Yolu / Zen Geçidi Tasarımı', image: 'assets/projects/hotel_6.jpg' },
    { id: 977, category: 'otel', categoryTag: 'OTEL', title: 'Lüks Mermer Bar Tezgahı & İçki Sergileme Reyon Ünitesi', image: 'assets/projects/hotel_7.jpg' },
    { id: 978, category: 'otel', categoryTag: 'OTEL', title: 'Lüks Siyah & Calacatta Mermer Lavabo Tasarımı', image: 'assets/projects/hotel_8.jpg' },
    // RESTORAN & KAFE PROJELERİ (IDs 981–995)
    { id: 981, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Gurme Bahçeşehir Restoran Gece Dış Cephe & Otopark Görünümü', image: 'assets/projects/restaurant_1.jpg' },
    { id: 983, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Panoramik Cam Tavan Kristal Avizeli Lüks Teras Restoran', image: 'assets/projects/restaurant_3.jpg' },
    { id: 982, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Gurme Bahçeşehir Gece Dış Cephe Işıklandırması & Tabela', image: 'assets/projects/restaurant_2.jpg' },
    { id: 984, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Teras Restoran Boğaz Manzaralı Salon & Özel Masalar', image: 'assets/projects/restaurant_4.jpg' },
    { id: 985, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Gece Yağmurlu Dış Mekan Restoran & Lounge Dış Cephe', image: 'assets/projects/restaurant_5.jpg' },
    { id: 986, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Şömineli & Sıcak Aydınlatmalı Lüks Restoran İç Mekanı', image: 'assets/projects/restaurant_6.jpg' },
    { id: 987, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Restoran Sarkıt Aydınlatma & Şömineli Oturma Düzeni', image: 'assets/projects/restaurant_7.jpg' },
    { id: 988, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Kuş Bakışı Şömineli Restoran & Tavla Masaları Oyun Alanı', image: 'assets/projects/restaurant_8.jpg' },
    { id: 989, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Lumière Pastane & Butik Kafe Dış Cephe Tasarımı', image: 'assets/projects/restaurant_9.jpg' },
    { id: 990, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Kahvaltı & Zeytinyağlılar Gurme Teşhir Reyonu (Gurme Bahçeşehir)', image: 'assets/projects/restaurant_10.jpg' },
    { id: 991, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Şarküteri Reyonu & Ahşap Lambri Tavan Tasarımı', image: 'assets/projects/restaurant_11.jpg' },
    { id: 992, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Gurme Restoran İç Mekan Teşhir Reyonları & Yürüyüş Yolu', image: 'assets/projects/restaurant_12.jpg' },
    { id: 993, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Cafe & Kahve Barı Ahşap Lambri Tezgah Tasarımı', image: 'assets/projects/restaurant_13.jpg' },
    { id: 994, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Gurme Sıcak Yemek Reyonu & Servis Bankosu Tasarımı', image: 'assets/projects/restaurant_14.jpg' },
    { id: 995, category: 'restoran-kafe', categoryTag: 'RESTORAN & KAFE', title: 'Cam Tavanlı Kış Bahçesi Restoran Oturma Alanı', image: 'assets/projects/restaurant_15.jpg' }
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

  // Selected top 9 showcase items for Konut, Mağaza, Ofis, and Restoran & Kafe
  const topKonutIds = [804, 819, 853, 864, 852, 867, 815, 889, 888];
  const topMagazaIds = [901, 903, 915, 917, 925, 902, 913, 923, 930];
  const topOfisIds = [951, 952, 957, 959, 962, 963, 954, 956, 961];
  const topShowroomIds = [932, 933, 934, 935, 936, 937, 938, 939, 940];
  const topRestoranIds = [981, 983, 982, 986, 990, 991, 988, 985, 995];

  let currentVisibleLimit = 9;

  function renderProjects(filter = 'all', limit = 9) {
    if (!projectsContainer) return;
    currentFilter = filter;
    currentVisibleLimit = limit;
    projectsContainer.innerHTML = '';

    // Remove existing floating collapse button if any
    const oldFloatingBtn = document.getElementById('floatingCollapseWidget');
    if (oldFloatingBtn) oldFloatingBtn.remove();

    if (filter === 'all') {
      currentVisibleLimit = 9;
      // Top 9 curated showcase photos across categories
      const featuredIds = [804, 702, 819, 853, 710, 864, 852, 735, 867];
      let featuredItems = projectItems.filter(item => featuredIds.includes(item.id));
      
      if (featuredItems.length < 9) {
        featuredItems = projectItems.slice(0, 9);
      }

      const gridDiv = document.createElement('div');
      gridDiv.className = 'projects-grid';
      gridDiv.innerHTML = featuredItems.map((item, idx) => createProjectCardHTML(item, idx)).join('');
      projectsContainer.appendChild(gridDiv);

      const bannerDiv = document.createElement('div');
      bannerDiv.className = 'all-projects-banner';
      bannerDiv.innerHTML = `
        <p data-tr="Ana sayfada en seçkin 9 mimari projemiz sergilenmektedir. Tüm 135+ proje görselini incelemek için yukarıdaki kategorilere (ör. Konut, İç Mekan) tıklayabilirsiniz." data-en="Showing 9 featured architectural projects on the main page. Click category tabs above (e.g., Residential, Interiors) to explore all 135+ projects.">
          <i class="fas fa-sparkles text-gold" style="margin-right: 6px;"></i> Ana sayfada en seçkin <strong style="color: var(--accent-gold);">9 mimari projemiz</strong> sergilenmektedir. Tüm <strong style="color: #fff;">135+ proje görselini</strong> incelemek için yukarıdaki kategorilere (ör. <strong style="color: var(--accent-gold);">Konut</strong>, <strong style="color: var(--accent-gold);">İç Mekan</strong>) tıklayabilirsiniz.
        </p>
      `;
      projectsContainer.appendChild(bannerDiv);

      // Attach click listeners for modal with exact items list
      gridDiv.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = parseInt(card.getAttribute('data-id'), 10);
          openProjectModal(id, 'all', featuredItems);
        });
      });
      return;
    }

    // Category Specific Filter (e.g., 'konut', 'magaza', 'ofis', 'otel', 'restoran-kafe', 'ic-mekanlar')
    const allCategoryItems = projectItems.filter(item => item.category === filter);

    if (allCategoryItems.length === 0) {
      projectsContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted); width: 100%;">
          <i class="fas fa-images text-gold" style="font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
          <p style="font-size: 1.1rem; color: #fff;" data-tr="Yeni projelerimiz yakında yüklenecektir." data-en="New projects will be uploaded soon.">Yeni projelerimiz yakında yüklenecektir.</p>
        </div>
      `;
      return;
    }

    // Prepare items list (If Konut, Mağaza, Ofis or Restoran-Kafe, prioritize the top 9 curated images first)
    let sortedList = [...allCategoryItems];
    if (filter === 'konut') {
      const top9Konut = topKonutIds.map(id => allCategoryItems.find(item => item.id === id)).filter(Boolean);
      const remainingKonut = allCategoryItems.filter(item => !topKonutIds.includes(item.id));
      sortedList = [...top9Konut, ...remainingKonut];
    } else if (filter === 'magaza') {
      const top9Magaza = topMagazaIds.map(id => allCategoryItems.find(item => item.id === id)).filter(Boolean);
      const remainingMagaza = allCategoryItems.filter(item => !topMagazaIds.includes(item.id));
      sortedList = [...top9Magaza, ...remainingMagaza];
    } else if (filter === 'ofis') {
      const top9Ofis = topOfisIds.map(id => allCategoryItems.find(item => item.id === id)).filter(Boolean);
      const remainingOfis = allCategoryItems.filter(item => !topOfisIds.includes(item.id));
      sortedList = [...top9Ofis, ...remainingOfis];
    } else if (filter === 'showroom') {
      const top9Showroom = topShowroomIds.map(id => allCategoryItems.find(item => item.id === id)).filter(Boolean);
      const remainingShowroom = allCategoryItems.filter(item => !topShowroomIds.includes(item.id));
      sortedList = [...top9Showroom, ...remainingShowroom];
    } else if (filter === 'restoran-kafe') {
      const top9Restoran = topRestoranIds.map(id => allCategoryItems.find(item => item.id === id)).filter(Boolean);
      const remainingRestoran = allCategoryItems.filter(item => !topRestoranIds.includes(item.id));
      sortedList = [...top9Restoran, ...remainingRestoran];
    }

    const itemsToDisplay = sortedList.slice(0, currentVisibleLimit);

    // If showing more than 9 items, add a Top Control Bar right above the grid
    if (currentVisibleLimit > 9) {
      const topBar = document.createElement('div');
      topBar.className = 'projects-top-bar';
      topBar.innerHTML = `
        <span style="font-size: 0.85rem; color: var(--text-muted);">
          <i class="fas fa-eye text-gold" style="margin-right: 6px;"></i> Gösterilen: <strong style="color: #fff;">${itemsToDisplay.length} / ${sortedList.length} Görsel</strong>
        </span>
        <button class="small-outline-btn" id="topCollapseBtn" style="padding: 0.4rem 1.1rem; font-size: 0.78rem;">
          <i class="fas fa-chevron-up"></i> Daha Az Göster
        </button>
      `;
      projectsContainer.appendChild(topBar);

      const topCollapseBtn = topBar.querySelector('#topCollapseBtn');
      if (topCollapseBtn) {
        topCollapseBtn.addEventListener('click', () => {
          renderProjects(filter, 9);
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      // Create Floating Quick Collapse Button on bottom right
      const floatingBtn = document.createElement('button');
      floatingBtn.id = 'floatingCollapseWidget';
      floatingBtn.className = 'floating-collapse-btn';
      floatingBtn.innerHTML = `<i class="fas fa-compress-alt"></i> Daha Az Göster`;
      document.body.appendChild(floatingBtn);

      floatingBtn.addEventListener('click', () => {
        renderProjects(filter, 9);
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const gridDiv = document.createElement('div');
    gridDiv.className = 'projects-grid';
    gridDiv.innerHTML = itemsToDisplay.map((item, idx) => createProjectCardHTML(item, idx)).join('');
    projectsContainer.appendChild(gridDiv);

    // Add Bottom Control Bar ("Devamını Gör" / "Daha Az Göster")
    if (sortedList.length > 9) {
      const loadMoreWrapper = document.createElement('div');
      loadMoreWrapper.className = 'load-more-wrapper';
      loadMoreWrapper.style.gap = '0.75rem';
      loadMoreWrapper.style.flexWrap = 'wrap';

      if (currentVisibleLimit < sortedList.length) {
        loadMoreWrapper.innerHTML = `
          <button class="small-gold-btn" id="loadMoreBtn">
            <i class="fas fa-chevron-down"></i> Devamını Gör
          </button>
        `;

        if (currentVisibleLimit > 9) {
          loadMoreWrapper.innerHTML += `
            <button class="small-outline-btn" id="bottomCollapseBtn">
              <i class="fas fa-chevron-up"></i> Daha Az Göster
            </button>
          `;
        }

        projectsContainer.appendChild(loadMoreWrapper);

        const loadMoreBtn = loadMoreWrapper.querySelector('#loadMoreBtn');
        if (loadMoreBtn) {
          loadMoreBtn.addEventListener('click', () => {
            renderProjects(filter, currentVisibleLimit + 9);
          });
        }

        const bottomCollapseBtn = loadMoreWrapper.querySelector('#bottomCollapseBtn');
        if (bottomCollapseBtn) {
          bottomCollapseBtn.addEventListener('click', () => {
            renderProjects(filter, 9);
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      } else {
        // All photos displayed -> show Collapse button
        loadMoreWrapper.innerHTML = `
          <button class="small-outline-btn" id="bottomCollapseBtn">
            <i class="fas fa-chevron-up"></i> Daha Az Göster
          </button>
        `;
        projectsContainer.appendChild(loadMoreWrapper);

        const bottomCollapseBtn = loadMoreWrapper.querySelector('#bottomCollapseBtn');
        if (bottomCollapseBtn) {
          bottomCollapseBtn.addEventListener('click', () => {
            renderProjects(filter, 9);
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      }
    }

    // Attach click listeners to cards for modal lightbox - MATCHES EXACT ITEM BY ID AND CURRENT SORTED LIST
    gridDiv.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        openProjectModal(id, filter, sortedList);
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
      renderProjects(filter, 9);
    });
  });

  renderProjects('all', 9);



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

  function openProjectModal(targetIdOrIndex, categoryFilter = null, customSortedList = null) {
    if (!projectModal) return;

    if (customSortedList && Array.isArray(customSortedList) && customSortedList.length > 0) {
      activeModalList = [...customSortedList];
    } else {
      const filterToUse = categoryFilter !== null ? categoryFilter : currentFilter;
      if (filterToUse && filterToUse !== 'all') {
        activeModalList = projectItems.filter(p => p.category === filterToUse);
      } else {
        activeModalList = [...projectItems];
      }
    }

    let foundIndex = -1;
    if (typeof targetIdOrIndex === 'number') {
      foundIndex = activeModalList.findIndex(p => p.id === targetIdOrIndex);
      if (foundIndex === -1 && targetIdOrIndex >= 0 && targetIdOrIndex < activeModalList.length) {
        foundIndex = targetIdOrIndex;
      }
    }

    currentProjectIndex = foundIndex !== -1 ? foundIndex : 0;
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
      const waUrl = `https://wa.me/905518601842?text=${encodedMsg}`;

      // Open Emre Gökbayrak WhatsApp directly
      window.open(waUrl, '_blank');

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
