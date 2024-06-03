<?php

// Установите ID вашей группы и access token
$groupId = '115468427';
$accessToken = getenv('VK_ACCESS_TOKEN');

// Формируем URL запроса к API ВКонтакте
$apiUrl = "https://api.vk.com/method/wall.get?owner_id=-$groupId&access_token=$accessToken&v=5.131&count=20";


$response = file_get_contents($apiUrl);

// Отправляем данные на клиентскую сторону в формате JSON
header('Content-Type: application/json');
echo $response;
?>