<?php
$host = 'localhost';
$dbname = 'feetie';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
} catch (PDOException $e) {
    die("فشل اتصال قاعدة البيانات: " . $e->getMessage());
}
?>
