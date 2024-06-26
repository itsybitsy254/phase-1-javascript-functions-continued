function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(param1 = "*") {
  return function (param2 = "special") {
    return `You are ${param1}${param2}${param1}!`;
  };
}
wrapAdjective();
