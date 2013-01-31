/**
 *   Deck Manager
 */

// import
document.write('<script type="text/javascript" src="../common/js/exArray.js"></script>');


var Deck;
Deck = (function() {
  /**
   *   Deck
   */
  function Deck() {};

  Deck.create = function(){
    if(typeof wild_quantity === 'undefined'){
      wild_quantity = 0; // default value
    };
    var cards = new Array()

    // set normal card
    for (var i = 1; i <= 4; i++) {
      for (var j = 1; j <= 13; j++) {
        cards.push(new Card(i,j));
      };
    };

    // set wild
    for (var i = 0; i <= wild_quantity; i++) {
      cards.push(new Card(0,0));
    };
    return cards;
  };

  return Deck;
})();
