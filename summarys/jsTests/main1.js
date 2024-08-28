// console.group("Groupe 1");
// console.group("Child Groupe");
// console.log("Message One");
// console.log("Message Two");
// console.group("Grand Child Groupe");
// console.log("Message One");
// console.log("Message Two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Groupe 2");
// console.log("Message One");
// console.log("Message Two");
// console.log("Iam In Console");
// console.groupEnd();
// console.table(["Ahmad" , "ali" , "elzero" , "mohamad" , "sara"]);
// console.error("------------------------");
// console.log(typeof "ahmad");
// console.log(typeof 2000);
// console.log(typeof 23.5);
// console.log(typeof true);
// console.log(typeof 8989n);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof function f1(){});
// console.log(typeof {name:"ali" , num:1});
// console.log(typeof ["ahmad" , 10 , 20000]);

// let Title = "Elzero",
//   Description = "Web School",
//   Date = "25/8";
// let div = `<div>
//            <h3>${Title}</h3>
//            <p>${Description}</p>
//            <span>${Date}</span>
//            </div>`;
// document.write(`${div.repeat(4)}`);

//~ let a = 10;
//~ let b = "20";
//~ let c = 80;
//! console.log(++a + +b++ + +c++ - +a++);
//! a = 12 , b = 21 , c = 81
//! 11 + 20 + 80 - 11  = 100
//* console.log(++a + -b + +c++ - -a++ + +a);
//* a = 12 , b = 20 , c = 81
//* 11 - 20 + 80 + 11 + 12 = 94
//# console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//# a = 8 , b = 21 , c = 79
//# 79 + 20 + 9 * 20 - 21 * 9 + 8 - 1

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// // Only Use Variables Value
// // Do Not Use Variable Twice
// console.log(-d * +e); // 2000
// console.log(++e * + ++g + -d + ++f); //173
// let elzero = document.getElementById("elzero");
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.min(a , b , c , d));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(a , Math.trunc(d))); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Number.parseInt(d.toFixed(0)));

// // Use Variables b + d To Get This Values
// console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.ceil((parseInt(b) / Math.ceil(d)))); // 67 => Number
// let a = "Elzero Web School";
// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase()+a.slice(3 , 7)); // Zero
// // 8 H
// console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH
// // Return Array
// console.log(a.split(" " , 1)); // ["Elzero"]
// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0 , 7)}${a.substr(-6 , 6)}`); // Elzero School
// let b = "ahmad";
// // Solution Must Be Dynamic Because String May Changes
// console.log(b.charAt(0).toLowerCase() + b.substring(1 , b.length-1).toUpperCase() + b.charAt(length+1).toLowerCase());
// // eLZERO WEB SCHOOl
// let value1 = 100;
// let value2 = null;
// let value3 = undefined;
// console.log(value3 || value2 || value1);

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");
// // Write Previous Condition With Ternary If Syntax
// let st = "Elzero Web School";

// if (String(st.length*2) === "34") {
//   console.log("Good");
// }
// // W Position May Change
// if (st.charAt(st.indexOf('w')) || st.charAt(st.indexOf('W')).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (st !== "string") {
//   console.log("Good");
// }

// if (typeof Number(st) === "number") {
//   console.log("Good");
// }

// if (st.substring(0 , 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
/*
  Switch Challenge
*/

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }
// console.log(salary);
// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case "IT" || "Support":
//     salary = 6000;
//     break;
//   case "Developer" || "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
// }
// console.log(salary);
// /*
//   If Challenge
// */

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }
// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else {
//   money = 0;
//   console.log(`My Money is ${money}`);
// }
// let arr1 = new Array("ahmad", "i");
// let arr2 = ["A", 1, true, 3.9, null];
// console.log(arr1[0]);
// console.log(arr2[3]);
// console.log(arr1.length);
// console.log(arr2.length);
// console.log(arr1[10]);
// let x1 = arr1.unshift(1 , 2 , 3);
// let x2 = arr1.push(arr1.length , arr1.length+1 , arr1.length+2);
// let x3 = arr1.push(arr1.length);
// console.log(`${x1} ${x2} ${x3}`)
// let x4 = arr1.shift();
// console.log(x4);
// console.log(arr1);
// let x5 = arr1.pop();
// console.log(arr1);
// let x3 = arr1.unshift(1 , 2 , 3);
// let x4 = arr1.unshift(1 , 2 , 3);
// document.write(arr1.slice(undefined)+"<br>");
// document.write(arr1+"<br>");
// document.write(arr1.splice(0 , 0 , "ahmad" , "ismail")+"<br>");
// document.write(arr1+"<br>");
// document.write(arr1.concat(arr2));
/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Write Code Here

document.write(my.slice(zero, counter + my.indexOf("Mazero")).reverse()+"<br>"); 
//! ["Osama", "Elham", "Mazero", "Ahmed"];

document.write(my.slice(my.indexOf("Mazero") , counter).reverse()+"<br>"); 
//! ["Elham", "Mazero"]

document.write(my[counter-my.indexOf("Mazero")].substring(zero , counter-my.indexOf("Mazero")) + my[counter/counter].substring(counter-my.indexOf("Mazero"))+"<br>"); // "Elzero"

document.write(my[counter/counter].charAt(counter + counter/counter) + my[counter/counter].charAt(my.length-1).toUpperCase()+"<br>"); // "rO"