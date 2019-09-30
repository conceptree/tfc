<?php

include_once("config.php");

$useremail = strip_tags($_POST['useremail']);

if($useremail){
	
		$query = mysql_query("SELECT * FROM galeria WHERE email='$useremail'");
		
		$numrows = mysql_num_rows($query);
		$datalist = [];
		
		if($numrows != 0){
			
			$index = 0;
			$output="";
			
			while($row = mysql_fetch_assoc($query)){
			
				$datalist[$index] = $row;
				
				$output.=$row['name']."%".$row['lastname']."%".$row['email']."%".$row['adress']."%".$row['adressfat']."%".$row['phone']."%".$row['nif']."%".$row['newsletter']."%".$row['company']."%".$row['email'];
			
				$index++;
				
			}
				
		}
		
	}
	
	
	echo utf8_encode($output);



?>