// start with core Data Structure which are Array and Object.
// property access with dots and Brackets.
//
// Assaignment with Dots
var person = {}; 
 person.name = 'Mrs. White';//permitive DataType
var who = person.name;
 var person = {
     name : 'Mrs.white'
 }
// When are some other times you have seen other dots in Js?
//=> in array method ,like prototype method(native method) and promise function,nested object or string method;
// => anything that ever use a dot in JS is an Object.

var person = {}; 
 person.name = 'Mrs. White';
var who = person.name;
who; // Mrs.White
person.name = 'Mr.White';//reassign person.name to Mr.White;
who;//Mr.Whit(person refrence updated);
who.story;

//this storing a value by reference ,or by value;
// primitve value(not an Object) get pass by value. Ex = boolean ,string,number,null,undefined;
//Non-primitive value get pass by reference, Ex = Array,Object,function,promise etc;
// if you pass something, or reference a primitive value, it gets its own spot in memory(Copy) every single time.
//Non-primitive share same place in memory (changing somthing in unsusual effect the orginal data)





