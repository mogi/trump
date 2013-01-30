/**
*   import.js
*   JSファイルをまとめて読み込む
*   http://hiropo.co.uk/archives/303
*/

function getBaseDIR(){
  array = location.href.split("/");
  array.pop();
  return array.join("/");
}


(function(){
  var BASE_DIR = getBaseDIR()
  var path = BASE_DIR + '/static/common/js/';

  var importSrc = function(e){
    return '<script type="text/javascript" src="'+ e +'"></script>' + "\n";
  }

  var importModule = function(m){
    var path = BASE_DIR + '/static/';
    document.write( importSrc( path + m + '/import.js' ) );
  }

  ////jQueryフレームワーク
  //document.write( importSrc( path + 'jquery-1.3.2.min.js' ) );
  //サイト全体で使用するJS
  document.write( importSrc( path + '/loadHTML.js' ) );
  //読み込むモジュール
  importModule("trump")
})();


var BASE_DIR = getBaseDIR()
