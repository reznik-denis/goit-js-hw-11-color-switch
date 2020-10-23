import colors from './colors'
import refs from './refs'

let intervalId = null;

export function startSwitchOnClick() {
        intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    btnStatus(true);
};

export function stopSwitchOnClick() {
    btnStatus(false);
    clearInterval(intervalId);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function btnStatus(status) {
    refs.start.disabled = status;
}