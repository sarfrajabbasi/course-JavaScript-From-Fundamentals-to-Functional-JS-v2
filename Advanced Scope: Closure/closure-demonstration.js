const newClue = (name) => {
    const length = name.length;
    return(weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};
const didGreenDoWithA = newClue('green');
// console.log(didGreenDoWithA);
// console.log(didGreenDoWithA('candlestick'))
// console.log(didGreenDoWithA('ledPipe'))


function countClues(){
    var n = 0;
    return{
        count : function(){return  ++n;},
        reset : function(){return n = 0;}
    };
};
 const counter = countClues()
 const counter2 = countClues()
 console.log(counter)//{count: ƒ, reset: ƒ}
 console.log(counter)//{count: ƒ, reset: ƒ}
 console.log(counter2)//{count: ƒ, reset: ƒ}
 console.log(counter2)//{count: ƒ, reset: ƒ}
 console.log(counter.count())//1
 console.log(counter.count())//2
 console.log(counter.reset())//0
 console.log(counter.reset())//0
 console.log(counter2.count())//1
 console.log(counter2.count())//2
 console.log(counter2.reset())//0
 console.log(counter2.reset())//0


//ES6 equivalent

const countClues2 = ()=>{
    let n =0;
    return{
        count :()=>n++,
        reset : ()=>n=0
    };
};
const Ecounter = countClues2()
 const Ecounter2 = countClues2()
 console.log(counter)//{count: ƒ, reset: ƒ}
 console.log(counter)//{count: ƒ, reset: ƒ}
 console.log(counter2)//{count: ƒ, reset: ƒ}
 console.log(counter2)//{count: ƒ, reset: ƒ}
 console.log(counter.count())//1
 console.log(counter.count())//2
 console.log(counter.reset())//0
 console.log(counter.reset())//0
 console.log(counter2.count())//1
 console.log(counter2.count())//2
 console.log(counter2.reset())//0
 console.log(counter2.reset())//0

