'use strict';

var user = 'KB'
$(".input-username").prop('disabled', true);


// User Login
$('.submit-username').click(function(){
	var user = $('.input-username').val();
	$('.identity, .main').addClass("activate");
	// alert('Yo whatsup ' + user + '?');
	$('.container').scrollTop($('.main')[0].scrollHeight);
});

// sets momentJS default
var now = Date.now();

// //////////////////////////////////////////////////// Template
var chatBox = _.template($('.chatBoxTemplate').text());

// //////////////////////////////////////////////////// getJASON
function loadChat () {
	// $('.main').html('');
	$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chatApi) {
	renderChat(chatApi);
});
}

// ////////////////////////////////////////////// Render Function
function renderChat(data){
	data = data.splice(0,50);
	data.forEach(function(info){
		if(info.user && info.time && info.message) {
		var rendered = chatBox(info);
		_.last( rendered, [1])
		$('.main').prepend(rendered);
	}});
}

// /////////////////////////////////////////// Message Constructor
function Message(user, message, time) {
	this.user = user || 'KB';
	this.message = message || 'A random user just submitted an empty message from his local chat client.';
	this.time = time || 'Immediately.';
	this.meta = 'very m374';
	this.appID = 'kevbost';
}

// ///////////////////////////////////////////////// Post function
function update(info) {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

// //////////////////////////////////// Click to run post function
$('.submit-message').click(function(){
	var user
	var message = $('.textfield2').val();
	var time = now;
	var postMessage = new Message(user, message, time);
	update(postMessage);
	alert("success");
});

loadChat();

// setInterval(loadChat,1000);