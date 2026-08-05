document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  document.querySelectorAll('[data-nav-page]').forEach((link) => {
    const active = link.dataset.navPage === page;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
  });

  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.querySelector(button.dataset.copyTarget);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent);
        const original = button.textContent;
        button.textContent = '已复制';
        button.setAttribute('aria-label', '代码已复制');
        window.setTimeout(() => {
          button.textContent = original;
        }, 1600);
      } catch {
        button.textContent = '请手动复制';
      }
    });
  });

  document.querySelectorAll('[data-base-url]').forEach((select) => {
    const outputSelector = select.dataset.baseUrl;
    select.addEventListener('change', () => {
      document.querySelectorAll(outputSelector).forEach((node) => {
        node.textContent = select.value;
      });
    });
  });
});
