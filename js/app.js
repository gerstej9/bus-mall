//Global Variables
var randomNumbers = [];
var formEl = document.getElementById("form");
var rounds = 0;
var allProducts = [];
var imageOne = document.getElementById("image-one");
var imageTwo = document.getElementById("image-two");
var imageThree = document.getElementById("image-three");
var imageTitles = [];
var imageVotes = [];
var canvasEl = document.getElementById("chart");



//Constructor Function
var Product = function(input, timesShown = 0, timesVoted = 0){
this.imgSource = `img/${input}`;
this.title = this.alt = input.substring(0, input.length-4);
this.timesShown = timesShown;
this.timesVoted = timesVoted;

allProducts.push(this);
}


//Object Instances
new Product('bag.jpg');
new Product('banana.jpg');
new Product('bathroom.jpg');
new Product('boots.jpg');
new Product('breakfast.jpg');
new Product('bubblegum.jpg');
new Product('chair.jpg');
new Product('cthulhu.jpg');
new Product('dog-duck.jpg');
new Product('dragon.jpg');
new Product('pen.jpg');
new Product('pet-sweep.jpg');
new Product('scissors.jpg');
new Product('shark.jpg');
new Product('tauntaun.jpg');
new Product('unicorn.jpg');
new Product('water-can.jpg');
new Product('wine-glass.jpg');
new Product('sweep.png');
new Product('usb.gif');

//Helper Functions

//Function for storing products into local storage
function storeProductLs(){
    var stringProducts = JSON.stringify(allProducts);
    localStorage.setItem('products', stringProducts);
}

//function for returning products from local storage
function returnProductsLs(){
    var productsLs = localStorage.getItem('products');
    var parsedProducts = JSON.parse(productsLs);
    generateObjectsFromLs(parsedProducts);
}

//function for turning local storage string products back into product objects
function generateObjectsFromLs(parsed){
    allProducts = [];
    for(var i = 0; i < parsed.length; i++){
        new Product(parsed[i].imgSource.substring(4), parsed[i].timesShown, parsed[i].timesVoted);
    }

}
//Event handler for each vote, adds vote to product object, renders page for 25 total rounds and then shows chart after rounds are completed. Also stores products to local storage and retrieves them after each vote
function voteCounterImageRender(e){
    e.preventDefault();
    imageClick = e.target.title;
    for(var i = 0; i < allProducts.length; i++){
        if(imageClick === allProducts[i].title){
        allProducts[i].timesVoted++;
        }
    }
    if(rounds < 25){
        render();
    }else{
        formEl.innerHTML = '';
        createCanvasTag();
        displayChart();
    }

    storeProductLs();
    returnProductsLs();

}


//Generates a random number
function randomNumberGenerator(){
    
    return Math.floor(Math.random() * allProducts.length);
}

//Generates an array of three random numbers making sure that no two subsequent rounds have the same repeat the same three numbers
function randomNumberIndexCreator(){

    for( var i = 0; i < 3; i++){
        var randomNumber = randomNumberGenerator();
        while(randomNumbers.includes(randomNumber)){
            randomNumber = randomNumberGenerator();
        }
        randomNumbers.unshift(randomNumber);
    }

    while(randomNumbers.length>3){
        randomNumbers.pop();
    }
}

//Adds three images to the page and increases the object property of times shown for each object
function render(){
    randomNumberIndexCreator();

    imageOne.src = allProducts[randomNumbers[0]].imgSource;
    imageOne.alt = allProducts[randomNumbers[0]].alt;
    imageOne.title = allProducts[randomNumbers[0]].title;
    allProducts[randomNumbers[0]].timesShown++;

    imageTwo.src = allProducts[randomNumbers[1]].imgSource;
    imageTwo.alt = allProducts[randomNumbers[1]].alt;
    imageTwo.title = allProducts[randomNumbers[1]].title;
    allProducts[randomNumbers[1]].timesShown++;

    imageThree.src = allProducts[randomNumbers[2]].imgSource;
    imageThree.alt = allProducts[randomNumbers[2]].alt;
    imageThree.title = allProducts[randomNumbers[2]].title;
    allProducts[randomNumbers[2]].timesShown++;
    rounds++
}

//Creates an array of object titles for display on the chart
function createTitleArray(){
    for(var i = 0; i < allProducts.length; i++){
        imageTitles.push(allProducts[i].title);
    }
}

///Creates an array of object votes for display on the chart
function createVoteArray(){
    for(var i = 0; i < allProducts.length; i++){
        imageVotes.push(allProducts[i].timesVoted);
    }
}

//Creates a canvas html tag for displaying the chart
function createCanvasTag(){
    createCanvas = document.createElement('canvas');
    createCanvas.setAttribute("id", "myChart")
    createCanvas.setAttribute("width", "400")
    createCanvas.setAttribute("height", "400")
    canvasEl.appendChild(createCanvas);
}

//Renders a chart of votes for each object on the page in the canvas tag
function displayChart(){
    createTitleArray();
    createVoteArray();
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imageTitles,
            datasets: [{
                label: '# of Votes',
                data: imageVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes:[{
                    ticks:{ fontSize:20,
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
            }]
            }
        }
    });
}

//Invoked Functions

//Checks to see if local storage holds products, if not it stores new product object instances else it overwrites original product instances with those in local storage
if(!localStorage.products){
    storeProductLs();
}else{
    returnProductsLs();
}

//Renders images on the page
render();

//Event listener
//Calls voteCounterImageRender function on image clicks to count votes and initiate local storage
formEl.addEventListener('click', voteCounterImageRender);





