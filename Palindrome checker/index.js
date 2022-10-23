

var b = document.getElementById("button");
b.addEventListener("click",checkstring);


 function checkstring(){
    var a= document.getElementById("name").value ;
   if(a==""){
    alert("Please Enter String");
   }else{  
      var l = a.length;
      var flag = 1;
   for(var i=0;i<l/2;i++){

    if(a[i] != a[l-i-1]){
        flag =0;
         break;   
    }

   }
   if(flag==1){
    alert("String is  Palindrome");
   }else{
    alert("string is not Palindrome");
   }
   
  }
 }

 var i = 0;
 var j =0;
var txt = 'Palindrome Checker';
var txt2 = 'Enter a string to Check for Palindrme'
var speed = 50;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
 
 
}



 
