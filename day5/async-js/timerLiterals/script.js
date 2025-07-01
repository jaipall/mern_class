const timerTextElem = document.getElementById("timer-text");

let timeInSec = 0;
let interval = setInterval(() => {
  timeInSec++;
  console.log(timeInSec);
  // return timeInSec;

  const sec = timeInSec % 60;
  let min = Math.floor(timeInSec / 60);
  min = min % 60;
  const hrs = Math.floor(timeInSec / 3600);
  //   timerTextElem.innerText = `${hrs<10 ? "0" + hrs : hrs}:${min}:${sec < 10 ? "0" + sec : sec}`;
  timerTextElem.innerText = `${hrs}:${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}, 1000);

const handleReset = () => {
  timeInSec = 0;
};

const handlePause = () => {
  clearInterval(interval);
};
