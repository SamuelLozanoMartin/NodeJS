var http = require("http");
var url = require('url');
var cont=0;
var server = http.createServer(function (peticion, respuesta){
   var url =peticion.url;
   if (url.indexOf("favicon.ico")== -1){
   		cont++;
   }
   	respuesta.end("Hola DesarrolloWeb.com - contador: " + cont );
});


server.listen(3000, function(){
   console.log("tu servidor está listo en " + this.address().port);

});

