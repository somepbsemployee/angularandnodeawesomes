'use strict';

(function() {
	angular.module('epicApp', ['ngRoute', 'ngResource'])
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			controller: 'homeCtrl',
			templateUrl: 'js/application/templates/home/index.html'
		});
	}]);
})();
