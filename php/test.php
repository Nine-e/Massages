<?php
	session_start();
	if(isset($_SESSION['eamil']))
	{
		echo $_SESSION['eamil'];
	}else
	{
		echo "Sign In";
	}
?>