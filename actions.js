//import data from './data.json' assert type {'json'};
//console.log(data);

 fetch("./data.json")
     .then(res => {
         if (res.ok) {
             console.log("SUCCESS")
         } else{
             console.log("Not Successful")
         }
     })
     .then(data => console.log(data.json))
     .catch(error => console.log("ERROR"))

const category = JSON.parse(category.json[0]);
console.log(category);


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