<?php
//? POST Request (Creating Data)
//? The POST method Adds an Entity of Data to the API.
$url = "https://jsonplaceholder.typicode.com/todos"; // Sample API
$data = json_encode([
    "userId" => 2,
    "id" => 201,
    "title" => "A new Added Item",
    "completed" => true
]);
$options = [
    "http" => [
        "method"  => "POST",
        "header"  => "Content-Type: application/json",
        "content" => $data
    ]
];
$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);
echo $response;
echo "<br>";
echo "<pre>";
print_r($http_response_header);
echo "</pre>";