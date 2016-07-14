describe('Todos tracker', function() {

	var mock = require('protractor-http-mock'),
			todos = $$('#todos li p');


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
		expect(todos.first().getText()).toEqual('Todo 1: Completed');
		expect(todos.last().getText()).toEqual('Todo 2: Not Completed');
	});

	it('can add a todo', function() {
		browser.get('/');
		$('#new-todo-name').sendKeys('New Todo');
		$('#add-todo').click();

		var todo = todos.last().getText();
		expect(todo).toEqual('New Todo: Not Completed');
	});

	it('can remove a todo', function() {
		browser.get('/');
		$$('#todos button#delete-todo').first().click();
		var todo = todos.first().getText();
		expect(todo).toEqual('Todo 2: Not Completed')
	});

	it('can complete a todo', function() {
		browser.get('/');
		$$('#todos button#complete-todo').last().click();
		var todo = todos.last().getText();
		expect(todo).toEqual('Todo 2: Completed');
	});

	it('can filter todos by all', function() {
		browser.get('/');
		expect(element.all(by.repeater('todo in ctrl.todos')).count()).toEqual(2);
	});

	it('can filter todos by active', function() {
		browser.get('/');
		$('#active').click();
		var todo = todos.first().getText();
		expect(element.all(by.repeater('todo in ctrl.todo')).count()).toEqual(1);
		expect(todo).toEqual('Todo 2: Not Completed');
	});

	it('can filter todos by complete', function() {
		browser.get('/');
		$('#complete').click();
		var todo = todos.first().getText();
		expect(element.all(by.repeater('todo in ctrl.todos')).count()).toEqual(1);
		expect(todo).toEqual('Todo 1: Completed');
	});

});