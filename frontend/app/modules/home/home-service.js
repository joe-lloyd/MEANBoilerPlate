angular.module('storeHomeService', []).factory('homeFactory', [ '$http',  function($http){
	return{
		getStuff: function(){
			console.log('users hit');

			return $http({
				method: 'GET',
				url: 'http://localhost:3000/api/users'
			});

		},
		logMyAssIn: function(username, password){
			console.log('trying to login');

			return $http({
				method: 'POST',
				url: 'http://localhost:3000/api/login',
				data: {
					'password': password,
					'username': username
				}
			});
		},
		check: function(){
			return $http({
				method: 'GET',
				url: 'http://localhost:3000/api/checkauth'				
			});
		}
	};
}]);