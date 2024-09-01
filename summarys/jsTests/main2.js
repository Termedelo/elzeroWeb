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
