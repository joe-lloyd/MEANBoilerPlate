angular.module('storeHomeService', []).factory('homeFactory', [ '$http',  function($http){
	return{
		getStuff: function(){
			console.log('users hit');
			return $http.get('http://localhost:3000/api/users');
		}
	};
}]);