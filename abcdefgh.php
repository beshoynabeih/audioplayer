<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
if(file_exists("logs.txt")){
$h  = file_get_contents("logs.txt");
echo $h;}
   else
   echo "..";
   
