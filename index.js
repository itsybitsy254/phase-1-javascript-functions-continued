function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const saturdayActivity = saturdayFun();
console.log(saturdayActivity);

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
const mondayActivity = mondayWork("work from home");
console.log(mondayActivity); 

function wrapAdjective(param1 = "*") {
  return function (param2 = "special") {
    return `You are ${param1}${param2}${param1}!`;
  };
}
wrapAdjective();
