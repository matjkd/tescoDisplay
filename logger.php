<?php 


$file = "log/today.txt";
$fh = fopen($file, 'a') or die("can't open file");
$dateNow = date('l jS \of F Y h:i:s A');

$data = $dateNow.", test, ". $_POST['name'] ."
";
fwrite($fh, $data);
fclose($fh);
echo "COMPLETE";
echo $data;
?>