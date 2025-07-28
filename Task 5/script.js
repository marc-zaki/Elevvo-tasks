document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('#theme-toggle');
  const rootElement = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'light';
  rootElement.setAttribute('data-theme', savedTheme);
  toggleSwitch.checked = savedTheme === 'dark';

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      rootElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      rootElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});
