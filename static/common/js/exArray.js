/**
*   exArray.js
*   Arrayにfunction を追加
*/

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
