<?php

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'info@praxis-kreativkai.de'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Kontaktaufnahme über praxis-kreativkai.de von:  $name";
$email_body = "Liebe Therapeutinnen. Ihr habt eine Kontaktaufnahme erhalten.\n\n"."Hier sind die Fakten:\n\nName: $name\n\nEmail: $email_address\n\nTelefon: $phone\n\nNachricht:\n$message";
$headers = "From: info@praxis-kreativkai.de\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
