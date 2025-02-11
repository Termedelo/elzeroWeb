<?php
//? GET Request (Fetching Data)
//? The GET method retrieves (All the Data or a single Object) Data form API.
$url1 = "https://jsonplaceholder.typicode.com/todos";
$url2 = "https://jsonplaceholder.typicode.com/todos/1";
$options = [
    "http" => [
        "method"  => "GET",
        "header"  => "User-Agent: MyPHPApp/1.0\r\n Accept: application/json"
    ]
];
$context = stream_context_create($options);
$response = file_get_contents($url1, false, $context);
$data = json_decode($response, true);
echo "<pre>";
print_r($data);
echo "</pre>";
echo "<br>";
echo "<pre>";
print_r($http_response_header);
echo "</pre>";