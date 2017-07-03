<?php
	$servername ="localhost";
	$username    ="root";
	    $password     ="123456";
	$database     ="new";
	//$build=$_GET['build'];
	$conn = new mysqli($servername, $username, $password, $database);
	if(isset($_GET['gift']))
	{
		$gift=$_GET['gift'];
		$sql = "select * from  gift where gift="."'".$gift."'";
	    $result = $conn->query($sql);
	    $users=array(); 
	    $i=0; 
	    $num="0";
	    if ($result->num_rows > 0) {
	       while($row=$result->fetch_assoc())
	       {
	       		$num=$row['money'];
	       		break;
	       }
	   }
       echo $num;
	}
?>
