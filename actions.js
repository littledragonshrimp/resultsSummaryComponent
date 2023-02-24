
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        //Score and genSummaryItems (JS inputs)
        let summaryItems = document.getElementById("summaryItems");
        let genSummaryItems = "";

        // Average of scores (JS inputs)
        let result = document.getElementById("resultScore");
        let genResultAvg = "";
        console.log(genResultAvg);

        // 
        let scoreSum = 0;

        json.forEach(item => {
            scoreSum += item.score;
        });
        
        // derive the average by dividing the total points by number of categories
        const scoreAvg = scoreSum / json.length;
        
        // use rounding to get an integer instead of a decimal
        const resultAvg = Math.round(scoreAvg);
        //END average of scores JS
        ////////////////

        ////////////
        //BEGIN js inputs for backgrounds
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
        //END genSummaryItems
        //////////////////////
        summaryItems.innerHTML = genSummaryItems;
        result.innerHTML = resultAvg;
    });

