<?php
session_start();
include_once("config.php");

if(isset($_SESSION['useremail'])) { 
	
	$useremail = $_SESSION['useremail'];
	$query = mysql_query("SELECT * FROM users WHERE useremail='$useremail'");
	$numrows = mysql_num_rows($query);
	
	if($numrows != 0){
		$output = json_encode($row = mysql_fetch_assoc($query));
	}
	
}else{ 

	$output = "0";
	
}

echo $output;
?>