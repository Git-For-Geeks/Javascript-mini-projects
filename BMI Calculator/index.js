var weightInput = document.querySelector(".weight-input");
var heightInput = document.querySelector(".height-input");

var calculateButton = document.querySelector(".btn");
//var result = document.querySelector(".result");
var statement = document.querySelector(".statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    //result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI is " +BMI.toFixed(2)+ ",you are underweight. Eat Well!";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI is " +BMI.toFixed(2)+ ",you have normal or healthy weight.";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI is " +BMI.toFixed(2)+ ", you are overweight.";
    }else{
        statement.innerText = "Your BMI is " +BMI.toFixed(2)+ ",you have obesity.";
    }
});
