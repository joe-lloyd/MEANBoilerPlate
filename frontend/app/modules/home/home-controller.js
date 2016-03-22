angular.module('storeHomeCtrl', ['storeHomeService']).controller('homeCtrl', [ '$scope','homeFactory', function($scope, homeFactory){
	
	homeFactory.getStuff().then(function(res){
		$scope.users = res.data.durp.name;
	});

}]);