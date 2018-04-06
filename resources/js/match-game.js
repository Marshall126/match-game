$(document).ready(function(){
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
})
var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  let cardValues=[];
  for(let i=1; i<9; i++){
    cardValues.push(i);
    cardValues.push(i);
  }
  let cardValuesRand = [];
  while(cardValuesRand.length<16){
    let index = Math.floor(Math.random() *cardValues.length);
    cardValuesRand.push(cardValues[index]);
    cardValues.splice(index, 1);
    //console.log(index);
    //console.log(cardValuesRand);
    //console.log(cardValues);
  }
  return cardValuesRand;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  
  $($game).html('');
  let colors = [[25, 85, 65], [55,85,65], [90,85, 65], [160, 85, 65], [220, 85, 65], [265, 85, 65], [310, 85, 65], [360, 85, 65]];

  
  for (var i=0; i<cardValues.length; i++){
    let $card = $('<div class="card col-xs-3"></div>');
    
      $($card).data= cardValues[i],
      $card.flipped=false,
      $card.color=colors[cardValues[i]-1],
    
    $($game).append($card);
    
    }
    return $game;
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};