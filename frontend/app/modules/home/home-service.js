angular.module('storeHomeService', []).factory('homeFactory', [ '$http',  function($http){
	return{
		getStuff: function(){
			console.log('users hit');
			return $http.get('http://localhost:3000/api/users');
		},
		logMyAssIn: function(username, password){
			console.log('trying to login');
			return $http.post('http://localhost:3000/api/login', {params : {username : username, password: password}});
		}
	};
}]);