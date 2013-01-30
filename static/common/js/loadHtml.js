// htmlファイルを遅延読み込み

function displayData() {
  if ((httpObj.readyState == 4) && (httpObj.status == 200)) {
    $("result").innerHTML = httpObj.responseText;
  }else{
    $("result").innerHTML = "<b>Loading...</b>";
  }
}


function createXMLHttpRequest() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else {
    return null;
  }
}


function loadHTMLFile(fName) {
  httpObj = createXMLHttpRequest(displayData);
  if (httpObj) {
    httpObj.open("GET",fName,true);
    httpObj.send(null);
  }
}
