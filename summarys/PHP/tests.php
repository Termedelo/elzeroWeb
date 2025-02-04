<?php 
$arr1 = ["value1","value2","value3","value4","value5"];
$arr2 = ["key1" => "value*1","key2" => "value*2","key3" => "value*3","key4" => "value*4","key5" => "value*5"];
shuffle($arr2);
echo "<pre><h1>";
print_r($arr2); 
echo "</pre></h1>";
echo "<br>";
?>