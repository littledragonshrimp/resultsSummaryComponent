//import data from './data.json' assert type {'json'};
//console.log(data);

//  fetch("./data.json")
//      .then(res => {
//          if (res.ok) {
//              console.log("SUCCESS")
//          } else{
//              console.log("Not Successful")
//          }
//      })
//      .then(data => console.log(data.json))
//      .catch(error => console.log("ERROR"))
// 
// const category = JSON.parse(category.json[0]);
// console.log(category);


// var data = JSON.parse(DATA);
// 
// var list = document.createElement("ul");
// for (let i of data) { var item =
// document.createElement("li"); list.appendChild(item)
// }
// 
// document.getElementsById(ID).appendChild(list);

// const data = require('./data.json');
// 
// console.log(data.category.map(()))
// 
// const category = console.log(data.category[1]);

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        let summaryItems = document.getElementById("summaryItems");
        let genSummaryItems = "";

        let resultAvg = document.getElementById("resultScore");
        let genResultAvg = "";
        console.log(genResultAvg);

     //   let scores = json.forEach(item =>) {
     //       
     //   }
     //   var as = JSON.parse(jstring);
     //   let averageScorePlacement = document.getElementById("resultScore");

        // score information
        // let averageScore = document.getElementsByid("resultScore");
//
        //json.forEach(item.score =>{
        //    
        //})
//
//        json.forEach(item =>) {
//
//        }
        json.forEach(item => {
            genResultAvg += '${item.score/item.length}'
        });

        json.forEach(item => {
            genSummaryItems +=
            `<li class="summary-item" 
                style=  "background: hsla(${item.color.hue}, ${item.color.saturation}, ${item.color.lightness}, 0.2); 
                        color: hsl(${item.color.hue}, ${item.color.saturation}, ${item.color.lightness});">

                <img src="${item.icon}" alt="${item.category} Icon">
                
                <p class="item-name">${item.category}</p>
                
                <p class="item-score">${item.score}</p>
                
                <p class="item-max-score">/ 100</p>
            </li>`
        });
        summaryItems.innerHTML = genSummaryItems;
    });

