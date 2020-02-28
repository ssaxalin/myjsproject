<?php
    $animal = isset($_POST['animal']) ? $_POST['animal'] : '';
    if (!empty($animal)) {
        echo '<br/><br/> Выбраны: ';
        foreach ($animal as $a) {
            echo "<span style=\"color:green\">" . htmlentities($a) . "</span>";
        }
    }