<?php
//? POST Request (Creating Data)
//? The POST method Adds an Entity of Data to the API.
$url = "https://jsonplaceholder.typicode.com/todos";
$data = [
    "userId" => 2,
    "id" => 201,
    "title" => "A new Added Item",
    "completed" => true
];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
$response = curl_exec($ch);
curl_close($ch);
echo  $response;
//! curl_setopt_array($ch, [
//!     CURLOPT_RETURNTRANSFER => true,
//!     CURLOPT_POST => true,
//!     CURLOPT_POSTFIELDS => json_encode($data),
//!     CURLOPT_HTTPHEADER => ["Content-Type: application/json"]
//! ]); ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//! curl_setopt($ch, CURLOPT_URL, $url);
//! curl_setopt($ch,CURLOPT_CUSTOMREQUEST,"Post"); //! ↑