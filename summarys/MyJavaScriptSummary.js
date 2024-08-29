/*
? how to Output something in js: there are a number of methods but the main is four 
// 1) window.alert("anyMessage"); -> this method is not used any more it stops the flow of code.
// 2) console.log("anyMessage");  -> this method will output on the console log screen.
// 3) document.write("anyMessage"); 
// -> document is the class of the html file it will write on the html file.
// 4) document.writeln("anyMessage");
# ---------------------------------------------------------------------------------------------
? the Console have many functions i will write a number of these functions:
// 1) console.clear();
// 2) console.count("AnyThing");
// 3) console.countReset("AnyThing");
// 4) console.warn("AnyThing");
// 5) console.error("AnyThing");
// 6) console.info("AnyThing");
// 7) console.log("AnyThing");
// 8) console.table(["h" , "hi" , "hi"]);
! console.error("%c %s Any Text %f %i " , "color:red;" , "use" , 3.9 , 0);
// (%d or %i) -> Outputs an integer.
// (%s) -> Outputs a string.
// (%f) -> Outputs a floating-point value.
// (%c) -> Applies CSS style rules to all following text.
# ---------------------------------------------------------------------------------------------
? data types in javaScript:
! we can use the TypeOf operator to know the type of any data e.g. (typeOf 500).
// primitive data types:
~ 1) string 
! let name = "Ahmad";
// 1) Access With Index 
% name[0 , ...] , name[5] returns undefined.
// 2) Access With charAt(): String(char) 
% name.charAt(0 , ...) name.charAt(5) returns nothing.
// 3) length : number
% name.length() starts from one.
// 4) trim() : String
% name.trim() it removes the before and after spaces .
// 5) toUpperCase() : String
% name.toUpperCase()
// 6) toLowerCase() : String
% name.toLowerCase()
// 7) indexOf(Value [Mandatory], Start [Optional] indexNumber) : number
// 8) lastIndexOf(Value [Mandatory], Start [Optional] Length) : number
% these two method returns a number and if the char is not exist they return -1.
// 9) slice(Start [Mandatory], End [Optional] Not Include End) : String
% this function dose not include the last index if you entered it.
% it takes a negative values to start from the end and it starts from zero.
// 10) repeat(Times) [ES6] : String
// 11) split(Separator [Optional], Limit [Optional]) : Object of Array
% it takes the string and return it as an array of strings.
// 12) substring(Start [Mandatory], End [Optional] Not Including End) : String
% if the Start > End it will Swap
% if the Start < 0 It Starts From 0
% we can Use Length To Get Last Character since it doesn't take negative numbers
// 13) substr(Start [Mandatory], Characters To Extract) : String
% if the Start >= Length it will return "" 
% Negative Start From End like the slice.
// 14) includes(Value [Mandatory], Start [Optional] Default 0) [ES6] : Boolean
% it returns true or false.
// 15) startsWith(Value [Mandatory], Start [Optional] Default 0) [ES6] : Boolean
% it returns true or false.
// 16) endsWith(Value [Mandatory], Length [Optional] Default Full Length) [ES6] : Boolean
% it returns true or false.
~ 2) Number 
! let x = 2000 or 2000.998;
// (Syntactic Sugar "_") (e)
// 1) toString() : String
% (x.toString()); or (x..toString());
// 2) toFixed(num) : String
% (x.toFixed(num)); 
// 3) parseInt() : Number
% (parseInt("String"));
// 4) parseFloat() : Number
% (parseFloat("String"));
// 5) isInteger() [ES6] : Boolean
% (Number.isInteger(IntegerNumber)); true
// 6) isNaN() [ES6]  : Boolean
% (Number.isNaN(anyNaN)); -> true
~ 3) boolean 
% true or false
~ 4) bigint 
~ 5) symbol 
~ 6) null 
% its an object
~ 7) undefined
// non-primitive data types:
~ 1) object 
% it could be array or an regular object.
~ 2) function 
% function FunName(){}.
# ---------------------------------------------------------------------------------------------
? Math Object in javaScript:
// 1) Math.round(); : Number
% Math.Round(99.2); -> 99 , math.Round(99.5); -> 100
// 2) Math.ceil(); : Number
% Math.ceil(99.1); -> 100
// 3) Math.floor(); : Number
% Math.floor(99.9) -> 99
// 4) Math.min(); : Number
% Math.min(1 , 2 , 3 , 4 , 5); -> 1
// 5) Math.max(); : Number
% Math.max(1 , 2 , 3 , 4 , 5); -> 5
// 6) Math.pow(); : Number
% Math.pow(2 , 4); -> 16
// 7) Math.random(); : Number
% Math.random(); -> any random number
// 8) Math.trunc(); [Es6] : Number
% Math.trunc(99.199);-> 99 , Math.trunc(10.8989); > 10
# ---------------------------------------------------------------------------------------------
? Variables in javaScript:
// java script is a loosely type language that you don't need to define the type of the variable.
// the variable name in java Script is case sensitive.
// the ID of all html tags is a global variable.
? how to declare a variable in js : we have three ways we can that vary in many things 
~ 1) var VAriableName = VariableValue;
  * it can be Re-Declared.
  * when you try to Access Before Declare it will output -> Undefined.
  * when declaring a variable using var it will be added to the Window obj causing a (Variable Scope Drama).
  * non-Block Scope and function Block Scope
~ 2) let VAriableName = VariableValue;
  * it can't be Re-Declared.
  * when you try to Access Before Declare it will output -> error.
  * it doesn't cause a (Variable Scope Drama)
  * Block Scope and function Block Scope
~ 3) const VAriableName = VariableValue;
  * it can't be Re-Declared or Modify its value.
  * when you try to Access Before Declare it will output -> error.
  * it doesn't cause a (Variable Scope Drama)
  * Block Scope and function Block Scope
! don't forget about the lexical scope (parents and children).
# ---------------------------------------------------------------------------------------------
? the Escape character an the concatenation in javaScript:
// you can use: 
// (\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \{, \}, \|, \/) 
// or (\f, \n, \r, \t, \v) or (\)
// to do concatenation in js we use (+) between Strings or something and string.
# now we have the ECMAScript6 that makes this thing easer for us like so:
# console.log(`${Variable} ${MathExpression} ${AnyThing} ...`);
# let v = `hello world my name is ${name} and my age is {10 + 11}`
# here we can write the spaces and the symbols without the need to Escape or concatenation.
? Arithmetic Operations in javaScript:
// we can use (+ , - , * , / , % , ** (exp ES7) , ++ , -- , += , -= , /= , *=).
// NaN in javaScript stands for (Not a Number) and fun fact its from type number.
# ---------------------------------------------------------------------------------------------
? Unary Plus and Unary Negation
// Unary Plus [Return Number If Its Not Number]
~ console.log(+100); -> 100
~ console.log(+"100"); -> 100
~ console.log(+"-100"); -> -100
~ console.log(+"Osama"); -> NaN
~ console.log(+"15.5"); -> 15.5
~ console.log(+0xff); -> 255
~ console.log(+null); -> 0
~ console.log(+false); -> 0
~ console.log(+true); -> 1
// Unary Negation [Return Number If Its Not Number and Negates It]
~ console.log(-100); -> -100
~ console.log(-"100"); -> -100
~ console.log(-"-100"); -> 100
~ console.log(-"Osama"); -> NaN
~ console.log(-"15.5"); -> -15.5
~ console.log(-0xff); -> -255
~ console.log(-null); -> -0
~ console.log(-false); -> -0
~ console.log(-true); -> -1
# ---------------------------------------------------------------------------------------------
// Type Coercion (Type Casting): 
~ here the language will cast any thing according to its type:
! come back here and learn more...
# ---------------------------------------------------------------------------------------------
? comparison in javaScript:
// normal equality : value == value 
% here we are comparing the equality of the values without looking at the type.
// normal inequality : value != value 
% here we are comparing the inequality of the values without looking at the type.
// strict equality : value === value 
% here we are comparing the equality of the values and the equality of the type.
// strict inequality : value !== value 
% here we are comparing the inequality of the values and the inequality of the type.
// also you can use (< , <= , > , >=).
// we can also use (and (&&) , or (||) , not (!) , Nullish (??)).
// we can use the ( Or (||) ) to solve the cases when we need true or real value for something.
% e.g. Null || Undefined || Any Falsy Value (0 , false  , "" , ...) || ... || any True Value.
% it will replace any Null , Undefined , falsy values with a true value from you choice. 
// we can use the ( Nullish (??) ) to solve the cases when we need an unNull or defined value for something.
% e.g. Null ?? Undefined ?? ... || any True Or False Value.
% it will replace any Null , Undefined values with the true or false values from your choice. 
# ---------------------------------------------------------------------------------------------
? control flows in javaScript:
! conditional control flow:
~ 1) if statement:
// if(condition){...}
~ 2) if else statements:
// if(condition){...} else {...}
~ 3) if else if ... statements:
// if(condition){...} else {...} if(condition){...} ...
~ 4) Ternary if else statements:
// (condition) ? if true : if false;
// (condition) ? if true : (condition) ? if true : (condition) ? if true : .... : if false ;
~ 5) the switch Statement:
// switch(expression) { case1 : ... brake; ... Default:}
// switch(expression) { case1 case2 ...: ... brake; ... Default:} 
% it can take multiple cases as you wish.
! looping control flow:
~ 1) for loop:
// for (initialize , condition , increment){...}
~ 2) while loop:
// while (condition){...}
~ 2) do while loop:
// do{...}while (condition);

! to control loops we can use :
~ 1) break
~ 2) continue
~ 3) label : we use it to label any loop when we have nested loops using break an continue.
* MainLabel1:for(...){ 
*   SecondaryLabel:for(...){
*      if(...){ break MainLabel; or continue SecondaryLabel; ...}
*   } 
* }
# ---------------------------------------------------------------------------------------------
? Array in javaScript:
// Create Arrays [Two Methods] new Array() or [].
% let arr1 = new Array("A", 1, true, 3.9, null);
% let arr2 = ["A", 1, true, 3.9, null];
// Access Arrays Elements is indexed starts from zero.
// you can Check the Array using -> Array.isArray(arrName);
// you can get the length of array using (ArrayName.length) it starts counting from one.
// the indexOutOfBounderException here will print just undefined. 
! we have several functions to use in on the array:
~ 1) ArrayName.unshift("", "", ...); : Length Of the array after adding elements
% To Add Elements To The Start of the array
~ 2) ArrayName.push("", "", ...); : Length Of the array after adding elements
% To Add Elements To The End of the array
~ 3) ArrayName.shift(); : Array Element
% to get the First Element in the array.
~ 4) ArrayName.pop(); : Array Element
% to get the last Element in the array.
// to search within the array we can use :
~ 5) ArrayName.indexOf(Search Element, start Index [Optional]) : Number
% here, we are searching for the index of an element [start , end].
% it includes the start index in the searching and it takes negative values. 
~ 6) ArrayName.lastIndexOf(Search Element, From Index [Optional]) : Number
% here, we are searching for the index of an element [end , start].
% it includes the start index in the searching and it takes negative values.
~ 7) ArrayName.includes(valueToFind, fromIndex [Optional]) [ES7] : Boolean
% were we are searching wither the element exists in the array or not.
// to sort a array we can use:
~ 8) ArrayName.Sort();
~ 8.1) ArrayName.Sort(You Can Build a function to sort (optional));
% here js will convert every element to String and sort it according to UTF-16.
% it sorts element in the array in an ascending order by default.
~ 8) ArrayName.reverse();
% here js will convert every element to String and sort it according to UTF-16.
% it sorts element in the array in an descending order by default.
// to slice an Array we can use:
~ 10) ArrayName.slice(Start Index [optional], End Index [optional] Not Including End)
% ArrayName.slice() will return all the elements of the Array
% if the Start index is not entered it will start from zero.
% if the End index is not entered or if its grater then the indexes it will go to the end of the array. 
% it takes negative values to start from the end
% it dose not effect the original array but it Returns a New Array.
~ 11) ArrayName.splice(Start [Mandatory], DeleteCount [optional] , The Items To Add [optional])
% it takes negative values to start from the end
% it returns an array containing the deleted items.
% it does effect the original array. 
% it simply will add and delete items from your array from a starting index from you choice. \
// to join arrays together we can use:
~ 12) ArrayName.concat(array, array, [...], anyItem, ...);
% it will make all the arrays as a one array together.
% it dose not effect the original arrays but it Returns a New Array.
~ 13) ArrayName.join(Separator);
% this function will return a String that contains all items of the array.
% the items can be separated by any thing from your choice (by default a comma (,)). 
# ---------------------------------------------------------------------------------------------
? functions on javaScript:
~ 1) basic function:
// function funName(parameter , ...){ .... }
~ 2) function with a return:
// function funName(parameter , ...){ .... return anything;}
! to avoid undefined parameters you can use if statement or you can use the (or) operator.
! you can use the same ways in the above line to give your parameters a default value.
! in the ES6 you can just do the following to give your parameters a default values:
// function funName(param1 , param2 = "0" , ...){... return param1 , param2;}
~ 3) function with an unknown number of arguments:
// here we can use one parameter parameter with triple dots before it to make it an Array of arguments.
% note that you cant use the three dots parameter more then once.
% note that you can use any parameters before it but you cant use after it.
// function funName(...ParamsArray){... return anyThing;} 
~ 4) Anonymous function:
// let AnyVariable = function (parameter , ...){ .... };
% its a function without a name that we use for a single use task.
% we can call it by the variable name like so : AnyVariable(parameter , ...);
~ 5) Nested functions: this is the stupidest thing to do in my opinion.
// he said that if you want to decompose a big function into smaller functions you can use this way.
~ 6) the Arrow Function:
// let AnyVariable = (parameter , ...) => {...}; 
% if we have a one line bode in the function we can remove {} and return.
% if we don't have parameters we can remove () and instead write _ .
% if we have single parameter we can remove () and write it directly if not we cant.
*/
