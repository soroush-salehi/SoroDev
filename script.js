/* =====================================================
   SoroDev — script.js
   تمام رفتارهای تعاملی سایت
   ساختار: هر ویژگی داخل یک تابع مجزا + یک نقطه‌ی اجرای واحد در پایین فایل
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------
     1) Page Loader
     وقتی صفحه کامل لود شد، لودر با فید محو می‌شود
     و کلاس page-ready روی body اضافه می‌شود تا انیمیشن
     ورود Hero (در animations.css) اجرا شود.
  ----------------------------------------------------- */
  function initLoader() {
    const loader = document.getElementById('loader');
    const barFill = loader ? loader.querySelector('.loader-bar-fill') : null;

    if (barFill) {
      requestAnimationFrame(() => {
        barFill.style.transition = 'width 0.8s ease';
        barFill.style.width = '100%';
      });
    }

    window.addEventListener('load', () => {
      setTimeout(() => {
        if (loader) loader.classList.add('loaded');
        document.body.classList.add('page-ready');
      }, 500);
    });

    // Fallback: اگر رویداد load به هر دلیلی دیر شد، حداکثر بعد از ۲.۵ ثانیه ادامه بده
    setTimeout(() => {
      if (loader && !loader.classList.contains('loaded')) {
        loader.classList.add('loaded');
        document.body.classList.add('page-ready');
      }
    }, 2500);
  }

  /* -----------------------------------------------------
     2) Dark / Light Mode با ذخیره در LocalStorage
  ----------------------------------------------------- */
  function initThemeToggle() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');
    const STORAGE_KEY = 'sorodev-theme';

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      root.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      root.setAttribute('data-theme', 'dark');
    }

    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const nextTheme = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
    });
  }

  /* -----------------------------------------------------
     3) هدر: تغییر ظاهر هنگام اسکرول
  ----------------------------------------------------- */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const updateHeader = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* -----------------------------------------------------
     4) منوی موبایل
  ----------------------------------------------------- */
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('navOverlay');
    if (!menuBtn || !nav || !overlay) return;

    function openMenu() {
      nav.classList.add('open');
      overlay.classList.add('active');
      menuBtn.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    }

    function closeMenu() {
      nav.classList.remove('open');
      overlay.classList.remove('active');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }

    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // بستن منو با کلیک روی هر لینک (تجربه‌ی کاربری بهتر در موبایل)
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // بستن منو با کلید Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* -----------------------------------------------------
     5) لینک فعال ناوبری بر اساس بخش قابل‌مشاهده
  ----------------------------------------------------- */
  function initActiveNav() {
    const sections = document.querySelectorAll('main section[id], .hero[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-nav') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* -----------------------------------------------------
     6) افکت تایپینگ در Hero
  ----------------------------------------------------- */
  function initTypingEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;

    const phrases = [
      'توسعه‌دهنده وب',
      'برنامه‌نویس جاوا اسکریپت'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const TYPE_SPEED = 90;
    const DELETE_SPEED = 45;
    const PAUSE_AFTER_TYPE = 1400;
    const PAUSE_AFTER_DELETE = 400;

    function tick() {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        charIndex++;
        el.textContent = currentPhrase.slice(0, charIndex);

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        setTimeout(tick, TYPE_SPEED);

      } else {
        charIndex--;
        el.textContent = currentPhrase.slice(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        setTimeout(tick, DELETE_SPEED);
      }
    }

    tick();
  }

  /* -----------------------------------------------------
     7) Scroll Reveal عمومی (تمام [data-reveal])
  ----------------------------------------------------- */
  function initScrollReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(item => observer.observe(item));
  }

  /* -----------------------------------------------------
     8) Counter Animation (آمار بخش درباره‌ی من)
  ----------------------------------------------------- */
  function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      const duration = 1400;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(eased * target);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
  }

  /* -----------------------------------------------------
     9) Progress Animation (نوار مهارت‌ها)
  ----------------------------------------------------- */
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill[data-percent]');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percent = bar.getAttribute('data-percent') || '0';
          requestAnimationFrame(() => {
            bar.style.width = percent + '%';
          });
          obs.unobserve(bar);
        }
      });
    }, { threshold: 0.6 });

    bars.forEach(bar => observer.observe(bar));
  }

  /* -----------------------------------------------------
     10) FAQ Accordion
  ----------------------------------------------------- */
  function initFaq() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // بستن بقیه‌ی آیتم‌ها (رفتار Accordion تک‌بازشو)
        items.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-answer').style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          question.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* -----------------------------------------------------
     11) دکمه بازگشت به بالا
  ----------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -----------------------------------------------------
     12) Lazy Loading تصاویر (پشتیبانی/تقویت loading="lazy")
  ----------------------------------------------------- */
  function initLazyImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if (!images.length) return;

    if (!('IntersectionObserver' in window)) return; // مرورگر native خودش هندل می‌کند

    images.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const img = entry.target;

        const reveal = () => { img.style.opacity = '1'; };
        if (img.complete) {
          reveal();
        } else {
          img.addEventListener('load', reveal, { once: true });
        }
        obs.unobserve(img);
      });
    }, { rootMargin: '100px' });

    images.forEach(img => observer.observe(img));
  }

  /* -----------------------------------------------------
     13) اسکرول نرم برای لینک‌های داخلی (پشتیبان CSS scroll-behavior)
  ----------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* -----------------------------------------------------
     14) فرم تماس (اعتبارسنجی ساده + پیام موفقیت)
     توجه: این فرم فعلاً بک‌اند ندارد و فقط پیام تاییدیه نمایش می‌دهد.
  ----------------------------------------------------- */
function initContactForm() {

    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (!form) return;


    form.addEventListener('submit', async (e) => {

      e.preventDefault();


      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;


      submitBtn.textContent = 'در حال ارسال...';
      submitBtn.disabled = true;



      const formData = new FormData(form);



      try {


        const response = await fetch(
          'backend/contact/send.php',
          {
            method: 'POST',
            body: formData
          }
        );



        const result = await response.json();



        if(result.status === "success"){


          submitBtn.textContent = 'پیام ارسال شد ✓';


          if(status){

            status.textContent =
            "پیام شما با موفقیت ارسال شد 🚀";

            status.style.color = "green";

          }


          form.reset();



        }else{


          submitBtn.textContent = originalText;


          if(status){

            status.textContent =
            "خطایی رخ داد، دوباره تلاش کنید";

            status.style.color = "red";

          }


        }



      } catch(error){


        console.log(error);


        submitBtn.textContent = originalText;


        if(status){

          status.textContent =
          "خطا در اتصال به سرور";

          status.style.color = "red";

        }


      }



      setTimeout(()=>{

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

      },2500);



    });

}
  /* -----------------------------------------------------
     اجرای همه‌ی ماژول‌ها
  ----------------------------------------------------- */
  initLoader();
  initThemeToggle();
  initHeaderScroll();
  initMobileMenu();
  initActiveNav();
  initTypingEffect();
  initScrollReveal();
  initCounters();
  initSkillBars();
  initFaq();
  initBackToTop();
  initLazyImages();
  initSmoothScroll();
  initContactForm();

});