//music player

const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');

const bgMusic = new Audio('my-audio-file.mp3');
bgMusic.loop = true; 


playButton.addEventListener('click', () => {
    bgMusic.play();
});

pauseButton.addEventListener('click', () => {
    bgMusic.addTrack / bgMusic.pause();
});


//light/dark mode
const toggleButton = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
  const activeTheme = document.documentElement.getAttribute('data-theme');
  
  let newTheme = 'light';
  if (activeTheme === 'light') {
    newTheme = 'dark';
  }
  
  document.documentElement.setAttribute('data-theme', newTheme);
  
  localStorage.setItem('theme', newTheme);
});
