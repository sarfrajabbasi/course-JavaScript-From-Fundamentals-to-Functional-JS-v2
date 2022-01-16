//create an obajct with dot and bracket notation and  that repersent the characters and related data you may find  in a game of clue

var game = {};
game.murderer = "??";
game['weapons'] = [
  {type :'laser',location : 'lab'},

{type : 'angry birds', location: 'beanHouse'},

{type : 'monsterDrink',location:'store'}
];

game.name = [];
game.name[0]='Miss Scarlet';
game.name.push('Mr.Green')
//['Miss Scarlet','Mr.Green']