<?php 
$arr1 = ["value1","value2","value3","value4","value5"];
$arr2 = ["key1" => "value1","key2" => "value2","key3" => "value3","key4" => "value4","key5" => "value5"];
echo "<pre>";
print_r(array_values($arr2)); 
echo "</pre>";

echo "<br>";

echo "<pre>";
print_r(array_pad($arr1,-10,10)); 
echo "</pre>";
?>