// function createSuspectObject(name) {
//   return{
//     name:name,
//     color:name.split(' ')[1],
//     speak:function () {
//       console.log("may name is",name)
      
//     }
//   };
  
// };
// var suspects = ['Miss Scarlet','Colonel Mustard','Mr.White'...];
// var suspectsList =[];

function createSuspectObject(name) {
  return{
    name:name,
    color:name.split(' ')[1],
    // speak : function() {
    //   console.log("may name is",name)
      
    // }
    speak () {
      console.log("may name is",name)
      
    }
  }
  
};
var suspects = ['Miss Scarlet','Colonel Mustard','Mr.White'];
var suspectsList =[];
// var x = createSuspectObject(suspects[0])
// console.log(x)

// var x = createSuspectObject('Miss Scarlet');

// console.log(x)
// for(var i = 0; i < suspects.length; i++){
//   suspect = createSuspectObject(suspects[i])
//   suspects.push(suspects)
// }

for(var i = 0; i < suspects.length; i++){
    suspectsList.push(createSuspectObject(suspects[i]));
    
}
console.log(suspectsList)




// function createSuspectObject(name) {
//   return{
//     name:name,
//     color:name.split(' ')[1],
//     // speak : function() {
//     //   console.log("may name is",name)
      
//     // }
//     speak () {
//     log(`may name is ${this.name}`);
//     }
//   };
// }
// var suspects = ['miss scarlet','Colonel mustard','mr.White'];

// var suspectsList = _.map(suspects,function(name){
//   return createSuspectObject(name);
// })




