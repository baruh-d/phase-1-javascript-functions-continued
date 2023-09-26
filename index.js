// code your solution here
function saturdayFun(activity = "roller-skate") {
    let ans = `This Saturday, I want to ${activity}!`;
    return ans;
  }
  
  function mondayWork(activity = "go to the office") {
    let ans = `This Monday, I will ${activity}.`;
    return ans;
  }
  
  function wrapAdjective(symbol = "*") {
    const inner = function (theAdjective = "special") {
      return `You are ${symbol}${theAdjective}${symbol}!`;
    };
    return inner;
  }
