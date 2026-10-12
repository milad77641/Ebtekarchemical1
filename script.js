(() => {
  const html = document.documentElement;
  const langSwitch = document.getElementById('langSwitch');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  let language = 'fa';

  function setLanguage(next) {
    language = next;
    html.lang = next;
    html.dir = next === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-fa][data-en]').forEach((element) => {
      element.innerHTML = element.dataset[next];
    });
    document.title = next === 'fa'
      ? 'ابتکار شیمی | واردات و توزیع روغن‌های خوراکی و اسیدها'
      : 'Ebtekar Shimi | Edible Oils & Acids Importer and Distributor';
    langSwitch.textContent = next === 'fa' ? 'English / فارسی' : 'فارسی / English';
  }
  langSwitch.addEventListener('click', () => setLanguage(language === 'fa' ? 'en' : 'fa'));
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(language === 'fa' ? 'درخواست همکاری از وب‌سایت ابتکار شیمی' : 'Business inquiry from Ebtekar Shimi website');
    const body = encodeURIComponent(`${language === 'fa' ? 'نام و شرکت' : 'Name and company'}: ${name}\n${language === 'fa' ? 'راه تماس' : 'Contact'}: ${contact}\n${language === 'fa' ? 'درخواست' : 'Inquiry'}: ${message}`);
    const hint = document.getElementById('formHint');
    hint.textContent = language === 'fa'
      ? 'برای فعال‌کردن ارسال، آدرس ایمیل رسمی شرکت را در script.js تنظیم کنید. در حال حاضر فرم فقط پیش‌نمایش درخواست را آماده می‌کند.'
      : 'To enable sending, configure the company email address in script.js. The form currently prepares an inquiry preview only.';
    // Set COMPANY_EMAIL below when the official company inbox is confirmed.
    const COMPANY_EMAIL = '';
    if (COMPANY_EMAIL) window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    else window.alert(language === 'fa' ? `درخواست شما آماده است، اما ایمیل رسمی شرکت هنوز در سایت تنظیم نشده است.\n\n${decodeURIComponent(body)}` : `Your inquiry is ready, but the official company email has not been configured yet.\n\n${decodeURIComponent(body)}`);
  });
})();
