<?php 
// echo "<pre>";
// print_r(filter_list());
// echo "</pre>";
// echo "<br>";
// echo "";
// echo filter_id("boolean");
// echo "";
// $var = "xah ma d8 95@gma ¥ il.c om";
// var_dump(filter_var($var,FILTER_SANITIZE_NUMBER_INT));
// echo dirname(__FILE__,1);
// echo "<br>";
// echo dirname(__FILE__,2);
// echo "<br>";
// echo dirname(__FILE__,3);
// echo "<pre>";
// print_r(pathinfo(__FILE__));
// echo "</pre>";
// echo "<pre>";
// print_r(pathinfo(__FILE__, PATHINFO_DIRNAME));
// echo "</pre>";
// $d = date_create();
// echo date_format($d , "jS");
// echo "<br>";
// $interval = date_interval_create_from_date_string("1year");
// print_r(date_add($d , $interval));
// echo "<br>";
// print_r(date_modify($d , "-100 day"));
// echo "<br>";
// echo "Current Date and Time: " . date("Y-m-d H:i:s", time());
// echo "<br>";
// echo "<pre>";
// print_r(getdate());
// echo "</pre>";
// echo "<pre>";
// print_r(date_parse("1899/5/31 10:09:20"));
// echo "</pre>";
// $start = date_create("now");
// $end = date_create("2025-5-31 00:00:00");
// echo "<pre>";
// print_r(date_diff($start, $end));
// echo "</pre>";
// echo "<br>";
// echo strtotime("Tomorrow", strtotime("2003/5/31"))/60/60/24;
// $payload = json_encode(["userId" => 1 , "id" => 1 , "title" => "Ahmad", "completed" => true]);
// $options = [
//   "http" => [
//     "method" => "PATCH",
//     "header" => "Content-Type:application/json; charset=UTF-8",
//     "content" => $payload 
//   ]
// ];
// $context = stream_context_create($options);
// $data = file_get_contents("https://jsonplaceholder.typicode.com/todos/1",false,$context);
// echo "<pre>";
// print_r($data);
// echo "</pre>";
// echo "<br>";
// echo "<pre>";
// print_r($http_response_header);
// echo "</pre>";
// From URL to get webpage contents.
// $url = "https://jsonplaceholder.typicode.com/todos";
// // Initialize a CURL session.
// $ch = curl_init(); 
// //grab URL and pass it to the variable.
// curl_setopt($ch, CURLOPT_URL, "https://jsonplaceholder.typicode.com/todos/1");
// // Return Page contents.
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $result = curl_exec($ch);
// $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
// curl_close($ch);
// var_dump($status_code);
// echo "<br>";
// var_dump($result); 
// $payload = json_encode([
//     "title" => "Updated title"
// ]);

// $headers = [
//     "Content-type: application/json; charset=UTF-8",
//     "Accept-language: en"
// ];
// $ch = curl_init();
// /*
// curl_setopt($ch, CURLOPT_URL, "https://jsonplaceholder.typicode.com/albums/1");
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// */
// curl_setopt_array($ch, [
//     CURLOPT_URL => "https://jsonplaceholder.typicode.com/albums/1",
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_CUSTOMREQUEST => "PATCH",
//     CURLOPT_POSTFIELDS => $payload,
//     CURLOPT_HTTPHEADER => $headers,
//     CURLOPT_HEADER => true
// ]);
// $data = curl_exec($ch);
// $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
// curl_close($ch);
// echo curl_error($ch);
// echo "<br>";
// var_dump($status_code);
// echo "<br>";
// var_dump($data);