const express = require('express')

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/teste', function (req, res) {

  res.send('Hello World!')

})

app.get('/SendPostMessage', function (req, res) {

  console.log(req.query)

  console.log(res)

  res.send('Hello World!')


})


app.post('/SendPostMessage', function (req, res) {

  console.log(req.query)

  console.log(res)

  res.send('Hello World!')


})


app.listen(5252, function () {

  console.log('Example app listening on port 5252!')

})