let seconds = document.querySelector(".clockContainer .seconds");
let minutes = document.querySelector(".clockContainer .minutes");
let hours = document.querySelector(".clockContainer .hours");
function dates(){
  seconds.style.transform = `translate(-50%, -50%) rotate(${new Date().getSeconds() * 6}deg)`;
  minutes.style.transform = `translate(-50%, -50%) rotate(${new Date().getMinutes() * 6}deg)`;
  hours.style.transform = `translate(-50%, -50%) rotate(${new Date().getHours() * 30}deg)`;
}
dates();
setInterval(dates, 1000);
