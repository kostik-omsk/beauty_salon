<?php

// Установите ID вашей группы и access token
$groupId = '115468427';
$accessToken = getenv('VK_ACCESS_TOKEN');

// Получаем параметр offset из запроса
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;

// Формируем URL запроса к API ВКонтакте с учетом offset
$apiUrl = "https://api.vk.com/method/wall.get?owner_id=-$groupId&access_token=$accessToken&v=5.131&count=20&offset=$offset";

$response = file_get_contents($apiUrl);

// Отправляем данные на клиентскую сторону в формате JSON
header('Content-Type: application/json');
echo $response;
?>
