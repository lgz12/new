
<?php  
	
	header("Content-type: text/html; charset=utf-8");
	include 'connmjm.php';
	
//	@$atr = $_POST['atr'];
//	@$Tab_Name = $_POST['Tab_name'];
//	@$ii  = $_POST['len'];
    @$phone  = $_POST['phone'];
//  @$name  = $_POST['name'];
//  @$number  = $_POST['number'];
//  @$explains  = $_POST['explains'];
//  @$Tab_Name = "people";
//	@$ii  = 3;
//	echo $name;
	
//	$sql="SELECT * from people where name='".$name."'";
	$sql="SELECT * from zhuce where phone='".$phone."'";
	$result=sqlsrv_query($conn,$sql);
//	$num=sqlsrv_num_rows($result);  //获取行数 
	$num=sqlsrv_fetch_array($result);
//	echo "收到：".$num;
   	if ($num==false)
{
echo "";
}
else if($num >=0){
	echo "fail";
}
   
//	$sql = "select Users.*,Answer.*  from `Users`,`Answer` where  Users.U_id = Answer.Uid  and  Answer.Qid = '$Que_id' and Answer.A_re = 0  order by Answer.A_date Asc ";  
//	//找出问题为5的所有回答 并且pid=0(无回复)
//	$result=mysql_query($sql);
//	$num=mysql_num_rows($result);  //获取行数 
//	if($num == '0')
//	{     
//		 echo "暂无回答";    
//		 }else{     
//		 	 echo "有回答";   
//		 	  ｝    
		 	      
?>