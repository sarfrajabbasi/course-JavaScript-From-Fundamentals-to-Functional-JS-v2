//Destructuring which is in ES6,Destructuring in array and object now:-
//order matter
var obj = {first: 'Dan', last : 'coelho'};
var first = obj.first;
var last = obj.last;


//variable declarations :-
const [first,last]=[true,false];//thats a destructuring for variable declaration.why?
//becoz we creating a var right there.
//we create var on left,that target and source is an array with values.

//assignemnt :-
[first,last] = [true,false]





const [a,b,c] = [true,false];//c=undefined//const declaration.
arr = [1,2,3]//(3)[1,2,3];
f= arr[3]
//a=true
//b=false
//c=undefined
//f=undefined;
//how this different from  kind of var declarations?
//:-it's less varbose,but it could be very long sort of assignment line to large no. of var's and decrease readability,
//assigment is just var's already exist,you can assign them;

const j ={x :1}//undefined
j.x =3;//{x:3}/3;
j.y = 5;
j.x = 5; //error
j=3 //its error coz we reassign j in here
//these way way work becoz we are not changing "j" we are changing property on "j"

// var decalrtion in object

//name have to match in this case
//object don't have order

const {first,second}={first : 0,second : 1}
var {first,second}={first : 0,second : 1}
let {first,second}={first : 0,second : 1};

// assignment :-
({first,second} = {first : 0,second : 1})

// that's destructuring it just  make value out of the objects and array's and lesss typing as long as still readable;





var [a,b,c,...d]= [1,2,3,4,5,6,7,8,9,10]//var[target] = [source].
console.log(a,b,c,d);
var obj ={name:"sarfraj",sname:"abbasi",
sarfraj :function () {
  console.log("my name is sarfraj")
}
}
const {name,sname,sarfraj}=obj
// console.log(obj.sarfraj)
sarfraj();






