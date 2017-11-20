// dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var controller = require('./controller/controller');
// var cores = require('./routes/core')
var routes = require('./routes/routes');

var app = express();

// mongoose
// mongoose.connect('mongodb://localhost/ss');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(cores.permission);
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express Routes
// app.get('/api/:ip',controller.db);
// app.get('/api/:ip/:db',controller.collection);
  // app.get('/api/:collection',controller.get);
  // app.get('/api/:collection/:id',controller.getById);
  // app.post('/api/:collection',controller.post);
  // app.put('/api/:collection/:id',controller.put);
  // app.delete('/api/:collection/:id',controller.delete);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


module.exports = app;

// var restify = require("restify");
// var controller = require("./controller/controller");
// // var express = require('express');
// // var app = express();
// var bodyParser = require('body-parser');

// // configure the app to use bodyParser()
// // app.use(bodyParser.urlencoded({
// //     extended: true
// // }));
// // app.use(bodyParser.json());

// // var server = restify.createServer({
// //   formatters: {
// //     'application/foo': function formatFoo(req, res, body) {
// //       if (body instanceof Error)
// //         return body.stack;
// //
// //       if (Buffer.isBuffer(body))
// //         return body.toString('base64');
// //
// //       return util.inspect(body);
// //     }
// //   }
// // });

// var server = restify.createServer();
// server.use(bodyParser.urlencoded({
//     extended: true
// }));
// server.use(bodyParser.json());
// // Resitfy Routes
// server.get('/api/:ip',controller.db);
// server.get('/api/:ip/:db',controller.collection);
// server.get('/api/:ip/:db/:collection',controller.get);
// server.get('/api/:ip/:db/:collection/:id',controller.getById);
// server.post('/api/:ip/:db/:collection',controller.post);
// server.put('/api/:ip/:db/:collection/:id',controller.put);
// server.del('/api/:ip/:db/:collection/:id',controller.delete);

// // Express Routes

// // app.get('/api/:ip',controller.db);
// // app.get('/api/:ip/:db',controller.collection);
// // app.get('/api/:collection',controller.get);
// // app.get('/api/:collection/:id',controller.getById);
// // app.post('/api/:collection',controller.post);
// // app.put('/api/:collection/:id',controller.put);
// // app.delete('/api/:collection/:id',controller.delete);

// // Restify Server  Listining
// server.listen(6008, function() {
//   console.log('%s listening at %s', server.name, server.url);
// });

// // Express Server Listining
app.listen(6008, function() {
  console.log('%s listening at :: 6008');
});
