'use strict';

var fs = require('fs');
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })
app.get('/:date',(req,res)=>{
    let date  = new Date(isNaN(req.params.date)? Date.parse(req.params.date):req.params.date*1000);
     
    res.end(JSON.stringify(
        date == "Invalid Date"? {
            unix: null,
           natural: null
            
        }:{
            unix: date.getTime()/1000,
            natural: date.toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric" })
        }


    ));

});
// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

