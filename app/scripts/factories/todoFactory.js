todoApp.factory('TodoFactory', function() {

	var Todo = function(text, completed) {
		this.text = text;
		this.completed = (typeof completed !== 'undefined') ? completed : false;
	};

	Todo.prototype.complete = function() {
		this.completed = true;
	}

	return Todo;
});