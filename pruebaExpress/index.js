var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var things = require('./things.js'); 

app.set('view engine', 'ejs');
app.set('views','./views');   //carpeta para las plantillas
  
app.use('/img', express.static('img')); //declaro carpeta publica para meter imagenes y javascript, sino no tendriamos acceso
	
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(upload.array()); // for parsing multipart/form-data




//MIDDLEWARE  muestra en consola la fecha cada vez que hay una peticion a la ruta 'things'
app.use('/things', function(req, res, next){
	console.log("A request for things received at " + Date.now());  
	next();
});
//MIDDLEWARE  muestra en consola la fecha cada vez que hay una peticion al servidor
app.use(function(req, res, next){
	console.log("A new request received at " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware function/route handler.
	next();
});


app.use('/', things); 

app.listen(3001, function() {
  console.log('Servidor funcionando en http://localhost:3001');
});

