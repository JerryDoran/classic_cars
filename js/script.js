const menu = document.querySelector('.menu');
const wrappers = Array.from(document.querySelectorAll('.wrapper'));
const videos = Array.from(document.querySelectorAll('.video'));

menu.addEventListener('click', () => {
  Array.from(document.querySelectorAll('.target')).forEach((item) => {
    item.classList.toggle('change');
  });
});

wrappers.forEach((item) => {
  item.addEventListener('click', () => {
    Array.from(document.querySelectorAll('.target')).forEach((item) => {
      item.classList.remove('change');
    });
  });
});

videos.forEach((video) => {
  video.addEventListener('mouseover', () => {
    video.play();
  });
  video.addEventListener('mouseout', () => {
    video.pause();
  });
});
