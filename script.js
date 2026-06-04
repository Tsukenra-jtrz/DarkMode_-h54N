const tombol = document.getElementById('btn');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    tombol.textContent='☀ Light Mode'
    tombol.style.backgroundColor='white'
    tombol.style.color='black'
    localStorage.setItem('theme', 'dark')
  } else {
    tombol.textContent="🌙 Dark Mode"
    tombol.style.backgroundColor="#333"
    tombol.style.color="white"
    localStorage.setItem('theme', 'light')
  }
}

const saveTheme = localStorage.getItem('theme');
if (saveTheme === 'dark') {
  body.classList.add('dark');
  tombol.textContent='☀ Light Mode'
}


tombol.addEventListener('click', toggleTheme);