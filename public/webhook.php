<?php
// Secret anahtar
$secret = "my_webhook_secret";

// GitHub'dan gelen veriyi alın
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

// Secret doğrulama
$hash = 'sha256=' . hash_hmac('sha256', $payload, $secret);
if (!hash_equals($hash, $signature)) {
    http_response_code(403);
    exit('Invalid signature');
}

// Gelen veriyi JSON olarak çözümleyin
$data = json_decode($payload, true);

// Projeyi güncellemek için komutlar çalıştırın
$repo_dir = "/path/to/your/project";
$log_file = "/path/to/logs/webhook.log";

// Çalıştırılacak komut
$commands = [
    "cd $repo_dir",
    "git reset --hard", // Değişiklikleri sıfırla
    "git pull origin main", // Değişiklikleri çek
    "npm install", // Node.js projelerinde gerekli
    "npm run build" // React veya benzeri frameworkler için build işlemi
];

// Komutları çalıştır ve çıktıyı log dosyasına yaz
$output = shell_exec(implode(' && ', $commands) . " 2>&1");
file_put_contents($log_file, $output, FILE_APPEND);

http_response_code(200);
echo "Webhook işlem tamamlandı.";
