<?php
//?  PATCH Request (Updating Data - Partial Update)
//? The PATCH method updates only specific fields (Fully or partially).
$url = "https://jsonplaceholder.typicode.com/todos/1";
$data = [
    "title" => "Updated Title Only"
];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PATCH");
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
