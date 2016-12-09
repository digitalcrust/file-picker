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
app.use(express.static('src/js'))
app.use(express.static('src/images'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(3000);
