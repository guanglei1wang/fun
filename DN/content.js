//var url = '//cao.me/dnmama/popup.js'; 
//
//if (window === window.top) {
//    (function (){
//        var s = document.body.appendChild(document.createElement('script'));
//        s.src = url + '?ts=' + Date.now();
//        s.charset = 'UTF-8';
//    }())
//}


var url = 'file:///Users/guangleiwang/phD/kernel/codes/Js_d3/DN/popup.js'; 
if (window === window.top) {
    (function (s){
        s = document.body.appendChild(document.createElement('script'));
        s.src = 'file:///Users/guangleiwang/phD/kernel/codes/Js_d3/DN/popup.js'; 
        s.charset = 'UTF-8';
    }())
}

