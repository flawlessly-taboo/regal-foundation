var tabooApp = angular.module('tabooApp', ['ui.router'], 'ngAnimate');

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

tabooApp.module('ngRepeat', ['ngAnimate'].controller('itemCtrl', function($scope) {
	$scope.bras = [
		{"name":"Adorable Hearts Bra", "price":"29.99", "img":"img/ProductImg/Bras/Adorable Hearts Bra.jpg"},
		{"name":"Black and Red Bra", "price":"29.99", "img":"img/ProductImg/Bras/Black and Red Bra.jpg"},
		{"name":"Daisy Bra", "price":"29.99", "img":"img/ProductImg/Bras/Daisy Bra.jpg"},
		{"name":"Fish Bra", "price":"29.99", "img":"img/ProductImg/Bras/Fish Bra.jpg"},
		{"name":"Red and Black Bra", "price":"29.99", "img":"img/ProductImg/Bras/Red and Black Bra.jpg"},
		{"name":"Shiny Pink Bra", "price":"29.99", "img":"img/ProductImg/Bras/Shiny Pink Bra.jpg"},
		{"name":"Sunflower Bra", "price":"29.99", "img":"img/ProductImg/Bras/Sunflower Bra.jpg"},
		{"name":"Swedish Fish Bra", "price":"29.99", "img":"img/ProductImg/Bras/Swedish Fish Bra.jpg"},
		{"name":"Watercolor Bra", "price":"29.99", "img":"img/ProductImg/Bras/Watercolor Bra.jpg"}
	];
	$scope.cheeky = [
		{"name":"Adorable Hearts Bra", "price":"29.99", "img":"img/ProductImg/Bras/Adorable Hearts Bra.jpg"},
		{"name":"Black and Red Bra", "price":"29.99", "img":"img/ProductImg/Bras/Black and Red Bra.jpg"},
		{"name":"Daisy Bra", "price":"29.99", "img":"img/ProductImg/Bras/Daisy Bra.jpg"},
		{"name":"Fish Bra", "price":"29.99", "img":"img/ProductImg/Bras/Fish Bra.jpg"},
		{"name":"Red and Black Bra", "price":"29.99", "img":"img/ProductImg/Bras/Red and Black Bra.jpg"},
		{"name":"Shiny Pink Bra", "price":"29.99", "img":"img/ProductImg/Bras/Shiny Pink Bra.jpg"},
		{"name":"Sunflower Bra", "price":"29.99", "img":"img/ProductImg/Bras/Sunflower Bra.jpg"},
		{"name":"Swedish Fish Bra", "price":"29.99", "img":"img/ProductImg/Bras/Swedish Fish Bra.jpg"},
		{"name":"Watercolor Bra", "price":"29.99", "img":"img/ProductImg/Bras/Watercolor Bra.jpg"}
	];
	$scope.fullcuts = [
		
	];
	$scope.lowrises = [
		
	];
	$scope.sets = [
		
	];
	$scope.splitbacks = [
		
	];
	$scope.thongs = [
		
	];
}));