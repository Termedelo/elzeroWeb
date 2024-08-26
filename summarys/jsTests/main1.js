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

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3 , 7)); // Zero

// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" " , 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0 , 7)}${a.substr(-6 , 6)}`); // Elzero School
let b = "ahmad";
// Solution Must Be Dynamic Because String May Changes
console.log(b.charAt(0).toLowerCase() + b.substring(1 , b.length-1).toUpperCase() + b.charAt(length+1).toLowerCase()); 
// eLZERO WEB SCHOOl