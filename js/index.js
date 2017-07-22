var tabooApp = angular.module('tabooApp', ['ui.router']);

tabooApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/home");

	var homeState = {
		name: 'home',
		url: '/home',
		templateUrl: '../templates/home.html',
		onEnter: function(){
			initSimpleCart();
			checkState();
		}
	}
	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: '../templates/about_us.html',
		onEnter: function(){
			initSimpleCart();
			checkState();
		}
	}
	var braState = {
		name: 'bras',
		url: '/bras',
		templateUrl: '../templates/bras.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var cheekyState = {
		name: 'cheeky',
		url: '/cheeky',
		templateUrl: '../templates/cheeky.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var fullcutState = {
		name: 'fullcut',
		url: '/fullcut',
		templateUrl: '../templates/fullcut.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var lowriseState = {
		name: 'lowrise',
		url: '/lowrise',
		templateUrl: '../templates/lowrise.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var setState = {
		name: 'sets',
		url: '/sets',
		templateUrl: '../templates/sets.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var peekabooState = {
		name: 'peekaboos',
		url: '/peekaboos',
		templateUrl: '../templates/peekaboos.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var thongState = {
		name: 'thongs',
		url: '/thongs',
		templateUrl: '../templates/thongs.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var gaffState = {
		name: 'gaff',
		url: '/gaff',
		templateUrl: '../templates/gaff.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var gstringState = {
		name: 'gstring',
		url: '/gstring',
		templateUrl: '../templates/gstring.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var sissyState = {
		name: 'sissy',
		url: '/sissy',
		templateUrl: '../templates/sissy.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var boxerState = {
		name: 'boxer',
		url: '/boxer',
		templateUrl: '../templates/boxer.html',
		onEnter: function(){
			initSimpleCart();
		}
	}
	var checkoutState = {
		name: 'checkout',
		url: '/checkout',
		templateUrl: '../templates/checkout.html',
		onEnter: function(){
			initSimpleCart();
			checkState();
		}
	}


	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
	$stateProvider.state(braState);
	$stateProvider.state(cheekyState);
	$stateProvider.state(fullcutState);
	$stateProvider.state(lowriseState);
	$stateProvider.state(setState);
	$stateProvider.state(peekabooState);
	$stateProvider.state(thongState);
	$stateProvider.state(gaffState);
	$stateProvider.state(gstringState);
	$stateProvider.state(sissyState);
	$stateProvider.state(boxerState);
	$stateProvider.state(checkoutState);

});


tabooApp.controller('itemCtrl', function($scope, $state) {

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
	$scope.boxer = [];
	$scope.bras = [
		{"name":"Adorable Hearts Bra", "price":"24.99", "img":"img/ProductImg/Bras/Adorable Hearts Bra.jpg"},
		{"name":"Black and Red Bra", "price":"24.99", "img":"img/ProductImg/Bras/Black and Red Bra.jpg"},
		{"name":"Daisy Bra", "price":"24.99", "img":"img/ProductImg/Bras/Daisy Bra.jpg"},
		{"name":"Fish Bra", "price":"24.99", "img":"img/ProductImg/Bras/Fish Bra.jpg"},
		{"name":"Red and Black Bra", "price":"24.99", "img":"img/ProductImg/Bras/Red and Black Bra.jpg"},
		{"name":"Shiny Pink Bra", "price":"24.99", "img":"img/ProductImg/Bras/Shiny Pink Bra.jpg"},
		{"name":"Sunflower Bra", "price":"24.99", "img":"img/ProductImg/Bras/Sunflower Bra.jpg"},
		{"name":"Swedish Fish Bra", "price":"24.99", "img":"img/ProductImg/Bras/Swedish Fish Bra.jpg"},
		{"name":"Watercolor Bra", "price":"24.99", "img":"img/ProductImg/Bras/Watercolor Bra.jpg"}
	];
	$scope.cheeky = [
		{"name":"Adorable Hearts Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Adorable Hearts.jpg"},
		{"name":"Black and Red Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Black and Red.jpg"},
		{"name":"Blue Floral Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Blue Floral.jpg"},
		{"name":"Brilliant Bouquet Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Brilliant Bouquet.jpg"},
		{"name":"Daisy Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Daisy.jpg"},
		{"name":"English Garden Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/English Garden.jpg"},
		{"name":"Fishy Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Fishy.jpg"},
		{"name":"Midnight Garden Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Midnight Garden.jpg"},
		{"name":"Paisley Passion Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Paisley Passion.jpg"},
		{"name":"Pastel Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Pastel.jpg"},
		{"name":"Plum Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Plum.jpg"},
		{"name":"Red and Black Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Red and Black.jpg"},
		{"name":"Romantic Ruffle Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Romantic Ruffle.jpg"},
		{"name":"Shiny Pink Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Shiny Pink.jpg"},
		{"name":"Sunflower Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Sunflower.jpg"},
		{"name":"Swedish Fish Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Swedish Fish.jpg"},
		{"name":"Sweethearts Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Sweethearts.jpg"},
		{"name":"Watercolor Cheeky", "price":"24.99", "img":"img/ProductImg/Cheeky/Watercolor.jpg"}
	];
	$scope.fullcuts = [
		{"name":"Red and Black Full Cut", "price":"24.99", "img":"img/ProductImg/Full-Cut/Red and Black.jpg"},
	];
	$scope.gaff = [
		{"name":"Black Lace", "price":"27.99", "img":"img/ProductImg/Gaffs/Black Lace.jpg"},
		{"name":"Jungle Print Mesh", "price":"27.99", "img":"img/ProductImg/Gaffs/Jungle Print Mesh.jpg"},
		{"name":"Peach and Turquoise LAce", "price":"27.99", "img":"img/ProductImg/Gaffs/Peach and Turquoise Lace.jpg"},
		{"name":"Purple Floral Mesh", "price":"27.99", "img":"img/ProductImg/Gaffs/Purple Floral Mesh.jpg"},
		{"name":"Sheer Tan Lace", "price":"27.99", "img":"img/ProductImg/Gaffs/Sheer Tan Lace.jpg"},
	];
	$scope.lowrises = [
		{"name":"Adorable Hearts Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Adorable Hearts.jpg"},
		{"name":"Black and Red Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Black and Red.jpg"},
		{"name":"Blue Floral Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Blue Floral.jpg"},
		{"name":"Brilliant Bouquet Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Brilliant Bouquet.jpg"},
		{"name":"Daisy Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Daisy.jpg"},
		{"name":"English Garden Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/English Garden.jpg"},
		{"name":"Fishy Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Fishy.jpg"},
		{"name":"Midnight Garden Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Midnight Garden.jpg"},
		{"name":"Paisley Passion Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Paisley Passion.jpg"},
		{"name":"Pastel Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Pastel.jpg"},
		{"name":"Plum Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Plum.jpg"},
		{"name":"Red and Black Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Red and Black.jpg"},
		{"name":"Roller Skates Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Roller Skates.jpg"},
		{"name":"Shiny Pink Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Shiny Pink.jpg"},
		{"name":"Sunflower Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Sunflower.jpg"},
		{"name":"Swedish Fish Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Swedish Fish.jpg"},
		{"name":"Sweethearts Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Sweethearts.jpg"},
		{"name":"Watercolor Low Rise", "price":"24.99", "img":"img/ProductImg/Low-Rise/Watercolor.jpg"}
		
	];
	$scope.sets = [
		{"name":"Adorable Hearts Set", "price":"47.99", "img":"img/ProductImg/Sets/Adorable Hearts.jpg"},
		{"name":"Black and Red Set", "price":"47.99", "img":"img/ProductImg/Sets/Black and Red.jpg"},
		{"name":"Daisy Set", "price":"47.99", "img":"img/ProductImg/Sets/Daisy.jpg"},
		{"name":"Fishy Set", "price":"47.99", "img":"img/ProductImg/Sets/Fishy.jpg"},
		{"name":"Shiny Pink Set", "price":"47.99", "img":"img/ProductImg/Sets/Shiny Pink.jpg"},
		{"name":"Sunflower Set", "price":"47.99", "img":"img/ProductImg/Sets/Sunflower.jpg"},
		{"name":"Swedish Fish Set", "price":"47.99", "img":"img/ProductImg/Sets/Swedish Fish.jpg"},
		{"name":"Watercolor Set", "price":"47.99", "img":"img/ProductImg/Sets/Watercolor.jpg"}
	];
	$scope.peekaboos = [
		{"name":"Adorable Hearts Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Adorable Hearts.jpg"},
		{"name":"English Garden Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/English Garden.jpg"},
        {"name":"Fishy Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Fishy.jpg"},
        {"name":"Midnight Garden Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Midnight Garden.jpg"},
		{"name":"Paisley Passion Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Paisley Passion.jpg"},
		{"name":"Roller Skates Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Roller Skates.jpg"},
		{"name":"Shiny Pink Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Shiny Pink.jpg"},
		{"name":"Spring Flowers Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Split-Back/Spring Flowers.jpg"}
	];
	$scope.sissy = [
		{"name":"Black Lace G-String", "price":"27.99", "img":"img/ProductImg/Sissy/Black Lace G-String.jpg"},
		{"name":"Black Lace Thong", "price":"27.99", "img":"img/ProductImg/Sissy/Black Lace Thong.jpg"},
		{"name":"Girly Gingham Thong", "price":"27.99", "img":"img/ProductImg/Sissy/Girly Gingham Thong.jpg"},
		{"name":"Pink Nylon Cheeky", "price":"27.99", "img":"img/ProductImg/Sissy/Pink Nylon Cheeky.jpg"},
		{"name":"Pink Nylon Full Cut", "price":"27.99", "img":"img/ProductImg/Sissy/Pink Nylon Full Cut.jpg"},
		{"name":"Pink Nylon Low-Rise", "price":"27.99", "img":"img/ProductImg/Sissy/Pink Nylon Low-Rise.jpg"},
		{"name":"Pink Nylon Peek-A-Boo", "price":"27.99", "img":"img/ProductImg/Sissy/Pink Nylon Peek-A-Boo.jpg"},
		{"name":"White Lace G-String", "price":"27.99", "img":"img/ProductImg/Sissy/White Lace G-String.jpg"},
		{"name":"White Nylon Full-Cut", "price":"27.99", "img":"img/ProductImg/Sissy/White Nylon Full Cut.jpg"},
		{"name":"White Nylon Low-Rise", "price":"27.99", "img":"img/ProductImg/Sissy/White Nylon Low-Rise.jpg"}
	];
	$scope.thongs = [
		{"name":"Adorable Hearts Thong", "price":"24.99", "img":"img/ProductImg/Thongs/Adorable Hearts.jpg"},
		{"name":"English Garden Thong", "price":"24.99", "img":"img/ProductImg/Thongs/English Garden.jpg"},
        {"name":"Fishy Thong", "price":"24.99", "img":"img/ProductImg/Thongs/Fishy.jpg"},
        {"name":"Gingham Thong", "price":"24.99", "img":"img/ProductImg/Thongs/Gingham.jpg"},
		{"name":"Paisley Passion Thong", "price":"24.99", "img":"img/ProductImg/Thongs/Paisley Passion.jpg"},
		{"name":"Shiny Pink Thong", "price":"24.99", "img":"img/ProductImg/Thongs/Shiny Pink.jpg"},
		{"name":"Spring Flowers Thong", "price":"24.99", "img":"img/ProductImg/Thongs/Spring Flowers.jpg"}
	];
});

//Additional functions for templates
function prodFunction() {
    document.getElementById("products").classList.toggle("show");
}
//lightGallery(document.getElementById('lightgallery'));

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// SimpleCart configuration
function initSimpleCart(){
		simpleCart({
		  cartColumns: [
		        { attr: "name", label: "Name"},
		        { view: "currency", attr: "price", label: "Price"},
		        { view: "decrement", label: false},
		        { attr: "quantity", label: "Qty"},
		        { view: "increment", label: false},
		        { view: "size", attr: "size", label: "Size"},
		        { view: "panty", attr: "panty", label: "Panty Type" },
		        { view: "currency", attr: "total", label: "SubTotal" },
		        { view: "remove", text: "Remove", label: false }
		    ],
		    cartStyle: "table", 
		    checkout: { 
		      type: "PayPal" , 
		      email: "you@yours.com",        
		      // use paypal sandbox, default is false
		      sandbox: true , 
		      // http method for form, "POST" or "GET", default is "POST"
		      method: "GET"
		    },
		    tax:    0.051,
		    currency:   "USD",
		    language: "english-us"
		});
}
function checkState(){
		if ($(".product-container").length > 0 || $(".home-text").length > 0 || $(".about-text").length > 0)  {
			location.reload(true);
		}
}