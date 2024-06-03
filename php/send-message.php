<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $text = $data['text'];
    $botToken = getenv('BOT_TELEGRAM_TOKEN'); 
    $chatId = '6192949011';

    $telegramURL = "https://api.telegram.org/bot$botToken/sendMessage";

    $postData = array(
        'chat_id' => $chatId,
        'text' => $text
    );

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($postData),
        ),
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($telegramURL, false, $context);

    if ($result === FALSE) {
        http_response_code(500);
        echo json_encode(array('success' => false, 'message' => 'Произошла ошибка при отправке сообщения.'));
    } else {
        $responseData = json_decode($result, true);
        if ($responseData['ok']) {
            echo json_encode(array('success' => true, 'message' => 'Сообщение успешно отправлено!'));
        } else {
            http_response_code(500);
            echo json_encode(array('success' => false, 'message' => $responseData['description']));
        }
    }
} else {
    http_response_code(405);
    echo json_encode(array('success' => false, 'message' => 'Метод не разрешен'));
}
?>
