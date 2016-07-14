describe('TodoController', function() {
	beforeEach(module('TodoApp'));

	var ctrl,
			todo = {text: 'New Todo', completed: false},
			todos = [{text: 'Todo 1', completed: true}, {text: 'Todo 2', completed: false}];

	beforeEach(inject(function($controller) {
		ctrl = $controller('TodoController');
	}))

	it('initializes with a todo', function() {
		expect(ctrl.todos).toEqual(todos);
	});

	it('add a new todo', function() {
		ctrl.addTodo(todo.text);
		expect(ctrl.todos.pop()).toEqual(todo);
	});

	it('deletes a todo', function() {
		ctrl.deleteTodo(0);
		expect(ctrl.todos[0]).toEqual(todos[1]);
	});	

	it('completes a todo', function() {
		ctrl.completeTodo(1);
		expect(ctrl.todos[1]).toEqual({text: 'Todo 2', completed: true});
	});
});