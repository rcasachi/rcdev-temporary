<?php
if(isset($_POST['submit'])){
	$to = "rcasachi@gmail.com";
	$from = $_POST['email'];
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$message = $name . " wrote the following:" . "\n\n" . $_POST['message'];

	$headers = "From:" . $from;
	mail($to, $subject, $message, $headers);
	header('Location: https://www.rafaelcasachi.dev');
}
