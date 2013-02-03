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

var echoDeck = (function(){
  function echoDeck(){
    deck = Deck.create(wild_quantity=1);
    deck.shuffle()
    for (var i = 1; i <= deck.length; i++) {
      d_text = "<p>deck create success.</p>";
      document.getElementById('deck-field').innerHTML = d_text;
      text = "remaining deck : " + deck.length + "<br />";
      document.getElementById('card-field').innerHTML = text;
    }
    //_text = document.getElementById('target').innerHTML;
    //text = _text + "deck length : " + deck.length + "<br />";
    //document.getElementById('card-field').innerHTML = text;
    //
  };
  return echoDeck;
})();


var echoStore = (function(){
  function echoStore(store){
    for (var i = 0; i <= store.length; i++) {
      t = "suit : " + store[i].suit + "<br />" +
          "number : " + store[i].number + "<br />" +
          "pip : " + store[i].isPip() + "<br />" +
          "court : " + store[i].isCourt() + "<br />" +
          "wild card : " + store[i].isWild() + "<br />"
      ;
      old_t = document.getElementById('store-field').innerHTML
      new_t = old_t + t + "<br />"
      document.getElementById('store-field').innerHTML = new_t;
    }
  };
  return echoStore;
})();


var drawCard = (function(){
  function drawCard(){
    text = "remaining deck : " + deck.length + "<br />";
    document.getElementById('deck-field').innerHTML = text;

    if (deck.length <= 0) {
      return null
    };
    var _draw_card = deck.pop()
    store.push(_draw_card)
    echoCard(_draw_card)
    echoStore(store)
  };
  return drawCard;
})();
