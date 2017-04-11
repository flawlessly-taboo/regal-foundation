var tabooApp = angular.module('tabooApp', ['ui.router']);

tabooApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/home");

	var homeState = {
		name: 'home',
		url: '/home',
		templateUrl: '../templates/home.html'
	}
	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: '../templates/about_us.html'
	}
	var braState = {
		name: 'bras',
		url: '/bras',
		templateUrl: '../templates/bras.html'
	}
	var cheekyState = {
		name: 'cheeky',
		url: '/cheeky',
		templateUrl: '../templates/cheeky.html'
	}
	var fullcutState = {
		name: 'fullcut',
		url: '/fullcut',
		templateUrl: '../templates/fullcut.html'
	}
	var lowriseState = {
		name: 'lowrise',
		url: '/lowrise',
		templateUrl: '../templates/lowrise.html'
	}
	var setState = {
		name: 'sets',
		url: '/sets',
		templateUrl: '../templates/sets.html'
	}
	var splitbackState = {
		name: 'splitback',
		url: '/splitback',
		templateUrl: '../templates/splitback.html'
	}
	var thongState = {
		name: 'thongs',
		url: '/thongs',
		templateUrl: '../templates/thongs.html'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
	$stateProvider.state(braState);
	$stateProvider.state(cheekyState);
	$stateProvider.state(fullcutState);
	$stateProvider.state(lowriseState);
	$stateProvider.state(setState);
	$stateProvider.state(splitbackState);
	$stateProvider.state(thongState);

});


tabooApp.controller('itemCtrl', function() {
		//lists all items on sale in a particular category
});