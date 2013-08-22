#jQuery Ajaxify Plugin

---

A jQuery plugin for easily handling AJAX requests and responses.

It works by creating a centralised ajax call which expects a specially constructed JSON response.

Inside that response is a set of instructions on what the client-side is supposed to do.

For example: adding an item to a list.

First we teach the script that if it gets a response with the \'addItem\' action, this is what to do with it.

**script.js**
```javascript
	$.addAction('addItem', function(response){
		$(response.target).append(response.content);
	})

	$('a.add-item').ajaxify('click', 'add_item.php');
```

Then we define the data involved with the addItem response in the php, and convert that to json.

**add_item.php**
```php
	echo json_encode(array(
		'action' =>  'addItem',
		'content' => '<li>New List Item</li>',
		'target' =>  'ul.links'
	);
```

The *content* and *target* parameters used in this example are optional. Only *action* is required.
However, the *content* and *target* parameters are being used to describe information that the javascript will use.