const MyAlert1 = ()=>{
    const x = "Help! I think I found a Clue!";
    const alerter = () =>{
        alert(x);
        // not run yet
    }
    setTimeout(alerter,1000)//take two argumnet
    console.log('what happens first? this log or the alert?')
};
MyAlert1();