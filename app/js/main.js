var navProductOne = document.getElementById('product-one');
var navProductTwo = document.getElementById('product-two');
var navProductThree = document.getElementById('product-three');
var navProductFour = document.getElementById('product-four');
var navProductFive = document.getElementById('product-five');
var navProductSix = document.getElementById('product-six');
var navProductSeven = document.getElementById('product-seven');

var productContentOne = document.getElementById('product-content-one');
var productContentTwo = document.getElementById('product-content-two');
var productContentThree = document.getElementById('product-content-three');
var productContentFour = document.getElementById('product-content-four');
var productContentFive = document.getElementById('product-content-five');
var productContentSix = document.getElementById('product-content-six');
var productContentSeven = document.getElementById('product-content-seven');


var navAbout = document.getElementById('about');
var navContact = document.getElementById('contact');

var aboutContent = document.getElementById('aboutContent');
var contactContent = document.getElementById('contactContent');

var productsContainer = document.getElementById('productsContainer');
var productContainer = document.getElementById('productContainer');

var btnClose = document.getElementById('btnClose');

function hideAllProductContent() {
    productContentOne.style.display = "none";
    productContentTwo.style.display = "none";
    productContentThree.style.display = "none";
    productContentFour.style.display = "none";
    productContentFive.style.display = "none";
    productContentSix.style.display = "none";
    productContentSeven.style.display = "none";
}


window.onload = function() {


};



function removeClassActive() {
    navProductOne.className = "";
    navProductTwo.className = "";
    navProductThree.className = "";
    navProductFour.className = "";
    navProductFive.className = "";
    navProductSix.className = "";
    navProductSeven.className = "";

}


function displayProduct() {
    removeClassActive();
    hideAllProductContent();
    productContainer.style.bottom = "0";
    btnClose.style.display = "block";
}
//
// navAbout.onclick = function () {
//   aboutContent.style.left = "10em";
//
// };
//
//
// navContact.onclick = function () {
//   contactContent.style.left = "10em";
//
// };

btnClose.onclick = function() {

      removeClassActive();
      hideAllProductContent();
      productContainer.style.bottom = "-100%";

};

navProductOne.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentOne.style.display = "block";
});

navProductTwo.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentTwo.style.display = "block";
});
navProductThree.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentThree.style.display = "block";
});
navProductFour.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentFour.style.display = "block";
});
navProductFive.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentFive.style.display = "block";
});
navProductSix.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentSix.style.display = "block";
});
navProductSeven.addEventListener('click', function() {
    displayProduct();
    this.classList.toggle('activeLi');

    productContentSeven.style.display = "block";
});
