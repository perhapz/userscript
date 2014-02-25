// ==UserScript==
// @name           heyzoPlayer
// @namespace      null
// @description    Replace heyzo rtms player
// @version        1.0.0
// @updateURL      https://raw.github.com/perhapz/userscript/master/HeyzoPlayer.user.js
// @include        http://www.heyzo.com/moviepages/*
// ==/UserScript==

/*jshint browser:true, jquery:true, undef:true, unused:false, multistr:true */

//http://m.heyzo.com/members/contents/3000/0417/heyzo_lt_0417_full.mp4
//http://m.heyzo.com/members/contents/3000/0417/heyzo_mb_0417_full.mp4
//http://m.heyzo.com/contents/3000/0417/sample.mp4
//http://m.heyzo.com/contents/3000/0417/sample_low.mp4
function main() {
	var id = location.pathname.match(/\d+/)[0];
	var status = '';
	if ($('.super').is('span')) {
		status = '/super/';
	}
	else if ($('.deluxe').is('span')) {
		status = '/deluxe/';
	}
	var video = '<video id="video" width="100%" height="100%" onplay="seek()" controls preload="none" poster="http://www.heyzo.com/contents/3000/' + id + '/images/player_thumbnail.jpg"><source src="http://m.heyzo.com/members/contents/3000/' + status + id + '/heyzo_mb_' + id + '_full.mp4" /></video>';
	$('#main-player_wrapper').empty().css('height', 450).append(video);
}

function seek() {
	var time =  $('.capture script').text().match(/\d+(?=\))/g);
	$('.sample-capture').off()
						.click(function() {
							$('video')[0].currentTime = time[$(this).index() - 1 ];
						});
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + main + ')();'));
script.appendChild(document.createTextNode(seek));
document.body.appendChild(script);

