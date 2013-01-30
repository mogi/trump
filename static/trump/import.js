/**
*   import.js
*   JSファイルをまとめて読み込む
*   http://hiropo.co.uk/archives/303
*/
(function(){
    var importSrc = function(e){
        return '<script type="text/javascript" src="'+ e +'"></script>' + "\n";
    }
    var path = BASE_DIR + '/static/trump/js/';
    //trumpで使用するJS
    document.write( importSrc( path + 'card.js' ) );
    document.write( importSrc( path + 'trump.js' ) );
})();
