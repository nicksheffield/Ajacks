#jQuery Ajaxify Plugin

---

A jQuery plugin for easily handling AJAX calls and callbacks.

It works by teaching your javascript how to handle ajax responses that have been constructed to work with ajaxify.

An ajaxify response is defined in json with a single predefined parameter: action.
Each response must have an action assigned to it, so that the client knows how to properly react to the response.

eg.

add_item.php
```php
	echo json_encode(array(
		'action' =>  'addItem',
		'content' => '<li>New List Item</li>',
		'target' =>  'ul.links'
	);
```

script.js
```javascript
	$.addAction('addItem', function(response){
		$(response.target).append(response.content);
	})

	$('a.add-item').ajaxify('click', 'add_item.php');
```