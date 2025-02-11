<?php
//? PUT Request (Updating Data - Full Replacement)
//? The PUT method is used to replace an entire resource.
$url = "https://jsonplaceholder.typicode.com/todos/1";
$data = [
    "userId" => 2,
    "id" => 201,
    "title" => "A new Updated Item",
    "completed" => true
];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT"); // Use PUT method
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); // Send data
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
//! curl_setopt_array($ch, [
//!     CURLOPT_RETURNTRANSFER => true,
//!     CURLOPT_CUSTOMREQUEST => "PUT",
//!     CURLOPT_POSTFIELDS => json_encode($data),
//!     CURLOPT_HTTPHEADER => ["Content-Type: application/json"]
//! ]); ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//! curl_setopt($ch, CURLOPT_URL, $url);