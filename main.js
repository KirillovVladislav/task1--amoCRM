const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let timerId;

  const getRemainingTime = (seconds) => {
    let hour = Math.floor(seconds / 60 / 60);
    let min = Math.floor(seconds / 60 - hour * 60);
    let sec = seconds % 60;

    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${hour}:${min}:${sec}`;
  };

  return (seconds) => {
    timerEl.innerText = getRemainingTime(seconds);

    timerId = setInterval(() => {
      seconds--;

      if (seconds === 0) clearInterval(timerId);

      timerEl.innerText = getRemainingTime(seconds);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
