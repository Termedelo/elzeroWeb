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
// 2) Access With charAt() 
% name.charAt(0 , ...) name.charAt(5) returns nothing.
// 3) length 
% name.length() starts from one.
// 4) trim() 
% name.trim() it removes the before and after spaces .
// 5) toUpperCase() 
% name.toUpperCase()
// 6) toLowerCase() 
% name.toLowerCase()
// 7) indexOf(Value [Mandatory], Start [Optional] indexNumber)
// 8) lastIndexOf(Value [Mandatory], Start [Optional] Length)
% these two method returns a number and if the char is not exist they return -1.
// 9) slice(Start [Mandatory], End [Optional] Not Include End)
% this function dose not include the last index if you entered it.
% it takes a negative values to start from the end and it starts from zero.
// 10) repeat(Times) [ES6]
// 11) split(Separator [Optional], Limit [Optional])
% it takes the string and return it as an array of strings.
// 12) substring(Start [Mandatory], End [Optional] Not Including End)
% if the Start > End it will Swap
% if the Start < 0 It Starts From 0
% we can Use Length To Get Last Character since it doesn't take negative numbers
// 13) substr(Start [Mandatory], Characters To Extract)
% if the Start >= Length it will return "" 
% Negative Start From End like the slice.
// 14) includes(Value [Mandatory], Start [Optional] Default 0) [ES6]
% it returns true or false.
// 15) startsWith(Value [Mandatory], Start [Optional] Default 0) [ES6]
% it returns true or false.
// 16) endsWith(Value [Mandatory], Length [Optional] Default Full Length) [ES6]
% it returns true or false.
~ 2) Number 
! let x = 2000 or 2000.998;
// (Syntactic Sugar "_") (e)
// 1) toString() 
% (x.toString()); or (x..toString());
// 2) toFixed(num) 
% (x.toFixed(num)); 
// 3) parseInt() 
% (parseInt("String"));
// 4) parseFloat() 
% (parseFloat("String"));
// 5) isInteger() [ES6] 
% (Number.isInteger(IntegerNumber)); true
// 6) isNaN() [ES6] 
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
// 1) Math.round(); 
% Math.Round(99.2); -> 99 , math.Round(99.5); -> 100
// 2) Math.ceil(); 
% Math.ceil(99.1); -> 100
// 3) Math.floor(); 
% Math.floor(99.9) -> 99
// 4) Math.min(); 
% Math.min(1 , 2 , 3 , 4 , 5); -> 1
// 5) Math.max(); 
% Math.max(1 , 2 , 3 , 4 , 5); -> 5
// 6) Math.pow(); 
% Math.pow(2 , 4); -> 16
// 7) Math.random(); 
% Math.random(); -> any random number
// 8) Math.trunc(); [Es6] 
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
*/
