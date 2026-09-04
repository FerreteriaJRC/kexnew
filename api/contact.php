<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);
$name = trim((string) ($payload['name'] ?? ''));
$company = trim((string) ($payload['company'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));

if ($name === '' || $company === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Completa todos los campos del formulario']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'El correo electrónico no es válido']);
    exit;
}

$configPath = '/home/jrc/private/kex-mail.php';
$config = file_exists($configPath) ? require $configPath : [];
$apiKey = $config['RESEND_API_KEY'] ?? getenv('RESEND_API_KEY');
$fromEmail = $config['RESEND_FROM_EMAIL'] ?? getenv('RESEND_FROM_EMAIL') ?: 'KEX Web <ventas@kex.com.co>';

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['error' => 'El servicio de correo no está configurado']);
    exit;
}

$emailData = [
    'from' => $fromEmail,
    'to' => ['ventas@kex.com.co'],
    'reply_to' => $email,
    'subject' => "Consulta de {$name} - {$company}",
    'text' => "Nombre completo: {$name}\n" .
        "Empresa: {$company}\n" .
        "Correo electrónico: {$email}\n\n" .
        "Requerimiento / consulta:\n{$message}",
];

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($emailData),
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);

$result = curl_exec($curl);
$statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
$curlError = curl_error($curl);
curl_close($curl);

if ($result === false || $curlError !== '' || $statusCode < 200 || $statusCode >= 300) {
    http_response_code(502);
    echo json_encode(['error' => 'No fue posible enviar la consulta']);
    exit;
}

echo json_encode(['ok' => true]);
