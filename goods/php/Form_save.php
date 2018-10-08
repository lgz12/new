<?php
	header("Content-type: text/html; charset=utf-8");
	include 'connmjm.php';
	
//	@$atr = $_POST['atr'];
//	@$Tab_Name = $_POST['Tab_name'];
//	@$ii  = $_POST['len'];
    @$phone  = $_POST['phone'];
    @$name  = $_POST['name'];
//  @$name  = "梁高针";
    @$name =iconv('UTF-8','GBK',$name);
    @$dt  = $_POST['dt'];
    @$sex  = $_POST['sex'];
//  @$sex  = "男";
    @$sex =iconv('UTF-8','GBK',$sex);
    @$Tab_Name = "people";
//	echo $name;
//('123','".$name."','1232')";
//	('".$phone."','".$name."','".$dt."')";
//('".$phone."','".$name."','".$sex."','".$dt."')"
	$sql="INSERT INTO zhuce (phone,name,sex,date)
VALUES 	('".$phone."','".$name."','".$sex."','".$dt."')";
   if($phone!=''&&$name!=''&&$dt!=''){
 	if (!sqlsrv_query($conn,$sql))
  {
  echo 'fail';
  }
  else{
  	echo 'success';
  
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