import data from './data.json' assert type {'json'};
console.log(data);

fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

const memory 