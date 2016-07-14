describe('Todos tracker', function() {
	it('has several todos', function() {
		browser.get('/');
		var todos = $$('#todos p');
		expect(todos.first().getText()).toEqual('Todo 1: Completed');
		expect(todos.last().getText()).toEqual('Todo 2: Not Completed');
	});

	it('can add a todo', function() {
		browser.get('/');
		$('#new-todo-name').sendKeys('New Todo');
		$('#add-todo').click();

		var todo = $$('#todos li p').last().getText();
		expect(todo).toEqual('New Todo: Not Completed');
	});

	it('can remove a todo', function() {
		browser.get('/');
		$$('#todos button#delete-todo').first().click();
		var todo = $$('#todos li p').first().getText();
		expect(todo).toEqual('Todo 2: Not Completed')
	});

	it('can complete a todo', function() {
		browser.get('/');
		$$('#todos button#complete-todo').last().click();
		var todo = $$('#todos li p').last().getText();
		expect(todo).toEqual('Todo 2: Completed');
	});
});