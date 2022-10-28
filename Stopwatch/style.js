let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let setTime = document.querySelector('.Display');
let input = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(input!==null){
        clearInterval(input);
    }
    
    document.body.style.animationName="onstart";
    
    input = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    document.body.style.animationName="onpause";
    clearInterval(input);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    document.body.style.animationName="onreset";
    clearInterval(input);
    
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    setTime.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 setTime.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}