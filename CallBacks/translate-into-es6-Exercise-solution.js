// translate-into-ES6-exercise-solution



// exercise
var increment = function (n) {
    return n + 1;
  };
  var square = function (n) {
    return n * n;
  };
  var doMathSoIDontHaveTo = function (n, func) {
    return func(n);
  };
  console.log(doMathSoIDontHaveTo(12, square));//144
  console.log(doMathSoIDontHaveTo(4, increment));//5



// solution

var increment = n => {return n +1};
var square = n => {return n * n};
var doMathSoIDontHaveTo = (n,func) => {return func(n)};

console.log(doMathSoIDontHaveTo(12,square));
console.log(doMathSoIDontHaveTo(6,increment));
  