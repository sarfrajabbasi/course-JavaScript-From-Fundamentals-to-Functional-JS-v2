// 1) Takes a function as an input (argument)
element.addEventListener('change',() => {
    // console.log("our evidence is updated");
});

// 2) Returns a function as the output

const newClue = (name) => {
    const length = name.length;
    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};

// CALLBACKS
// we declare a const ifElse
// then going to use arrow notation function
// we declare function
const ifElse = (condition,isTrue,isFalse) => {
    return condition ? isTrue : isFalse;//it's ternary operator
    // if condition is true then isTrue if not then it's isFalse
};
//it's gonna take three parameter's (condition,isTrue,isFalse)
// we invoke it
// we pass argument (true,anonymous function)
ifElse(true,
    () => {console.log(true);},
    () => {console.log(false)}
    );
    // In this case it's going to  return whole function ,why?
    // the entire function is being pass as the second argument
    // and is console.log actually happening?NO.why Not?
    // It was not Invoked, now it's gonna log.
    const ifElse1 = (condition,isTrue,isFalse ) => {
        // we are passing a function 
        //  calling a function
        return condition ? isTrue() : isFalse();
    };

    const logTrue = () => {console.log(true);};
    const logFalse = () => {console.log(false);};
    // we put in variable so we can pass them that  way and calling it
    // all same except that ,its just a parammeter name gives it another name to  reference it by,
    // 
    ifElse1(true,logTrue,logFalse);//true



