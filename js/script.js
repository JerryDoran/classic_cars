const menu = document.querySelector('.menu');
const wrappers = Array.from(document.querySelectorAll('.wrapper'));

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
