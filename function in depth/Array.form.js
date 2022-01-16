const constructArr = function(){
    const arr = Array.from(arguments);
    arr.push('the billard room');
    return arr.join('');

}
constructArr('was','it','in');
