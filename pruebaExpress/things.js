var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	var drink =[
  	{name: 'martini', drunkness: 5},
  	{name: 'Vodka', drunkness: 10},
  	{name: 'Ron', drunkness: 11}
  	]
  	
  	res.render('home',{
  	name:"TutorialsPoint",
  	url:"http://www.tutorialspoint.com",
  	drinks:drink
	});
});


router.get('/contacto', function(req,res){
	res.render('partials/form',{
		
	});
});
router.post('/contacto', function(req, res){
    console.log(req.body);
    res.render('partials/form');
});



router.get('/bienvenido/:nombre', function(req, res) {
  res.send('Hola ' + req.params.nombre);
});

router.get('/hotel/:nombre', function(req, res) {
  res.send('Hola estas en el hotel ' + req.params.nombre);
});

router.get('/hotel/:nombre', function(req, res) {
  res.send('Hola estas en el hotel ' + req.params.nombre);
});

router.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

router.get('*', function(req, res){
    res.send('lo siento pero la ruta es incorrecta');
});

//export this router to use in our index.js
module.exports = router;