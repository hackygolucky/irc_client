var net = require('net');


var client = net.createConnection(6667, 'irc.freenode.net', function () {
	console.log('client connected');
	client.write('world\r\n');
})

client.setEncoding('utf-8');

// required info by servers
client.on('connect', function () {
	client.write('NICK wackadoodle\r\n');
	client.write('USER wackadoodle\r\n 0 * :realname\r\n');
	client.write('JOIN #node.js\r\n)')
});

client.on('data', function (data) {
	data = data.replace('\r\n', '');

	console.log(data);
})

