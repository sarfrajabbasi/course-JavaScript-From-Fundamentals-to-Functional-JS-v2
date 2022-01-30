//non-valid char
//for object literal if you use non-valid char then you need to puts quotes('#$%$^%&**') around it
//
var box = {};
box['material'] = "coldDrink";
box[0] = "meowww";
box['@##$'] = "testing 1233";
var test = box['@##$'];
console.log(box)
var x ={}
x[0] = true;
console.log(x)
// {0:true}
x[2+2]= true
//something that need to be evaluated rather then something that needs to be coerced directly into a string;kind alike a var name.
console.log(x)
var y= []
y["0"]=true;//what it does evalute to?
y.push(1)//array methods
console.log(y)
y.pop(0)
console.log(y)
y.length //doesn't need to call becouse its not function;

console.log(Array.isArray([]));//to check its array?



obj = {}
obj[function () {}] =false//puting it in bracket,it's stringfying it,so you can't call the function later;
console.log(obj)//its just gonna stringify that function;
console.log(typeof Object.keys(obj)[0]);//this is return all of the keys of the object;
//its returning string;
console.log(Object.keys(obj)[0]);
//"function (){}"
//becoz of wierd functionality of stringify and it could stringify it in different ways.


obj[(function () {return 3})()] =false //as long as it's return the string,you could wrap it in a function expression and then;
// if youcall the function thats different
//immediately invokethis anonymous function and this function return 3,so this bracket gonna evaluate this line;
console.log(obj)//{3:false,function (){}:3}



//ARRAY are special kind of object and most special thing about array is .length property,which computed as you add numerical indices,numerical indices are diff. than propty on array.coz array captures that and increment the length

y= [];
y.length;//length = 1
y.hello = 'goodbye';//length =1

y[10]=false;
//length =11;

//ARRAY are in ordered and when things are in ordered you can reverse them or anything,sorting,order,lot easier loop through an array then object as well.
// giving array a object property, is that uncommon?
//Ans:- In  App. level code,you typically don't do stuff like this.But in libraries and stuff,it happens a lot.but you know that the rules are consistent, arrays are objects
