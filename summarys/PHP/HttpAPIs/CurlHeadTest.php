<?php
//? HEAD Request : Used to fetch only headers (no body).
$url = "https://jsonplaceholder.typicode.com/todos/1";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_NOBODY, true); // Do not return body
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "HEAD"); // Use HEAD method
$response = curl_exec($ch);
$headers = curl_getinfo($ch); // Get response headers
curl_close($ch);
print_r($headers);