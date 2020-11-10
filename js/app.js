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
var randomNumbers = [];
var formEl = document.getElementById("form");
var resultsEl = document.getElementById("results")
var resultsForm = document.getElementById("results-form")
var rounds = 0;
var allProducts = [];
var imageOne = document.getElementById("image-one");
var imageTwo = document.getElementById("image-two");
var imageThree = document.getElementById("image-three");
var imageTitles = [];
var imageVotes = [];




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



function voteMaster(e){
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
        displayChart();
    }
}



function randomGenerator(){
    
    return Math.floor(Math.random() * allProducts.length);
}

function randomNumberIndexCreator(){

    for( var i = 0; i < 3; i++){
        var randomNumber = randomGenerator();
        while(randomNumbers.includes(randomNumber)){
            randomNumber = randomGenerator();
        }
        randomNumbers.unshift(randomNumber);
    }

    while(randomNumbers.length>3){
        randomNumbers.pop();
    }
}

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
    showResults();
}


function showResults(){
    resultsEl.innerHTML = '';
    var createH3 = document.createElement('h3');
    createH3.textContent = ('Name  Shown  Voted  %Success')
    resultsEl.appendChild(createH3)
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

function createTitleArray(){
    for(var i = 0; i < allProducts.length; i++){
        imageTitles.push(allProducts[i].title);
    }
}

function createVoteArray(){
    for(var i = 0; i < allProducts.length; i++){
        imageVotes.push(allProducts[i].timesVoted);
    }
}



render();



formEl.addEventListener('click', voteMaster);




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
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
