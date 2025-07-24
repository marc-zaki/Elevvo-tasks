const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  
});