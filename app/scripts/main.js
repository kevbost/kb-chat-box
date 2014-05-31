'use strict';
// ///////////////////////////////////////////////
// ///////////////////////////////////// Templates
// ///////////////////////////////////////////////

var chatBox = _.template($('.chatBoxTemplate').text());

// ///////////////////////////////////////////////
// ///////////////////////////////////// Fetch API
// ///////////////////////////////////////////////

var json = $.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chatApi) {
	renderChat(chatApi);
});

// ///////////////////////////////////////////////
// ///////////////////////////////Render functions
// ///////////////////////////////////////////////

// Repos
// function renderChat(rendering) {
// 	rendering.forEach(function(module) {
// 		var rendered = chatBox(module);
// 		$('.container').prepend(rendered);
// 		// $('.participationGraph').css({'width':'100px','background-color':'orange'});
// 	});
// }

function renderChat(data) {
	data.forEach(function(info) {
		var rendered = chatBox(info);
		$('.container').prepend(rendered);
		// $('.participationGraph').css({'width':'100px','background-color':'orange'});
	});
}

$('.main').scrollTop(480)
$('.textfield1').val('kevbost');

$('.button1').click(function() {
	var user = $('.textfield1').val();
	console.log('var user is ', user);
	// $('#button1').remove();
	// $('#textfield1').remove();
});

function ClearFields() {
	$('.textfield1').val('');
	$('.textfield2').val('');
}

function Chat() {
	// this.name = user;
}


// items.forEach(function(item){
//     // var totalString = firstPart + item.Images[0].url_570xN + lastPart
//     // $('.main').append(totalString)
//     var totalString = '<a href="' + item.url + '"style="background-image: url(' + item.Images[0].url_570xN + ') " target="_blank" class="box"></a>'
//     $('.main').append(totalString)
// })

$('.main').append(chatBox);