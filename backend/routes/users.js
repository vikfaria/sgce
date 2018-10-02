var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '10.2.1.129',
	user: 'u882784377_fred1',
	password: 'fredy-12345',
	database: 'u882784377_fred1'
});


router.post('/', function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  connection.query(
      "SELECT * FROM tblusuario WHERE usuarioNome = ? AND usuarioSenha = ?",
  	   [username, password], function(err, row, field){

  	   	if(err){
  	   		console.log(err);
  	   		res.send({'success': false, 'message': 'Não é possive se conectar a Base de Dados'});
  	   	}
  	   	if(row.length > 0 ){
  	   		res.send({'success': true, 'user': row[0].username });
  	   	}else{
  	   		res.send({'success': false, 'message': 'Utilizador não existe'});
  	   	}

  	   });
});

module.exports = router;
