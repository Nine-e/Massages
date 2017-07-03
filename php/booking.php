<?php
			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="web";
    		//$build=$_GET['build'];
    		$conn = new mysqli($servername, $username, $password, $database);
		
		    $result = $conn->query($sql);
		    $users=array(); 
		    $i=0; 
		    $sql ="insert into `people` values("."'".$_GET['date']."'".","."'".$_GET['time']."'".","."'".$_GET['session']."'".","."'".$_GET['length']."'".","."'".$_GET['type']."'".","."'".$_GET['name']."'".","."'".$_GET['email']."'".","."'".$_GET['street1']."'".","."'".$_GET['street2']."'".","."'".$_GET['state']."'".","."'".$_GET['zip']."'".","."'".$_GET['parking']."'".","."'".$_GET['user']."'".","."'".$_GET['credit']."'".","."'".$_GET['security']."'".","."'".$_GET['expiration']."'".","."'".$_GET['Billing']."'".","."'".$_GET['gift']."'".")";
    	    $conn->query($sql);
?>