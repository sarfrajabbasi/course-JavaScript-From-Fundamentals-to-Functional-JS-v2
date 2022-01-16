const add = function(a,b){
    b=b || 2
    console.log(arguments)
    return a+b;

}
console.log(add(3));
