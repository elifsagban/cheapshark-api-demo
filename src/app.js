
  
  fetch("https://www.cheapshark.com/api/1.0/deals?title=batman&onSale=1").then(response => response.json()).then(games =>{

    let output = "<div class='row'>";

    games.forEach( function(game){
      output += `<div class="col-md-4 col-sm-6 col-xs-12 col-centered"> <div class="card"><img src="${game.thumb}" class="card-img-top"> <div class="card-body"><span class="title">${game.title} </span>  <div class="price"><span class="normal-price">${game.normalPrice}$</span>  <span class="sale-price">${game.salePrice}$</span>  </div><span class="deal-rating">deal rate: ${game.dealRating}</span> </div></div></div>`
    })

    output += "</div>";
    document.getElementById('output').innerHTML += output;
  }).catch(error => console.log(error));

