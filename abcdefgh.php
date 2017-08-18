<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
if(file_exists("log.txt")){
$h  = file_get_contents("log.txt");
echo $h;}
   else
   echo "..";
   
