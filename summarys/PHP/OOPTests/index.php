<?php
require_once "A.php";
require_once "B.php";
require_once "C.php";
class Index extends C{
    Use A, B{
        A::Name insteadof B;
        B::Name as BName;
    }
}
$obj = new Index;
$objC = new C;
echo $obj ->AFun() . "<br>";
echo $obj ->BFun() . "<br>";
echo $obj ->Name() . "<br>"; 
echo $obj ->BName() . "<br>"; 
echo $objC ->show(1,2,3,4,5,6,7,8,9,10) . "<br>"; 
echo C::showStatic(1,2,3,4,5,6,7,8,9,10,000,0). "<br>"; 