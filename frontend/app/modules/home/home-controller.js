angular.module('storeHomeCtrl', ['storeHomeService']).controller('homeCtrl', [ '$scope','homeFactory', function($scope, homeFactory){
	
	$scope.data = {};

	homeFactory.getStuff().then(function(res){
		$scope.users = res.data;
	});

	$scope.login = function(){
		homeFactory.logMyAssIn($scope.data.username, $scope.data.password).then(function (data, status, headers, config){
			console.log('ass logged in');
		});
	};

	$scope.check = function(){
		homeFactory.check().then(function (res){
			console.log('successful or something');
		});
	};

}]);