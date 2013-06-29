// ==UserScript==
// @name           heyzoPlayer
// @namespace      null
// @description    Replace heyzo rtms player
// @version        1.0.0
// @updateURL      https://raw.github.com/perhapz/userscript/master/HeyzoPlayer.user.js
// @include        http://www.heyzo.com/moviepages/*
// ==/UserScript==

/*jshint browser:true, jquery:true, undef:true, unused:false, multistr:true */

function main() {
    var video = $('#embed').attr('value').replace(/width="400" height="224"/g, 'width="100%" height="100%"').replace(/&link.+blank|_low/g, '');
    $('#main-player_wrapper').empty().append(video);
}


function addJQuery(func) {
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('(' + func + ')();'));
    document.body.appendChild(script);
}

addJQuery(main);