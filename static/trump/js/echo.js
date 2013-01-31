/**
 * 今のところデバッグ用のecho群
 */
var echoCard = (function(){
  function echoCard(card){
    text = "<p>Created Cards</p>" +
           "suit : " + card.suit + "<br />" +
           "number : " + card.number + "<br />" +
           "pip : " + card.isPip() + "<br />" +
           "court : " + card.isCourt() + "<br />" +
           "wild card : " + card.isWild() + "<br />"
    ;
    document.getElementById('target').innerHTML = text;
  };
  return echoCard;
})();


var deck = Deck.create(wild_quantity=1);
var echoDeck = (function(){
  function echoDeck(){
    deck.shuffle();
    if (deck.length > 0) {
      echoCard(deck.pop())
    };
    _text = document.getElementById('target').innerHTML;
    text = _text + "deck length : " + deck.length + "<br />";
    document.getElementById('target').innerHTML = text;
    //for (var i = 1; i <= deck.length; j++) {
    //  echoCard(deck.pop())
    //}
  };
  return echoDeck;
})();
