//var url = 'https://cao.me/dnmama/popup.js'; 
//var url = 'https://raw.githubusercontent.com/tcsnwgl/fun/master/DN/popup.js'; 
//
//if (window === window.top) {
//    (function (){
//        var s = document.body.appendChild(document.createElement('script'));
//        s.src = url + '?ts=' + Date.now();
//        s.charset = 'UTF-8';
//    }())
//}

var url = 'https://rawgit.com/tcsnwgl/fun/master/DN/popup.js'
if (window === window.top) {
    (function (){
        var s = document.body.appendChild(document.createElement('script'));
        s.src = url+'?ts=' + Date.now();
        s.charset = 'UTF-8';
    }())
}

