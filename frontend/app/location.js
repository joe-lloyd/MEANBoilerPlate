angular.module("myAppLocation", [])

.config(["$locationProvider", function($locationProvider) {
   $locationProvider.html5Mode(false);
}]);