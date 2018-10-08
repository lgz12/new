
<?php

header("Content-type: text/html; charset=utf-8");

//$serverName = "172.16.143.41"; //数据库服务器地址182.61.10.96
$serverName = "172.19.66.81"; 
$uid = "sa"; //数据库用户名
$pwd = "123"; //数据库密码Erp1096...

$connectionInfo = array("UID"=>$uid, "PWD"=>$pwd, "Database"=>"test");
$conn = sqlsrv_connect($serverName, $connectionInfo);
?>