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
    
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))
