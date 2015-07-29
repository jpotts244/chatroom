var net = require('net');
var port = 2002;
var userConnections = [];

var server = net.createServer();
server.on("connection", function (connection) {
	userConnections.push(connection);
	connection.write("Welcome to the chatroom!");
	
	
		connection.on('data', function (data){
			userConnections.forEach(function (message){
				message.write(data);
		
			})
	
		})
}) 



server.listen(port, function () {
	console.log("Listening for chats");
});