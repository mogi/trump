// prototypeの練習
// ついでに継承とか、accessor propertyもためす

var BaseCard;
BaseCard = (function() {
  function BaseCard(){
    var _suit = 0;
    var _number = 0;

    return {
      //accessor property
      get suit() {
        return _suit
      },

      set suit(v) {
        if( 0 < v <= 4 ) {
          _suit = v 
        } else {
          throw new Error( "error" ) 
        }
      },

      get number() {
        return _number
      },

      set number(v) {
        if( 0 < v <= 13 ) {
          _number = v 
        } else {
          throw new Error( "error" ) 
        }
      },
    }
  }
  return BaseCard;
})();


Card = (function() {
  // set behavior
  BaseCard.prototype.is_pip = function() {
    return 0 < this.number && this.number <= 10;
  };

  BaseCard.prototype.is_court = function() {
    return 10 < this.number && this.number <= 13;
  };

  BaseCard.prototype.is_wild = function() {
    return this.suit == 0 && this.number == 0;
  };
  return BaseCard
})();


var Lot;
Lot = (function () {
  function Lot() {
  }
  Lot.prototype.shuffle = function () {
    //Fisher-Yates
    var i = this.length();
    for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
  return Lot;
})();
Lot.prototype = Object.create(Array.prototype);
//Lot.prototype.constructor = Lot


var Deck;
Deck = (function () {
  function Deck() {
  }
  return Deck;
})();
Deck.prototype = Object.create(Lot.prototype);
//Deck.prototype.constructor = Deck


//function createCard(){
//  var i;
//  var suit = parseInt(document.fm.A.value);
//  var number = parseInt(document.fm.B.value);
//  i = new Card(suit, number);
//
//  document.write("<p>Created Card</p>");
//  document.write("suit : " + i.suit + "<br />");
//  document.write("number : " + i.number + "<br />");
//  document.write("pip : " + i.is_pip() + "<br />");
//  document.write("court : " + i.is_court() + "<br />");
//  document.write("wild card : " + i.is_wild() + "<br />");
//}


var o;
o = Card
o.suit = 1
o.number = 2
Deck(o)
o2 = Card
o2.suit = 3
o2.number = 4
Deck(o2)

function createCard(){
    document.write(o.suit);
    document.write(o.prototype.is_pip());
}
