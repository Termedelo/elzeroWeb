<?php
$file = $_FILES["file1"];
$target_dir = "C:/Users/2021/Desktop/FrontEnd/elzeroWeb/summarys/PHP/FileUploadTest/uploads/";
$filename = pathinfo($file["name"], PATHINFO_FILENAME);
$fileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
$target_file = $target_dir . $filename . "." . $fileType;

$i = 1;
while (file_exists($target_file)) {
    $target_file = $target_dir . $filename . "(" . $i . ")." . $fileType;
    $i++;
}
if ($file["error"] == 0) {
    if (move_uploaded_file($file["tmp_name"], $target_file))
        echo "File Uploaded Successfully: " . basename($target_file,".".$fileType);
}