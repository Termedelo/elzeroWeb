<?php
//? HEAD Request : Used to fetch only headers (no body).
$url = "https://jsonplaceholder.typicode.com/todos/1";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_NOBODY, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "HEAD");
$response = curl_exec($ch);
$headers = curl_getinfo($ch);
curl_close($ch);
print_r($headers);