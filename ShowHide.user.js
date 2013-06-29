// ==UserScript==
// @name           ShowHide
// @namespace      null
// @description    Move hidden & attachment block to top, show actual image.
// @version        1.0.3
// @updateURL      https://raw.github.com/perhapz/userscript/master/ShowHide.user.js
// @include        http://64.78.167.63/bbs/viewthread.php*
// @include        http://64.78.167.62/bbs/viewthread.php*
// ==/UserScript==

//Move hiddin content and attachment to top
var hide = document.getElementsByClassName('showhide')[0];
var attach = document.getElementsByClassName('postattachlist')[0];
var title = document.getElementById('threadtitle');
if (hide) {
  title.appendChild(hide);
}
if (attach) {
  title.appendChild(attach);
}
//Replace link of image, hover to show actual image
//Smaple: thumb > actual
//t3.imgchili.com > i3.
//img4.imagetwist.com/th/ > img4.imagetwist.com/i/
//img51.picleet.com/i/00945/012345678912_t.jpg > 012345678912.jpg
var img = document.getElementsByTagName('img');
var pattSite = /imgchili\.com|picleet\.com|imagetwist\.com/i;
pattSite.compile(pattSite);
for (var i = 0; i < img.length; i++) {
  var a = img[i].parentNode;
  if (a.tagName === 'A') {
    var site = pattSite.exec(img[i].src);
    if (site) {
      img[i].addEventListener('mouseover', loadPic, false);
      switch (site[0]) {
      case 'imgchili.com':
        a.href = img[i].src.replace('http://t', 'http://i');
        break;
      case 'imagetwist.com':
        a.href = img[i].src.replace('/th/', '/i/');
        break;
      case 'picleet.com':
        a.href = img[i].src.replace('_t.jpg', '.jpg');
        break;
      }
    }
  }
}

function loadPic() {
  this.removeEventListener('mouseover', loadPic, false);
  this.src = this.parentNode.href;
  this.removeAttribute('width');
  this.removeAttribute('height');
}