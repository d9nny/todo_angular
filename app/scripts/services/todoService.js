todoApp.service('TodoService', ['$http', 'TodoFactory', function($http, TodoFactory) {
	var self = this;

	self.getAll = function() {
		return $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
										.then(_handleResponseFromApi)
	};

	function _handleResponseFromApi(response) {
		return response.data.map(function(todoData) {
			return new TodoFactory(todoData.text, todoData.completed)
		})
	};	
}]);