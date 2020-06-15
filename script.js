
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', startChangeBodyColor);
refs.stopBtn.addEventListener('click', stopChangeBodyColor);

let idSetInterval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangeBodyColor(){
  refs.startBtn.removeEventListener('click', startChangeBodyColor);
  idSetInterval = setInterval(() => {
  const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
  function randomColor(){
  return colors[randomIndex];
}
// console.log(randomIndex);
    refs.body.style.backgroundColor = randomColor();
  }, 1000);
};

function stopChangeBodyColor(){
  refs.startBtn.addEventListener('click', startChangeBodyColor);
  clearInterval(idSetInterval);
};