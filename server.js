const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/app/public/home.html`))
});

app.get('/survey', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/app/public/survey.html`))
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, ()=>{
    console.log(`App listening on PORT: ${PORT}`)
});