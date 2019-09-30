<?php

include_once("config.php");

	$username=mysql_real_escape_string( trim($_POST['username'])); 
	$userLastname=mysql_real_escape_string( trim($_POST['userLastname'])); 
	$userAdress=mysql_real_escape_string( trim($_POST['userAdress']));
	$userAdressFat=mysql_real_escape_string( trim($_POST['userAdressFat']));
	$userNif=mysql_real_escape_string( trim($_POST['userNif']));
	$userEmail=mysql_real_escape_string( trim($_POST['userEmail']));
	$userRegPassword=mysql_real_escape_string( trim($_POST['userRegPassword']));
	$userPhoneNumber=mysql_real_escape_string( trim($_POST['userPhoneNumber']));
	$userCompany=mysql_real_escape_string( trim($_POST['userCompany']));
	$userNewsletter=mysql_real_escape_string( trim($_POST['userNewsletter']));
	
	$encrypt_password = md5($userRegPassword);
	
	$query = mysql_query("SELECT * FROM users WHERE userEmail='$userEmail'");
	
	$numrows = mysql_num_rows($query);

	if($numrows != 0){
		
		echo "O Email utilizado já existe na nossa base de dados!_error";
		
	}else{
		
		$sql="Insert into users(username,lastname,adress,adressfat,newsletter,nif,useremail,phone,company,userpassword) values('$username','$userLastname','$userAdress','$userAdressFat','$userNewsletter','$userNif','$userEmail','$userPhoneNumber','$userCompany','$encrypt_password')";
		
		$result=mysql_query($sql);
		echo"Obrigado pelo seu registo!_sucess";
	
	}

?>