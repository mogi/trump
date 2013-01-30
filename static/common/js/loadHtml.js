// htmlファイルを遅延読み込み
function loadHTMLFile(fName) {
  httpObj = createXMLHttpRequest(displayData);
  if (httpObj) {
    httpObj.open("GET",fName,true);
    httpObj.send(null);
  }
}
