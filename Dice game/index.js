var refresh = document.querySelector(".btn");

var randomNumber1 , randomImg1 ,randomSource1 ,image1 ;
var randomNumber2 ,randomSource2;

refresh.addEventListener("click", ()=>{

randomNumber1 = Math.floor(Math.random() * 6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;


randomSource1 = "images/dice"+randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomSource1);

randomSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1 ===  randomNumber2){
    document.querySelector("h1").innerHTML ="It's a Draw!";
}
else if (randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML ="Player 2 Wins";
}

}
);
