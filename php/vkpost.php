<?php

// Установите ID вашей группы и access token
$groupId = '115468427';
$accessToken = getenv('VK_ACCESS_TOKEN');

// Получаем параметры offset и count из запроса
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
$count = isset($_GET['count']) ? intval($_GET['count']) : 10; // Устанавливаем значение по умолчанию 10

// Формируем URL запроса к API ВКонтакте с учетом offset и count
$apiUrl = "https://api.vk.com/method/wall.get?owner_id=-$groupId&access_token=$accessToken&v=5.131&count=$count&offset=$offset";

$response = file_get_contents($apiUrl);

// Отправляем данные на клиентскую сторону в формате JSON
header('Content-Type: application/json');
echo $response;
?>