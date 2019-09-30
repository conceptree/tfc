<?php
include_once("config.php");

$useremail=mysql_real_escape_string($_POST['useremail']);
$orderObj=mysql_real_escape_string($_POST["orderObj"]);

$sql = "UPDATE users SET orders='$orderObj' WHERE useremail='$useremail'";

$result=mysql_query($sql);

echo $result;

?>