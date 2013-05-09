/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , rest = require('./routes/rest')
    , http = require('http')
     ,SDK=require('./SDK/index')
    , path = require('path');
routes.successRoute=require('./routes/success');
routes.main=require('./routes/main');

var app = express();


// all environments

app.engine('hbs', require('hbs').__express);
app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/success',routes.successRoute.index)
app.get('/main',routes.main.index)
app.post('/rest', SDK.index);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
