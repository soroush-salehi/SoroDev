(() => {
  const translations = {
    en: {
      navAbout:"About",navSkills:"Skills",navProjects:"Projects",navContact:"Contact",
      availability:"Building things for the web",heroKicker:"INDEPENDENT DEVELOPER · CREATOR",heroLineOne:"Ideas into",heroLineTwo:"digital experiences.",
      heroDescription:"I'm Soroush — a developer focused on crafting clean interfaces, useful products and thoughtful experiences with code.",
      exploreWork:"Explore my work",letsTalk:"Let's talk",portraitRole:"Developer & Creator",visualCaption:"Curiosity, crafted into code.",scrollHint:"SCROLL TO EXPLORE",
      aboutIndex:"THE PERSON",aboutTitle:"Curious by nature.<br><span class='muted-title'>Driven by creation.</span>",aboutLead:"I enjoy turning complex ideas into simple, useful and memorable digital experiences.",
      aboutText:"I'm Soroush Salehi, the person behind SoroDev. I explore web development, software and emerging technologies by learning, experimenting and building real projects. My focus is thoughtful design, accessible interfaces and fast, dependable experiences.",
      githubProfile:"View GitHub profile",principleOne:"Clarity over noise",principleTwo:"Useful by design",principleThree:"Always learning",
      skillsIndex:"THE TOOLKIT",skillsTitle:"Tools I use to<br><span class='muted-title'>bring ideas to life.</span>",skillsNote:"A growing toolkit for designing, developing and shipping digital products.",
      projectsIndex:"SELECTED WORK",projectsTitle:"A few things<br><span class='muted-title'>I've been building.</span>",projectsNote:"A selection of experiments and products from my GitHub workspace.",
      projectSoroDev:"A personal space for my work, ideas and experiments — designed around clarity and craft.",
      projectSoroStudy:"A student-first learning workspace with practical tools for focus, planning and study.",
      projectSoroAI:"An evolving collection of experiments exploring useful AI-powered experiences.",
      projectSoroCloud:"A project exploring cloud-oriented tools and streamlined digital workflows.",
      allProjects:"Explore all repositories",contactIndex:"GET IN TOUCH",contactTitle:"Have an idea?<br><span class='muted-title'>Let's make it real.</span>",
      contactText:"For project ideas, questions or just a good conversation about technology, feel free to reach out.",footerLine:"Designed with intent. Built with curiosity."
    },
    fa: {
      navAbout:"درباره من",navSkills:"مهارت‌ها",navProjects:"پروژه‌ها",navContact:"ارتباط",
      availability:"در حال ساخت تجربه‌های وب",heroKicker:"توسعه‌دهنده مستقل · سازنده",heroLineOne:"ایده‌ها را به",heroLineTwo:"تجربه‌های دیجیتال تبدیل می‌کنم.",
      heroDescription:"من سروش هستم؛ توسعه‌دهنده‌ای علاقه‌مند به ساخت رابط‌های تمیز، محصولات کاربردی و تجربه‌های دقیق با کمک کدنویسی.",
      exploreWork:"دیدن پروژه‌ها",letsTalk:"ارتباط با من",portraitRole:"توسعه‌دهنده و سازنده",visualCaption:"کنجکاوی، تبدیل‌شده به کد.",scrollHint:"برای کاوش اسکرول کنید",
      aboutIndex:"درباره من",aboutTitle:"کنجکاو در ذات.<br><span class='muted-title'>مشتاق خلق کردن.</span>",aboutLead:"از تبدیل ایده‌های پیچیده به تجربه‌های دیجیتال ساده، کاربردی و ماندگار لذت می‌برم.",
      aboutText:"من سروش صالحی، سازنده SoroDev هستم. با یادگیری، آزمایش و ساخت پروژه‌های واقعی، توسعه وب، نرم‌افزار و فناوری‌های نو را دنبال می‌کنم. تمرکز من بر طراحی سنجیده، رابط‌های دسترس‌پذیر و تجربه‌های سریع و قابل‌اعتماد است.",
      githubProfile:"مشاهده پروفایل گیت‌هاب",principleOne:"سادگی به‌جای شلوغی",principleTwo:"کاربردی از ابتدا",principleThree:"یادگیری همیشگی",
      skillsIndex:"ابزارهای من",skillsTitle:"ابزارهایی برای<br><span class='muted-title'>جان دادن به ایده‌ها.</span>",skillsNote:"مجموعه‌ای رو‌به‌رشد از ابزارها برای طراحی، توسعه و انتشار محصولات دیجیتال.",
      projectsIndex:"پروژه‌های منتخب",projectsTitle:"چند مورد از چیزهایی<br><span class='muted-title'>که ساخته‌ام.</span>",projectsNote:"منتخبی از پروژه‌ها و تجربه‌های موجود در فضای گیت‌هاب من.",
      projectSoroDev:"فضایی شخصی برای نمایش کارها، ایده‌ها و آزمایش‌ها؛ با تمرکز بر سادگی و کیفیت.",
      projectSoroStudy:"فضایی آموزشی با محوریت دانش‌آموز و ابزارهایی کاربردی برای تمرکز، برنامه‌ریزی و مطالعه.",
      projectSoroAI:"مجموعه‌ای در حال توسعه از آزمایش‌ها برای ساخت تجربه‌های کاربردی مبتنی بر هوش مصنوعی.",
      projectSoroCloud:"پروژه‌ای برای بررسی ابزارهای ابری و ساده‌تر کردن گردش‌کارهای دیجیتال.",
      allProjects:"مشاهده همه مخزن‌ها",contactIndex:"در ارتباط باشیم",contactTitle:"ایده‌ای داری؟<br><span class='muted-title'>با هم واقعی‌اش کنیم.</span>",
      contactText:"برای مطرح کردن ایده پروژه، پرسیدن سؤال یا گفت‌وگویی درباره فناوری، می‌توانی پیام بدهی.",footerLine:"با هدف طراحی شده؛ با کنجکاوی ساخته شده."
    },
    ru: {
      navAbout:"Обо мне",navSkills:"Навыки",navProjects:"Проекты",navContact:"Контакты",
      availability:"Создаю проекты для веба",heroKicker:"НЕЗАВИСИМЫЙ РАЗРАБОТЧИК · СОЗДАТЕЛЬ",heroLineOne:"Превращаю идеи",heroLineTwo:"в цифровой опыт.",
      heroDescription:"Я Сoroush — разработчик, который создаёт понятные интерфейсы, полезные продукты и продуманный цифровой опыт с помощью кода.",
      exploreWork:"Мои проекты",letsTalk:"Связаться",portraitRole:"Разработчик и создатель",visualCaption:"Любопытство, воплощённое в коде.",scrollHint:"ПРОКРУТИТЕ ВНИЗ",
      aboutIndex:"ОБО МНЕ",aboutTitle:"Любознательность в основе.<br><span class='muted-title'>Стремление создавать.</span>",aboutLead:"Мне нравится превращать сложные идеи в простые, полезные и запоминающиеся цифровые решения.",
      aboutText:"Я Соруш Салехи, создатель SoroDev. Я изучаю веб-разработку, программное обеспечение и новые технологии через обучение, эксперименты и реальные проекты. Мой фокус — продуманный дизайн, доступные интерфейсы и быстрые, надёжные решения.",
      githubProfile:"Открыть профиль GitHub",principleOne:"Ясность вместо шума",principleTwo:"Практичность в основе",principleThree:"Постоянное обучение",
      skillsIndex:"ИНСТРУМЕНТЫ",skillsTitle:"Инструменты, чтобы<br><span class='muted-title'>воплощать идеи.</span>",skillsNote:"Растущий набор инструментов для проектирования, разработки и запуска цифровых продуктов.",
      projectsIndex:"ИЗБРАННЫЕ РАБОТЫ",projectsTitle:"Несколько проектов,<br><span class='muted-title'>над которыми я работаю.</span>",projectsNote:"Подборка экспериментов и продуктов из моего GitHub.",
      projectSoroDev:"Личное пространство для моих работ, идей и экспериментов с акцентом на ясность и качество.",
      projectSoroStudy:"Учебное пространство с практичными инструментами для концентрации, планирования и занятий.",
      projectSoroAI:"Развивающаяся коллекция экспериментов с полезными возможностями на базе ИИ.",
      projectSoroCloud:"Проект по изучению облачных инструментов и упрощению цифровых процессов.",
      allProjects:"Все репозитории",contactIndex:"СВЯЗАТЬСЯ",contactTitle:"Есть идея?<br><span class='muted-title'>Давайте воплотим её.</span>",
      contactText:"Буду рад сообщениям с идеями проектов, вопросами или просто интересным разговором о технологиях.",footerLine:"Продумано с целью. Создано из любопытства."
    }
  };

  const html = document.documentElement;
  const body = document.body;
  const langButtons = document.querySelectorAll("[data-lang]");
  const savedLanguage = (() => { try { return localStorage.getItem("sorodev-language"); } catch (_) { return null; } })();
  const supported = ["en", "fa", "ru"];
  const initialLanguage = supported.includes(savedLanguage) ? savedLanguage : "en";

  function setLanguage(language) {
    const dictionary = translations[language] || translations.en;
    html.lang = language;
    html.dir = language === "fa" ? "rtl" : "ltr";
    body.dir = html.dir;
    document.title = language === "fa" ? "SoroDev — سروش صالحی | توسعه‌دهنده" : language === "ru" ? "SoroDev — Соруш Салехи | Разработчик" : "SoroDev — Soroush Salehi | Developer & Creator";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (typeof value === "string") element.innerHTML = value;
    });
    langButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
    try { localStorage.setItem("sorodev-language", language); } catch (_) {}
  }

  langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  setLanguage(initialLanguage);

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  function closeMenu() {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  menuToggle.addEventListener("click", () => {
    const open = !mainNav.classList.contains("open");
    menuToggle.classList.toggle("active", open);
    mainNav.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  const themeToggle = document.getElementById("themeToggle");
  let lightMode = false;
  try { lightMode = localStorage.getItem("sorodev-theme") === "light"; } catch (_) {}
  body.classList.toggle("light", lightMode);
  themeToggle.addEventListener("click", () => {
    lightMode = !lightMode;
    body.classList.toggle("light", lightMode);
    try { localStorage.setItem("sorodev-theme", lightMode ? "light" : "dark"); } catch (_) {}
  });

  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");
  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = amount + "%";
    header.classList.toggle("scrolled", window.scrollY > 12);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  }
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const revealElements = document.querySelectorAll(".section-heading,.intro-lead,.intro-detail,.principles,.skills-note,.skill-cloud,.projects-heading,.project-card,.all-projects-link,.contact-bottom");
  revealElements.forEach((element) => element.setAttribute("data-reveal", ""));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})();