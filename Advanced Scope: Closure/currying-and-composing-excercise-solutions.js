// Exercise : Currying and composing

var abc  = function(a,b){
    return [a,b];
};
var curried = _.curry(abc);

curried(1)(2);//[1,2]

// curry working

const curry = (fn) => {//abc
    return (arg) => {//1
        return(arg2) =>{//2
            return fn(arg,arg2)//1,2
        }
    }
}

// composing

const consider = (name) => {
    return `I think it could be... $(name)`;
};

const exclaim =(statement) => {
    return`${statement.toUpperCase()}!`;
};
const blame = _.compose(consider,exclaim);

blame('you');


// composing working

const compose  = (fn ,fn2) => {//take two argument
    return(arg)=>{//'you'
        const result = fn2(arg);//eclaim = 'YOU'
        return fn(result);//consider = 'I think it could be YOU;
    };
};