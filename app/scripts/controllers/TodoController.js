todoApp.controller('TodoController', function() {
	var self = this;

	self.todos = [{text:'Todo 1', completed: true}, {text: 'Todo 2', completed: false}];

	self.addTodo = function(text) {
		self.todos.push({text: text, completed: false});
	};

	self.deleteTodo = function(index) {
		self.todos.splice(index, 1);
	};

	self.completeTodo = function(index) {
		self.todos[index].completed = true;
	};	
});