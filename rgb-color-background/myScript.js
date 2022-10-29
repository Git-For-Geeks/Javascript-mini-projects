var btn=document.getElementById("Click")
var hediv=document.querySelector("body")
function onBtnClick(){
    var rc1=Math.floor(Math.random()*255)
    var gc1=Math.floor(Math.random()*255)
    var bc1=Math.floor(Math.random()*255)
    var rc2=Math.floor(Math.random()*255)
    var gc2=Math.floor(Math.random()*255)
    var bc2=Math.floor(Math.random()*255)
    hediv.style.backgroundImage= "linear-gradient(to right, rgb("+rc1+","+gc1+","+bc1+"), rgb("+rc2+","+bc2+","+gc2+"))"
    btn.innerHTML= "linear-gradient(to right, rgb("+rc1+","+gc1+","+bc1+"), rgb("+rc2+","+bc2+","+gc2+"))"
}
btn.onclick=onBtnClick
