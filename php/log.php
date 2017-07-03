
<?php 
			$servername ="localhost";
		    $username    ="root";
		    $database     ="new";
		    $conn = new mysqli($servername, $username, "123456", $database);
		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		     $email=$_GET["email"];
             $password=$_GET["password"];
             //$email="13588143813";
             //$password="123456";	    
             $sql = "select * from  people where email="."'".$email."'"." and password="."'".$password."'";
		     $result = $conn->query($sql);
		    if($result->num_rows==0)
		    {
		    	echo false;
		    }
		    else
		    {
		    	session_start();
		    	$_SESSION['eamil']=$email;
		    	echo $email;
		    	
		    }
?>