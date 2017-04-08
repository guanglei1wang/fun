// function play_m3u8(url) {
//   b = document.body.appendChild(
//       document.createElement('div'));  // background layer
//   b.style.height = "100%";
//   b.style.width = "100%";
//   b.style.opacity = "0.95";
//   b.style.position = "fixed";
//   b.style.zIndex = "9998";
//   b.style.top = "0";
//   b.style.left = "0";
//   b.style.background = "#000";

//   s = document.body.appendChild(document.createElement('div'));  // new
//   palyer
//   s.id = 'dnmama';
//   s.style.position = "fixed";
//   s.style.top = "50%";
//   s.style.left = "50%";
//   s.style.transform = "translate(-50%,-50%)";
//   s.style.width = "1000px";
//   s.style.height = "630px";
//   s.style.zIndex = 9999;
//   // s.style.display = "none";
//   s.innerHTML = '<iframe border="0" src="//cao.me/dnmama/dnplayer.php?url=' +
//       url +
//       '" width="100%" height="630" marginwidth="0" framespacing="0"
//       marginheight="0" frameborder="0" scrolling="no" vspale="0"
//       noresize=""></iframe><div id="close2" style="width: 20px; height: 20px;
//       line-height: 20px; text-align: center; position: absolute; color:
//       rgb(255, 255, 255); font-size: 20px; top: 5px; right: 5px; text-shadow:
//       rgb(0, 0, 0) 0px 0px 2px; font-weight: bold; font-family: Garamond;
//       cursor: pointer;">×</div>';

//   x2 = document.getElementById("close2");  // close button for cao.me iframe
//   x2.addEventListener("click", function() {
//     document.body.removeChild(b);
//     document.body.removeChild(s);
//   });
// }

// var number_normal_movies = $('.bflb li').length;


// if (number_normal_movies > 0) {
//   normal_movies = $('.bflb li a');
// }


// for (i = 0; i < number_normal_movies; i++) {
//   if ($('.bflb ul li:nth-child(' + String(i + 1) + ') .bfan-n a').length > 0)
//   {
//     $('.bflb ul li:nth-child(' + String(i + 1) + ') .bfan-n a')
//         .attr(
//             "onclick", 'play_m3u8("' +
//                 $('.bflb ul li:nth-child(' + String(i + 1) + ') .bfan-n
//                 a')[0]
//                     .href +
//                 '");return false;');
//     $('.bflb ul li:nth-child(' + String(i + 1) + ') .bfan-n a')
//     [0].href = "javascript:void(0)";
//     $('.bflb ul li:nth-child(' + String(i + 1) + ') .bfan-n')
//     [0].style.background = "#9bca3e";
//     $('.bflb ul li:nth-child(' + String(i + 1) + ') .bfan-n a')
//     [0].style.color = "#ffffff";
//   }
// }

// // $.getJSON(
// //     'http://www.whateverorigin.org/get?url=' +
// //         encodeURIComponent(
// //
// 'http://cao.me/dnmama/detect.php?url=http://www.dnvod.eu/Movie/detail.aspx?id=SydfqimLwOU%3d')
// //             +
// //         '&callback=?',
// //     function(data) {
// //       $('.bflb1').html(data.content);
// //       var number_vip_movies = $('.bflb1 li').length;
// //       if (number_vip_movies > 0) {
// //         vip_movies = $('.bflb1 li a');
// //       }
// //       for (i = 0; i < number_vip_movies; i++) {
// //         if ($('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
// //                 .length > 0) {
// //           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
// //               .attr(
// //                   "onclick", 'play_m3u8("' +
// //                       $('.bflb1 ul li:nth-child(' + String(i + 1) +
// //                         ') .bfan-v a')[0]
// //                           .href +
// //                       '");return false;');
// //           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
// //           [0].href = "javascript:void(0)";
// //           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v')
// //           [0].style.background = "#9bca3e";
// //           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
// //           [0].style.color = "#ffffff";
// //         }
// //       }
// //     });



// var vip_list = $.get(
//     'https://cao.me/dnmama/detect.php?url=' + window.location.href,
//     function(text) {
//       $('.bflb1').html(text);
//       var number_vip_movies = $('.bflb1 li').length;
//       if (number_vip_movies > 0) {
//         vip_movies = $('.bflb1 li a');
//       }
//       for (i = 0; i < number_vip_movies; i++) {
//         if ($('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
//                 .length > 0) {
//           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
//               .attr(
//                   "onclick", 'play_m3u8("' +
//                       $('.bflb1 ul li:nth-child(' + String(i + 1) +
//                         ') .bfan-v a')[0]
//                           .href +
//                       '");return false;');
//           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
//           [0].href = "javascript:void(0)";
//           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v')
//           [0].style.background = "#9bca3e";
//           $('.bflb1 ul li:nth-child(' + String(i + 1) + ') .bfan-v a')
//           [0].style.color = "#ffffff";
//         }
//       }
//     });
// $('.r-tit b strong').html("VIP 免费看！by: <a
// href='http://cao.me'>cao.me</a>");
// document.cookie = "dn_token=62388db1dd594d1b9258100c68ee68ab";
// document.cookie =
//     "user=Fv9ZCWRxr14LMOQhZPB5C9MZjjmhQmQz9BzcZ3zK1U7NtK+spr5rvTUq37gN+XHenDHmkqSiJ8kSSVdFXGXDXu7yFbydzLd7X5vByvVriMPqUyr+iq3Od5/AiQ9BWNAbLReiXgcLBmP4KDmD6ILMez+bTOc7sLSSICLTfF/VlYpCV2K3wyRWYxuFGFNbG2ibe7G68ca8NEyKf92O";


// f = http:
// www.dnvod.eu/_player/954684278/geturl.swf&loaded=loadedHandler&s=3&b=0&c=0&a=GetResource.ashx%3Fid%3D%2FLGiGIxGGec%3D%26key%3D3560c3b07237434caa221826d00105d0&i=/images/logo-group.jpg&l=//www.dnvod.eu/upload/gaming/2a28ead9c1c340f7a0f9a070bb6fcc65.swf|//www.dnvod.eu/upload/gaming/5cb51647971547bab8a66e561e279660.jpg|//www.dnvod.eu/upload/gaming/32e95e9b432b4e5d8cdd45d4c6c8c1cb.jpg|//www.dnvod.eu/upload/gaming/61faef08210a4b95a9c082a0c5064f57.jpg|//www.dnvod.eu/upload/gaming/0c59be1f6e4f4f8291f51d2f678c4c17.jpg|//www.dnvod.eu/upload/gaming/7d8f1c3c12384583a8451da9ece1a91f.jpg|//www.dnvod.eu/upload/gaming/e8b9fec9c3bf4169a7a9efdefb32c0af.jpg&r=/images/LoadTest.aspx?id=343|/images/LoadTest.aspx?id=180|/images/LoadTest.aspx?id=171|/images/LoadTest.aspx?id=78|/images/LoadTest.aspx?id=193|/images/LoadTest.aspx?id=196|/images/LoadTest.aspx?id=331&t=10|10|10|10|10|10|10&e=5&d=//www.dnvod.eu/upload/gaming/9e837bb8aff646a5a952c829442d037a.jpg|//www.dnvod.eu/upload/gaming/dda1cd7266634b51bb9e17b098138a26.jpg|//www.dnvod.eu/upload/gaming/8a3e01dac51545acae1dd6959fbdeba7.jpg|//www.dnvod.eu/upload/gaming/a860371ed7a443faa130e6e6543b4350.gif|//www.dnvod.eu/upload/gaming/a8f91f14cf094da4be7163afd238bd0f.gif|//www.dnvod.eu/upload/gaming/291ec42dde7441a9915ec95266fdbaf3.jpg&u=/images/LoadTest.aspx?id=123|/images/LoadTest.aspx?id=344|/images/LoadTest.aspx?id=347|/images/LoadTest.aspx?id=348|/images/LoadTest.aspx?id=346|/images/LoadTest.aspx?id=345&pub_fl=300000&pub_it=600000&pub_io=30000&pub_link=/images/LoadTest.aspx?id=265|/images/LoadTest.aspx?id=320|/images/LoadTest.aspx?id=334|/images/LoadTest.aspx?id=335|/images/LoadTest.aspx?id=333|/images/LoadTest.aspx?id=332&pub_surl=//www.dnvod.eu/upload/gaming/f0f98267048c4b488f7384de5aeb4cb1.jpg|//www.dnvod.eu/upload/gaming/2d930dc82e544dda880bf4e3eb2f8842.jpg|//www.dnvod.eu/upload/gaming/44100e6604fa4b879ff5d5ed8bc89a24.jpg|//www.dnvod.eu/upload/gaming/2269a867fe864b44b67608f74d9ca1d8.gif|//www.dnvod.eu/upload/gaming/a56e620f4e834bdf94de6423478ec8a0.gif|//www.dnvod.eu/upload/gaming/182c16b908b44910a1ac6826aa43e3e7.gif&p=1&h=4



$('#a1 embed')
    .attr(
        "flashvars",
        /(f=.*?&)/.exec($('#a1 param[name=flashvars]').attr("value"))[1] +
            /(a=.*?&)/.exec($('#a1 param[name=flashvars]').attr("value"))[1] +
            /(s=.*?&)/.exec($('#a1 param[name=flashvars]').attr("value"))[1] +
            /(p=.*?&)/.exec($('#a1 param[name=flashvars]').attr("value"))[1])
        var obj = $("#a1 embed");
obj.remove();
$("#a1 object").append(obj);
