'use strict';

let maxClicks=25;
let attempts=0;

let leftImage = document.getElementById('leftimg');
let centerImage = document.getElementById('centerimg');
let rightImage = document.getElementById('rightimg');

let objectArr = [];

function Busmall(name,source){
    this.name = name;
    this.source = source;
    this.shownImg = 0;
    this.vote=0;
    objectArr.push(this);
}

new Busmall('bag','img/bag.jpg');
new Busmall('banana','img/banana.jpg');
new Busmall('bathroom','img/bathroom.jpg');
new Busmall('boots','img/boots.jpg');
new Busmall('breakfast','img/breakfast.jpg');
new Busmall('bubblegum','img/bubblegum.jpg');
new Busmall('chair','img/chair.jpg');
new Busmall('cthulhu','img/cthulhu.jpg');
new Busmall('dog-duck','img/dog-duck.jpg');
new Busmall('dragon','img/dragon.jpg');
new Busmall('pen','img/pen.jpg');
new Busmall('pet-sweep','img/pet-sweep.jpg');
new Busmall('scissors','img/scissors.jpg');
new Busmall('shark','img/shark.jpg');
new Busmall('sweep','img/sweep.png');
new Busmall('tauntaun','img/tauntaun.jpg');
new Busmall('unicorn','img/unicorn.jpg');
new Busmall('usb','img/usb.gif');
new Busmall('water-can','img/water-can.jpg');
new Busmall('wine-glass','img/wine-glass.jpg');


let leftIndex;
let centerIndex;
let rightIndex;
function renderImages(){
    leftIndex = generateRandomIndex();
    centerIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();

    while(leftIndex === rightIndex || leftIndex === centerIndex || centerIndex === rightImage){
        centerIndex = generateRandomIndex();
    }

    leftImage.setAttribute('src',objectArr[leftIndex].source);
    centerImage.setAttribute('src',objectArr[centerIndex].source);
    rightImage.setAttribute('src',objectArr[rightIndex].source);


    // if(leftIndex === centerIndex){
    //     leftIndex = generateRandomIndex();
    // }else if(centerIndex === rightIndex){
    //     centerIndex = generateRandomIndex();
    // }else if(leftIndex === rightIndex){
    //     rightIndex = generateRandomIndex();
    // }
}
renderImages();

leftImage.addEventListener('click' , clickOn);
centerImage.addEventListener('click' , clickOn);
rightImage.addEventListener('click' ,clickOn);

function clickOn(event){
    attempts++;

    if(attempts <= maxClicks){
        if(event.target.id === 'leftimg'){
            objectArr[leftIndex].vote++;
            objectArr[leftIndex].shownImg++;
            objectArr[centerIndex].shownImg++;
            objectArr[rightIndex].shownImg++;
        }else if(event.target.id === 'centerimg'){
            objectArr[centerIndex].vote++;
            objectArr[centerIndex].shownImg++;
            objectArr[leftIndex].shownImg++;
            objectArr[rightIndex].shownImg++;
        }else{
            objectArr[rightIndex].vote++;
            objectArr[rightIndex].shownImg++;
            objectArr[leftIndex].shownImg++;
            objectArr[centerIndex].shownImg++;
    }
    renderImages();
        
        
    }
    else{
         
        let unlist = document.getElementById('unlist');
        let li;
        for(let i=0; i<objectArr.length; i++){
            li = document.createElement('li');
            unlist.appendChild(li);
            li.textContent=`${objectArr[i].name} had ${objectArr[i].vote} , and was seen ${objectArr[i].shownImg} times.`

        }
        leftImage.removeEventListener('click',clickOn);
        centerImage.removeEventListener('click',clickOn);
        rightImage.removeEventListener('click',clickOn);


    }
}

function generateRandomIndex(){
let randomIndex = Math.floor(Math.random() * objectArr.length); 
return randomIndex;
}


