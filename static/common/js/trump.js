// prototypeの練習
// ついでに継承とか、accessor propertyもためす

// import
document.write('<script type="text/javascript" src="./static/common/js/exArray.js"></script>');
document.write('<script type="text/javascript" src="./static/common/js/loadHTML.js"></script>');


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
