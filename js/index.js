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


tabooApp.controller('itemCtrl', function($scope) {

	// $scope.viewItem = function (selectedItem) {
	// 	var modalInstance = $modal.open({
	// 		templateUrl: 'templates/modalContent.html',
	// 		controller: 'modalCtrl',
	// 		resolve: {
	// 			item: function(){
	// 				return selectedItem;
	// 			}
	// 		}
	// 	})
	// }

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
		{"name":"Adorable Hearts", "price":"29.99", "img":"img/ProductImg/Cheeky/Adorable Hearts.jpg"},
		{"name":"Black and Red", "price":"29.99", "img":"img/ProductImg/Cheeky/Black and Red.jpg"},
		{"name":"Blue Floral", "price":"29.99", "img":"img/ProductImg/Cheeky/Blue Floral.jpg"},
		{"name":"Brilliant Bouquet", "price":"29.99", "img":"img/ProductImg/Cheeky/Brilliant Bouquet.jpg"},
		{"name":"Daisy", "price":"29.99", "img":"img/ProductImg/Cheeky/Daisy.jpg"},
		{"name":"English Garden", "price":"29.99", "img":"img/ProductImg/Cheeky/English Garden.jpg"},
		{"name":"Fishy", "price":"29.99", "img":"img/ProductImg/Cheeky/Fishy.jpg"},
		{"name":"Midnight Garden", "price":"29.99", "img":"img/ProductImg/Cheeky/Midnight Garden.jpg"},
		{"name":"Paisley Passion", "price":"29.99", "img":"img/ProductImg/Cheeky/Paisley Passion.jpg"},
		{"name":"Pastel", "price":"29.99", "img":"img/ProductImg/Cheeky/Pastel.jpg"},
		{"name":"Plum", "price":"29.99", "img":"img/ProductImg/Cheeky/Plum.jpg"},
		{"name":"Red and Black", "price":"29.99", "img":"img/ProductImg/Cheeky/Red and Black.jpg"},
		{"name":"Romantic Ruffle", "price":"29.99", "img":"img/ProductImg/Cheeky/Romantic Ruffle.jpg"},
		{"name":"Shiny Pink", "price":"29.99", "img":"img/ProductImg/Cheeky/Shiny Pink.jpg"},
		{"name":"Sunflower", "price":"29.99", "img":"img/ProductImg/Cheeky/Sunflower.jpg"},
		{"name":"Swedish Fish", "price":"29.99", "img":"img/ProductImg/Cheeky/Swedish Fish.jpg"},
		{"name":"Sweethearts", "price":"29.99", "img":"img/ProductImg/Cheeky/Sweethearts.jpg"},
		{"name":"Watercolor", "price":"29.99", "img":"img/ProductImg/Cheeky/Watercolor.jpg"}
	];
	$scope.fullcuts = [
		{"name":"Red and Black", "price":"29.99", "img":"img/ProductImg/Full-Cut/Red and Black.jpg"},
	];
	$scope.lowrises = [
		{"name":"Adorable Hearts", "price":"29.99", "img":"img/ProductImg/Low-Rise/Adorable Hearts.jpg"},
		{"name":"Black and Red", "price":"29.99", "img":"img/ProductImg/Low-Rise/Black and Red.jpg"},
		{"name":"Blue Floral", "price":"29.99", "img":"img/ProductImg/Low-Rise/Blue Floral.jpg"},
		{"name":"Brilliant Bouquet", "price":"29.99", "img":"img/ProductImg/Low-Rise/Brilliant Bouquet.jpg"},
		{"name":"Daisy", "price":"29.99", "img":"img/ProductImg/Low-Rise/Daisy.jpg"},
		{"name":"English Garden", "price":"29.99", "img":"img/ProductImg/Low-Rise/English Garden.jpg"},
		{"name":"Fishy", "price":"29.99", "img":"img/ProductImg/Low-Rise/Fishy.jpg"},
		{"name":"Midnight Garden", "price":"29.99", "img":"img/ProductImg/Low-Rise/Midnight Garden.jpg"},
		{"name":"Paisley Passion", "price":"29.99", "img":"img/ProductImg/Low-Rise/Paisley Passion.jpg"},
		{"name":"Pastel", "price":"29.99", "img":"img/ProductImg/Low-Rise/Pastel.jpg"},
		{"name":"Plum", "price":"29.99", "img":"img/ProductImg/Low-Rise/Plum.jpg"},
		{"name":"Red and Black", "price":"29.99", "img":"img/ProductImg/Low-Rise/Red and Black.jpg"},
		{"name":"Roller Skates", "price":"29.99", "img":"img/ProductImg/Low-Rise/Roller Skates.jpg"},
		{"name":"Shiny Pink", "price":"29.99", "img":"img/ProductImg/Low-Rise/Shiny Pink.jpg"},
		{"name":"Sunflower", "price":"29.99", "img":"img/ProductImg/Low-Rise/Sunflower.jpg"},
		{"name":"Swedish Fish", "price":"29.99", "img":"img/ProductImg/Low-Rise/Swedish Fish.jpg"},
		{"name":"Sweethearts", "price":"29.99", "img":"img/ProductImg/Low-Rise/Sweethearts.jpg"},
		{"name":"Watercolor", "price":"29.99", "img":"img/ProductImg/Low-Rise/Watercolor.jpg"}
		
	];
	$scope.sets = [
		{"name":"Adorable Hearts", "price":"29.99", "img":"img/ProductImg/Sets/Adorable Hearts.jpg"},
		{"name":"Black and Red", "price":"29.99", "img":"img/ProductImg/Sets/Black and Red.jpg"},
		{"name":"Daisy", "price":"29.99", "img":"img/ProductImg/Sets/Daisy.jpg"},
		{"name":"Fishy", "price":"29.99", "img":"img/ProductImg/Sets/Fishy.jpg"},
		{"name":"Shiny Pink", "price":"29.99", "img":"img/ProductImg/Sets/Shiny Pink.jpg"},
		{"name":"Sunflower", "price":"29.99", "img":"img/ProductImg/Sets/Sunflower.jpg"},
		{"name":"Swedish Fish", "price":"29.99", "img":"img/ProductImg/Sets/Swedish Fish.jpg"},
		{"name":"Watercolor", "price":"29.99", "img":"img/ProductImg/Sets/Watercolor.jpg"}
	];
	$scope.splitbacks = [
		{"name":"Adorable Hearts", "price":"29.99", "img":"img/ProductImg/Split-Back/Adorable Hearts.jpg"},
		{"name":"English Garden", "price":"29.99", "img":"img/ProductImg/Split-Back/English Garden.jpg"},
        {"name":"Fishy", "price":"29.99", "img":"img/ProductImg/Split-Back/Fishy.jpg"},
        {"name":"Midnight Garden", "price":"29.99", "img":"img/ProductImg/Split-Back/Midnight Garden.jpg"},
		{"name":"Paisley Passion", "price":"29.99", "img":"img/ProductImg/Split-Back/Paisley Passion.jpg"},
		{"name":"Roller Skates", "price":"29.99", "img":"img/ProductImg/Split-Back/Roller Skates.jpg"},
		{"name":"Shiny Pink", "price":"29.99", "img":"img/ProductImg/Split-Back/Shiny Pink.jpg"},
		{"name":"Spring Flowers", "price":"29.99", "img":"img/ProductImg/Split-Back/Spring Flowers.jpg"}
	];
	$scope.thongs = [
		{"name":"Adorable Hearts", "price":"29.99", "img":"img/ProductImg/Thongs/Adorable Hearts.jpg"},
		{"name":"English Garden", "price":"29.99", "img":"img/ProductImg/Thongs/English Garden.jpg"},
        {"name":"Fishy", "price":"29.99", "img":"img/ProductImg/Thongs/Fishy.jpg"},
        {"name":"Gingham", "price":"29.99", "img":"img/ProductImg/Thongs/Gingham.jpg"},
		{"name":"Paisley Passion", "price":"29.99", "img":"img/ProductImg/Thongs/Paisley Passion.jpg"},
		{"name":"Shiny Pink", "price":"29.99", "img":"img/ProductImg/Thongs/Shiny Pink.jpg"},
		{"name":"Spring Flowers", "price":"29.99", "img":"img/ProductImg/Thongs/Spring Flowers.jpg"}
	];
});