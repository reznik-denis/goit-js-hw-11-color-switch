import colors from './colors'
import refs from './refs'

let intervalId = null;
let intervalStatus = false;

export function startSwitchOnClick() {
    intervalStatus = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    btnStatus();
};

export function stopSwitchOnClick() {
    intervalStatus = false;
    btnStatus();
    clearInterval(intervalId);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function btnStatus() {
    refs.start.disabled = intervalStatus ? true : false;
}