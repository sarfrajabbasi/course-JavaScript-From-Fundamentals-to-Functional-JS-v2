//bracket notation
var person = []; //array

person.name = 'Mrs.White';

var who = person.name;

person[0] =  "I was not in the Billiards room";//brackets notation

var person = [];

var plea = "wouldshe";

person.name = "mrs.White";

person[plea] = "i would never!";

person["plea"] = "i would never!";
person.plea;//wouldShe;
console.log(person);
// property string can be  passed with dot notation or brackets;
//using the dot notation coerces to a string where bracket doesn't necesarilly.it starts to evaluate it as a number and it gets confused
//person.0 is invalid syntax
//dot notation only use with char that are not unusual,mean create a var name with that char ,that contains that char (you can use _ underscore)
//if you use unusual char then the solution is change it to string,put it in bracket notation and put quotes around it

