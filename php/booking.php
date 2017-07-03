<?php
			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="new";
    		//$build=$_GET['build'];
    		$conn = new mysqli($servername, $username, $password, $database);
		    $users=array(); 
		    $i=0; 
		    $sql = "insert into `booking` values("."'".$_GET['date']."'".","."'".$_GET['time']."'".","."'".$_GET['session']."'".","."'".$_GET['length']."'".","."'".$_GET['type']."'".","."'".$_GET['name']."'".","."'".$_GET['email']."'".","."'".$_GET['street1']."'".","."'".$_GET['street2']."'".","."'".$_GET['state']."'".","."'".$_GET['zip']."'".","."'".$_GET['parking']."'".","."'".$_GET['user']."'".","."'".$_GET['credit']."'".","."'".$_GET['security']."'".","."'".$_GET['expiration']."'".","."'".$_GET['Billing']."'".","."'".$_GET['gift']."'".")";
		   /* $sql = "insert into `booking` values("."'"."1997-3-5"."'".","."'"."19:22:AM"."'".","."'"."ssss"."'".","."'"."pp"."'".","."'"."ppp"."'".","."'"."sssss"."'".","."'"."274561843@qq.com"."'".","."'"."ppppp"."'".","."'"."ppppp"."'".","."'"."ppppp"."'".","."'"."ppppp"."'".","."'"."pppppp"."'".","."'"."pppppp"."'".","."'"."ppppp"."'".","."'"."pppp"."'".","."'"."pppppp"."'".","."'"."pppppp"."'".","."'"."pppppsss"."'".")";*/
    	    $result=$conn->query($sql);
    	    echo $sql;
?>