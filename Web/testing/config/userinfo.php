<?php
session_start();
include_once("config.php");

$useremail=mysql_real_escape_string($_POST['useremail']); 
$userpassword=mysql_real_escape_string($_POST['userpassword']);

$encrypt_password = md5($userpassword);

if($useremail && $userpassword){

	$query = mysql_query("SELECT * FROM users WHERE useremail='$useremail' and userpassword='$encrypt_password'");
	$numrows = mysql_num_rows($query);
	
	if($numrows != 0){
		$output = json_encode($row = mysql_fetch_assoc($query));
		$_SESSION['useremail'] = $useremail;
	}else{
		$output = "error";
	}
	
}
	
echo $output;

?>