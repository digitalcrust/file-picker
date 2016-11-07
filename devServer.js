var path = require('path');
var express = require('express');
var app = express();
//var server = require('http').createServer(app);
var server = require('http').Server(app);
var io = require('socket.io')(server);
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static('node_modules/socket.io-client'))
app.use(express.static('node_modules/jquery/dist'))
app.use(express.static('src/js'))
app.use(express.static('src/images'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(3000);

// app.listen(3000, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Listening at http://localhost:3000');
// });
// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//     io.emit('chat message', msg);
//   });
//   setInterval(() => {
//     let modelChange = {drummer:"Ringo"}
//     io.emit('chat message', modelChange)
//     console.log('chat message')
//     return true
//   }, 1000);
// });
