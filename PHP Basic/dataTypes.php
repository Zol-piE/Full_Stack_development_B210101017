<?php
//string
$name = 'tomal';
$name2 = "tomal islam";
var_dump($name);
echo "<br>";
echo "name2 get type " . gettype($name2);
echo "<br>";

//interger
$num1 = 10;
$num2 = -20;
var_dump($num1,$num2);
echo "<br>";

//float 
$f1 = 1.2;
var_dump(($f1));
echo "<br>";

//array
$arr = array('tomal','islam','tohidul');
print_r($arr);
echo "<br>";
var_dump($arr);
echo "<br>";

//bool
$is = true;
var_dump($is);
echo "<br>";

//object
$person = new stdClass(); //built-in PHP generic empty class.
var_dump($person);
echo "<br>";

//null
$car = NULL;
var_dump($car);
echo "<br>";

//resourse
//get data from a file name sample.txt
$file = fopen("sample.txt",'r');
var_dump($file);


?>