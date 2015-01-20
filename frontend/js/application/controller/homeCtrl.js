'use strict';

(function() {
	var controllerMethods = controllerMethods || {};
	controllerMethods.homeCtrl = function($scope, socketio) {
		$scope.test = 'hello world...';
		$scope.messages = [];

		$scope.epicClick = function() {
			socketio.emit('epicMessage', { something: 'awesome', message: $scope.message, employeeId: 12345 }, function() {
				console.log('awesome shit has sent!');
			});
		}

		socketio.on('clientEpic', function(data){
			console.log(data);
			$scope.messages.push(data);
		});

		socketio.on('notifyAbsence', function(data) {
			console.log('data', data);
		});

		console.log(socketio);
	};


	angular.module('epicApp').controller('homeCtrl', controllerMethods.homeCtrl);
})();