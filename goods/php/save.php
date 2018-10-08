<?php
	header("Content-type: text/html; charset=utf-8");
	include 'connmjm.php';
	
//	@$atr = $_POST['atr'];
//	@$Tab_Name = $_POST['Tab_name'];
//	@$ii  = $_POST['len'];
    @$name  = $_POST['name'];
    @$number  = $_POST['number'];
    @$explains  = $_POST['explains'];
    @$Tab_Name = "people";
	@$ii  = 3;
//	echo $name;
	
	$sql="INSERT INTO people (name, number,explains)
VALUES
('".$name."','".$number."','".$explains."')";
 if($name!=''&&$number!=''&&$explains!=''){
 	if (!sqlsrv_query($conn,$sql))
  {
  die("新增失败");
  }
  else{
  	echo "新增成功";
  }
 }

  
  

//	$a="insert into ".$Tab_Name."(";
//	$Val="values(";
//	$SqlVar = "";
//	$SqlValue = "";	
//	$b=",";
//	$c="',";
//	for($i=0;$i<$ii;$i++){
//		$name  = $atr[$i]['name'];		//数组下标
//		$value = iconv('UTF-8','GBK',(string) $atr[$i]['value']); 	//数组内容
//		
//		$a .= $name.$b;
//		$Val .= "'".$value.$c;
//	}
//	$SqlVar = substr($a,0,strlen($a)-1).")";
//	$SqlValue = substr($Val,0,strlen($Val)-1).")";
//	$Sqlcomm = $SqlVar . $SqlValue;
////	echo $Sqlcomm;	
//	if(sqlsrv_query($conn,$Sqlcomm)){
//		echo 'ok';
//	};
//	echo "OK";

?>