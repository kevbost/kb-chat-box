'use strict';

var user = 'KB';

// User Login
$('.submit-username').click(function(){
	var user = $('.input-username').val();
	$('.identity, .main').addClass("activate");
	alert('Yo whatsup ' + user + '?');
	$('.container').scrollTop($('.main')[0].scrollHeight);
});

// sets momentJS default
var now = Date.now();
// var now = moment().calendar();

// ///////////////////////////////////////////////
// ///////////////////////////////////// Templates
// ///////////////////////////////////////////////
var chatBox = _.template($('.chatBoxTemplate').text());


// ///////////////////////////////////////////////
// ///////////////////////////////////// Fetch API
// ///////////////////////////////////////////////
// getJASON
function loadChat () {
	// $('.main').html('');
	$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chatApi) {
	renderChat(chatApi);
});
}


// ///////////////////////////////////////////////
// ///////////////////////////////Render functions
// ///////////////////////////////////////////////
function renderChat(data){
	data = data.splice(0,50);
	data.forEach(function(info){
		if(info.user && info.time && info.message) {
		var rendered = chatBox(info);
		_.last( rendered, [1])
		$('.main').prepend(rendered);
	}});
}

function Message(user, message, time) {
	this.user = user || 'KB';
	this.message = message || 'KB just submitted an empty message from his local chat client.';
	this.time = time || 'Immediately.';
	this.meta = 'very m374';
	this.appID = 'kevbost';
}

function update(info) {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

$('.submit-message').click(function(){
	var message = $('.textfield2').val();
	var time = now;
	var postMessage = new Message(user, message, time);
	update(postMessage);
	alert("success");
});

// setTimeout(function() {
//       loadChat();
// }, 5000);

loadChat();

// setInterval(loadChat,1000);



// RELOAD Works but doesnt refresh from json
// var auto_refresh = setInterval(function () {
//     $('.container').fadeOut('slow', function() {
//         $(this).load('/some/url', function() {
//             $(this).fadeIn('slow');
//         });
//     });
// }, 1000); // refresh every 15000 milliseconds

// 2:08 PM DATE
// yeah, it's similar to setInterval, but instead of re-running it every X milliseconds, 
// it waits that time instead and then runs it....note it's not a silver bullet though for 
// getting things to happen at certain times. You'll have to remember that JS is 
// asynchronous and will keep looking for shit to do. I.e. if you put a setTimeout 
// into a for/forEach loop the loop will likely be completed before your set timeouts even start


// $( ".main" ).scrollTop( 300 )


// (function() {
// 	setInterval(function() {
// 		$.getJSON(serverURL).done(function(chatApi) {
// 			renderChat(chatApi);
// 		});
// 	}, 3000);
// })();

// $('.main').append(chatBox);