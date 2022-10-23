var coin = document.getElementById('coin');  
 var button = document.getElementById('button');  
 var result = document.getElementById('result');  
 var headsCounter = document.getElementById('headsCounter');  
 var TailsCounter = document.getElementById('TailsCounter');  
 var featureCoin = document.getElementById('featureCoin');  
 var heads = 0;  
 var tails = 0;  
 function coinToss() {  
  var x = Math.floor(Math.random() * 2);  
  if (x === 0) {  
   coin.innerHTML = '<img class="heads animate-coin" src="https://upload.wikimedia.org/wikipedia/en/5/52/British_fifty_pence_coin_2015_obverse.png"/>';  
   heads += 1;  
   result.innerHTML = '<h2>You got heads</h2>';  
   headsCounter.innerHTML = '<h3> Number of heads:<span> ' + heads + '</span></h3>';  
  }
   else {  
   coin.innerHTML = '<img class="tails animate-coin" src="https://upload.wikimedia.org/wikipedia/en/d/d8/British_fifty_pence_coin_2015_reverse.png"/>';  
   tails += 1;  
   result.innerHTML = '<h2>You got tails</h2>';  
   tailsCounter.innerHTML = '<h3> Number of tails:<span> ' + tails + '</span></h3>';  
  }  
 }  
 button.onclick = function() {  
  coinToss();  
  featureCoin.remove();  
 }  
