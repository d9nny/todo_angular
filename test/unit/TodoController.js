describe('TodoController', function() {
	beforeEach(module('TodoApp'));

	var ctrl, TodoFactory, todo1, todo2, todos;

	beforeEach(inject(function($controller, _TodoFactory_) {
		ctrl = $controller('TodoController');
		TodoFactory = _TodoFactory_;
		todo1 = new TodoFactory("Todo 1", true);
		todo2 = new TodoFactory("Todo 2", false);
		todos = [todo1, todo2];
	}))

	it('initializes with multiple todos', function() {
		expect(ctrl.todos).toEqual(todos);
	});

	it('add a new todo', function() {
		ctrl.addTodo(todo2.text);
		expect(ctrl.todos.pop()).toEqual(todo2);
	});

	it('deletes a todo', function() {
		ctrl.deleteTodo(0);
		expect(ctrl.todos[0]).toEqual(todos[1]);
	});	
});