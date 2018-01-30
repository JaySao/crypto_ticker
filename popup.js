document.addEventListener('DOMContentLoaded', function() {
  var url = "https://api.coinmarketcap.com/v1/ticker/ethereum/"

  function myFunction(){
      let request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
          var obj = JSON.parse(this.responseText);
          document.getElementById("price").innerHTML = obj[0].symbol+': '+ obj[0].price_usd;
          document.getElementById("change").innerHTML = "24Hr Change:" + "(" + obj[0].percent_change_24h + "%)";
          console.log(obj);
        }
      }
      request.open("GET",url,true);
      request.send();
  }
  myFunction();
})
