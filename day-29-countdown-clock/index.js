let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');


function timer(sec) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + sec * 1000;
  displayTimeLeft(sec);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000);
}

function displayTimeLeft(sec) {
  const min = Math.floor(sec/60);
  const remainderSec = sec % 60;
  const display = `${min}:${remainderSec < 10 ? '0' : ''}${remainderSec}`;
  document.title = display;
  timerDisplay.textContent = display;
  console.log(min, remainderSec);
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${min < 10 ? '0' : ''}${min}`;
}

function startTimer() {
  const sec = parseInt(this.dataset.time);
  timer(sec);
}


buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});