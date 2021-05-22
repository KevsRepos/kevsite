<?php
$myfile = fopen("a.txt", "r") or die("Unable to open file!");
if(fread($myfile,filesize("a.txt")) == "true") {
  echo json_encode(["return" => true]);
}else {
  echo json_encode(["return" => false]);
}
fclose($myfile);
?> 