<?php
// send-email.php

$logFile = __DIR__ . '\email.log';
$message = "Test zapisu logów";

if (file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] " . $message . PHP_EOL, FILE_APPEND) === false) {
    die("Błąd: Nie można zapisać do pliku log! Ścieżka: $logFile");
}

echo "Log zapisany pomyślnie!";


// Załaduj pliki PHPMailer – dostosuj ścieżki do swojej konfiguracji
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

function writeLog($message) {
    $logFile = __DIR__ . '\email.log';  // Ścieżka do pliku log
    $date = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$date] $message" . PHP_EOL, FILE_APPEND);
}

// Pobranie danych JSON z żądania
$data = json_decode(file_get_contents('php://input'), true);
writeLog("Odebrane dane: " . json_encode($data));

if (!$data) {
    writeLog("Błąd: Brak przesłanych danych");
    http_response_code(400);
    echo json_encode(['error' => 'Brak przesłanych danych']);
    exit;
}

$name    = isset($data['name']) ? trim($data['name']) : '';
$email   = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {    
    writeLog("Błąd: Niekompletne dane. Name: '$name', Email: '$email', Message: '$message'");
    http_response_code(400);
    echo json_encode(['error' => 'Wypełnij wszystkie pola']);
    exit;
}

$mail = new PHPMailer(true);

try {
    writeLog("Inicjalizacja konfiguracji SMTP.");

    
    $mail->SMTPDebug = 2; // Ustawienie poziomu debugowania (2 - szczegółowe informacje)
    $mail->Debugoutput = function($str, $level) {
        writeLog("SMTP Debug (poziom $level): $str");
    };
    // Konfiguracja SMTP
    $config = require __DIR__ . './../config_smtp.php'; // Dostosuj ścieżkę
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port       = $config['smtp_port'];
    writeLog("SMTP skonfigurowany: Host: {$mail->Host}, Port: {$mail->Port}, Username: {$mail->Username}");

    // Ustawienia wiadomości
    // Możesz ustawić stały adres nadawcy, a dane z formularza umieścić w treści wiadomości
    $mail->setFrom('kontakt@joannaluczakfotografie.pl', 'Formularz kontaktowy joannaluczakfotografie.pl');
    $mail->addAddress('kontak@joannaluczakfotografie.pl'); // Odbiorca wiadomości

    $mail->Subject = 'Nowa wiadomość kontaktowa';
    $mail->Body    = "Imię i nazwisko: $name\nEmail: $email\n\nWiadomość:\n$message";
    writeLog("Próba wysłania wiadomości z tematem: '{$mail->Subject}'");
    $mail->send();
    writeLog("Wiadomość została wysłana pomyślnie.");
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    $errorMsg = 'Wiadomość nie mogła zostać wysłana. Błąd: ' . $mail->ErrorInfo;
    http_response_code(500);
    writeLog("Błąd przy wysyłaniu e-maila: " . $errorMsg);
    echo json_encode(['error' => 'Wiadomość nie mogła zostać wysłana. Błąd: ' . $mail->ErrorInfo]);
}
?>
