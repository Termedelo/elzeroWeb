<?php 
//? PUT Request (Updating Data - Full Replacement)
//? The PUT method is used to replace an entire resource.
$url = "https://jsonplaceholder.typicode.com/todos/1";
$data = json_encode([
    "userId" => 1,
    "id" => 4,
    "title" => "Fully Replaced Element",
    "completed" => 1
]);

$options = [
    "http" => [
        "method"  => "PUT",
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