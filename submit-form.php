<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $request = htmlspecialchars($_POST['request']);

    // Email configuration
    $to = "supercuriousdev@gmail.com";
    $subject = "New Contact Request from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email body
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Request:\n$request\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us, $name. We will get back to you soon.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
