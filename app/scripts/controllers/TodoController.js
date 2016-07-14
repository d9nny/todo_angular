todoApp.controller('TodoController', ['TodoFactory', function(TodoFactory) {
	var self = this;

	self.todos = [new TodoFactory('Todo 1', true), new TodoFactory('Todo 2', false)];

	self.addTodo = function(text) {
		self.todos.push(new TodoFactory(text));
	};

	self.deleteTodo = function(index) {
		self.todos.splice(index, 1);
	};
}]);