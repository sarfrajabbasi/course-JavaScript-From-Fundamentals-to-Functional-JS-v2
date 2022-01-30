// GOTCHA!
const findSomeone = () => {
    const speak = () => {
        console.log(who);
    };
    let who = 'Why hello there,Prof Plum!';
    return speak;
};

const find1 = findSomeone();
// console.log(find1)
// console.log(find1())




// const makeTimer = ()=>{
//     let elapsed = 0;
//     const stopWitch = ()=> {return elapsed};
//     const increase = ()=> elapsed++;
// setInterval(increase,1000);
// return stopWitch;
// };
// let timer = makeTimer();
// console.log(timer)//{()=> {return elapsed};
// console.log(timer())//7second
// console.log(timer())//33
// console.log(timer())//56


const makeTimer = ()=>{
    console.log('initialized');//initialized
    let elapsed = 0;
    console.log(elapsed);//0
    const stopWitch = ()=> {console.log('stopWitch');//stopWitch
    return elapsed;
};
    const increase = ()=> elapsed++;
setInterval(increase,1000);

return stopWitch;

};
const timer = makeTimer();

console.log(timer)//()=> {console.log('stopWitch');return elapsed;}

console.log(timer())//0