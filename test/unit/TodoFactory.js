describe('TodoFactory', function() {
	beforeEach(module('TodoApp'));

	var todo;

	beforeEach(inject(function(TodoFactory) {
		todo = new TodoFactory('New Todo');
	}));

	it('it is incomplete by default', function() {
		expect(todo.completed).toBe(false);
	});

	it('can be marked as complete', function() {
		todo.complete();
		expect(todo.completed).toBe(true);
	});
	
});