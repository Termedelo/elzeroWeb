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
! 1) how to add comment is php? :
  // you can use (//) or (#) for single line comments and for multi lines comments you can use (/"*"*"/).
#-------------------------------------------------------------------------------------    
! 2) how to print any thing on the Php? : 
  // you can use echo(anyThing) or you can use print.
  // the echo doesn't brake a new line so keep that in mind.
  // you can also use Print(anyThing) function.
  // you can use print_r(anyThing) to print human readable codes.
#-------------------------------------------------------------------------------------
! zero) all about data types:
  % you can use a function to get the type gettype().
  % keep in mind the Type Juggling And Automatic Type conversion.
  % we also have a casting in the from any data type to any data type : (dataType) Value.
  // to convert any data type to Boolean we use var_dump():
  // - this function prints its output without the need to use (echo,print,...).
  // - this function mainly Dumps information about a variable dataType.
  // Boolean False,Integer Zero,Float Zero,Empty String,String "0",NULL,Empty Array.
#-------------------------------------------------------------------------------------
! zero) Escaping characters: (\', \" , \\, \$, \n, \r, \t, \f, \ooo, \xhh, \u{xxxx}).
! zero) nl2br("Text") : it inserts html <br> tag before each new line in the string.
! zero) the heredoc and nowdoc:
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
! 3) the Php language is not case sensitive language except for the Variables names.
! 4) how to create a variable in php? : $x = 10;
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
! 5) how to create a constant in php? : define("a" ,1 ,false);
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
! 6) the arithmetic operates in php:
~ $a + $b => Addition
~ $a - $b => Subtraction
~ $a * $b => Multiplication
~ $a / $b => Division
~ $a % $b => Modulus
~ $a ** $b => Exponentiation
~ +$a => Identity : it converts the Numeric string to a positive integer.
~ -$a => Negation : it converts the Numeric string to a negative integer.
#-------------------------------------------------------------------------------------
! 7) how to create a function in Php? : we have three ways
  // 6.1) function FunName1(){}
  // 6.2) FUNCTION FunName2($var1 , $var2 , ...){}
  // 6.3) FuNcTiOn FunName3($var1 , $var2 , ...){ return ...;}
#-------------------------------------------------------------------------------------
! 8) the variables Scope : its the place that you can use the variable in without any error.
  // there are three scopes:
  // 7.1) local scope: the variable here is initialized inside (function , if statement , for loop).
  // 7.2) Global scope: any variable outside the (function , if statement , for loop)
  // we have two ways to call the global variables inside the local block:
  // 7.2.1) use the key word global : Global $var1 , $var2 , ... .
  // 7.2.2) use the GLOBALS array : 
  // when defining variables at the first of the php body you can do the following:
  // $GLOBALS['VARNAME']
  // 7.3) static scope : its like the global variables in keeping the last value
  // but here we use it inside any local block (function , if  , loops).
#------------------------------------------------------------------------------------- 
! 9) how to concatenate things in php?:
  // we concat using the dot (.)
  // e.g. (echo 10 . "ahmad";)
  // one of the concatenation sides must be a String Value.
#-------------------------------------------------------------------------------------
! 10) how to create an array in PHP? : we have two types of arrays
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
#-------------------------------------------------------------------------------------
! how to create a loop in php : its a normal looping language who we have (for , while , do while , foreach).
! but in our course we will focus on the forLoop and the foreachLoop:
  // for ($i = 0 , $i < arrayLength , $i++){}
  // foreach($ArrayName as $var){}
  ~ we mostly use the foreachLoop with the associative array.
! how to get the array Length ? : simply use the count($arrayName); 
  // the count method returns the number of items on a one based counting.
? what if i need to print the items in the associative array and its keys?
  // simple use the foreachLoop in the following form:
  // forEach($arrayName as $KeyVar => $ValueVar){} 
#-------------------------------------------------------------------------------------
! form handling : 
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
! form Validation functions: we have two functions to validate data inputted by a form in the php script
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
! PHP Cookies : its a type of variables that the server creates to collect the browsing information on the webpage.
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
! PHP Sessions : its a php place that stores a set of variables which can be accessed by many pages.
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
! to creating a dataBase and manipulate data within it we use phpMyAdmin webpage to do so with mySQL language.
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
! Linking webPages with a DataBase : its a four steps process using PHP functions.
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