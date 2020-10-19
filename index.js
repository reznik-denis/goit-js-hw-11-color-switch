const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

refs.start.addEventListener('click', startSwitchOnClick);

let intervalId = null;

function startSwitchOnClick() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
    }, 1000);
    refs.start.removeEventListener('click', startSwitchOnClick);
    refs.stop.addEventListener('click', stopSwitchOnClick);
};

function stopSwitchOnClick() {
    clearInterval(intervalId);
    refs.start.addEventListener('click', startSwitchOnClick);
    refs.stop.removeEventListener('click', stopSwitchOnClick);
};