(() => {
  const translations = {
    fa: {
      nav: ["خانه","درباره من","مهارت‌ها","تجربه","پروژه‌ها","تماس"],
      badge:"توسعه‌دهنده وب و خالق راهکارهای هوش مصنوعی",
      heroTitle:"ساخت تجربه‌های دیجیتال",
      heroAccent:"با سروش صالحی",
      heroDesc:"طراحی و توسعه وب‌سایت‌های مدرن با تمرکز بر زیبایی، سرعت و تجربه کاربری.",
      actions:["مشاهده پروژه‌ها","شروع همکاری"],
      about:["درباره من","کمی درباره‌ی من بدانید"],
      aboutText:"من سروش صالحی هستم، توسعه‌دهنده وب و علاقه‌مند به فناوری، برنامه‌نویسی و هوش مصنوعی. تلاش می‌کنم با ترکیب خلاقیت، طراحی و کدنویسی، تجربه‌هایی مدرن، زیبا و کاربردی ایجاد کنم.",
      stats:["پروژه","تکنولوژی","انگیزه"],
      tech:["ابزارها","تکنولوژی‌هایی که با آن‌ها کار می‌کنم"],
      skills:["مهارت‌ها","سطح تسلط من روی هر تکنولوژی"],
      experience:["مسیر من","تجربه و مسیر یادگیری"],
      timeline:["شروع برنامه‌نویسی","توسعه پروژه‌ها","هوش مصنوعی"],
      projects:["نمونه کارها","پروژه‌های اخیر من"],
      projectDesc:["وب‌سایت شخصی مدرن","پلتفرم ابزارهای هوش مصنوعی برای کاربران فارسی‌زبان"],
      faq:["پرسش و پاسخ","سوالات رایج"],
      questions:["چه نوع پروژه‌هایی انجام می‌دهید؟","مدت زمان انجام یک پروژه معمولی چقدر است؟","آیا امکان همکاری از راه دور وجود دارد؟"],
      answers:["ساخت وب‌سایت‌های شخصی و شرکتی و اپلیکیشن‌های تحت وب.","بسته به پیچیدگی پروژه، معمولاً بین چند روز تا چند هفته زمان می‌برد.","بله، همکاری‌ها به‌صورت آنلاین و از راه دور انجام می‌شود."],
      contact:["تماس با من","بیایید با هم همکاری کنیم"],
      labels:["نام","ایمیل","پیام"],
      placeholders:["نام شما","ایمیل شما","پیام خود را بنویسید..."],
      send:"ارسال پیام"
    },
    en: {
      nav:["Home","About","Skills","Experience","Projects","Contact"],
      badge:"Web Developer & AI Solutions Creator",
      heroTitle:"Building Digital Experiences",
      heroAccent:"with Soroush Salehi",
      heroDesc:"Designing and developing modern websites focused on aesthetics, speed, and user experience.",
      actions:["Explore Projects","Let's Work Together"],
      about:["ABOUT ME","A little about who I am"],
      aboutText:"I'm Soroush Salehi, a web developer passionate about technology, programming, and artificial intelligence. I combine creativity, design, and code to build modern, elegant, and useful digital experiences.",
      stats:["Projects","Technologies","Motivation"],
      tech:["TOOLKIT","Technologies I Work With"],
      skills:["SKILLS","My technology skill set"],
      experience:["MY JOURNEY","Experience & Learning Path"],
      timeline:["Started Programming","Building Projects","Artificial Intelligence"],
      projects:["SELECTED WORK","Recent Projects"],
      projectDesc:["A modern personal website","An AI tools platform for Persian-speaking users"],
      faq:["Q&A","Frequently Asked Questions"],
      questions:["What kind of projects do you work on?","How long does a typical project take?","Can we work remotely?"],
      answers:["Personal and business websites, as well as web applications.","Depending on complexity, a project may take from a few days to several weeks.","Yes. Collaboration is available fully online and remotely."],
      contact:["GET IN TOUCH","Let's build something together"],
      labels:["Name","Email","Message"],
      placeholders:["Your name","Your email","Write your message..."],
      send:"Send Message"
    },
    ru: {
      nav:["Главная","Обо мне","Навыки","Опыт","Проекты","Контакты"],
      badge:"Веб-разработчик и создатель AI-решений",
      heroTitle:"Создаю цифровые впечатления",
      heroAccent:"вместе с Сoroush Salehi",
      heroDesc:"Разработка современных сайтов с акцентом на эстетику, скорость и удобство.",
      actions:["Мои проекты","Начать сотрудничество"],
      about:["ОБО МНЕ","Немного обо мне"],
      aboutText:"Меня зовут Соруш Салехи. Я веб-разработчик, увлечённый технологиями, программированием и искусственным интеллектом. Я объединяю креативность, дизайн и код, чтобы создавать современные и полезные цифровые продукты.",
      stats:["Проекты","Технологии","Мотивация"],
      tech:["ИНСТРУМЕНТЫ","Технологии, с которыми я работаю"],
      skills:["НАВЫКИ","Мои технические навыки"],
      experience:["МОЙ ПУТЬ","Опыт и обучение"],
      timeline:["Начало программирования","Разработка проектов","Искусственный интеллект"],
      projects:["ПОРТФОЛИО","Последние проекты"],
      projectDesc:["Современный личный сайт","Платформа AI-инструментов для персоязычных пользователей"],
      faq:["ВОПРОСЫ И ОТВЕТЫ","Часто задаваемые вопросы"],
      questions:["Какие проекты вы разрабатываете?","Сколько обычно занимает проект?","Возможно ли удалённое сотрудничество?"],
      answers:["Личные и корпоративные сайты, а также веб-приложения.","В зависимости от сложности, от нескольких дней до нескольких недель.","Да, сотрудничество полностью доступно онлайн."],
      contact:["СВЯЗАТЬСЯ СО МНОЙ","Давайте работать вместе"],
      labels:["Имя","Эл. почта","Сообщение"],
      placeholders:["Ваше имя","Ваша почта","Напишите сообщение..."],
      send:"Отправить сообщение"
    }
  };
  const $ = (s) => document.querySelector(s);
  const all = (s) => [...document.querySelectorAll(s)];
  function apply(lang) {
    const t = translations[lang] || translations.fa;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    all(".nav-link").forEach((el,i)=>el.textContent=t.nav[i]||el.textContent);
    $(".badge") && ($(".badge").lastChild.textContent="\n"+t.badge+"\n");
    $(".hero-title") && ($(".hero-title").childNodes[0].textContent=t.heroTitle+"\n            ");
    $(".hero-title-accent") && ($(".hero-title-accent").textContent=t.heroAccent);
    $(".hero-desc") && ($(".hero-desc").textContent=t.heroDesc);
    all(".hero-actions a").forEach((el,i)=>el.textContent=t.actions[i]||el.textContent);
    const heads=[...all(".about .section-head"),...all(".tech .section-head"),...all(".skills .section-head"),...all(".experience .section-head"),...all(".projects .section-head"),...all(".faq .section-head"),...all(".contact .section-head")];
    const groups=[t.about,t.tech,t.skills,t.experience,t.projects,t.faq,t.contact];
    heads.forEach((h,i)=>{if(groups[i]){const e=h.querySelector(".eyebrow"), title=h.querySelector(".section-title");if(e)e.textContent=groups[i][0];if(title)title.textContent=groups[i][1];}});
    const aboutText=$(".about-text"); if(aboutText)aboutText.textContent=t.aboutText;
    all(".stat-label").forEach((e,i)=>e.textContent=t.stats[i]||e.textContent);
    all(".timeline-title").forEach((e,i)=>e.textContent=t.timeline[i]||e.textContent);
    all(".project-desc").forEach((e,i)=>e.textContent=t.projectDesc[i]||e.textContent);
    all(".faq-question span").forEach((e,i)=>e.textContent=t.questions[i]||e.textContent);
    all(".faq-answer p").forEach((e,i)=>e.textContent=t.answers[i]||e.textContent);
    all(".form-group label").forEach((e,i)=>e.textContent=t.labels[i]||e.textContent);
    all(".form-group input").forEach((e,i)=>e.placeholder=t.placeholders[i]||e.placeholder);
    const msg=$("#message"); if(msg)msg.placeholder=t.placeholders[2];
    const submit=$('#contactForm button[type="submit"]'); if(submit)submit.textContent=t.send;
    const footer=$(".footer-tagline"); if(footer && lang!=="fa")footer.textContent="Build the Future with Code";
    localStorage.setItem("sorodev-language",lang);
    const selector=$("#languageSelect"); if(selector)selector.value=lang;
  }
  const selector=$("#languageSelect");
  const saved=localStorage.getItem("sorodev-language");
  const browser=(navigator.language||"fa").slice(0,2);
  const initial=saved||(["fa","en","ru"].includes(browser)?browser:"fa");
  if(selector)selector.addEventListener("change",()=>apply(selector.value));
  apply(initial);
})();