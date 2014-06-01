/* global describe, it */

(function() {
'use strict';

describe('Server', function() {

	it('should pass if data is being pulled from the server.', function() {
		var api = function() {
			var apiJSON = 'http://tiny-pizza-server.herokuapp.com/collections/chat-messages';
		};

	expect(apiJSON.length).to.be(64);
	});
});

describe('Message Input', function() {
	it('should Alert user if message string is less than 4 characters', function() {
		$('.button2').click(function() {
			var textlength = function() {
				$('.textfield2').val();
			};
		});
		expect(textlength.length).to.at.least(4);
		});

	it('should accept up to 200 characters', function(){
		var characterLimit = function(){
			$('.textfield2').val();
		};
	});
	expect(characterLimit).to.be.below(200)
	});
})();

// describe('image slider() functions', function() {

// 	it('should only accept an array for its images argument', function() {
// 		var badSlider = function() {
// 			slider("string");
// 		};

// 		expect(badSlider).to.throw(Error);
// 	});