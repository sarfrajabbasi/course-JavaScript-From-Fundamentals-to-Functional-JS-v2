// Composing:- composing is when you take two functions and combine them essentially
const consider = (name) => {
    return `I think it could be... $(name)`;
};
// we have this other method exclaim and it's just take statement and turn it upperCase and add an exclamation point at the end.
const exclaim =(statement) => {
    return`${statement.toUpperCase()}!`;
};
// then we have function  blame  where we compose(consider,exclaim)
const blame = _.compose(consider,exclaim);
// pass you into this  function
blame('you');
// the order does matter it's depends on internals
// it turn into upperCase and then it passed in consider and add YOU
// => 'I think it could be... you!'

