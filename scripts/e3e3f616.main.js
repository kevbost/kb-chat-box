"use strict";function loadChat(){$.getJSON("http://tiny-pizza-server.herokuapp.com/collections/chat-messages").done(function(a){renderChat(a)})}function renderChat(a){a=a.splice(0,50),a.forEach(function(a){if(a.user&&a.time&&a.message){var b=chatBox(a);_.last(b,[1]),$(".main").prepend(b)}})}function Message(a,b,c){this.user=a||"gh-pages",this.message=b||"A random user just submitted an empty message from his local chat client.",this.time=c||"Immediately.",this.meta="very m374",this.appID="kevbost"}function update(a){$.post("http://tiny-pizza-server.herokuapp.com/collections/chat-messages",a)}var user="KB";$(".input-username").prop("disabled",!0),$(".submit-username").click(function(){$(".input-username").val();$(".identity, .main").addClass("activate"),$(".container").scrollTop($(".main")[0].scrollHeight)});var now=Date.now(),chatBox=_.template($(".chatBoxTemplate").text());$(".submit-message").click(function(){var a,b=$(".textfield2").val(),c=now,d=new Message(a,b,c);update(d),alert("success")}),loadChat();