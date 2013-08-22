<?php

$content = '
	<h2>Content Title</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt at a laudantium natus quas reiciendis quo eaque fuga voluptates commodi provident molestiae optio quos accusamus minus ipsum tenetur reprehenderit alias.</p>
	<p>Sunt laudantium sapiente dolores atque id veniam quos illo similique esse inventore aspernatur doloribus? Fugiat delectus provident praesentium quisquam exercitationem corporis minus repellat harum porro accusamus nihil nesciunt reprehenderit libero.</p>
	<p>Maxime veritatis dolor nihil illo expedita harum dicta quam fugiat iste ab corrupti dolorem laboriosam delectus quibusdam voluptas eligendi tempora provident libero ea soluta perspiciatis reiciendis labore debitis culpa accusantium.</p>
';

$response['action'] = 'getContent';
$response['content'] = $content;

echo json_encode($response);
