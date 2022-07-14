var express = require ('express')();
var server = require('http').createServer(express);
var io = require('socket.io')(server);

io.on('connection', function(){
    console.log('user connected with socketId '+socket.id);
    socket.on('event', function(data){
        console.log('event fired');
    });
   
    socket.on('disconnect', function(){
    console.log('user disconnected');
   });
});
    
server.listen(3000);


