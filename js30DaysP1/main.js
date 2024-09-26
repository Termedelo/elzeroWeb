const soundA = new Audio("sounds/clap.wav");
const soundS = new Audio("sounds/hihat.wav");
const soundD = new Audio("sounds/kick.wav");
const soundF = new Audio("sounds/openhat.wav");
const soundG = new Audio("sounds/boom.wav");
const soundH = new Audio("sounds/ride.wav");
const soundJ = new Audio("sounds/snare.wav");
const soundK = new Audio("sounds/tom.wav");
const soundL = new Audio("sounds/tink.wav");
const keyA = document.querySelector(".mainContainer .keyA");
const keyS = document.querySelector(".mainContainer .keyS");
const keyD = document.querySelector(".mainContainer .keyD");
const keyF = document.querySelector(".mainContainer .keyF");
const keyG = document.querySelector(".mainContainer .keyG");
const keyH = document.querySelector(".mainContainer .keyH");
const keyJ = document.querySelector(".mainContainer .keyJ");
const keyK = document.querySelector(".mainContainer .keyK");
const keyL = document.querySelector(".mainContainer .keyL");
// function playSound() {

// }
document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 65:
      soundA.play();
      keyA.classList.add("active");
      break;
    case 83:
      soundS.play();
      keyS.classList.add("active");
      break;
    case 68:
      soundD.play();
      keyD.classList.add("active");
      break;
    case 70:
      soundF.play();
      keyF.classList.add("active");
      break;
    case 71:
      soundG.play();
      keyG.classList.add("active");
      break;
    case 72:
      soundH.play();
      keyH.classList.add("active");
      break;
    case 74:
      soundJ.play();
      keyJ.classList.add("active");
      break;
    case 75:
      soundK.play();
      keyK.classList.add("active");
      break;
    case 76:
      soundL.play();
      keyL.classList.add("active");
      break;
  }
};
document.onkeyup = (e) => {
  switch (e.keyCode) {
    case 65:
      keyA.classList.remove("active");
      break;
    case 83:
      keyS.classList.remove("active");
      break;
    case 68:
      keyD.classList.remove("active");
      break;
    case 70:
      keyF.classList.remove("active");
      break;
    case 71:
      keyG.classList.remove("active");
      break;
    case 72:
      keyH.classList.remove("active");
      break;
    case 74:
      keyJ.classList.remove("active");
      break;
    case 75:
      keyK.classList.remove("active");
      break;
    case 76:
      keyL.classList.remove("active");
      break;
  }
};
