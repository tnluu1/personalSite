var express = require('express'),
	router = express.Router(),
	nunjucks = require('nunjucks'),
	fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Thien Luu' });
});

/* GET pdf */
router.get('/asset', function(request, response){
  var tempFile="//floating-basin-41540.herokuapp.com/doc/GenResume03.26.pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

module.exports = router;
