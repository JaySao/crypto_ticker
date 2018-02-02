document.addEventListener('DOMContentLoaded', function() {
  var url = "https://api.coinmarketcap.com/v1/ticker/"
  function function1(x){
      let request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
          var obj = JSON.parse(this.responseText);

          for(var i=0; i<5; i++){
            var row = document.getElementsByClassName("row")[i];
            var symbol = document.createElement("h2");
            var price = document.createElement("h3");
            var change = document.createElement("h3");
            symbol.innerHTML = obj[i].symbol + " ("+ obj[i].name+")";
            price.innerHTML ='$'+ obj[i].price_usd;
            change.innerHTML ="(" + obj[i].percent_change_24h + "%)";
            if(obj[i].percent_change_24h > 1){
              change.style.backgroundColor="green";
            }else{
              change.style.backgroundColor="red";
            }
            row.appendChild(symbol);
            row.appendChild(change);
            row.appendChild(price);
            console.log(obj);
          }
        }
      }
      request.open("GET",x,true);
      request.send();
  }
  function1(url);
})
