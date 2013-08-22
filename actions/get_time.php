<?php

$response['action'] = 'getTime';
$response['content'] = date('d/m/Y H:i:s');

echo json_encode($response);