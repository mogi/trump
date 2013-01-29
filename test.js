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
  function Card(suit, number) {
    this.suit = suit;
    this.number = number;

    // set behaviors
    this.isPip = function() {
      return 0 < this.number && this.number <= 10;
    };

    this.isCourt = function() {
      return 10 < this.number && this.number <= 13;
    };

    this.isWild = function() {
      return this.suit == 0 && this.number == 0;
    };

  }
  return Card
})();
Card.prototype = Object.create(BaseCard.prototype);
Card.prototype.constructor = Card


Array.prototype.shuffle = function () {
  //Fisher-Yate
  var n = this.length;
  for(var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return true;
}


var deck = new Array()
//var ten_squares = [Card(1,i) for each (i in range(0, 12))];
for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= 13; j++) {
      deck.push(new Card(i,j));
  }
}


function echoCard(card){
  document.write("<p>Created Cards</p>");
  document.write("suit : " + card.suit + "<br />");
  document.write("number : " + card.number + "<br />");
  document.write("pip : " + card.isPip() + "<br />");
  document.write("court : " + card.isCourt() + "<br />");
  document.write("wild card : " + card.isWild() + "<br />");
}


function echoDeck(){
  deck.shuffle()
  for (var i = 1; i <= deck.length; j++) {
    echoCard(deck.pop())
  }
}
