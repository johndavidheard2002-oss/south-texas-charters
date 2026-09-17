/* South Texas Charters × Tide Mark — preview v2 */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobile.classList.toggle('open', !open);
    });
    mobile.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobile.classList.remove('open');
      });
    });
  }

  // Soft header elevation on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 8px 32px rgba(0,0,0,0.45)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
