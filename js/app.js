var allProducts = [];
var imageOne = document.getElementById("image-one");
var imageTwo = document.getElementById("image-two");
var imageThree = document.getElementById("image-three");

var Product = function(name){
this.imgSource = `img/${name}.jpg`;
this.title = this.alt = name;

allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');
//Need to add .gif file
// new Product('bag');

function randomGenerator(){
    return Math.floor(Math.random() * allProducts.length);
}

function render(){
    var indexOne = randomGenerator();
    var indexTwo = randomGenerator();
    var indexThree = randomGenerator();

    imageOne.src = allProducts[indexOne].imgSource;
    imageOne.alt = allProducts[indexOne].alt;
    imageOne.alt = allProducts[indexOne].title;

    imageTwo.src = allProducts[indexTwo].imgSource;
    imageTwo.alt = allProducts[indexTwo].alt;
    imageTwo.alt = allProducts[indexTwo].title;

    imageThree.src = allProducts[indexThree].imgSource;
    imageThree.alt = allProducts[indexThree].alt;
    imageThree.alt = allProducts[indexThree].title;
}
console.log(allProducts);
render();