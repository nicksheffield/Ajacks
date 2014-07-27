



jQuery.extend({
	jaxor_actions: {
		append: function(response, element){
			// if there is a target in the response, use that instead of the supplied element
			if(response.target) element = response.target;

			// if there is no element at all
			if(!element){
				// then error
				console.error('No target found in response');
				return false;
			}

			$(element).append(response.content);
		},
		
		remove: function(response, element){
			if(response.target) element = response.target;

			if(!element){
				console.error('No target found in response');
				return false;
			}

			$(element).remove();
		},

		update: function(response, element){

			if(!element){
				console.error('No target found in response');
				return false;
			}

			if(response.target) element = response.target;
			$(element).html(response.content);
		}
	},

	jaxorAction: function(name, callback){
		$.jaxor_actions[name] = callback;
	}
});





jQuery.fn.extend({
	/*
		eg.

		$('form').jaxor('submit', 'action.php', {
			id: 1,
			content: 'Hello World'
		});

	*/
	jaxor: function(event, url, data){

		$('body').on(event, this.selector, function(){

			var el = $(this);

			// if the url is supplied as a function or an object... and the data is not supplied
			if((typeof url == 'function' || typeof url == 'object') && !data){
				// then we probably omitted the url and put the data as the second parameter
				data = url;
				url = undefined;
			}

			// if data is a function, run it
			if(typeof data == 'function'){
				// make sure to pass in the current element for if we need it
				current_data = data(el);
			}else{
				current_data = data;
			}

			// if data is empty, then make sure it really is an empty object
			if(!current_data) current_data = {};

			current_url = url;

			// if we don't know what url to use
			if(!current_url){
				// check if we have an action attribute
				if(el.attr('action')){
					current_url = el.attr('action');
				}

				// if it doesn't have action, but has href, then use that
				else if(el.attr('href')){
					current_url = el.attr('href');
				}

				// if no url was found, then error
				else{
					console.error('No url detected for jaxor');
					return false;
				}
			}


			// make an ajax request
			$.ajax({
				// to the action
				url: current_url,
				// with a method of post
				type: 'POST',
				// expect to get json in response
				dataType: 'json',
				// set the $_POST array data
				data: current_data,
				// when the server responds
				success: function(response){

					// log the response
					console.log(response);

					// loop through each action we know about
					for(action in $.jaxor_actions){

						// if the current action in the loop is the same one as in the response
						if(action == response.action)
							// then select that action, from the array of all the actions we know about
							// then run that action as a function
							// and give it the response object so it knows the response information
							$.jaxor_actions[action](response, el);
					}

				}
			});

			return false;
		})
	}
})