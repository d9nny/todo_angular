describe('Todos tracker', function() {

	var mock = require('protractor-http-mock');

	beforeEach(function() {
		mock([{
			request: {
				path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
				method: 'GET'
			},
			response: {
				data: [{text: 'Todo 1', completed: true}, {text: 'Todo 2', completed: false}]
			}
		}]);
	});

	afterEach(function(){
	  mock.teardown();
	});

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