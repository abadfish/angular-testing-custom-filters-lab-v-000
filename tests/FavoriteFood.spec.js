describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food', function() {
		var mockedList = [{
			name: 'Tim',
			favoriteFood: 'pizza'
		}, {
			name: 'Roger',
			favoriteFood: 'lettuce'
		}, {
			name: 'Ellen',
			favoriteFood: 'meatballs'
		}];

		var results = $filter('favoriteFood')(mockedList, 'lettuce');
		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Roger');

	});
});
