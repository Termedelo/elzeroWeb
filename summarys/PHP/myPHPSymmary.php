<?php

?>
/*
? why do we need the PHP scripts : to process data collected on the web pages e.g. forms
// if the php file isn't uploaded on the server it won't work.
// the php code is executed on the (client server model).
// when requesting a web page the php code will be executed first then the page will be loaded.
// the component responsible for executing php code is (php interpreter).
// the server executes the php code.
// the browser executes the javaScript code.
*/

/*
? php basics : 
// the skeleton of the php code is <?php "script" ?>
// we need to save the file in ".php" extension even if it has (html , css , js) codes.
// the php block can be written in the body tag or in the style tag.
% Note: the best practice is to not include the endTag "?>" it may cause problems later.
% the previous note we are talking about only the PHP files.
? how to add comment is php? :
// you can use (//) or (#) for single line comments and for multi lines comments you can use (/"*"*"/).
#-------------------------------------------------------------------------------------    
? how to print any thing on the Php? : 
// you can use echo(anyThing) or you can use print.
// the echo doesn't brake a new line so keep that in mind.
// you can also use Print(anyThing) function.
// you can use print_r(anyThing) to print human readable codes.
#-------------------------------------------------------------------------------------
? all about data types:
% you can use a function to get the type gettype().
% keep in mind the Type Juggling And Automatic Type conversion.
% we also have a casting in the from any data type to any data type : (dataType) Value.
// to convert any data type to Boolean we use var_dump():
// - this function prints its output without the need to use (echo,print,...).
// - this function mainly Dumps information about a variable dataType.
// Boolean False,Integer Zero,Float Zero,Empty String,String "0",NULL,Empty Array.
#-------------------------------------------------------------------------------------
? Escaping characters: (\', \" , \\, \$, \n, \r, \t, \f, \ooo, \xhh, \u{xxxx}).
? nl2br("Text") : it inserts html <br> tag before each new line in the string.
? the heredoc and nowdoc:
~ Heredoc: syntax allows you to define a string that behaves like a double-quoted string. 
// This means it supports variable interpolation and escape sequences.
// - Variables within the heredoc are expanded.
// - Escape sequences (like \n, \t) are interpreted.
// - Strings can span multiple lines without needing concatenation or escaping quotes.
  $var1 = <<<Heredoc 
  this is the heredoc <br>
  im not happy with my self.
  Heredoc;
~ Nowdoc syntax is similar to heredoc but behaves like a single-quoted string. 
// It does not support variable interpolation or escape sequences.
// - No variable expansion, everything is treated as plain text.
// - Escape sequences are not interpreted.
   $var2 = <<<'Nowdoc' 
   this is the Nowdoc <br>
   im not happy with my self.
   Nowdoc;
#-------------------------------------------------------------------------------------
? the Php language is not case sensitive language except for the Variables names.
? how to create a variable in php? : $x = 10;
// fun fact : variables in php doesn't has a dataType.
// the value of the variable specifics the var dataType.
// the variable can be (String , Integer , Float (also called double) , Boolean , Array , Object , NULL).
// when invoking the variable in any place you need to use $ and its caseSensitive.
// $VariableName = ...
! you can call your variable within a double quotes but not in a single quotes.
// a variable of variable : $...$VarName "this is ridiculous".
~ e.g. :
~ $var1 = "String1";
~ $$var1 = "String2";
~ $$$var1 = "String3";
~ now to print it you need to use a special things:
~ echo "$var1";
~ echo "${$var1}"; //$$var1
~ echo "${$$var1}"; //$$$var1
// Assign Variable By Value and Reference:
// By Default, Variables Are Always Assigned By Value.
~ e.g. :
~ $var1 = "String1"; 
~ $var2 = "String2";
~ $var2 = $var1;
% any change to var2 won't affect var1 at all. 
// Assigned By Reference Make Variable Alias Or Point To Another.
~ e.g. :
~ $var1 = "String1"; 
~ $var2 = "String2";
~ $var2 = &$var1;
% any change to var2 will affect var1 always and visa versa.
#-------------------------------------------------------------------------------------
? how to create a constant in php? : define("a" ,1 ,false);
// the constant value can't be changed during the code.
// you don't need to use ($) when invoking a constant var.
// the constant scope is always Global.
// define("ConstantName" , constantValue , false/true);
// the last parameter stands for the caseSensitivity:
// if it was false (the default) the name is caseSensitive.
// if it was true the name is non-caseSensitive (they delete it).
% the best practice is to name it all in upperCase.
// we have a large set of pre defined constants in php follow the link: --> caseSensitive
~ https://www.php.net/manual/en/reserved.constants.php.
// we have also what is called as magic constants in php follow the link: --> not caseSensitive
~ https://www.php.net/manual/en/language.constants.magic.php.
## don't forget about Reserved Keywords. 
#-------------------------------------------------------------------------------------
? the arithmetic operates in php:
~ $a + $b => Addition
~ $a - $b => Subtraction
~ $a * $b => Multiplication
~ $a / $b => Division
~ $a % $b => Modulus
~ $a ** $b => Exponentiation
~ +$a => Identity : it converts the Numeric string to a positive integer.
~ -$a => Negation : it converts the Numeric string to a negative integer.
~  $a++ => post increment
~  $a-- => post decrement
~  ++$a => pre increment
~  --$a => per decrement
#-------------------------------------------------------------------------------------
? the Assignment Operators:     
~ $a += $b => Addition
~ $a -= $b => Subtraction
~ $a *= $b => Multiplication
~ $a /= $b => Division
~ $a %= $b => Modulus
~ $a **= $b => Exponentiation
#-------------------------------------------------------------------------------------
? Logical Comparison Operators:
~ $a ==  $b => Equal (the same value).
~ $a !=  $b => Not Equal (Not the same value).
~ $a <>  $b => Not Equal
~ $a === $b => Identical (the same value and type).
~ $a !== $b => Not Identical (not the same value and type).
~ $a >   $b => Larger Than
~ $a >=  $b => Larger Than Or Equal
~ $a <   $b => Smaller Than
~ $a <=  $b => Smaller Than Or Equal
~ $a <=> $b => Spaceship : 
% the Spaceship returns (-1) if $a is less than $b
% the Spaceship returns (0) if $a is equal than $b
% the Spaceship returns (1) if $a is grater than $b
~ and => And => Two Are True
~ &&  => And => Two Are True ["&&" Has A Greater Precedence Than "and"]
~ or  => Or  => One Or Both Is True
~ ||  => Or  => One Or Both Is True ["||" Has A Greater Precedence Than "or"]
~ xor => Xor => One Is True But Not Both
~ !   => Not => Not True
! Logical Operator Precedence: (search for it)   
~ "||" Has A Greater Precedence Than "or"
~ "&&" Has A Greater Precedence Than "and"
#-------------------------------------------------------------------------------------
? conditional statements in Php:
! we have the same types of conditional statements as other languages.
~ if(condition){BlockOfCode}
~ if(condition){BlockOfCode} else{BlockOfCode}
~ if(condition){BlockOfCode} elseif(condition){BlockOfCode} ... else{BlockOfCode}
? alternative syntax of the conditional statements:
~ <?php if(10 > 10): ?> ....any code..... <?php endif; ?> -> you can use elseif and else.
? ternary syntax of conditional statements:
~ if condition ? true : false;
? switch statement:
~ switch(expression){ 
~   Case 1: BlockOfCode1; break;
~   Case 2: BlockOfCode2; break;
~   Case 3: BlockOfCode3; break;
~   default:BlockOfCode;
~  }
#-------------------------------------------------------------------------------------
? iterative statements in Php:
! its a normal looping language who we have (for , while , do while , foreach).
~ for(declarations; condition; increment/decrement){BlockOfCode;}
~ while(condition){BlockOfCode;}
~ do{BlockOfCode;}while(condition);
~ forEach($arrayName as $ValueVar){} -> you know how it works. 
* we mostly use the foreachLoop with the associative array.
* how to get the array Length ? : simply use the count($arrayName); 
? To print the items in the associative array and its keys:
// simple use the foreachLoop in the following form:
// forEach($arrayName as $KeyVar => $ValueVar){} 
% we can use the alternative syntax also in the loops (for(...): BlockOfCode; endfor;)
* you know what is the break and continue.
#-------------------------------------------------------------------------------------
? the include and require:
! mainly we use these two to have another file inside the script.
// include("file Path") , require(file Path) are the same but there are one difference:
~ when having some error in the include it will not stop the script. -> (just warnings).
~ when having some error in the require it will stop the script. -> (warnings and die).
* at the end you will notice that the include doesn't restrict like the require.
// include_once("file Path") , require_once(file Path):
* the main difference here is that it checks if you included or required the file before it will not work.
#-------------------------------------------------------------------------------------
? how to create a function in Php? : we have three ways:
~ function FunName1(){}
~ FUNCTION FunName2($var1 , $var2 , ...){}
~ FuNcTiOn FunName3($var1 , $var2 , ...){ return ...;}
! here we are working on the concept of DRY (Don't Repeat Yourself).
% the parameter is the variables in the function header and the arguments are the values when calling it.
% by default tha function returns NULL.
~ FUNCTION FunName4($var1 = defaultValue, $var2 = defaultValue, ...){}
~ FUNCTION FunName5($var1 = defaultValue, $var2 = defaultValue, ...){return ...;}
% note that if you need to add one defaultValue keep it at the end of the Parameter List.
? when having more then one default value and you need to change just one parameter:
// FUNCTION FunName6($var1 = defaultValue, $var2 = defaultValue, ...){return ...;}
// echo FunName6(var2: NewValue);
? How to deal with functions that we don't know the number of arguments added by the user:
~ we can use the function (func_num_args()) it returns the number of arguments.
~ we can use the function (func_get_args(index)) it returns the an arguments with a specific index.
~ we can use the function (func_get_args()) it returns an array of all arguments.
% you can call these functions inside your function.
? another way is to use the spread syntax (splat operator): 
~ FUNCTION FunName7(...$values){return ...;}
~ here it will get any number of arguments and form them like an array namely ($values). 
% the splat operator needs to be at the end of the parameter list.
% the splat operator is also used to unpack or spread and array in the argument list.
? we can have functions as variables:
~ FUNCTION FunName8(....){return ...;}
~ $var = "FunName8";
~ echo $var(); -> just like that. 
! to check that a function has been defined use : function_exists("functionName");
~ this function returns true if the function exists and false if its not.
### we have a function called strlen("String") that returns the number of characters in a string.
? passing arguments by Reference: 
~ by default the arguments are passed by value to the function.  
~ FUNCTION FunName9(&$var){return ...;}
~ here any change to $var in the function body will affect it outside.
? to specify the required return data type :
~ FUNCTION FunName10($var1 , $var2) : dataType {return ...;}
? Anonymous Function: 
// we use this type in creating a function that does a specific task.
~ $var = function(...){...}; 
// you can assign it to a variable or any thing.
~ Variable Inherit From Parent Scope using the (use(varName)) keyword in Inherit by Reference.
~ $var = function(...) use($var,...) {...}; 
% Anonymous Function Can Be Passed To A Function
% Anonymous Function Can Be Return From A Function
! the main use case here is to pass a function to another function (array_map(func, $arr)).
? Arrow or lambda Function:
// its an alternative syntax to the Anonymous functions.
// No Need For Curly Braces , Return Is Omitted.
~ $var = fn(....) => "..."; 
#-------------------------------------------------------------------------------------
? All about Strings build In functions: 
// you can access any letter in the string like an array using the index.
% the indexing takes negative values that starts from the end.
% if you updated an index its easy but if you updated a new index it will be added to the string. 
// to get the number of letters we can use the function (strlen($StringO)).
? Strings build in functions: 
~ lcfirst(String (Req))
// it will convert the first letter in the string to lower case. 
~ ucfirst(String (Req))
// it will convert the first letter in the string to upper case. 
~ strtolower(String (Req))
// it will convert the whole string in lower case. 
~ strtoupper(String (Req))
// it will convert the whole string in upper case. 
~ ucwords(String (Req), Delimiters (Opt))
// it will convert the first letter in each word in the string to upper case.
// you can select a Delimiter that will separate the strings into words as you like:
% e.g. echo ucwords("hi this is me | ahmad", "|"); -> Hi this is me | Ahmad 
~ str_repeat(String (Req), Count (Req))
// you can repeat a string for any number of times using count.
~ implode(Separator (Opt), Array (Req)) => join() Is Alias
// this function will concatenate all the array elements into one string.
~ explode(Separator (Req), String (Req), Limit (Opt))
// this function will convert you String to an array.
// Separator (Req) -> select a separator to have elements.
// Limit (Opt) -> you can specify the number of elements needed by you.
% the limit takes negative values that will start to exclude elements from the end of the string.
~ str_shuffle(String (Req))
// this function will randomly change the positions of you string elements.
~ strrev(String (Req))
// this function will reverse your string.
~ trim(String (Req), CharsList (Opt))
// this function will trim spaces from the right and the left of the string.
~ ltrim(String (Req), CharsList (Opt))
// this function will trim spaces from the left of the string.
~ rtrim(String (Req), CharsList (Opt))
// this function will trim spaces from the right of the string.
! you can customize trimmed characters: 
! Space "" -> default
! Tab \t
! New Line \n
! Carriage Return \r
! Vertical Tab "\x0B"
! NULL "\0"
~ chunk_split(String (Req), Length (Opt), separator (Opt))
// this function will split you string to chunks with a length and it will separate chunks by separator.
~ strlen(String (Req))
// this function will return the number of letters in your string.
~ str_split(String (Req), Length (Opt))
// this function will convert you string to an array and each element will have the specified length.
~ strip_tags(String (Req), Allowed (Opt))
// this function will remove any html tags in your string.
// you can write an allowed tag to your string it will not be removed.
~ nl2br(String (Req), XHTML (Opt))
// it will add a <br> tag in every \n in your string.
// XHTML is a boolean value that will add <br/> instead of <br> when its true.
~ strpos(String (Req), Value (Req), Start Position (Opt))
// this function will search for a substring in your string.
// if the substring is founded it will return first letter occurrence index.
// if the substring is not founded it will return false.
~ strrpos(String (Req), Value (Req), Start Position (Opt))
// this function will search for a substring in your string.
// if the substring is founded it will return last letter occurrence index.
// if the substring is not founded it will return false.
! for all of these function these are a Case-Sensitive search function.
~ stripos(String (Req), Value (Req), Start Position (Opt))
~ strripos(String (Req), Value (Req), Start Position (Opt))
! for all of these function these are a Incase-Sensitive search function.
// for all of these function if you didn't insert a start position it will start from zero.
// for all of these function it can have negative indexes you know how.
~ substr_count(String (Req), Value (Req), Start Position (Opt), Length (Opt))
// this function will count the number of times that the substring occurred in your string.
// you know what "overlap string" means.
~ parse_str(String (Req), Array (Req))
// function in PHP is used to parse a query string into variables. 
// This function is particularly useful for converting URL-encoded query strings into an associative array.
% e.g. parse_str("name=ahmad&age=21&height=169");
~ quotemeta(String (Req))
// this function escapes any character that may need escaping.
~ str_pad(String (Req), Length (Req), added (Opt), Pad Flag (Opt))
// this function is used to balance your string to a givin number of characters.
// Length : the needed string length
// added : the string that will be added
// Pad Flag : it can be (STR_PAD_BOTH , STR_PAD_LEFT , STR_PAD_RIGHT).
~ strtr(String (Req), From (Req), To (Req)) 
// we use this function to find a substring and replace it with another one.
// it will find each substring and it will change it From -> To.
~ strtr(String (Req), Array (Req))
// here we can use an associative array when we need to change more than one.
// $arr = ["From SubStr1" => "To SubStr2" , "From SubStr3" => "To SubStr4" , ...];
~ str_replace(Find (Req), Replace With (Req), Data (Req), Replace Count (Opt))
// this function will find a single or list of substrings and it will replace it with another.
// the last parameter its a counter that counts the number of replacements.
// when searching Its Case-Sensitive.
% e.g. echo str_replace("#", "A", "A#AA@A$A", $count); -> AAAA@A$A 
% e.g. echo str_replace(["#" , "@" , "$"], "A", "A#AA@A$A", $count); -> AAAAAAAA 
% e.g. echo str_replace(["#" , "@" , "$"], ["A" , "B" , "C"], "A#AA@A$A", $count); -> AAAABACA 
% e.g. echo str_replace(["#" , "@" , "$"], ["A" , "B"], "A#AA@A$A", $count); -> AAAABA A 
~ str_ireplace(Find (Req), Replace With (Req), Data (Req), Replace Count (Opt))
// its the same as the previous but when searching Its InCase-Sensitive.
~ substr_replace(String (Req), Replace With (Req), Start (Req), Length (Opt))
// these two functions will replace a substring in the string from a start point with some length.
// if the length was a Positive Number then Length Of String To Be Replaced.
% e.g. echo substr_replace("oneTwo", "A", 4, 2); -> "oneTA" 
// if the length was a Negative Number then Characters Left At The End After Replacement.
% e.g. echo substr_replace("oneTwo", "A", 2, -2); -> "onAwo" 
// if the length was a zero (0) then Insert Instead Of Replace.
% e.g. echo substr_replace("oneTwo", "A", 2, 0); -> "onAeTwo" 
! note that it will work on the arrays in the same way as the string.
~ wordwrap(String (Req), Width = 75  (Opt), Break_Char = "\n" (Opt), Cut_Long = False (Opt))
// this function will wrap your string in a given number of characters.
// it has default values it will wrap words by the givin width in a new line by default.
// if the word was equal to the width it will directly wrap it.
// if the word was less than the width it will add more letters to match the width.
// if the word was grater than the width it will not wrap it unless you make the cut_long = true.
~ ord(String (Req))
// this function takes a character and it returns the ASCII code.
~ chr(Int (Req))
// this function takes an ASCII code and it returns the character.
~ similar_text(String_One (Req), String_Two (Req), Percent(Opt))
// this function Returns The Number Of Matching Character in two strings.
// it can return the percent of matching between these two strings.
% e.g. echo similar_text("ahmad", "ahmad", $percent); -> 5
% -> echo $percent; -> 100
~ strstr(String (Req), Search (Req), Before_Search (Opt) = False)
~ strchr(String (Req), Search (Req), Before_Search (Opt) = False)
// this function searches in a string for a given string and returns whatever comes after it.
// this is a Case-Sensitive search function.
% e.g. echo strstr("hello world", "e"); -> ello world
% e.g. echo strstr("hello world", "e", true); -> h
~ stristr(String (Req), Search (Req), Before_Search (Opt) = False)
// this is the same as the one above but its Case-Insensitive.
~ number_format(Number (Req), Decimals (Opt), Decimal_String (Opt), Separator (Opt))
// this function makes a good formatting for your number to increase readability.
% e.g. echo number_format(10000000.19999); -> 10,000,000
% e.g. echo number_format(10000000.19999, 3); -> 10,000,000.200 
% e.g. echo number_format(10000000.19999, 3, "@"); -> 10,000,000@200 
% e.g. echo number_format(10000000.19999, 3, "@","~"); -> 10~000~000@200 
#-------------------------------------------------------------------------------------
? All about Arrays build In functions: 
~ array_chunk(Array (Req), Length (Req), Preserve_Key (Opt))
// this function Splits An Array Into Chunks and Returns A Multidimensional Indexed Array.
// if it was an associative array the boolean value Preserve_Key:
// if the Preserve_Key was False its the Default it Reindexes The Keys.
// if the Preserve_Key was True Preserves The Keys of the elements.
~ array_change_key_case(Array (Req), Case (Opt))
// this function Changes The Case Of All Keys In An Array.
// if the case was (CASE_LOWER) its the Default it Changes The Keys To Lowercase.
// if the case was (CASE_UPPER) its the Default it Changes The Keys To Uppercase.
~ array_combine(Array_Of_Keys (Req), Array_Of_Values (Req))
// this function combines two arrays to make them as one associative array.
~ array_count_values(Array (Req))
// this function returns an associative array that counts each element occurrences.
~ array_reverse(Array (Req), Preserve (Opt))
// this function Reverses Array Elements.
// the Preserve default value is false that means that the indexes is preserved.
// if the Preserve value was true it will reverse the elements and there indexes.
~ array_flip(Array (Req))
// this function Exchange Keys With Its Values in an array.
~ count(Array (Req), Mode (Opt))
// this function Counts the Array Elements.
// if the mode value is 0 its the Default it Does Not Count the Elements Of Multidimensional Arrays.
// if the mode value is 1 it will Count the Elements Of Multidimensional Arrays including the arrays.
~ in_array(Search (Req), Array (Req), Type (Opt))
// this function Checks If A Value Exists In An Array.
// the type has a value of true and false.
// if it was true it will search according to the values and the types.
~ array_key_exists(Key (Req), Array (Req))
// this function Checks If a Key Is Exists in the array.
~ array_keys(Array (Req), Value (Opt), Type (Opt))
// this function Returns an array that contains all the keys of the Array.
// if you specified a value it returns the keys of all the occurrences of this value.
// if the Type was False its the Default value it will not Check For Type.
// if the Type was True it will Check For Type.
~ array_values(Array (Req))
// this function Returns All The Values Of An Array in an array.
~ array_pad(Array (Req), Size (Req), Value (Req))
// this function Pads Array To The Specified Length With A Value.
// if the size is a Negative Value Add Elements Before Original Items.
// If Size is less Array Length Nothing Will Be Deleted.
~ array_product(Array (Req))
// this function returns the Product Of Values In An Array it Returns Integer or Float.
~ array_sum(Array (Req))
// this function returns the summation Of Values In An Array it Returns Integer or Float.
! Every Array Has An Internal Pointer To Its "Current" Element
! Which Is Initialized To The First Element.
! Functions Returns Value Of Array Element That's Currently Pointed By The Internal Pointer
~ current(Array (Req)) 
// this function Returns The Current Element In An Array.
~ next(Array (Req)) 
// this function Advances The Internal Pointer.
~ prev(Array (Req)) 
// this function Rewinds The Internal Pointer.
~ reset(Array (Req)) 
// this function Puts The Internal Pointer On First Element.
~ end(Array (Req)) 
// this function Puts The Internal Pointer On Last Element.
~ array_merge(Array (Req), Other_Array/s (Opt))
// this function Merges One Or More Arrays.
// associative Array Key With The Same Name Override The Value Of The Previous One.
// Numeric Key array Will Be Renumbered.
~ array_replace(Array (Req), Replacement/s (Opt))
// this function Replaces Elements From Passed Arrays Into The First Array.
// if it finds a duplicated key it will Override its value in the first array.
// if it finds a new key it will add it to the first array. 
~ array_rand(Array (Req), Num (Opt))
// this function picks a random index of your array.
// it can pick more than one and it returns them as an array of indexes.
~ shuffle(Array (Req))
// this function renumbers the indexes of the array.
// it changes the array by reference.
// it shuffles the values of the array each time we call it.
~ array_shift(Array (Req))
// this function Shifts An Element Off The Beginning Of Array.
// this Function Will Reset "reset()" The Input Array Pointer.
~ array_pop(Array (Req))
// this Function Pops The Element Off Ehe End Of Array.
// this Function Will Reset "reset()" The Input Array Pointer.
~ array_push(Array (Req), Values (Opt))
// this Function Pushes One Or More Elements at The End Of the Array.
// an alternative way to add one element is to Use ($arr[] = "element";).
~ array_unshift(Array (Req), Values (Opt))
// this Function Adds One or more Elements at The Beginning Of the An Array.
// this Function Will Reset "reset()" The Input Array Pointer.
~ array_slice(Array (Req), Start (Req), Length (Opt), Preserve_Keys (Opt))
// this function Extracts A Slice Of The Array according to some values.
// the start index is included in the slicing.
// the start value can take a negative value.
// if the Length has no value it will slice All Elements From Start Position to the end.
// if the Length has a negative value it will Stop Slicing when it reaches this Index.
// if the Preserve Keys value was False its the default it will Reset Keys.
// if the Preserve Keys value was True it will Preserve Keys.
! If Array Have String Keys, It Will Always Preserve The Keys.
! this function doesn't change the reference array it returns a new slice.
~ array_splice(Array (Req), Start (Req), Length (Opt), Array (Opt))
// this function Removes A Portion Of The Array And Replace It With Something Else.
// the start index is included in the splicing.
// the start value can take a negative value.
// if the Length has no value it will Remove All Elements From Start Position to the end.
// if the Length has a negative value it will Stop Removing when it reaches this Index.
~ sort(Array (Req), Flag (Opt))
// this function Sorts An Indexed Array In Ascending Order.
~ rsort(Array (Req), Flag (Opt))
// this function Sorts An Indexing Array In Descending Order
~ asort(Array (Req), Flag (Opt))
// this function Sorts An Associative Array In Ascending Order According To The Values.
~ arsort(Array (Req), Flag (Opt))
// this function Sorts An Associative Array In Descending Order According To The Values.
~ ksort(Array (Req), Flag (Opt))
// this function Sorts An Associative Array In Ascending Order According To The Keys.
~ krsort(Array (Req), Flag (Opt))
// this function Sorts An Associative Array In Descending Order According To The Keys.
~ natsort(Array (Req), Flag (Opt))
// this function Sorts An Array By Using A "Natural Order" Algorithm.
! flag parameter:
// The $flags parameter allows developers to specify how the sorting should be performed. 
// By default, this parameter is set to "SORT_REGULAR". 
// the flag parameter has different values :
% SORT_NUMERIC: 
// Treats elements as numbers during comparison. 
// For example, it would correctly order 30 and 3 numerically.
% SORT_STRING: 
// Treats elements as strings, which affects how they are compared lexicographically. 
// For instance, it would sort '100' before '20' because it compares them as strings.
% SORT_LOCALE_STRING: 
// Similar to SORT_STRING, but uses the current locale settings for string comparison.
% SORT_NATURAL: 
// Sorts strings in a way that is more intuitive for humans (natural ordering)
// treating numeric substrings in a way that reflects their numerical values.
% SORT_FLAG_CASE: 
// When combined with SORT_STRING, this flag allows for case-insensitive sorting. 
// (e.g., treating 'a' and 'A' as equal).
! note that flags can be combined like so sort($arr, flag1 | flag2 | ....);
? higher order functions : its a function that takes another function as a parameter.
~ array_map(Callback Function (Req), Array (Req), Other Arrays (Opt))
// this is a function that applies another function on all the elements of the array.
% e.g. function fun1(param1){.....}
% -> $arr = ["element1","element2","element3","element4","element5"];
% -> array_map("fun1",$arr1);
% e.g. function fun2(param1,param2){.....}
% -> $arr1 = ["element1","element2","element3","element4","element5"];
% -> $arr2 = ["element1","element2","element3","element4","element5"];
% -> array_map("fun1",$arr1,$arr2);
! -> e.g. lambda Function: array_map(fu(param1,param2) => {....} ,$arr1,$arr2);
~ array_filter(Array (Req), Callback Function (Req), Flag (Opt))
// this function filters the elements of the array according to some function.
// the flag parameter takes three values:
! 0 is the default value it Sends the Values of the elements As an Arguments to the function.
! ARRAY_FILTER_USE_KEY it Sends the Keys of the elements As an Arguments to the function.
! ARRAY_FILTER_USE_BOTH it Sends both the Keys and values of the elements As an Arguments to the function.
~ array_reduce(Array (Req), Callback Function (Req), Initial_Value (Opt))
// this function iterates through an array and reduces it to a single value.
// the callback function takes two parameters: 
// 1- the Carry value its the The return value of the previous iteration.
// In the first iteration, the carry holds the value of Initial_Value if provided.
// the Initial_Value default value is NULL.
// 2- the item value its The value of the current element in the array.
% e.g. 
% function n($carry,$item){
%     if ($carry > $item) {
%         return $carry;
%     } return $item;
% }
% $arr1 = [1,2,3,4,5,6,7,8,9,10,100];
% echo array_reduce($arr1,"n");
% iteration1: carry = NULL and item = 1 -> returns 1 
% iteration1: carry = 1 and item = 2 -> returns 2
% iteration1: carry = 2 and item = 3 -> returns 3
% iteration1: carry = 3 and item = 4 -> returns 4
% iteration1: carry = 4 and item = 5 -> returns 5
% iteration1: carry = 5 and item = 6 -> returns 6
% iteration1: carry = 6 and item = 7 -> returns 7
% iteration1: carry = 7 and item = 8 -> returns 8
% iteration1: carry = 8 and item = 9 -> returns 9
% iteration1: carry = 9 and item = 10 -> returns 10
% iteration1: carry = 10 and item = 100 -> returns 100
#-------------------------------------------------------------------------------------
? All about Math build In functions:
~ abs(Number (Req))
// this function returns the absolute value of a number.
~ mt_rand(min (Opt), max (Opt) 
~ rand(min (Opt), max (Opt)
// these two functions are the same returns a random number within a specific range.
// we use "mt_getrandmax()" function to Show Largest Possible Random Value.
// mt_rand : Generates Random Value Via The Mersenne Twister Random Number Generator Algorithm.
~ intdiv(dividend (Req), divisor (Req))
// this function applies an integer division to two values.
// its not the same as the division operator (/). 
~ fmod(dividend (Req), divisor (Req))
// this function applies a float modules on two values.
// its not the same as the modules operator (%). 
~ ceil(Number (Req))
// Round Up To Integer
~ floor(Number (Req))
// Round Down To Integer
~ round(Number (Req), Precision (Opt), Mode (Opt))
// this function Rounds Up To Integer value according to some rules.
// the optional Mode value takes four different values.
// 1) PHP_ROUND_HALF_UP : the default value.
// 2) PHP_ROUND_HALF_DOWN
// 3) PHP_ROUND_HALF_EVEN
// 4) PHP_ROUND_HALF_ODD
! note: ceil, floor, round Return Double values.
! keep the note of negative numbers in the ceil, floor, round functions.
~ sqrt(Number (Req))
// this function returns the Square Root of a given number.
~ min(array (Req)) 
~ min(Values (Req)
// this function Finds Lowest Value in an array.
~ max(array (Req)) 
~ min(Values (Req))
// this function Finds Highest Value in an array.
! the min and max can compare two arrays as a whole.
#-------------------------------------------------------------------------------------
? All about filter build In functions:
// we use filter functions to validate and sanitize external data gained from user.
// we have a large number of filters you need to see it through documentations. 
~ filter_list()
// this function returns an array that contains All Supported Filters.
~ filter_id(Filter_Name (Req))
// this function takes a filter and it returns the ID of that filter.
~ filter_var(Value (Req), Filter (Opt), Flags and options (Opt))
~ filter_var(Value (Req), FilterID (Opt), Flags and options (Opt))
// this function Filters A Variable With A Specified Filter.
? different type of filters:
// 1) Validate Filters : here we are just validation the given data.
~ FILTER_VALIDATE_BOOL
* this filter validates a boolean value according to four values [True, 1, Yes, On].
* any thing other than these four values returns false.
* to improve it we use a flag in the flag parameters:
! Flag1: FILTER_NULL_ON_FAILURE it returns False For [False, 0, No, Off, ""] Only otherwise it returns NULL. 
~ FILTER_VALIDATE_URL
* this filter validates the URL and returns a string and the count of characters on the URL.
* anything other than a correct URL it returns False.
! Flag1: FILTER_NULL_ON_FAILURE
* this flag makes it return NUll in the case if failure.
! Flag2: FILTER_FLAG_PATH_REQUIRED
* this flag validate that the URL contains a Path if it does not it returns false.
! Flag3: FILTER_FLAG_QUERY_REQUIRED
* this flag validates that the URL contains a query if it does not it returns false.
~ FILTER_VALIDATE_IP
* this filter validates the Ip and returns a string and the count of characters on the Ip.
* anything other than a correct Ip it returns False.
! Flag1: FILTER_NULL_ON_FAILURE
* this flag makes it return NUll in the case if failure.
! Flag2: FILTER_FLAG_IPV4
* this flag customize the filter IPV4 only.
! Flag3: FILTER_FLAG_IPV6
* this flag customize the filter IPV6 only.
~ FILTER_VALIDATE_MAC
* this filter validates the MAC address and returns a string and the count of characters on the Mac.
* anything other than a correct MAC address it returns False.
! Flag1: FILTER_NULL_ON_FAILURE
* this flag makes it return NUll in the case if failure.
% to combine more than one flag: filter_var(var, filter, ["flags" => flag1 | flag2 | ....])
~ FILTER_VALIDATE_EMAIL
* this filter validates the Email and returns a string and the count of characters on the Email.
* anything other than a correct Email it returns False.
! Flag1: FILTER_NULL_ON_FAILURE
* this flag makes it return NUll in the case if failure.
~ FILTER_VALIDATE_INT
* this filter validates the integer and returns an integer.
* if the givin number was not an integer it convert it to integer.
! Flag1: FILTER_NULL_ON_FAILURE
* this flag makes it return NUll in the case if failure.
! Options1: min_range
! Options2: max_range
* i will give an example to how you can use these below:
% filter_var(var, filter, ["flags" => ..., "options" => [min_range => value, max_range => value]]);
~ FILTER_VALIDATE_FLOAT
* this filter validates the float and returns a float.
* if the givin number was not a float it convert it to float.
! Flag1: FILTER_NULL_ON_FAILURE
* this flag makes it return NUll in the case if failure.
! Options1: min_range
! Options2: max_range
* i will give an example to how you can use these below:
% filter_var(var, filter, ["flags" => ..., "options" => [min_range => value, max_range => value]]);
// 2) Sanitize Filters : here we validate and sanitize the data by changing the errors.
~ FILTER_SANITIZE_EMAIL
* this filter sanitizes the Email and returns a string and the count of characters on the Email.
* it sanitizes by removing all characters except: 
* Letters, Digits, and symbols (!,#, $, %, &, ', *, +, -, =, ?, ^, _, `, {, |, }, ~, @, ., [, ]).
~ FILTER_SANITIZE_NUMBER_INT
* this filter sanitizes the Integer and returns a string and the count of characters on the Integer.
* it sanitizes by removing all characters except: 
* Digits and symbols (+ , -).
~ FILTER_SANITIZE_NUMBER_FLOAT
* this filter sanitizes the float and returns a string and the count of characters on the float.
And Optionally [.,eE]
* it sanitizes by removing all characters except: 
* Digits, symbols (+ , -) and Optionally ([, ., ,, e, E, ]).
! Flags1: FILTER_FLAG_ALLOW_THOUSAND
* this flag allows to keep the "," e.g. 10,000,008123091
! Flags2: FILTER_FLAG_ALLOW_FRACTION
* this flag allows to keep the "." e.g. 1000000.8123091
~ FILTER_SANITIZE_URL
* this filter sanitizes the URL and returns a string and the count of characters on the URL.
* it sanitizes by removing all characters except: 
* Letters, Digits, and symbols:
* ($, -, _, ., +, !, *, ', (, ), ,, {, }, |, \, \, ^, ~, [, ], `, <, >, #, %, ", ;, /, ?, :, @, &, =, .)
~ filter_input(Value (Req), FilterID (Opt), Flags and options (Opt))
#-------------------------------------------------------------------------------------
?, the variables Scope : its the place that you can use the variable in without any error.
// there are three scopes:
~ local scope: the variable here is initialized inside (function , if statement , for loop).
~ Global scope: any variable outside the (function , if statement , for loop)
// we have two ways to call the global variables inside the local block:
~ use the key word global : Global $var1 , $var2 , ... .
~ use the GLOBALS array : 
// when defining variables at the first of the php body you can do the following:
// $GLOBALS['VARNAME']
~ static scope : its like the global variables in keeping the last value
// but here we use it inside any local block (function , if  , loops).
#------------------------------------------------------------------------------------- 
? how to concatenate things in php?:
// we concat using the dot (.)
// e.g. (echo 10 . "ahmad";)
// one of the concatenation sides must be a String Value.
// we can use an echo to just concatenate strings but some times its not possible.
// we can incrementally concatenate strings using (.=) e.g. : 
% $var1 = "String1";
% $var2 = "String2";
% $var3 = "String3";
% $var1 .= $var2; => $var1 = $var1 . $var2; -> "String1String2"
% $var1 .= $var3; => $var1 = $var1 . $var3; "String1String2String3"
#-------------------------------------------------------------------------------------
? how to create an array in PHP? : we have two types of arrays
! the array in php is a dynamic generic (it accepts any dataType in the array) array.
// 1) indexed array: its a zero based array
// $var = array('' , '' , '' , ....);
// $x = array(1 , 2 , 3 , "ahmad" , true , 3.6 ,...);
// we have two ways to fill in the array elements:
// A) $x = array(... , ... , ....);
// B) $x;
//    $x[0] = 2;
//    $x[1] = "ahmad";
//    $x[2] = true;
//    $x[...] = ...;
// 2) associative array : its a key based array (like a hash map).
//    the key here can be a number or a string.
// $var = array(key => value , key => value , key => value , ...); 
// we have two ways to fill in the array elements:
// A) $y = array("name" => "ahmad" , 1 => 300 , "age" => 21);
// B) $y;
//    $y['name'] = "ahmad";
//    $y[1] = 300;
//    $y['age'] = 21; 
// if your one element in th associative array doesn't have a key it will follow the indexing rules.
? Array Operators:
~ $a +   $b => Union
~ $a ==  $b => Equal => Same Key And Value
~ $a !=  $b => Not Equal
~ $a <>  $b => Not Equal
~ $a === $b => Identical => Same Key And Value, Same Order, Same Type
~ $a !== $b => Not Identical
#-------------------------------------------------------------------------------------
? Error Control Operator: 
// some times we need to hide error or warning massages.  
// so any thing that may print a massage like this but before it this symbol (@).
! Variable: some times we have an undeclared variable or with no value e.g. :
~ $a = 10; $b = 10;
~ echo $a = $b; -> no errors.
~ echo $a = $c; -> error so we can hide the massage or print a custom massage.
~ echo $a = @$c; -> this one will hide the error massage.
~ echo $a = @$c or die("massage"); 
~ -> this one will hide the error massage and the die function will stop the script with a massage.
! File: some time a file does'nt exists so you can use this to hide the error
~ $file = file("somePath");
~ $file = @file("somePath") or die("Massage");
! Include: when including another Php script and it does'nt found
~ include("somePath");  
~ @include("somePath") or die("Massage");  
#-------------------------------------------------------------------------------------
? form handling : 
// we handel using a PHP Global Variables that take the inputted values from the form to the php script.
// we have five PHP Global Variables that is :
// 1) $_SERVER['PHP_SELF'] : it Returns the filename of the currently executing Php script.
// 2) $_SERVER['REQUEST_METHOD'] : Returns the request method used to access the page (POST or GET).
// 3) $_POST['formElementName'] : 
//    is widely used to collect values from a form after submitting an HTML form with method="post". 
//    (The names of the form fields will automatically be the keys in the $_POST array).
// 4) $_GET['formElementName'] :
//    can also be used to collect form data after submitting an HTML form with method="get".
//    (The names of the form fields will automatically be the keys in the $_GET array).
// 5) $_REQUEST['formElementName'] : 
// is used to collect data after submitting an HTML form, It contains the contents of both ($_GET, $_POST).
// The $_REQUEST variable can be used to collect form data sent with both the GET and POST methods.
#-------------------------------------------------------------------------------------
? form Validation functions: 
! we have two functions to validate data inputted by a form in the php script
// 1) empty($var) : this function checks if the variable is empty like so:
// it returns TRUE if any case of the following cases occurred :
// 1.1) "" (an empty string)
// 1.2) 0 (integer)
// 1.3) 0.0 (float) 
// 1.4) "0" (string) 
// 1.5) NULL 
// 1.6) FALSE 
// 1.7) array () (an empty array)
// 1.8) "$var;" (a variable declared but without a value in a class). 
// integer (0) , String ("0" , "") , float or double (0.0) , obj (NULL , array(); , $var;) , Boolean (False)  
// otherwise it will return FALSE.
// 2) isset($var) : this function checks wether the variable have a value or not like so:
// it returns FALSE if the Variable has a (NULL) value or if it has no Value at all.
// otherwise it will return TRUE.
% firstly when handling a form you must have a look on (the names of the formElement) and (the used method)
% to compare two strings just use the (==) operator.
% when the select tag send an array of elements that array will be an indexed.
#-------------------------------------------------------------------------------------
? PHP Cookies : 
! its a type of variables that the server creates to collect the browsing information on the webpage.
// its created at the server side (webpage) and stored at the client browser (client side).
// the sequence of the cookies goes like so:
// 1) at the first time the user requests the page the cookies will not be set yet.
// 2) the server will response to the request with the cookies to be set.
// 3) after that every time the user requests the webpage he will send the cookies with the request.
~ what do we need cookies for : 
~  1) It is used to recognize the user. 
~  2) Tacking user activities and collect information.
% cookies requires the user acceptance to be saved on his side.
// how to create a cookie variable:
// setCookie("name"  , "value" , expireDate);
// setCookie("age" , 21 , time() + 60*60);
% we use the name attribute to invoke the cookie later on.
% the value attribute left mostly empty so that the user can fill it.
% after the expireDate passes the browser will forget the cookie.
% the expireDate is counted by seconds so you need to be aware.
% the time() function returns the time from the system.
// how to get a cookie value : by using the global COOKIE array
// $_COOKIE['cookieName'];
// how to delete a cookie : you simple can by just changing the expireDate to any time in the past.
// setCookie("age" , 21 , time() - 1);
#-------------------------------------------------------------------------------------
? PHP Sessions : its a php place that stores a set of variables which can be accessed by many pages.
// sessions are not stored on the client side unlike cookies it is stored on the server.
// how to create a session:
// we use the function session_start();
// this function must be used to get an access to the session variables (get , modify , delete , ...).
// any page that needs to access the session it must use the session_start function.
// how to create a session variable and give it a value:
// $_SESSION['VarName'] = VarValue; 
% the SESSION array is an associative array.
// how to get a Session variable:
// $_SESSION['VarName'];
// how to delete one session variable:
// unset($_SESSION['VarName']);
// how to delete all session Variables but not the session itself:
// session_unset();
// how to delete the whole session :
// destroy_session();
% By default, a session lasts until the user closes the browser (Cookies). 
~ how to store an array in a session and how to get it and how to ger its elements:
// 1) create an array of any type (indexed or associative).
// 2) use the function session_start().
// 3) store the array in the SESSION global array.
// 4) get the array elements like so:
// $_SESSION['varName']['elementName' or index];
#-------------------------------------------------------------------------------------
? to creating a dataBase and manipulate data within it:
! we use phpMyAdmin webpage to do so with mySQL language.
! you know how to create a DB and how to do all the operations by the phpMyAdmin wizard GUI.
! now lets do a revision to some of the basic mySql Queries:
// 1) creating a dataBase : 
~     create database DataBaseName;
// 2) creating a table into the dataBase:
~     create table table name (columnName dataType constant , ....);  
~     data types that we need is : VARCHAR(Length) , INT(Length) , CHAR(1).
~     constants that we need is : NOT NULL , UNIQUE , PRIMARY KEY , AUTO_INCREMENT.
// 3) how to insert data into the table : we have two ways
~     insert into TableName (column1 , column2 , ...) values (column1Value , column2Value , ....);
~     insert into TableName values (column1Value , column2Value , ...);
% you need to be aware that the order of the columns is required in these two ways 
// if you need to change the columns order just do the following:
~     insert into TableName (column2 , column1 , ...) values (column2Value , column1Value , ....);
// 4) how to update a record in the table: 
~ update TableName set columnName = newValue , columnName = newValue , ... Where (.....);
% if there is no where clause all the records in the table will be updated.
// how to select a record of a set of records from a table:
~ select * from TableName;
~ select columnName , columnName , ... from TableName;
~ select DISTINCT columnName , columnName , ... from TableName;
// the select statement will return exactly like the columns order that you write. 
// the where clause conditions is an important thing:
// 1) between .... and ...
// 2) < , > , <= , >= , <>
// 3) and , or
// 4) like "%A" , like "A%", like "%A%" , like "%A__"
// 5) how to delete all records or a set of records or a specific record:
~ delete * from TableName; 
~ delete from TableName;
~ truncate table TableName;
// these three lines are equivalent all of them will delete all the records in the table.
~ delete from TableName Where (...);
? Linking webPages with a DataBase : its a four steps process using PHP functions.
// 1) we need to connect to the dataBase by the following method:
~ mysqli_connect("ServerName" , "UserName" , "password" , "DataBaseNAme");
~ mysqli_connect("localhost" , "root" , "" , "DBName");
// the first three parameters is solid according to our course.
// if the dataBase is not created yet we can just settle for the first three parameters.
// if the connection is done with no errors it will return an SqlConnectionObj.
// if the connection faced any errors it will return FALSE.
// you need to store the result of this function in a regular variable.
// 2) to execute any query we will use the following method:
~ mysqli_query($mysqli_connectVar , "mySqlQuery");
// if we execute any query with no errors like (insert,delete,update,create,...) it will return true.
// if an error occurred it will return false.
// if we execute a (select query) it will return a table.
// you also need to store its result in a variable.
// 3) to get the retrieved rows from the table we use :
~ mysqli_fetch_array($mysqli_queryVar);
// we use this function in case we executed a select statement.
// each time we invoke this function it will return a row of the retrieved table in the from of an array.
// the array can be an indexedArray or it can be an associativeArray (the key here is the column name).
// in case we used the associativeArray the column names is caseSensitive.
// if we finished the retrieved table it will return false.
// 4) we need to close the connection to the dataBase at the end of the script so we use:
~ mysqli_close($mysqli_connectVar);
! mysqli_num_rows($mysqli_queryVar); this function returns the retrieved number of rows.
! die("errorMassage"); this function will get out the whole php script.
% some practical notes :
% when you creating a dataBase make sure that its a completely new one.
% when you inserting,... into a table make sure to use single quotations over the values.
% after you are done with your code make sure to close your connection. 
*/