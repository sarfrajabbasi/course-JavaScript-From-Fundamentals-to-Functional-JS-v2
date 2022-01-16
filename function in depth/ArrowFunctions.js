//ARROW FUNCTIONS
// Creating a regular Functions
const sarfraj = function(){
    console.log('This is the  Unknown person');
}
// Converting it to a arrow function
const sarfraj2 = () => {
    console.log('tomorrow WAR')
}
sarfraj()

// function returning something
const greet  = function(){
    return 'Good Morning';

}
greet();

// one liner do not require braces/return
// one line will automatically return
const great  = () => 'Good Morning';

const great1  = () => ({name : 'sarfraj'});

//single perameter do not need parenthesis
//but you will have to put parenthesis if there are mutliple parameters
const great2 = (name,ending)=> 'good morning' + name + ending;

