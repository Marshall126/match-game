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
  $($game).data('card-flipped', []);
  $($game).data('card-flip-val', []);
  $($game).html('');
  let colors = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90,85%,65%)', 'hsl(160,85%,65%)','hsl(220,85%,65%)','hsl(265,85%,65%)', 'hsl(310,85%,65%)', 'hsl(360,85%,65%)'];

  
  for (var i=0; i<cardValues.length; i++){
    let $card=$('<div class="card col-xs-3"></div>');
    
    $($card).data("value", cardValues[i]);
    $($card).data('flipped', false);
    $($card).data('color', colors[$card.data('value')-1]);
    //console.log($($card).data('color'));
    //console.log('test');
    
    $($game).append($card);
   
    $($card).click(function (){
      MatchGame.flipCard(this, $game)
    });
    }
    
    return $game;
    
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if($($card).data('flipped') == false){
    
    $($card).css('background-color', $($card).data('color'));
    $($card).text($($card).data('value'));
    //console.log($('.card'.data('flipped')));
    $($card).data('flipped', true);
    //console.log($($card).data('flipped'));
    $($game).data('card-flipped').push($card);
    $($game).data('card-flip-val').push($($card).data('value'));
    console.log($($game).data('card-flipped'));
    //console.log($($game).data('card-flipped'));
  }
  
  if($($game).data('card-flipped').length==2){
    //console.log('test');
    if($($game).data('card-flip-val')[0]==$($game).data('card-flip-val')[1]){
        $($game.data('card-flipped')).css('color', 'rgb(204,204,204)');
        $($game.data('card-flipped')).css('background-color', 'rgb(153, 153, 153)');
        $($game.data('card-flipped')).data('flipped', null);
    }else{
      window.setTimeout(function(){
        
      
        $($game.data('card-flipped')).css('background-color', 'rgb(32,64,86)');
        $($game.data('card-flipped')).text('');
        $($game.data('card-flipped')).data('flipped', false);
      }, 350);
        
    }
    window.setTimeout(function(){
      $($game).data('card-flipped').splice(0,2);
      $($game).data('card-flip-val').splice(0,2);
    }, 350);
    
  }
  
};