const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if(saved === 'light') document.documentElement.classList.add('light');

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme',
    document.documentElement.classList.contains('light') ? 'light' : 'dark'
  );
  toggle.textContent = document.documentElement.classList.contains('light') ? '☀' : '☾';
});
