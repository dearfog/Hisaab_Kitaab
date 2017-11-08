var restify = require("restify");
var controller = require("./controller/controller");
// var express = require('express');
// var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// var server = restify.createServer({
//   formatters: {
//     'application/foo': function formatFoo(req, res, body) {
//       if (body instanceof Error)
//         return body.stack;
//
//       if (Buffer.isBuffer(body))
//         return body.toString('base64');
//
//       return util.inspect(body);
//     }
//   }
// });

var server = restify.createServer();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
// Resitfy Routes
server.get('/api/:ip',controller.db);
server.get('/api/:ip/:db',controller.collection);
server.get('/api/:ip/:db/:collection',controller.get);
server.get('/api/:ip/:db/:collection/:id',controller.getById);
server.post('/api/:ip/:db/:collection',controller.post);
server.put('/api/:ip/:db/:collection/:id',controller.put);
server.del('/api/:ip/:db/:collection/:id',controller.delete);

// Express Routes

// app.get('/api/:ip',controller.db);
// app.get('/api/:ip/:db',controller.collection);
// app.get('/api/:collection',controller.get);
// app.get('/api/:collection/:id',controller.getById);
// app.post('/api/:collection',controller.post);
// app.put('/api/:collection/:id',controller.put);
// app.delete('/api/:collection/:id',controller.delete);

// Restify Server  Listining
server.listen(6008, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// Express Server Listining
// app.listen(6008, function() {
//   console.log('%s listening at %s', app.name, app.url);
// });
