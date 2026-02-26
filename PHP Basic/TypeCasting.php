<?php
$number1 = 5;
$number2 = 10;
$number3 = '20';
$isBool = true; // true =1 , false = 0
$null = null;
// (+) for arithmatic operations
//(.) for concat
$result = $number1 + $number2;///int to int
var_dump($result);
echo "<br>";
$result = $number2 + $number3; //string to int
var_dump($result);
echo "<br>";
$result = $number2 . $number3;//int to string concatanation
var_dump($result);
echo "<br>";
$result = $number1 + $isBool; //bool to int 
var_dump($result);
echo "<br>";

//explicit conversion 
$result = (string)$number1;
var_dump($result);
echo "<br>";


?>