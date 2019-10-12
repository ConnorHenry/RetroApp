const express = require('express');
const socket = require('socket.io');
const app = express();
const port = 4000;

var server = app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});

app.get('/demo', (req, res) => res.render(
    'home.ejs'
))

app.use(express.static('public'));
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
});

console.log('adding comment');