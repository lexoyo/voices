var voices = require('./voices.json')
var voice = getItems(voices, 1, 1)[0];
console.log(voices.length + ' voices, choose:', voice)

function getItems(dictionnary, min, max) {
  var num = Math.ceil(min + Math.random() * (max - min));
  var words = [];
  var clone = JSON.parse(JSON.stringify(dictionnary));
  for(i=0; i<num; i++) {
    var idx = Math.floor(Math.random() * clone.length);
    words = words.concat(clone.splice(idx, 1));
  }
  return words;
}

var player = require('play-sound')(opts = {})
player.play(voice, function(err){
  console.log('Done.', err);
})
