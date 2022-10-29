function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
  
  s = new Date(startingDate);
  e = new Date(endingDate);
  //console.log(s, "\n", e);
  if (s == "Invalid Date") {return -1;}
  if (e == "Invalid Date") {return -1;}
  diff = (e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24);
  
  result = Number(principal) * Number(dailyInterest) * Number(diff) / 100;
  return Math.floor(result);
  
  }
  
  function calculateCompoundInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
      
  s = new Date(startingDate);
  e = new Date(endingDate);
  if (s == "Invalid Date") {return -1;}
  if (e == "Invalid Date") {return -1;}
  
  diff = (e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24);
  
  result = principal * (Math.pow((1 + dailyInterest / 100), diff) - 1);
      
  return Math.floor(result);
  }
  
  function extraAmountPercentage(principal, dailyInterest, startingDate, endingDate) {
      
      compound = calculateCompoundInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  );
      simple = calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  );
  if (compound == -1) {return -1;}
  if (simple == -1) {return -1;}
      return Math.floor((compound - simple) / simple * 100);
  }
  