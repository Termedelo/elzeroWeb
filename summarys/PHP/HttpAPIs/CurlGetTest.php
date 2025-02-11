<?php
//? GET Request (Fetching Data)
//? The GET method retrieves (All the Data or a single Object) Data form API.
$url = "https://jsonplaceholder.typicode.com/todos/1";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPGET, true);  
$response = curl_exec($ch);
curl_close($ch);
echo $response;
//! curl_setopt($ch,CURLOPT_CUSTOMREQUEST,"GET"); //! ↑
//! curl_setopt($ch, CURLOPT_URL, $url); ↑
