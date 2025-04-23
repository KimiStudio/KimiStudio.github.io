// Theme toggle logic for KimiStudio
(function() {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const darkTheme = {
    '--bg': '#181a1b',
    '--text': '#f3f3f3',
    '--accent': '#ffb347',
    '--btn-bg': '#222',
    '--btn-color': '#ffb347',
    '--card-bg': '#232526',
    '--shadow': 'rgba(0,0,0,0.7)',
    '--header-bg': '#1a1c1e',
    '--footer-bg': '#1a1c1e',
    '--link': '#ffb347',
    '--link-hover': '#ffd580',
    '--border': '#333'
  };
  const lightTheme = {
    '--bg': '#fff',
    '--text': '#333',
    '--accent': '#ffb347',
    '--btn-bg': '#333',
    '--btn-color': '#fff',
    '--card-bg': '#fff',
    '--shadow': 'rgba(0,0,0,0.1)',
    '--header-bg': '#fff',
    '--footer-bg': '#222',
    '--link': '#333',
    '--link-hover': '#888',
    '--border': '#eee'
  };
  function setTheme(theme) {
    Object.entries(theme).forEach(([k,v]) => {
      document.documentElement.style.setProperty(k, v);
    });
    document.body.style.backgroundColor = theme['--bg'];
    document.body.style.color = theme['--text'];
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 400);
    if (theme === darkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  function isDark() {
    return localStorage.getItem('theme') === 'dark';
  }
  function toggleTheme() {
    if (isDark()) {
      setTheme(lightTheme);
      localStorage.setItem('theme', 'light');
      btn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      setTheme(darkTheme);
      localStorage.setItem('theme', 'dark');
      btn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
  btn.addEventListener('click', toggleTheme);
  if (isDark()) {
    setTheme(darkTheme);
    btn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    setTheme(lightTheme);
    btn.innerHTML = '<i class="fas fa-moon"></i>';
  }
})();
// Removed redundant comments and kept only essential logic for theme toggling.