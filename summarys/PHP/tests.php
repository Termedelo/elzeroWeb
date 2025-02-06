<?php 
// echo "<pre><h1>";
// print_r(filter_list());
// echo "</pre></h1>";
// echo "<br>";
// echo "<h1>";
// echo filter_id("boolean");
// echo "</h1>";
$var = "xah ma d8 95@gma ¥ il.c om";
var_dump(filter_var($var,FILTER_SANITIZE_NUMBER_INT));
