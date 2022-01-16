// var box = {};
// box['material'] = "coldDrink";
// box[0] = "meowww";
// box['@##$'] = "testing 1233";
// var test = box['@##$'];
// console.log(box)
// var x ={}
// x[0] = true;
// console.log(x)
// // {0:true}
// x[2+2]= true

// console.log(x)
// var y= []
// y["0"]=true
// y.push(1)
// console.log(y)
// y.pop(0)
// console.log(y)

console.log(Array.isArray([]));

obj = {}
// obj[function () {}] =false
// console.log(obj)
// console.log(typeof Object.keys(obj)[0]);
// console.log(Object.keys(obj)[0]);

obj[(function () {return 3})()] =false
console.log(obj)

