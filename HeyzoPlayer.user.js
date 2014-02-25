// ==UserScript==
// @name           heyzoPlayer
// @namespace      null
// @description    Replace heyzo rtms player
// @version        1.0.1
// @updateURL      https://raw.github.com/perhapz/userscript/master/HeyzoPlayer.user.js
// @include        http://www.heyzo.com/moviepages/*
// ==/UserScript==

/*jshint browser:true, jquery:true, undef:true, unused:false, multistr:true */

//img=http://www.heyzo.com/contents/3000/0494/images/player_thumbnail.jpg&
//video=http://www.heyzo.com/contents/3000/0494/sample_low.mp4

function main() {
	var id = location.pathname.match(/\d+/)[0];
	var video = '<video id="video" width="100%" height="100%" onplay="seek()" controls preload="none" poster="http://www.heyzo.com/contents/3000/' + id + '/images/player_thumbnail.jpg"><source src="http://www.heyzo.com/contents/3000/' + id + '/sample_low.mp4" /></video>';
	$('#main-player_wrapper').empty().css('height', 450).append(video);
}

function addJQuery(func) {
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('(' + func + ')();'));
    document.body.appendChild(script);
}

addJQuery(main);

