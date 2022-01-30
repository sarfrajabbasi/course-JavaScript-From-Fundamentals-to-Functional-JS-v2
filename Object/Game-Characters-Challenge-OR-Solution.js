//create an object with dot and bracket notation and  that repersent the characters and related data you may find  in a game of clue

//why would we choose an array vs object;which data str.you're gonna use;
//:-we combine them and make array of object,
var game = {};
game.murderer = "??";
game['weapons'] = [
  {type :'laser',location : 'lab'},

{type : 'angry birds', location: 'beanHouse'},

{type : 'monsterDrink',location:'store'}
];

game.name = [];
game.name[0]='Miss Scarlet';
game.name.push('Mr.Green')//method in name(Array) property not game (coz it's object),we can't push things to an object;
//['Miss Scarlet','Mr.Green']