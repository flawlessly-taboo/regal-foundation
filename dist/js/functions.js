/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function prodFunction() {
    document.getElementById("products").classList.toggle("show");
}

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

simpleCart({

  cartColumns: [
        { attr: "name", label: "Name"},
        { view: "currency", attr: "price", label: "Price"},
        { view: "decrement", label: false},
        { attr: "quantity", label: "Qty"},
        { view: "increment", label: false},
        { view: "currency", attr: "total", label: "SubTotal" },
        { view: "remove", text: "Remove", label: false}
    ],
    cartStyle: "table", 
    checkout: { 
      type: "PayPal" , 
      email: "you@yours.com" 
    },
    tax:    0.051,
    currency:   "USD",
    language: "english-us"
});