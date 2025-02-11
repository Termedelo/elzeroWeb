<?php 
//? DELETE Request (Removing Data)
//? The DELETE method is used to remove a resource:
$url = "https://jsonplaceholder.typicode.com/todos/1";
$options = [
    "http" => [
        "method"  => "DELETE",
        "header"  => "Content-Type: application/json"
    ]
];
$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);
echo $response;
echo "<br>";
echo "<pre>";
print_r($http_response_header);
echo "</pre>";
