let slides = Array.from(document.querySelectorAll(".slidesContainer .slide"));
function grow() {
  this.classList.toggle("open");
}
function UpAndDown(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("openActive");
  }
}
slides.forEach((current) => current.addEventListener("click", grow));
slides.forEach((current) => current.addEventListener("transitionend", UpAndDown));
