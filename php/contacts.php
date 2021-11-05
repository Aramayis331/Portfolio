<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$text_message = $_POST['text_message'];
	$from = $_POST['email'];
	$subject = $_POST['tema'];
	$to = "aramayis.araqelyan.99@mail.ru";
	$message = "	
Անուն - $name
Հեռախոսահամար - $phone
էլեկտրոնային հասցե - $from
Նամակ - $text_message";

	$result = mail($to, $subject, $message);

	if ($result) {
		echo 'Նամակը հաջողությամբ ողարկված է';
	} else {
		echo 'Նամակը չի ողարկվել';
	}

?>