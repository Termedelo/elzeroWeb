<?php
//? DELETE Request (Removing Data)
//? The DELETE method is used to remove a resource:
$url = "https://jsonplaceholder.typicode.com/todos/1";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE"); // Use DELETE method
$response = curl_exec($ch);
curl_close($ch);
echo $response;
