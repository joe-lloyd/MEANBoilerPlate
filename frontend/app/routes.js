angular.module('myAppRouter', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/Home');

	$stateProvider

		// HOME STATES AND NESTED VIEWS ========================================
		.state('Home', {
			url: '/Home',
			templateUrl: 'app/modules/home/home.html'
		});

		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		// .state('About', {
		// 	url: '/About',
		// 	templateUrl: 'app/components/about/about.html'
		// })

		// // SERVICES PAGE AND MULTIPLE NAMED VIEWS =================================
		// .state('Services', {
		// 	url: '/Services',
		// 	templateUrl: 'app/components/services/services.html'
		// })

		// // CONTACT PAGE AND MULTIPLE NAMED VIEWS =================================
		// .state('Contact', {
		// 	url: '/Contact',
		// 	templateUrl: 'app/components/contact/contact.html'
		// })

		// // LOGIN PAGE ======================================================
		// .state('Login', {
		// 	url: '/Login',
		// 	templateUrl: 'app/components/login/login.html'
		// });

});