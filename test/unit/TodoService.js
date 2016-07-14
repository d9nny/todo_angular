describe('TodoService', function() {
	beforeEach(module('TodoApp'));

	var TodoService, TodoFactory, httpBackend,
			todoData = [{text:'Todo 1', completed: true}, {text: 'Todo 2', completed: false}];

	beforeEach(inject(function(_TodoService_, _TodoFactory_, $httpBackend) {
		TodoService = _TodoService_;
		TodoFactory = _TodoFactory_;
		httpBackend = $httpBackend;
	}));

	it('fetches a list of todos', function() {
		httpBackend.expectGET('http://quiet-beach-24792.herokuapp.com/todos.json').respond(todoData);

		var todo1 = new TodoFactory('Todo 1', true),
				todo2 = new TodoFactory('Todo 2', false);

		TodoService.getAll().then(function(todos) {
			expect(todos).toEqual([todo1, todo2]);
		});

		httpBackend.flush();
	});	

});