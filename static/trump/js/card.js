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


var Card;
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
