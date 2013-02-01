/**
 * 今のところデバッグ用のecho群
 */
var echoCard = (function(){
  function echoCard(card){
    text = "suit : " + card.suit + "<br />" +
           "number : " + card.number + "<br />" +
           "pip : " + card.isPip() + "<br />" +
           "court : " + card.isCourt() + "<br />" +
           "wild card : " + card.isWild() + "<br />"
    ;
    document.getElementById('card-field').innerHTML = text;
  };
  return echoCard;
})();

var deck = null;
var deck = Deck.create(wild_quantity=1);
deck.shuffle()

var echoDeck = (function(){
  function echoDeck(){
    deck = Deck.create(wild_quantity=1);
    deck.shuffle()
    for (var i = 1; i <= deck.length; i++) {
      d_text = "remaining deck : " + deck.length + "<br />";
      document.getElementById('deck-field').innerHTML = d_text;
      text = "<p>deck create success.</p>";
      document.getElementById('card-field').innerHTML = text;
    }
    //_text = document.getElementById('target').innerHTML;
    //text = _text + "deck length : " + deck.length + "<br />";
    //document.getElementById('card-field').innerHTML = text;
    //
  };
  return echoDeck;
})();

var drawCard = (function(){
  function drawCard(){
    text = "remaining deck : " + deck.length + "<br />";
    document.getElementById('deck-field').innerHTML = text;

    if (deck.length <= 0) {
      return null
    };
    echoCard(deck.pop())
  };
  return drawCard;
})();
