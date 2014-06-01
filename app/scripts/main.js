'use strict';

var user = 'KB';

// ///////////////////////////////////////////////
// ///////////////////////////////////// Templates
// ///////////////////////////////////////////////
var chatBox = _.template($('.chatBoxTemplate').text());


// ///////////////////////////////////////////////
// ///////////////////////////////////// Fetch API
// ///////////////////////////////////////////////
var serverURL = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages';
var json = $.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chatApi) {
	renderChat(chatApi);
});


// ///////////////////////////////////////////////
// ///////////////////////////////Render functions
// ///////////////////////////////////////////////
function renderChat(data){
	data.forEach(function(info){
		if(info.user && info.time && info.message) {
		var rendered = chatBox(info);
		$('.main').prepend(rendered);
	}});
}

function Message(user, message, time) {
	this.user = user || 'KB';
	this.message = message || 'Empty message?!';
	this.time = time || 'Immediately.';
	this.meta = 'very m374';
}

function update(info) {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

$('button').click(function(){
	var message = $('.textfield2').val();
	var time = Date.now();
	var postMessage = new Message(user, message, time);
	update(postMessage);
	$.get('http://tiny-pizza-server.herokuapp.com/collections/chat-messages')
	alert("success");
});

// (function() {
// 	setInterval(function() {
// 		$.getJSON(serverURL).done(function(chatApi) {
// 			renderChat(chatApi);
// 		});
// 	}, 3000);
// })();

// $('.main').append(chatBox);