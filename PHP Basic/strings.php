<?php
$title = 'Learn PHP';
$textOne = 'with for project';
$textTwo = ' this is demo page of project'

?>
<!doctype html>
<html>
    <head>
        <title><?= $title ?></title>
    </head>
    <body>
        <h1> <?= $title .' '.$textOne ?></h1>
        <div>
            <p> <?= $textTwo ?></p>
        </div>
    </body>
</html>