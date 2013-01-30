/**
*   import.js
*   JSファイルをまとめて読み込む
*   http://hiropo.co.uk/archives/303
*/
(function(){
    var importSrc = function(e){
        return '<script type="text/javascript" src="'+ e +'"></script>' + "\n";
    }
    var path = './';
    //var path = './static/common/js/';
    ////jQueryフレームワーク
    //document.write( importSrc( path + 'jquery-1.3.2.min.js' ) );
    //サイト全体で使用するJS
    document.write( importSrc( path + 'test.js' ) );
})();
