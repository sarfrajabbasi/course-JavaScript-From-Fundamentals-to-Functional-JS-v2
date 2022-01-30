// we talk about passing function to function and calling it.
// what about passing function to function and then calling it with argument.
// how do we do pass argument ?
// so we could passed argument in along with the function as parameter's and then in the body of that function.you can pass those parameter's for that function into the function and call it.
// you can pass it as argument
const ifElse = (condition,isTrue,isFalse,p) => {

    console.log(p)//'hi'

    return condition? isTrue(p) : isFalse(p);
}
//we imagine the functionis exist,coz we don't defined yet,and we pass P which is 'hi'
// that's how you would do it
ifElse(true,fn1,fn2,'hi')




const ifElse = (condition,isTrue,isFalse,...args) => {

    console.log(args)//['hi','BYE','GOLD','FOLD']

    return condition ? isTrue(...args) : isFalse(...args);
    //isTrue('hi','BYE','GOLD','FOLD'))
};

ifElse(true,fn1,fn2,'hi','BYE','GOLD','FOLD');




// How was this done before ES6?

const ifElse = (condition,isTrue,isFalse) =>{
    const args = [].slice.call(arguments,3)
    return condition ? isTrue.apply(this,args) : isFalse.apply(this,args);
};

const logTrue = (msgs) => {console.log(msgs);};
const logFalse = (msgs) => {console.log(msgs);};

console.log(ifElse(true,logTrue,logFalse));

