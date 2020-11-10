//TODO
//Need to figure out how to use radio buttons for adding votes
// Need to render current vote tally 
//Need to track how many times shown
//Need to calculate percentage of times voted vs. shown
//View Results button
//25 round limit
//

var radioOne = document.getElementById("selection-one");
var radioTwo = document.getElementById("selection-two");
var radioThree = document.getElementById("selection-three");
var indexOne;
var indexTwo;
var indexThree
var formEl = document.getElementById("form");
var resultsEl = document.getElementById("results")
var resultsForm = document.getElementById("results-form")
var rounds = 0;
var allProducts = [];
var imageOne = document.getElementById("image-one");
var imageTwo = document.getElementById("image-two");
var imageThree = document.getElementById("image-three");




var Product = function(input){
this.imgSource = `img/${input}`;
this.title = this.alt = input.substring(0, input.length-4);
this.timesShown = 0;
this.timesVoted = 0;
// this.percentChosen = parseInt(this.timesVoted/this.timesShown*100);

allProducts.push(this);
}




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






function randomGenerator(){
    return Math.floor(Math.random() * allProducts.length);
}

function render(){
    indexOne = randomGenerator();
    indexTwo = randomGenerator();
    indexThree = randomGenerator();
    while(indexTwo === indexOne){
        indexTwo = randomGenerator();
    }
    while(indexThree === indexOne || indexThree === indexTwo){
        indexThree = randomGenerator();
    }

    imageOne.src = allProducts[indexOne].imgSource;
    imageOne.alt = allProducts[indexOne].alt;
    imageOne.alt = allProducts[indexOne].title;
    allProducts[indexOne].timesShown++;

    imageTwo.src = allProducts[indexTwo].imgSource;
    imageTwo.alt = allProducts[indexTwo].alt;
    imageTwo.alt = allProducts[indexTwo].title;
    allProducts[indexTwo].timesShown++;

    imageThree.src = allProducts[indexThree].imgSource;
    imageThree.alt = allProducts[indexThree].alt;
    imageThree.alt = allProducts[indexThree].title;
    allProducts[indexThree].timesShown++;
    rounds++
}


function voteMaster(event){
    event.preventDefault();
    if (radioOne.checked == true){
        allProducts[indexOne].timesVoted++;
    }
    if (radioTwo.checked == true){
        allProducts[indexTwo].timesVoted++;
    }
    if (radioThree.checked == true){
        allProducts[indexThree].timesVoted++;
    }
    resultsEl.innerHTML = '';
    if(rounds < 26){
        render();
    }else{
        formEl.innerHTML = '';
        createH2 = document.createElement('h2');
        createH2.textContent = ('Thank you for your help! Click on the "generate results" button to see your contribution');
        formEl.appendChild(createH2);
    }
    radioOne.checked = false; 
    radioTwo.checked = false;
    radioThree.checked = false;
}

function showResults(event){
    event.preventDefault();
    resultsEl.innerHTML = '';
    var perecentChosen = 0
    for(var i = 0; i < allProducts.length; i++){
        if(allProducts[i].timesVoted === 0 && allProducts[i].timesShown === 0){
            percentChosen = 0
        }else {
            percentChosen = allProducts[i].timesVoted/allProducts[i].timesShown*100
        }
        var createLi = document.createElement('li');
        createLi.textContent = (`${allProducts[i].title}     ${allProducts[i].timesShown}     ${allProducts[i].timesVoted}     ${percentChosen}%`);
        resultsEl.appendChild(createLi);
    }
}

render();





formEl.addEventListener('submit', voteMaster);

resultsForm.addEventListener('submit',showResults);


