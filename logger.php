<?php 


$file = "log/today.txt";
$fh = fopen($file, 'a') or die("can't open file");
$dateNow = date('l jS \of F Y h:i:s A');

$data = $dateNow.", ". $_POST['action'] ."
";
fwrite($fh, $data);
fclose($fh);
echo "COMPLETE";
echo $data;
?>