<?php

	header("Content-type: text/html; charset=utf-8");
	include 'connmjm.php';
	
	@$Tab_Name = "zhuce";
	@$Cont = $_POST['Cont'];	
	
	$Sqicomm = "delete from zhuce where phone = 123";
	if(sqlsrv_query($conn,$Sqicomm)){
		echo 'success';
	}else{
		echo 'fail';
	}


?>