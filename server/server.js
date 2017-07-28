const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname + './../public');
const port = process.env.PORT || '3000';
const socketIO = require('socket.io');
const http = require('http');
var app = express();

app.use(express.static(publicPath));

var server = http.createServer(app);

var io = socketIO(server);

io.on('connection',(socket)=>{
	console.log('Hey I got you');

	socket.on('disconnect',()=>{
		console.log('User Gone');		
	})
});

server.listen(port,()=>{
	console.log(`sever up @ ${port}`);
});



/*
git remote add origin https://github.com/mehta-rohan/chat-app.git
git push -u origin master*/