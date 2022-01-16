const add = function(a,b=2){
    console.log(arguments);
    return a+b;

}
console.log(add(3));