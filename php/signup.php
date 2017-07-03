<?php
	$servername ="localhost";
	$username    ="root";
	$database     ="new";
	$conn = new mysqli($servername, $username, "123456", $database);
    $name=$_GET["firstname"];
    $firstname=$_GET["firstname"];
    $lastname=$_GET["lastname"];
    $email=$_GET["email"];
    $mobile=$_GET["mobile"];
    $password=$_GET["password"];
    $sql = "select * from  people where email="."\"".$email."\"";
    $result = $conn->query($sql);  
    if($result->num_rows>0){
    	echo false;
    }
    else
    {
    	$sql ="insert into `people` values("."'".$firstname."'".","."'".$lastname."'".","."'".$email."'".","."'".$mobile."'".","."'".$password."'".")";
    	$conn->query($sql);
    	echo $email;
    }
?>
