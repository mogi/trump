/**
*   import.js
*   JSファイルをまとめて読み込む
*   http://hiropo.co.uk/archives/303
*/
(function(){
  var importSrc = function(e){
      return '<script type="text/javascript" src="'+ e +'"></script>' + "\n";
  }
  var BASE_DIR = function(){
    array = location.href.split("/");
    array.pop();
    return array.join("/");
  }()
  var path = BASE_DIR + '/js/';

  //trumpで使用するJS
  document.write( importSrc( path + 'card.js' ) );
  document.write( importSrc( path + 'deck.js' ) );
  document.write( importSrc( path + 'main.js' ) );
  // debug
  document.write( importSrc( path + 'echo.js' ) );
})();

var BASE_DIR = function(){
  array = location.href.split("/");
  array.pop();
  return array.join("/");
}()
