<?php
error_reporting(E_ALL);
$myfile = fopen("a.txt", "w") or die("Unable to open file!");
$txt = "true";
fwrite($myfile, $txt);
fclose($myfile);
?> 