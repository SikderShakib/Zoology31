// Zoology - প্রাণিবিদ্যা | GitHub Pages
// Mobile nav + collapsible groups + active nav link. No dependencies.
(function () {
  // Mobile menu toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Collapsible groups: click the header button to open/close.
  // The first group on each page starts open.
  var groups = document.querySelectorAll('.group');
  groups.forEach(function (g, i) {
    var btn = g.querySelector(':scope > button');
    if (!btn) return;
    if (i === 0) g.classList.add('open');
    btn.addEventListener('click', function () {
      g.classList.toggle('open');
    });
  });

  // Highlight the current page in the nav.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
})();
