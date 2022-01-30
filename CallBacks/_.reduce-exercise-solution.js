// _.reduce method exercise
//challenging implement_.reduce()
// realxed : implement_.eachRight()




//DEMO

// _.reduce method solution

// it take three parameter's
var reduce = function (list, cb, initial = list[0]) {
  // we gonna save that value for next loop.
  let memo = initial;
  // loop thorugh list
  for (let i = 0; i < list.length; i++) {
    // call the cb with the value of array index arr[i],prev/initial.
    memo = cb(list[i], memo); //prev not returning
    //this is not referencing anything yet.
    //it just only holding var. for now(can call accumulator or memo)
  }
  return memo;
  // return result which should be one value
};

reduce([1,2,3,4],(v,sum)=> v + sum)


// ACTUAL WORK
var reduce = function (list, cb, initial = list[0]) {
  // [1,2,3] //cb = sum;
  let memo = initial || list[0]//1
  // what happen when the first value becomes initial value
  for (let i = 0; i < list.length; i++) {
    if(i === 0 && !!memo){
      memo =list[0];
    }else{

      memo = cb(list[i], memo);//1,memo = 0.
    }
  }
  return memo;//6
};
reduce([1,2,3,4],(v,sum)=> v + sum,0)//v =1,sum=0,
// call with two or three argument
// so what we wanna do ,is for every value in this list,we wanna run this function on it and we expect it to return one value.
// that value gets passed into the function  as second argument,and then next value gets passed as the first. they will get passed every single time.
//if we don't have initial value then we use very first value of the arr.

//  we will do it without initial value

var reduce = function (list, cb, initial = list[0]) {
  let memo = initial;//0/1/3/6
  for (let i = 0; i < list.length; i++) {//i=== 1//2
    if(i === 0 && memo === undefined){
      memo =list[0];
    }else{

      memo = cb(list[i], memo);//1,0//2,1 => 3//3,3 => 6
    }
  }
  return memo;//0/1/3/6
};
reduce([1,2,3,4],(v,sum)=> v + sum,0)//6



var reduce = function (list, cb, initial = list[0]) {
  let memo = initial;//2/5/10
  for (let i = 0; i < list.length; i++) {//i=== 0/1/2
    if(i === 0 && memo === undefined){
      memo =list[0];//2
    }else{

      memo = cb(list[i], memo);//3+2/5+5
    }
  }
  return memo;//2/5/10
};
reduce([2,3,5],(v,sum)=> v + sum)//10
