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
*/
