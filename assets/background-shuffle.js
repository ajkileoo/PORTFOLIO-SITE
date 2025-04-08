// Background media shuffle script
const mediaFiles = [
  'assets/media/bg1.jpg',
  'assets/media/bg2.mp4',
  'assets/media/bg3.jpg',
  'assets/media/bg4.mp4',
];

let currentIndex = 0;
const heroBg = document.querySelector('.hero-background');

function setBackgroundMedia(index) {
  const file = mediaFiles[index];
  const ext = file.split('.').pop();

  if (ext === 'mp4') {
    heroBg.innerHTML = `<video autoplay muted loop playsinline class="bg-video">
                          <source src="${file}" type="video/mp4">
                        </video>`;
  } else {
    heroBg.innerHTML = '';
    heroBg.style.backgroundImage = `url(${file})`;
  }
}

function startShuffle() {
  setBackgroundMedia(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % mediaFiles.length;
    setBackgroundMedia(currentIndex);
  }, 10000); // change every 10 sec
}

document.addEventListener('DOMContentLoaded', startShuffle);
