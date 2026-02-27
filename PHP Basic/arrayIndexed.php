<?php
$id = [1,7,17,4];
$names = ['tomal','tahmid','sohan','sohag'];
$res = count($id);

function pr($arr)
{
echo "<pre>";
print_r($arr);
echo "</pre>";
}
function cout($var)
{
    echo $var . '<br>';
}
echo "<strong>count element : </strong>". $res;

pr($id);
pr($names);


//adding elements 

$id[] = 30;
$res= array_push($names,'alamin');
pr($id);
pr($names);
echo 'number of elemets ' ;cout($res);
array_unshift($id,0); // adding element to the begining 
array_unshift($names,'jahid');
pr($id);
pr($names);

//removing elemets 
array_pop($id);
array_shift($names);
unset($id[2]);
unset($names[2]);
$id = array_values($id);
$names = array_values($names);
$dup_id = array_slice($id,2,2);
$dup_names = array_slice($names,2,2);
array_splice($id,2,2);
array_splice($names,2,2);
pr($id);
pr($names);
pr($dup_id);
pr($dup_names);
?>