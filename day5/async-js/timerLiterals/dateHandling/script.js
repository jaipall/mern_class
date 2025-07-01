console.log("hello");

let newDaeChange = null;

const handleDateChange = (e) => {
  newDate = new Date(e.target.value);
  console.log(newDate);
  const targetMillisecond = newDate.getTime();
  console.log(targetMillisecond);
  const currentTimeInMiilisec = Date.now();
  console.log(currentTimeInMiilisec);
  const diffInSeconds = (targetMillisecond - currentTimeInMiilisec) / 1000;
  console.log(diffInSeconds);
};
