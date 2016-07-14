describe('TodoController', function() {
	beforeEach(module('TodoApp'));

	var ctrl, httpBackend, TodoFactory, todo1, todo2, todos;

	beforeEach(inject(function($httpBackend, $controller, _TodoFactory_) {
		ctrl = $controller('TodoController');
		TodoFactory = _TodoFactory_;
		httpBackend = $httpBackend;
		todo1 = new TodoFactory("Todo 1", true);
		todo2 = new TodoFactory("Todo 2", false);
		todos = [todo1, todo2];
		httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(todos);
		httpBackend.flush();
	}));

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

	it('filter is default to all', function() {
		expect(ctrl.filter).toEqual();
	})

	it('changes the filter', function() {
		ctrl.changeFilter(true);
		expect(ctrl.filter).toEqual(true);
	})
});