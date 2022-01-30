//  currying :- so currying is when you create a function that can later be called multiple times with different argument.
//so this function expects three argument in order  for it to return a value
//  so what curry does  is that  it allows you to call a function up to three times with these diffrent values
_.curry(func,[arity=func.length])
var abc = function(a,b,c){
    return [a,b,c];
};
var curried = _.curry(abc);
//  this curry retrun a function

 curried(1)(2)(3);
//  this function saves in scopes somewhere this value,once it hit third value ,it return the result.
 //=>[1,2,3]

 curried(1 , 2)(3);
 //=>[1,2,3]

//  so that what currying is, it just allows you to break up a larger function into,or it is allows to you break up argument passed by the number of arguments.
