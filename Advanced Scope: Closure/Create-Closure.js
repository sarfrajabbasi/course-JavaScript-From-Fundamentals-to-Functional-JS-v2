const myAlert = ()=>{
    const x = "Help! I think I found a clue!";
    let count =0;
    const alerter = ()=>{
        alert(`${x} ${++count}`);//Help! I think I found a clue! 1"
    };
    return alerter;//return the alerter function body 

}
//when we call function 1 and more time we create new execution context,all the thing get re-initialized.
const funcAlert = myAlert();//thebody set to these funcAlert and next.
// they both are separate so funcAlert2 is start with zero re-initialized all thing again.
const funcAlert2 = myAlert();
funcAlert();//Help! I think I found a clue! 1".
funcAlert();//Help! I think I found a clue! 2".
funcAlert();//Help! I think I found a clue! 3".
funcAlert2()//Help! I think I found a clue! 1".
funcAlert2()//Help! I think I found a clue! 2".

// funcAlert()();
//this is going to invoke or try to invoke whatever this returns.  
//just retrun undefined bcoz it's not return anything.