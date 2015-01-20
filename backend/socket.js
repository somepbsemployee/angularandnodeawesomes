var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

io.on('connection', function(socket) {
	socket.on('epicMessage', function(data) {
		console.log('fucking datas', data);
		socket.employeeId = data.employeeId;

		io.sockets.emit('clientEpic', { senderId: socket.id, message: data });
	});

	socket.on('onAbsenceCreate', function(data) {
		socket.emit('notifyAbsence', { data: 'dsfsdfsdf' });
	});
});