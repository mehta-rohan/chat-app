const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname + './../public');
const port = process.env.PORT || '3000';


var app = express();

app.use(express.static(publicPath));

app.listen(port,()=>{
	console.log(`sever up @ ${port}`);
});



/*
git remote add origin https://github.com/mehta-rohan/chat-app.git
git push -u origin master*/