'use strict';

let maxClicks = 25;
let attempts = 0;

let leftImage = document.getElementById('leftimg');
let centerImage = document.getElementById('centerimg');
let rightImage = document.getElementById('rightimg');

let objectArr = [];
let arrName = [];
let arrVote = [];
let arrShown = [];
let arrImg = [];

function Busmall(name, source) {
    this.name = name;
    this.source = source;
    this.shownImg = 0;
    this.vote = 0;
    objectArr.push(this);
    arrName.push(this.name);

}

function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random() * objectArr.length);
    return randomIndex;
}


new Busmall('bag', 'img/bag.jpg');
new Busmall('banana', 'img/banana.jpg');
new Busmall('bathroom', 'img/bathroom.jpg');
new Busmall('boots', 'img/boots.jpg');
new Busmall('breakfast', 'img/breakfast.jpg');
new Busmall('bubblegum', 'img/bubblegum.jpg');
new Busmall('chair', 'img/chair.jpg');
new Busmall('cthulhu', 'img/cthulhu.jpg');
new Busmall('dog-duck', 'img/dog-duck.jpg');
new Busmall('dragon', 'img/dragon.jpg');
new Busmall('pen', 'img/pen.jpg');
new Busmall('pet-sweep', 'img/pet-sweep.jpg');
new Busmall('scissors', 'img/scissors.jpg');
new Busmall('shark', 'img/shark.jpg');
new Busmall('sweep', 'img/sweep.png');
new Busmall('tauntaun', 'img/tauntaun.jpg');
new Busmall('unicorn', 'img/unicorn.jpg');
new Busmall('usb', 'img/usb.gif');
new Busmall('water-can', 'img/water-can.jpg');
new Busmall('wine-glass', 'img/wine-glass.jpg');




let leftIndex = -1;
let centerIndex = -1;
let rightIndex = -1;
function renderImages() {
                    //-1
    let arrImg = [leftIndex,centerIndex,rightIndex];

    leftIndex = generateRandomIndex(); //3
    centerIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
    console.log(arrImg);
    while(arrImg.includes(leftIndex)){
        leftIndex = generateRandomIndex();
    }
    while(leftIndex === centerIndex  || arrImg.includes(centerIndex)){
        centerIndex = generateRandomIndex()
    }
    while(rightIndex === leftIndex || rightIndex === centerIndex || arrImg.includes(rightIndex)){
        rightIndex= generateRandomIndex();
    }
    // while (leftIndex === rightIndex || leftIndex === centerIndex || centerIndex === rightIndex || arrImg.includes(leftIndex) || arrImg.includes(rightIndex) || arrImg.includes(centerIndex)) {
    //     console.log('infinte ???')

    //     leftIndex = generateRandomIndex();
    //     centerIndex = generateRandomIndex();
    //     rightIndex = generateRandomIndex();


    //     //     //  function images(){
    //     //     //      for(j=0 ;j<arrImg.length;j++){
    //     //     //         arrImg[j].push()
    //     //     //      }

    //     //     //  }


    // if (leftIndex = objectArr.includes(leftIndex)){
    //     leftIndex = generateRandomIndex();
    // }else if (centerIndex = objectArr.includes(centerIndex)){
    //     centerIndex = generateRandomIndex();
    // }else{
    //     leftIndex = generateRandomIndex();
    // }

    leftImage.setAttribute('src', objectArr[leftIndex].source);
    objectArr[leftIndex].shownImg++;
    centerImage.setAttribute('src', objectArr[centerIndex].source);
    objectArr[centerIndex].shownImg++;
    rightImage.setAttribute('src', objectArr[rightIndex].source);
    objectArr[rightIndex].shownImg++;


}

renderImages();
let button = document.getElementById('button');
button.addEventListener('click', clickOn);


leftImage.addEventListener('click', clickOn);
centerImage.addEventListener('click', clickOn);
rightImage.addEventListener('click', clickOn);


function clickOn(event) {
    attempts++;

    if (attempts <= maxClicks) {
        if (event.target.id === 'leftimg') {
            objectArr[leftIndex].vote++;

        } else if (event.target.id === 'centerimg') {
            objectArr[centerIndex].vote++;

        } else {
            objectArr[rightIndex].vote++;
        }
        setVotes();
        renderImages();


    }
    else {


        let unlist = document.getElementById('unlist');
        let li;
        for (let i = 0; i < objectArr.length; i++) {
            li = document.createElement('li');
            unlist.appendChild(li);
            li.textContent = `${objectArr[i].name} had ${objectArr[i].vote} votes , and was seen ${objectArr[i].shownImg} times.`
        }


        chartRender();
        leftImage.removeEventListener('click', clickOn);
        centerImage.removeEventListener('click', clickOn);
        rightImage.removeEventListener('click', clickOn);
        

        for (let x = 0; x < objectArr.length; x++) {
            arrVote.push(objectArr[x].vote);
            arrShown.push(objectArr[x].shownImg);
        }

    }

}






function chartRender() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: arrName,
            datasets: [{
                label: 'BusMall Votes',
                backgroundColor: [
                    "#800000",
                    "#FFE4B5",
                    "#A52A2A",
                    "#B22222",
                    "#DC143C",
                    "#FF0000",
                    "#FF6347",
                    "#FF7F50",
                    "#CD5C5C",
                    "#F08080",
                    "#E9967A",
                    "#FA8072",
                    "#FFA07A",
                    "#EE82EE",
                    "#FF00FF",
                    "#DA70D6",
                    "#C71585",
                    "#DB7093",
                    "#FFB6C1",
                    "#FFC0CB",

                ],
                borderColor: 'rgb(255, 99, 132)',
                data: arrVote,
            }, {
                label: 'BusMall Displayed',
                backgroundColor: [
                    "#FF4500",
                    "#FF8C00",
                    "#FFA500",
                    "#FFD700",
                    "#B8860B",
                    "#DAA520",
                    "#EEE8AA",
                    "#BDB76B",
                    "#F0E68C",
                    "#808000",
                    "#FFFF00",
                    "#9ACD32",
                    "#556B2F",
                    "#6B8E23",
                    "#7CFC00",
                    "#ADFF2F",
                    "#32CD32",
                    "#90EE90",
                    "#00FA9A",
                    "#3CB371",

                ],
                borderColor: 'rgb(155,100,30)',
                data: arrShown,


            }]
        },

        options: {}
    });

}

// function savedOrders(){
//     let order = JSON.stringify(objectArr);
//     localStorage.setItem('AllOrders', order);
//   }


//   function getOrder(){
//     let gettingOrder = localStorage.getItem('AllOrders');
//     let list = JSON.parse(gettingOrder);

//     if(list){ 
//       objectArr = list;
//     }else{
//       objectArr = [];
//     }
//     renderImages();
//   }
// getOrder();




function setVotes() {
    let setpic = JSON.stringify(objectArr);
    localStorage.setItem('allVotes', setpic);
}

function getVotes() {
    let gitpic = localStorage.getItem('allVotes');
    let pics = JSON.parse(gitpic);

    if (pics) {
        objectArr = pics;
    } else {
        objectArr = [];
    }
    renderImages();
}
getVotes();


button.removeEventListener('click', clickOn);
