<?php
	// Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["username"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
		$subject = 'Encomenda';
		$phone = strip_tags(trim($_POST["userphone"]));
        $email = filter_var(trim($_POST["usermail"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["orderMessage"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR empty($phone) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Algo correu mal, por favor verifique todos os campos e tente novamente. Obrigado.";
            exit;
        }

        $recipient = "nunomtrodrigues@gmail.com";

        // Build the email content.
        $email_content = "Name:\n $name\n";
        $email_content .= "Email:\n $email\n\n";
		$email_content .= "Telefone:\n $phone\n\n";
        $email_content .= "Message:\n\n$message";

        // Build the email headers.
        $email_headers = "De: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Obrigado! A sua mensagem foi enviada, seremos o mais breves possível na resposta.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Alguma coisa se passou, não nos foi possível processar a sua mensagem, por favor volte a tentar dentro de alguns minutos, ou utilize o nosso endereço de email em baixo. Obrigado.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Houve um problema com o envio da sua menssagem, por favor tente novamente!";
    }
?>