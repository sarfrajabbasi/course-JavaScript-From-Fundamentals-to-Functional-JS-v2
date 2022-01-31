const game23 = {
  'suspects':[
    {
      name:"Rusty",
      color:"orange"
    },{
      name:"Miss Scarlet",
      color:"red"
    }
  ]
}
//game ke ander game23
var gameLoop = function (game) {
  for (var i = 0;i<game.suspects.length;i++){
    console.log('outer loop')
    for(var key in game.suspects[i]){
      console.log('inner loop')
      if(game.suspects[i][key]==="Rusty"){
        
        console.log('Found /em!')
      }else{
        console.log('next Time')
      }
    }
  }
  
}
console.log(gameLoop(game23))

function foo() {
  for(let i = 0;i<game.suspects.length;i++){
    console.log(game.suspects[i]);
  }
}
// console.log(foo);

for(let pickly in obj){
  obj[pickly]
}

