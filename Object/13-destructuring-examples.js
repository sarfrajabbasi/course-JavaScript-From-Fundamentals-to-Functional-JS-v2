var [a,b] = [1,2];
console.log(a,b);

// omit certain values
var [a,,c]=[1,2,3];
console.log(a,c);

// combine with spread/rest operator
var [a,...b] =[1,2,3];
console.log(a,b);


//swap var easily with temp
var a=1,b=2;
// temp = a;
// a = b;
// b = temp;
[a,b]=[b,a]
// console.log(a,b)

//Advance deep arrays

var [a,[b,[c,d]]] = [1,[2,[[[3,4],5],6]]];
console.log(a,b,c,d)



// === Objects
var {user :x}={user:5};
console.log(x)
//5

// fail-sefe

var {user :x}={user1 =5}
//undefined