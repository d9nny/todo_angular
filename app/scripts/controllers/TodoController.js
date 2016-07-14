todoApp.controller('TodoController', ['TodoFactory', 'TodoService', function(TodoFactory, TodoService) {
	var self = this;

	TodoService.getAll().then(function(todos) {
		self.todos = todos;
	});

	self.addTodo = function(text) {
		self.todos.push(new TodoFactory(text));
	};

	self.deleteTodo = function(index) {
		self.todos.splice(index, 1);
	};

	self.changeFilter = function(boolean) {
		self.filter = boolean;
	};

}]);