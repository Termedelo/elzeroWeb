<?php 
//?  PATCH Request (Updating Data - Partial Update)
//? The PATCH method updates only specific fields (Fully or partially).
$url = json_encode("https://jsonplaceholder.typicode.com/todos/1");
$data = ["title" => "Partially Updated Title"];
$options = [
    "http" => [
        "method"  => "PATCH",
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