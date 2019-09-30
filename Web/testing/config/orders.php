<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_subject = $_POST['cf_subject'];
$field_message = $_POST['cf_message'];

$mail_to = 'info@conceptree.com';
$subject = $field_subject;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'Assunto: '.$field_subject."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

if($field_email != ''){
	
	$mail_status = mail($mail_to, $subject, $body_message, $headers);
	
}


if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Obrigado pela sua perferencia serei breve na resposta.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Ocurreu um erro envie a sua mensagem para info@conceptree.com ou tente mais tarde.');
		window.location = 'index.html';
	</script>
<?php
}
?>