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

// let chosen = 2;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// if (chosen === 1) {
//   let [{ title, age, available, skills: [ , skill2] } = obj1, ,] =
//     myFriends;
//     console.log(title);
//     console.log(age);
//     if (available === true) {
//         console.log("Available");
//     } else {
//         console.log("Not Available");
//     }
//     console.log(skill2);
// } else if (chosen === 2) {
//   let [ , { title, age, available, skills: [ , skill2] } = obj2 ,] =
//     myFriends;
//     console.log(title);
//     console.log(age);
//     if (available === true) {
//         console.log("Available");
//     } else {
//         console.log("Not Available");
//     }
//     console.log(skill2);
// } else if (chosen === 3) {
//   let [, ,{ title, age, available, skills: [ , skill2] } = obj3] =
//     myFriends;
//     console.log(title);
//     console.log(age);
//     if (available === true) {
//         console.log("Available");
//     } else {
//         console.log("Not Available");
//     }
//     console.log(skill2);
// }
// let obj1 = { A: 1 };
// let obj2 = { B: 2 };
// let obj3 = { C: 3 };
// let newWs = new WeakSet();
// newWs.add(obj1);
// newWs.add(obj2);
// newWs.add(obj3);
// console.log(newWs.has(obj1));
// console.log(newWs.has(obj2));
// console.log(newWs.has(obj3));
// let map = new WeakMap();
// console.log(map);
// let arr = [1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];
// console.log(arr.copyWithin(0 , 5 , 8));
// // ["A", "B", "C", 4, 5, "A", "B", "C", "D", "E"];
// let arr = [1, 2, 3, 4, 5, "F", "A", "C", "D", "E"];
// let i = 0;
// let result = arr.some(function (e) {
//   console.log(i++);
//   return e === "A";
// });
// console.log(result);
// console.log(..."String");
// console.log([..."String"]);

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n2)*[...n1 , ...n2].length); // 210
// let s = "AaBbcdefG123!234%^&*";
// let regex = /./g;
// let result = s.match(regex);
// console.log(result);
// document.getElementById("register").onsubmit = function () {
//   let phone = document.getElementById("phone").value;
//   let regex = /962-7\d{8}/;
//   let result = regex.test(phone);
//   if (result === false) {
//     return false;
//   }
//   return true;
// };

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?)?:?(\/\/)?(www.)?elzero.org:?(\d*)?(\/)?(\w*)?(.)?(\w*)?(\?)?(\w*)?/;

// console.log(url1.match(re));

// console.log(url2.match(re));

// console.log(url3.match(re));

// console.log(url4.match(re));

// console.log(url5.match(re));
// let strOne = "NNN";
// let strTwo = new String("NNN");
// console.log(typeof strOne);
// console.log(typeof strTwo);
// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);
// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

class user {
  #password;
  constructor(id, userName) {
    this.id = id;
    this.userName = userName;
  }
  getPassword() {
    return this.#password;
  }
  setPassword(pass) {
    this.#password = pass;
  }
}
class aa extends user {
  constructor(id, userName, permission) {
    super(id, userName);
    this.permission = permission;
  }
}
let obj = new aa(10, "ahmad", 1);
obj.setPassword(189898);
console.log(obj.id);
console.log(obj.userName);
console.log(obj.permission);
console.log(obj.getPassword());
