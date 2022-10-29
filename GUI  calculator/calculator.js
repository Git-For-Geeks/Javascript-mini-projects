function calculator() {
    expression=document.getElementById("expression").value;
    
  
   if(expression){
  
      try{
          console.log('Expression',expression);
          answer=eval(expression);
          document.getElementById("expression").value=answer;
          console.log('Answer',answer);
          addlog(expression+'='+answer);
      }
      catch(err){
          console.log('error',err);
          addlog(expression+' is bad expression. Please fix it.')
      }
  
  }}
  
  function addlog(msg){
      var ul =document.getElementById("log")
      var li =document.createElement("li");
      var msg_text_node =document.createTextNode(msg);
      li.appendChild(msg_text_node);
      ul.appendChild(li);
      
  }
  function math_calculator() {
      expression=document.getElementById("expression").value;
      
    
     if(expression){
    
        try{
            console.log('Expression',expression);
            answer=math.evaluate(expression);
            document.getElementById("expression").value=answer;
            console.log('Answer',answer);
            addlog(expression+'='+answer);
        }
        catch(err){
            console.log('error',err);
            addlog(expression+'is bad. Please fix it.')
        }
    
    }}
  
    function input_number(num){
      document.getElementById("expression").value+=num;
  }
  function all_clear(){
      document.getElementById("expression").value="";
  }
  function clear_last(){
      var expression=document.getElementById("expression").value;
      document.getElementById("expression").value=expression.substring(0,expression.length-1);
  }