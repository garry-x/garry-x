(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (saved) {
    html.setAttribute('data-theme', saved);
  } else if (prefersDark) {
    html.setAttribute('data-theme', 'dark');
  }
  
  if (toggle) {
    toggle.addEventListener('click', function() {
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();
