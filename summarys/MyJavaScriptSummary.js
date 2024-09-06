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
~ console.log(+"OOOO"); -> NaN
~ console.log(+"15.5"); -> 15.5
~ console.log(+0xff); -> 255
~ console.log(+null); -> 0
~ console.log(+false); -> 0
~ console.log(+true); -> 1
// Unary Negation [Return Number If Its Not Number and Negates It]
~ console.log(-100); -> -100
~ console.log(-"100"); -> -100
~ console.log(-"-100"); -> 100
~ console.log(-"OOOO"); -> NaN
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
~ 1) basic Function:
// function funName(parameter , ...){ .... }
~ 2) Function with a return:
// function funName(parameter , ...){ .... return anything;}
! to avoid undefined parameters you can use if statement or you can use the (or) operator.
! you can use the same ways in the above line to give your parameters a default value.
! in the ES6 you can just do the following to give your parameters a default values:
// function funName(param1 , param2 = "0" , ...){... return param1 , param2;}
~ 3) Function with an unknown number of arguments:
// here we can use one parameter parameter with triple dots before it to make it an Array of arguments.
% note that you cant use the three dots parameter more then once.
% note that you can use any parameters before it but you cant use after it.
// function funName(...ParamsArray){... return anyThing;} 
~ 4) Anonymous Function:
// let AnyVariable = function (parameter , ...){ .... };
% its a function without a name that we use for a single use task.
% we can call it by the variable name like so : AnyVariable(parameter , ...);
~ 5) Nested Functions: this is the stupidest thing to do in my opinion.
// he said that if you want to decompose a big function into smaller functions you can use this way.
~ 6) the Arrow Function:
// let AnyVariable = (parameter , ...) => {...}; 
% if we have a one line bode in the function we can remove {} and return.
% if we don't have parameters we can remove () and instead write _ .
% if we have single parameter we can remove () and write it directly if not we cant.
~ 7) Higher Order Functions: is a function that accepts functions as parameters and/or returns a function.
// A) map function is an iterative array function that takes:
! let newArray = originalArray.map(callback(currentValue, index, array) {...}, thisArg);
% 1) callback: A function that will be executed on each element of the array.   
% 2) currentValue: The current element being processed in the array.
% 3) index (optional): The index of the current element being processed.
% 4) array (optional): The array that map was called upon.
% 5) thisArg (optional): An optional object to which (this) can refer in the callback function.
* it returns a new array that means it dose not effect the original array.
* note that it will be called by an array.
// B) filter function is an iterative array function that takes:
! let newArray = originalArray.filter(callback(currentValue, index, array) {...}, thisArg);
% 1) callback: A function that will be executed on each element of the array.
* note that here the function will return only the elements that passes the condition.
* inside the function you need to write a condition that returns true or false:
* if the condition returned true this means that the element is included in the newArray.   
* if the condition returned false this means that the element is excluded from the newArray.   
% 2) currentValue: The current element being processed in the array.
% 3) index (optional): The index of the current element being processed.
% 4) array (optional): The array that map was called upon.
% 5) thisArg (optional): An optional object to which (this) can refer in the callback function.
* it returns a new array that means it dose not effect the original array.
* note that it will be called by an array.
// C) reduce function is an iterative array function that takes:
! let newArray = reduce(callback(accumulator, currentValue, index, array) {...}, initialValue);
% 1) callback: A function that will be executed on each element of the array.
* method executes a reducer function on each element of the array resulting in a single output value. 
% 2) accumulator : the variable that the result will be stored in.
* it Starts with the value of index 0 if an initialValue is provided. 
* Otherwise it starts from the value of index 1.
% 3) currentValue: The current element being processed in the array.
% 4) index (optional): The index of the current element being processed.
* Starts from index 0 if an initialValue is provided, Otherwise it starts from index 1.
% 5) array (optional): The array that map was called upon.
% 6) initialValue (optional): this the initial value of the accumulator.
// D) forEach function is an iterative array function that takes:
! let newArray = forEach(callback(currentValue, index, array) {...}, thisArg);
% 1) callback: A function that will be executed on each element of the array.   
% 2) currentValue: The current element being processed in the array.
% 3) index (optional): The index of the current element being processed.
% 4) array (optional): The array that map was called upon.
% 5) thisArg (optional): An optional object to which (this) can refer in the callback function.
* it dose effect the original array and returns nothing.
* note that it will be called by an array.
# ---------------------------------------------------------------------------------------------
? Object oriented javaScript:
// how to create an object in javaScript:
!let objName = { 
* properties:
!property1:Value1 -> anyThing,
!property2:Value2 -> anyThing,
!............................,
* Methods:
!Method1:Method(...){
!},
!Method2:Method(...){
!},
!.......................,
!};
// we can access the object properties using two ways and the Methods in one way:
~ 1) the Dot Notation:
% objName.propName;
% objName.MethodName(...);
* we are using this way when we have valid names for the properties or the Methods.
~ 2) the Bracket Notation: 
% objName["propName"];
* here we are considering the obj as a hash map with keys and values.
* when you need to use the dynamic property name it must be used by the Bracket Notation.
% e.g. let name = "ahmad";
% let user = {
%   "ahmad":"ali";
% }
% consol.log(user[name]);
! accessing nested objects with the two ways:
% obj1.obj2.obj3.(...);
% obj1["obj2"]["obj3"]["..."];
// we can add new properties or Methods using the object name:
% e.g. let user = {};
% user.newProp1 = anyValue1.
% user["newProp2"] = anyValue2.
% user.newMethod = Method() {...}.
% and so on....
// this keyword : we have a number of cases to use (this) keyword
~ 1) within a method thats in an object:
% it will refer to the object itself.
~ 2) within a regular function:
% it will refer to the global object (window).
~ 3) Alone within the global scope:
% it will refer to the global object (window).
~ 4) In a function, in strict mode.
% it will refer to undefined.
// to create a clone obj from a prototype obj we can use :
! let newObj = Object.create(protoTypeObj);
* this function will create a new object from protoTypeObj.
* the newObj will have all properties and methods of the protoTypeObj.
* the newObj will be linked with the protoTypeObj:
* what if we needed to update something in the newObj ?
* we can simply use (this keyword) on the protoTypeObj.
* we can create an empty obj by this method.
// to create a newObject by merging more then oneObj together:
! let newObj = Object.assign(TargetObj , SourceObj1 , SourceObj2 , ...);
* this method will take all the properties of the source Objects and merge it into the target obj.
* note that this method will not effect the targetObj it will create a new one.
* what if we had a duplicated property of method ?
* simply it will take the first one of them all.
// to get the keys of an object we can use:
% Object.keys(Obj);
# ...............................................................................................
// the constructor function:
* its a regular function with the use of the (new) keyword and the (this) keyword.
% function constructorName(objProp1, objProp2, objProp3, ...){
% this.objProp1 = objProp1;
% this.objProp2 = objProp2;
% this.objProp3 = objProp3;
% }
! the (this) keyword here refers to the object being created.
% let obj = new constructorName(objProp1, objProp2, objProp3);
// creating a constructor using (ES6) way:
* here we create a class and we use the (constructor) keyword:
% class className{ constructor(objProp1, objProp2, objProp3....){...} }
% let obj = new className(objProp1, objProp2, objProp3);
! note that the constructor contains properties only even if they was functions.
! the class can have methods called by its objects.   
! you know how to update the object properties.
! when dealing with built in constructors like (String or Number) it will give objects :
% e.g.:
% let strOne = "NNN";
% let strTwo = new String("NNN");
% typeof strOne; => String.
% typeof strTwo; => Object.
% strOne instanceof String; => false.
% strTwo instanceof String; => true.
% strOne.constructor === String; => true.
% strTwo.constructor === String; => true.
# ...............................................................................................
// inheritance:
* here we are using the keyword (extends) to inherit from the super classes.
* we use the method super(inheritedProperties, ...) to control the inheritedProperties from the super.
% parentClass{
%   constructor(prop1 , prop2 , ...){
%    this.prop1 = prop1;
%    this.prop2 = prop2;
%   }
% } 
% childClass extends parentClass{
%   constructor(prop1 , prop2 , prop3, ...){
%    super(prop1 , prop2);
%    this.prop3 = prop3;
%   }
% } 
# ...............................................................................................
// Encapsulation
! what you need here is to declare a privet variable in javaScript you need to use (#).
% parentClass{
%   #privetVariable;
%   constructor(prop1, prop2, ...){
%    this.prop1 = prop1;
%    this.prop2 = prop2;
%   }
%   SetterFunction(privetVar){
%     this.#privetVariable = privetVar;
%   }
%   getterFunction(){
%     return this.#privetVariable;
%   }
% } 
! note that the child classes wont be able to access the privet variable. 
! it could be accessed only through the getter and setter functions.
# ...............................................................................................
// prototype in a class:
* Prototypes are the mechanism by which JavaScript objects inherit features from one another.
* its fundamental concept that enables inheritance and the sharing of properties and methods among objects. 
# ---------------------------------------------------------------------------------------------
? Document object module (DOM) in javaScript:
* What Is Document object module (DOM) ?
* its an object named document that refers to the Html page.
! Document object module (DOM) Selectors:
~ 1) Find Element By ID : 
% let var1 = document.getElementById("id"); : Object
~ 2) Find Element By Tag Name
% let var2 = document.getElementsByTagName("tagName"); : Array of Objects
~ 3) Find Element By Class Name
% let var3 = document.getElementsByClassName("class"); : Array of Objects
~ 4) Find Element By CSS Selectors
% let var4 = document.querySelector("#id, .class, tagName , ..."); : Objects
* this one will get just the first one as an Object.
% let var5 = document.querySelectorAll("#id, .class, tagName , ..."); : Array of Objects
* this one will get all items as an Array Of Objects.
~ 5) Find Element By Collection
% let var6 = document.title.(...).anyAttribute;
% let var7 = document.body.(...).anyAttribute;
% let var8 = document.images.(...).anyAttribute;
% let var9 = document.forms.(...).anyAttribute;
% let var10 = document.links.(...).anyAttribute;
% you can get any Html tag by this way...
// how to get and set html tags content and attributes using DOM:
~ innerHTML
% let var1 = document.querySelector("...").innerHTML;
* it will give you the html content that is inside your tag as tags.
~ textContent
% let var2 = document.querySelector("...").textContent;
* it will give you the html content that is inside your tag as text.
~ Change Attributes Directly
% let var3 = document.images[index].src;
% document.images[index].src = "anyPath";
~ Change Attributes With Methods
% let var4 = document.querySelector("...").getAttribute("attributeName");
% document.querySelector("...").setAttribute("attributeName" , "AttributeValue");
! note that the attributes is the html tags attributes not the css.
! note this functions will override an already existing attribute.
! note this functions will create the attributes that dose'nt exists.
// we have several methods to check on attributes and to delete attributes:
~ 1) YourElement.attributes;
% it returns a NamedNodeMap (indexed) like an array with all element attributes.
~ 2) YourElement.hasAttribute("AttributeName");
% it returns true if the attribute exists within the Element.
% it returns false if the attribute is not exist within the Element.
~ 3) YourElement.hasAttributes();
% it returns true if the Element has any attributes.
% it returns false if the Element has no attributes.
~ 4) YourElement.removeAttribute("AttributeName");
% this function will remove the attribute completely from the element.
// to create Html elements and Attributes using javaScript:
~ 1) createElement
% let var1 = document.createElement("ElementTagName");
* we use this to create Html Elements
~ 2) createComment
% let var2 = document.createComment("Comment");
~ 3) createTextNode
% let var3 = document.createTextNode("..Text..");
* we use this function to create a text to place it were we need.
~ 4) createAttribute
% let var4 = document.createAttribute("AttributeName");
* we use this one to create an Empty Attribute to use it in the future.
% ElementObj.setAttributeNode("AttributeName or Variable");
*we use this one to set the empty Attribute in the element.
! note that we use this way to create new Attribute on the element. 
! or we can just use the setAttribute() to create it, its you choice.
~ 5) appendChild
% ElementObj.appendChild(var3);
* we use this to add the text to the end of the element.
% document.body.appendChild(Element)
* we also use this one to add the whole element on the body.
% document.body.appendChild(var2);
* we can also use it to add a comment to the body.
// when we need to deal with children inside an element we use:
~ 1) to get all the children of an element we can use:
% element.children; -> returns an array
~ 2) to get all children on an element including everyThing even spaces and comments:
% element.childNodes; -> returns an array
~ 3) to get the first child of an element including everyThing even spaces and comments:
% element.firstChild; 
~ 4) to get the last child of an element including everyThing even spaces and comments:
% element.lastChild; 
~ 5) to get the first child of a specific type excluding spaces and comments:
% element.firstElementChild; 
~ 6) to get the last child of a specific type excluding spaces and comments:
% element.lastElementChild; 
// java Script events are a lot so i will cope a number of them:
% element.onEvent = function(){...}
~ 1) Mouse Events
* onclick: Triggered when the user clicks an HTML element.
* ondblclick: Triggered when the user double-clicks an HTML element.
* onmouseover: Triggered when the mouse pointer moves over an HTML element.
* onmouseout: Triggered when the mouse pointer moves out of an HTML element.
* onmousedown: Triggered when a mouse button is pressed down over an element.
* onmouseup: Triggered when a mouse button is released over an element.
* onmousemove: Triggered when the mouse pointer moves over an element.
~ 2) Keyboard Events
* onkeydown: Triggered when a key is pressed down.
* onkeypress: Triggered when a key is pressed (deprecated in favor of onkeydown and onkeyup).
* onkeyup: Triggered when a key is released.
~ 3) Form Events
* onchange: Triggered when the value of an input element has changed.
* onfocus: Triggered when an input element gains focus.
* onblur: Triggered when an input element loses focus.
* onsubmit: Triggered when a form is submitted.
* onreset: Triggered when a form is reset.
* oninput: Triggered when the value of an input element is changed.
~ 4) Window Events
* onload: Triggered when the browser has finished loading the page.
* onunload: Triggered when the user leaves the page.
* onresize: Triggered when the browser window is resized.
* onscroll: Triggered when the document is scrolled.
~ 5) Drag and Drop Events
* ondrag: Triggered when an element is being dragged.
* ondragend: Triggered when a drag operation is complete.
* ondragenter: Triggered when a dragged element enters a valid drop target.
* ondragleave: Triggered when a dragged element leaves a valid drop target.
* ondrop: Triggered when an element is dropped on a valid drop target.
~ 6) Touch Events (for mobile devices)
* ontouchstart: Triggered when a touch point is placed on the touch surface.
* ontouchmove: Triggered when a touch point is moved along the touch surface.
* ontouchend: Triggered when a touch point is removed from the touch surface.
~ 7) Other Events
* onerror: Triggered when an error occurs while loading an external resource.
* oncontextmenu: Triggered when the user right-clicks on an element to open the context menu.
* onselect: Triggered when some text is selected.
// to validate and check forms and anything what we can do:
! note that the anonymous function of an event can take a parameter that refers to the event it self.
% element.event = function (event) {event.anyThing;}
~ Step1) we need to create a false boolean with any name.
~ Step2) we need to check any condition we need if its valid we turn the boolean into true.
~ Step3) we need one last condition that checks the boolean.
* if the boolean was true the condition wont use the event.preventDefault() method.
* if the boolean still false the condition will use the event.preventDefault() method.
! what dose preventDefault() method do ?
! it prevents the default behaver of an event.
// the simulated events in javaScript : 
! its an events that occurs without the need to the user involvement. 
% element.simulatedEvent().
~ 1) Mouse Events
* click: Simulates a mouse click.
* dblclick: Simulates a double-click.
* mousedown: Simulates pressing down a mouse button.
* mouseup: Simulates releasing a mouse button.
* mouseover: Simulates the mouse pointer moving over an element.
* mouseout: Simulates the mouse pointer moving out of an element.
* mousemove: Simulates moving the mouse over an element.
~ 2) Keyboard Events
* keydown: Simulates pressing down a key.
* keyup: Simulates releasing a key.
* keypress: Simulates pressing a key (deprecated in favor of keydown and keyup).
~ 3) Form Events
* change: Simulates changing the value of an input element.
* focus: Simulates an element gaining focus.
* blur: Simulates an element losing focus.
* submit: Simulates submitting a form.
~ 4) Touch Events (for mobile devices)
* touchstart: Simulates the start of a touch interaction.
* touchmove: Simulates moving a touch point.
* touchend: Simulates the end of a touch interaction.
~ 5) Custom Events
* CustomEvent: Allows the creation of custom events with additional data.
// to work with DOM [Class List]  we have several methods:
~ 1) classList:
% let list = element.classlist;
* it returns an array contains all the classes of your element.
~ 2) length:
% element.classlist.length;
* it returns the length of the list (number of classes).
~ 3) contains:
% element.classlist.contains("class");
* it returns true if the class is founded in the list.
* it returns false if the class is not founded in the list.
~ 4) item(index):
% element.classlist.item(index);
* it returns the class with the needed index.
~ 5) add:
% element.classlist.add("class", "class", ...);
* it adds the classes to your element.
~ 6) remove:
% element.classlist.remove("class", "class", ...);
* it adds the classes to your element.
~ 7) toggle:
% element.classlist.toggle("class", "class", ...);
! it works like the add and remove method at the same time:
* if the class is exists in the element it will remove it.
* if the class is not exists in the element it will add it.
// when it comes to styling DOM [CSS] your elements in javaScript we can use:
~ 1) using the style way:
% element.style.anyProperty = "value";
! the properties here written in the camelCase way. 
~ 2) using the cssText way:
% element.style.cssText = "Regular Css lines";
# these two methods can edit Inline or External Style Sheet:
# inline:
~ 3) removeProperty(propertyName)
% element.removeProperty("propertyName");
~ 4) setProperty(propertyName, value, priority)
% element.setProperty("propertyName", "propertyValue", "priority (Opt)");
# External Style Sheet:
~ 3) removeProperty(propertyName)
% document.styleSheets[index].rules[index].style.removeProperty("propertyName");
~ 4) setProperty(propertyName, value, priority)
% document.styleSheets[index].rules[index].style.setProperty("propertyName", "propertyValue", "priority");
! the styleSheets is an array that contains all css files.
! the rules is an array that contains all css rules e.g. (div{} , p{} ,...).
// when we need to deal with the DOM Elements:
~ 1) before it takes Element or String:
% element.before(Element or "String");
* it adds the (Element or "String") outside and before your element.
~ 2) after it takes Element or String:
% element.after(Element or "String");
* it adds the (Element or "String") outside and after your element.
~ 3) append it takes Element or String:
% element.append(Element or "String");
* it adds the (Element or "String") inside and at the end of your element.
~ 4) prepend it takes Element or String:
% element.prepend(Element or "String");
* it adds the (Element or "String") inside and at the start of your element.
~ 5) remove
% element.remove();
* it removes the Element from the whole document.
// when you need to Traves among your DOM elements:
~ 1) nextSibling
% element.nextSibling;
* it gets you the next sibling in the same parent including everyThing even spaces and comments.
~ 2) previousSibling
% element.previousSibling;
* it gets you the previous sibling in the same parent including everyThing even spaces and comments.
~ 3) nextElementSibling
% element.nextElementSibling;
* it gets you the next sibling in the same parent excluding spaces and comments.
~ 4) previousElementSibling
% element.previousElementSibling;
* it gets you the previous sibling in the same parent excluding spaces and comments.
~ 5) parentElement
% element.parentElement;
* it gets you the parent of your element.
// to make a clone out of a specific element we can use:
% element.cloneNode(DeepVar : True or false);
* this function clones the element with its attributes.
* it clones the element with its tag content if the deep was true.
* it clones the element without its tag content if the deep was false.
! the default for the deepVar is false so what dose it means.
// we have a new way to add an event to our elements its DOM Add Event Listener:
! why do we need this we already have one ?
! simply when you need to add more then one event to the same element it wont work.
% element.addEventListener("simulatedEvents" , function() {...});  
* the best way to use this thing is to have an event on an element that doesn't exist yet in the document.
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
}); 
! target is used to have the element that you clicked whatever it was.
* The event object is automatically passed as an argument to the callback function when an event occurs. 
* It contains information about the specific event that triggered the function.
* Some common properties and methods of the event object include:
~ 1) e.type: The type of the event (e.g., "click", "submit", "keydown").
~ 2) e.target: The specific element that triggered the event.
~ 3) e.currentTarget: The element that the event listener is attached to.
~ 4) e.preventDefault(): A method to prevent the default behavior of the event. 
~ 5) e.stopPropagation(): A method to stop the event from bubbling up the DOM tree.
~ 6) e.clientX and e.clientY: The coordinates of the mouse pointer relative to the viewport.
~ 7) e.key and e.keyCode: The key or key code for keyboard events.
# ---------------------------------------------------------------------------------------------
? Browser Object model:
// Window Object Is The Browser Window:
* All Global Variables And Objects And Functions Are Members Of Window Object
* What Can We Do With Window Object ?
~ Open Window
~ Close Window
~ Move Window
~ Resize Window
~ Print Document
~ Run Code After Period Of Time Once Or More
~ Fully Control The URL
~ Save Data Inside Browser To Use Later
# ...............................................................................................
// we have a number of methods on the BOM (window object):
~ 1) alert:
% alert(Message); 
* this is a message that needs No Response it needs only you to press (ok).
~ 2) confirm:
% confirm(Message); 
* it needs to Response with yes or no And it Returns A Boolean value.
~ 3) prompt:
% prompt(Message, Default Message);
* it need you to input Data to Collect it and returns the inputted data.
! note that in the global scope you can use (window.(...) , this.(...) , directly (...)).
~ 4) setTimeout:
% let Time = setTimeout(Function(){...}, Timeout, Additional Params)
* the function will be executed after the Timeout.
* Timeout its the time that the function will be executed after it in milliseconds.
* the Additional parameters is used in the case we had a function with a name and parameters.
~ 5) clearTimeout:
% clearTimeout(Identifier);
% clearTimeout(Time); up there.
* this function wil stop the timeout if it is called before the timeout time.
~ 6) setInterval(Function, IntervalTime, Additional Params)
% let interTime = setInterval(Function(){...}, IntervalTime, Additional Params)
* the function will be executed iteratively every IntervalTime.
* IntervalTime its the time that the function will be executed iteratively in milliseconds.
* the Additional parameters is used in the case we had a function with a name and parameters.
~ 7) clearInterval(Identifier) 
% clearTimeout(Identifier);
% clearTimeout(interTime); up there.
* this function wil stop the interTime if it is called.
# ...............................................................................................
// dealing with the location object using BOM [Browser Object Model]:
~ 1) href: Getting and Setting
# get
% location.href; -> (https://...)
# set
% location.href = "URL or Hash or file of mail"; 
* this way will not remove the previous page from the history.
~ 2) host
# get
% location.host; -> (Ip:Port)
% location.hostname; -> (Ip)
# set
% location.host = (Ip:Port);
% location.hostname; -> (Ip)
~ 3) hash
# get
% location.hash; -> (#...)
# set
% location.hash = "#....";
~ 4) protocol
# get
% location.protocol; -> (http or https)
# set
% location.protocol = (http or https);
~ 5) reload()
% location.reload();
~ 6) replace()
% location.replace("url");
* this way will remove the previous page from the history.
~ 7) assign()
% location.assign("url");
* this way will work as the href way.
# ...............................................................................................
// open and close you window using BOM [Browser Object Model]:
~ 1) close()
% window.close();
* this function will not close any window except the window opened by the script.
~ 2) open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
% window.open("url" , "_blank" , "width = .. , height = ... , ..." , Boolean);
* you don't need to use px or any unit.
* Window Features
* left [Num]
* top [Num]
* width [Num]
* height [Num]
* menubar [yes || no]
* ...
# ...............................................................................................
// dealing with History API using BOM [Browser Object Model]
~ 1) length:
% history.length;
* it will return the number of pages that stored on the history for you current pages moves.
~ 2) back():
% history.back();
* it will get you on the previous page on the history list.
~ 3) forward()
* it will get you on the next page on the history list.
~ 4) go(number)
% history.go(+1);
* this will get you to the next page if possible on the history list.
% history.go(-1);
* this will get you to the previous page on the history list.
# ...............................................................................................
// some BOM method and scrolling methods using BOM:
~ 1) stop()
% window.stop(); 
* this function Cancels the document load.
~ 2) print()
% window.print(); 
* this function opens the print page options.
~ 3) focus()
% window.focus(); 
* this function Moves the focus to the window's browsing context, if any.
~ 4) scrollTo(x, y or Options)
% window.scrollTo(x , y);
% window.scrollTo({top: number, left: number, behavior: "smooth",});
* scrolls to a particular set of coordinates in the document.
~ 5) scrollBy(x, y or Options)
% window.scrollBy(x , y);
% window.scrollBy({top: number, left: number, behavior: "smooth",});
* method scrolls the document in the window by the given amount.
~ 6) scrollX()
% window.scrollX();
* this function will return the scroll X value it can't be changed.
~ 7) scrollY()
% window.scrollY();
* this function will return the scroll Y value it can't be changed.
# ...............................................................................................
// dealing with Local Storage using BOM [Browser Object Model]
! what is the local Storage and what is its properties ?
! The localStorage object allows you to save key/value pairs in the browser.
! The localStorage object stores data with no expiration date.
! The data is not deleted when the browser is closed, and are available for future sessions.
~ 1) setItem:
% window.localStorage.setItem("Key", "Value");
% window.localStorage.Key = "Value";
% window.localStorage["Key"] = "Value";
* this is a three ways to set an item with a key and a value.
~ 2) getItem:
% window.localStorage.getItem("Key");
% window.localStorage.Key;
% window.localStorage["Key"];
* this is a three ways to get an item value with a key.
~ 3) removeItem:
% window.localStorage.removeItem("Key");
* this is the way to delete one item from the local Storage.
~ 4) clear:
% window.localStorage.clear();
* this is the way to remove all items from the local Storage.
~ 5) length:
% window.localStorage.length;
* this is used to get the number of items added to the local storage.
~ 6) key: 
% window.localStorage.key(index);
* this is used to get the key of items with an index in the local storage.
# ...............................................................................................
// dealing with Session Storage using BOM [Browser Object Model]
! what is the Session Storage and what is its properties ?
! The SessionStorage object allows you to save key/value pairs in the browser.
! The SessionStorage object stores data with expiration date.
! The data is deleted when the browser is closed, and are available for future sessions.
! you need to duplicate the page to have the same sessionStorage data.
~ 1) setItem:
% window.sessionStorage.setItem("Key", "Value");
% window.sessionStorage.Key = "Value";
% window.sessionStorage["Key"] = "Value";
* this is a three ways to set an item with a key and a value.
~ 2) getItem:
% window.sessionStorage.getItem("Key");
% window.sessionStorage.Key;
% window.sessionStorage["Key"];
* this is a three ways to get an item value with a key.
~ 3) removeItem:
% window.sessionStorage.removeItem("Key");
* this is the way to delete one item from the local Storage.
~ 4) clear:
% window.sessionStorage.clear();
* this is the way to remove all items from the local Storage.
~ 5) length:
% window.sessionStorage.length;
* this is used to get the number of items added to the local storage.
~ 6) key: 
% window.sessionStorage.key(index);
* this is used to get the key of items with an index in the local storage.
# ---------------------------------------------------------------------------------------------
? Destructuring Arrays : 
// its the process that allows for the unpacking of values from data-Chunks into distinct variables.
// data-Chunks : arrays, objects, and maps.
% let arr = [item1, item2, item3, ...];
% let [var1, var2, var3, ...] = arr; -> (item1, item2, item3, ...)
% let [, var2,, ...] = arr; -> (, item2,, ...)
* this way we get every array item into an independent variable.
! you know how to Destructure a nested array.
# ...............................................................................................
// Swapping variables using Destructuring Arrays :
* in the past we needed to declare a new variable to do it but with the Destructuring:
% let var1 = val2;
% let var2 = val1;
% [var1 , var2] = [var2 , var1]; -> just like this
! e.g.
~ let var1 = "val2";
~ let var2 = "val1";
~ console.log(`${var1} ${var2} -> before swapping`);
~ [var1 , var2] = [var2 , var1];
~ console.log(`${var1} ${var2} -> after swapping`);
# ...............................................................................................
// when it comes to object Destructuring: 
% let obj = {prop1:value1, prop2:value2, prop3:value3, ...}
* if the variables was not declared before:
% let {prop1, prop2, prop3, ...} = obj;
* if the variables was declared before:
% ({prop1, prop2, prop3, ...} = obj;)
! note that you don't need to leave an empty places in you destructed object instead:
! you can just write the names of your properties or methods and ignore the unwanted once.
* if you needed to change the object properties or methods names when Destructuring:
% let {prop1:newName, prop2:newName, prop3:newName, ...} = obj;
* if you needed to give the object properties or methods a default values when Destructuring:
% let {prop1 = defaultValue, prop2 = defaultValue, prop3 = defaultValue, ...} = obj;
# ...............................................................................................
// when we need to Destructure a nested object:
% let obj1 = {prop1:val1, prop2:val2, obj2:{prop3:val3, prop4:val4}};
% let {prop1, prop2, obj2:{prop3, prop4}} = obj1;
# ---------------------------------------------------------------------------------------------
? Set Data Type :
% let newVar =  new Set([...] , arrayName);
* its an Object that Stores only Unique Values.
* the Elements Cannot be Accessed By there Indexes.
// Set Data methods and properties:
~ 1) size:
% newVar.size; 
* it gets the number of Unique items in the set.
~ 2) add:
% newVar.add(anyItem);
* this function adds elements to the end of the Set.
! it returns the new Set with the added element.	
~ 3) delete:
% newVar.delete(itemValue);
* this function deletes the specific valued element from the Set.	
! it returns true if the element is found and deleted.
! it returns false if the element is not found and not deleted.
~ 4) clear:
% newVar.clear();
* this function deletes all elements from the set.	
~ 5) has:
% newVar.has(itemValue);
* this function searches for the specific valued element from the Set:	
! it returns true if the element is found.
! it returns false if the element is not found.
~ 6) values or keys:
% newVar.keys(); or newVar.values();
* this functions is the same it returns an iterator on your set.
  ~ 6.1) next: 
  % newVar.keys().next(); or newVar.Values().next();
  * here we are moving forward in the set to get the next item.
  ~ 6.2) value: 
  % newVar.keys().next().value; or newVar.Values().next().value;
  * here we are getting the value of the elements in the set.
~ 7) forEach : it can be used on the set you know how to do it.
# ...............................................................................................
? WeakSet Data Type :
% let newVar =  new WeakSet(obj1 , obj2 , ... or ArrayOfObjs);
* its an Object that Stores only Unique Values.
* the Elements Cannot be Accessed By there Indexes.
* The WeakSet is weak, meaning references to objects in a WeakSet are held weakly.
* if we have an object with no references stored in the WeakSet it will be collected by the garbage collector.
* Usage of WeakSets: it Stores objects and removes them once they become inaccessible.
// WeakSet methods:
~ 1) add:
% newVar.add(value);
~ 2) delete:
% newVar.delete(value);
~ 3) has:
% newVar.has(value);
# ...............................................................................................
! Set vs WeakSet : 
~ Set     => Can Store Any Data Values.
~ WeakSet => Collection Of Objects Only.
---------------------------------------
~ Set     => Have Size Property.
~ WeakSet => Does Not Have Size Property.
---------------------------------------
~ Set     => Have Keys, Values, Entries.
~ WeakSet => Does Not Have clear, Keys, Values And Entries.
---------------------------------------
~ Set     => Can Use forEach
~ WeakSet => Cannot Use forEach
# ...............................................................................................
? Map Data Type
% let map = new Map(Iterable With Key/Value);
// map Data methods and properties:
~ 1) size:
% map.size; 
* it gets the number of items in the map.
~ 2) set:
% map.set(key , value);
* this function sets elements to the end of the map.
! there is another way to set elements into the map:
! let m = new Map([ [key , value], [key , value], [key , value], ... ]);
~ 3) get:
% map.get(key);
* this function get elements with the specified key from the map.
~ 3) delete:
% map.delete(key);
* this function deletes elements with the specified key from the map.	
! it returns true if the element is found and deleted.
! it returns false if the element is not found and not deleted.
~ 4) clear:
% map.clear();
* this function deletes all elements from the map.
~ 5) has:
% map.has(key);
* this function searches for the elements with the specified key in the map.	
! it returns true if the element is found.
! it returns false if the element is not found.	
# ...............................................................................................
! Map vs Object
~ Map => Does Not Contain Key By Default.
~ Object => Has Default Keys because it have a prototype.
-----------------------------------------------------------------------
~ Map => the Keys Can Be Anything (Function, Object, Any Primitive Data Types).
~ Object => the Keys are either String Or Symbol.
-----------------------------------------------------------------------
~ Map => Ordered By Insertion
~ Object => Not 100% Till Now
-----------------------------------------------------------------------
~ Map => Get Items By Size
~ Object => Need To Do Manually
* using the length of the array returned by (Object.keys();)
-----------------------------------------------------------------------
~ Map => Can Be Directly Iterated
~ Object => Not Directly And Need To Use Object.keys() And So On
-----------------------------------------------------------------------
~ Map => Better Performance When Add Or Remove Data
~ Object => Low Performance When Comparing To Map
# ...............................................................................................
? WeakMap Data Type:
% let weakMap = new WeakMap(Iterable With Key/Value);
* note that the key here must be object.
// map Data methods:
~ 2) set:
% weakMap.set(key , value);
* this function sets elements to the end of the WeakMap.
! there is another way to set elements into the WeakMap:
! let m = new WeakMap([ [key , value], [key , value], [key , value], ... ]);
~ 3) get:
% weakMap.get(key);
* this function get elements with the specified key from the WeakMap.
~ 3) delete:
% weakMap.delete(key);
* this function deletes elements with the specified key from the WeakMap.	
! it returns true if the element is found and deleted.
! it returns false if the element is not found and not deleted.
~ 5) has:
% weakMap.has(key);
* this function searches for the elements with the specified key in the WeakMap.	
! it returns true if the element is found.
! it returns false if the element is not found.	
! Map vs WeakMap
* WeakMap Allows Garbage Collector To Do Its Task unlike Map.
~ Map     => Keys Can Be Anything
~ WeakMap => Keys Can Be Object Only
# ---------------------------------------------------------------------------------------------
? Advanced Array method:
% 1) Array.from(Iterable, MapFunc, This);
* this function takes an Iterable and execute the mapFunction on it then returns it as an array.
! common build-in iterables include: 
! Arrays: You can iterate through each element loops.
! Strings: Each character can be accessed similarly.
! Maps and Sets: Both data structures are also iterable.
# ...............................................................................................
% 2) ArrayName.copyWithin(Target, Start (Optional), End (Optional))
* "Copy Part Of An Array To Another Location in The Same Array"
* note that Any Negative Value Will start Counting From The End
~ Target:
* its the index to start Copying in.
* If it was Greater Than or equal to the Array Length then Nothing Will Be Copied.
~ Start:
* its the Index To Start Copying From.
* If you didn't entered it , it will Start From Index zero.
~ End:
* its the Index To End Copying From.
* it will note be Included as its the End.
* If you didn't entered it , it will Reach The End of the array. 
# ...............................................................................................
% 3) Array.some(CallbackFunc(Element, Index (Opt), Array (Opt)), ThisArgument (Opt));
* it tests whether at least one element in the array passes the test implemented by the provided function.
~ Call back Function => Function To Run On Every Element On The Given Array:
* Element => The Current Element being processed.
* Index => Index Of Current Element being processed.
* Array => The Current Array being processed.
~ This Argument => Value To Use As This When Executing Call back Function.
! It returns true if it finds an element for which the provided function returns true. 
! It returns false if it can not find an element for which the provided function returns true.
# ...............................................................................................
% 3) Array.every(CallbackFunc(Element, Index (Opt), Array (Opt)), ThisArgument (Opt));
* it tests all elements in the array passes the test implemented by the provided function.
~ Call back Function => Function To Run On Every Element On The Given Array:
* Element => The Current Element being processed.
* Index => Index Of Current Element being processed.
* Array => The Current Array being processed.
~ This Argument => Value To Use As This When Executing Call back Function.
! It returns true if it finds that all elements for which the provided function returns true. 
! It returns false if it can not find that all elements for which the provided function returns true.
# ...............................................................................................
? Spread Syntax :
% ...Iterable;
* we use it to Allow ab Iterable To Expand In Place.
// we have a large number of use cases here is some of them:
~ Spread With String => Expand String
% console.log(..."String");
* Output: "S" "t" "r" "i" "n" "g".
% console.log([..."String"]);
* Output: ["S", "t", "r", "i", "n", "g"].
~ Concatenate Arrays
% let arr1 = [val1, val2, val3];
% let arr2 = [val4, val5, val6];
% let allArrays = [...arr1, ...arr2];
% console.log(allArrays);
* Output: [val1, val2, val3, val4, val5, val6].
~ Copy Array
% let copiedArray = [...myArray1];
% console.log(copiedArray);
~ Push Inside Array
% let arr1 = [val1, val2, val3];
% let arr2 = [val4, val5];
% allFriends.push(...thisYearFriends);
% console.log(allFriends);
* Output: [val1, val2, val3, val4, val5].
~ Use With Math Object
% let arr1 = [val1, val2, val3, val4, val5];
% console.log(Math.max(...arr1));
* Output: the largest one between (val1 ... val5).
~ Spread With Objects => Merge Objects
% let objOne = { prop1 : val1, prop2 : val2, };
% let objTwp = { prop3 : val3, prop4 : val4, };
% console.log({ ...objOne, ...objTwo, prop5: val4, });
* Output: an obj with all these properties.
! common build-in iterables include: 
! Arrays: You can iterate through each element loops.
! Strings: Each character can be accessed similarly.
! Maps and Sets: Both data structures are also iterable.
# -----------------------------------------------------------------------------------------
? Regular Expression:
* Regular expressions are patterns used to match character combinations in strings.
* we can use it to check if your String valid or not (string ,  email , url , ip , ...).
% let regex =  /pattern/modifier(s);
% let regex = new RegExp("pattern", "modifier(s)");
* Modifiers => Flags
~ i => not case-sensitive
* With this flag the search is case-insensitive (no difference between A and a).
~ g => global
* With this flag the search looks for all matches, without it only the first match is returned.
~ m => MultiLines
* means that the pattern we are matching can exists at multiple line in the String.
# ...............................................................................................
// method to check the pattern
% let result =  StringName.match(Pattern);
* it Matches A String Against a Regular Expression Pattern.
! it Returns An Array With The Matches founded in the string.
! Returns null If No Match Is found in the string.
# ...............................................................................................
// regular expression patterns of ranges:
~ (...|X|Y|...):
% let regex = /name1|name2|name3|.../;
* this is a range that searches for (...) or (x) or (y) or (...) irrespectively to order.
~ [0-9]:
% let regex = /[num1 - num2]/;
* this is a range that searches for the numbers between (num1) and (num2) irrespectively to order.
! it includes (num1) and (num2).
~ [^0-9]:
% let regex = /[^num1 - num2]/;
* this is a range that searches for the numbers not between (num1) and (num2) irrespectively to order.
! it includes (num1) and (num2).
~ [a-z]:
% let regex = /[smallLetter1 - smallLetter2]/;
* this is a range that searches for the Letters between (SLetter1) and (SLetter2) irrespectively to order.
! it includes (smallLetter1) and (smallLetter2).
~ [^a-z]:
% let regex = /[^smallLetter1 - smallLetter2]/;
* this is a range that searches for the Letters not between (SLetter1) and (SLetter2) irrespectively to order.
! it includes (smallLetter1) and (smallLetter2).
~ [A-Z]:
% let regex = /[capitalLetter1 - capitalLetter2]/;
* this is a range that searches for the Letters between (CLetter1) and (CLetter2) irrespectively to order.
! it includes (capitalLetter1) and (capitalLetter2).
~ [^A-Z]:
% let regex = /[^capitalLetter1 - capitalLetter2]/;
* this is a range that searches for the Letters not between (SLetter1) and (SLetter2) irrespectively to order.
! it includes (capitalLetter1) and (capitalLetter2).
~ [abc]:
% let regex = /[Letter1Letter2Letter3 ...]/;
* Matches anything that is enclosed in the square brackets irrespectively to order.
! if you entered spaces they will be included
~ [^abc]:
% let regex = /[Letter1Letter2Letter3 ...]/;
* Matches anything that is not enclosed in the square brackets irrespectively to order.
! if you entered spaces they will be included
# note that you can combine ranges in one square brackets => [a-zA-z9-0].
# ...............................................................................................
// Character Classes
~ . 
% let regex = /./;
* matches any character, except newline or other line terminators.
~ \w 
% let regex = /\w/;
* matches word characters. [a-z, A-Z, 0-9 And Underscore]
~ \W 
% let regex = /\W/;
* matches Non word characters
~ \d 
% let regex = /\d/;
* matches digits from 0 to 9.
~ \D 
% let regex = /\D/;
* matches non-digit characters.
~ \s 
% let regex = /\s/;
* matches whitespace character.
~ \S 
% let regex = /\S/;
* matches non whitespace character.
~ \b 
* matches at the beginning or end of a word.
~ \B 
* matches NOT at the beginning/end of a word.
# ...............................................................................................
// methods to test the pattern on some String:
% let result =  pattern.test("input");
* it Matches A Regular Expression Pattern Against String.
! it returns true if the string dose satisfies the pattern.
! it returns false if the string doesn't satisfies the pattern.
# ...............................................................................................
? regular expression Quantifiers:
* we use Quantifiers to indicate numbers of characters or expressions to match.
~ n+    
* One Or More 
% e.g.(/\w+/) => one Number or Char or more
~ n*    
* zero or more 
% e.g.(/ \d* /) => zero Number more
~ n?    
* zero or one
% e.g.(/ letter? /) => the (r) here maybe exist one time or not.
~ n{x}   
* Number of
% e.g.(/\d{k}/) => we have digits number (k) of times.
~ n{x,y} 
* Range
% e.g.(/\d{k , l}/) => we have digits between (k) and (l) of times.
! it includes (k) and (l).
~ n{x,}  
* At Least x
% e.g.(/\d{k , }/) => we have digits at least (k) times.
~ $  
* End With Something
% e.g.(/word$/) => if your String ends with (word) .
~ ^  
* Start With Something
% e.g.(/^word/) => if your String starts with (word) .
~ ?= 
* Followed By Something
% e.g.(/\w+?=Z/) => if your String is followed by (Z).
~ ?! 
* Not Followed By Something
% e.g.(/\w+?!Z/) => if your String is not followed by (Z).
# ...............................................................................................
// we can use the regular expression patterns in the methods :
% replace(pattern , "new thing");
% replaceAll(pattern , "new thing");
*/
