'use strict';

// sets user default
var user = 'KB';
// sets momentJS default
var now = moment().calendar();

// ///////////////////////////////////////////////
// ///////////////////////////////////// Templates
// ///////////////////////////////////////////////
var chatBox = _.template($('.chatBoxTemplate').text());


// ///////////////////////////////////////////////
// ///////////////////////////////////// Fetch API
// ///////////////////////////////////////////////
// server url variable
var serverURL = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages';
// getJSON, saved in the json variable
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chatApi) {
	renderChat(chatApi);
});


// ///////////////////////////////////////////////
// ///////////////////////////////Render functions
// ///////////////////////////////////////////////
function renderChat(data){
	data.forEach(function(info){
		if(info.user && info.time && info.message) {
		var rendered = chatBox(info);
		_.last( rendered, [1])
		$('.main').prepend(rendered);
	}});
}

function Message(user, message, time) {
	this.user = user || 'KB';
	this.message = message || 'Empty message?!';
	this.time = time || 'Immediately.';
	this.meta = 'very m374';
	this.appID = 'kevbost';
}

function update(info) {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

$('button').click(function(){
	var message = $('.textfield2').val();
	var time = now;
	var postMessage = new Message(user, message, time);
	update(postMessage);
	$.get('http://tiny-pizza-server.herokuapp.com/collections/chat-messages')
	alert("success");
	location.reload();
});



$( ".main" ).scrollTop( 300 )


// (function() {
// 	setInterval(function() {
// 		$.getJSON(serverURL).done(function(chatApi) {
// 			renderChat(chatApi);
// 		});
// 	}, 3000);
// })();

// $('.main').append(chatBox);