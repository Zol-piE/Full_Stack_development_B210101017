<?php
$student = [
    'name' => 'tomal',
    'age' => 23,
    'id' => 17
];
function endl()
{
    echo '<br>';
}
echo $student['name'];
echo '<pre>';
print_r(array_keys($student));

print_r(array_values($student));

echo 'Array Key Exist ' . array_key_exists('dept',$student).'<br>';
//sorting
$marks = [
    'math' => 80,
    'physics' => 85,
    'chemistry' => 70
];
asort($marks);
print_r($marks);
echo '</pre>';

?>