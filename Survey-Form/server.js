var express = require('express');
var session = require('express-session');

var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname + '/static'));

app.use(session({
    secret:'activeSession',
    resave:false,
    saveUninitialized:true,
    cookie: {maxAge:100000}

}))


app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response) {

    response.render('index')

})

app.listen(8000, function() {

    console.log('Listening on port 8000');

})

app.post('/info', function(request,response){

    console.log(request.body);

    response.render('info',{info:request.body});


})

app.get("/", function(req, res){


    console.log('~Root~');
    res.render("index");
    
})