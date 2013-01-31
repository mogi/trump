/**
*   import.js
*   JSファイルをまとめて読み込む
*   http://hiropo.co.uk/archives/303
*/

(function(){
  var BASE_DIR = function(){
    array = location.href.split("/");
    array.pop();
    return array.join("/");
  }()
  var path = BASE_DIR + '/static/common/js/';
  var importSrc = function(e){
    return '<script type="text/javascript" src="'+ e +'"></script>' + "\n";
  }
  ////jQueryフレームワーク
  //document.write( importSrc( path + 'jquery-1.3.2.min.js' ) );
  //サイト全体で使用するJS
  document.write( importSrc( path + '/loadHTML.js' ) );
  document.write( importSrc( path + '/include.js' ) );
})();
