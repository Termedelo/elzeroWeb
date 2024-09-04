// let v = document.querySelector(".ss");
// let att = v.attributes;
// console.log(att[1]);
// for (let i = 1; i <= 100; i++) {
//   let mainDiv = document.createElement("div");
//   let myH = document.createElement("h2");
//   let myP = document.createElement("p");
//   let text1 = document.createTextNode(`This is the Heading ${i}`);
//   let text2 = document.createTextNode(`This is the paragraph ${i}`);
//   if (i%2 === 0) myH.style.color = "red";
//   else myH.style.color = "green";
//   myH.appendChild(text1);
//   myP.appendChild(text2);
//   mainDiv.appendChild(myH);
//   mainDiv.appendChild(myP);
//   document.body.appendChild(mainDiv);
// }
// let btn = document.getElementById("btn");
// btn.onclick = function() {
//     console.log("onclick");
// }
// btn.ondblclick = function() {
//     console.log("ondblclick");
// }
// btn.onmouseover = function() {
//     btn.style.backgroundColor = "red";
// }
// btn.onmouseout = function() {
//     btn.style.backgroundColor = "green";
// }
// let mainForm = document.querySelector("form");
// mainForm.style.display = "flex";
// mainForm.style.justifyContent = "Space-evenly";
// let divInputs = document.querySelectorAll("form .in");
// for (let i = 0; i < divInputs.length; i++) {
//   divInputs[i].style.height = "35px";
//   divInputs[i].style.width = "35px";
//   divInputs[i].style.fontSize = "35px";
//   divInputs[i].style.textAlign = "center";
// }
// window.onload = function () {
//     divInputs[0].focus();
// }
// for (let i = 0; i < divInputs.length; i++) {
//     if (divInputs[i].value !== "") {
//         divInputs[i].blur();
//         divInputs[i+1].focus();
//     }
// }
// let time = setTimeout(function(){
//     console.log("hi");
//   } , 5000);
// let btn = document.querySelector("button");
// btn.onclick = function(){
//     clearTimeout(time);
// }
// let i = 1;
// let intervalTime = setInterval(function () {
//   console.log(i);
//   i++;
// }, 100);
// let timeout = setTimeout(function () {
//   console.log("im stooped the interval");
//   clearInterval(intervalTime);
// }, 10000);
//#...........................................................................
// let btn1 = document.querySelector("#btn1");
// let div = document.querySelector("div");
// let btn2 = document.querySelector("#btn2");
// div.style.fontSize = "100px";
// let int = setInterval(() => {
//   div.innerHTML -= 1;
// }, 100);
// btn1.onclick = () => {
//   clearInterval(int);
// };
// btn2.onclick = () => {
//   int = setInterval(() => {
//     div.innerHTML -= 1;
//   }, 100);
// };
//#...........................................................................
// window.setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width = 1000 , height = 1000 left = 500 , top = 500",
//     true
//   );
// }, 3000);

// let colors1 = document.querySelector(".color1");
// let colors2 = document.querySelector(".color2");
// let colors3 = document.querySelector(".color3");
// let colors4 = document.querySelector(".color4");
// let mainDiv = document.querySelector(".theColorViewer");
// colors1.onclick = function(){
//     console.log(colors1.style.BackgroundColor);
// }
// colors2.onclick = function(){
//     console.log(colors2.style.BackgroundColor);
// }
// colors3.onclick = function(){
//     console.log(colors3.style.BackgroundColor);
// }
// colors4.onclick = function(){
//     console.log(colors4.style.BackgroundColor);
// }
// let obj = {name:"ahmad" , age:21 , hello(n){
// return n;
// }};
// let {name , age , hello} = obj;
// console.log(typeof hello);
// console.log(hello("ahmad"));