<?php
//Multidimentioanl Array
$students = [
    ['tomal','islam',23],
    ['tahmid',1,'Cse'],
    [14,'cse','sohag',17]
];
function pr($arr)
{
    echo '<pre>';
     print_r($arr);
    echo '</pre>';
}
pr($students);
$students[] = ['nabil',18,'CSE'];
pr($students);
$students[1][] = 23;
pr($students);

?>