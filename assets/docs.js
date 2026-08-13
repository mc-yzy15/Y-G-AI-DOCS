/* 瀛光 AI 文档站共享脚本 · 无外部依赖 */
(function () {
  'use strict';

  /* ---------- 侧栏抽屉（移动端） ---------- */
  var sidebar = document.getElementById('docsSidebar');
  var menuBtn = document.querySelector('.docs-menu-btn');
  var closeBtn = document.querySelector('.docs-close-btn');
  var backdrop = document.querySelector('.backdrop');

  function openDrawer() {
    if (!sidebar) return;
    sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- 侧栏当前页高亮 ---------- */
  var page = document.body.getAttribute('data-page');
  if (page) {
    var links = document.querySelectorAll('.nav-group a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav-page') === page) {
        links[i].classList.add('active');
        links[i].setAttribute('aria-current', 'page');
      }
    }
  }

  /* ---------- Base URL 选择器 ---------- */
  var picker = document.getElementById('baseUrlPicker');
  if (picker) {
    var select = picker.querySelector('select');
    var targets = document.querySelectorAll('.base-url-value');
    if (select) {
      var applyBaseUrl = function () {
        var value = select.value;
        for (var j = 0; j < targets.length; j++) {
          targets[j].textContent = value;
        }
      };
      select.addEventListener('change', applyBaseUrl);
      applyBaseUrl();
    }
  }

  /* ---------- 代码块复制 ---------- */
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var shell = btn.closest('.code-shell');
      if (!shell) return;
      var pre = shell.querySelector('pre');
      if (!pre) return;
      var text = pre.innerText || pre.textContent || '';
      var done = function () {
        var old = btn.textContent;
        btn.textContent = '已复制';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = old;
          btn.classList.remove('copied');
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, btn, done); });
      } else {
        fallbackCopy(text, btn, done);
      }
    });
  });

  function fallbackCopy(text, btn, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---------- 代码标签页 ---------- */
  document.querySelectorAll('.code-tabs').forEach(function (tabs) {
    var tabBtns = tabs.querySelectorAll('.code-tab');
    var shells = [];
    var current = tabs.getAttribute('data-current') || 0;
    var prev = tabs.nextElementSibling;
    while (prev && prev.classList && prev.classList.contains('code-shell')) {
      shells.push(prev);
      prev = prev.nextElementSibling;
    }
    var activate = function (index) {
      tabBtns.forEach(function (b, i) {
        b.classList.toggle('active', i === index);
      });
      shells.forEach(function (s, i) {
        s.style.display = i === index ? '' : 'none';
      });
    };
    tabBtns.forEach(function (b, i) {
      b.addEventListener('click', function () { activate(i); });
    });
    if (shells.length && tabBtns.length) {
      activate(current);
    }
  });

  /* ---------- 页内锚点平滑滚动 ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var hash = a.getAttribute('href');
      if (hash.length < 2) return;
      var el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', hash); } catch (err) { /* ignore */ }
    });
  });
})();
