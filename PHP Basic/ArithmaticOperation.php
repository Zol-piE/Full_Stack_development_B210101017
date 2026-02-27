<?php
$num1= 5;
$num2 =10;
$res = max($num1,$num2);
$res = max([10,3,25,6]);

$res = rand(1,20); // op rand from 1 to 20
$num = 12345678.54789;
$res = number_format($num,2,'.','^');
echo $res;
?>