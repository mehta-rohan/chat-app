var socket = io();
socket.on('connect', function() {
	console.log('Hey I know');
	socket.emit('sendTask', {
		from: 'rohan', 
		to: 'bitch',
		priority: 'high',
		task: 'Create you own company ART'
	});
});

socket.on('disconnect', function() {
	console.log('Where are you?');
});

socket.on('newMsg', function(msg) {
	console.log('--->', msg);
	var li = jQuery('<li></li>');
	li.text(`${msg.from} : ${msg.text}`);
	jQuery('#msgs').append(li);
});

jQuery('#msg-from').on('submit',function(e){
	e.preventDefault();
	console.log('about to fire event');
	socket.emit('createMsg',{
		from:jQuery('[name=name]').val(),
		text:jQuery('[name=msg]').val()		
	},function(){

	});
});