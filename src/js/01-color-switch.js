import colorsArray from './colors';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', () => {
  colorSwitch.start();
});
refs.stopBtn.addEventListener('click', () => {
  colorSwitch.stop();
});

const colorSwitch = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const colorsIndex = randomIntegerFromInterval(0, 5);
      setBodyBgColor(colorsArray, colorsIndex);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBodyBgColor(color, i) {
  document.body.style.backgroundColor = color[i];
}
