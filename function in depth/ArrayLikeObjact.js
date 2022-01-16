const constructArr = function(){
    const arr =Array.prototype.slice.call(arguments)
    arr.push('the billord room');
return arr.join(' ');

}
constructArr('was','it','in');
